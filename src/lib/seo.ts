import type { Metadata } from "next";
import { CONTACT_EMAIL, INSTAGRAM_URL, WHATSAPP_DISPLAY } from "@/lib/contact";
import type { Course } from "@/lib/courses";
import { courseHref } from "@/lib/courses";
import type { Teacher } from "@/lib/teachers";

const DEFAULT_SITE_URL = "https://www.amediotonomusic.com";

export const SITE_NAME = "A medio tono";
export const SITE_BRAND = "A ½ tono";
export const SITE_LOCALE = "es_CO";
export const SITE_LANGUAGE = "es-CO";
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
];

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

export function getIndexNowKey() {
  const key = process.env.INDEXNOW_KEY?.trim() ?? "";
  return INDEXNOW_KEY_PATTERN.test(key) ? key : "";
}

export function indexNowKeyLocation() {
  return absoluteUrl(INDEXNOW_KEY_PATH);
}

export function truncateMetaDescription(value: string, maxLength = 155) {
  const normalized = value.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) return normalized;

  const slice = normalized.slice(0, maxLength - 1);
  const lastSpace = slice.lastIndexOf(" ");
  return `${slice.slice(0, lastSpace > 0 ? lastSpace : maxLength - 1).trim()}…`;
}

export function createPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
}: {
  title: string;
  description: string;
  path: string;
  image?: SocialImage;
}): Metadata {
  const safeDescription = truncateMetaDescription(description);

  return {
    title,
    description: safeDescription,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description: safeDescription,
      url: path,
      siteName: SITE_BRAND,
      locale: SITE_LOCALE,
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: safeDescription,
      images: [image],
    },
  };
}

export type JsonLdNode = Record<string, unknown>;
export type FaqItem = {
  question: string;
  answer: string;
};

export function jsonLd(nodes: JsonLdNode | JsonLdNode[]) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": Array.isArray(nodes) ? nodes : [nodes],
  }).replace(/</g, "\\u003c");
}

export function organizationJsonLd(): JsonLdNode {
  return {
    "@type": "EducationalOrganization",
    "@id": absoluteUrl("/#organization"),
    name: SITE_NAME,
    alternateName: SITE_BRAND,
    url: absoluteUrl("/"),
    logo: absoluteUrl(SITE_LOGO_IMAGE.url),
    image: absoluteUrl(DEFAULT_OG_IMAGE.url),
    description: SITE_DESCRIPTION,
    email: CONTACT_EMAIL,
    telephone: WHATSAPP_DISPLAY,
    sameAs: [INSTAGRAM_URL],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bogotá",
      addressCountry: "CO",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Bogotá",
      },
      {
        "@type": "Country",
        name: "Colombia",
      },
    ],
    knowsAbout: [
      "Educación musical",
      "Clases de piano",
      "Clases de canto",
      "Clases de guitarra",
      "Clases de violín",
      "Iniciación musical",
      "Teoría musical",
    ],
  };
}

export function websiteJsonLd(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: SITE_NAME,
    alternateName: SITE_BRAND,
    url: absoluteUrl("/"),
    inLanguage: SITE_LANGUAGE,
    publisher: {
      "@id": absoluteUrl("/#organization"),
    },
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqPageJsonLd(items: FaqItem[]): JsonLdNode {
  return {
    "@type": "FAQPage",
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

export function coursesItemListJsonLd(courses: Course[]): JsonLdNode {
  return {
    "@type": "ItemList",
    "@id": absoluteUrl("/#courses"),
    name: "Cursos de música disponibles en A medio tono",
    itemListElement: courses.map((course, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Course",
        name: `Clases de ${course.label}`,
        url: absoluteUrl(courseHref(course)),
        provider: {
          "@id": absoluteUrl("/#organization"),
        },
      },
    })),
  };
}

export function teachersItemListJsonLd(teachers: Teacher[]): JsonLdNode {
  return {
    "@type": "ItemList",
    "@id": absoluteUrl("/profes#teachers"),
    name: "Profesores de música de A medio tono",
    itemListElement: teachers.map((teacher, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Person",
        "@id": absoluteUrl(`/profes/${teacher.slug}#person`),
        name: teacher.name,
        url: absoluteUrl(`/profes/${teacher.slug}`),
        image: absoluteUrl(teacher.photo),
        description: teacher.bio,
        jobTitle: `Profe de ${teacher.role}`,
        worksFor: {
          "@id": absoluteUrl("/#organization"),
        },
        knowsAbout: teacher.skills.map((skill) => skill.label),
      },
    })),
  };
}

export function teacherJsonLd(teacher: Teacher): JsonLdNode[] {
  const formats = teacher.classFormats ?? [];
  const languages = teacher.classLanguages ?? [];
  const areaServed = teacher.location
    ? {
        "@type": "City",
        name: teacher.location,
      }
    : {
        "@type": "Country",
        name: teacher.country ?? "Colombia",
      };

  return [
    breadcrumbJsonLd([
      { name: "Inicio", path: "/" },
      { name: "Profes", path: "/profes" },
      { name: teacher.name, path: `/profes/${teacher.slug}` },
    ]),
    {
      "@type": "Person",
      "@id": absoluteUrl(`/profes/${teacher.slug}#person`),
      name: teacher.name,
      url: absoluteUrl(`/profes/${teacher.slug}`),
      image: absoluteUrl(teacher.photo),
      description: teacher.longBio || teacher.bio,
      jobTitle: `Profe de ${teacher.role}`,
      worksFor: {
        "@id": absoluteUrl("/#organization"),
      },
      knowsAbout: teacher.skills.map((skill) => skill.label),
      knowsLanguage: languages,
      address: {
        "@type": "PostalAddress",
        addressLocality: teacher.location || "Bogotá",
        addressCountry: teacher.country ?? "Colombia",
      },
    },
    {
      "@type": "Service",
      "@id": absoluteUrl(`/profes/${teacher.slug}#classes`),
      name: `Clases de ${teacher.role} con ${teacher.name}`,
      description: teacher.bio,
      provider: {
        "@id": absoluteUrl(`/profes/${teacher.slug}#person`),
      },
      areaServed,
      serviceType: teacher.skills.map((skill) => `Clases de ${skill.label}`),
      availableChannel: formats.map((format) => ({
        "@type": "ServiceChannel",
        name: format,
      })),
    },
  ];
}
