/**
 * Music theory behind the chord dictionary (/acordes), the scale dictionary
 * (/escalas) and the circle of fifths. Notes are spelled by letter, so
 * Re♭ mayor is Re♭–Fa–La♭ (never Do♯–Fa–Sol♯) and Do♯ menor uses Mi, not Fa♭.
 */

/** letter: 0–6 = Do…Si (C…B); accidental: −2 (𝄫) … +2 (𝄪). */
export type Note = { letter: number; accidental: number };

export type Interval = { steps: number; semitones: number };

const LETTER_PCS = [0, 2, 4, 5, 7, 9, 11];
const LETTERS_EN = ["C", "D", "E", "F", "G", "A", "B"];
const LETTERS_ES = ["Do", "Re", "Mi", "Fa", "Sol", "La", "Si"];
const LETTER_SLUGS = ["do", "re", "mi", "fa", "sol", "la", "si"];

const ACCIDENTAL_SYMBOLS = ["𝄫", "♭", "", "♯", "𝄪"];
const ACCIDENTAL_WORDS = [" doble bemol", " bemol", "", " sostenido", " doble sostenido"];

export const mod = (value: number, base: number) => ((value % base) + base) % base;

export const IV = {
  P1: { steps: 0, semitones: 0 },
  m2: { steps: 1, semitones: 1 },
  M2: { steps: 1, semitones: 2 },
  m3: { steps: 2, semitones: 3 },
  M3: { steps: 2, semitones: 4 },
  P4: { steps: 3, semitones: 5 },
  A4: { steps: 3, semitones: 6 },
  d5: { steps: 4, semitones: 6 },
  P5: { steps: 4, semitones: 7 },
  A5: { steps: 4, semitones: 8 },
  m6: { steps: 5, semitones: 8 },
  M6: { steps: 5, semitones: 9 },
  d7: { steps: 6, semitones: 9 },
  m7: { steps: 6, semitones: 10 },
  M7: { steps: 6, semitones: 11 },
} satisfies Record<string, Interval>;

export const INTERVAL_NAMES_ES: Record<keyof typeof IV, string> = {
  P1: "fundamental",
  m2: "segunda menor",
  M2: "segunda mayor",
  m3: "tercera menor",
  M3: "tercera mayor",
  P4: "cuarta justa",
  A4: "cuarta aumentada",
  d5: "quinta disminuida",
  P5: "quinta justa",
  A5: "quinta aumentada",
  m6: "sexta menor",
  M6: "sexta mayor",
  d7: "séptima disminuida",
  m7: "séptima menor",
  M7: "séptima mayor",
};

export const INTERVAL_SHORT: Record<keyof typeof IV, string> = {
  P1: "1",
  m2: "♭2",
  M2: "2",
  m3: "♭3",
  M3: "3",
  P4: "4",
  A4: "♯4",
  d5: "♭5",
  P5: "5",
  A5: "♯5",
  m6: "♭6",
  M6: "6",
  d7: "𝄫7",
  m7: "♭7",
  M7: "7",
};

export type IntervalKey = keyof typeof IV;

export const note = (letter: number, accidental = 0): Note => ({ letter, accidental });

export function pitchClass(n: Note) {
  return mod(LETTER_PCS[n.letter] + n.accidental, 12);
}

/** "Re♭" (es), "D♭" (en), "Re bemol" (long). */
export function noteName(n: Note, style: "es" | "en" | "long" = "es") {
  if (style === "long") return `${LETTERS_ES[n.letter]}${ACCIDENTAL_WORDS[n.accidental + 2]}`;
  const letters = style === "en" ? LETTERS_EN : LETTERS_ES;
  return `${letters[n.letter]}${ACCIDENTAL_SYMBOLS[n.accidental + 2]}`;
}

/** "D♭" with ASCII accidentals for chord symbols people type: "Db", "F#". */
export function noteNameAscii(n: Note) {
  return `${LETTERS_EN[n.letter]}${["bb", "b", "", "#", "##"][n.accidental + 2]}`;
}

