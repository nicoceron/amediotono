import { B2B_HUB_PATH, B2B_SERVICES } from "@/lib/b2b";
import { BLOG_CATEGORIES, BLOG_CATEGORY_ORDER, categoryPath, postPath, postsByCategory } from "@/lib/blog";
import { CONTACT_EMAIL, INSTAGRAM_URL, WHATSAPP_DISPLAY, whatsappHref } from "@/lib/contact";
import { COURSE_PAGES } from "@/lib/course-pages";
import { TEACHERS } from "@/lib/teachers";
import {
  EAR_TRAINING_PATH,
  METRONOME_PATH,
  RHYTHM_PRESETS,
  TUNER_PATH,
  TUNER_PRESETS,
  VOICE_TYPE_PATH,
  rhythmPresetPath,
  tunerPresetPath,
} from "@/lib/music-tools";
import { siteFactsMarkdown } from "@/lib/markdown";
import { CHORDS_PATH, CIRCLE_OF_FIFTHS_PATH, SCALES_PATH, chordPath } from "@/lib/music-pages";
import { CHORDS, CHORD_TYPES, SCALES } from "@/lib/music-theory";
import { SITE_DESCRIPTION, SITE_NAME, SITE_SLOGAN, absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

/**
 * llms.txt (https://llmstxt.org): a plain-Markdown map of the site for AI
 * assistants, with the key facts up front. /llms-full.txt has the full text
 * and every guide, course page, profe, service and service page also answers
 * at `<url>.md`.
 */
export function GET() {
  const lines = [
    `# ${SITE_NAME} (A ½ tono)`,
    "",
    `> ${SITE_DESCRIPTION} ${SITE_SLOGAN}`,
    "",
    `${SITE_NAME} es una escuela de artes y música en Bogotá, Colombia. Conecta estudiantes de todas las edades con ${TEACHERS.length} profes evaluados en música, pedagogía y calidad humana antes de su primera clase. Las clases son virtuales o a domicilio en Bogotá y alrededores. También ofrece selección y evaluación de profesores de música para academias, colegios e instituciones.`,
    "",
    ...siteFactsMarkdown(),
    "## Versiones para asistentes de IA",
    "",
    `- [Contenido completo en un solo archivo](${absoluteUrl("/llms-full.txt")}): todas las guías, clases, profes y servicios en Markdown.`,
    `- Cada artículo del blog, página de clase, perfil de profe, servicio para academias y las páginas de clases a domicilio, clases online y preuniversitario tienen una versión en Markdown: agrega \`.md\` a su URL (por ejemplo ${absoluteUrl("/clases/piano.md")} o ${absoluteUrl("/clases-de-musica-a-domicilio-bogota.md")}).`,
    `- [Profes en Markdown](${absoluteUrl("/profes.md")})`,
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
    "## Clases online, a domicilio y preparación",
    "",
    `- [Clases de música online](${absoluteUrl("/clases-de-musica-online")}): clases en vivo por videollamada desde cualquier ciudad.`,
    `- [Clases de música a domicilio en Bogotá](${absoluteUrl("/clases-de-musica-a-domicilio-bogota")}): el profe va a tu casa en Bogotá y alrededores, según su disponibilidad.`,
    `- [Preuniversitario de música](${absoluteUrl("/preuniversitario-musica")}): preparación para pruebas de admisión (teoría, solfeo, dictado, instrumento).`,
    "",
    "## Herramientas gratis",
    "",
    `- [Metrónomo online](${absoluteUrl(METRONOME_PATH)})`,
    `- [Afinador cromático online](${absoluteUrl(TUNER_PATH)})`,
    `- [¿Qué tipo de voz tengo? Test de tesitura con micrófono](${absoluteUrl(VOICE_TYPE_PATH)})`,
    `- [Entrenamiento auditivo de intervalos](${absoluteUrl(EAR_TRAINING_PATH)})`,
    `- [Glosario de términos musicales](${absoluteUrl("/glosario-musical")})`,
    `- [Círculo de quintas interactivo](${absoluteUrl(CIRCLE_OF_FIFTHS_PATH)}): armaduras, relativas y acordes de las 24 tonalidades.`,
    `- [Diccionario de acordes](${absoluteUrl(CHORDS_PATH)}): ${CHORDS.length} acordes (12 notas × ${CHORD_TYPES.length} tipos) con notas, digitación en guitarra, piano y ukelele, inversiones y progresiones. URL de cada acorde: ${absoluteUrl(CHORDS_PATH)}/<nota>-<tipo>, por ejemplo ${absoluteUrl(chordPath(CHORDS[0]))}.`,
    `- [Escalas musicales](${absoluteUrl(SCALES_PATH)}): ${SCALES.length} escalas (mayor, menores, pentatónicas y blues en las 12 tonalidades) con notas, fórmula, armadura, acordes, piano y mástil de guitarra.`,
    ...TUNER_PRESETS.map((preset) => `- [${preset.headline}](${absoluteUrl(tunerPresetPath(preset.slug))})`),
    ...RHYTHM_PRESETS.map((preset) => `- [${preset.headline}](${absoluteUrl(rhythmPresetPath(preset.slug))})`),
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
