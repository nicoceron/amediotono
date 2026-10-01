import type { FaqItem } from "@/lib/content-types";
import { guitarVoicings, type Voicing } from "@/lib/chord-voicings";
import {
  CHORD_TYPES,
  INTERVAL_NAMES_ES,
  INTERVAL_SHORT,
  ascendingMidi,
  chordFor,
  diatonicSevenths,
  diatonicTriads,
  enharmonicRoot,
  getChord,
  isUnusualSpelling,
  keySignature,
  keySignatureText,
  mod,
  noteName,
  pitchClass,
  plainEquivalent,
  relativeScale,
  scaleFor,
  stepPattern,
  type Chord,
  type ChordTypeId,
  type DiatonicChord,
  type Scale,
} from "@/lib/music-theory";
import { TOOLS_PATH } from "@/lib/music-tools";

/** Copy and links shared by the chord and scale dictionaries. */

export const CHORDS_PATH = "/acordes";
export const SCALES_PATH = "/escalas";
export const CIRCLE_OF_FIFTHS_PATH = `${TOOLS_PATH}/circulo-de-quintas`;

export const chordPath = (chord: Chord) => `${CHORDS_PATH}/${chord.slug}`;
export const scalePath = (scale: Scale) => `${SCALES_PATH}/${scale.slug}`;

export const CHORD_ACCENTS: Record<ChordTypeId, string> = {
  mayor: "var(--orange)",
  menor: "var(--blue)",
  septima: "var(--pink)",
  "septima-mayor": "var(--green)",
  "menor-septima": "var(--purple)",
  sus2: "var(--green)",
  sus4: "var(--orange)",
  disminuido: "var(--red)",
  aumentado: "var(--purple)",
  semidisminuido: "var(--red)",
};

export const GUITAR_STRING_NAMES = ["Mi", "La", "Re", "Sol", "Si", "Mi"];
export const UKULELE_STRING_NAMES = ["Sol", "Do", "Mi", "La"];
const FINGER_NAMES = ["", "índice", "medio", "anular", "meñique"];

/* -------------------------------------------------------------- chords */

/** "Re bemol mayor (Db)": long name plus the ASCII symbol people type. */
export function chordSearchName(chord: Chord) {
  return `${chord.longName} (${chord.symbol})`;
}

/** <title> text before the brand suffix: about 62 characters in total fit in results. */
const TITLE_BUDGET = 51;
const DESCRIPTION_BUDGET = 155;

/** First candidate that fits the budget, else the shortest one. */
function fit(candidates: string[], budget: number) {
  return candidates.find((candidate) => candidate.length <= budget) ?? candidates[candidates.length - 1];
}

export function chordSeoTitle(chord: Chord) {
  const base = `Acorde de ${chordSearchName(chord)}`;
  return fit([`${base} en guitarra, piano y ukelele`, `${base} en guitarra y piano`, `${base} en guitarra`, base], TITLE_BUDGET);
}

/** The same chord under its other root name, e.g. Do♯ mayor for Re♭ mayor. */
export function chordEnharmonic(chord: Chord) {
  const other = enharmonicRoot(chord.root);
  if (!other) return undefined;
  return {
    name: `${noteName(other)} ${chord.type.name}`,
    longName: `${noteName(other, "long")} ${chord.type.name}`,
    symbol: `${noteName(other, "en")}${chord.type.symbol}`,
  };
}

export function chordNotesText(chord: Chord) {
  return chord.notes.map((n) => noteName(n)).join(" – ");
}

export function chordMetaDescription(chord: Chord, guitar: Voicing | undefined) {
  const lead = `Acorde de ${chord.longName} (${chord.symbol}): ${chordNotesText(chord)}.`;
  const shape = guitar ? ` En guitarra: ${guitar.frets.map((fret) => (fret < 0 ? "x" : fret)).join("")}.` : "";
  return fit(
    [
      `${lead}${shape} Diagramas para guitarra, piano y ukelele, con digitación y sonido.`,
      `${lead} Diagramas para guitarra, piano y ukelele, con digitación y sonido.`,
      `${lead} Guitarra, piano y ukelele, con digitación y sonido.`,
    ],
    DESCRIPTION_BUDGET,
  );
}

