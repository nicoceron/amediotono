import type { B2BService } from "@/lib/b2b";
import { BLOG_CATEGORIES, postAuthor, postPath, postsForCourse } from "@/lib/blog";
import { CONTACT_EMAIL, INSTAGRAM_URL, WHATSAPP_DISPLAY, whatsappHref } from "@/lib/contact";
import { resolveContentHref } from "@/lib/content-links";
import type { BlogPost, FaqItem, RichBlock } from "@/lib/content-types";
import { COURSE_PAGES, type CoursePage } from "@/lib/course-pages";
import { SITE_BRAND, SITE_NAME, absoluteUrl } from "@/lib/seo";
import { TEACHERS, type Teacher } from "@/lib/teachers";

/**
 * Clean Markdown versions of the site's content for AI assistants and agents
 * (https://llmstxt.org): served at `<page>.md` and concatenated in
 * /llms-full.txt. Built from the same typed content as the HTML pages, so
 * both always say the same thing.
 */

const LINK_PATTERN = /\[([^\]]+)\]\(([^)\s]+)\)/g;

/** Content keeps its `**bold**`; internal links become absolute URLs. */
export function markdownInline(text: string) {
  return text.replace(LINK_PATTERN, (_match, label: string, href: string) =>
    href.startsWith("/") ? `[${label}](${absoluteUrl(resolveContentHref(href))})` : `[${label}](${href})`,
  );
}

function tableRow(cells: string[]) {
  return `| ${cells.map((cell) => markdownInline(cell).replace(/\|/g, "\\|").replace(/\s+/g, " ")).join(" | ")} |`;
}

export function blocksToMarkdown(blocks: RichBlock[]): string[] {
  const lines: string[] = [];

  for (const block of blocks) {
    switch (block.type) {
      case "p":
        lines.push(markdownInline(block.text), "");
        break;
      case "h3":
        lines.push(`### ${markdownInline(block.text)}`, "");
        break;
      case "ul":
        lines.push(...block.items.map((item) => `- ${markdownInline(item)}`), "");
        break;
      case "ol":
        lines.push(...block.items.map((item, index) => `${index + 1}. ${markdownInline(item)}`), "");
        break;
      case "callout":
        if (block.title) lines.push(`> **${markdownInline(block.title)}**`, ">");
        lines.push(`> ${markdownInline(block.text)}`, "");
        break;
      case "quote":
        lines.push(`> ${markdownInline(block.text)}`);
        if (block.cite) lines.push(`> — ${block.cite}`);
        lines.push("");
        break;
      case "table":
        if (block.caption) lines.push(`**${block.caption}**`, "");
        lines.push(
          tableRow(block.head),
          `| ${block.head.map(() => "---").join(" | ")} |`,
          ...block.rows.map(tableRow),
          "",
        );
        break;
    }
  }

  return lines;
}

function faqMarkdown(faqs: FaqItem[], heading = "## Preguntas frecuentes") {
  if (!faqs.length) return [];
  return [
    heading,
    "",
    ...faqs.flatMap((faq) => [`### ${faq.question}`, "", markdownInline(faq.answer), ""]),
  ];
}

export function contactMarkdown() {
  return [
    "## Contacto",
    "",
    `- WhatsApp: ${WHATSAPP_DISPLAY} (${whatsappHref()})`,
    `- Correo: ${CONTACT_EMAIL}`,
    `- Instagram: ${INSTAGRAM_URL}`,
    `- Sitio web: ${absoluteUrl("/")}`,
    "",
  ];
}

function finish(lines: string[]) {
  return `${lines.join("\n").replace(/\n{3,}/g, "\n\n").trim()}\n`;
}

export function postMarkdown(post: BlogPost) {
  const author = postAuthor(post);
  const dates = post.updatedAt && post.updatedAt !== post.publishedAt
    ? `${post.publishedAt} (actualizado: ${post.updatedAt})`
    : post.publishedAt;

  return finish([
    `# ${post.title}`,
    "",
    `> ${post.description}`,
    "",
    `- URL: ${absoluteUrl(postPath(post.slug))}`,
    `- Publicado: ${dates}`,
    `- Categoría: ${BLOG_CATEGORIES[post.category].label}`,
    `- Autor: ${author.name} (${absoluteUrl(author.path)})`,
    `- Publica: ${SITE_NAME}, escuela de artes y música en Bogotá, Colombia (${absoluteUrl("/")})`,
    "",
    ...post.intro.flatMap((paragraph) => [markdownInline(paragraph), ""]),
    "## En resumen",
    "",
    ...post.keyTakeaways.map((item) => `- ${markdownInline(item)}`),
    "",
    ...post.sections.flatMap((section) => [`## ${section.heading}`, "", ...blocksToMarkdown(section.blocks)]),
    ...faqMarkdown(post.faqs ?? []),
  ]);
}

function teacherLine(teacher: Teacher) {
  const formats = teacher.classFormats?.join(" y ").toLowerCase() || "virtual y a domicilio";
  return `- [${teacher.name}](${absoluteUrl(`/profes/${teacher.slug}`)}): ${teacher.role}. Clases ${formats}. ${teacher.bio.replace(/\s+/g, " ").trim()}`;
}

