import { HOME_FAQS } from "@/components/HomeFaqSection";
import { B2B_SERVICES } from "@/lib/b2b";
import { SERVICE_PAGES } from "@/content/service-pages";
import { BLOG_CATEGORIES, BLOG_CATEGORY_ORDER, postPath, postsByCategory } from "@/lib/blog";
import { COURSE_PAGES } from "@/lib/course-pages";
import {
  b2bServiceMarkdown,
  contactMarkdown,
  coursePageMarkdown,
  markdownInline,
  serviceMarkdown,
  siteFactsMarkdown,
  teacherProfileMarkdown,
} from "@/lib/markdown";
import {
  EAR_TRAINING_PATH,
  METRONOME_PATH,
  RHYTHM_PRESETS,
  TUNER_GROUPS,
  TUNER_PATH,
  VOICE_TYPE_PATH,
  rhythmPresetPath,
  tunerPresetPath,
  tunerPresetsInGroup,
} from "@/lib/music-tools";
import { SITE_BRAND, SITE_DESCRIPTION, SITE_NAME, absoluteUrl } from "@/lib/seo";
import { TEACHERS } from "@/lib/teachers";
import { GLOSSARY, GLOSSARY_GROUPS } from "@/content/glossary";
import { AI_SECTIONS } from "@/lib/ai-discovery";

export const dynamic = "force-static";

const SEPARATOR = "\n\n---\n\n";

/**
 * llms-full.txt: the site's services, course pages, profes, tools and
 * glossary as one Markdown document, so AI assistants can read it in a single
 * request. Blog posts are listed with their URLs rather than inlined (each
 * has its own `.md` twin), which keeps the file small enough to read whole.
 * /llms.txt is the short index.
 */
export function GET() {
  const intro = [
    `# ${SITE_NAME} (${SITE_BRAND}): contenido completo del sitio`,
    "",
    `> ${SITE_DESCRIPTION}`,
    "",
    `Este archivo reúne en Markdown el contenido de ${absoluteUrl("/")}: clases, profes, servicios para instituciones, herramientas, glosario y el índice de las guías del blog (cada guía está completa en Markdown agregando .md a su URL). Cada sección indica su URL original. Índice corto: ${absoluteUrl("/llms.txt")}.`,
    "",
    ...siteFactsMarkdown(),
    "## Índices por sección", "",
    ...AI_SECTIONS.map((section) => `- [${section}](${absoluteUrl(`/${section}/llms.txt`)}): consulta solo el tema que necesitas.`), "",
    "## Preguntas frecuentes",
    "",
    ...HOME_FAQS.flatMap((faq) => [`### ${faq.question}`, "", markdownInline(faq.answer), ""]),
    ...contactMarkdown(),
  ].join("\n");

  const tools = [
    "# Herramientas gratis para músicos",
    "",
    `- [Metrónomo online](${absoluteUrl(METRONOME_PATH)}): de 30 a 250 BPM, compases simples y compuestos (2/4 a 7/4, 2/2, 6/8, 9/8, 12/8), subdivisiones, acentos por tiempo y tap tempo.`,
    `- [Afinador cromático con micrófono](${absoluteUrl(TUNER_PATH)}): afina cualquier instrumento o la voz; el audio se analiza en el dispositivo.`,
    `- [Test de tipo de voz](${absoluteUrl(VOICE_TYPE_PATH)}): estima el tipo de voz a partir de la nota más grave y la más aguda que cantas.`,
    `- [Entrenamiento auditivo](${absoluteUrl(EAR_TRAINING_PATH)}): ejercicios para reconocer intervalos ascendentes, descendentes y armónicos.`,
    "",
    ...TUNER_GROUPS.flatMap((group) => [
      `## Afinadores: ${group.title.toLowerCase()}`,
      "",
      ...tunerPresetsInGroup(group.id).map(
        (preset) => `- [${preset.headline}](${absoluteUrl(tunerPresetPath(preset.slug))}): ${preset.tuningName}. ${preset.intro}`,
      ),
      "",
    ]),
    "## Metrónomo para ritmos colombianos",
    "",
    ...RHYTHM_PRESETS.map(
      (preset) =>
        `- [${preset.headline}](${absoluteUrl(rhythmPresetPath(preset.slug))}): ${preset.summary}. ${preset.facts.map(([label, detail]) => `${label}: ${detail}`).join("; ")}.`,
    ),
  ].join("\n");

  const glossary = [
    `# Glosario musical (${absoluteUrl("/glosario-musical")})`,
    "",
    ...GLOSSARY_GROUPS.flatMap((group) => [
      `## ${group}`,
      "",
      ...GLOSSARY.filter((term) => term.group === group).map(
        (term) =>
          `- **${term.term}**: ${markdownInline(term.definition)}${term.example ? ` ${markdownInline(term.example)}` : ""}`,
      ),
      "",
    ]),
  ].join("\n");

  const blog = [
    `# Guías del blog (${absoluteUrl("/blog")})`,
    "",
    "Cada guía está completa en Markdown en su URL terminada en .md.",
    "",
    ...BLOG_CATEGORY_ORDER.flatMap((category) => {
      const posts = postsByCategory(category);
      if (!posts.length) return [];
      return [
        `## ${BLOG_CATEGORIES[category].title}`,
        "",
        ...posts.map((post) => `- [${post.title}](${absoluteUrl(postPath(post.slug))}): ${post.excerpt}`),
        "",
      ];
    }),
  ].join("\n");

  const body = [
    intro,
    ...SERVICE_PAGES.map(serviceMarkdown),
    ...COURSE_PAGES.map(coursePageMarkdown),
    ...TEACHERS.map(teacherProfileMarkdown),
    ...B2B_SERVICES.map(b2bServiceMarkdown),
    tools,
    glossary,
    blog,
  ]
    .map((part) => part.trim())
    .join(SEPARATOR);

  return new Response(`${body}\n`, {
    headers: {
      "content-type": "text/markdown; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400",
      link: `<${absoluteUrl("/llms.txt")}>; rel="describedby"; type="text/markdown"`,
    },
  });
}