export function noteSlug(n: Note) {
  return `${LETTER_SLUGS[n.letter]}${ACCIDENTAL_WORDS[n.accidental + 2].replace(/ /g, "-")}`;
}

/** Notes such as Mi♯, Si♯, Do♭, Fa♭ or double accidentals sound like a plainer note. */
export function isUnusualSpelling(n: Note) {
  return Math.abs(n.accidental) === 2 || (n.accidental === 1 && (n.letter === 2 || n.letter === 6)) || (n.accidental === -1 && (n.letter === 0 || n.letter === 3));
}

/** The simplest name for the same sound: Mi♯ → Fa, Si𝄫 → La. */
export function plainEquivalent(n: Note): Note {
  const pc = pitchClass(n);
  const natural = LETTER_PCS.indexOf(pc);
  if (natural !== -1) return note(natural);
  return n.accidental > 0 ? note(LETTER_PCS.indexOf(pc - 1), 1) : note(LETTER_PCS.indexOf(pc + 1), -1);
}

export function transpose(n: Note, interval: Interval): Note {
  const letter = (n.letter + interval.steps) % 7;
  let accidental = mod(pitchClass(n) + interval.semitones - LETTER_PCS[letter], 12);
  if (accidental > 6) accidental -= 12;
  return { letter, accidental };
}

/** Same pitch class, every reasonable spelling (one or two). */
function rootCandidates(pc: number): Note[] {
  const natural = LETTER_PCS.indexOf(pc);
  if (natural !== -1) return [note(natural)];
  return [note(LETTER_PCS.indexOf(pc - 1), 1), note(LETTER_PCS.indexOf(pc + 1), -1)];
}

function spellingCost(notes: Note[]) {
  return notes.reduce(
    (total, n) => total + Math.abs(n.accidental) + (Math.abs(n.accidental) === 2 ? 2 : 0) + (isUnusualSpelling(n) ? 0.5 : 0),
    0,
  );
}

/**
 * Ties go to the usual key names: Re♭, Mi♭, Fa♯, La♭, Si♭ for major and
 * Do♯, Re♯, Fa♯, Sol♯, Si♭ for minor (so Fa♯ mayor and Re♯ menor are relatives).
 */
const PREFERRED_SHARP = { major: new Set([6]), minor: new Set([1, 3, 6, 8]) };

function chooseRoot(pc: number, intervals: Interval[], family: "major" | "minor") {
  const candidates = rootCandidates(pc);
  if (candidates.length === 1) return candidates[0];
  const preferSharp = PREFERRED_SHARP[family].has(pc);
  return candidates
    .map((root) => ({ root, cost: spellingCost(intervals.map((interval) => transpose(root, interval))) }))
    .sort((a, b) => a.cost - b.cost || (a.root.accidental > 0 === preferSharp ? -1 : 1))[0].root;
}

/* ------------------------------------------------------------------ chords */

export type ChordTypeId =
  | "mayor"
  | "menor"
  | "septima"
  | "septima-mayor"
  | "menor-septima"
  | "sus2"
  | "sus4"
  | "disminuido"
  | "aumentado"
  | "semidisminuido";

export type ChordType = {
  id: ChordTypeId;
  /** Spanish name after the root: "Do menor séptima". */
  name: string;
  /** Symbol after the root, e.g. "m7". */
  symbol: string;
  /** Other common ways to write it. */
  altSymbols: string[];
  intervals: IntervalKey[];
  family: "major" | "minor";
  /** One-line character of the chord, used in page copy. */
  sound: string;
  /** Where it typically shows up. */
  usage: string;
};

