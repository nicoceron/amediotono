// Validates blog articles: required fields, lengths, section ids, internal
// links and banned claims. Usage:
//   node scripts/validate-content.mjs                 # all articles
//   node scripts/validate-content.mjs slug-a slug-b   # only these
//   node scripts/validate-content.mjs --planned plan.json slug-a  # also accept planned slugs as link targets
import { mkdtemp, readdir, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { build } from "esbuild";

const require = createRequire(import.meta.url);
const ts = require("typescript");
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const blogDir = join(root, "src", "content", "blog");

const args = process.argv.slice(2);
let plannedSlugs = [];
const plannedIndex = args.indexOf("--planned");
if (plannedIndex !== -1) {
  const plan = JSON.parse(await readFile(args[plannedIndex + 1], "utf8"));
  plannedSlugs = plan.map((item) => item.slug);
  args.splice(plannedIndex, 2);
}
const only = new Set(args.map((arg) => arg.replace(/\.ts$/, "").split("/").pop()));

const CATEGORIES = ["aprender-musica", "ninos", "adultos", "instrumentos", "cuidado-y-compra", "tecnica", "estudiar-musica", "para-profes", "academias"];
const courses = JSON.parse(await readFile(join(root, "src/data/courses.json"), "utf8"));
const teachers = JSON.parse(await readFile(join(root, "src/data/teachers.json"), "utf8"));
const b2bSource = await readFile(join(root, "src/lib/b2b.ts"), "utf8");
const b2bSlugs = [...b2bSource.matchAll(/slug: "([a-z0-9-]+)"/g)].map((match) => match[1]);
const courseIds = new Set(courses.map((course) => course.id));
// Tool presets are read from their content files, like the b2b slugs above.
const slugsIn = async (...files) =>
  (await Promise.all(files.map((file) => readFile(join(root, file), "utf8"))))
    .flatMap((source) => [...source.matchAll(/^    slug: "([a-z0-9-]+)"/gm)].map((match) => match[1]));
const TUNER_PRESETS = await slugsIn("src/content/tuner-presets.ts", "src/content/tuner-presets-guitar.ts");
const RHYTHM_PRESETS = await slugsIn("src/content/metronome-rhythms.ts");

async function loadPost(file) {
  const source = await readFile(join(blogDir, file), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  });
  const loaded = { exports: {} };
  new Function("module", "exports", "require", outputText)(loaded, loaded.exports, require);
  return loaded.exports.post;
}

const files = (await readdir(blogDir)).filter((file) => file.endsWith(".ts") && file !== "index.ts");
const posts = [];
const errors = [];
for (const file of files) {
  try {
    posts.push({ file, post: await loadPost(file) });
  } catch (error) {
    errors.push(`${file}: cannot load (${error.message})`);
  }
}

const postSlugs = new Set([...posts.map(({ post }) => post?.slug), ...plannedSlugs]);

// Chord and scale pages are generated from src/lib/music-theory.ts.
const musicDir = await mkdtemp(join(tmpdir(), "music-theory-"));
await build({
  entryPoints: [join(root, "src/lib/music-theory.ts")],
  bundle: true,
  format: "esm",
  platform: "node",
  outfile: join(musicDir, "music-theory.mjs"),
  logLevel: "error",
});
const { CHORDS, SCALES } = await import(join(musicDir, "music-theory.mjs"));
await rm(musicDir, { recursive: true });
const knownRoutes = new Set([
  "/", "/clases", "/profes", "/blog", "/nosotros", "/trabaja-con-nosotros", "/academias",
  "/herramientas", "/herramientas/metronomo", "/herramientas/afinador",
  "/herramientas/tipo-de-voz", "/herramientas/entrenamiento-auditivo", "/clases-de-musica-a-domicilio-bogota",
  "/preuniversitario-musica", "/clases-de-musica-online", "/glosario-musical",
  ...TUNER_PRESETS.map((preset) => `/herramientas/afinador/${preset}`),
  ...RHYTHM_PRESETS.map((preset) => `/herramientas/metronomo/${preset}`),
  ...b2bSlugs.map((slug) => `/academias/${slug}`),
  ...[...courseIds].map((id) => `/clases/${id}`),
  ...teachers.map((teacher) => `/profes/${teacher.slug}`),
  ...[...postSlugs].map((slug) => `/blog/${slug}`),
  ...CATEGORIES.map((category) => `/blog/categoria/${category}`),
  "/acordes", "/escalas", "/herramientas/circulo-de-quintas",
  ...CHORDS.map((chord) => `/acordes/${chord.slug}`),
  ...SCALES.map((scale) => `/escalas/${scale.slug}`),
]);

const BANNED = [/garantizad[oa]s?\b(?! que no)/i, /\b100 ?%/, /el mejor de colombia/i, /outsourcing docente/i, /banco de profesores/i, /lorem ipsum/i];
const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

