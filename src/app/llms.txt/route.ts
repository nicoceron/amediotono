import { B2B_HUB_PATH, B2B_SERVICES } from "@/lib/b2b";
import { BLOG_POSTS, postPath } from "@/lib/blog";
import { CONTACT_EMAIL, INSTAGRAM_URL, WHATSAPP_DISPLAY, whatsappHref } from "@/lib/contact";
import { COURSE_PAGES } from "@/lib/course-pages";
import { TEACHERS } from "@/lib/teachers";
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
    "## Blog",
    "",
    ...BLOG_POSTS.map((post) => `- [${post.title}](${absoluteUrl(postPath(post.slug))}): ${post.description}`),
    "",
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
