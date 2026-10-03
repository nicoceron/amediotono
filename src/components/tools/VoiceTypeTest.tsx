"use client";
import {useText} from "@/i18n/use-text";

import { useCallback, useEffect, useRef, useState } from "react";
import { Mic, RotateCcw } from "lucide-react";
import {
  VOICE_TYPES,
  estimateVoiceType,
  frequencyToMidi,
  noteLabel,
} from "@/lib/music-core";
import {
  createAudioContext,
  detectPitch,
  microphoneErrorMessage,
  openMicrophone,
} from "@/lib/pitch";

type Phase = "idle" | "low" | "high" | "result";

/** A note must hold for this many consecutive readings (~0.4 s) to count. */
const STABLE_FRAMES = 8;

function label(midi: number | null) {
  if (midi === null) return "—";
  const note = noteLabel(midi);
  return `${note.es}${note.octave} (${note.scientific})`;
}

export function VoiceTypeTest() {
  const tx = useText();
  const [phase, setPhase] = useState<Phase>("idle");
  const [error, setError] = useState("");
  const [current, setCurrent] = useState<number | null>(null);
  const [lowest, setLowest] = useState<number | null>(null);
  const [highest, setHighest] = useState<number | null>(null);

  const contextRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const frameRef = useRef<number | null>(null);
  const phaseRef = useRef<Phase>("idle");
  const runRef = useRef<{ midi: number; count: number }>({ midi: -1, count: 0 });

  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);

  const stopListening = useCallback(() => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    frameRef.current = null;
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
  }, []);

  useEffect(() => () => {
    stopListening();
    void contextRef.current?.close();
  }, [stopListening]);

  const start = async () => {
    setError("");
    setLowest(null);
    setHighest(null);
    setCurrent(null);
    if (!navigator.mediaDevices?.getUserMedia) {
      setError("Tu navegador no permite usar el micrófono. Prueba con Chrome, Safari o Firefox actualizados.");
      return;
    }
    try {
      if (!contextRef.current) contextRef.current = createAudioContext();
      const context = contextRef.current;
      void context.resume();
      const { stream, analyser, buffer } = await openMicrophone(context);
      streamRef.current = stream;
      setPhase("low");
      let lastRun = 0;

      const tick = (time: number) => {
        frameRef.current = requestAnimationFrame(tick);
        if (time - lastRun < 50) return;
        lastRun = time;
        analyser.getFloatTimeDomainData(buffer);
        const frequency = detectPitch(buffer, context.sampleRate);
        // Voices rarely go below ~70 Hz or above ~1,100 Hz: ignore noise outside.
        if (!frequency || frequency < 70 || frequency > 1100) {
          runRef.current = { midi: -1, count: 0 };
          return;
        }
        const midi = Math.round(frequencyToMidi(frequency));
        const run = runRef.current;
        runRef.current = run.midi === midi ? { midi, count: run.count + 1 } : { midi, count: 1 };
        setCurrent(midi);
        if (runRef.current.count < STABLE_FRAMES) return;
        if (phaseRef.current === "low") setLowest((value) => (value === null || midi < value ? midi : value));
        if (phaseRef.current === "high") setHighest((value) => (value === null || midi > value ? midi : value));
      };
      frameRef.current = requestAnimationFrame(tick);
    } catch (caught) {
      stopListening();
      setPhase("idle");
      setError(microphoneErrorMessage(caught));
    }
  };

  const next = () => {
    runRef.current = { midi: -1, count: 0 };
    if (phase === "low") {
      setPhase("high");
      setCurrent(null);
    } else if (phase === "high") {
      stopListening();
      setPhase("result");
    }
  };

  const reset = () => {
    stopListening();
    setPhase("idle");
    setLowest(null);
    setHighest(null);
    setCurrent(null);
  };

  const result =
    lowest !== null && highest !== null && highest > lowest ? estimateVoiceType(lowest, highest) : null;
  const span = lowest !== null && highest !== null ? highest - lowest : 0;

  return (
    <div className="tool-card voice-test">
      <ol className="voice-steps" aria-label={tx("Pasos del test")}>
        <li className={phase === "low" ? "is-active" : lowest !== null ? "is-done" : ""}>{tx("1. Nota grave")}</li>
        <li className={phase === "high" ? "is-active" : highest !== null ? "is-done" : ""}>{tx("2. Nota aguda")}</li>
        <li className={phase === "result" ? "is-active" : ""}>{tx("3. Resultado")}</li>
      </ol>

      {phase === "idle" && (
        <div className="voice-intro">
          <p>
            {tx("Calienta la voz un par de minutos. Luego canta con una vocal abierta («a») y sostén cada nota un segundo. Canta solo hasta donde estés cómodo: nunca fuerces.")}</p>
          <div className="tool-actions">
            <button type="button" className="ed-button" onClick={start}>
              <Mic size={20} strokeWidth={2.4} aria-hidden="true" /> {tx(" Empezar el test")}</button>
          </div>
        </div>
      )}

      {(phase === "low" || phase === "high") && (
        <div className="voice-live" aria-live="polite">
          <p className="voice-instruction">
            {tx(phase === "low"
              ? "Baja poco a poco y sostén la nota más grave que puedas cantar con comodidad."
              : "Ahora sube poco a poco y sostén la nota más aguda que puedas cantar sin forzar.")}
          </p>
          <p className="tuner-note">
            <strong>{tx(current !== null ? noteLabel(current).es : "—")}</strong>
            <span>{tx(current !== null ? noteLabel(current).scientific : "Canta una nota")}</span>
          </p>
          <p className="voice-record">
            {tx(phase === "low" ? "Nota más grave registrada: " : "Nota más aguda registrada: ")}
            <strong>{tx(label(phase === "low" ? lowest : highest))}</strong>
          </p>
          <div className="tool-actions">
            <button
              type="button"
              className="ed-button"
              onClick={next}
              disabled={phase === "low" ? lowest === null : highest === null}
            >
              {tx(phase === "low" ? "Siguiente: nota aguda" : "Ver mi resultado")}
            </button>
            <button type="button" className="ed-button ed-button--ghost" onClick={reset}>
              <RotateCcw size={18} strokeWidth={2.4} aria-hidden="true" /> {tx(" Reiniciar")}</button>
          </div>
        </div>
      )}

      {phase === "result" && (
        <div className="voice-result" aria-live="polite">
          {result ? (
            <>
              <p className="voice-range">
                {tx("Tu rango: ")}<strong>{tx(label(lowest))}</strong> {tx(" a ")}<strong>{tx(label(highest))}</strong>
                <span> {tx(" · ")}{tx(span)} {tx(" semitonos")}</span>
              </p>
              <p className="voice-type">
                {tx("Tu rango se parece al de la voz de ")}<strong>{tx(result.name.toLowerCase())}</strong>
              </p>
              <p className="tool-hint">
                {tx("Es una orientación: el tipo de voz también depende del color, de dónde cambia tu voz de registro y de dónde te sientes cómodo. Un profe de canto puede confirmarlo.")}</p>
            </>
          ) : (
            <p>{tx("No alcanzamos a registrar tu rango. Intenta de nuevo en un lugar silencioso y sostén cada nota un poco más.")}</p>
          )}
          <div className="tool-actions">
            <button type="button" className="ed-button" onClick={reset}>
              <RotateCcw size={18} strokeWidth={2.4} aria-hidden="true" /> {tx(" Repetir el test")}</button>
          </div>
        </div>
      )}

      {error && (
        <p className="ed-form-error" role="alert">
          {tx(error)}
        </p>
      )}

      <div className="voice-scale" aria-hidden="true">
        {VOICE_TYPES.map((type) => {
          const left = ((type.low - 36) / (88 - 36)) * 100;
          const width = ((type.high - type.low) / (88 - 36)) * 100;
          return (
            <div className="voice-scale-row" key={type.name}>
              <span>{tx(type.name)}</span>
              <div className="voice-scale-track">
                <i style={{ left: `${left}%`, width: `${width}%` }} className={result?.name === type.name ? "is-match" : undefined} />
                {lowest !== null && highest !== null && phase === "result" && (
                  <b
                    style={{
                      left: `${((lowest - 36) / (88 - 36)) * 100}%`,
                      width: `${((highest - lowest) / (88 - 36)) * 100}%`,
                    }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
