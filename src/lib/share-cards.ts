import { B2B_SERVICES } from "@/lib/b2b";
import { BLOG_CATEGORIES, BLOG_CATEGORY_ORDER, BLOG_POSTS } from "@/lib/blog";
import { COURSE_PAGES } from "@/lib/course-pages";
import { CHORDS, SCALES } from "@/lib/music-theory";
import { RHYTHM_PRESETS, TUNER_PRESETS } from "@/lib/music-tools";
import { TEACHERS } from "@/lib/teachers";
import { GLOSSARY } from "@/content/glossary";

/**
 * Branded social cards (1200×630) for landing, tool, hub and category pages,
 * served from /og/<key>.png. Blog posts, course pages and profes have their
 * own share-image.png routes.
 */
export type ShareCard = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  accent?: string;
  icon?: string;
};

const courseIcon = (courseId: string | undefined) =>
  COURSE_PAGES.find((page) => page.course.id === courseId)?.course.icon;

const STATIC_CARDS: Record<string, ShareCard> = {
  clases: {
    eyebrow: `${COURSE_PAGES.length} instrumentos`,
    title: "Clases de música para todas las edades",
    subtitle: "Virtuales o a domicilio en Bogotá, con profes evaluados.",
    accent: "var(--orange)",
    icon: courseIcon("piano"),
  },
  profes: {
    eyebrow: `${TEACHERS.length} profes evaluados`,
    title: "Encuentra tu profe de música",
    subtitle: "Filtra por instrumento, formato e idioma y escríbele por WhatsApp.",
    accent: "var(--pink)",
    icon: courseIcon("canto"),
  },
  "clases-de-musica-online": {
    eyebrow: "En vivo · desde cualquier ciudad",
    title: "Clases de música online en Colombia",
    subtitle: "Piano, canto, guitarra, violín y más, por videollamada con profes evaluados.",
    accent: "var(--blue)",
    icon: courseIcon("guitarra-acustica"),
  },
  "clases-de-musica-a-domicilio-bogota": {
    eyebrow: "Bogotá y alrededores",
    title: "Clases de música a domicilio en Bogotá",
    subtitle: "Un profe evaluado va a tu casa: niños, jóvenes y adultos.",
    accent: "var(--orange)",
    icon: courseIcon("violin"),
  },
  "preuniversitario-musica": {
    eyebrow: "Pruebas de admisión",
    title: "Preuniversitario de música",
    subtitle: "Teoría, solfeo, dictado e instrumento para entrar a estudiar música.",
    accent: "var(--green)",
    icon: courseIcon("teoria-musical"),
  },
  herramientas: {
    eyebrow: "Gratis · sin descargas",
    title: "Herramientas gratis para músicos",
    subtitle: "Metrónomo, afinador, test de voz y entrenamiento auditivo.",
    accent: "var(--green)",
  },
  metronomo: {
    eyebrow: "Herramienta gratis",
    title: "Metrónomo online",
    subtitle: "De 30 a 250 BPM, con compases, subdivisiones, acento y tap tempo.",
    accent: "var(--orange)",
    icon: courseIcon("percusion"),
  },
  afinador: {
    eyebrow: "Herramienta gratis",
    title: "Afinador online con micrófono",
    subtitle: "Afina cualquier instrumento o tu voz desde el navegador.",
    accent: "var(--green)",
    icon: courseIcon("guitarra-acustica"),
  },
  "tipo-de-voz": {
    eyebrow: "Test gratis",
    title: "¿Qué tipo de voz tengo?",
    subtitle: "Test de tesitura: canta tu nota más grave y la más aguda.",
    accent: "var(--pink)",
    icon: courseIcon("canto"),
  },
  "entrenamiento-auditivo": {
    eyebrow: "Herramienta gratis",
    title: "Entrenamiento auditivo de intervalos",
    subtitle: "Escucha, adivina y entrena tu oído para solfeo y dictado.",
    accent: "var(--blue)",
    icon: courseIcon("teoria-musical"),
  },
  "glosario-musical": {
    eyebrow: `${GLOSSARY.length} términos`,
    title: "Glosario musical en palabras sencillas",
    subtitle: "Los términos de la música explicados con ejemplos.",
    accent: "var(--purple)",
    icon: courseIcon("teoria-musical"),
  },
  acordes: {
    eyebrow: `${CHORDS.length} acordes con diagramas`,
    title: "Acordes de guitarra, piano y ukelele",
    subtitle: "Notas, digitación, inversiones y progresiones de cada acorde.",
    accent: "var(--orange)",
    icon: courseIcon("guitarra-acustica"),
  },
  escalas: {
    eyebrow: `${SCALES.length} escalas`,
    title: "Escalas musicales: notas, piano y guitarra",
    subtitle: "Mayores, menores, pentatónicas y de blues en las 12 tonalidades.",
    accent: "var(--blue)",
    icon: courseIcon("piano"),
  },
  "circulo-de-quintas": {
    eyebrow: "Herramienta gratis",
    title: "Círculo de quintas interactivo",
    subtitle: "Armaduras, relativas y acordes de las 24 tonalidades.",
    accent: "var(--purple)",
    icon: courseIcon("teoria-musical"),
  },
  blog: {
    eyebrow: `${BLOG_POSTS.length} guías`,
    title: "Blog de música de A medio tono",
    subtitle: "Edades, instrumentos, técnica, cuidado y cómo estudiar música en Colombia.",
    accent: "var(--pink)",
  },
  academias: {
    eyebrow: "Para academias y colegios",
    title: "Selección y evaluación de profes de música",
    subtitle: "Encontramos, evaluamos y acompañamos a los profes de tu institución.",
    accent: "var(--blue)",
  },
  nosotros: {
    eyebrow: "Escuela de artes y música",
    title: "Conoce A medio tono",
    subtitle: "Profes elegidos a mano, y oído, para clases virtuales y a domicilio.",
    accent: "var(--orange)",
  },
  "trabaja-con-nosotros": {
    eyebrow: "Convocatoria abierta",
    title: "Trabaja con nosotros como profe de música",
    subtitle: "Clases virtuales y a domicilio en Bogotá.",
    accent: "var(--green)",
  },
};

