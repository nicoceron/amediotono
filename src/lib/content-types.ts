/**
 * Shared content model for editorial pages (course guides, blog posts and
 * business pages).
 *
 * Text fields accept a tiny inline syntax rendered by `RichText`:
 *   **negrita**            → <strong>
 *   [texto](/ruta)         → internal <Link> (or external <a> for http URLs)
 * Nothing else is parsed, so content stays plain, portable and easy to edit.
 */

export type FaqItem = {
  question: string;
  answer: string;
};

export type RichBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title?: string; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "table"; caption?: string; head: string[]; rows: string[][] };

export type RichSection = {
  /** URL fragment for the table of contents, e.g. "edad-recomendada". */
  id: string;
  heading: string;
  blocks: RichBlock[];
};

export type CourseFamily =
  | "teclados"
  | "cuerdas-pulsadas"
  | "cuerdas-frotadas"
  | "vientos-madera"
  | "vientos-metal"
  | "voz"
  | "percusion"
  | "formacion";

export type CourseGuide = {
  /** Must match an id in src/data/courses.json. */
  id: string;
  family: CourseFamily;
  /** Visible H1, e.g. "Clases de piano en Bogotá y virtuales". */
  headline: string;
  /** <title> without the brand suffix, ideally ≤ 50 characters. */
  seoTitle: string;
  /** Meta description, 120–155 characters. */
  metaDescription: string;
  /** 2–3 sentence lead paragraph (inline syntax allowed). */
  intro: string;
  /** Short label such as "Desde los 5 años". */
  startingAge: string;
  /** Paragraph that explains the age recommendation honestly. */
  ageNote: string;
  /** 5–6 concrete things a student learns. */
  learn: string[];
  /** 3–4 things the student needs to start. */
  whatYouNeed: string[];
  /** 3–4 benefits specific to this instrument. */
  benefits: string[];
  /** 4 instrument-specific FAQs. */
  faqs: FaqItem[];
  /** 2–4 related course ids. */
  relatedIds: string[];
};

export type BlogCategoryId = "aprender-musica" | "instrumentos" | "academias";

export type BlogAuthor =
  | { type: "organization" }
  | { type: "teacher"; slug: string };

export type BlogPost = {
  slug: string;
  /** Visible H1. */
  title: string;
  /** Optional <title> (without brand) when the H1 is too long. */
  seoTitle?: string;
  /** Meta description, 120–155 characters. */
  description: string;
  /** Card teaser, 1–2 sentences. */
  excerpt: string;
  category: BlogCategoryId;
  /** ISO date (YYYY-MM-DD). */
  publishedAt: string;
  /** ISO date (YYYY-MM-DD) of the last meaningful edit. */
  updatedAt?: string;
  author?: BlogAuthor;
  keywords: string[];
  /** Lead paragraphs shown before the table of contents. */
  intro: string[];
  /** "En resumen" bullets: direct answers that search and AI engines can quote. */
  keyTakeaways: string[];
  sections: RichSection[];
  faqs?: FaqItem[];
  relatedCourseIds?: string[];
  relatedPostSlugs?: string[];
  /** Which call to action closes the article. */
  cta: "clases" | "academias";
};
