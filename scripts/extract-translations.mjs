import fs from "node:fs";
import path from "node:path";
import ts from "typescript";
import {messageKey, normalizeMessage} from "../src/i18n/key.ts";
import {CHORDS, SCALES} from "../src/lib/music-theory.ts";

const root = process.cwd();
const registry = {};
const structural = new Set(["id", "slug", "href", "src", "path", "icon", "type", "className", "htmlFor", "value", "format", "placement", "accent", "category", "authorSlug", "courseId", "key", "width", "height", "sizes", "scope", "autoComplete", "method", "rel", "target"]);
const commonWords = new Set("Inicio Clases Profes Academias Blog Nosotros Contacto Claro Oscuro Sistema Opciones Buscar Borrar Volver Siguiente Anterior Enviar Cargando Afinador Metrónomo Herramientas Guitarra Piano Violín Canto Flauta Batería Bajo Saxofón Trompeta Acordes Escalas Mayor Menor Música Gratis Online Presencial Virtual Híbrido Español Inglés Francés Portugués Ubicación Idioma Modalidad Todos Todas Ninguno Ninguna Sí No años minutos Disponible disponibles profe profes artículo artículos".split(" "));

function files(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, {withFileTypes: true}).flatMap(entry => {
    const item = path.join(dir, entry.name);
    return entry.isDirectory() ? files(item) : [item];
  });
}

function isCopy(text) {
  if (!text || !/[\p{L}]/u.test(text)) return false;
  if (/^(?:https?:|\/|#|@\/|\.\.?\/|var\(|[A-Za-z0-9_-]+\.(?:png|jpg|webp|avif|mp4|svg|ts|json))/.test(text)) return false;
  if (/^[\w.-]+@[\w.-]+$/.test(text)) return false;
  return commonWords.has(text) || /[áéíóúñü¿¡]/i.test(text) || (/\s/.test(text) && !/^(?:const |import |function |var |\(function|\.\w|[a-z-]+:)/.test(text));
}

function add(raw, namespace, reference, force = false) {
  const text = normalizeMessage(raw);
  if (!force && !isCopy(text)) return;
  if (!text) return;
  const key = messageKey(text);
  if (registry[key] && registry[key].text !== text) throw new Error(`Catalog key collision: ${key}`);
  const item = registry[key] ??= {text, namespace, references: []};
  if (namespace === "UI") item.namespace = "UI";
  if (!item.references.includes(reference)) item.references.push(reference);
}

for (const file of files(path.join(root, "src")).filter(file => /\.(tsx?|json)$/.test(file) && !file.includes("/i18n/") && !file.includes("/data/search-verification") && !file.includes("/data/indexnow"))) {
  const relative = path.relative(root, file);
  const namespace = relative.startsWith("src/content/blog/") ? "Content" : "UI";
  if (file.endsWith(".json")) {
    function visit(value, field = "") {
      if (typeof value === "string") {
        if (!structural.has(field) && !(relative.endsWith("teachers.json") && ["name", "shortName", "author"].includes(field))) {
          add(value, namespace, relative, ["label", "role"].includes(field));
          if (field === "label") add(value.toLowerCase(), namespace, relative, true);
        }
      }
      else if (Array.isArray(value)) value.forEach(item => visit(item, field));
      else if (value && typeof value === "object") Object.entries(value).forEach(([key, item]) => visit(item, key));
    }
    visit(JSON.parse(fs.readFileSync(file, "utf8")));
    continue;
  }
  const source = ts.createSourceFile(file, fs.readFileSync(file, "utf8"), ts.ScriptTarget.Latest, true, file.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS);
  function visit(node) {
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
      const parent = node.parent;
      const field = (ts.isPropertyAssignment(parent) || ts.isJsxAttribute(parent)) ? parent.name.getText(source).replace(/["']/g, "") : "";
      if (!structural.has(field) && !ts.isImportDeclaration(parent) && !ts.isLiteralTypeNode(parent)) {
        // Blog summaries are also shown in the interactive search component.
        const kind = namespace === "Content" && ["title", "excerpt", "description", "seoTitle", "keywords"].includes(field) ? "UI" : namespace;
        const messageCall = ts.isCallExpression(parent) && ["tx", "tx.template"].includes(parent.expression.getText(source));
        add(node.text, kind, `${relative}:${source.getLineAndCharacterOfPosition(node.pos).line + 1}`, messageCall || ["label", "role"].includes(field));
      }
    } else if (ts.isJsxText(node)) add(node.text, "UI", relative);
    else if (ts.isTemplateExpression(node)) {
      const text = node.head.text + node.templateSpans.map((span, index) => `{p${index}}${span.literal.text}`).join("");
      add(text, namespace, relative);
    }
    ts.forEachChild(node, visit);
  }
  visit(source);
}

// Include composed metadata from the existing Spanish prerender. This keeps
// localized titles/descriptions complete when they combine several data fields.
if (process.argv.includes("--prerender")) {
  const decode = value => value.replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16))).replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code))).replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ");
  const prerenderRoot = path.join(root, ".next/server/app");
  const hasLocales = fs.existsSync(path.join(prerenderRoot, "es.html"));
  for (const file of files(prerenderRoot).filter(file => file.endsWith(".html") && (!hasLocales || /^es(?:\/|\.html$)/.test(path.relative(prerenderRoot, file))))) {
    const html = fs.readFileSync(file, "utf8");
    for (const match of html.matchAll(/<title>([^<]+)<\/title>|<meta\s+(?:name|property)="(?:description|og:title|og:description|twitter:title|twitter:description|og:image:alt|keywords)"\s+content="([^"]*)"/g)) {
      add(decode(match[1] ?? match[2]), "Content", "Spanish page metadata", true);
    }
    const body = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "").replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "");
    for (const segment of body.split(/<[^>]*>/g)) {
      const text = normalizeMessage(decode(segment));
      if (isCopy(text)) add(text, text.length <= 80 ? "UI" : "Content", "Spanish rendered copy");
    }
  }
}