/** "Do mayor (C)", its page and its first guitar shape ("x 3 2 0 1 0"), for text renderings of a chords block. */
export function chordsSummary(slugs: string[]) {
  return slugs.flatMap((slug) => {
    const chord = getChord(slug);
    if (!chord) return [];
    const voicing = guitarVoicings(chord)[0];
    return [
      {
        name: `${chord.name} (${chord.displaySymbol})`,
        path: chordPath(chord),
        frets: voicing ? voicing.frets.map((fret) => (fret < 0 ? "x" : fret)).join(" ") : chordNotesText(chord),
      },
    ];
  });
}

/** Interval role of each chord note: "Mi: tercera mayor". */
export function chordTones(chord: Chord) {
  return chord.notes.map((n, i) => ({
    note: n,
    name: noteName(n),
    interval: INTERVAL_NAMES_ES[chord.type.intervals[i]],
    short: INTERVAL_SHORT[chord.type.intervals[i]],
    plain: isUnusualSpelling(n) ? noteName(plainEquivalent(n)) : undefined,
  }));
}

export function chordFormula(chord: Chord) {
  return chord.type.intervals.map((key) => INTERVAL_SHORT[key]).join(" – ");
}

/** Name of each sounding string, in the chord's own spelling. */
export function voicingNoteNames(chord: Chord, voicing: Voicing, tuning: number[]) {
  return voicing.frets.map((fret, i) => {
    if (fret < 0) return "";
    const pc = mod(tuning[i] + fret, 12);
    const n = chord.notes.find((candidate) => pitchClass(candidate) === pc);
    return n ? noteName(n) : "";
  });
}

export function voicingRootStrings(chord: Chord, voicing: Voicing, tuning: number[]) {
  return voicing.frets.map((fret, i) => fret >= 0 && mod(tuning[i] + fret, 12) === chord.pitchClasses[0]);
}

const ordinal = (stringIndex: number) => `${6 - stringIndex}.ª`;

/** "posición abierta" or "cejilla en el traste 3", to use mid-sentence. */
export function shapeName(voicing: Voicing) {
  const label = voicing.label.replace(/ \(.*\)$/, "");
  return label.charAt(0).toLowerCase() + label.slice(1);
}

/** Step-by-step instructions for a guitar voicing. */
export function guitarInstructions(voicing: Voicing) {
  const steps: string[] = [];
  const muted = voicing.frets.flatMap((fret, i) => (fret < 0 ? [ordinal(i)] : []));
  if (voicing.barre) {
    const { fret, from, to } = voicing.barre;
    steps.push(`Haz cejilla con el índice en el traste ${fret}, desde la ${ordinal(from)} hasta la ${ordinal(to)} cuerda.`);
  }
  voicing.frets.forEach((fret, i) => {
    if (fret <= 0) return;
    const finger = voicing.fingers?.[i] ?? 0;
    if (voicing.barre && fret === voicing.barre.fret && finger === 1) return;
    const who = finger ? `Dedo ${finger} (${FINGER_NAMES[finger]})` : "Un dedo";
    steps.push(`${who} en el traste ${fret} de la ${ordinal(i)} cuerda (${GUITAR_STRING_NAMES[i]}).`);
  });
  const open = voicing.frets.flatMap((fret, i) => (fret === 0 ? [ordinal(i)] : []));
  if (open.length) steps.push(`${open.length === 1 ? "La cuerda" : "Las cuerdas"} ${listJoin(open)} ${open.length === 1 ? "suena" : "suenan"} al aire.`);
  if (muted.length) steps.push(`No toques ${muted.length === 1 ? "la cuerda" : "las cuerdas"} ${listJoin(muted)}: rasguea desde la ${ordinal(voicing.frets.findIndex((fret) => fret >= 0))}.`);
  return steps;
}

