"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Mic, MicOff, Volume2 } from "lucide-react";
import {
  frequencyToMidi,
  midiToFrequency,
  noteLabel,
  type TunerString,
} from "@/lib/music-tools";

const MIN_FREQUENCY = 38;
const MAX_FREQUENCY = 1400;
const IN_TUNE_CENTS = 5;
const CLARITY_THRESHOLD = 0.82;
const RMS_THRESHOLD = 0.008;

type Reading = {
  frequency: number;
  midi: number;
  cents: number;
  targetIndex: number | null;
};

/**
 * McLeod pitch method (normalized square difference function): robust for
 * voices and string instruments, and cheap enough to run ~20 times a second
 * because it only evaluates lags inside the playable frequency range.
 */
function detectPitch(buffer: Float32Array, sampleRate: number) {
  let rms = 0;
  for (let i = 0; i < buffer.length; i += 1) rms += buffer[i] * buffer[i];
  rms = Math.sqrt(rms / buffer.length);
  if (rms < RMS_THRESHOLD) return null;

  const minLag = Math.floor(sampleRate / MAX_FREQUENCY);
  const maxLag = Math.min(Math.floor(sampleRate / MIN_FREQUENCY), Math.floor(buffer.length / 2));
  const nsdf = new Float32Array(maxLag + 1);

  for (let tau = minLag; tau <= maxLag; tau += 1) {
    let acf = 0;
    let energy = 0;
    const limit = buffer.length - tau;
    for (let i = 0; i < limit; i += 1) {
      const a = buffer[i];
      const b = buffer[i + tau];
      acf += a * b;
      energy += a * a + b * b;
    }
    nsdf[tau] = energy > 0 ? (2 * acf) / energy : 0;
  }

  // Key maxima: the highest point of each positive lobe after the first dip.
  const peaks: number[] = [];
  let tau = minLag;
  while (tau < maxLag && nsdf[tau] > 0) tau += 1;
  while (tau < maxLag) {
    while (tau < maxLag && nsdf[tau] <= 0) tau += 1;
    let best = tau;
    while (tau < maxLag && nsdf[tau] > 0) {
      if (nsdf[tau] > nsdf[best]) best = tau;
      tau += 1;
    }
    if (best < maxLag && nsdf[best] > 0) peaks.push(best);
  }
  if (peaks.length === 0) return null;

  const highest = Math.max(...peaks.map((peak) => nsdf[peak]));
  const chosen = peaks.find((peak) => nsdf[peak] >= highest * 0.9) ?? peaks[0];
  if (nsdf[chosen] < CLARITY_THRESHOLD) return null;

  const left = nsdf[chosen - 1] ?? nsdf[chosen];
  const right = nsdf[chosen + 1] ?? nsdf[chosen];
  const denominator = left - 2 * nsdf[chosen] + right;
  const shift = denominator ? (0.5 * (left - right)) / denominator : 0;
  const period = chosen + shift;

  return period > 0 ? sampleRate / period : null;
}

function median(values: number[]) {
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
}

