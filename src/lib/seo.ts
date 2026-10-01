import type { Metadata } from "next";
import { CONTACT_EMAIL, INSTAGRAM_URL, OTHER_PROFILE_URLS, WHATSAPP_DISPLAY } from "@/lib/contact";
import indexNowConfig from "@/data/indexnow.json";
import type { BlogPost, CourseGuide, FaqItem } from "@/lib/content-types";
import type { Course } from "@/lib/courses";
import type { Teacher } from "@/lib/teachers";

export type { FaqItem } from "@/lib/content-types";

const DEFAULT_SITE_URL = "https://www.amediotonomusic.com";

export const SITE_NAME = "A medio tono";
export const SITE_BRAND = "A ½ tono";
export const SITE_LOCALE = "es_CO";
export const SITE_LANGUAGE = "es-CO";
export const SITE_SLOGAN = "Profes elegidos a mano, y oído.";
export const SITE_DESCRIPTION =
  "Clases de música virtuales y a domicilio en Bogotá para niños, jóvenes y adultos. Encuentra profes de piano, canto, guitarra, violín, flauta y más.";
export const SITE_KEYWORDS = [
  "clases de música en Bogotá",
  "profesores de música",
  "clases de piano",
  "clases de canto",
  "clases de guitarra",
  "clases de violín",
  "clases virtuales de música",
  "clases de música a domicilio",
  "escuela de artes",
  "selección de profesores de música",
];

/**
 * Date of the last meaningful content change for pages without their own
 * date (home, directories, service pages). Bump it when that copy changes so
 * sitemap `lastmod` stays trustworthy instead of changing on every build.
 */
export const SITE_CONTENT_UPDATED_AT = "2026-09-30";

type SocialImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
  type?: string;
};

export const SITE_LOGO_IMAGE = {
  url: "/logo-mark-transparent.png",
  width: 635,
  height: 548,
  alt: "A medio tono",
};

export const DEFAULT_OG_IMAGE = {
  url: "/og-logo-white.png",
  width: 1200,
  height: 630,
  alt: "A medio tono, escuela de artes y música",
  type: "image/png",
} satisfies SocialImage;
export const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
export const INDEXNOW_KEY_PATH = "/indexnow-key.txt";
export const INDEXNOW_KEY_PATTERN = /^[A-Za-z0-9-]{8,128}$/;

function normalizeSiteUrl(value: string | undefined) {
  try {
    const url = new URL(value || DEFAULT_SITE_URL);
    if (url.hostname === "amediotonomusic.com") {
      url.hostname = "www.amediotonomusic.com";
    }
    return url.toString().replace(/\/$/, "");
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const SITE_URL = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL,
);

export function absoluteUrl(path = "/") {
  return new URL(path, `${SITE_URL}/`).toString();
}

export function siteHost() {
  return new URL(SITE_URL).host;
}

/**
 * IndexNow keys are public by design (search engines read them from
 * /indexnow-key.txt), so a default key is committed in src/data/indexnow.json.
 * INDEXNOW_KEY overrides it.
 */
export function getIndexNowKey() {
  const key = process.env.INDEXNOW_KEY?.trim() || indexNowConfig.key;
  return INDEXNOW_KEY_PATTERN.test(key) ? key : "";
}

export function indexNowKeyLocation() {
  return absoluteUrl(INDEXNOW_KEY_PATH);
}

/** Search Console / Bing Webmaster verification tokens, read from env. */
export function siteVerification(): Metadata["verification"] {
  const google = process.env.GOOGLE_SITE_VERIFICATION?.trim();
  const bing = process.env.BING_SITE_VERIFICATION?.trim();
  const yandex = process.env.YANDEX_SITE_VERIFICATION?.trim();

  if (!google && !bing && !yandex) return undefined;

  return {
    ...(google ? { google } : {}),
    ...(yandex ? { yandex } : {}),
    ...(bing ? { other: { "msvalidate.01": bing } } : {}),
  };
}

/** "Clases de piano" → "Clases de piano | A ½ tono" */
export function brandTitle(title: string) {
  return `${title} | ${SITE_BRAND}`;
}

export function truncateMetaDescription(value: string, maxLength = 155) {
  const normalized = value.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) return normalized;

  const slice = normalized.slice(0, maxLength - 1);
  const lastSpace = slice.lastIndexOf(" ");
  return `${slice.slice(0, lastSpace > 0 ? lastSpace : maxLength - 1).trim()}…`;
}