function listJoin(items: string[]) {
  if (items.length <= 1) return items.join("");
  return `${items.slice(0, -1).join(", ")} y ${items[items.length - 1]}`;
}

/** Root-position MIDI notes around middle C, plus its inversions as text. */
export function pianoVoicing(chord: Chord) {
  const midis = ascendingMidi(chord.notes, 4);
  const inversions = chord.notes.slice(1).map((_, i) => {
    const rotated = [...chord.notes.slice(i + 1), ...chord.notes.slice(0, i + 1)];
    return {
      label: ["Primera", "Segunda", "Tercera"][i],
      notes: rotated.map((n) => noteName(n)).join(" – "),
    };
  });
  return { midis, inversions };
}

type LinkedChord = { label: string; chord?: Chord };

const linked = (rootPc: number, typeId: ChordTypeId, label?: string): LinkedChord => {
  const chord = chordFor(rootPc, typeId);
  return { label: label ?? chord?.displaySymbol ?? "", chord };
};

const fromDiatonic = (item: DiatonicChord): LinkedChord => ({ label: item.symbol, chord: item.chord });

export type Progression = { title: string; numerals: string; chords: LinkedChord[]; note: string };

/** Two or three progressions where this chord does its usual job. */
export function chordProgressions(chord: Chord): Progression[] {
  const pc = chord.pitchClasses[0];
  const majorKey = (root: number) => scaleFor(root, "mayor");
  const minorKey = (root: number) => scaleFor(root, "menor-natural");
  const triadsOf = (scale: Scale) => diatonicTriads(scale).map(fromDiatonic);
  const seventhsOf = (scale: Scale) => diatonicSevenths(scale).map(fromDiatonic);
  const keyName = (scale: Scale) => `${noteName(scale.root)} ${scale.type.name}`;

  switch (chord.type.id) {
    case "mayor": {
      const key = majorKey(pc);
      const t = triadsOf(key);
      return [
        { title: "La progresión básica", numerals: "I – IV – V – I", chords: [t[0], t[3], t[4], t[0]], note: `Con estos tres acordes se acompañan cientos de canciones en ${keyName(key)}.` },
        { title: "La progresión del pop", numerals: "I – V – vi – IV", chords: [t[0], t[4], t[5], t[3]], note: "Es la base de una enorme cantidad de baladas, pop y reguetón." },
      ];
    }
    case "menor": {
      const key = minorKey(pc);
      const t = triadsOf(key);
      const dominant = linked(pc + 7, "septima");
      return [
        { title: "Menor con dominante", numerals: "i – iv – V7 – i", chords: [t[0], t[3], dominant, t[0]], note: "El V7 sale de la escala menor armónica y es típico de boleros, pasillos y baladas." },
        { title: "Menor moderna", numerals: "i – VI – III – VII", chords: [t[0], t[5], t[2], t[6]], note: `Una vuelta muy común en pop y rock en ${keyName(key)}.` },
      ];
    }
    case "septima": {
      const key = majorKey(pc + 5);
      const s = seventhsOf(key);
      return [
        { title: "Dominante que resuelve", numerals: "V7 – I", chords: [linked(pc, "septima"), linked(pc + 5, "mayor")], note: `${chord.displaySymbol} es el quinto grado de ${keyName(key)}: su tensión pide llegar a ${noteName(key.root)}.` },
        { title: "El ii–V–I", numerals: "ii7 – V7 – Imaj7", chords: [s[1], s[4], s[0]], note: "La cadencia más usada del jazz y de la bossa nova." },
      ];
    }
    case "septima-mayor": {
      const key = majorKey(pc);
      const s = seventhsOf(key);
      return [
        { title: "Turnaround", numerals: "Imaj7 – vi7 – ii7 – V7", chords: [s[0], s[5], s[1], s[4]], note: `Una vuelta de cuatro acordes muy usada en jazz, bossa y baladas en ${keyName(key)}.` },
        { title: "Cuarto grado con color", numerals: "Imaj7 – IVmaj7", chords: [s[0], s[3]], note: "Dos acordes de séptima mayor que se alternan para crear un ambiente suave." },
      ];
    }
    case "menor-septima": {
      const key = majorKey(pc - 2);
      const s = seventhsOf(key);
      return [
        { title: "El ii–V–I", numerals: "ii7 – V7 – Imaj7", chords: [s[1], s[4], s[0]], note: `${chord.displaySymbol} es el segundo grado de ${keyName(key)}.` },
        { title: "Vamp de dos acordes", numerals: "i7 – IV7", chords: [linked(pc, "menor-septima"), linked(pc + 5, "septima")], note: "Un groove típico del funk, el soul y la salsa." },
      ];
    }
    case "sus2":
    case "sus4":
      return [
        {
          title: "Suspender y resolver",
          numerals: `I${chord.type.symbol} – I`,
          chords: [linked(pc, chord.type.id), linked(pc, "mayor")],
          note: `${chord.displaySymbol} suele resolver a ${chordFor(pc, "mayor")?.displaySymbol}: cambias una sola nota y el acorde se «asienta».`,
        },
      ];
    case "disminuido": {
      const key = majorKey(pc + 1);
      return [
        { title: "Sensible que resuelve", numerals: "vii° – I", chords: [linked(pc, "disminuido"), linked(pc + 1, "mayor")], note: `${chord.displaySymbol} es el séptimo grado de ${keyName(key)} y lleva a ${noteName(key.root)}.` },
        { title: "Acorde de paso", numerals: "I – ♯i° – ii", chords: [linked(pc - 1, "mayor"), linked(pc, "disminuido"), linked(pc + 1, "menor")], note: "Sube de semitono en semitono entre dos acordes que están a un tono." },
      ];
    }
    case "aumentado":
      return [
        { title: "Paso cromático", numerals: "I – I+ – IV", chords: [linked(pc, "mayor"), linked(pc, "aumentado"), linked(pc + 5, "mayor")], note: "La quinta que sube medio tono empuja hacia el cuarto grado." },
      ];
    case "semidisminuido": {
      const key = minorKey(pc - 2);
      return [
        { title: "ii–V–i en menor", numerals: "iiø7 – V7 – i", chords: [linked(pc, "semidisminuido"), linked(pc + 5, "septima"), linked(pc - 2, "menor")], note: `La cadencia menor de boleros, tangos y jazz, en ${keyName(key)}.` },
      ];
    }
  }
}