function texts(post) {
  const out = [post.title, post.description, post.excerpt, ...post.intro, ...post.keyTakeaways];
  for (const section of post.sections ?? []) {
    out.push(section.heading);
    for (const block of section.blocks ?? []) {
      if ("text" in block) out.push(block.text);
      if ("title" in block && block.title) out.push(block.title);
      if ("items" in block) out.push(...block.items);
      if ("head" in block) out.push(...block.head, ...block.rows.flat());
    }
  }
  for (const faq of post.faqs ?? []) out.push(faq.question, faq.answer);
  return out.filter((value) => typeof value === "string");
}

const seenTitles = new Map();
const seenDescriptions = new Map();
let checked = 0;
for (const { file, post } of posts) {
  const slug = file.replace(/\.ts$/, "");
  const report = (message) => errors.push(`${slug}: ${message}`);
  if (!post) { report("missing `export const post`"); continue; }
  seenTitles.set(post.title, [...(seenTitles.get(post.title) ?? []), slug]);
  seenDescriptions.set(post.description, [...(seenDescriptions.get(post.description) ?? []), slug]);
  if (only.size && !only.has(slug)) continue;
  checked += 1;

  if (post.slug !== slug) report(`slug "${post.slug}" must match file name`);
  if (!CATEGORIES.includes(post.category)) report(`unknown category "${post.category}"`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(post.publishedAt ?? "")) report("publishedAt must be YYYY-MM-DD");
  const seoTitle = post.seoTitle ?? post.title;
  if (seoTitle.length + 11 > 68) report(`title for <title> is ${seoTitle.length} chars; add/shorten seoTitle to ≤ 55`);
  if (post.seoTitle && post.seoTitle.length > 55) report(`seoTitle ${post.seoTitle.length} > 55`);
  const d = post.description?.length ?? 0;
  if (d < 120 || d > 155) report(`description ${d} chars (need 120–155)`);
  if (!post.excerpt) report("missing excerpt");
  if (!Array.isArray(post.keywords) || post.keywords.length < 3) report("need ≥ 3 keywords");
  if (!post.intro?.length) report("missing intro");
  if ((post.keyTakeaways?.length ?? 0) < 3) report("need ≥ 3 keyTakeaways");
  const sections = post.sections ?? [];
  if (sections.length < 4) report(`only ${sections.length} sections (need ≥ 4)`);
  const ids = new Set();
  for (const section of sections) {
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(section.id)) report(`bad section id "${section.id}"`);
    if (ids.has(section.id)) report(`duplicate section id "${section.id}"`);
    if (["en-resumen", "preguntas-frecuentes"].includes(section.id)) report(`reserved section id "${section.id}"`);
    ids.add(section.id);
    if (!section.blocks?.length) report(`section "${section.id}" has no blocks`);
    for (const block of section.blocks ?? []) {
      if (block.type !== "chords") continue;
      for (const chord of block.chords) if (!knownRoutes.has(`/acordes/${chord}`)) report(`unknown chord "${chord}"`);
    }
  }
  if (post.faqs && (post.faqs.length < 3 || post.faqs.length > 6)) report(`faqs ${post.faqs.length} (need 3–6)`);
  for (const id of post.relatedCourseIds ?? []) if (!courseIds.has(id)) report(`unknown relatedCourseId "${id}"`);
  for (const related of post.relatedPostSlugs ?? []) if (!postSlugs.has(related)) report(`unknown relatedPostSlug "${related}"`);
  if (!["clases", "academias"].includes(post.cta)) report(`bad cta "${post.cta}"`);

  const allText = texts(post);
  for (const text of allText) {
    for (const match of text.matchAll(LINK)) {
      const href = match[2];
      if (href.startsWith("http")) continue;
      const path = href.split("#")[0].split("?")[0];
      if (!knownRoutes.has(path)) report(`broken link ${href}`);
    }
    for (const pattern of BANNED) if (pattern.test(text)) report(`banned phrase ${pattern} in: "${text.slice(0, 80)}…"`);
  }
  const words = allText.join(" ").replace(LINK, "$1").split(/\s+/).filter(Boolean).length;
  if (words < 700) report(`only ${words} words (need ≥ 700)`);
}

for (const [title, slugs] of seenTitles) if (slugs.length > 1) errors.push(`duplicate title "${title}": ${slugs.join(", ")}`);
for (const [, slugs] of seenDescriptions) if (slugs.length > 1) errors.push(`duplicate description: ${slugs.join(", ")}`);

if (errors.length) {
  console.error(errors.map((error) => `✗ ${error}`).join("\n"));
  console.error(`\n${errors.length} problem(s) in ${checked} article(s).`);
  process.exit(1);
}
console.log(`✓ ${checked} article(s) valid.`);