type ArticleMetadata = {
  publishedTime: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  authors?: string[];
};

export function createPageMetadata({
  title,
  description,
  socialDescription,
  socialTitle,
  path,
  image = DEFAULT_OG_IMAGE,
  keywords,
  article,
  noindex = false,
  markdownPath,
}: {
  title: string;
  description: string;
  socialDescription?: string;
  socialTitle?: string;
  path: string;
  image?: SocialImage;
  keywords?: string[];
  article?: ArticleMetadata;
  noindex?: boolean;
  /** Markdown twin for AI assistants, e.g. "/blog/<slug>.md". */
  markdownPath?: string;
}): Metadata {
  const safeDescription = truncateMetaDescription(description);
  const safeSocialDescription = truncateMetaDescription(
    socialDescription ?? description,
  );
  const safeSocialTitle = socialTitle ?? title;

  return {
    title,
    description: safeDescription,
    ...(keywords?.length ? { keywords } : {}),
    alternates: {
      canonical: path,
      ...(markdownPath ? { types: { "text/markdown": markdownPath } } : {}),
    },
    ...(noindex
      ? {
          robots: {
            index: false,
            follow: true,
            googleBot: { index: false, follow: true },
          },
        }
      : {}),
    openGraph: article
      ? {
          title: safeSocialTitle,
          description: safeSocialDescription,
          url: path,
          siteName: SITE_BRAND,
          locale: SITE_LOCALE,
          type: "article",
          publishedTime: article.publishedTime,
          modifiedTime: article.modifiedTime ?? article.publishedTime,
          section: article.section,
          tags: article.tags,
          authors: article.authors,
          images: [image],
        }
      : {
          title: safeSocialTitle,
          description: safeSocialDescription,
          url: path,
          siteName: SITE_BRAND,
          locale: SITE_LOCALE,
          type: "website",
          images: [image],
        },
    twitter: {
      card: "summary_large_image",
      title: safeSocialTitle,
      description: safeSocialDescription,
      images: [image],
    },
  };
}

export type JsonLdNode = Record<string, unknown>;

export function jsonLd(nodes: JsonLdNode | JsonLdNode[]) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": Array.isArray(nodes) ? nodes : [nodes],
  }).replace(/</g, "\\u003c");
}

const ORGANIZATION_ID = () => absoluteUrl("/#organization");
const WEBSITE_ID = () => absoluteUrl("/#website");

function organizationRef() {
  return { "@id": ORGANIZATION_ID() };
}

function personId(slug: string) {
  return absoluteUrl(`/profes/${slug}#person`);
}

const AREA_SERVED = [
  {
    "@type": "City",
    name: "Bogotá",
    sameAs: "https://www.wikidata.org/wiki/Q2841",
  },
  {
    "@type": "Country",
    name: "Colombia",
    sameAs: "https://www.wikidata.org/wiki/Q739",
  },
];

export function organizationJsonLd({
  founders = [],
  services = [],
}: {
  founders?: Teacher[];
  services?: Array<{ name: string; path: string }>;
} = {}): JsonLdNode {
  return {
    "@type": "EducationalOrganization",
    "@id": ORGANIZATION_ID(),
    name: SITE_NAME,
    alternateName: [SITE_BRAND, "A medio tono music", "A 1/2 tono"],
    url: absoluteUrl("/"),
    logo: {
      "@type": "ImageObject",
      "@id": absoluteUrl("/#logo"),
      url: absoluteUrl(SITE_LOGO_IMAGE.url),
      contentUrl: absoluteUrl(SITE_LOGO_IMAGE.url),
      width: SITE_LOGO_IMAGE.width,
      height: SITE_LOGO_IMAGE.height,
      caption: SITE_NAME,
    },
    image: absoluteUrl(DEFAULT_OG_IMAGE.url),
    description: SITE_DESCRIPTION,
    slogan: SITE_SLOGAN,
    email: CONTACT_EMAIL,
    telephone: WHATSAPP_DISPLAY,
    sameAs: [INSTAGRAM_URL, ...OTHER_PROFILE_URLS],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: WHATSAPP_DISPLAY,
        email: CONTACT_EMAIL,
        availableLanguage: ["es", "en"],
        areaServed: "CO",
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        name: "Selección de profes para academias y colegios",
        telephone: WHATSAPP_DISPLAY,
        email: CONTACT_EMAIL,
        availableLanguage: ["es"],
        areaServed: "CO",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bogotá",
      addressRegion: "Bogotá D.C.",
      addressCountry: "CO",
    },
    areaServed: AREA_SERVED,
    knowsLanguage: ["es", "en"],
    knowsAbout: [
      "Educación musical",
      "Pedagogía musical",
      "Iniciación musical",
      "Clases de piano",
      "Clases de canto",
      "Clases de guitarra",
      "Clases de violín",
      "Teoría musical",
      "Música andina colombiana",
      "Selección de profesores de música",
      "Evaluación docente",
    ],
    ...(founders.length
      ? {
          founder: founders.map((founder) => ({
            "@type": "Person",
            "@id": personId(founder.slug),
            name: founder.name,
            url: absoluteUrl(`/profes/${founder.slug}`),
          })),
        }
      : {}),
    ...(services.length
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Clases de música y servicios de A medio tono",
            itemListElement: services.map((service) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: service.name,
                url: absoluteUrl(service.path),
              },
            })),
          },
        }
      : {}),
  };
}

