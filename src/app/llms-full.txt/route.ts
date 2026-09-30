import { HOME_FAQS } from "@/components/HomeFaqSection";
import { B2B_SERVICES } from "@/lib/b2b";
import { BLOG_CATEGORIES, BLOG_CATEGORY_ORDER, postsByCategory } from "@/lib/blog";
import { COURSE_PAGES } from "@/lib/course-pages";
import {
  b2bServiceMarkdown,
  contactMarkdown,
  coursePageMarkdown,
  markdownInline,
  postMarkdown,
  siteFactsMarkdown,
  teachersMarkdown,
} from "@/lib/markdown";
import {
  EAR_TRAINING_PATH,
  METRONOME_PATH,
  TUNER_PATH,
  TUNER_PRESETS,
  VOICE_TYPE_PATH,
  tunerPresetPath,
} from "@/lib/music-tools";
import { SITE_BRAND, SITE_DESCRIPTION, SITE_NAME, absoluteUrl } from "@/lib/seo";
import { TEACHERS } from "@/lib/teachers";
import { GLOSSARY, GLOSSARY_GROUPS } from "@/content/glossary";

export const dynamic = "force-static";

const SEPARATOR = "\n\n---\n\n";

/**
 * llms-full.txt: every guide, course page, profe and service of the site as
 * one Markdown document, so AI assistants can read the whole site in a
 * single request. /llms.txt is the short index.
 */
export function GET() {
  const intro = [
    `# ${SITE_NAME} (${SITE_BRAND}): contenido completo del sitio`,
    "",
    `> ${SITE_DESCRIPTION}`,
    "",
    `Este archivo reúne en Markdown el contenido de ${absoluteUrl("/")}: clases, profes, servicios para instituciones, herramientas, glosario y todas las guías del blog. Cada sección indica su URL original. Índice corto: ${absoluteUrl("/llms.txt")}.`,
    "",
    ...siteFactsMarkdown(),
    "## Preguntas frecuentes",
    "",
    ...HOME_FAQS.flatMap((faq) => [`### ${faq.question}`, "", markdownInline(faq.answer), ""]),
    ...contactMarkdown(),
  ].join("\n");

  const tools = [
    "# Herramientas gratis para músicos",
    "",
    `- [Metrónomo online](${absoluteUrl(METRONOME_PATH)}): de 30 a 250 BPM, compases, subdivisiones, acento y tap tempo.`,
    `- [Afinador cromático con micrófono](${absoluteUrl(TUNER_PATH)}): afina cualquier instrumento o la voz; el audio se analiza en el dispositivo.`,
    ...TUNER_PRESETS.map(
      (preset) => `- [${preset.headline}](${absoluteUrl(tunerPresetPath(preset.slug))}): ${preset.tuningName}.`,
    ),
    `- [Test de tipo de voz](${absoluteUrl(VOICE_TYPE_PATH)}): estima el tipo de voz a partir de la nota más grave y la más aguda que cantas.`,
    `- [Entrenamiento auditivo](${absoluteUrl(EAR_TRAINING_PATH)}): ejercicios para reconocer intervalos ascendentes, descendentes y armónicos.`,
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

  const blog = BLOG_CATEGORY_ORDER.flatMap((category) => {
    const posts = postsByCategory(category);
    if (!posts.length) return [];
    return [
      `# Blog: ${BLOG_CATEGORIES[category].title}`,
      ...posts.map(postMarkdown),
    ];
  });

  const body = [
    intro,
    teachersMarkdown(TEACHERS),
    ...COURSE_PAGES.map(coursePageMarkdown),
    ...B2B_SERVICES.map(b2bServiceMarkdown),
    tools,
    glossary,
    ...blog,
  ]
    .map((part) => part.trim())
    .join(SEPARATOR);

  return new Response(`${body}\n`, {
    headers: {
      "content-type": "text/markdown; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