export function Tuner({
  strings = [],
  instrumentName,
}: {
  strings?: TunerString[];
  instrumentName?: string;
}) {
  const [status, setStatus] = useState<"idle" | "listening" | "error">("idle");
  const [error, setError] = useState("");
  const [reading, setReading] = useState<Reading | null>(null);
  const [a4, setA4] = useState(440);
  const [selected, setSelected] = useState<number | null>(null);

  const contextRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const frameRef = useRef<number | null>(null);
  const historyRef = useRef<number[]>([]);
  const settingsRef = useRef({ a4, selected, strings });

  useEffect(() => {
    settingsRef.current = { a4, selected, strings };
  }, [a4, selected, strings]);

  const stop = useCallback(() => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    frameRef.current = null;
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
    historyRef.current = [];
  }, []);

  useEffect(() => () => {
    stop();
    void contextRef.current?.close();
  }, [stop]);

  const ensureContext = useCallback(() => {
    if (!contextRef.current) {
      const AudioContextClass =
        window.AudioContext ??
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      contextRef.current = new AudioContextClass();
    }
    if (contextRef.current.state === "suspended") void contextRef.current.resume();
    return contextRef.current;
  }, []);

  const start = useCallback(async () => {
    setError("");
    if (!navigator.mediaDevices?.getUserMedia) {
      setStatus("error");
      setError("Tu navegador no permite usar el micrófono. Prueba con Chrome, Safari o Firefox actualizados.");
      return;
    }

    try {
      const context = ensureContext();
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false },
      });
      streamRef.current = stream;
      const source = context.createMediaStreamSource(stream);
      const analyser = context.createAnalyser();
      analyser.fftSize = 4096;
      source.connect(analyser);
      const buffer = new Float32Array(analyser.fftSize);
      let lastRun = 0;
      setStatus("listening");

      const tick = (time: number) => {
        frameRef.current = requestAnimationFrame(tick);
        if (time - lastRun < 50) return;
        lastRun = time;

        analyser.getFloatTimeDomainData(buffer);
        const frequency = detectPitch(buffer, context.sampleRate);
        if (!frequency) {
          historyRef.current = [];
          return;
        }

        const history = historyRef.current;
        history.push(frequency);
        if (history.length > 5) history.shift();
        const smoothed = median(history);

        const { a4: reference, selected: target, strings: targets } = settingsRef.current;
        const midiFloat = frequencyToMidi(smoothed, reference);
        let targetIndex: number | null = target;
        if (targetIndex === null && targets.length) {
          targetIndex = targets.reduce(
            (best, item, index) =>
              Math.abs(midiFloat - item.midi) < Math.abs(midiFloat - targets[best].midi) ? index : best,
            0,
          );
        }
        const targetMidi = targetIndex !== null && targets[targetIndex] ? targets[targetIndex].midi : Math.round(midiFloat);
        setReading({
          frequency: smoothed,
          midi: Math.round(midiFloat),
          cents: Math.max(-50, Math.min(50, (midiFloat - targetMidi) * 100)),
          targetIndex,
        });
      };
      frameRef.current = requestAnimationFrame(tick);
    } catch (caught) {
      stop();
      setStatus("error");
      setError(
        caught instanceof DOMException && caught.name === "NotAllowedError"
          ? "Necesitamos permiso para usar el micrófono. Actívalo en la configuración del navegador y vuelve a intentar."
          : "No pudimos acceder al micrófono. Revisa que esté conectado y que ninguna otra app lo esté usando.",
      );
    }
  }, [ensureContext, stop]);

  const toggle = () => {
    if (status === "listening") {
      stop();
      setStatus("idle");
      setReading(null);
    } else {
      void start();
    }
  };

  const playReference = (midi: number) => {
    const context = ensureContext();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "triangle";
    oscillator.frequency.value = midiToFrequency(midi, a4);
    const now = context.currentTime;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.35, now + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start(now);
    oscillator.stop(now + 2.3);
  };

  const note = reading ? noteLabel(reading.midi) : null;
  const target = reading?.targetIndex !== null && reading?.targetIndex !== undefined ? strings[reading.targetIndex] : undefined;
  const targetNote = target ? noteLabel(target.midi) : note;
  const inTune = reading ? Math.abs(reading.cents) <= IN_TUNE_CENTS : false;
  const direction = !reading ? "" : inTune ? "¡Afinado!" : reading.cents < 0 ? "Sube la afinación" : "Baja la afinación";

  return (
    <div className="tool-card tuner" data-state={inTune ? "in-tune" : "off"}>
      <div className="tuner-display" aria-live="polite">
        <p className="tuner-note">
          {targetNote ? (
            <>
              <strong>{targetNote.es}</strong>
              <span>
                {targetNote.scientific}
                {target ? ` · ${target.label}` : ""}
              </span>
            </>
          ) : (
            <>
              <strong>—</strong>
              <span>{status === "listening" ? "Toca una cuerda o una nota" : "Activa el micrófono"}</span>
            </>
          )}
        </p>

        <div className="tuner-meter" role="meter" aria-valuemin={-50} aria-valuemax={50} aria-valuenow={reading ? Math.round(reading.cents) : 0} aria-label="Desviación en cents">
          <div className="tuner-scale" aria-hidden="true">
            {[-50, -25, 0, 25, 50].map((mark) => (
              <span key={mark} style={{ left: `${50 + mark}%` }}>
                {mark > 0 ? `+${mark}` : mark}
              </span>
            ))}
          </div>
          <div className="tuner-track" aria-hidden="true">
            <span className="tuner-zone" />
            <span
              className="tuner-needle"
              style={{ left: `${50 + (reading?.cents ?? 0)}%`, opacity: reading ? 1 : 0.25 }}
            />
          </div>
        </div>

        <p className="tuner-status">
          {reading ? (
            <>
              <strong>{direction}</strong>
              <span>
                {reading.frequency.toFixed(1)} Hz · {reading.cents > 0 ? "+" : ""}
                {Math.round(reading.cents)} cents
              </span>
            </>
          ) : (
            <span>
              {status === "listening"
                ? `Escuchando${instrumentName ? ` tu ${instrumentName}` : ""}…`
                : "El sonido se analiza en tu dispositivo: no grabamos ni enviamos audio."}
            </span>
          )}
        </p>
      </div>

      <div className="tool-actions">
        <button type="button" className="ed-button" onClick={toggle}>
          {status === "listening" ? (
            <>
              <MicOff size={20} strokeWidth={2.4} aria-hidden="true" /> Detener
            </>
          ) : (
            <>
              <Mic size={20} strokeWidth={2.4} aria-hidden="true" /> Activar micrófono
            </>
          )}
        </button>
        <label className="tool-select">
          <span>La =</span>
          <select value={a4} onChange={(event) => setA4(Number(event.target.value))}>
            {[430, 432, 435, 438, 440, 441, 442, 443, 445].map((value) => (
              <option key={value} value={value}>
                {value} Hz
              </option>
            ))}
          </select>
        </label>
      </div>

      {error && (
        <p className="ed-form-error" role="alert">
          {error}
        </p>
      )}

      {strings.length > 0 && (
        <div className="tuner-strings">
          <p className="tuner-strings-title">
            Cuerda objetivo: {selected === null ? "detección automática" : strings[selected].label}
          </p>
          <ul>
            <li>
              <button
                type="button"
                className={selected === null ? "is-active" : undefined}
                onClick={() => setSelected(null)}
                aria-pressed={selected === null}
              >
                Auto
              </button>
            </li>
            {strings.map((item, index) => {
              const label = noteLabel(item.midi);
              const isTarget = reading?.targetIndex === index;
              return (
                <li key={`${item.label}-${item.midi}`}>
                  <button
                    type="button"
                    className={[selected === index ? "is-active" : "", isTarget ? "is-target" : ""].join(" ")}
                    onClick={() => setSelected(index)}
                    aria-pressed={selected === index}
                    aria-label={`${item.label}: ${label.es} (${label.scientific})`}
                  >
                    <strong>{label.es}</strong>
                    <span>{label.scientific}</span>
                  </button>
                  <button
                    type="button"
                    className="tuner-play"
                    onClick={() => playReference(item.midi)}
                    aria-label={`Escuchar ${label.es} (${label.scientific})`}
                    title="Escuchar nota de referencia"
                  >
                    <Volume2 size={16} strokeWidth={2.4} aria-hidden="true" />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
