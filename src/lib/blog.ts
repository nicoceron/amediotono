import { BLOG_POST_ENTRIES } from "@/content/blog";
import { blocksToPlainText, plainText } from "@/components/RichText";
import type { BlogCategoryId, BlogPost } from "@/lib/content-types";
import { getTeacherBySlug } from "@/lib/teachers";

export const BLOG_CATEGORIES: Record<
  BlogCategoryId,
  { label: string; description: string; accent: string }
> = {
  "aprender-musica": {
    label: "Aprender música",
    description: "Guías para familias y estudiantes: cuándo empezar, cómo elegir profe y cómo practicar.",
    accent: "var(--orange)",
  },
  instrumentos: {
    label: "Instrumentos",
    description: "Todo sobre cada instrumento: por dónde empezar, qué esperar y cómo avanzar.",
    accent: "var(--pink)",
  },
  academias: {
    label: "Para academias",
    description: "Selección, evaluación y gestión de profes de música para academias y colegios.",
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

export function postsByCategory(category: BlogCategoryId) {
  return BLOG_POSTS.filter((post) => post.category === category);
}

export function postsForCourse(courseId: string) {
  return BLOG_POSTS.filter((post) => post.relatedCourseIds?.includes(courseId));
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
    name: "Equipo pedagógico de A medio tono",
    role: "Profes y coordinación académica",
    path: "/nosotros",
    teacher: undefined,
  };
}

const DATE_FORMAT = new Intl.DateTimeFormat("es-CO", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function formatPostDate(isoDate: string) {
  return DATE_FORMAT.format(new Date(`${isoDate}T00:00:00Z`));
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