/** Same root, other chord types. */
export function sameRootChords(chord: Chord) {
  return CHORD_TYPES.filter((type) => type.id !== chord.type.id)
    .map((type) => chordFor(chord.pitchClasses[0], type.id))
    .filter((other): other is Chord => Boolean(other));
}

export function chordFaqs(chord: Chord, guitar: Voicing | undefined): FaqItem[] {
  const tones = chordTones(chord);
  const faqs: FaqItem[] = [
    {
      question: `¿Qué notas tiene el acorde de ${chord.longName}?`,
      answer: `${chord.name} (${chord.displaySymbol}) tiene ${chord.notes.length} notas: ${tones.map((tone) => `${tone.name} (${tone.interval})`).join(", ")}.${tones.some((tone) => tone.plain) ? ` ${tones.filter((tone) => tone.plain).map((tone) => `${tone.name} suena igual que ${tone.plain}`).join("; ")}, pero se escribe así porque cumple la función de ${tones.find((tone) => tone.plain)?.interval}.` : ""}`,
    },
  ];
  if (guitar) {
    faqs.push({
      question: `¿Cómo se toca ${chord.name} en guitarra?`,
      answer: `${guitar.label === "Posición abierta" ? "La forma más fácil es en posición abierta" : `La forma más usada es con ${shapeName(guitar)}`}: ${guitar.frets.map((fret) => (fret < 0 ? "x" : fret)).join(" ")} (de la 6.ª a la 1.ª cuerda). ${guitarInstructions(guitar).join(" ")}`,
    });
  }
  const enharmonic = chordEnharmonic(chord);
  if (enharmonic) {
    faqs.push({
      question: `¿${chord.displaySymbol} es lo mismo que ${enharmonic.symbol}?`,
      answer: `Sí: ${chord.name} y ${enharmonic.name} suenan igual y se tocan igual (son enarmónicos). Se escribe de una u otra forma según la tonalidad de la canción; en partituras y cancioneros verás ambos nombres.`,
    });
  }
  const parallel = chord.type.id === "mayor" ? chordFor(chord.pitchClasses[0], "menor") : chord.type.id === "menor" ? chordFor(chord.pitchClasses[0], "mayor") : undefined;
  if (parallel) {
    const third = (c: Chord) => noteName(c.notes[1]);
    faqs.push({
      question: `¿Qué diferencia hay entre ${chord.name} y ${parallel.name}?`,
      answer: `Solo cambia la tercera: ${chord.name} usa ${third(chord)} y ${parallel.name} usa ${third(parallel)}. Esa nota es la que hace que el acorde suene ${chord.type.id === "mayor" ? "luminoso (mayor) o más oscuro (menor)" : "más oscuro (menor) o luminoso (mayor)"}.`,
    });
  }
  faqs.push({
    question: `¿Cómo se escribe ${chord.longName} en cifrado americano?`,
    answer: `Se escribe ${chord.displaySymbol}${chord.type.altSymbols.length ? `; también lo verás como ${chord.type.altSymbols.map((symbol) => `${noteName(chord.root, "en")}${symbol}`).join(" o ")}` : ""}. En el cifrado americano las notas son letras: C = Do, D = Re, E = Mi, F = Fa, G = Sol, A = La y B = Si.`,
  });
  return faqs;
}

