"use client";

import "./music.css";
import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";

export type CircleChord = { symbol: string; roman: string; href?: string };

export type CircleKey = {
  major: { name: string; label: string; href: string; notes: string };
  minor: { name: string; label: string; href: string; notes: string };
  /** "2 sostenidos (Fa♯, Do♯)" */
  signature: string;
  /** "2♯", "3♭" or "" */
  signatureShort: string;
  /** Other name for the same key, e.g. "Sol♭ mayor". */
  enharmonic?: string;
  majorChords: CircleChord[];
  minorChords: CircleChord[];
};

const SIZE = 500;
const CENTER = SIZE / 2;
const OUTER = 240;
const MIDDLE = 172;
const INNER = 112;

function polar(radius: number, angle: number) {
  const rad = (angle * Math.PI) / 180;
  // Native trig can differ in its last digits between Node and the browser.
  // Subpixel precision keeps the server and client SVG attributes identical.
  return [
    Number((CENTER + radius * Math.cos(rad)).toFixed(3)),
    Number((CENTER + radius * Math.sin(rad)).toFixed(3)),
  ];
}

function wedge(index: number, inner: number, outer: number) {
  const start = index * 30 - 105;
  const end = start + 30;
  const [x1, y1] = polar(outer, start);
  const [x2, y2] = polar(outer, end);
  const [x3, y3] = polar(inner, end);
  const [x4, y4] = polar(inner, start);
  return `M ${x1} ${y1} A ${outer} ${outer} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${inner} ${inner} 0 0 0 ${x4} ${y4} Z`;
}

function ChordChips({ chords }: { chords: CircleChord[] }) {
  return (
    <ul className="fifths-chords">
      {chords.map((chord) => (
        <li key={chord.roman}>
          {chord.href ? (
            <Link href={chord.href} prefetch={false}>
              <strong>{chord.symbol}</strong>
              <small>{chord.roman}</small>
            </Link>
          ) : (
            <span>
              <strong>{chord.symbol}</strong>
              <small>{chord.roman}</small>
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

/**
 * Clickable circle of fifths: majors outside, relative minors inside. The
 * selected key and its two neighbours (IV and V) are highlighted, which are
 * exactly the chords of that key.
 */
export function CircleOfFifths({ keys }: { keys: CircleKey[] }) {
  const [selected, setSelected] = useState(0);
  const keyRefs = useRef<Array<SVGGElement | null>>([]);
  const current = keys[selected];
  const neighbours = new Set([(selected + 11) % 12, (selected + 1) % 12]);

  const segmentClass = (index: number, minor: boolean) =>
    [
      "fifths-segment",
      minor ? "is-minor" : "",
      index === selected ? "is-selected" : neighbours.has(index) ? "is-neighbour" : "",
    ]
      .filter(Boolean)
      .join(" ");

  const onKey = (event: KeyboardEvent, index: number) => {
    const focusKey = (next: number) => {
      setSelected(next);
      keyRefs.current[next]?.focus();
    };
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setSelected(index);
    } else if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      focusKey((index + 1) % keys.length);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      focusKey((index + keys.length - 1) % keys.length);
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      focusKey(event.key === "Home" ? 0 : keys.length - 1);
    }
  };

  return (
    <div className="fifths-tool">
      <svg className="fifths-wheel" viewBox={`0 0 ${SIZE} ${SIZE}`} role="group" aria-label="Círculo de quintas">
        {keys.map((key, index) => {
          const angle = index * 30 - 90;
          const [mx, my] = polar((OUTER + MIDDLE) / 2, angle);
          const [nx, ny] = polar((MIDDLE + INNER) / 2, angle);
          const isSelected = index === selected;
          return (
            <g
              key={key.major.href}
              ref={(node) => { keyRefs.current[index] = node; }}
              className="fifths-key"
              role="button"
              tabIndex={isSelected ? 0 : -1}
              aria-pressed={isSelected}
              aria-label={`${key.major.name} y ${key.minor.name}: ${key.signature}`}
              onClick={() => setSelected(index)}
              onKeyDown={(event) => onKey(event, index)}
            >
              <path className={segmentClass(index, false)} d={wedge(index, MIDDLE, OUTER)} />
              <path className={segmentClass(index, true)} d={wedge(index, INNER, MIDDLE)} />
              <text className={`fifths-label${isSelected ? " is-selected" : ""}`} x={mx} y={my + (key.signatureShort ? 0 : 5)} textAnchor="middle">
                {key.major.label}
              </text>
              {key.signatureShort && (
                <text className={`fifths-signature${isSelected ? " is-selected" : ""}`} x={mx} y={my + 15} textAnchor="middle">
                  {key.signatureShort}
                </text>
              )}
              <text className={`fifths-label is-minor${isSelected ? " is-selected" : ""}`} x={nx} y={ny + 4} textAnchor="middle">
                {key.minor.label}
              </text>
            </g>
          );
        })}
        <circle cx={CENTER} cy={CENTER} r={INNER - 4} fill="none" />
        <text className="fifths-center" x={CENTER} y={CENTER - 8} textAnchor="middle">
          {current.major.label} mayor
        </text>
        <text className="fifths-center" x={CENTER} y={CENTER + 14} textAnchor="middle">
          {current.signatureShort || "Sin alteraciones"}
        </text>
      </svg>

      <div className="fifths-details" aria-live="polite">
        <h2>
          {current.major.name} y {current.minor.name}
        </h2>
        <dl>
          <dt>Armadura</dt>
          <dd>{current.signature}</dd>
          {current.enharmonic && (
            <>
              <dt>También</dt>
              <dd>{current.enharmonic}</dd>
            </>
          )}
          <dt>{current.major.name}</dt>
          <dd>{current.major.notes}</dd>
          <dt>{current.minor.name}</dt>
          <dd>{current.minor.notes}</dd>
          <dt>Vecinas</dt>
          <dd>
            {keys[(selected + 11) % 12].major.name} (IV) · {keys[(selected + 1) % 12].major.name} (V)
          </dd>
        </dl>
        <div>
          <strong>Acordes de {current.major.name}</strong>
          <ChordChips chords={current.majorChords} />
        </div>
        <div>
          <strong>Acordes de {current.minor.name}</strong>
          <ChordChips chords={current.minorChords} />
        </div>
        <p>
          <Link href={current.major.href} prefetch={false}>
            Escala de {current.major.name}
          </Link>{" "}
          ·{" "}
          <Link href={current.minor.href} prefetch={false}>
            Escala de {current.minor.name}
          </Link>
        </p>
      </div>
    </div>
  );
}