export function websiteJsonLd(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID(),
    name: SITE_NAME,
    alternateName: SITE_BRAND,
    url: absoluteUrl("/"),
    inLanguage: SITE_LANGUAGE,
    publisher: organizationRef(),
  };
}

export function webPageJsonLd({
  path,
  name,
  description,
  type = "WebPage",
  image,
  datePublished,
  dateModified,
  about,
  breadcrumb = true,
}: {
  path: string;
  name: string;
  description: string;
  type?: "WebPage" | "CollectionPage" | "AboutPage" | "ContactPage" | "ProfilePage" | "FAQPage";
  image?: string;
  datePublished?: string;
  dateModified?: string;
  about?: JsonLdNode;
  /** Set to false on pages without a BreadcrumbList node (the home page). */
  breadcrumb?: boolean;
}): JsonLdNode {
  return {
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: SITE_LANGUAGE,
    isPartOf: { "@id": WEBSITE_ID() },
    publisher: organizationRef(),
    ...(about ? { about } : { about: organizationRef() }),
    ...(image ? { primaryImageOfPage: { "@type": "ImageObject", url: absoluteUrl(image) } } : {}),
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    ...(breadcrumb ? { breadcrumb: { "@id": `${absoluteUrl(path)}#breadcrumb` } } : {}),
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>): JsonLdNode {
  const last = items[items.length - 1];

  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(last?.path ?? "/")}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqPageJsonLd(items: FaqItem[], path?: string): JsonLdNode {
  return {
    "@type": "FAQPage",
    ...(path ? { "@id": `${absoluteUrl(path)}#faq` } : {}),
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function coursesItemListJsonLd(
  courses: Array<Course & { href: string }>,
  path = "/",
): JsonLdNode {
  return {
    "@type": "ItemList",
    "@id": `${absoluteUrl(path)}#courses`,
    name: "Clases de música disponibles en A medio tono",
    numberOfItems: courses.length,
    itemListElement: courses.map((course, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `Clases de ${course.label}`,
      url: absoluteUrl(course.href),
    })),
  };
}

function teacherPersonJsonLd(teacher: Teacher, detailed = false): JsonLdNode {
  return {
    "@type": "Person",
    "@id": personId(teacher.slug),
    name: teacher.name,
    url: absoluteUrl(`/profes/${teacher.slug}`),
    image: absoluteUrl(teacher.photo),
    description: detailed ? teacher.longBio || teacher.bio : teacher.bio,
    jobTitle: `Profe de ${teacher.role}`,
    worksFor: organizationRef(),
    knowsAbout: teacher.skills.map((skill) => skill.label),
    ...(detailed
      ? {
          knowsLanguage: teacher.classLanguages ?? ["Español"],
          homeLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressLocality: teacher.location || "Bogotá",
              addressCountry: teacher.country === "Colombia" || !teacher.country ? "CO" : teacher.country,
            },
          },
        }
      : {}),
  };
}

export function teachersItemListJsonLd(
  teachers: Teacher[],
  { path = "/profes", name = "Profesores de música de A medio tono" } = {},
): JsonLdNode {
  return {
    "@type": "ItemList",
    "@id": `${absoluteUrl(path)}#teachers`,
    name,
    numberOfItems: teachers.length,
    itemListElement: teachers.map((teacher, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: teacherPersonJsonLd(teacher),
    })),
  };
}

