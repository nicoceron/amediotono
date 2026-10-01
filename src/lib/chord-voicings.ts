import { IV, mod, pitchClass, type Chord, type ChordTypeId } from "@/lib/music-theory";

/**
 * Fingerings for the chord dictionary. Guitar shapes come from the open
 * chords every method teaches plus the movable barre forms (Mi and La
 * shapes); ukulele shapes come from a small search over the first frets.
 * scripts/check-chord-voicings.mjs verifies every voicing sounds the chord.
 */

/** Frets from the lowest string to the highest; −1 = muted string. */
export type Voicing = {
  frets: number[];
  /** Finger per string (1 = índice … 4 = meñique; 0 = none). */
  fingers?: number[];
  barre?: { fret: number; from: number; to: number };
  label: string;
};

export const GUITAR_TUNING = [40, 45, 50, 55, 59, 64]; // Mi La Re Sol Si Mi
export const UKULELE_TUNING = [67, 60, 64, 69]; // Sol Do Mi La (re-entrante)

type OpenShape = { frets: string; fingers: string };

/** Open-position chords keyed by "<pitch class>:<type>". x = muted. */
const OPEN_SHAPES: Record<string, OpenShape> = {
  "0:mayor": { frets: "x32010", fingers: "032010" },
  "2:mayor": { frets: "xx0232", fingers: "000132" },
  "4:mayor": { frets: "022100", fingers: "023100" },
  "7:mayor": { frets: "320003", fingers: "210003" },
  "9:mayor": { frets: "x02220", fingers: "001230" },
  "9:menor": { frets: "x02210", fingers: "002310" },
  "2:menor": { frets: "xx0231", fingers: "000231" },
  "4:menor": { frets: "022000", fingers: "023000" },
  "0:septima": { frets: "x32310", fingers: "032410" },
  "2:septima": { frets: "xx0212", fingers: "000213" },
  "4:septima": { frets: "020100", fingers: "020100" },
  "7:septima": { frets: "320001", fingers: "320001" },
  "9:septima": { frets: "x02020", fingers: "002030" },
  "11:septima": { frets: "x21202", fingers: "021304" },
  "0:septima-mayor": { frets: "x32000", fingers: "032000" },
  "2:septima-mayor": { frets: "xx0222", fingers: "000123" },
  "4:septima-mayor": { frets: "021100", fingers: "031200" },
  "5:septima-mayor": { frets: "xx3210", fingers: "003210" },
  "7:septima-mayor": { frets: "320002", fingers: "320001" },
  "9:septima-mayor": { frets: "x02120", fingers: "002130" },
  "9:menor-septima": { frets: "x02010", fingers: "002010" },
  "2:menor-septima": { frets: "xx0211", fingers: "000211" },
  "4:menor-septima": { frets: "020000", fingers: "020000" },
  "0:sus2": { frets: "x30013", fingers: "030014" },
  "2:sus2": { frets: "xx0230", fingers: "000130" },
  "7:sus2": { frets: "300233", fingers: "200134" },
  "9:sus2": { frets: "x02200", fingers: "001200" },
  "0:sus4": { frets: "x33011", fingers: "034011" },
  "2:sus4": { frets: "xx0233", fingers: "000134" },
  "4:sus4": { frets: "022200", fingers: "023400" },
  "7:sus4": { frets: "330013", fingers: "230014" },
  "9:sus4": { frets: "x02230", fingers: "001230" },
  "2:disminuido": { frets: "xx0131", fingers: "000132" },
  "0:aumentado": { frets: "x32110", fingers: "032110" },
};

type Template = {
  /** Lowest string that carries the root (0 = 6.ª cuerda, 1 = 5.ª, 2 = 4.ª). */
  rootString: number;
  /** Offsets from the root fret; null = muted. */
  offsets: (number | null)[];
  fingers: number[];
  /** Strings covered by the index-finger barre, when the shape needs one. */
  barre?: [number, number];
};

const E_SHAPE = 0;
const A_SHAPE = 1;
const D_SHAPE = 2;