fs.mkdirSync(path.join(root, "messages"), {recursive: true});
// These labels are computed from note spelling, so AST string extraction
// cannot discover every name used by headings, tools and metadata.
for (const item of [...CHORDS, ...SCALES]) {
  add(item.name, "UI", "src/lib/music-theory.ts (generated)", true);
  add(item.longName, "UI", "src/lib/music-theory.ts (generated)", true);
}
const previous = fs.existsSync("messages/source.json") ? JSON.parse(fs.readFileSync("messages/source.json", "utf8")) : {};
// Keep prerendered metadata between normal extraction runs.
for (const [key, item] of Object.entries(previous)) {
  if (item.references.some(ref => ["Spanish page metadata", "Spanish rendered copy"].includes(ref)) && !registry[key]) registry[key] = item;
}
// Search summaries are localized on the server before reaching BlogSearch.
// Article-only messages and prerendered fragments must not inflate every
// visitor's client catalog. Generated music names also appear in client tools.
for (const item of Object.values(registry)) {
  if (item.references.every(reference => reference.startsWith("src/content/blog/") || reference.startsWith("Spanish "))) {
    item.namespace = item.text.length <= 50 && /^(?:Do|Re|Mi|Fa|Sol|La|Si)(?:[♭♯𝄫𝄪]|\s)/.test(item.text) ? "UI" : "Content";
  }
}
const ordered = Object.fromEntries(Object.entries(registry).sort(([a], [b]) => a.localeCompare(b)));
fs.writeFileSync("messages/source.json", JSON.stringify(ordered, null, 2) + "\n");
for (const locale of ["es", "en", "pt", "fr"]) {
  const destination = `messages/${locale}.json`;
  const previous = fs.existsSync(destination) ? JSON.parse(fs.readFileSync(destination, "utf8")) : {};
  const catalog = {UI: {}, Content: {}};
  for (const [key, {text, namespace}] of Object.entries(ordered)) {
    catalog[namespace][key] = locale === "es" ? text : previous.UI?.[key] ?? previous.Content?.[key] ?? "";
  }
  fs.writeFileSync(destination, JSON.stringify(catalog, null, 2) + "\n");
}
console.log(`Extracted ${Object.keys(ordered).length} messages (${Object.values(ordered).reduce((sum, item) => sum + item.text.length, 0)} source characters).`);
