"use client";
import {useText} from "@/i18n/use-text";

import "./music.css";
import Link from "@/i18n/navigation";
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
  const tx = useText();
  return (
    <ul className="fifths-chords">
      {chords.map((chord) => (
        <li key={chord.roman}>
          {chord.href ? (
            <Link href={chord.href} prefetch={false}>
              <strong>{tx(chord.symbol)}</strong>
              <small>{tx(chord.roman)}</small>
            </Link>
          ) : (
            <span>
              <strong>{tx(chord.symbol)}</strong>
              <small>{tx(chord.roman)}</small>
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
  const tx = useText();
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
      <svg className="fifths-wheel" viewBox={`0 0 ${SIZE} ${SIZE}`} role="group" aria-label={tx("Círculo de quintas")}>
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
              aria-label={tx(tx.template("{p0} y {p1}: {p2}", {p0: tx(key.major.name), p1: tx(key.minor.name), p2: tx(key.signature)}))}
              onClick={() => setSelected(index)}
              onKeyDown={(event) => onKey(event, index)}
            >
              <path className={segmentClass(index, false)} d={wedge(index, MIDDLE, OUTER)} />
              <path className={segmentClass(index, true)} d={wedge(index, INNER, MIDDLE)} />
              <text className={`fifths-label${isSelected ? " is-selected" : ""}`} x={mx} y={my + (key.signatureShort ? 0 : 5)} textAnchor="middle">
                {tx(key.major.label)}
              </text>
              {key.signatureShort && (
                <text className={`fifths-signature${isSelected ? " is-selected" : ""}`} x={mx} y={my + 15} textAnchor="middle">
                  {tx(key.signatureShort)}
                </text>
              )}
              <text className={`fifths-label is-minor${isSelected ? " is-selected" : ""}`} x={nx} y={ny + 4} textAnchor="middle">
                {tx(key.minor.label)}
              </text>
            </g>
          );
        })}
        <circle cx={CENTER} cy={CENTER} r={INNER - 4} fill="none" />
        <text className="fifths-center" x={CENTER} y={CENTER - 8} textAnchor="middle">
          {tx(current.major.label)} {tx(" mayor")}</text>
        <text className="fifths-center" x={CENTER} y={CENTER + 14} textAnchor="middle">
          {tx(current.signatureShort || "Sin alteraciones")}
        </text>
      </svg>

      <div className="fifths-details" aria-live="polite">
        <h2>
          {tx(current.major.name)} {tx(" y ")}{tx(current.minor.name)}
        </h2>
        <dl>
          <dt>{tx("Armadura")}</dt>
          <dd>{tx(current.signature)}</dd>
          {current.enharmonic && (
            <>
              <dt>{tx("También")}</dt>
              <dd>{tx(current.enharmonic)}</dd>
            </>
          )}
          <dt>{tx(current.major.name)}</dt>
          <dd>{tx(current.major.notes)}</dd>
          <dt>{tx(current.minor.name)}</dt>
          <dd>{tx(current.minor.notes)}</dd>
          <dt>{tx("Vecinas")}</dt>
          <dd>
            {tx(keys[(selected + 11) % 12].major.name)} {tx(" (IV) · ")}{tx(keys[(selected + 1) % 12].major.name)} {tx(" (V)")}</dd>
        </dl>
        <div>
          <strong>{tx("Acordes de ")}{tx(current.major.name)}</strong>
          <ChordChips chords={current.majorChords} />
        </div>
        <div>
          <strong>{tx("Acordes de ")}{tx(current.minor.name)}</strong>
          <ChordChips chords={current.minorChords} />
        </div>
        <p>
          <Link href={current.major.href} prefetch={false}>
            {tx("Escala de ")}{tx(current.major.name)}
          </Link>{tx(" ")}
          {tx("·")}{tx(" ")}
          <Link href={current.minor.href} prefetch={false}>
            {tx("Escala de ")}{tx(current.minor.name)}
          </Link>
        </p>
      </div>
    </div>
  );
}
