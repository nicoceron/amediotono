import assert from "node:assert/strict";

// Use the sitemap's production URLs for canonicals, even when testing a preview.
const base = new URL(process.argv[2] || "https://www.amediotonomusic.com");
const failures = [];
const titles = new Map();
const internalPaths = new Set();

async function read(path) {
  const response = await fetch(new URL(path, base), { signal: AbortSignal.timeout(30000) });
  assert.equal(response.status, 200, `${path}: HTTP ${response.status}`);
  assert.equal(response.url, new URL(path, base).href, `${path}: redirects`);
  return { response, html: await response.text() };
}

function decode(value) {
  return value.replace(/&amp;/g, "&").replace(/&quot;/g, '"');
}

function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((m) => [m[1], decode(m[2])]));
}

const { html: sitemap } = await read("/sitemap.xml");
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => new URL(decode(m[1])));
assert(urls.length > 0, "Empty sitemap");
assert.equal(new Set(urls.map((url) => url.href)).size, urls.length, "Duplicate sitemap URLs");
const canonicalOrigin = urls[0].origin;
const sitemapPaths = new Set(urls.map((url) => url.pathname));
let next = 0;

await Promise.all(Array.from({ length: 6 }, async () => {
  while (next < urls.length) {
    const url = urls[next++];
    try {
      assert.equal(url.origin, canonicalOrigin, "Mixed sitemap origins");
      const { response, html } = await read(url.pathname);
      assert(response.headers.get("content-type")?.includes("text/html"), "Not HTML");
      const links = [...html.matchAll(/<link\b[^>]*>/g)].map((m) => attributes(m[0]));
      const canonicals = links.filter((link) => link.rel === "canonical");
      assert.equal(canonicals.length, 1, "Expected one canonical");
      assert.equal(new URL(canonicals[0].href).href, url.href, "Canonical differs from sitemap");
      assert.equal([...html.matchAll(/<h1\b/g)].length, 1, "Expected one h1");
      const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
      assert(title?.trim(), "Missing title");
      const language = attributes(html.match(/<html\b[^>]*>/)?.[0] ?? "").lang;
      const expectedLanguage = url.pathname.match(/^\/(en|pt|fr)(?:\/|$)/)?.[1] ?? "es";
      assert.equal(language, expectedLanguage, "HTML language differs from URL");
      // Musical names can legitimately match across languages. Each language
      // still needs distinct titles for its own pages (e.g. violin vs cello).
      const titleKey = `${language}\0${title}`;
      assert(!titles.has(titleKey), `Duplicate title: ${titles.get(titleKey)}`);
      titles.set(titleKey, url.pathname);
      const meta = [...html.matchAll(/<meta\b[^>]*>/g)].map((m) => attributes(m[0]));
      assert(meta.some((tag) => tag.name === "description" && tag.content?.trim()), "Missing description");
      assert(!meta.some((tag) => /^(robots|googlebot)$/.test(tag.name) && /noindex/.test(tag.content)), "Noindex meta");
      assert(!response.headers.get("x-robots-tag")?.includes("noindex"), "Noindex header");
      const structuredData = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)];
      assert(structuredData.length > 0, "Missing structured data");
      for (const match of structuredData) JSON.parse(match[1]);
      for (const match of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
        const target = new URL(decode(match[1]), url);
        if (target.origin === canonicalOrigin && !/\.[a-z0-9]+$/i.test(target.pathname)) {
          internalPaths.add(target.pathname);
        }
      }
    } catch (error) {
      failures.push({ url: url.href, error: error.message });
    }
  }
}));

for (const path of internalPaths) {
  if (!sitemapPaths.has(path)) failures.push({ path, error: "Internal page link is outside the sitemap" });
}
const { html: robots } = await read("/robots.txt");
assert(robots.includes(`Sitemap: ${canonicalOrigin}/sitemap.xml`), "Robots sitemap differs from canonical origin");
assert(!/^Disallow:\s*\/$/m.test(robots), "Robots blocks the site");

console.log(JSON.stringify({ pages: urls.length, internalPaths: internalPaths.size, failures }, null, 2));
if (failures.length) process.exitCode = 1;