export const CHORD_TYPES: ChordType[] = [
  {
    id: "mayor",
    name: "mayor",
    symbol: "",
    altSymbols: ["M", "maj"],
    intervals: ["P1", "M3", "P5"],
    family: "major",
    sound: "estable, luminoso y alegre",
    usage: "Es el acorde básico de casi cualquier canción: funciona como punto de llegada (tónica) y como acorde de paso.",
  },
  {
    id: "menor",
    name: "menor",
    symbol: "m",
    altSymbols: ["min", "-"],
    intervals: ["P1", "m3", "P5"],
    family: "minor",
    sound: "estable pero más oscuro, melancólico o íntimo",
    usage: "Aparece en baladas, boleros, pasillos y en casi toda la música popular; en una tonalidad mayor suele ser el acorde relativo o el segundo grado.",
  },
  {
    id: "septima",
    name: "séptima",
    symbol: "7",
    altSymbols: ["dom7"],
    intervals: ["P1", "M3", "P5", "m7"],
    family: "major",
    sound: "tenso: pide resolver hacia otro acorde",
    usage: "Es el acorde de dominante (V7): prepara la llegada a la tónica y es la base del blues, del son y de muchos cierres de canción.",
  },
  {
    id: "septima-mayor",
    name: "séptima mayor",
    symbol: "maj7",
    altSymbols: ["Δ7", "M7", "7M"],
    intervals: ["P1", "M3", "P5", "M7"],
    family: "major",
    sound: "suave, abierto y soñador",
    usage: "Muy usado en bossa nova, jazz, baladas y pop: da color a la tónica o al cuarto grado sin crear tensión fuerte.",
  },
  {
    id: "menor-septima",
    name: "menor séptima",
    symbol: "m7",
    altSymbols: ["min7", "-7"],
    intervals: ["P1", "m3", "P5", "m7"],
    family: "minor",
    sound: "relajado, cálido y algo melancólico",
    usage: "Es el segundo grado de la progresión ii–V–I del jazz y aparece en salsa, funk, neo soul y pop.",
  },
  {
    id: "sus2",
    name: "suspendido 2",
    symbol: "sus2",
    altSymbols: ["2"],
    intervals: ["P1", "M2", "P5"],
    family: "major",
    sound: "abierto y ambiguo: ni mayor ni menor",
    usage: "Se usa para dar aire a un acorde mayor o menor, en rasgueos de pop y rock y en intros con cuerdas al aire.",
  },
  {
    id: "sus4",
    name: "suspendido 4",
    symbol: "sus4",
    altSymbols: ["sus"],
    intervals: ["P1", "P4", "P5"],
    family: "major",
    sound: "suspendido, con ganas de volver al acorde mayor",
    usage: "Suele resolver al acorde mayor de la misma fundamental (Xsus4 → X): es un adorno clásico en rasgueos y finales.",
  },
  {
    id: "disminuido",
    name: "disminuido",
    symbol: "dim",
    altSymbols: ["°", "m♭5"],
    intervals: ["P1", "m3", "d5"],
    family: "minor",
    sound: "inestable y tenso",
    usage: "Es el séptimo grado de la escala mayor y sirve como acorde de paso entre dos acordes que están a un tono de distancia.",
  },
  {
    id: "aumentado",
    name: "aumentado",
    symbol: "aug",
    altSymbols: ["+", "♯5"],
    intervals: ["P1", "M3", "A5"],
    family: "major",
    sound: "misterioso y en suspenso",
    usage: "Aparece como acorde de paso (por ejemplo I → I aumentado → vi) y en introducciones de baladas y boleros.",
  },
  {
    id: "semidisminuido",
    name: "semidisminuido",
    symbol: "m7♭5",
    altSymbols: ["ø", "m7b5"],
    intervals: ["P1", "m3", "d5", "m7"],
    family: "minor",
    sound: "tenso pero suave, con un color oscuro",
    usage: "Es el segundo grado de las tonalidades menores (iiø–V7–i), muy común en boleros, tango y jazz.",
  },
];

const CHORD_TYPE_BY_ID = new Map(CHORD_TYPES.map((type) => [type.id, type]));

export function getChordType(id: string) {
  return CHORD_TYPE_BY_ID.get(id as ChordTypeId);
}

