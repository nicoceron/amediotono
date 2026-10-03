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
        // The MCP endpoint only answers POST; it's checked separately below.
        if (url.pathname === "/mcp") continue;
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

const robots = await (await fetch(new URL("/robots.txt", origin))).text();
if (!robots.includes("Content-Signal: search=yes, ai-input=yes, ai-train=yes")) failures.push("robots.txt: missing Content-Signal");

const catalogResponse = await fetch(new URL("/.well-known/api-catalog", origin));
const catalog = await catalogResponse.json().catch(() => ({}));
if (!catalogResponse.headers.get("content-type")?.startsWith("application/linkset+json")) failures.push("api-catalog: not served as application/linkset+json");
if (!catalog.linkset?.some((entry) => entry.anchor?.endsWith("/mcp") && entry["service-desc"]?.length)) failures.push("api-catalog: missing the MCP server");

const card = await (await fetch(new URL("/.well-known/mcp/server-card.json", origin))).json().catch(() => ({}));
if (!card.transport?.endpoint?.endsWith("/mcp") || !(card.tools?.length >= 5)) failures.push("server-card: missing endpoint or tools");

async function mcp(body) {
  const response = await fetch(new URL("/mcp", origin), {
    method: "POST",
    headers: { "content-type": "application/json", accept: "application/json, text/event-stream" },
    body: JSON.stringify(body),
  });
  return { status: response.status, body: response.status === 202 ? null : await response.json() };
}
const init = await mcp({ jsonrpc: "2.0", id: 1, method: "initialize", params: { protocolVersion: "2025-06-18", capabilities: {}, clientInfo: { name: "audit", version: "1" } } });
if (init.body?.result?.protocolVersion !== "2025-06-18") failures.push("mcp: initialize did not negotiate 2025-06-18");
if ((await mcp({ jsonrpc: "2.0", method: "notifications/initialized" })).status !== 202) failures.push("mcp: notification was not accepted with 202");
const listed = await mcp({ jsonrpc: "2.0", id: 2, method: "tools/list" });
const toolNames = listed.body?.result?.tools?.map((tool) => tool.name) ?? [];
for (const name of ["search", "fetch", "find_teachers", "school_info", "whatsapp_link"]) {
  if (!toolNames.includes(name)) failures.push(`mcp: tools/list is missing ${name}`);
}
const searched = await mcp({ jsonrpc: "2.0", id: 3, method: "tools/call", params: { name: "search", arguments: { query: "afinación del tiple" } } });
const first = JSON.parse(searched.body?.result?.content?.[0]?.text ?? "{}").results?.[0];
if (first?.id !== "/herramientas/afinador/tiple") failures.push(`mcp: search for the tiple tuning returned ${first?.id}`);
const fetched = await mcp({ jsonrpc: "2.0", id: 4, method: "tools/call", params: { name: "fetch", arguments: { id: first?.id ?? "/" } } });
if (!JSON.parse(fetched.body?.result?.content?.[0]?.text ?? "{}").text?.startsWith("# ")) failures.push("mcp: fetch did not return Markdown");
const teachers = await mcp({ jsonrpc: "2.0", id: 5, method: "tools/call", params: { name: "find_teachers", arguments: { instrument: "piano" } } });
if (!teachers.body?.result?.content?.[0]?.text?.includes("wa.me/")) failures.push("mcp: find_teachers did not return contact links");

if (throughWorker) {
  const home = await fetch(new URL("/", origin), { method: "HEAD" });
  if (!/rel="api-catalog"/.test(home.headers.get("link") ?? "")) failures.push("/: HTML response has no api-catalog Link header");

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
console.log(`✓ ${checked.size} discovery links, ${indices} indices and ${markdownPages} Markdown pages; HTML discovery${throughWorker ? ", Link headers, Markdown negotiation" : ""}, Content Signals, API catalog, MCP server and unknown-resource 404s passed at ${origin.origin}.`);
