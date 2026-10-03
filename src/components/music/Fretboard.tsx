import {useText} from "@/i18n/use-text";
import "./music.css";

const FRET_WIDTH = 54;
const STRING_GAP = 24;
const LEFT = 58;
const TOP = 16;
const INLAYS = [3, 5, 7, 9];

/**
 * Guitar neck from the open strings to fret 12 with every note of a scale
 * marked, highest string on top (as in tablature).
 */
export function Fretboard({
  tuning,
  stringLabels,
  pitchClasses,
  rootPc,
  noteLabel,
  title,
  lastFret = 12,
}: {
  /** MIDI notes of the open strings, lowest first. */
  tuning: number[];
  stringLabels: string[];
  pitchClasses: number[];
  rootPc: number;
  /** Name for a pitch class in the scale's spelling. */
  noteLabel: Record<number, string>;
  title: string;
  lastFret?: number;
}) {
  const tx = useText();
  const strings = tuning.length;
  const width = LEFT + lastFret * FRET_WIDTH + 12;
  const height = TOP * 2 + (strings - 1) * STRING_GAP + 18;
  // Row 0 is the highest string.
  const y = (row: number) => TOP + row * STRING_GAP;
  const dotX = (fret: number) => (fret === 0 ? LEFT - 22 : LEFT + (fret - 0.5) * FRET_WIDTH);

  return (
    <svg className="fretboard" viewBox={`0 0 ${width} ${height}`} role="img" aria-label={tx(title)}>
      {INLAYS.map((fret) => (
        <circle key={fret} className="fretboard-inlay" cx={dotX(fret)} cy={y((strings - 1) / 2)} r={5} />
      ))}
      <circle className="fretboard-inlay" cx={dotX(12)} cy={y((strings - 1) / 2 - 1)} r={5} />
      <circle className="fretboard-inlay" cx={dotX(12)} cy={y((strings - 1) / 2 + 1)} r={5} />
      <line className="fretboard-nut" x1={LEFT} x2={LEFT} y1={y(0)} y2={y(strings - 1)} />
      {Array.from({ length: lastFret }, (_, i) => (
        <line key={i} className="fretboard-fret" x1={LEFT + (i + 1) * FRET_WIDTH} x2={LEFT + (i + 1) * FRET_WIDTH} y1={y(0)} y2={y(strings - 1)} />
      ))}
      {Array.from({ length: strings }, (_, row) => (
        <line key={row} className="fretboard-string" x1={LEFT - 34} x2={LEFT + lastFret * FRET_WIDTH} y1={y(row)} y2={y(row)} />
      ))}
      {Array.from({ length: lastFret }, (_, i) => (
        <text key={i} className="fretboard-number" x={dotX(i + 1)} y={height - 4} textAnchor="middle">
          {tx(i + 1)}
        </text>
      ))}
      {tuning.map((open, stringIndex) => {
        const row = strings - 1 - stringIndex;
        return (
          <g key={stringIndex}>
            <text className="fretboard-string-label" x={4} y={y(row) + 4}>
              {tx(stringLabels[stringIndex])}
            </text>
            {Array.from({ length: lastFret + 1 }, (_, fret) => {
              const pc = (open + fret) % 12;
              if (!pitchClasses.includes(pc)) return null;
              return (
                <g key={fret}>
                  <circle className={pc === rootPc ? "fretboard-dot is-root" : "fretboard-dot"} cx={dotX(fret)} cy={y(row)} r={10} />
                  <text className="fretboard-dot-label" x={dotX(fret)} y={y(row) + 3.5} textAnchor="middle">
                    {tx(noteLabel[pc])}
                  </text>
                </g>
              );
            })}
          </g>
        );
      })}
    </svg>
  );
}
