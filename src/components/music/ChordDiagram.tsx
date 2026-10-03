import {useText} from "@/i18n/use-text";
import "./music.css";
import type { Voicing } from "@/lib/chord-voicings";

const STRING_GAP = 22;
const FRET_GAP = 26;
const LEFT = 30;
const TOP = 34;

/**
 * Chord box for fretted instruments, drawn the way method books do: strings
 * vertical (lowest on the left), × for muted and ○ for open strings, finger
 * numbers in the dots and the root highlighted.
 */
export function ChordDiagram({
  voicing,
  noteNames,
  rootStrings,
  title,
  frets = 5,
}: {
  voicing: Voicing;
  /** Sounding note per string ("" when muted), shown under the diagram. */
  noteNames: string[];
  /** Strings whose note is the chord root. */
  rootStrings: boolean[];
  /** Accessible description, e.g. "Do mayor en guitarra". */
  title: string;
  frets?: number;
}) {
  const tx = useText();
  const strings = voicing.frets.length;
  const fretted = voicing.frets.filter((fret) => fret > 0);
  const highest = fretted.length ? Math.max(...fretted) : 0;
  const base = highest <= frets ? 1 : Math.min(...fretted);
  const width = LEFT + (strings - 1) * STRING_GAP + 22;
  const height = TOP + frets * FRET_GAP + 30;
  const x = (string: number) => LEFT + string * STRING_GAP;
  const y = (fret: number) => TOP + (fret - base + 0.5) * FRET_GAP;
  const fretList = voicing.frets.map((fret) => (fret < 0 ? "x" : fret)).join(" ");

  return (
    <svg
      className="chord-diagram"
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label={tx(tx.template("{p0}: {p1}", {p0: tx(title), p1: tx(fretList)}))}
    >
      {base > 1 && (
        <text className="chord-diagram-base" x={LEFT - 12} y={y(base) + 4} textAnchor="end">
          {tx(base)}
        </text>
      )}
      {Array.from({ length: frets + 1 }, (_, i) => (
        <line
          key={`fret-${i}`}
          className={i === 0 && base === 1 ? "chord-diagram-nut" : "chord-diagram-fret"}
          x1={x(0)}
          x2={x(strings - 1)}
          y1={TOP + i * FRET_GAP}
          y2={TOP + i * FRET_GAP}
        />
      ))}
      {Array.from({ length: strings }, (_, i) => (
        <line key={`string-${i}`} className="chord-diagram-string" x1={x(i)} x2={x(i)} y1={TOP} y2={TOP + frets * FRET_GAP} />
      ))}
      {voicing.frets.map((fret, i) =>
        fret < 0 ? (
          <text key={`mute-${i}`} className="chord-diagram-marker" x={x(i)} y={TOP - 10} textAnchor="middle">
            {tx("×")}</text>
        ) : fret === 0 ? (
          <circle key={`open-${i}`} className="chord-diagram-open" cx={x(i)} cy={TOP - 14} r={5.5} />
        ) : null,
      )}
      {voicing.barre && (
        <rect
          className="chord-diagram-barre"
          x={x(voicing.barre.from) - 9}
          y={y(voicing.barre.fret) - 9}
          width={x(voicing.barre.to) - x(voicing.barre.from) + 18}
          height={18}
          rx={9}
        />
      )}
      {voicing.frets.map((fret, i) => {
        if (fret <= 0) return null;
        const onBarre = voicing.barre && voicing.barre.fret === fret && i >= voicing.barre.from && i <= voicing.barre.to;
        const finger = voicing.fingers?.[i];
        return (
          <g key={`dot-${i}`}>
            {!onBarre && (
              <circle className={rootStrings[i] ? "chord-diagram-dot is-root" : "chord-diagram-dot"} cx={x(i)} cy={y(fret)} r={9} />
            )}
            {onBarre && rootStrings[i] && <circle className="chord-diagram-dot is-root" cx={x(i)} cy={y(fret)} r={9} />}
            {finger ? (
              <text className="chord-diagram-finger" x={x(i)} y={y(fret) + 4} textAnchor="middle">
                {tx(finger)}
              </text>
            ) : null}
          </g>
        );
      })}
      {noteNames.map((name, i) => (
        <text key={`note-${i}`} className="chord-diagram-note" x={x(i)} y={height - 8} textAnchor="middle">
          {tx(name)}
        </text>
      ))}
    </svg>
  );
}
