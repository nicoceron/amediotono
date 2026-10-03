"use client";
import {useText} from "@/i18n/use-text";

import { useCallback, useEffect, useRef, useState } from "react";
import { Minus, Pause, Play, Plus, Hand } from "lucide-react";
import {
  METERS,
  defaultAccents,
  getMeter,
  subdivisionOptions,
  tempoMarking,
  type AccentLevel,
  type MeterId,
  type MetronomeSetup,
} from "@/lib/music-core";

const MIN_BPM = 30;
const MAX_BPM = 250;
const LOOKAHEAD_MS = 25;
const SCHEDULE_AHEAD_S = 0.12;

const ACCENT_NAMES = ["sin acento", "acento suave", "acento fuerte"];
const NO_SETUPS: MetronomeSetup[] = [];

type ClickKind = "accent" | "secondary" | "beat" | "sub";

type Settings = {
  bpm: number;
  beats: number;
  subdivision: number;
  accent: boolean;
  accents: AccentLevel[];
  volume: number;
};

function clampBpm(value: number) {
  return Math.min(MAX_BPM, Math.max(MIN_BPM, Math.round(value)));
}

/**
 * Clicks per pulse after a meter change: entering a compound meter turns on
 * eighths so its groups of three are audible; leaving one maps eighths back
 * to two per beat.
 */
function subdivisionFor(from: MeterId, to: MeterId, current: number) {
  const fromCompound = getMeter(from).pulse === "negra con puntillo";
  const toCompound = getMeter(to).pulse === "negra con puntillo";
  if (fromCompound === toCompound) return current;
  if (toCompound) return 3;
  return current === 1 ? 1 : 2;
}

