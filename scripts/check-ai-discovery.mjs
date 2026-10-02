// Run against a production build locally, or pass the live origin after deploy.
// Follows the AI directory graph and validates actual responses, not fixtures.
// `Accept: text/markdown` negotiation lives in worker.ts, so it's only checked
// against the live site or a Worker preview (pass --worker).
const args = process.argv.slice(2);
const origin = new URL(args.find((arg) => !arg.startsWith("--")) || "http://localhost:4026");
const throughWorker = args.includes("--worker") || origin.hostname === "www.amediotonomusic.com";
const queue = new Set(["/llms.txt"]);
const checked = new Set();
const failures = [];
let markdownPages = 0;
let indices = 0;

async function check(path) {
  try {
    const response = await fetch(new URL(path, origin), { signal: AbortSignal.timeout(30000) });
    const body = await response.text();
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const markdown = path.endsWith(".md") || path.endsWith("llms.txt") || path === "/llms-full.txt";
    if (markdown) {
      if (!response.headers.get("content-type")?.startsWith("text/markdown")) throw new Error("Missing Markdown content type");
      if (!body.startsWith("# ")) throw new Error("Missing Markdown title");
      if (!response.headers.get("link")?.includes('rel="describedby"')) throw new Error("Missing AI index discovery header");
      if (path.endsWith(".md")) {
        markdownPages++;
        if (!response.headers.get("link")?.includes('rel="canonical"')) throw new Error("Missing HTML canonical header");
      }
    }
    if (path.endsWith("llms.txt")) {
      indices++;
      if (path === "/llms.txt" && Buffer.byteLength(body) > 12000) throw new Error("Root index exceeds 12 KB");
      for (const match of body.matchAll(/\]\((https?:\/\/[^)\s]+)\)/g)) {
        const url = new URL(match[1]);
        if (url.hostname !== "www.amediotonomusic.com") continue;
        if (url.pathname.startsWith("/md/") || url.pathname.startsWith("/api/")) throw new Error("Index links a private path");
        queue.add(url.pathname + url.search);
      }
    }
  } catch (error) {
    failures.push(`${path}: ${error.message}`);
  }
}

while (true) {
  const batch = [...queue].filter((path) => !checked.has(path)).slice(0, 6);
  if (!batch.length) break;
  batch.forEach((path) => checked.add(path));
  await Promise.all(batch.map(check));
}

const pagesWithMarkdown = [
  "/blog/como-cuidar-un-contrabajo", "/clases/piano", "/acordes/do-mayor", "/escalas/do-mayor",
  "/herramientas/afinador/tiple", "/herramientas/metronomo/bambuco", "/glosario-musical",
];
for (const path of ["/", ...pagesWithMarkdown]) {
  const response = await fetch(new URL(path, origin));
  const body = await response.text();
  if (response.status !== 200 || !/<link[^>]+rel="describedby"[^>]+llms\.txt/.test(body)) {
    failures.push(`${path}: HTML does not advertise its AI index`);
  }
  const markdownHref = `https://www.amediotonomusic.com${path}.md`;
  if (path !== "/" && !body.includes(`<link rel="alternate" type="text/markdown" href="${markdownHref}"/>`)) {
    failures.push(`${path}: HTML does not link its Markdown version`);
  }
}

if (throughWorker) {
  const agentAccept = "text/markdown, text/html, */*";
  const browserAccept = "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8";
  const negotiation = [
    ["/clases/piano", agentAccept, "text/markdown"],
    ["/herramientas/afinador/tiple", agentAccept, "text/markdown"],
    ["/", agentAccept, "text/markdown"],
    ["/clases", agentAccept, "text/markdown"],
    ["/nosotros", agentAccept, "text/html"],
    ["/clases/piano", browserAccept, "text/html"],
  ];
  for (const [path, accept, expected] of negotiation) {
    const response = await fetch(new URL(path, origin), { headers: { accept } });
    const body = await response.text();
    const type = response.headers.get("content-type") ?? "";
    if (response.status !== 200 || !type.startsWith(expected)) {
      failures.push(`${path} (Accept: ${accept}): expected ${expected}, received ${response.status} ${type}`);
    } else if (expected === "text/markdown" && !body.startsWith("# ")) {
      failures.push(`${path} (Accept: ${accept}): negotiated Markdown has no title`);
    }
    if (!/\baccept\b/i.test(response.headers.get("vary") ?? "")) failures.push(`${path}: response does not vary on Accept`);
  }
}

for (const path of ["/unknown-section/llms.txt", "/blog/categoria/unknown-category/llms.txt", "/acordes/unknown-chord.md", "/escalas/unknown-scale.md", "/herramientas/afinador/unknown.md"]) {
  const response = await fetch(new URL(path, origin));
  await response.body?.cancel();
  if (response.status !== 404) failures.push(`${path}: expected 404, received ${response.status}`);
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(`✓ ${checked.size} discovery links, ${indices} indices and ${markdownPages} Markdown pages; HTML discovery${throughWorker ? ", Markdown negotiation" : ""} and unknown-resource 404s passed at ${origin.origin}.`);