export function teacherJsonLd(teacher: Teacher, coursePaths: Map<string, string>): JsonLdNode[] {
  const path = `/profes/${teacher.slug}`;
  const formats = teacher.classFormats ?? [];

  return [
    breadcrumbJsonLd([
      { name: "Inicio", path: "/" },
      { name: "Profes", path: "/profes" },
      { name: teacher.name, path },
    ]),
    {
      ...webPageJsonLd({
        path,
        type: "ProfilePage",
        name: `${teacher.name}, profe de ${teacher.role}`,
        description: teacher.bio,
        image: teacher.photo,
        dateModified: SITE_CONTENT_UPDATED_AT,
        about: { "@id": personId(teacher.slug) },
      }),
      mainEntity: { "@id": personId(teacher.slug) },
    },
    teacherPersonJsonLd(teacher, true),
    {
      "@type": "Service",
      "@id": `${absoluteUrl(path)}#classes`,
      name: `Clases de ${teacher.role} con ${teacher.name}`,
      description: teacher.bio,
      provider: { "@id": personId(teacher.slug) },
      brand: organizationRef(),
      areaServed: AREA_SERVED,
      serviceType: teacher.skills.map((skill) => `Clases de ${skill.label}`),
      availableChannel: formats.map((format) => ({
        "@type": "ServiceChannel",
        name: format === "Virtual" ? "Clases virtuales" : "Clases a domicilio",
        ...(format === "A domicilio"
          ? { serviceLocation: { "@type": "City", name: teacher.location || "Bogotá" } }
          : {}),
      })),
      isRelatedTo: teacher.skills
        .map((skill) => coursePaths.get(skill.id))
        .filter((coursePath): coursePath is string => Boolean(coursePath))
        .map((coursePath) => ({ "@id": `${absoluteUrl(coursePath)}#service` })),
    },
  ];
}

export function courseServiceJsonLd({
  course,
  guide,
  path,
  teachers,
}: {
  course: Course;
  guide: CourseGuide;
  path: string;
  teachers: Teacher[];
}): JsonLdNode {
  return {
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name: `Clases de ${course.label}`,
    alternateName: course.aliases.map((alias) => `Clases de ${alias.toLowerCase()}`),
    serviceType: `Clases de ${course.label}`,
    category: "Educación musical",
    description: guide.metaDescription,
    url: absoluteUrl(path),
    provider: organizationRef(),
    areaServed: AREA_SERVED,
    audience: {
      "@type": "PeopleAudience",
      audienceType: "Niños, jóvenes y adultos",
    },
    availableChannel: [
      {
        "@type": "ServiceChannel",
        name: "Clases virtuales",
        serviceUrl: absoluteUrl(path),
      },
      {
        "@type": "ServiceChannel",
        name: "Clases a domicilio",
        serviceLocation: { "@type": "City", name: "Bogotá" },
      },
    ],
    availableLanguage: ["es", "en"],
    ...(teachers.length
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `Profes de ${course.label}`,
            itemListElement: teachers.map((teacher) => ({
              "@type": "Offer",
              itemOffered: { "@id": `${absoluteUrl(`/profes/${teacher.slug}`)}#classes` },
              offeredBy: { "@id": personId(teacher.slug) },
            })),
          },
        }
      : {}),
  };
}

/** Course detail markup, paired with the `coursesItemListJsonLd` summary list. */
export function courseJsonLd({
  course,
  guide,
  path,
}: {
  course: Course;
  guide: CourseGuide;
  path: string;
}): JsonLdNode {
  return {
    "@type": "Course",
    "@id": `${absoluteUrl(path)}#course`,
    name: `Clases de ${course.label}`,
    description: guide.metaDescription,
    url: absoluteUrl(path),
    inLanguage: SITE_LANGUAGE,
    provider: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID(),
      name: SITE_NAME,
      sameAs: absoluteUrl("/"),
    },
    about: { "@type": "Thing", name: course.label },
    teaches: guide.learn.map((item) => item.replace(/\*\*|\[|\]\([^)]*\)/g, "")),
    educationalLevel: "Principiante, intermedio y avanzado",
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
      audienceType: "Niños, jóvenes y adultos",
    },
    hasCourseInstance: [
      {
        "@type": "CourseInstance",
        courseMode: "Online",
        courseWorkload: "Clases semanales, particulares o en grupos pequeños",
      },
      {
        "@type": "CourseInstance",
        courseMode: "Onsite",
        location: { "@type": "City", name: "Bogotá" },
        courseWorkload: "Clases semanales, particulares o en grupos pequeños",
      },
    ],
  };
}

