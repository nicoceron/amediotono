import type { MetadataRoute } from "next";
import { B2B_HUB_PATH, B2B_SERVICES } from "@/lib/b2b";
import {
  BLOG_CATEGORY_ORDER,
  BLOG_POSTS,
  categoryPath,
  latestPostDate,
  postPath,
  postsByCategory,
} from "@/lib/blog";
import { COURSE_PAGES } from "@/lib/course-pages";
import { METRONOME_PATH, TOOLS_PATH, TUNER_PATH, TUNER_PRESETS, tunerPresetPath } from "@/lib/music-tools";
import { TEACHERS } from "@/lib/teachers";
import { absoluteUrl, SITE_CONTENT_UPDATED_AT } from "@/lib/seo";

type SitemapEntry = MetadataRoute.Sitemap[number];

/**
 * `lastModified` uses real content dates (never `new Date()`): Google only
 * trusts lastmod when it is consistently accurate. Bump
 * SITE_CONTENT_UPDATED_AT in src/lib/seo.ts when evergreen pages change.
 */
function entry(
  path: string,
  lastModified: string,
  changeFrequency: SitemapEntry["changeFrequency"],
  priority: number,
  images?: string[],
): SitemapEntry {
  return {
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
    ...(images?.length ? { images: images.map((image) => absoluteUrl(image)) } : {}),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const blogUpdatedAt = latestPostDate();

  return [
    entry("/", SITE_CONTENT_UPDATED_AT, "weekly", 1, ["/og-logo-white.png"]),
    entry("/clases", SITE_CONTENT_UPDATED_AT, "weekly", 0.95),
    ...COURSE_PAGES.map((page) =>
      entry(page.path, SITE_CONTENT_UPDATED_AT, "monthly", 0.9, [`${page.path}/share-image.png`]),
    ),
    entry("/profes", SITE_CONTENT_UPDATED_AT, "weekly", 0.9),
    ...TEACHERS.map((teacher) =>
      entry(`/profes/${teacher.slug}`, SITE_CONTENT_UPDATED_AT, "monthly", 0.75, [teacher.photo]),
    ),
    entry(B2B_HUB_PATH, SITE_CONTENT_UPDATED_AT, "monthly", 0.85),
    ...B2B_SERVICES.map((service) => entry(service.path, SITE_CONTENT_UPDATED_AT, "monthly", 0.8)),
    entry("/clases-de-musica-online", SITE_CONTENT_UPDATED_AT, "monthly", 0.9),
    entry("/preuniversitario-musica", SITE_CONTENT_UPDATED_AT, "monthly", 0.85),
    entry(TOOLS_PATH, SITE_CONTENT_UPDATED_AT, "monthly", 0.7),
    entry(METRONOME_PATH, SITE_CONTENT_UPDATED_AT, "monthly", 0.8),
    entry(TUNER_PATH, SITE_CONTENT_UPDATED_AT, "monthly", 0.8),
    ...TUNER_PRESETS.map((preset) =>
      entry(tunerPresetPath(preset.slug), SITE_CONTENT_UPDATED_AT, "monthly", 0.75),
    ),
    entry("/glosario-musical", SITE_CONTENT_UPDATED_AT, "monthly", 0.75),
    entry("/blog", blogUpdatedAt, "weekly", 0.8),
    ...BLOG_CATEGORY_ORDER.filter((category) => postsByCategory(category).length > 0).map((category) =>
      entry(categoryPath(category), blogUpdatedAt, "weekly", 0.7),
    ),
    ...BLOG_POSTS.map((post) =>
      entry(postPath(post.slug), post.updatedAt ?? post.publishedAt, "monthly", 0.7, [
        `${postPath(post.slug)}/share-image.png`,
      ]),
    ),
    entry("/nosotros", SITE_CONTENT_UPDATED_AT, "monthly", 0.6),
    entry("/trabaja-con-nosotros", SITE_CONTENT_UPDATED_AT, "monthly", 0.5),
  ];
}
