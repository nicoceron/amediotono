import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

// Next's client boundary includes imports of every `use client` entry point.
// Use the existing extraction references to select their saved messages for
// NextIntlClientProvider; server-only copy stays in the server catalog.
const root = process.cwd();
const {config} = ts.readConfigFile("tsconfig.json", ts.sys.readFile);
const {options} = ts.parseJsonConfigFileContent(config, ts.sys, root);
const clientFiles = new Set();
const sources = ts.sys.readDirectory("src", [".ts", ".tsx"]);

function visit(file) {
  if (clientFiles.has(file)) return;
  clientFiles.add(file);
  if (file.endsWith(".json")) return;
  const source = ts.createSourceFile(file, fs.readFileSync(file, "utf8"), ts.ScriptTarget.Latest, true);
  function walk(node) {
    let specifier;
    if (ts.isImportDeclaration(node) && !node.importClause?.isTypeOnly) specifier = node.moduleSpecifier;
    if (ts.isExportDeclaration(node) && !node.isTypeOnly) specifier = node.moduleSpecifier;
    if (ts.isCallExpression(node) && node.expression.kind === ts.SyntaxKind.ImportKeyword) specifier = node.arguments[0];
    if (specifier && ts.isStringLiteral(specifier)) {
      const resolved = ts.resolveModuleName(specifier.text, file, options, ts.sys).resolvedModule;
      if (resolved && !resolved.isExternalLibraryImport && resolved.resolvedFileName.startsWith(path.join(root, "src") + path.sep)) {
        visit(resolved.resolvedFileName);
      }
    }
    ts.forEachChild(node, walk);
  }
  walk(source);
}

for (const file of sources) {
  const source = ts.createSourceFile(file, fs.readFileSync(file, "utf8"), ts.ScriptTarget.Latest);
  if (source.statements.some(node => ts.isExpressionStatement(node) && ts.isStringLiteral(node.expression) && node.expression.text === "use client")) {
    visit(path.resolve(file));
  }
}

const registry = JSON.parse(fs.readFileSync("messages/source.json", "utf8"));
const keys = Object.entries(registry).filter(([, item]) => item.namespace === "UI" && (
  item.references.some(reference => {
    const file = reference.replace(/:\d+$/, "").replace(/ \(generated\)$/, "");
    // Form clients translate validation messages received from these routes.
    return file.startsWith("src/app/api/") || clientFiles.has(path.resolve(file));
  }) || /^(?:Do|Re|Mi|Fa|Sol|La|Si)[♭♯𝄫𝄪]?\d{0,2}$/.test(item.text)
)).map(([key]) => key).sort();

fs.writeFileSync("src/i18n/client-message-keys.json", JSON.stringify(keys, null, 2) + "\n");
console.log(`${keys.length} client messages selected from ${clientFiles.size} modules; server copy stays server-side.`);
