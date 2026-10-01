/**
 * Pure music helpers and small data tables shared by the client-side tools
 * (tuner, metronome, voice test, ear trainer). Page content lives in
 * src/content and is reached through @/lib/music-tools, which re-exports
 * everything here, so client bundles never pull in the long preset copy.
 */

export const TOOLS_PATH = "/herramientas";
export const METRONOME_PATH = `${TOOLS_PATH}/metronomo`;
export const TUNER_PATH = `${TOOLS_PATH}/afinador`;
export const VOICE_TYPE_PATH = `${TOOLS_PATH}/tipo-de-voz`;
export const EAR_TRAINING_PATH = `${TOOLS_PATH}/entrenamiento-auditivo`;

export const NOTE_NAMES_ES = ["Do", "Do♯", "Re", "Re♯", "Mi", "Fa", "Fa♯", "Sol", "Sol♯", "La", "La♯", "Si"];
export const NOTE_NAMES_EN = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"];
/** Same pitches spelled with flats, for tunings named that way (Mi♭, not Re♯). */
const NOTE_NAMES_ES_FLAT = ["Do", "Re♭", "Re", "Mi♭", "Mi", "Fa", "Sol♭", "Sol", "La♭", "La", "Si♭", "Si"];
const NOTE_NAMES_EN_FLAT = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"];

export function midiToFrequency(midi: number, a4 = 440) {
  return a4 * 2 ** ((midi - 69) / 12);
}

export function frequencyToMidi(frequency: number, a4 = 440) {
  return 69 + 12 * Math.log2(frequency / a4);
}

export function noteLabel(midi: number, flats = false) {
  const index = ((midi % 12) + 12) % 12;
  const octave = Math.floor(midi / 12) - 1;
  const en = (flats ? NOTE_NAMES_EN_FLAT : NOTE_NAMES_EN)[index];
  return {
    es: (flats ? NOTE_NAMES_ES_FLAT : NOTE_NAMES_ES)[index],
    en,
    octave,
    scientific: `${en}${octave}`,
  };
}

export type TunerString = {
  /** e.g. "6.ª cuerda" or "2.º orden: cuerdas laterales". */
  label: string;
  midi: number;
};

export const TEMPO_MARKINGS = [
  { name: "Grave", min: 30, max: 44, feel: "Muy lento y solemne" },
  { name: "Largo", min: 45, max: 59, feel: "Lento y amplio" },
  { name: "Adagio", min: 60, max: 72, feel: "Lento y tranquilo" },
  { name: "Andante", min: 73, max: 107, feel: "Al paso, caminando" },
  { name: "Moderato", min: 108, max: 119, feel: "Moderado" },
  { name: "Allegro", min: 120, max: 155, feel: "Rápido y alegre" },
  { name: "Vivace", min: 156, max: 175, feel: "Vivo y enérgico" },
  { name: "Presto", min: 176, max: 250, feel: "Muy rápido" },
];

export function tempoMarking(bpm: number) {
  return TEMPO_MARKINGS.find((marking) => bpm >= marking.min && bpm <= marking.max) ?? TEMPO_MARKINGS[0];
}

/** The note value the metronome's BPM counts. */
export type PulseUnit = "negra" | "blanca" | "negra con puntillo";

export type MeterId = "2/4" | "3/4" | "4/4" | "5/4" | "6/4" | "7/4" | "2/2" | "6/8" | "9/8" | "12/8";

/**
 * Compound meters (x/8) count dotted quarters, so 6/8 has two pulses of
 * three eighths each; 2/2 (compás partido) counts half notes.
 */
export const METERS: Array<{ id: MeterId; beats: number; pulse: PulseUnit }> = [
  { id: "2/4", beats: 2, pulse: "negra" },
  { id: "3/4", beats: 3, pulse: "negra" },
  { id: "4/4", beats: 4, pulse: "negra" },
  { id: "5/4", beats: 5, pulse: "negra" },
  { id: "6/4", beats: 6, pulse: "negra" },
  { id: "7/4", beats: 7, pulse: "negra" },
  { id: "2/2", beats: 2, pulse: "blanca" },
  { id: "6/8", beats: 2, pulse: "negra con puntillo" },
  { id: "9/8", beats: 3, pulse: "negra con puntillo" },
  { id: "12/8", beats: 4, pulse: "negra con puntillo" },
];

