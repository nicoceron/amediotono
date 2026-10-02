import { guitarVoicings, ukuleleVoicings } from "@/lib/chord-voicings";
import { markdownInline } from "@/lib/markdown";
import {
  chordFaqs, chordFormula, chordNotesText, chordPath, chordProgressions,
  guitarInstructions, pianoVoicing, practiceTips, scaleDegrees, scaleFaqs,
  scaleNotesText, scalePath,
} from "@/lib/music-pages";
import { diatonicSevenths, diatonicTriads, stepPattern, type Chord, type Scale } from "@/lib/music-theory";
import { SITE_NAME, absoluteUrl } from "@/lib/seo";
import type { FaqItem } from "@/lib/content-types";

function faqsMarkdown(faqs: FaqItem[]) {
  return ["## Preguntas frecuentes", "", ...faqs.flatMap((faq) => [
    `### ${faq.question}`, "", markdownInline(faq.answer), "",
  ])];
}

/** All theory and fingerings use the same functions as the HTML dictionaries. */
export function chordMarkdown(chord: Chord) {
  const guitar = guitarVoicings(chord);
  const ukulele = ukuleleVoicings(chord);
  const piano = pianoVoicing(chord);
  return [
    `# Acorde de ${chord.longName} (${chord.symbol})`, "",
    `- URL: ${absoluteUrl(chordPath(chord))}`, `- Escuela: ${SITE_NAME}`,
    `- Notas: ${chordNotesText(chord)}`, `- Fórmula: ${chordFormula(chord)}`, "",
    "## Guitarra", "", "Los trastes se leen de la 6.ª a la 1.ª cuerda; x = no tocar, 0 = cuerda al aire.", "",
    ...guitar.flatMap((voicing) => [
      `### ${voicing.label}`, "", `Trastes: ${voicing.frets.map((fret) => fret < 0 ? "x" : fret).join(" ")}.`, "",
      ...guitarInstructions(voicing).map((step) => `- ${step}`), "",
    ]),
    "## Piano e inversiones", "", `Posición fundamental: ${chordNotesText(chord)}.`, "",
    ...piano.inversions.map((inversion) => `- ${inversion.label} inversión: ${inversion.notes}.`), "",
    "## Ukelele", "", "Trastes en el orden Sol, Do, Mi, La.", "",
    ...ukulele.map((voicing) => `- ${voicing.label}: ${voicing.frets.map((fret) => fret < 0 ? "x" : fret).join(" ")}.`), "",
    "## Progresiones", "",
    ...chordProgressions(chord).flatMap((progression) => [
      `### ${progression.title} (${progression.numerals})`, "",
      progression.chords.map((item) => item.chord ? `[${item.label}](${absoluteUrl(`${chordPath(item.chord)}.md`)})` : item.label).join(" – "),
      "", progression.note, "",
    ]),
    ...faqsMarkdown(chordFaqs(chord, guitar[0])),
  ].join("\n");
}

export function scaleMarkdown(scale: Scale) {
  const triads = diatonicTriads(scale);
  const sevenths = diatonicSevenths(scale);
  return [
    `# Escala de ${scale.longName}`, "",
    `- URL: ${absoluteUrl(scalePath(scale))}`, `- Escuela: ${SITE_NAME}`,
    `- Notas: ${scaleNotesText(scale)}`, `- Fórmula: ${stepPattern(scale).join(" – ")}`, "",
    "T = tono; S = semitono; T½ = tono y medio.", "",
    "## Grados e intervalos", "",
    ...scaleDegrees(scale).map((degree) => `- ${degree.short}: ${degree.name} (${degree.interval}).`), "",
    ...(triads.length ? ["## Acordes de la escala", "", ...triads.map((item) =>
      `- ${item.roman}: ${item.chord ? `[${item.name}](${absoluteUrl(`${chordPath(item.chord)}.md`)})` : item.name} (${item.symbol}).`,
    ), ""] : []),
    ...(sevenths.length ? ["## Acordes con séptima", "", ...sevenths.map((item) =>
      `- ${item.roman}: ${item.chord ? `[${item.name}](${absoluteUrl(`${chordPath(item.chord)}.md`)})` : item.name} (${item.symbol}).`,
    ), ""] : []),
    "## Cómo practicar", "", ...practiceTips(scale).map((tip) => `- ${tip}`), "",
    ...faqsMarkdown(scaleFaqs(scale)),
  ].join("\n");
}
