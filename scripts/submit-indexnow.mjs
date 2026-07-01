import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
const INDEXNOW_KEY_PATH = "/indexnow-key.txt";
const INDEXNOW_KEY_PATTERN = /^[A-Za-z0-9-]{8,128}$/;
const STATIC_PATHS = ["/", "/profes", "/nosotros", "/trabaja-con-nosotros"];

function normalizeSiteUrl(value) {
  try {
    return new URL(value).toString().replace(/\/$/, "");
  } catch {
    return "";
  }
}

function fail(message) {
  console.error(message);
  process.exit(1);
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

    process.env[name] ??= value;
  }
}

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
for (const filename of [".env.local", ".env"]) {
  const contents = await readFile(join(projectRoot, filename), "utf8").catch(() => "");
  parseEnv(contents);
}

const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL);
const key = (process.env.INDEXNOW_KEY || "").trim();

if (!siteUrl) {
  fail("Set NEXT_PUBLIC_SITE_URL or SITE_URL before running npm run indexnow.");
}

if (!INDEXNOW_KEY_PATTERN.test(key)) {
  fail("Set INDEXNOW_KEY to 8-128 letters, numbers, or dashes before running npm run indexnow.");
}

const teachersPath = join(projectRoot, "src/data/teachers.json");
const teachers = JSON.parse(await readFile(teachersPath, "utf8"));
const teacherPaths = teachers.map((teacher) => `/profes/${teacher.slug}`);
const urlList = [...STATIC_PATHS, ...teacherPaths].map((path) =>
  new URL(path, `${siteUrl}/`).toString(),
);
const payload = {
  host: new URL(siteUrl).host,
  key,
  keyLocation: new URL(INDEXNOW_KEY_PATH, `${siteUrl}/`).toString(),
  urlList,
};

if (process.env.INDEXNOW_DRY_RUN === "1") {
  console.log(`IndexNow dry run: would submit ${urlList.length} URL(s) to ${INDEXNOW_ENDPOINT}.`);
  console.log(JSON.stringify(payload, null, 2));
  process.exit(0);
}

const response = await fetch(INDEXNOW_ENDPOINT, {
  method: "POST",
  headers: {
    "content-type": "application/json; charset=utf-8",
  },
  body: JSON.stringify(payload),
});
const body = await response.text();

if (response.status !== 200 && response.status !== 202) {
  console.error(`IndexNow rejected ${urlList.length} URL(s) with HTTP ${response.status}.`);
  if (body.trim()) console.error(body);
  process.exit(1);
}

console.log(`IndexNow accepted ${urlList.length} URL(s) with HTTP ${response.status}.`);
if (body.trim()) console.log(body);
