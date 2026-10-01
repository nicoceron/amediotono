import "./music.css";

const WHITE_WIDTH = 26;
const WHITE_HEIGHT = 120;
const BLACK_WIDTH = 16;
const BLACK_HEIGHT = 74;
const WHITE_PCS = [0, 2, 4, 5, 7, 9, 11];
const BLACK_OFFSETS: Record<number, number> = { 1: 1, 3: 2, 6: 4, 8: 5, 10: 6 };

/**
 * Piano keyboard from Do of `startOctave`, with the given MIDI notes pressed
 * and labelled. Defaults to two octaves (Do4 = MIDI 60).
 */
export function PianoKeyboard({
  highlighted,
  labels,
  roots = [],
  startOctave = 4,
  octaves = 2,
  title,
}: {
  highlighted: number[];
  /** Label per highlighted note, same order. */
  labels: string[];
  /** Highlighted notes drawn in the root colour. */
  roots?: number[];
  startOctave?: number;
  octaves?: number;
  title: string;
}) {
  const startMidi = (startOctave + 1) * 12;
  const whites: number[] = [];
  const blacks: { midi: number; x: number }[] = [];
  for (let octave = 0; octave < octaves; octave += 1) {
    for (const pc of WHITE_PCS) whites.push(startMidi + octave * 12 + pc);
    for (const [pc, offset] of Object.entries(BLACK_OFFSETS)) {
      blacks.push({
        midi: startMidi + octave * 12 + Number(pc),
        x: (octave * 7 + offset) * WHITE_WIDTH - BLACK_WIDTH / 2,
      });
    }
  }
  // A closing Do makes chords and scales that end on the octave readable.
  whites.push(startMidi + octaves * 12);
  const width = whites.length * WHITE_WIDTH;
  const label = (midi: number) => labels[highlighted.indexOf(midi)];
  const keyClass = (midi: number, base: string) =>
    highlighted.includes(midi) ? `${base} is-on${roots.includes(midi) ? " is-root" : ""}` : base;

  return (
    <svg className="piano-keyboard" viewBox={`0 0 ${width + 2} ${WHITE_HEIGHT + 2}`} role="img" aria-label={title}>
      {whites.map((midi, i) => (
        <g key={midi}>
          <rect className={keyClass(midi, "piano-white")} x={1 + i * WHITE_WIDTH} y={1} width={WHITE_WIDTH} height={WHITE_HEIGHT} rx={3} />
          {highlighted.includes(midi) && (
            <text className="piano-label" x={1 + i * WHITE_WIDTH + WHITE_WIDTH / 2} y={WHITE_HEIGHT - 10} textAnchor="middle">
              {label(midi)}
            </text>
          )}
        </g>
      ))}
      {blacks.map(({ midi, x }) => (
        <g key={midi}>
          <rect className={keyClass(midi, "piano-black")} x={1 + x} y={1} width={BLACK_WIDTH} height={BLACK_HEIGHT} rx={2} />
          {highlighted.includes(midi) && (
            <text className="piano-label piano-label--black" x={1 + x + BLACK_WIDTH / 2} y={BLACK_HEIGHT - 8} textAnchor="middle">
              {label(midi)}
            </text>
          )}
        </g>
      ))}
    </svg>
  );
}