export type Chord = {
  slug: string;
  root: Note;
  type: ChordType;
  notes: Note[];
  /** "Do♯ menor" */
  name: string;
  /** "Do sostenido menor" */
  longName: string;
  /** "C#m" — what people type and see in songbooks. */
  symbol: string;
  /** "C♯m" */
  displaySymbol: string;
  pitchClasses: number[];
};

function buildChord(root: Note, type: ChordType): Chord {
  const notes = type.intervals.map((key) => transpose(root, IV[key]));
  return {
    slug: `${noteSlug(root)}-${type.id}`,
    root,
    type,
    notes,
    name: `${noteName(root)} ${type.name}`,
    longName: `${noteName(root, "long")} ${type.name}`,
    symbol: `${noteNameAscii(root)}${type.symbol.replace("♭", "b")}`,
    displaySymbol: `${noteName(root, "en")}${type.symbol}`,
    pitchClasses: notes.map(pitchClass),
  };
}

/** 12 roots × every chord type, each root spelled the way that reads best. */
export const CHORDS: Chord[] = CHORD_TYPES.flatMap((type) =>
  Array.from({ length: 12 }, (_, pc) =>
    buildChord(chooseRoot(pc, type.intervals.map((key) => IV[key]), type.family), type),
  ),
);

const CHORD_BY_SLUG = new Map(CHORDS.map((chord) => [chord.slug, chord]));
const CHORD_BY_PC_TYPE = new Map(CHORDS.map((chord) => [`${pitchClass(chord.root)}:${chord.type.id}`, chord]));

export function getChord(slug: string) {
  return CHORD_BY_SLUG.get(slug);
}

export function chordFor(rootPc: number, typeId: ChordTypeId) {
  return CHORD_BY_PC_TYPE.get(`${mod(rootPc, 12)}:${typeId}`);
}

/** The other spelling people may search for: Re♭ mayor ↔ Do♯ mayor. */
export function enharmonicRoot(root: Note): Note | undefined {
  return rootCandidates(pitchClass(root)).find((candidate) => candidate.letter !== root.letter);
}

/* ------------------------------------------------------------------ scales */

export type ScaleTypeId =
  | "mayor"
  | "menor-natural"
  | "menor-armonica"
  | "menor-melodica"
  | "pentatonica-mayor"
  | "pentatonica-menor"
  | "blues";

export type ScaleType = {
  id: ScaleTypeId;
  name: string;
  intervals: IntervalKey[];
  family: "major" | "minor";
  /** Root spelling follows this scale (keys are named after major / natural minor). */
  spellAs: "mayor" | "menor-natural";
  sound: string;
  usage: string;
};

