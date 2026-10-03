"use client";
import {useText} from "@/i18n/use-text";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Mic, MicOff, Volume2 } from "lucide-react";
import {
  frequencyToMidi,
  midiToFrequency,
  noteLabel,
  type TunerString,
} from "@/lib/music-core";
import {
  MIN_FREQUENCY,
  createAudioContext,
  detectPitch,
  median,
  microphoneErrorMessage,
  openMicrophone,
  playTone,
} from "@/lib/pitch";

const IN_TUNE_CENTS = 5;

type Reading = {
  frequency: number;
  midi: number;
  cents: number;
  targetIndex: number | null;
  /** Octaves between what sounds and the target (a harmonic, or a string an octave off). */
  octaveShift: number;
};

const NO_STRINGS: TunerString[] = [];

/** One button per distinct pitch: courses that share a note share a target. */
type Target = { midi: number; label: string };

function distinctTargets(strings: TunerString[]): Target[] {
  const targets: Target[] = [];
  for (const item of strings) {
    const existing = targets.find((target) => target.midi === item.midi);
    if (existing) existing.label = `${existing.label} y ${item.label}`;
    else targets.push({ midi: item.midi, label: item.label });
  }
  return targets;
}

/**
 * Distance in semitones to the target, folded to the nearest octave when the
 * note sounds whole octaves away (e.g. the 12th-fret harmonic of a low string,
 * which phone microphones pick up better than the fundamental).
 */
function offsetFrom(midiFloat: number, targetMidi: number) {
  const offset = midiFloat - targetMidi;
  const octaveShift = Math.round(offset / 12);
  const folded = offset - octaveShift * 12;
  return Math.abs(offset) > 1 && Math.abs(folded) < 0.5 ? { offset: folded, octaveShift } : { offset, octaveShift: 0 };
}

