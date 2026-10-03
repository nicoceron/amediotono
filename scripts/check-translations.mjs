import fs from 'node:fs';
import {parse} from '@formatjs/icu-messageformat-parser';
const source = JSON.parse(fs.readFileSync('messages/source.json', 'utf8'));
const failures = [];
const argumentsIn = text => {
  const names = new Set();
  const visit = nodes => { for (const node of nodes) {
    if (node.type > 0 && node.type < 7 && node.value) names.add(node.value);
    if (node.options) Object.values(node.options).forEach(option => visit(option.value));
  }};
  visit(parse(text, {ignoreTag: true}));
  return [...names].sort().join(',');
};
const links = text => [...text.matchAll(/\]\(([^\s)]+)\)/g)].map(match => match[1]).join('\n');
for (const locale of ['es', 'en', 'pt', 'fr']) {
  const catalog = JSON.parse(fs.readFileSync(`messages/${locale}.json`, 'utf8'));
  for (const [key, item] of Object.entries(source)) {
    const translated = catalog[item.namespace]?.[key];
    if (typeof translated !== 'string' || !translated.trim()) { failures.push(`${locale}/${key}: missing translation`); continue; }
    if (locale === 'es' && translated !== item.text) failures.push(`${locale}/${key}: Spanish source drift`);
    if (links(translated) !== links(item.text)) failures.push(`${locale}/${key}: Markdown target changed`);
    if ((translated.match(/\*\*/g) ?? []).length !== (item.text.match(/\*\*/g) ?? []).length) failures.push(`${locale}/${key}: bold markers changed`);
    if (/\{p\d+\}/.test(item.text)) {
      try { if (argumentsIn(translated) !== argumentsIn(item.text)) failures.push(`${locale}/${key}: interpolation arguments changed`); }
      catch (error) { failures.push(`${locale}/${key}: invalid ICU: ${error.message}`); }
    }
  }
}
if (failures.length) {
  fs.writeFileSync('/tmp/amediotono-translation-failures.json', JSON.stringify(failures, null, 2));
  console.error(failures.slice(0, 20).join('\n'), `\n${failures.length} failures; full report: /tmp/amediotono-translation-failures.json`);
  process.exit(1);
}
console.log(`${Object.keys(source).length} messages complete in es/en/pt/fr; interpolation, Markdown links and formatting preserved.`);
