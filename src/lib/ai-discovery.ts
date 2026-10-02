import { B2B_SERVICES } from "@/lib/b2b";
import { BLOG_CATEGORIES, BLOG_CATEGORY_ORDER, categoryPath, postsByCategory, postPath } from "@/lib/blog";
import { COURSE_PAGES } from "@/lib/course-pages";
import { markdownInline, siteFactsMarkdown } from "@/lib/markdown";
import { CHORDS_PATH, SCALES_PATH, CIRCLE_OF_FIFTHS_PATH, chordPath, scalePath } from "@/lib/music-pages";
import { CHORDS, SCALES } from "@/lib/music-theory";
import {
  EAR_TRAINING_PATH, METRONOME_PATH, RHYTHM_PRESETS, TUNER_PATH,
  TUNER_PRESETS, VOICE_TYPE_PATH, rhythmPresetPath, tunerPresetPath,
} from "@/lib/music-tools";
import { SITE_DESCRIPTION, SITE_NAME, absoluteUrl } from "@/lib/seo";
import { TEACHERS } from "@/lib/teachers";
import type { BlogCategoryId } from "@/lib/content-types";

type IndexLink = { name: string; path: string; description?: string };

const TOOLS: IndexLink[] = [
  { name: "Metrónomo online", path: METRONOME_PATH },
  { name: "Afinador cromático", path: TUNER_PATH },
  { name: "Test de tipo de voz", path: VOICE_TYPE_PATH },
  { name: "Entrenamiento auditivo", path: EAR_TRAINING_PATH },
  { name: "Círculo de quintas", path: CIRCLE_OF_FIFTHS_PATH },
];

/** The root stays curated; scoped indices contain every published resource. */
export const AI_SECTIONS = ["clases", "profes", "academias", "blog", "herramientas", "acordes", "escalas"] as const;
export type AiSection = typeof AI_SECTIONS[number];

export function isAiSection(value: string): value is AiSection {
  return AI_SECTIONS.some((section) => section === value);
}

function linksMarkdown(links: IndexLink[]) {
  return links.map(({ name, path, description }) =>
    `- [${name}](${absoluteUrl(path)})${description ? `: ${markdownInline(description)}` : ""}`,
  );
}

function indexMarkdown(title: string, summary: string, links: IndexLink[]) {
  return [
    `# ${title} | ${SITE_NAME}`, "", `> ${summary}`, "",
    `Índice de la escuela: ${absoluteUrl("/llms.txt")}. Las versiones Markdown enlazadas comparten el contenido de las páginas HTML.`,
    "", "## Recursos", "", ...linksMarkdown(links), "",
  ].join("\n");
}

export function rootAiMarkdown() {
  return [
    `# ${SITE_NAME} (A ½ tono)`, "", `> ${SITE_DESCRIPTION}`, "",
    "Consulta el índice de la sección que necesites y después su página específica. Las páginas Markdown se generan a partir del mismo contenido que el sitio público.", "",
    ...siteFactsMarkdown(),
    "## Clases y profes", "",
    ...linksMarkdown([
      { name: "Clases por instrumento", path: "/clases/llms.txt", description: `${COURSE_PAGES.length} instrumentos con guía, edad recomendada y profes.` },
      { name: "Profes por instrumento, formato e idioma", path: "/profes/llms.txt", description: `${TEACHERS.length} perfiles completos en Markdown.` },
      { name: "Directorio de profes en Markdown", path: "/profes.md" },
      { name: "Clases online", path: "/clases-de-musica-online.md" },
      { name: "Clases a domicilio en Bogotá", path: "/clases-de-musica-a-domicilio-bogota.md" },
      { name: "Preuniversitario de música", path: "/preuniversitario-musica.md" },
    ]), "",
    "## Academias y colegios", "",
    ...linksMarkdown([{ name: "Selección y evaluación de profesores de música", path: "/academias/llms.txt" }]), "",
    "## Guías y recursos gratuitos", "",
    ...linksMarkdown([
      { name: "Guías del blog por tema", path: "/blog/llms.txt", description: "Aprender música, niños, adultos, instrumentos, cuidado, técnica, admisiones, profes y academias." },
      { name: "Herramientas musicales", path: "/herramientas/llms.txt", description: "Metrónomo, afinadores con las notas y frecuencias de cada instrumento, tempos de ritmos colombianos, entrenamiento auditivo, tipo de voz y círculo de quintas." },
      { name: "Diccionario de acordes", path: `${CHORDS_PATH}/llms.txt`, description: `${CHORDS.length} acordes con notas y digitaciones en Markdown.` },
      { name: "Escalas musicales", path: `${SCALES_PATH}/llms.txt`, description: `${SCALES.length} escalas con notas, fórmula y práctica en Markdown.` },
      { name: "Glosario musical", path: "/glosario-musical.md", description: "Términos de ritmo, armonía, lectura, técnica, instrumentos y estilos." },
    ]), "",
    "## Escuela y contacto", "",
    ...linksMarkdown([
      { name: "Nosotros y criterios de selección", path: "/nosotros" },
      { name: "Trabaja como profe", path: "/trabaja-con-nosotros" },
    ]), "",
    "## Optional", "",
    ...linksMarkdown([
      { name: "Contenido ampliado", path: "/llms-full.txt", description: "Clases, profes, servicios, glosario e índice del blog; para consultas de una sección usa los índices anteriores." },
      { name: "Sitemap XML", path: "/sitemap.xml", description: "Todas las páginas HTML publicadas." },
      { name: "RSS del blog", path: "/blog/rss.xml" },
    ]), "",
  ].join("\n");
}

