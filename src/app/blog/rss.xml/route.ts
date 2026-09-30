import { BLOG_CATEGORIES, BLOG_POSTS, latestPostDate, postAuthor, postPath } from "@/lib/blog";
import { absoluteUrl, SITE_LANGUAGE, SITE_NAME } from "@/lib/seo";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function rfc822(isoDate: string) {
  return new Date(`${isoDate}T12:00:00Z`).toUTCString();
}

export function GET() {
  const items = BLOG_POSTS.map((post) => {
    const url = absoluteUrl(postPath(post.slug));

    return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.description)}</description>
      <category>${escapeXml(BLOG_CATEGORIES[post.category].label)}</category>
      <dc:creator>${escapeXml(postAuthor(post).name)}</dc:creator>
      <pubDate>${rfc822(post.publishedAt)}</pubDate>
    </item>`;
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(`Blog de ${SITE_NAME}`)}</title>
    <link>${absoluteUrl("/blog")}</link>
    <atom:link href="${absoluteUrl("/blog/rss.xml")}" rel="self" type="application/rss+xml" />
    <description>Guías prácticas sobre aprender música, elegir instrumento y profe, y seleccionar profes para academias.</description>
    <language>${SITE_LANGUAGE.toLowerCase()}</language>
    <lastBuildDate>${rfc822(latestPostDate())}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "content-type": "application/rss+xml; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