export function coursePageMarkdown(page: CoursePage) {
  const { course, guide, teachers, path } = page;
  const label = course.label.toLowerCase();
  const guides = postsForCourse(course.id).slice(0, 12);

  return finish([
    `# ${guide.headline}`,
    "",
    `> ${guide.metaDescription}`,
    "",
    `- URL: ${absoluteUrl(path)}`,
    `- Edad para empezar: ${guide.startingAge}`,
    `- Formato: virtual (en vivo por videollamada, desde cualquier ciudad) o a domicilio en Bogotá y alrededores, según la disponibilidad de cada profe`,
    `- Profes de ${label}: ${teachers.length}`,
    "",
    markdownInline(guide.intro),
    "",
    "## Edad recomendada",
    "",
    markdownInline(guide.ageNote),
    "",
    `## Qué aprendes en las clases de ${label}`,
    "",
    ...guide.learn.map((item) => `- ${markdownInline(item)}`),
    "",
    "## Qué necesitas para empezar",
    "",
    ...guide.whatYouNeed.map((item) => `- ${markdownInline(item)}`),
    "",
    `## Beneficios de aprender ${label}`,
    "",
    ...guide.benefits.map((item) => `- ${markdownInline(item)}`),
    "",
    `## Profes de ${label}`,
    "",
    ...teachers.map(teacherLine),
    "",
    ...faqMarkdown(guide.faqs),
    ...(guides.length
      ? [
          `## Guías de ${label}`,
          "",
          ...guides.map((post) => `- [${post.title}](${absoluteUrl(postPath(post.slug))}): ${post.excerpt}`),
          "",
        ]
      : []),
    "## Cómo empezar",
    "",
    `Escribe por WhatsApp (${WHATSAPP_DISPLAY}, ${whatsappHref()}) con la edad del estudiante, su nivel, los horarios que le sirven y si prefiere clases virtuales o a domicilio. ${SITE_NAME} recomienda el profe que mejor encaja. El valor depende del formato, la duración y la frecuencia.`,
    "",
  ]);
}

export function teachersMarkdown(teachers: Teacher[]) {
  return finish([
    `# Profes de ${SITE_NAME}`,
    "",
    `> ${teachers.length} profes de música evaluados en música, pedagogía y calidad humana antes de su primera clase. Directorio: ${absoluteUrl("/profes")}`,
    "",
    ...teachers.map(teacherLine),
    "",
  ]);
}

export function b2bServiceMarkdown(service: B2BService) {
  return finish([
    `# ${service.headline}`,
    "",
    `> ${service.metaDescription}`,
    "",
    `- URL: ${absoluteUrl(service.path)}`,
    "",
    markdownInline(service.intro),
    "",
    "## Para quién es",
    "",
    ...service.idealFor.map((item) => `- ${markdownInline(item)}`),
    "",
    "## Qué incluye",
    "",
    ...service.includes.map((item) => `- ${markdownInline(item)}`),
    "",
    "## Cómo funciona",
    "",
    ...service.steps.map((step, index) => `${index + 1}. **${step.title}.** ${markdownInline(step.body)}`),
    "",
    `## ${service.deliverable.title}`,
    "",
    ...service.deliverable.items.map((item) => `- ${markdownInline(item)}`),
    "",
    ...faqMarkdown(service.faqs),
  ]);
}

/** Response for a Markdown twin of an HTML page (canonical points to the HTML). */
export function markdownResponse(body: string, canonicalPath: string) {
  return new Response(body, {
    headers: {
      "content-type": "text/markdown; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400",
      link: `<${absoluteUrl(canonicalPath)}>; rel="canonical"`,
    },
  });
}

/**
 * Plain facts about the business for llms.txt and llms-full.txt. Only state
 * what the rest of the site states; never add prices, rankings or claims.
 */
export function siteFactsMarkdown() {
  const instruments = COURSE_PAGES.map((page) => page.course.label.toLowerCase());
  const languages = Array.from(new Set(TEACHERS.flatMap((teacher) => teacher.classLanguages ?? []))).map((language) =>
    language.toLowerCase(),
  );

  return [
    "## Datos clave",
    "",
    `- Qué es: ${SITE_NAME} (también escrito ${SITE_BRAND} o «A 1/2 tono») es una escuela de artes y música con sede en Bogotá, Colombia, que ofrece clases particulares de música.`,
    `- Instrumentos y clases: ${instruments.join(", ")}.`,
    "- Para quién: niños (desde iniciación musical), jóvenes, adultos y adultos mayores, de cero o con experiencia.",
    "- Formatos: clases virtuales en vivo por videollamada, desde cualquier ciudad de Colombia o del exterior, y clases a domicilio en Bogotá y alrededores, según la disponibilidad de cada profe.",
    `- Profes: ${TEACHERS.length} profes; cada uno pasa por una evaluación de experiencia musical, pedagogía, calidad humana y forma de acompañar antes de su primera clase.`,
    languages.length ? `- Idiomas de las clases: ${languages.join(", ")}.` : "",
    `- Preuniversitario de música: preparación para las pruebas de admisión a carreras de música (teoría, solfeo, dictado e instrumento): ${absoluteUrl("/preuniversitario-musica")}`,
    `- Para academias, colegios e instituciones: selección de profesores de música, evaluación de candidatos y evaluación docente: ${absoluteUrl("/academias")}`,
    "- Precios: dependen del formato, la duración y la frecuencia de las clases; se consultan por WhatsApp.",
    `- Herramientas gratis: metrónomo, afinador con micrófono, test de tipo de voz, entrenamiento auditivo y glosario musical: ${absoluteUrl("/herramientas")}`,
    `- Por dónde empezar: estudiantes y familias en ${absoluteUrl("/clases")}; instituciones en ${absoluteUrl("/academias")}; profes que quieren enseñar en ${absoluteUrl("/trabaja-con-nosotros")}.`,
    `- Contacto: WhatsApp ${WHATSAPP_DISPLAY} (${whatsappHref()}), ${CONTACT_EMAIL}, Instagram ${INSTAGRAM_URL}.`,
    "",
  ].filter((line, index, lines) => line !== "" || lines[index - 1] !== "");
}
