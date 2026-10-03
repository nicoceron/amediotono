import { GLOSSARY } from "@/content/glossary";
import { SERVICE_PAGES } from "@/content/service-pages";
import { AI_SECTIONS, blogCategoryAiMarkdown, rootAiMarkdown, sectionAiMarkdown } from "@/lib/ai-discovery";
import { B2B_SERVICES } from "@/lib/b2b";
import { BLOG_CATEGORIES, BLOG_CATEGORY_ORDER, BLOG_POSTS, categoryPath, postPath, postsByCategory } from "@/lib/blog";
import { COURSE_PAGES } from "@/lib/course-pages";
import { normalizeSearchText } from "@/lib/courses";
import {
  b2bServiceMarkdown,
  coursePageMarkdown,
  glossaryMarkdown,
  postMarkdown,
  serviceMarkdown,
  teacherProfileMarkdown,
  teachersMarkdown,
} from "@/lib/markdown";
import { chordMarkdown, rhythmPresetMarkdown, scaleMarkdown, tunerPresetMarkdown } from "@/lib/music-markdown";
import { chordNotesText, chordPath, scaleNotesText, scalePath } from "@/lib/music-pages";
import { CHORDS, SCALES } from "@/lib/music-theory";
import { RHYTHM_PRESETS, TUNER_PRESETS, rhythmPresetPath, tunerPresetPath } from "@/lib/music-tools";
import { SITE_URL, absoluteUrl } from "@/lib/seo";
import { TEACHERS } from "@/lib/teachers";

/**
 * Every page the site publishes in Markdown, for agents that search and read
 * it through the MCP server (/mcp). Same builders as the `.md` twins, so the
 * answers match the pages.
 */

export const RESOURCE_TYPES = [
  "escuela", "indice", "clase", "servicio", "profe", "academias", "guia", "acorde", "escala", "afinador", "ritmo", "glosario",
] as const;
export type ResourceType = typeof RESOURCE_TYPES[number];

export type AgentResource = {
  /** Canonical HTML path; also the id agents pass to `fetch`. */
  path: string;
  type: ResourceType;
  title: string;
  description: string;
  /** Extra text that should match searches but isn't shown. */
  keywords?: string;
  markdown: () => string;
};

let registry: AgentResource[] | undefined;

export function agentResources(): AgentResource[] {
  registry ??= [
    { path: "/", type: "escuela", title: "A medio tono: datos de la escuela", description: "Qué es, clases, formatos, profes, contacto y por dónde empezar.", keywords: "escuela de musica bogota contacto whatsapp precios", markdown: rootAiMarkdown },
    { path: "/profes", type: "profe", title: "Directorio de profes", description: `Los ${TEACHERS.length} profes con instrumentos, formatos e idiomas.`, keywords: "profesores", markdown: () => teachersMarkdown(TEACHERS) },
    ...AI_SECTIONS.filter((section) => section !== "profes").map((section) => ({
      path: `/${section}`, type: "indice" as const, title: `Índice: ${section}`, description: `Lista de todas las páginas de /${section}.`, markdown: () => sectionAiMarkdown(section),
    })),
    ...BLOG_CATEGORY_ORDER.filter((category) => postsByCategory(category).length).map((category) => ({
      path: categoryPath(category), type: "indice" as const, title: `Guías: ${BLOG_CATEGORIES[category].title}`, description: BLOG_CATEGORIES[category].description, markdown: () => blogCategoryAiMarkdown(category),
    })),
    ...SERVICE_PAGES.map((page) => ({ path: page.path, type: "servicio" as const, title: page.title, description: page.description, markdown: () => serviceMarkdown(page) })),
    ...COURSE_PAGES.map((page) => ({
      path: page.path, type: "clase" as const, title: `Clases de ${page.course.label.toLowerCase()}`, description: page.guide.metaDescription,
      keywords: page.course.aliases.join(" "), markdown: () => coursePageMarkdown(page),
    })),
    ...TEACHERS.map((teacher) => ({
      path: `/profes/${teacher.slug}`, type: "profe" as const, title: `${teacher.name}, profe de ${teacher.role}`, description: teacher.bio,
      keywords: [...teacher.skills.flatMap((skill) => [skill.label, ...skill.aliases]), ...(teacher.classFormats ?? []), ...(teacher.classLanguages ?? [])].join(" "),
      markdown: () => teacherProfileMarkdown(teacher),
    })),
    ...B2B_SERVICES.map((service) => ({ path: service.path, type: "academias" as const, title: service.headline, description: service.summary, keywords: "academias colegios instituciones contratar", markdown: () => b2bServiceMarkdown(service) })),
    ...BLOG_POSTS.map((post) => ({
      path: postPath(post.slug), type: "guia" as const, title: post.title, description: post.description,
      keywords: post.keywords.join(" "), markdown: () => postMarkdown(post),
    })),
    ...TUNER_PRESETS.map((preset) => ({ path: tunerPresetPath(preset.slug), type: "afinador" as const, title: preset.headline, description: preset.tuningName, keywords: "afinacion notas cuerdas frecuencias", markdown: () => tunerPresetMarkdown(preset) })),
    ...RHYTHM_PRESETS.map((preset) => ({ path: rhythmPresetPath(preset.slug), type: "ritmo" as const, title: preset.headline, description: preset.summary, keywords: `${preset.name} compas tempo bpm`, markdown: () => rhythmPresetMarkdown(preset) })),
    ...CHORDS.map((chord) => ({ path: chordPath(chord), type: "acorde" as const, title: `Acorde de ${chord.longName} (${chord.symbol})`, description: `Notas: ${chordNotesText(chord)}.`, keywords: `${chord.name} ${chord.displaySymbol}`, markdown: () => chordMarkdown(chord) })),
    ...SCALES.map((scale) => ({ path: scalePath(scale), type: "escala" as const, title: `Escala de ${scale.longName}`, description: `Notas: ${scaleNotesText(scale)}.`, keywords: scale.name, markdown: () => scaleMarkdown(scale) })),
    { path: "/glosario-musical", type: "glosario", title: "Glosario de términos musicales", description: "Definiciones de ritmo, armonía, lectura, técnica, instrumentos y estilos.", keywords: `diccionario musical ${GLOSSARY.map((term) => term.term).join(" ")}`, markdown: glossaryMarkdown },
  ];
  return registry;
}