export const SHARE_CARDS: Record<string, ShareCard> = {
  ...STATIC_CARDS,
  ...Object.fromEntries(
    BLOG_CATEGORY_ORDER.map((category) => [
      `blog-${category}`,
      {
        eyebrow: BLOG_CATEGORIES[category].label,
        title: BLOG_CATEGORIES[category].title,
        subtitle: BLOG_CATEGORIES[category].description,
        accent: BLOG_CATEGORIES[category].accent,
      },
    ]),
  ),
  ...Object.fromEntries(
    B2B_SERVICES.map((service) => [
      `academias-${service.slug}`,
      {
        eyebrow: "Para academias y colegios",
        title: service.headline,
        subtitle: service.summary,
        accent: service.accent,
      },
    ]),
  ),
  ...Object.fromEntries(
    TUNER_PRESETS.map((preset) => [
      `afinador-${preset.slug}`,
      {
        eyebrow: preset.tuningName,
        title: preset.headline,
        subtitle: "Gratis, con el micrófono de tu celular o computador.",
        accent: "var(--green)",
        icon: courseIcon(preset.courseId),
      },
    ]),
  ),
  ...Object.fromEntries(
    RHYTHM_PRESETS.map((preset) => [
      `metronomo-${preset.slug}`,
      {
        eyebrow: preset.summary,
        title: preset.headline,
        subtitle: "Compás, tempo y acentos listos para practicar, gratis en el navegador.",
        accent: "var(--orange)",
        icon: courseIcon(preset.courseId ?? "percusion"),
      },
    ]),
  ),
};

/** Metadata image for a card in SHARE_CARDS. */
export function shareImage(key: keyof typeof SHARE_CARDS & string) {
  const card = SHARE_CARDS[key];

  return {
    url: `/og/${key}.png`,
    width: 1200,
    height: 630,
    alt: card ? `${card.title} — A medio tono` : "A medio tono",
    type: "image/png",
  };
}