export function sectionAiMarkdown(section: AiSection) {
  switch (section) {
    case "clases":
      return indexMarkdown("Clases de música", "Guías por instrumento con edades, formato y profes disponibles.",
        COURSE_PAGES.map((page) => ({ name: `Clases de ${page.course.label.toLowerCase()}`, path: `${page.path}.md`, description: page.guide.metaDescription })));
    case "profes":
      return indexMarkdown("Profes de música", `${TEACHERS.length} profes evaluados en música, pedagogía y calidad humana.`,
        TEACHERS.map((teacher) => ({ name: teacher.name, path: `/profes/${teacher.slug}.md`, description: `${teacher.skills.map((skill) => skill.label).join(", ")}. ${(teacher.classFormats ?? []).join(" y ")}. ${(teacher.classLanguages ?? []).join(", ")}.` })));
    case "academias":
      return indexMarkdown("Servicios para academias y colegios", "Selección y evaluación de profes de música para instituciones.",
        B2B_SERVICES.map((service) => ({ name: service.headline, path: `${service.path}.md`, description: service.summary })));
    case "blog":
      return indexMarkdown("Guías del blog", "Elige un tema para encontrar sus artículos completos en Markdown.",
        BLOG_CATEGORY_ORDER.filter((category) => postsByCategory(category).length).map((category) => ({ name: BLOG_CATEGORIES[category].label, path: `${categoryPath(category)}/llms.txt`, description: BLOG_CATEGORIES[category].description })));
    case "herramientas":
      return indexMarkdown("Herramientas para músicos", "Herramientas gratuitas que funcionan en el navegador; el audio del micrófono se analiza en el dispositivo.", [
        ...TOOLS,
        ...TUNER_PRESETS.map((preset) => ({ name: preset.headline, path: `${tunerPresetPath(preset.slug)}.md`, description: preset.tuningName })),
        ...RHYTHM_PRESETS.map((preset) => ({ name: preset.headline, path: `${rhythmPresetPath(preset.slug)}.md`, description: preset.summary })),
      ]);
    case "acordes":
      return indexMarkdown("Diccionario de acordes", `${CHORDS.length} acordes para guitarra, piano y ukelele: notas, fórmula, posiciones, inversiones y progresiones.`,
        CHORDS.map((chord) => ({ name: `${chord.longName} (${chord.symbol})`, path: `${chordPath(chord)}.md` })));
    case "escalas":
      return indexMarkdown("Escalas musicales", `${SCALES.length} escalas: notas, grados, intervalos, armadura y consejos de práctica.`,
        SCALES.map((scale) => ({ name: scale.name, path: `${scalePath(scale)}.md` })));
  }
}

export function blogCategoryAiMarkdown(category: BlogCategoryId) {
  return indexMarkdown(BLOG_CATEGORIES[category].title, BLOG_CATEGORIES[category].description,
    postsByCategory(category).map((post) => ({ name: post.title, path: `${postPath(post.slug)}.md` })));
}

export function aiIndexResponse(body: string) {
  return new Response(body, { headers: {
    "content-type": "text/markdown; charset=utf-8",
    "cache-control": "public, max-age=3600, s-maxage=86400",
    link: `<${absoluteUrl("/llms.txt")}>; rel="describedby"; type="text/markdown"`,
  } });
}