export function Tuner({
  strings = NO_STRINGS,
  instrumentName,
  flats = false,
}: {
  strings?: TunerString[];
  instrumentName?: string;
  /** Spell notes with flats (Mi♭) instead of sharps (Re♯). */
  flats?: boolean;
}) {
  const tx = useText();
  const [status, setStatus] = useState<"idle" | "listening" | "error">("idle");
  const [error, setError] = useState("");
  const [reading, setReading] = useState<Reading | null>(null);
  const [a4, setA4] = useState(440);
  const [selected, setSelected] = useState<number | null>(null);
  const targets = useMemo(() => distinctTargets(strings), [strings]);
  // Lower the detector floor only for presets with very low strings (5-string bass).
  const minFrequency = targets.length
    ? Math.min(MIN_FREQUENCY, midiToFrequency(Math.min(...targets.map((target) => target.midi))) * 0.85)
    : MIN_FREQUENCY;

  const contextRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const frameRef = useRef<number | null>(null);
  const historyRef = useRef<number[]>([]);
  const settingsRef = useRef({ a4, selected, targets, minFrequency });

  useEffect(() => {
    settingsRef.current = { a4, selected, targets, minFrequency };
  }, [a4, selected, targets, minFrequency]);

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
    if (!contextRef.current) contextRef.current = createAudioContext();
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
      const { stream, analyser, buffer } = await openMicrophone(context);
      streamRef.current = stream;
      let lastRun = 0;
      setStatus("listening");

      const tick = (time: number) => {
        frameRef.current = requestAnimationFrame(tick);
        if (time - lastRun < 50) return;
        lastRun = time;

        analyser.getFloatTimeDomainData(buffer);
        const frequency = detectPitch(buffer, context.sampleRate, settingsRef.current.minFrequency);
        if (!frequency) {
          historyRef.current = [];
          return;
        }

        const history = historyRef.current;
        history.push(frequency);
        if (history.length > 5) history.shift();
        const smoothed = median(history);

        const { a4: reference, selected: chosen, targets: choices } = settingsRef.current;
        const midiFloat = frequencyToMidi(smoothed, reference);
        let targetIndex: number | null = chosen !== null && choices[chosen] ? chosen : null;
        if (targetIndex === null && choices.length) {
          const distance = (index: number) => Math.abs(midiFloat - choices[index].midi);
          targetIndex = choices.reduce((best, _item, index) => (distance(index) < distance(best) ? index : best), 0);
          // Nothing within a semitone: maybe a harmonic of a string an octave away.
          if (distance(targetIndex) > 1) {
            const octave = choices.findIndex((item) => offsetFrom(midiFloat, item.midi).octaveShift !== 0);
            if (octave !== -1) targetIndex = octave;
          }
        }
        const { offset, octaveShift } =
          targetIndex !== null
            ? offsetFrom(midiFloat, choices[targetIndex].midi)
            : { offset: midiFloat - Math.round(midiFloat), octaveShift: 0 };
        setReading({
          frequency: smoothed,
          midi: Math.round(midiFloat),
          cents: Math.max(-50, Math.min(50, offset * 100)),
          targetIndex,
          octaveShift,
        });
      };
      frameRef.current = requestAnimationFrame(tick);
    } catch (caught) {
      stop();
      setStatus("error");
      setError(microphoneErrorMessage(caught));
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
    playTone(ensureContext(), midiToFrequency(midi, a4), undefined, 2.2, 0.35);
  };

  const note = reading ? noteLabel(reading.midi, flats) : null;
  const target = reading?.targetIndex !== null && reading?.targetIndex !== undefined ? targets[reading.targetIndex] : undefined;
  const targetNote = target ? noteLabel(target.midi, flats) : note;
  const inTune = reading ? Math.abs(reading.cents) <= IN_TUNE_CENTS : false;
  const direction = !reading ? "" : inTune ? "¡Afinado!" : reading.cents < 0 ? "Sube la afinación" : "Baja la afinación";
  const octaveNote = reading?.octaveShift
    ? `Suena ${Math.abs(reading.octaveShift) === 1 ? "una octava" : `${Math.abs(reading.octaveShift)} octavas`} ${reading.octaveShift > 0 ? "arriba" : "abajo"} de esta cuerda. Si es un armónico, está bien; si tocaste la cuerda al aire, revisa que no la hayas subido o bajado de más.`
    : "";

  return (
    <div className="tool-card tuner" data-state={inTune ? "in-tune" : "off"}>
      <div className="tuner-display" aria-live="polite">
        <p className="tuner-note">
          {targetNote ? (
            <>
              <strong>{tx(targetNote.es)}</strong>
              <span>
                {tx(targetNote.scientific)}
                {tx(target ? tx.template(" · {p0}", {p0: tx(target.label)}) : "")}
              </span>
            </>
          ) : (
            <>
              <strong>{tx("—")}</strong>
              <span>{tx(status === "listening" ? "Toca una cuerda o una nota" : "Activa el micrófono")}</span>
            </>
          )}
        </p>

        <div className="tuner-meter" role="meter" aria-valuemin={-50} aria-valuemax={50} aria-valuenow={reading ? Math.round(reading.cents) : 0} aria-label={tx("Desviación en cents")}>
          <div className="tuner-scale" aria-hidden="true">
            {[-50, -25, 0, 25, 50].map((mark) => (
              <span key={mark} style={{ left: `${50 + mark}%` }}>
                {tx(mark > 0 ? tx.template("+{p0}", {p0: tx(mark)}) : mark)}
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
              <strong>{tx(direction)}</strong>
              <span>
                {tx(reading.frequency.toFixed(1))} {tx(" Hz · ")}{tx(reading.cents > 0 ? "+" : "")}
                {tx(Math.round(reading.cents))} {tx(" cents")}</span>
              {octaveNote && <span className="tuner-octave">{tx(octaveNote)}</span>}
            </>
          ) : (
            <span>
              {tx(status === "listening"
                ? tx.template("Escuchando{p0}…", {p0: tx(instrumentName ? ` tu ${instrumentName}` : "")})
                : "El sonido se analiza en tu dispositivo: no grabamos ni enviamos audio.")}
            </span>
          )}
        </p>
      </div>

      <div className="tool-actions">
        <button type="button" className="ed-button" onClick={toggle}>
          {status === "listening" ? (
            <>
              <MicOff size={20} strokeWidth={2.4} aria-hidden="true" /> {tx(" Detener")}</>
          ) : (
            <>
              <Mic size={20} strokeWidth={2.4} aria-hidden="true" /> {tx(" Activar micrófono")}</>
          )}
        </button>
        <label className="tool-select">
          <span>{tx("La =")}</span>
          <select value={a4} onChange={(event) => setA4(Number(event.target.value))}>
            {[430, 432, 435, 438, 440, 441, 442, 443, 445].map((value) => (
              <option key={value} value={value}>
                {tx(value)} {tx(" Hz")}</option>
            ))}
          </select>
        </label>
      </div>

      {error && (
        <p className="ed-form-error" role="alert">
          {tx(error)}
        </p>
      )}

      {targets.length > 0 && (
        <div className="tuner-strings">
          <p className="tuner-strings-title">
            {tx("Cuerda objetivo: ")}{tx(selected === null || !targets[selected] ? "detección automática" : targets[selected].label)}
          </p>
          <ul>
            <li>
              <button
                type="button"
                className={selected === null ? "is-active" : undefined}
                onClick={() => setSelected(null)}
                aria-pressed={selected === null}
              >
                {tx("Auto")}</button>
            </li>
            {targets.map((item, index) => {
              const label = noteLabel(item.midi, flats);
              const isTarget = reading?.targetIndex === index;
              return (
                <li key={item.midi}>
                  <button
                    type="button"
                    className={[selected === index ? "is-active" : "", isTarget ? "is-target" : ""].join(" ")}
                    onClick={() => setSelected(index)}
                    aria-pressed={selected === index}
                    aria-label={tx(tx.template("{p0}: {p1} ({p2})", {p0: tx(item.label), p1: tx(label.es), p2: tx(label.scientific)}))}
                    title={tx(item.label)}
                  >
                    <strong>{tx(label.es)}</strong>
                    <span>{tx(label.scientific)}</span>
                  </button>
                  <button
                    type="button"
                    className="tuner-play"
                    onClick={() => playReference(item.midi)}
                    aria-label={tx(tx.template("Escuchar {p0} ({p1})", {p0: tx(label.es), p1: tx(label.scientific)}))}
                    title={tx("Escuchar nota de referencia")}
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