const SITE_HOSTS = new Set(["amediotonomusic.com", new URL(SITE_URL).hostname.replace(/^www\./, "")]);

/** Accepts a path, a full site URL or a `.md` URL and returns the canonical path. */
export function resourcePath(idOrUrl: string) {
  let path: string;
  try {
    const url = new URL(idOrUrl.trim(), SITE_URL);
    if (!SITE_HOSTS.has(url.hostname.replace(/^www\./, ""))) return undefined;
    path = decodeURIComponent(url.pathname);
  } catch {
    return undefined;
  }
  path = path.replace(/\.md$/, "").replace(/\/llms\.txt$/, "").replace(/(.)\/$/, "$1");
  return path || "/";
}

let byPath: Map<string, AgentResource> | undefined;

export function getAgentResource(idOrUrl: string) {
  const path = resourcePath(idOrUrl);
  byPath ??= new Map(agentResources().map((resource) => [resource.path, resource]));
  return path ? byPath.get(path) : undefined;
}

const STOPWORDS = new Set([
  // Not "la", "mi", "si", "re": they're also note names.
  "a", "al", "como", "con", "de", "del", "el", "en", "es", "las", "lo", "los", "para", "por", "que", "se", "su", "tu", "un", "una", "y", "o",
]);

/** Lowercase words without accents; ♯ is written # as in chord symbols. */
function searchWords(text: string) {
  return normalizeSearchText(text).replace(/♯/g, "#").split(/[^a-z0-9#]+/).filter(Boolean);
}

const indexed = new WeakMap<AgentResource, { title: string[]; rest: string[] }>();

function wordsOf(resource: AgentResource) {
  let entry = indexed.get(resource);
  if (!entry) {
    entry = { title: searchWords(resource.title), rest: searchWords(`${resource.description} ${resource.keywords ?? ""}`) };
    indexed.set(resource, entry);
  }
  return entry;
}

/**
 * Keyword search over titles (worth more) and descriptions. Query words match
 * word prefixes, so "acorde" finds "acordes". Results must contain every
 * word; when nothing does, the best partial matches are returned instead.
 */
export function searchAgentResources(query: string, { type, limit = 10 }: { type?: ResourceType; limit?: number } = {}) {
  const all = searchWords(query);
  const terms = all.filter((word) => !STOPWORDS.has(word));
  const words = terms.length ? terms : all;
  if (!words.length) return [];

  const scored = agentResources()
    .filter((resource) => !type || resource.type === type)
    .map((resource) => {
      const { title, rest } = wordsOf(resource);
      let score = 0;
      let matched = 0;
      for (const word of words) {
        // Singular stem, so "colegios" also finds "colegio".
        const stem = word.length > 3 && word.endsWith("s") ? word.slice(0, -1) : word;
        if (title.some((candidate) => candidate === word || candidate === stem)) score += 4;
        else if (title.some((candidate) => candidate.startsWith(stem))) score += 3;
        else if (rest.some((candidate) => candidate.startsWith(stem))) score += 1;
        else continue;
        matched++;
      }
      return { resource, score, matched };
    })
    .filter((match) => match.score > 0);

  const complete = scored.filter((match) => match.matched === words.length);
  return (complete.length ? complete : scored)
    .sort((a, b) => b.matched - a.matched || b.score - a.score || a.resource.title.length - b.resource.title.length)
    .slice(0, limit)
    .map(({ resource }) => resource);
}

export function resourceUrl(resource: AgentResource) {
  return absoluteUrl(resource.path);
}
