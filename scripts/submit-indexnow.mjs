// Tells IndexNow search engines (Bing, Yandex, Seznam, Naver, Yep…) which
// URLs changed. Bing's index also feeds ChatGPT search and Copilot.
//
//   npm run indexnow                              submit every URL in the live sitemap
//   node scripts/submit-indexnow.mjs \
//     --previous FILE --save FILE                 submit only URLs that are new or whose
//                                                 <lastmod> changed since the sitemap in
//                                                 FILE (all of them if FILE is missing),
//                                                 then store the live sitemap in FILE
//
// The production deploy (scripts/deploy-production.sh) saves the live sitemap
// to FILE before deploying, so each deploy only sends what it changed.
// INDEXNOW_DRY_RUN=1 prints instead of sending (and saves nothing).
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
const INDEXNOW_KEY_PATH = "/indexnow-key.txt";
const INDEXNOW_KEY_PATTERN = /^[A-Za-z0-9-]{8,128}$/;
const DEFAULT_SITE_URL = "https://www.amediotonomusic.com";
const MAX_URLS_PER_REQUEST = 10000;
const FALLBACK_PATHS = [
  "/",
  "/clases",
  "/clases-de-musica-online",
  "/clases-de-musica-a-domicilio-bogota",
  "/preuniversitario-musica",
  "/profes",
  "/blog",
  "/herramientas",
  "/academias",
  "/nosotros",
  "/trabaja-con-nosotros",
];

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const dryRun = process.env.INDEXNOW_DRY_RUN === "1";

function fail(message) {
  console.error(message);
  process.exit(1);
}

function argValue(name) {
  const index = process.argv.indexOf(name);
  if (index === -1) return undefined;
  const value = process.argv[index + 1];
  if (!value || value.startsWith("--")) fail(`Missing file path after ${name}.`);
  return value;
}

function parseEnv(contents) {
  for (const line of contents.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const separator = trimmed.indexOf("=");
    if (separator === -1) continue;

    const name = trimmed.slice(0, separator).trim();
    let value = trimmed.slice(separator + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (value) process.env[name] ??= value;
  }
}

/** Same rules as SITE_URL in src/lib/seo.ts: https://www. host, no trailing slash. */
function normalizeSiteUrl(value) {
  try {
    const url = new URL(value || DEFAULT_SITE_URL);
    if (url.hostname === "amediotonomusic.com") url.hostname = "www.amediotonomusic.com";
    return url.toString().replace(/\/$/, "");
  } catch {
    return DEFAULT_SITE_URL;
  }
}

for (const filename of [".env.local", ".env"]) {
  const contents = await readFile(join(projectRoot, filename), "utf8").catch(() => "");
  parseEnv(contents);
}

const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL);
const keyLocation = new URL(INDEXNOW_KEY_PATH, `${siteUrl}/`).toString();
const sitemapUrl = new URL("/sitemap.xml", `${siteUrl}/`).toString();

async function fetchText(url, attempts = 3) {
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url, { headers: { "cache-control": "no-cache" } });
      if (response.ok) return await response.text();
    } catch {
      // Retry below.
    }
    if (attempt < attempts) await new Promise((resolve) => setTimeout(resolve, 5000 * attempt));
  }
  return "";
}

/** Map of URL → lastmod ("" when missing) from a sitemap XML string. */
function parseSitemap(xml) {
  const entries = new Map();
  for (const match of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const loc = match[1].match(/<loc>([^<]+)<\/loc>/)?.[1]?.trim();
    const lastmod = match[1].match(/<lastmod>([^<]+)<\/lastmod>/)?.[1]?.trim() ?? "";
    if (loc) entries.set(loc, lastmod);
  }
  return entries;
}

async function fallbackUrls() {
  const teachers = JSON.parse(await readFile(join(projectRoot, "src/data/teachers.json"), "utf8"));
  const teacherPaths = teachers.map((teacher) => `/profes/${teacher.slug}`);
  return [...FALLBACK_PATHS, ...teacherPaths].map((path) => new URL(path, `${siteUrl}/`).toString());
}

/** The key the live site serves is the one IndexNow will verify against. */
async function resolveKey() {
  const liveKey = (await fetchText(keyLocation, 2)).trim();
  if (INDEXNOW_KEY_PATTERN.test(liveKey)) return liveKey;

  const envKey = (process.env.INDEXNOW_KEY || "").trim();
  if (INDEXNOW_KEY_PATTERN.test(envKey)) return envKey;

  const config = JSON.parse(await readFile(join(projectRoot, "src/data/indexnow.json"), "utf8"));
  return String(config.key || "").trim();
}

async function saveSitemap(file, xml) {
  if (!file || dryRun) return;
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, xml);
  console.log(`Saved the submitted sitemap to ${file}.`);
}

const previousFile = argValue("--previous");
const saveFile = argValue("--save");

const liveXml = await fetchText(sitemapUrl);
const live = parseSitemap(liveXml);
let urlList;

if (previousFile) {
  if (!live.size) fail(`Could not read ${sitemapUrl}; nothing submitted.`);
  const previousXml = await readFile(previousFile, "utf8").catch(() => "");
  const previous = parseSitemap(previousXml);
  urlList = [...live].filter(([url, lastmod]) => previous.get(url) !== lastmod).map(([url]) => url);
  console.log(
    previous.size
      ? `${live.size} URL(s) in the sitemap, ${urlList.length} new or changed since the last submission.`
      : `${live.size} URL(s) in the sitemap and no previous submission on record: submitting all of them.`,
  );
} else if (live.size) {
  urlList = [...live.keys()];
} else {
  console.warn("Could not read the live sitemap; submitting the local fallback URL list.");
  urlList = await fallbackUrls();
}

if (!urlList.length) {
  console.log("Nothing to submit.");
  await saveSitemap(saveFile, liveXml);
  process.exit(0);
}

const key = await resolveKey();
if (!INDEXNOW_KEY_PATTERN.test(key)) {
  fail("No valid IndexNow key: check /indexnow-key.txt, INDEXNOW_KEY or src/data/indexnow.json.");
}

for (let start = 0; start < urlList.length; start += MAX_URLS_PER_REQUEST) {
  const batch = urlList.slice(start, start + MAX_URLS_PER_REQUEST);
  const payload = { host: new URL(siteUrl).host, key, keyLocation, urlList: batch };

  if (dryRun) {
    console.log(`IndexNow dry run: would submit ${batch.length} URL(s) to ${INDEXNOW_ENDPOINT}.`);
    console.log(JSON.stringify(payload, null, 2));
    continue;
  }

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });
  const body = await response.text();

  if (response.status !== 200 && response.status !== 202) {
    console.error(`IndexNow rejected ${batch.length} URL(s) with HTTP ${response.status}.`);
    if (body.trim()) console.error(body);
    process.exit(1);
  }

  console.log(`IndexNow accepted ${batch.length} URL(s) with HTTP ${response.status}.`);
}

if (live.size) await saveSitemap(saveFile, liveXml);