export const SCALE_TYPES: ScaleType[] = [
  {
    id: "mayor",
    name: "mayor",
    intervals: ["P1", "M2", "M3", "P4", "P5", "M6", "M7"],
    family: "major",
    spellAs: "mayor",
    sound: "brillante y estable",
    usage: "Es la escala de referencia de la música occidental: de ella salen las tonalidades, los acordes diatónicos y el solfeo (do, re, mi…).",
  },
  {
    id: "menor-natural",
    name: "menor natural",
    intervals: ["P1", "M2", "m3", "P4", "P5", "m6", "m7"],
    family: "minor",
    spellAs: "menor-natural",
    sound: "oscura y melancólica",
    usage: "Comparte notas con su relativa mayor y es la base de baladas, boleros, rock y reguetón en tonalidad menor.",
  },
  {
    id: "menor-armonica",
    name: "menor armónica",
    intervals: ["P1", "M2", "m3", "P4", "P5", "m6", "M7"],
    family: "minor",
    spellAs: "menor-natural",
    sound: "dramática, con un aire árabe o flamenco",
    usage: "Sube el séptimo grado para tener una sensible que lleve a la tónica; de ella sale el acorde de dominante (V7) en tonalidad menor.",
  },
  {
    id: "menor-melodica",
    name: "menor melódica",
    intervals: ["P1", "M2", "m3", "P4", "P5", "M6", "M7"],
    family: "minor",
    spellAs: "menor-natural",
    sound: "menor al inicio y luminosa al subir",
    usage: "En la música clásica se usa al subir (con sexto y séptimo grados elevados) y se baja como menor natural; en el jazz se usa igual en ambas direcciones.",
  },
  {
    id: "pentatonica-mayor",
    name: "pentatónica mayor",
    intervals: ["P1", "M2", "M3", "P5", "M6"],
    family: "major",
    spellAs: "mayor",
    sound: "abierta, alegre y sin tensiones",
    usage: "Cinco notas sin semitonos: es ideal para improvisar sobre acordes mayores en pop, country, música andina y rock.",
  },
  {
    id: "pentatonica-menor",
    name: "pentatónica menor",
    intervals: ["P1", "m3", "P4", "P5", "m7"],
    family: "minor",
    spellAs: "menor-natural",
    sound: "directa, con mucho carácter",
    usage: "Es la escala más usada para improvisar en rock y blues, y la primera que suelen aprender guitarristas y bajistas.",
  },
  {
    id: "blues",
    name: "blues",
    intervals: ["P1", "m3", "P4", "d5", "P5", "m7"],
    family: "minor",
    spellAs: "menor-natural",
    sound: "pentatónica menor con la «nota blue» que le da su color sucio",
    usage: "Agrega la quinta disminuida a la pentatónica menor; se usa para solos de blues, rock, jazz y funk.",
  },
];

const SCALE_TYPE_BY_ID = new Map(SCALE_TYPES.map((type) => [type.id, type]));

export function getScaleType(id: string) {
  return SCALE_TYPE_BY_ID.get(id as ScaleTypeId);
}

export type Scale = {
  slug: string;
  root: Note;
  type: ScaleType;
  notes: Note[];
  /** "Re♭ mayor" */
  name: string;
  longName: string;
  pitchClasses: number[];
};

function scaleRoot(pc: number, type: ScaleType) {
  const base = SCALE_TYPE_BY_ID.get(type.spellAs)!;
  return chooseRoot(pc, base.intervals.map((key) => IV[key]), base.family);
}

function buildScale(root: Note, type: ScaleType): Scale {
  const notes = type.intervals.map((key) => {
    const spelled = transpose(root, IV[key]);
    // The blue note reads better as ♯4 than as Do♭ or Fa♭.
    return key === "d5" && type.id === "blues" && isUnusualSpelling(spelled) ? transpose(root, IV.A4) : spelled;
  });
  return {
    slug: `${noteSlug(root)}-${type.id}`,
    root,
    type,
    notes,
    name: `${noteName(root)} ${type.name}`,
    longName: `${noteName(root, "long")} ${type.name}`,
    pitchClasses: notes.map(pitchClass),
  };
}

export const SCALES: Scale[] = SCALE_TYPES.flatMap((type) =>
  Array.from({ length: 12 }, (_, pc) => buildScale(scaleRoot(pc, type), type)),
);

const SCALE_BY_SLUG = new Map(SCALES.map((scale) => [scale.slug, scale]));
const SCALE_BY_PC_TYPE = new Map(SCALES.map((scale) => [`${pitchClass(scale.root)}:${scale.type.id}`, scale]));

export function getScale(slug: string) {
  return SCALE_BY_SLUG.get(slug);
}

export function scaleFor(rootPc: number, typeId: ScaleTypeId) {
  return SCALE_BY_PC_TYPE.get(`${mod(rootPc, 12)}:${typeId}`)!;
}

/** "T – T – S – T – T – T – S" (tono, semitono, tono y medio). */
export function stepPattern(scale: Scale) {
  const semis = scale.type.intervals.map((key) => IV[key].semitones);
  return [...semis.slice(1), 12].map((value, i) => {
    const step = value - semis[i];
    return step === 1 ? "S" : step === 2 ? "T" : step === 3 ? "T½" : `${step / 2}T`;
  });
}

