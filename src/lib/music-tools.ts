import type { FaqItem, RichBlock } from "@/lib/content-types";
import { METRONOME_PATH, TUNER_PATH, type MetronomeSetup, type TunerString } from "@/lib/music-core";
import { RHYTHM_PRESETS } from "@/content/metronome-rhythms";
import { TUNER_PRESETS } from "@/content/tuner-presets";

export * from "@/lib/music-core";

export type TunerPresetGroup = "cuerdas" | "colombianos" | "guitarra";

/** Hub sections, in display order, so the list of afinadores stays scannable. */
export const TUNER_GROUPS: Array<{ id: TunerPresetGroup; title: string; description: string }> = [
  {
    id: "cuerdas",
    title: "Guitarra, bajo y cuerdas",
    description: "Afinación estándar de los instrumentos de cuerda más comunes.",
  },
  {
    id: "colombianos",
    title: "Instrumentos colombianos y andinos",
    description: "Tiple, bandola, cuatro y charango, con sus órdenes y cuerdas en octava.",
  },
  {
    id: "guitarra",
    title: "Afinaciones alternativas de guitarra",
    description: "Medio tono abajo, Drop D, DADGAD y afinaciones abiertas, cuerda por cuerda.",
  },
];

export type TunerSection = { heading: string; blocks: RichBlock[] };

export type TunerPreset = {
  slug: string;
  group: TunerPresetGroup;
  /** Instrument name, e.g. "guitarra". */
  name: string;
  /** Grammatical gender of `name`, for "de la guitarra" / "del tiple". */
  gender: "f" | "m";
  /** Alternate tuning appended to the name, e.g. "en Drop D" → "tu guitarra en Drop D". */
  variant?: string;
  /** "Afinador de guitarra online" */
  headline: string;
  /** <title> text before the brand suffix, when `${headline} gratis con micrófono` is too long. */
  seoTitle?: string;
  metaDescription: string;
  intro: string;
  /** Strings in playing order, from the lowest course or 6th string to the 1st (re-entrant tunings keep this order). */
  strings: TunerString[];
  tuningName: string;
  /** Spell notes with flats (Mi♭ La♭…) instead of sharps. */
  flats?: boolean;
  /** Paragraphs under the notes table: courses, octave strings, re-entrant tunings. */
  stringsNote?: string[];
  /** Preset-specific sections: when it's used, history, how to get there. */
  sections: TunerSection[];
  tips: string[];
  faqs: FaqItem[];
  /** Course landing page (course id). */
  courseId?: string;
  relatedPostSlugs: string[];
};

/** Standard guitar tuning (6th to 1st string), the reference for alternate tunings. */
export const STANDARD_GUITAR_MIDI = [40, 45, 50, 55, 59, 64];

/** "guitarra en Drop D" */
export function tunerSubject(preset: TunerPreset) {
  return preset.variant ? `${preset.name} ${preset.variant}` : preset.name;
}

/** "de la guitarra en Drop D", "del tiple" */
export function tunerSubjectOf(preset: TunerPreset) {
  return `${preset.gender === "m" ? "del" : "de la"} ${tunerSubject(preset)}`;
}

/** "Drop D", "Medio tono abajo": the alternate tuning's name for table headers. */
export function tunerVariantLabel(preset: TunerPreset) {
  const label = (preset.variant ?? "").replace(/^en /, "");
  return label.charAt(0).toUpperCase() + label.slice(1);
}

/** "Afinador de tiple", for cards, chips and breadcrumbs. */
export function tunerPresetTitle(preset: TunerPreset) {
  return preset.headline.replace(/ online$/, "");
}

export function tunerPresetsInGroup(group: TunerPresetGroup) {
  return TUNER_PRESETS.filter((preset) => preset.group === group);
}

export { TUNER_PRESETS };

const PRESET_BY_SLUG = new Map(TUNER_PRESETS.map((preset) => [preset.slug, preset]));

export function getTunerPreset(slug: string) {
  return PRESET_BY_SLUG.get(slug);
}

export function tunerPresetPath(slug: string) {
  return `${TUNER_PATH}/${slug}`;
}

export type RhythmPreset = {
  slug: string;
  /** "bambuco" */
  name: string;
  /** Grammatical gender of `name`, for "del bambuco" / "de la cumbia". */
  gender: "f" | "m";
  /** "Metrónomo para bambuco" */
  headline: string;
  /** <title> text before the brand suffix. */
  seoTitle: string;
  metaDescription: string;
  /** Region and short description for cards: "Andina · 6/8 o 3/4". */
  summary: string;
  intro: string;
  /** First setup loads on the page; the others are one tap away. */
  setups: MetronomeSetup[];
  /** One line under the metronome explaining the setups. */
  setupNote: string;
  /** Rows for the "Compás y tempo" table: [aspecto, detalle]. Sourced. */
  facts: Array<[string, string]>;
  sections: TunerSection[];
  /** Ordered practice steps with the metronome. */
  practice: string[];
  faqs: FaqItem[];
  courseId?: string;
  relatedPostSlugs: string[];
};

export { RHYTHM_PRESETS };

const RHYTHM_BY_SLUG = new Map(RHYTHM_PRESETS.map((preset) => [preset.slug, preset]));

export function getRhythmPreset(slug: string) {
  return RHYTHM_BY_SLUG.get(slug);
}

export function rhythmPresetPath(slug: string) {
  return `${METRONOME_PATH}/${slug}`;
}

/** Tuner preset for each course with a standard string tuning. */
const TUNER_BY_COURSE: Record<string, string> = {
  "guitarra-acustica": "guitarra",
  "guitarra-electrica": "guitarra",
  violin: "violin",
  viola: "viola",
  violoncello: "violonchelo",
  contrabajo: "contrabajo",
  "bajo-electrico": "bajo",
  tiple: "tiple",
  "bandola-andina": "bandola-andina",
};

export function tunerPresetForCourse(courseId: string) {
  const slug = TUNER_BY_COURSE[courseId];
  return slug ? getTunerPreset(slug) : undefined;
}

