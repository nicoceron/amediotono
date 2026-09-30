import { B2B_HUB_PATH, B2B_SERVICES } from "@/lib/b2b";
import { BLOG_CATEGORIES, BLOG_CATEGORY_ORDER, categoryPath, postPath, postsByCategory } from "@/lib/blog";
import { CONTACT_EMAIL, INSTAGRAM_URL, WHATSAPP_DISPLAY, whatsappHref } from "@/lib/contact";
import { COURSE_PAGES } from "@/lib/course-pages";
import { TEACHERS } from "@/lib/teachers";
import { METRONOME_PATH, TUNER_PATH, TUNER_PRESETS, tunerPresetPath } from "@/lib/music-tools";
import { SITE_DESCRIPTION, SITE_NAME, SITE_SLOGAN, absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

/**
 * llms.txt (https://llmstxt.org): a plain-Markdown map of the site for AI
 * assistants. Google Search ignores it; it is a cheap, harmless courtesy for
 * other answer engines and agents.
 */
export function GET() {
  const lines = [
    `# ${SITE_NAME} (A ½ tono)`,
    "",
    `> ${SITE_DESCRIPTION} ${SITE_SLOGAN}`,
    "",
    `${SITE_NAME} es una escuela de artes y música en Bogotá, Colombia. Conecta estudiantes de todas las edades con ${TEACHERS.length} profes evaluados en música, pedagogía y calidad humana antes de su primera clase. Las clases son virtuales o a domicilio en Bogotá y alrededores. También ofrece selección y evaluación de profesores de música para academias, colegios e instituciones.`,
    "",
    "## Clases de música",
    "",
    `- [Todas las clases](${absoluteUrl("/clases")}): catálogo de instrumentos por familia.`,
    ...COURSE_PAGES.map(
      (page) =>
        `- [Clases de ${page.course.label.toLowerCase()}](${absoluteUrl(page.path)}): ${page.guide.metaDescription}`,
    ),
    "",
    "## Profes",
    "",
    `- [Directorio de profes](${absoluteUrl("/profes")}): filtra por instrumento, formato, ubicación e idioma.`,
    ...TEACHERS.map(
      (teacher) =>
        `- [${teacher.name}](${absoluteUrl(`/profes/${teacher.slug}`)}): profe de ${teacher.role}.`,
    ),
    "",
    "## Para academias y colegios",
    "",
    `- [Selección y evaluación de profesores de música](${absoluteUrl(B2B_HUB_PATH)})`,
    ...B2B_SERVICES.map(
      (service) => `- [${service.headline}](${absoluteUrl(service.path)}): ${service.metaDescription}`,
    ),
    "",
    "## Preparación y clases online",
    "",
    `- [Clases de música online](${absoluteUrl("/clases-de-musica-online")}): clases en vivo por videollamada desde cualquier ciudad.`,
    `- [Preuniversitario de música](${absoluteUrl("/preuniversitario-musica")}): preparación para pruebas de admisión (teoría, solfeo, dictado, instrumento).`,
    "",
    "## Herramientas gratis",
    "",
    `- [Metrónomo online](${absoluteUrl(METRONOME_PATH)})`,
    `- [Afinador cromático online](${absoluteUrl(TUNER_PATH)})`,
    ...TUNER_PRESETS.map((preset) => `- [${preset.headline}](${absoluteUrl(tunerPresetPath(preset.slug))})`),
    "",
    ...BLOG_CATEGORY_ORDER.flatMap((category) => {
      const posts = postsByCategory(category);
      if (!posts.length) return [];
      return [
        `## Blog: ${BLOG_CATEGORIES[category].label} (${absoluteUrl(categoryPath(category))})`,
        "",
        ...posts.map((post) => `- [${post.title}](${absoluteUrl(postPath(post.slug))}): ${post.description}`),
        "",
      ];
    }),
    "## Contacto",
    "",
    `- WhatsApp: ${WHATSAPP_DISPLAY} (${whatsappHref()})`,
    `- Correo: ${CONTACT_EMAIL}`,
    `- Instagram: ${INSTAGRAM_URL}`,
    `- [Nosotros](${absoluteUrl("/nosotros")})`,
    `- [Trabaja como profe](${absoluteUrl("/trabaja-con-nosotros")})`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "content-type": "text/markdown; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