export const DEGREE_NAMES_ES = ["Tónica", "Supertónica", "Mediante", "Subdominante", "Dominante", "Superdominante"];

/** Name of each degree of a seven-note scale (the 7th is sensible or subtónica). */
export function degreeName(scale: Scale, index: number) {
  if (scale.notes.length !== 7) return undefined;
  if (index < 6) return DEGREE_NAMES_ES[index];
  return IV[scale.type.intervals[6]].semitones === 11 ? "Sensible" : "Subtónica";
}

/* ------------------------------------------------------- key signatures */

export type KeySignature = { sharps: Note[]; flats: Note[] };

/** Key signature of a major or natural minor scale (other scales borrow their parent's). */
export function keySignature(scale: Scale): KeySignature {
  const parent =
    scale.type.spellAs === "mayor" ? scaleFor(pitchClass(scale.root), "mayor") : scaleFor(pitchClass(scale.root), "menor-natural");
  const sharpOrder = [3, 0, 4, 1, 5, 2, 6]; // Fa Do Sol Re La Mi Si
  const flatOrder = [...sharpOrder].reverse();
  const sharps = sharpOrder.map((letter) => parent.notes.find((n) => n.letter === letter && n.accidental > 0)).filter(Boolean) as Note[];
  const flats = flatOrder.map((letter) => parent.notes.find((n) => n.letter === letter && n.accidental < 0)).filter(Boolean) as Note[];
  return { sharps, flats };
}

export function keySignatureText(signature: KeySignature) {
  if (signature.sharps.length) {
    const count = signature.sharps.length;
    return `${count} ${count === 1 ? "sostenido" : "sostenidos"} (${signature.sharps.map((n) => noteName(n)).join(", ")})`;
  }
  if (signature.flats.length) {
    const count = signature.flats.length;
    return `${count} ${count === 1 ? "bemol" : "bemoles"} (${signature.flats.map((n) => noteName(n)).join(", ")})`;
  }
  return "sin sostenidos ni bemoles";
}

/* --------------------------------------------------------- harmony */

const TRIAD_TYPES: Record<string, ChordTypeId> = {
  "4,7": "mayor",
  "3,7": "menor",
  "3,6": "disminuido",
  "4,8": "aumentado",
};

const SEVENTH_TYPES: Record<string, { id?: ChordTypeId; symbol: string; name: string }> = {
  "4,7,11": { id: "septima-mayor", symbol: "maj7", name: "séptima mayor" },
  "4,7,10": { id: "septima", symbol: "7", name: "séptima" },
  "3,7,10": { id: "menor-septima", symbol: "m7", name: "menor séptima" },
  "3,6,10": { id: "semidisminuido", symbol: "m7♭5", name: "semidisminuido" },
  "3,6,9": { symbol: "dim7", name: "disminuido séptima" },
  "3,7,11": { symbol: "m(maj7)", name: "menor con séptima mayor" },
  "4,8,11": { symbol: "maj7♯5", name: "aumentado con séptima mayor" },
};

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII"];

const SEVENTH_NUMERAL_SUFFIX: Record<string, string> = {
  maj7: "maj7",
  "7": "7",
  m7: "7",
  "m7♭5": "ø7",
  dim7: "°7",
  "m(maj7)": "(maj7)",
  "maj7♯5": "+maj7",
};

export type DiatonicChord = {
  degree: number;
  roman: string;
  root: Note;
  /** "Re menor" in the key's own spelling. */
  name: string;
  /** "Dm" */
  symbol: string;
  /** Dictionary page when the chord type exists there. */
  chord?: Chord;
};

function stackedSemitones(scale: Scale, degree: number, count: number) {
  const root = scale.pitchClasses[degree];
  return Array.from({ length: count }, (_, i) => mod(scale.pitchClasses[(degree + 2 * (i + 1)) % 7] - root, 12));
}