/** Movable shapes (CAGED "Mi" and "La" forms). */
const TEMPLATES: Partial<Record<ChordTypeId, Template[]>> = {
  mayor: [
    { rootString: E_SHAPE, offsets: [0, 2, 2, 1, 0, 0], fingers: [1, 3, 4, 2, 1, 1], barre: [0, 5] },
    { rootString: A_SHAPE, offsets: [null, 0, 2, 2, 2, 0], fingers: [0, 1, 3, 3, 3, 1], barre: [1, 5] },
  ],
  menor: [
    { rootString: E_SHAPE, offsets: [0, 2, 2, 0, 0, 0], fingers: [1, 3, 4, 1, 1, 1], barre: [0, 5] },
    { rootString: A_SHAPE, offsets: [null, 0, 2, 2, 1, 0], fingers: [0, 1, 3, 4, 2, 1], barre: [1, 5] },
  ],
  septima: [
    { rootString: E_SHAPE, offsets: [0, 2, 0, 1, 0, 0], fingers: [1, 3, 1, 2, 1, 1], barre: [0, 5] },
    { rootString: A_SHAPE, offsets: [null, 0, 2, 0, 2, 0], fingers: [0, 1, 3, 1, 4, 1], barre: [1, 5] },
  ],
  "septima-mayor": [
    { rootString: E_SHAPE, offsets: [0, null, 1, 1, 0, null], fingers: [1, 0, 3, 4, 2, 0] },
    { rootString: A_SHAPE, offsets: [null, 0, 2, 1, 2, 0], fingers: [0, 1, 3, 2, 4, 1], barre: [1, 5] },
  ],
  "menor-septima": [
    { rootString: E_SHAPE, offsets: [0, 2, 0, 0, 0, 0], fingers: [1, 3, 1, 1, 1, 1], barre: [0, 5] },
    { rootString: A_SHAPE, offsets: [null, 0, 2, 0, 1, 0], fingers: [0, 1, 3, 1, 2, 1], barre: [1, 5] },
  ],
  sus2: [{ rootString: A_SHAPE, offsets: [null, 0, 2, 2, 0, 0], fingers: [0, 1, 3, 4, 1, 1], barre: [1, 5] }],
  sus4: [
    { rootString: E_SHAPE, offsets: [0, 2, 2, 2, 0, 0], fingers: [1, 2, 3, 4, 1, 1], barre: [0, 5] },
    { rootString: A_SHAPE, offsets: [null, 0, 2, 2, 3, 0], fingers: [0, 1, 2, 3, 4, 1], barre: [1, 5] },
  ],
  disminuido: [
    { rootString: A_SHAPE, offsets: [null, 0, 1, 2, 1, null], fingers: [0, 1, 2, 4, 3, 0] },
    { rootString: D_SHAPE, offsets: [null, null, 0, 1, 3, 1], fingers: [0, 0, 1, 2, 4, 3] },
  ],
  aumentado: [
    { rootString: E_SHAPE, offsets: [0, null, 2, 1, 1, null], fingers: [1, 0, 4, 2, 3, 0] },
    { rootString: A_SHAPE, offsets: [null, 0, 3, 2, 2, null], fingers: [0, 1, 4, 2, 3, 0] },
  ],
  semidisminuido: [
    { rootString: E_SHAPE, offsets: [0, null, 0, 0, -1, null], fingers: [2, 0, 3, 4, 1, 0] },
    { rootString: A_SHAPE, offsets: [null, 0, 1, 0, 1, null], fingers: [0, 1, 3, 2, 4, 0] },
  ],
};

const SHAPE_NAMES = ["forma de Mi", "forma de La", "forma de Re"];

function parseShape(shape: OpenShape): Voicing {
  return {
    frets: [...shape.frets].map((char) => (char === "x" ? -1 : Number(char))),
    fingers: [...shape.fingers].map(Number),
    label: "Posición abierta",
  };
}

function fromTemplate(template: Template, rootPc: number): Voicing | undefined {
  const fret = mod(rootPc - pitchClass({ letter: [2, 5, 1][template.rootString], accidental: 0 }), 12);
  if (template.offsets.some((offset) => offset !== null && fret + offset < 0)) return undefined;
  const frets = template.offsets.map((offset) => (offset === null ? -1 : fret + offset));
  // Strings that end up open (the nut replaces the barre at fret 0, or a −1
  // offset at fret 1) need no finger: renumber the rest from 1.
  const freed = template.fingers.some((finger, i) => finger > 0 && frets[i] <= 0);
  const used = [...new Set(template.fingers.filter((_, i) => frets[i] > 0))].sort((a, b) => a - b);
  const fingers = template.fingers.map((finger, i) => (frets[i] <= 0 ? 0 : freed ? used.indexOf(finger) + 1 : finger));
  if (fret === 0) return { frets, fingers, label: "Posición abierta" };
  return {
    frets,
    fingers,
    barre: template.barre ? { fret, from: template.barre[0], to: template.barre[1] } : undefined,
    label: template.barre
      ? `Cejilla en el traste ${fret} (${SHAPE_NAMES[template.rootString]})`
      : `Traste ${fret} (${SHAPE_NAMES[template.rootString]})`,
  };
}