/* -------------------------------------------------------------- scales */

export function scaleSeoTitle(scale: Scale) {
  const base = `Escala de ${scale.longName}`;
  return fit([`${base}: notas, piano y guitarra`, `${base}: notas y acordes`, `${base}: notas`, base], TITLE_BUDGET);
}

export function scaleNotesText(scale: Scale) {
  return scale.notes.map((n) => noteName(n)).join(" – ");
}

export function scaleMetaDescription(scale: Scale) {
  const lead = `Escala de ${scale.longName}: ${scaleNotesText(scale)}.`;
  const signature = keySignature(scale);
  const count = signature.sharps.length || signature.flats.length;
  const full = scale.notes.length === 7 ? ` Armadura: ${keySignatureText(signature)}.` : "";
  const short = scale.notes.length === 7 && count ? ` Armadura de ${count} ${signature.sharps.length ? (count === 1 ? "sostenido" : "sostenidos") : count === 1 ? "bemol" : "bemoles"}.` : full;
  return fit(
    [
      `${lead}${full} Fórmula, grados, acordes, teclado del piano, mástil de guitarra y sonido para practicar.`,
      `${lead}${full} Fórmula, grados, acordes, piano, mástil de guitarra y sonido.`,
      `${lead}${short} Fórmula, grados, acordes, piano, guitarra y sonido.`,
      `${lead}${short} Grados, acordes, piano y guitarra.`,
    ],
    DESCRIPTION_BUDGET,
  );
}

export function scaleDegrees(scale: Scale) {
  return scale.notes.map((n, i) => ({
    note: n,
    name: noteName(n),
    interval: INTERVAL_NAMES_ES[scale.type.intervals[i]],
    short: INTERVAL_SHORT[scale.type.intervals[i]],
    plain: isUnusualSpelling(n) ? noteName(plainEquivalent(n)) : undefined,
  }));
}