/** Triads built on each degree of a seven-note scale. */
export function diatonicTriads(scale: Scale): DiatonicChord[] {
  if (scale.notes.length !== 7) return [];
  return scale.notes.map((root, degree) => {
    const typeId = TRIAD_TYPES[stackedSemitones(scale, degree, 2).join(",")];
    const type = getChordType(typeId)!;
    const numeral = type.family === "minor" ? ROMAN[degree].toLowerCase() : ROMAN[degree];
    return {
      degree,
      roman: `${numeral}${typeId === "disminuido" ? "°" : typeId === "aumentado" ? "+" : ""}`,
      root,
      name: `${noteName(root)} ${type.name}`,
      symbol: `${noteName(root, "en")}${type.symbol}`,
      chord: chordFor(pitchClass(root), typeId),
    };
  });
}

/** Seventh chords built on each degree of a seven-note scale. */
export function diatonicSevenths(scale: Scale): DiatonicChord[] {
  if (scale.notes.length !== 7) return [];
  return scale.notes.map((root, degree) => {
    const seventh = SEVENTH_TYPES[stackedSemitones(scale, degree, 3).join(",")];
    const minorThird = scale.pitchClasses[(degree + 2) % 7] - scale.pitchClasses[degree];
    const numeral = mod(minorThird, 12) === 3 ? ROMAN[degree].toLowerCase() : ROMAN[degree];
    return {
      degree,
      roman: `${numeral}${SEVENTH_NUMERAL_SUFFIX[seventh.symbol]}`,
      root,
      name: `${noteName(root)} ${seventh.name}`,
      symbol: `${noteName(root, "en")}${seventh.symbol}`,
      chord: seventh.id ? chordFor(pitchClass(root), seventh.id) : undefined,
    };
  });
}

export type ChordInKey = { scale: Scale; roman: string };

/** Major and natural minor keys where this chord is diatonic, e.g. Sol mayor is V in Do mayor. */
export function keysContaining(chord: Chord): ChordInKey[] {
  const found: ChordInKey[] = [];
  for (const typeId of ["mayor", "menor-natural"] as const) {
    for (let pc = 0; pc < 12; pc += 1) {
      const scale = scaleFor(pc, typeId);
      const list = chord.notes.length === 3 ? diatonicTriads(scale) : diatonicSevenths(scale);
      const match = list.find((item) => item.chord?.slug === chord.slug);
      if (match) found.push({ scale, roman: match.roman });
    }
  }
  return found;
}

export function relativeScale(scale: Scale) {
  const pc = pitchClass(scale.root);
  if (scale.type.id === "mayor") return scaleFor(pc + 9, "menor-natural");
  if (scale.type.id === "menor-natural") return scaleFor(pc + 3, "mayor");
  if (scale.type.id === "pentatonica-mayor") return scaleFor(pc + 9, "pentatonica-menor");
  if (scale.type.id === "pentatonica-menor") return scaleFor(pc + 3, "pentatonica-mayor");
  return undefined;
}

/* ------------------------------------------------- circle of fifths */

/** Major keys clockwise from Do, each with its relative minor. */
export const CIRCLE_OF_FIFTHS = Array.from({ length: 12 }, (_, i) => {
  const major = scaleFor(mod(i * 7, 12), "mayor");
  return { major, minor: relativeScale(major)! };
});

/** MIDI number of a note in a given octave (Do4 = 60). */
export function midiOf(n: Note, octave: number) {
  return (octave + 1) * 12 + LETTER_PCS[n.letter] + n.accidental;
}

/** Ascending MIDI notes from the root, each one above the previous. */
export function ascendingMidi(notes: Note[], startOctave: number) {
  const result: number[] = [];
  for (const n of notes) {
    let midi = midiOf(n, startOctave);
    while (result.length && midi <= result[result.length - 1]) midi += 12;
    result.push(midi);
  }
  return result;
}
