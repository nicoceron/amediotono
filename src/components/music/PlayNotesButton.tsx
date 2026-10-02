"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2 } from "lucide-react";
import { midiToFrequency } from "@/lib/music-tools";
import { createAudioContext, playTone } from "@/lib/pitch";

/**
 * Plays a chord (strummed, then held) or a scale (up and back down) with the
 * same soft synth as the ear trainer. Audio starts only on click.
 */
export function PlayNotesButton({
  midis,
  mode,
  label,
}: {
  midis: number[];
  mode: "chord" | "scale";
  label: string;
}) {
  const contextRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);
  const mountedRef = useRef(true);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
      const context = contextRef.current;
      contextRef.current = null;
      if (context && context.state !== "closed") void context.close().catch(() => {});
    };
  }, []);

  async function play() {
    if (playing) return;
    setPlaying(true);
    setError("");
    try {
      if (!contextRef.current) contextRef.current = createAudioContext();
      const context = contextRef.current;
      await context.resume();
      if (contextRef.current !== context) return;
      const start = context.currentTime + 0.05;
      let end = start;

      if (mode === "chord") {
        midis.forEach((midi, i) => playTone(context, midiToFrequency(midi), start + i * 0.07, 2.2, 0.16));
        const together = start + midis.length * 0.07 + 1;
        midis.forEach((midi) => playTone(context, midiToFrequency(midi), together, 2.4, 0.13));
        end = together + 2.4;
      } else {
        const sequence = [...midis, ...midis.slice(0, -1).reverse()];
        sequence.forEach((midi, i) => playTone(context, midiToFrequency(midi), start + i * 0.32, 0.55, 0.28));
        end = start + sequence.length * 0.32 + 0.3;
      }

      timerRef.current = window.setTimeout(() => {
        timerRef.current = null;
        setPlaying(false);
      }, (end - context.currentTime) * 1000);
    } catch {
      if (!mountedRef.current) return;
      setPlaying(false);
      setError("No pudimos reproducir el audio. Vuelve a intentarlo.");
    }
  }

  return (
    <div className="play-notes-control">
      <button type="button" className="ed-button play-notes-button" onClick={play} disabled={playing}>
        <Volume2 size={20} strokeWidth={2.4} aria-hidden="true" />
        {playing ? "Sonando…" : label}
      </button>
      {error && <p className="tool-hint" role="alert">{error}</p>}
    </div>
  );
}