export function Metronome({
  initialBpm = 80,
  setups = NO_SETUPS,
}: {
  initialBpm?: number;
  /** Rhythm presets: the first one loads, the others are one tap away. */
  setups?: MetronomeSetup[];
}) {
  const tx = useText();
  const first = setups[0];
  const [bpm, setBpm] = useState(first?.bpm ?? initialBpm);
  const [meterId, setMeterId] = useState<MeterId>(first?.meter ?? "4/4");
  const [subdivision, setSubdivision] = useState(first?.subdivision ?? 1);
  const [accents, setAccents] = useState<AccentLevel[]>(
    () => first?.accents ?? defaultAccents(getMeter(first?.meter ?? "4/4").beats),
  );
  const [setupIndex, setSetupIndex] = useState<number | null>(first ? 0 : null);
  const [accent, setAccent] = useState(true);
  const [volume, setVolume] = useState(0.8);
  const [running, setRunning] = useState(false);
  const [activeBeat, setActiveBeat] = useState(-1);

  const meter = getMeter(meterId);
  const beats = meter.beats;

  const settingsRef = useRef<Settings>({ bpm, beats, subdivision, accent, accents, volume });
  const contextRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);
  const nextTimeRef = useRef(0);
  const tickRef = useRef(0);
  const queueRef = useRef<Array<{ time: number; beat: number }>>([]);
  const tapsRef = useRef<number[]>([]);

  useEffect(() => {
    settingsRef.current = { bpm, beats, subdivision, accent, accents, volume };
  }, [bpm, beats, subdivision, accent, accents, volume]);

  const click = useCallback((time: number, kind: ClickKind) => {
    const context = contextRef.current;
    if (!context) return;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = kind === "sub" ? "triangle" : "square";
    oscillator.frequency.value = { accent: 1760, secondary: 1568, beat: 1320, sub: 880 }[kind];
    const level = settingsRef.current.volume * { accent: 0.9, secondary: 0.75, beat: 0.6, sub: 0.35 }[kind];
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
      const { bpm: tempo, beats: count, subdivision: parts, accent: useAccent, accents: levels } = settingsRef.current;
      // Modulo first: the meter may have changed since the last tick.
      const tick = tickRef.current % (count * parts);
      const isBeat = tick % parts === 0;
      const beat = Math.floor(tick / parts);
      const level = useAccent ? (levels[beat] ?? 0) : 0;
      const kind: ClickKind = !isBeat ? "sub" : level === 2 ? "accent" : level === 1 ? "secondary" : "beat";
      click(nextTimeRef.current, kind);
      if (isBeat) queueRef.current.push({ time: nextTimeRef.current, beat });
      nextTimeRef.current += 60 / tempo / parts;
      tickRef.current = (tick + 1) % (count * parts);
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

  /** A new meter starts on its first beat, with the accent on beat one. */
  const changeMeter = (id: MeterId) => {
    setMeterId(id);
    setSubdivision((current) => subdivisionFor(meterId, id, current));
    setAccents(defaultAccents(getMeter(id).beats));
    setSetupIndex(null);
    tickRef.current = 0;
  };

  const applySetup = (index: number) => {
    const setup = setups[index];
    setBpm(setup.bpm);
    setMeterId(setup.meter);
    setSubdivision(setup.subdivision);
    setAccents(setup.accents ?? defaultAccents(getMeter(setup.meter).beats));
    setAccent(true);
    setSetupIndex(index);
    tickRef.current = 0;
  };

  /** Strong → soft → none → strong. */
  const cycleAccent = (beat: number) => {
    setAccents((current) =>
      current.map((level, index) => (index === beat ? (((level + 2) % 3) as AccentLevel) : level)),
    );
    setAccent(true);
  };

  const marking = tempoMarking(bpm);

  return (
    <div className="tool-card metronome">
      {setups.length > 1 && (
        <div className="metronome-setups" role="group" aria-label={tx("Compás del ritmo")}>
          {setups.map((setup, index) => (
            <button
              key={setup.label}
              type="button"
              className={setupIndex === index ? "is-active" : undefined}
              aria-pressed={setupIndex === index}
              onClick={() => applySetup(index)}
            >
              {tx(setup.label)}
            </button>
          ))}
        </div>
      )}

      <div className="metronome-display">
        <p className="metronome-bpm" aria-live="polite">
          <strong>{tx(bpm)}</strong>
          <span>
            {tx("BPM")}{tx(meter.pulse === "negra" ? "" : tx.template(" ({p0})", {p0: tx(meter.pulse)}))} {tx(" · ")}{tx(meterId)} {tx(" · ")}{tx(marking.name)}
          </span>
        </p>
        <ol className="metronome-beats" aria-label={tx("Tiempos del compás")}>
          {accents.slice(0, beats).map((level, index) => (
            <li key={index}>
              <button
                type="button"
                className={[
                  index === activeBeat ? "is-active" : "",
                  accent && level === 2 ? "is-accent" : "",
                  accent && level === 1 ? "is-secondary" : "",
                ].join(" ")}
                onClick={() => cycleAccent(index)}
                aria-label={tx(tx.template("Tiempo {p0}: {p1}. Toca para cambiar el acento.", {p0: tx(index + 1), p1: tx(ACCENT_NAMES[accent ? level : 0])}))}
              />
            </li>
          ))}
        </ol>
      </div>

      <div className="metronome-tempo">
        <button type="button" className="tool-round" onClick={() => setBpm((value) => clampBpm(value - 1))} aria-label={tx("Bajar 1 BPM")}>
          <Minus size={20} strokeWidth={2.6} aria-hidden="true" />
        </button>
        <label className="metronome-slider">
          <span className="visually-hidden">{tx("Tempo en BPM")}</span>
          <input
            type="range"
            min={MIN_BPM}
            max={MAX_BPM}
            value={bpm}
            onChange={(event) => setBpm(clampBpm(Number(event.target.value)))}
          />
        </label>
        <button type="button" className="tool-round" onClick={() => setBpm((value) => clampBpm(value + 1))} aria-label={tx("Subir 1 BPM")}>
          <Plus size={20} strokeWidth={2.6} aria-hidden="true" />
        </button>
      </div>

      <div className="tool-actions">
        <button type="button" className="ed-button metronome-toggle" onClick={toggle}>
          {running ? (
            <>
              <Pause size={20} strokeWidth={2.4} aria-hidden="true" /> {tx(" Detener")}</>
          ) : (
            <>
              <Play size={20} strokeWidth={2.4} aria-hidden="true" /> {tx(" Iniciar")}</>
          )}
        </button>
        <button type="button" className="ed-button ed-button--ghost" onClick={tap}>
          <Hand size={20} strokeWidth={2.4} aria-hidden="true" /> {tx(" Tap tempo")}</button>
      </div>

      <div className="metronome-options">
        <label className="tool-select">
          <span>{tx("Compás")}</span>
          <select value={meterId} onChange={(event) => changeMeter(event.target.value as MeterId)}>
            {METERS.map((option) => (
              <option key={option.id} value={option.id}>
                {tx(option.id)}
              </option>
            ))}
          </select>
        </label>
        <label className="tool-select">
          <span>{tx("Subdivisión")}</span>
          <select value={subdivision} onChange={(event) => setSubdivision(Number(event.target.value))}>
            {subdivisionOptions(meter.pulse).map((option) => (
              <option key={option.value} value={option.value}>
                {tx(option.label)}
              </option>
            ))}
          </select>
        </label>
        <label className="tool-check">
          <input type="checkbox" checked={accent} onChange={(event) => setAccent(event.target.checked)} />
          <span>{tx("Acentuar tiempos")}</span>
        </label>
        <label className="tool-select tool-volume">
          <span>{tx("Volumen")}</span>
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
      <p className="tool-hint">
        {tx("Toca un punto para cambiar su acento: fuerte, suave o ninguno. Atajos: barra espaciadora para iniciar o detener, flechas para cambiar el tempo.")}</p>
    </div>
  );
}