function soundingPcs(frets: number[], tuning: number[]) {
  return frets.flatMap((fret, i) => (fret < 0 ? [] : [mod(tuning[i] + fret, 12)]));
}

/** True when the voicing plays every chord tone (the fifth may be left out) and nothing else. */
export function voicingMatches(chord: Chord, frets: number[], tuning: number[], requireRootInBass: boolean) {
  const sounding = soundingPcs(frets, tuning);
  if (sounding.some((pc) => !chord.pitchClasses.includes(pc))) return false;
  const rootPc = chord.pitchClasses[0];
  const fifthPc = mod(rootPc + IV.P5.semitones, 12);
  const optional = chord.pitchClasses.length === 4 ? new Set([fifthPc]) : new Set<number>();
  if (chord.pitchClasses.some((pc) => !optional.has(pc) && !sounding.includes(pc))) return false;
  if (requireRootInBass) {
    const lowest = frets.findIndex((fret) => fret >= 0);
    if (mod(tuning[lowest] + frets[lowest], 12) !== rootPc) return false;
  }
  return true;
}

function lowestFret(voicing: Voicing) {
  const fretted = voicing.frets.filter((fret) => fret > 0);
  return fretted.length ? Math.min(...fretted) : 0;
}

/** Up to three guitar voicings, easiest first. */
export function guitarVoicings(chord: Chord): Voicing[] {
  const rootPc = chord.pitchClasses[0];
  const result: Voicing[] = [];
  const open = OPEN_SHAPES[`${rootPc}:${chord.type.id}`];
  if (open) result.push(parseShape(open));

  const movable = (TEMPLATES[chord.type.id] ?? [])
    .map((template) => fromTemplate(template, rootPc))
    .filter((voicing): voicing is Voicing => Boolean(voicing))
    .filter((voicing) => !result.some((other) => other.frets.join() === voicing.frets.join()))
    .sort((a, b) => lowestFret(a) - lowestFret(b));
  result.push(...movable);

  return result.filter((voicing) => voicingMatches(chord, voicing.frets, GUITAR_TUNING, true)).slice(0, 3);
}

/** Two ukulele voicings found by search: the most compact one and one higher up the neck. */
export function ukuleleVoicings(chord: Chord): Voicing[] {
  const candidates: { frets: number[]; score: number; low: number }[] = [];
  const maxFret = 9;
  for (let a = 0; a <= maxFret; a += 1)
    for (let b = 0; b <= maxFret; b += 1)
      for (let c = 0; c <= maxFret; c += 1)
        for (let d = 0; d <= maxFret; d += 1) {
          const frets = [a, b, c, d];
          const fretted = frets.filter((fret) => fret > 0);
          const low = fretted.length ? Math.min(...fretted) : 0;
          const high = fretted.length ? Math.max(...fretted) : 0;
          if (high - low > 3) continue;
          if (!voicingMatches(chord, frets, UKULELE_TUNING, false)) continue;
          candidates.push({ frets, low, score: frets.reduce((sum, fret) => sum + fret, 0) + high * 2 + fretted.length });
        }
  candidates.sort((x, y) => x.score - y.score);
  const first = candidates[0];
  if (!first) return [];
  // The alternative is a closed shape (no open strings) from where the first one ends.
  const firstHigh = Math.max(...first.frets);
  const second = candidates.find(
    (candidate) =>
      candidate.frets.every((fret) => fret > 0) &&
      candidate.low >= Math.max(firstHigh, 2) &&
      candidate.frets.join() !== first.frets.join(),
  );
  return [first, second]
    .filter((candidate): candidate is (typeof candidates)[number] => Boolean(candidate))
    .map((candidate) => ({
      frets: candidate.frets,
      label: candidate.frets.includes(0) ? "Posición abierta" : `Desde el traste ${candidate.low}`,
    }));
}
