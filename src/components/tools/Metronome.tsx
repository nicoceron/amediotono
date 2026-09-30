"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Minus, Pause, Play, Plus, Hand } from "lucide-react";
import { tempoMarking } from "@/lib/music-tools";

const MIN_BPM = 30;
const MAX_BPM = 250;
const LOOKAHEAD_MS = 25;
const SCHEDULE_AHEAD_S = 0.12;

const SUBDIVISIONS = [
  { value: 1, label: "Negras" },
  { value: 2, label: "Corcheas" },
  { value: 3, label: "Tresillos" },
  { value: 4, label: "Semicorcheas" },
];

const METERS = [2, 3, 4, 5, 6, 7];

type Settings = {
  bpm: number;
  beats: number;
  subdivision: number;
  accent: boolean;
  volume: number;
};

function clampBpm(value: number) {
  return Math.min(MAX_BPM, Math.max(MIN_BPM, Math.round(value)));
}

export function Metronome({ initialBpm = 80 }: { initialBpm?: number }) {
  const [bpm, setBpm] = useState(initialBpm);
  const [beats, setBeats] = useState(4);
  const [subdivision, setSubdivision] = useState(1);
  const [accent, setAccent] = useState(true);
  const [volume, setVolume] = useState(0.8);
  const [running, setRunning] = useState(false);
  const [activeBeat, setActiveBeat] = useState(-1);

  const settingsRef = useRef<Settings>({ bpm, beats, subdivision, accent, volume });
  const contextRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);
  const nextTimeRef = useRef(0);
  const tickRef = useRef(0);
  const queueRef = useRef<Array<{ time: number; beat: number }>>([]);
  const tapsRef = useRef<number[]>([]);

  useEffect(() => {
    settingsRef.current = { bpm, beats, subdivision, accent, volume };
  }, [bpm, beats, subdivision, accent, volume]);

  const click = useCallback((time: number, kind: "accent" | "beat" | "sub") => {
    const context = contextRef.current;
    if (!context) return;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = kind === "sub" ? "triangle" : "square";
    oscillator.frequency.value = kind === "accent" ? 1760 : kind === "beat" ? 1320 : 880;
    const level = settingsRef.current.volume * (kind === "sub" ? 0.35 : kind === "accent" ? 0.9 : 0.6);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(Math.max(level, 0.0002), time + 0.002);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.06);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start(time);
    oscillator.stop(time + 0.07);
  }, []);

  const scheduler = useCallback(() => {
    const context = contextRef.current;
    if (!context) return;
    while (nextTimeRef.current < context.currentTime + SCHEDULE_AHEAD_S) {
      const { bpm: tempo, beats: meter, subdivision: parts, accent: useAccent } = settingsRef.current;
      const tick = tickRef.current;
      const isBeat = tick % parts === 0;
      const beat = Math.floor(tick / parts) % meter;
      const kind = isBeat ? (beat === 0 && useAccent ? "accent" : "beat") : "sub";
      click(nextTimeRef.current, kind);
      if (isBeat) queueRef.current.push({ time: nextTimeRef.current, beat });
      nextTimeRef.current += 60 / tempo / parts;
      tickRef.current = (tick + 1) % (meter * parts);
    }
  }, [click]);

  const stop = useCallback(() => {
    if (timerRef.current !== null) window.clearInterval(timerRef.current);
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    timerRef.current = null;
    frameRef.current = null;
    queueRef.current = [];
    setRunning(false);
    setActiveBeat(-1);
  }, []);

  const start = useCallback(() => {
    if (!contextRef.current) {
      const AudioContextClass =
        window.AudioContext ??
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      contextRef.current = new AudioContextClass();
    }
    const context = contextRef.current;
    void context.resume();
    tickRef.current = 0;
    nextTimeRef.current = context.currentTime + 0.06;
    queueRef.current = [];
    timerRef.current = window.setInterval(scheduler, LOOKAHEAD_MS);
    scheduler();

    // Light the beat dot when its click actually sounds, not when it's scheduled.
    const draw = () => {
      const queue = queueRef.current;
      let current: number | null = null;
      while (queue.length && queue[0].time <= context.currentTime) {
        current = queue.shift()!.beat;
      }
      if (current !== null) setActiveBeat(current);
      frameRef.current = requestAnimationFrame(draw);
    };
    frameRef.current = requestAnimationFrame(draw);
    setRunning(true);
  }, [scheduler]);

  const toggle = useCallback(() => (running ? stop() : start()), [running, start, stop]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && ["INPUT", "SELECT", "TEXTAREA", "BUTTON"].includes(target.tagName)) return;
      if (event.code === "Space") {
        event.preventDefault();
        toggle();
      } else if (event.key === "ArrowUp" || event.key === "ArrowRight") {
        setBpm((value) => clampBpm(value + 1));
      } else if (event.key === "ArrowDown" || event.key === "ArrowLeft") {
        setBpm((value) => clampBpm(value - 1));
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [toggle]);

  useEffect(() => () => {
    if (timerRef.current !== null) window.clearInterval(timerRef.current);
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    void contextRef.current?.close();
  }, []);

  const tap = () => {
    const now = performance.now();
    const taps = tapsRef.current.filter((time) => now - time < 2500);
    taps.push(now);
    tapsRef.current = taps.slice(-6);
    if (tapsRef.current.length >= 2) {
      const intervals = tapsRef.current.slice(1).map((time, index) => time - tapsRef.current[index]);
      const average = intervals.reduce((sum, value) => sum + value, 0) / intervals.length;
      setBpm(clampBpm(60000 / average));
    }
  };

  const marking = tempoMarking(bpm);

  return (
    <div className="tool-card metronome">
      <div className="metronome-display">
        <p className="metronome-bpm" aria-live="polite">
          <strong>{bpm}</strong>
          <span>BPM · {marking.name}</span>
        </p>
        <ol className="metronome-beats" aria-hidden="true">
          {Array.from({ length: beats }, (_, index) => (
            <li
              key={index}
              className={[
                index === activeBeat ? "is-active" : "",
                index === 0 && accent ? "is-accent" : "",
              ].join(" ")}
            />
          ))}
        </ol>
      </div>

      <div className="metronome-tempo">
        <button type="button" className="tool-round" onClick={() => setBpm((value) => clampBpm(value - 1))} aria-label="Bajar 1 BPM">
          <Minus size={20} strokeWidth={2.6} aria-hidden="true" />
        </button>
        <label className="metronome-slider">
          <span className="visually-hidden">Tempo en BPM</span>
          <input
            type="range"
            min={MIN_BPM}
            max={MAX_BPM}
            value={bpm}
            onChange={(event) => setBpm(clampBpm(Number(event.target.value)))}
          />
        </label>
        <button type="button" className="tool-round" onClick={() => setBpm((value) => clampBpm(value + 1))} aria-label="Subir 1 BPM">
          <Plus size={20} strokeWidth={2.6} aria-hidden="true" />
        </button>
      </div>

      <div className="tool-actions">
        <button type="button" className="ed-button metronome-toggle" onClick={toggle}>
          {running ? (
            <>
              <Pause size={20} strokeWidth={2.4} aria-hidden="true" /> Detener
            </>
          ) : (
            <>
              <Play size={20} strokeWidth={2.4} aria-hidden="true" /> Iniciar
            </>
          )}
        </button>
        <button type="button" className="ed-button ed-button--ghost" onClick={tap}>
          <Hand size={20} strokeWidth={2.4} aria-hidden="true" /> Tap tempo
        </button>
      </div>

      <div className="metronome-options">
        <label className="tool-select">
          <span>Compás</span>
          <select value={beats} onChange={(event) => setBeats(Number(event.target.value))}>
            {METERS.map((meter) => (
              <option key={meter} value={meter}>
                {meter}/4
              </option>
            ))}
          </select>
        </label>
        <label className="tool-select">
          <span>Subdivisión</span>
          <select value={subdivision} onChange={(event) => setSubdivision(Number(event.target.value))}>
            {SUBDIVISIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className="tool-check">
          <input type="checkbox" checked={accent} onChange={(event) => setAccent(event.target.checked)} />
          <span>Acentuar el primer tiempo</span>
        </label>
        <label className="tool-select tool-volume">
          <span>Volumen</span>
          <input
            type="range"
            min={0.1}
            max={1}
            step={0.05}
            value={volume}
            onChange={(event) => setVolume(Number(event.target.value))}
          />
        </label>
      </div>
      <p className="tool-hint">Atajos: barra espaciadora para iniciar o detener, flechas para cambiar el tempo.</p>
    </div>
  );
}