export function scaleMidis(scale: Scale) {
  const midis = ascendingMidi(scale.notes, 4);
  return [...midis, midis[0] + 12];
}

/** Pitch class → name in this scale's spelling. */
export function scaleNoteLabels(scale: Scale) {
  return Object.fromEntries(scale.notes.map((n) => [pitchClass(n), noteName(n)]));
}

export function relatedScales(scale: Scale) {
  const pc = pitchClass(scale.root);
  const relative = relativeScale(scale);
  const parallel =
    scale.type.family === "major" ? scaleFor(pc, scale.type.id === "mayor" ? "menor-natural" : "pentatonica-menor") : scaleFor(pc, scale.type.id === "pentatonica-menor" ? "pentatonica-mayor" : "mayor");
  return { relative, parallel };
}

export function scaleFaqs(scale: Scale): FaqItem[] {
  const degrees = scaleDegrees(scale);
  const faqs: FaqItem[] = [
    {
      question: `¿Cuáles son las notas de la escala de ${scale.longName}?`,
      answer: `La escala de ${scale.name} tiene ${scale.notes.length} notas: ${scaleNotesText(scale)}. Su fórmula es ${stepPattern(scale).join(" – ")} (T = tono, S = semitono${stepPattern(scale).includes("T½") ? ", T½ = tono y medio" : ""}).`,
    },
  ];
  if (scale.notes.length === 7) {
    // Degrees raised above the natural minor: the 7th (armónica) or the 6th and 7th (melódica).
    const raised = scale.type.id === "menor-armonica" ? [6] : scale.type.id === "menor-melodica" ? [5, 6] : [];
    const own = scale.type.id === "mayor" || scale.type.id === "menor-natural";
    faqs.push({
      question: `¿Cuántos sostenidos o bemoles tiene ${scale.longName}?`,
      answer: `${own ? "Su armadura tiene" : "Se escribe con la armadura de su tonalidad, que tiene"} ${keySignatureText(keySignature(scale))}.${raised.length ? ` ${listJoin(raised.map((i) => degrees[i].name))} ${raised.length === 1 ? "se escribe" : "se escriben"} como alteración accidental en la partitura.` : ""}`,
    });
  }
  const { relative } = relatedScales(scale);
  if (relative) {
    faqs.push({
      question: `¿Cuál es la relativa de ${scale.longName}?`,
      answer: `Es ${relative.longName}: tienen exactamente las mismas notas, pero empiezan en un grado distinto. ${relative.type.family === "minor" ? "La relativa menor está una tercera menor por debajo." : "La relativa mayor está una tercera menor por encima."}`,
    });
  }
  const triads = diatonicTriads(scale);
  if (triads.length) {
    faqs.push({
      question: `¿Qué acordes tiene la escala de ${scale.longName}?`,
      answer: `Con tríadas: ${triads.map((item) => `${item.symbol} (${item.roman})`).join(", ")}.`,
    });
  }
  return faqs;
}

export function practiceTips(scale: Scale) {
  const tips = [
    `Tócala despacio con metrónomo, una nota por pulso, y sube la velocidad solo cuando suene pareja.`,
    `Canta los nombres de las notas mientras la tocas: así entrenas el oído y la memoria al mismo tiempo.`,
  ];
  if (scale.type.id.startsWith("pentatonica") || scale.type.id === "blues") {
    tips.push("En la guitarra apréndela por «cajas»: cinco posiciones que se repiten a lo largo del mástil. Empieza por la que tiene la tónica en la 6.ª cuerda.");
    tips.push("Improvisa sobre una pista o sobre un solo acorde: con estas notas casi nada suena «mal», así que es ideal para perder el miedo.");
  } else {
    tips.push("En el piano usa la digitación de tu profe o de un método: en la mayoría de escalas el pulgar pasa por debajo después del tercer dedo.");
    tips.push("Practica también las tríadas de la escala (los acordes de abajo) para entender cómo se arma la armonía de las canciones.");
  }
  return tips;
}