export function getMeter(id: MeterId) {
  return METERS.find((meter) => meter.id === id) ?? METERS[2];
}

/** Clicks per pulse the metronome offers, named after the note they sound. */
export function subdivisionOptions(pulse: PulseUnit) {
  if (pulse === "negra con puntillo") {
    return [
      { value: 1, label: "Negras con puntillo" },
      { value: 3, label: "Corcheas" },
      { value: 6, label: "Semicorcheas" },
    ];
  }
  if (pulse === "blanca") {
    return [
      { value: 1, label: "Blancas" },
      { value: 2, label: "Negras" },
      { value: 3, label: "Tresillos" },
      { value: 4, label: "Corcheas" },
    ];
  }
  return [
    { value: 1, label: "Negras" },
    { value: 2, label: "Corcheas" },
    { value: 3, label: "Tresillos" },
    { value: 4, label: "Semicorcheas" },
  ];
}

/** Accent level per pulse: 2 = strong, 1 = secondary, 0 = none. */
export type AccentLevel = 0 | 1 | 2;

export function defaultAccents(beats: number): AccentLevel[] {
  return Array.from({ length: beats }, (_, index) => (index === 0 ? 2 : 0));
}

/** A metronome starting point: meter, tempo, clicks per pulse and accents. */
export type MetronomeSetup = {
  /** Button text when a page offers several setups, e.g. "En 6/8". */
  label: string;
  meter: MeterId;
  bpm: number;
  subdivision: number;
  accents?: AccentLevel[];
};

/** Typical comfortable ranges (orientative, adult voices). */
/** Typical choral ranges (MIDI; 60 = Do4). Same values as /blog/como-saber-mi-tipo-de-voz. */
export const VOICE_TYPES = [
  { name: "Bajo", low: 40, high: 64, description: "La voz masculina más grave." },
  { name: "Barítono", low: 45, high: 65, description: "Voz masculina intermedia." },
  { name: "Tenor", low: 48, high: 69, description: "La voz masculina más aguda." },
  { name: "Contralto", low: 53, high: 74, description: "La voz femenina más grave." },
  { name: "Mezzosoprano", low: 57, high: 77, description: "Voz femenina intermedia." },
  { name: "Soprano", low: 60, high: 81, description: "La voz femenina más aguda." },
];

/** Closest voice type by comparing the singer's range with each typical range. */
export function estimateVoiceType(low: number, high: number) {
  return VOICE_TYPES.map((type) => ({
    type,
    distance: Math.abs(type.low - low) + Math.abs(type.high - high),
  })).sort((a, b) => a.distance - b.distance)[0].type;
}

export const INTERVALS = [
  { semitones: 1, name: "Segunda menor", short: "2m", hint: "El tema de «Tiburón»" },
  { semitones: 2, name: "Segunda mayor", short: "2M", hint: "Las dos primeras notas distintas de «Cumpleaños feliz»" },
  { semitones: 3, name: "Tercera menor", short: "3m", hint: "El inicio de «Greensleeves»" },
  { semitones: 4, name: "Tercera mayor", short: "3M", hint: "El inicio de «When the Saints Go Marching In»" },
  { semitones: 5, name: "Cuarta justa", short: "4J", hint: "El inicio de la marcha nupcial de Wagner" },
  { semitones: 6, name: "Tritono", short: "4A/5d", hint: "El inicio del tema de «Los Simpson»" },
  { semitones: 7, name: "Quinta justa", short: "5J", hint: "El salto de «Estrellita, ¿dónde estás?»" },
  { semitones: 8, name: "Sexta menor", short: "6m", hint: "" },
  { semitones: 9, name: "Sexta mayor", short: "6M", hint: "El inicio de «My Bonnie»" },
  { semitones: 10, name: "Séptima menor", short: "7m", hint: "" },
  { semitones: 11, name: "Séptima mayor", short: "7M", hint: "" },
  { semitones: 12, name: "Octava", short: "8J", hint: "El inicio de «Somewhere Over the Rainbow»" },
];