export function businessServiceJsonLd({
  path,
  name,
  description,
  serviceType,
  audience,
}: {
  path: string;
  name: string;
  description: string;
  serviceType: string;
  audience: string;
}): JsonLdNode {
  return {
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name,
    serviceType,
    category: "Selección y evaluación de docentes",
    description,
    url: absoluteUrl(path),
    provider: organizationRef(),
    areaServed: AREA_SERVED,
    audience: {
      "@type": "BusinessAudience",
      audienceType: audience,
    },
    availableLanguage: ["es"],
  };
}

export function blogPostingJsonLd({
  post,
  path,
  image,
  wordCount,
  author,
  section,
}: {
  post: BlogPost;
  path: string;
  image: string;
  wordCount: number;
  author: JsonLdNode;
  /** The category's display label, e.g. "Aprender música". */
  section: string;
}): JsonLdNode {
  return {
    "@type": "BlogPosting",
    "@id": `${absoluteUrl(path)}#article`,
    mainEntityOfPage: { "@id": `${absoluteUrl(path)}#webpage` },
    headline: post.title,
    description: post.description,
    image: [absoluteUrl(image)],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    inLanguage: SITE_LANGUAGE,
    author,
    publisher: organizationRef(),
    isPartOf: { "@id": absoluteUrl("/blog#blog") },
    keywords: post.keywords.join(", "),
    articleSection: section,
    wordCount,
    about: (post.relatedCourseIds ?? []).map((id) => ({ "@id": `${absoluteUrl(`/clases/${id}`)}#service` })),
  };
}

/** Same name and url as the main Organization node, which shares this @id. */
export function organizationAuthorJsonLd(): JsonLdNode {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID(),
    name: SITE_NAME,
    url: absoluteUrl("/"),
  };
}

export function teacherAuthorJsonLd(teacher: Teacher): JsonLdNode {
  return {
    "@type": "Person",
    "@id": personId(teacher.slug),
    name: teacher.name,
    url: absoluteUrl(`/profes/${teacher.slug}`),
    jobTitle: `Profe de ${teacher.role}`,
    worksFor: organizationRef(),
  };
}

export function blogJsonLd(posts: Array<{ post: BlogPost; path: string }>): JsonLdNode {
  return {
    "@type": "Blog",
    "@id": absoluteUrl("/blog#blog"),
    url: absoluteUrl("/blog"),
    name: `Blog de ${SITE_NAME}`,
    description:
      "Guías prácticas sobre aprender música, elegir instrumento y profe, y seleccionar docentes de música para academias y colegios.",
    inLanguage: SITE_LANGUAGE,
    publisher: organizationRef(),
    blogPost: posts.map(({ post, path }) => ({
      "@type": "BlogPosting",
      "@id": `${absoluteUrl(path)}#article`,
      headline: post.title,
      url: absoluteUrl(path),
      datePublished: post.publishedAt,
      dateModified: post.updatedAt ?? post.publishedAt,
    })),
  };
}

export function jobPostingJsonLd({
  path,
  title,
  descriptionHtml,
  datePosted,
  validThrough,
}: {
  path: string;
  title: string;
  descriptionHtml: string;
  datePosted: string;
  validThrough: string;
}): JsonLdNode {
  return {
    "@type": "JobPosting",
    "@id": `${absoluteUrl(path)}#job`,
    title,
    description: descriptionHtml,
    datePosted,
    validThrough,
    directApply: true,
    url: absoluteUrl(path),
    industry: "Educación musical",
    occupationalCategory: "2354 Otros profesores de música (ISCO-08)",
    hiringOrganization: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID(),
      name: SITE_NAME,
      sameAs: absoluteUrl("/"),
      logo: absoluteUrl(SITE_LOGO_IMAGE.url),
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bogotá",
        addressRegion: "Bogotá D.C.",
        addressCountry: "CO",
      },
    },
  };
}

export function webApplicationJsonLd({
  path,
  name,
  description,
  featureList,
}: {
  path: string;
  name: string;
  description: string;
  featureList: string[];
}): JsonLdNode {
  return {
    "@type": "WebApplication",
    "@id": `${absoluteUrl(path)}#app`,
    name,
    description,
    url: absoluteUrl(path),
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Cualquiera (navegador web)",
    browserRequirements: "Requiere un navegador moderno con Web Audio",
    inLanguage: SITE_LANGUAGE,
    isAccessibleForFree: true,
    featureList,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "COP",
    },
    publisher: organizationRef(),
  };
}
