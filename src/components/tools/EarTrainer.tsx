"use client";

import { useEffect, useRef, useState } from "react";
import { Play, RotateCcw, SkipForward } from "lucide-react";
import { INTERVALS, midiToFrequency } from "@/lib/music-tools";
import { createAudioContext, playTone } from "@/lib/pitch";

type Mode = "ascendente" | "descendente" | "armonico";
type Level = "basico" | "completo";

const LEVELS: Record<Level, number[]> = {
  basico: [2, 3, 4, 5, 7, 12],
  completo: INTERVALS.map((interval) => interval.semitones),
};

type Question = { root: number; semitones: number };

function randomQuestion(level: Level, previous?: Question): Question {
  const options = LEVELS[level];
  let question: Question;
  do {
    question = {
      root: 55 + Math.floor(Math.random() * 13), // Sol3 to Sol4
      semitones: options[Math.floor(Math.random() * options.length)],
    };
  } while (previous && question.semitones === previous.semitones && question.root === previous.root);
  return question;
}

export function EarTrainer() {
  const [mode, setMode] = useState<Mode>("ascendente");
  const [level, setLevel] = useState<Level>("basico");
  const [question, setQuestion] = useState<Question | null>(null);
  const [answer, setAnswer] = useState<number | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0, streak: 0 });
  const contextRef = useRef<AudioContext | null>(null);

  useEffect(() => () => void contextRef.current?.close(), []);

  const play = (target: Question, playMode: Mode = mode) => {
    if (!contextRef.current) contextRef.current = createAudioContext();
    const context = contextRef.current;
    void context.resume();
    const first = midiToFrequency(target.root);
    const second = midiToFrequency(target.root + target.semitones);
    const now = context.currentTime + 0.05;
    if (playMode === "armonico") {
      playTone(context, first, now, 1.6, 0.22);
      playTone(context, second, now, 1.6, 0.22);
    } else if (playMode === "ascendente") {
      playTone(context, first, now, 0.9);
      playTone(context, second, now + 0.8, 1.2);
    } else {
      playTone(context, second, now, 0.9);
      playTone(context, first, now + 0.8, 1.2);
    }
  };

  const nextQuestion = () => {
    const fresh = randomQuestion(level, question ?? undefined);
    setQuestion(fresh);
    setAnswer(null);
    play(fresh);
  };

  const choose = (semitones: number) => {
    if (!question || answer !== null) return;
    setAnswer(semitones);
    const correct = semitones === question.semitones;
    setScore((value) => ({
      correct: value.correct + (correct ? 1 : 0),
      total: value.total + 1,
      streak: correct ? value.streak + 1 : 0,
    }));
  };

  const reset = () => {
    setScore({ correct: 0, total: 0, streak: 0 });
    setQuestion(null);
    setAnswer(null);
  };

  const options = INTERVALS.filter((interval) => LEVELS[level].includes(interval.semitones));
  const solution = question ? INTERVALS.find((interval) => interval.semitones === question.semitones) : undefined;
  const isCorrect = answer !== null && answer === question?.semitones;

  return (
    <div className="tool-card ear-trainer">
      <div className="metronome-options">
        <label className="tool-select">
          <span>Modo</span>
          <select value={mode} onChange={(event) => setMode(event.target.value as Mode)}>
            <option value="ascendente">Melódico ascendente</option>
            <option value="descendente">Melódico descendente</option>
            <option value="armonico">Armónico (juntas)</option>
          </select>
        </label>
        <label className="tool-select">
          <span>Nivel</span>
          <select
            value={level}
            onChange={(event) => {
              setLevel(event.target.value as Level);
              setQuestion(null);
              setAnswer(null);
            }}
          >
            <option value="basico">Básico (6 intervalos)</option>
            <option value="completo">Completo (12 intervalos)</option>
          </select>
        </label>
      </div>

      <div className="ear-score" aria-live="polite">
        <span>
          Aciertos: <strong>{score.correct}</strong> de {score.total}
        </span>
        <span>
          Racha: <strong>{score.streak}</strong>
        </span>
      </div>

      <div className="tool-actions">
        {question ? (
          <>
            <button type="button" className="ed-button" onClick={() => play(question)}>
              <Play size={20} strokeWidth={2.4} aria-hidden="true" /> Repetir
            </button>
            <button type="button" className="ed-button ed-button--ghost" onClick={nextQuestion}>
              <SkipForward size={20} strokeWidth={2.4} aria-hidden="true" /> Siguiente
            </button>
          </>
        ) : (
          <button type="button" className="ed-button" onClick={nextQuestion}>
            <Play size={20} strokeWidth={2.4} aria-hidden="true" /> Escuchar intervalo
          </button>
        )}
        {score.total > 0 && (
          <button type="button" className="ed-button ed-button--ghost" onClick={reset}>
            <RotateCcw size={18} strokeWidth={2.4} aria-hidden="true" /> Reiniciar
          </button>
        )}
      </div>

      <ul className="ear-options" aria-label="¿Qué intervalo escuchaste?">
        {options.map((interval) => {
          const state =
            answer === null
              ? ""
              : interval.semitones === question?.semitones
                ? "is-correct"
                : interval.semitones === answer
                  ? "is-wrong"
                  : "";
          return (
            <li key={interval.semitones}>
              <button type="button" className={state} onClick={() => choose(interval.semitones)} disabled={!question}>
                <strong>{interval.short}</strong>
                <span>{interval.name}</span>
              </button>
            </li>
          );
        })}
      </ul>

      {answer !== null && solution && (
        <p className={`ear-feedback ${isCorrect ? "is-correct" : "is-wrong"}`} role="status">
          {isCorrect ? "¡Correcto! " : "Era "}
          <strong>{solution.name}</strong>
          {solution.hint ? ` · Referencia: ${solution.hint}.` : "."}
        </p>
      )}
    </div>
  );
}
