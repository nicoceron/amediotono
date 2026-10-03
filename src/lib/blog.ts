import { BLOG_POST_ENTRIES } from "@/content/blog";
import { blocksToPlainText, plainText } from "@/components/RichText";
import type { BlogCategoryId, BlogPost } from "@/lib/content-types";
import { getTeacherBySlug } from "@/lib/teachers";

export const BLOG_CATEGORIES: Record<
  BlogCategoryId,
  { label: string; title: string; description: string; accent: string }
> = {
  "aprender-musica": {
    label: "Aprender música",
    title: "Aprender música: guías para empezar y avanzar",
    description: "Cómo empezar desde cero, practicar mejor y elegir entre clases virtuales, a domicilio o híbridas.",
    accent: "var(--orange)",
  },
  ninos: {
    label: "Música para niños",
    title: "Música para niños: guías para papás y mamás",
    description: "Desde la estimulación musical de bebés hasta adolescentes: edades, instrumentos, práctica y motivación.",
    accent: "var(--pink)",
  },
  adultos: {
    label: "Adultos y mayores",
    title: "Aprender música de adulto y en la tercera edad",
    description: "Nunca es tarde: guías para adultos, abuelos y familias que quieren aprender música.",
    accent: "var(--purple)",
  },
  instrumentos: {
    label: "Instrumentos",
    title: "Guías de instrumentos: cuál elegir y cuánto toma aprender",
    description: "Beneficios, comparativas y tiempos realistas para cada instrumento, incluida la música colombiana.",
    accent: "var(--green)",
  },
  "cuidado-y-compra": {
    label: "Cuidado y compra",
    title: "Cómo elegir, comprar y cuidar tu instrumento",
    description: "Guías para escoger tu primer instrumento y mantenerlo limpio, afinado y protegido del clima.",
    accent: "var(--blue)",
  },
  tecnica: {
    label: "Teoría y técnica",
    title: "Teoría y técnica musical para principiantes",
    description: "Afinar, leer partituras, acordes, escalas, respiración y ejercicios explicados paso a paso.",
    accent: "var(--red)",
  },
  "estudiar-musica": {
    label: "Estudiar música",
    title: "Estudiar música en Colombia: admisiones y preuniversitario",
    description: "Carreras de música, pruebas de admisión, dictado, solfeo y audiciones en universidades colombianas.",
    accent: "var(--orange)",
  },
  "para-profes": {
    label: "Para profes",
    title: "Guías para profes de música",
    description: "Cómo ser profe de música en Colombia, dar clases particulares y preparar clases que funcionan.",
    accent: "var(--green)",
  },
  academias: {
    label: "Para academias",
    title: "Guías para academias y colegios",
    description: "Selección, evaluación y gestión de profes de música para academias, colegios e instituciones.",
    accent: "var(--blue)",
  },
};

export const BLOG_CATEGORY_ORDER = Object.keys(BLOG_CATEGORIES) as BlogCategoryId[];

export const BLOG_POSTS: BlogPost[] = [...BLOG_POST_ENTRIES].sort(
  (a, b) => b.publishedAt.localeCompare(a.publishedAt) || a.title.localeCompare(b.title, "es"),
);

const POST_BY_SLUG = new Map(BLOG_POSTS.map((post) => [post.slug, post]));

export function getPost(slug: string) {
  return POST_BY_SLUG.get(slug);
}

export function postPath(slug: string) {
  return `/blog/${slug}`;
}

export function categoryPath(category: BlogCategoryId) {
  return `/blog/categoria/${category}`;
}

export function postsByCategory(category: BlogCategoryId) {
  return BLOG_POSTS.filter((post) => post.category === category);
}

/** Posts about a course, the ones where it is the main instrument first. */
export function postsForCourse(courseId: string) {
  return BLOG_POSTS.filter((post) => post.relatedCourseIds?.includes(courseId)).sort(
    (a, b) =>
      (a.relatedCourseIds?.indexOf(courseId) ?? 0) - (b.relatedCourseIds?.indexOf(courseId) ?? 0),
  );
}

/** Posts whose main instrument is this course (first relatedCourseId). */
export function primaryCoursePosts(courseId: string) {
  return BLOG_POSTS.filter((post) => post.relatedCourseIds?.[0] === courseId);
}

export function relatedPosts(post: BlogPost, limit = 3) {
  const explicit = (post.relatedPostSlugs ?? [])
    .map((slug) => getPost(slug))
    .filter((related): related is BlogPost => Boolean(related) && related?.slug !== post.slug);
  const sameCategory = BLOG_POSTS.filter(
    (candidate) =>
      candidate.slug !== post.slug &&
      candidate.category === post.category &&
      !explicit.some((related) => related.slug === candidate.slug),
  );

  return [...explicit, ...sameCategory].slice(0, limit);
}

export function postPlainText(post: BlogPost) {
  return [
    ...post.intro.map(plainText),
    ...post.keyTakeaways.map((item) => `- ${plainText(item)}`),
    ...post.sections.flatMap((section) => [section.heading, blocksToPlainText(section.blocks)]),
    ...(post.faqs ?? []).flatMap((faq) => [faq.question, plainText(faq.answer)]),
  ].join("\n\n");
}

export function postWordCount(post: BlogPost) {
  return postPlainText(post).split(/\s+/).filter(Boolean).length;
}

export function readingMinutes(post: BlogPost) {
  return Math.max(1, Math.round(postWordCount(post) / 200));
}

export function postAuthor(post: BlogPost) {
  if (post.author?.type === "teacher") {
    const teacher = getTeacherBySlug(post.author.slug);
    if (teacher) {
      return {
        name: teacher.name,
        role: `Profe de ${teacher.role}`,
        path: `/profes/${teacher.slug}`,
        teacher,
      };
    }
  }

  return {
    name: "Equipo de A medio tono",
    role: "Escuela de artes y música en Bogotá",
    path: "/nosotros",
    teacher: undefined,
  };
}

export function formatPostDate(isoDate: string, locale = "es-CO") {
  return new Intl.DateTimeFormat(locale, {
    day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
  }).format(new Date(`${isoDate}T00:00:00Z`));
}

export function latestPostDate() {
  return BLOG_POSTS.reduce(
    (latest, post) => {
      const date = post.updatedAt ?? post.publishedAt;
      return date > latest ? date : latest;
    },
    "1970-01-01",
  );
}
