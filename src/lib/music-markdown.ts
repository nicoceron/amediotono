import { guitarVoicings, ukuleleVoicings } from "@/lib/chord-voicings";
import { getCoursePage } from "@/lib/course-pages";
import { blocksToMarkdown, markdownInline } from "@/lib/markdown";
import {
  chordFaqs, chordFormula, chordNotesText, chordPath, chordProgressions,
  guitarInstructions, pianoVoicing, practiceTips, scaleDegrees, scaleFaqs,
  scaleNotesText, scalePath,
} from "@/lib/music-pages";
import { diatonicSevenths, diatonicTriads, stepPattern, type Chord, type Scale } from "@/lib/music-theory";
import {
  EIGHTHS_PER_PULSE, STANDARD_GUITAR_MIDI, formatHz, getMeter, midiToFrequency, noteLabel, rhythmPresetPath,
  semitoneChange, tunerPresetPath, tunerSubject, tunerSubjectOf, tunerVariantLabel,
  type RhythmPreset, type TunerPreset, type TunerSection,
} from "@/lib/music-tools";
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

function sectionsMarkdown(sections: TunerSection[]) {
  return sections.flatMap((section) => [`## ${section.heading}`, "", ...blocksToMarkdown(section.blocks)]);
}

function courseLine(courseId?: string) {
  const page = courseId ? getCoursePage(courseId) : undefined;
  return page ? [`- Clases con profe: [Clases de ${page.course.label.toLowerCase()}](${absoluteUrl(`${page.path}.md`)})`] : [];
}

/** Same data as the tuner preset page; the in-browser tuner itself only exists in the HTML. */
export function tunerPresetMarkdown(preset: TunerPreset) {
  const note = (midi: number) => noteLabel(midi, preset.flats);
  const variant = tunerVariantLabel(preset);
  return [
    `# ${preset.headline}`, "",
    `- URL (afinador con micrófono): ${absoluteUrl(tunerPresetPath(preset.slug))}`, `- Escuela: ${SITE_NAME}`,
    `- Afinación: ${preset.tuningName}`, ...courseLine(preset.courseId), "",
    preset.intro, "",
    `## Notas de las cuerdas ${tunerSubjectOf(preset)}`, "",
    "Frecuencias calculadas con el La de referencia en 440 Hz.", "",
    "| Cuerda | Nota | Cifrado | Frecuencia (La = 440 Hz) |", "| --- | --- | --- | --- |",
    ...[...preset.strings].reverse().map((item) =>
      `| ${item.label} | ${note(item.midi).es} | ${note(item.midi).scientific} | ${formatHz(midiToFrequency(item.midi))} |`,
    ), "",
    ...(preset.stringsNote ?? []).flatMap((paragraph) => [markdownInline(paragraph), ""]),
    ...(preset.group === "guitarra" ? [
      `## Cómo pasar de la afinación estándar a ${variant}`, "",
      `| Cuerda | Estándar | ${variant} | Qué hacer |`, "| --- | --- | --- | --- |",
      ...preset.strings.map((item, index) => {
        const from = noteLabel(STANDARD_GUITAR_MIDI[index]);
        return `| ${item.label} | ${from.es} (${from.scientific}) | ${note(item.midi).es} (${note(item.midi).scientific}) | ${semitoneChange(item.midi - STANDARD_GUITAR_MIDI[index])} |`;
      }), "",
    ] : []),
    ...sectionsMarkdown(preset.sections),
    `## Consejos para afinar tu ${tunerSubject(preset)}`, "", ...preset.tips.map((tip) => `- ${markdownInline(tip)}`), "",
    ...faqsMarkdown(preset.faqs),
  ].join("\n");
}

/** Same data as the rhythm preset page; the in-browser metronome itself only exists in the HTML. */
export function rhythmPresetMarkdown(preset: RhythmPreset) {
  const of = `${preset.gender === "m" ? "del" : "de la"} ${preset.name}`;
  return [
    `# ${preset.headline}`, "",
    `- URL (metrónomo online): ${absoluteUrl(rhythmPresetPath(preset.slug))}`, `- Escuela: ${SITE_NAME}`,
    `- Ritmo: ${preset.summary}`, ...courseLine(preset.courseId), "",
    preset.intro, "", markdownInline(preset.setupNote), "",
    `## Compás y tempo ${of}`, "", ...preset.facts.map(([label, detail]) => `- **${label}:** ${markdownInline(detail)}`), "",
    ...sectionsMarkdown(preset.sections),
    `## Cómo practicar ${preset.name} con el metrónomo`, "", ...preset.practice.map((step, index) => `${index + 1}. ${markdownInline(step)}`), "",
    "## Tempos de esta página", "",
    `Los BPM cuentan el pulso del compás: ${[...new Set(preset.setups.map((setup) => `${getMeter(setup.meter).pulse} en ${setup.meter}`))].join(", ")}.`, "",
    ...preset.setups.map((setup) => {
      const pulse = getMeter(setup.meter).pulse;
      return `- ${setup.label}: ${setup.bpm} BPM de ${pulse}, es decir, ${setup.bpm * EIGHTHS_PER_PULSE[pulse]} corcheas por minuto.`;
    }), "",
    ...faqsMarkdown(preset.faqs),
  ].join("\n");
}
