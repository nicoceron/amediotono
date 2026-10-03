import fs from 'node:fs';
import {messageKey, normalizeMessage} from '../src/i18n/key.ts';
import {CHORDS, SCALES} from '../src/lib/music-theory.ts';
const overrides = JSON.parse(fs.readFileSync('messages/overrides.json', 'utf8'));
const noteNames = {
  en: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
  pt: ['Dó', 'Ré', 'Mi', 'Fá', 'Sol', 'Lá', 'Si'],
  fr: ['Do', 'Ré', 'Mi', 'Fa', 'Sol', 'La', 'Si'],
};
const accidentals = {
  en: ['double flat', 'flat', '', 'sharp', 'double sharp'],
  pt: ['dobrado bemol', 'bemol', '', 'sustenido', 'dobrado sustenido'],
  fr: ['double bémol', 'bémol', '', 'dièse', 'double dièse'],
};
const symbols = ['𝄫', '♭', '', '♯', '𝄪'];
for (const item of [...CHORDS, ...SCALES]) {
  for (const [field, long] of [['name', false], ['longName', true]]) {
    const source = item[field];
    overrides[source] ??= {};
    for (const locale of ['en', 'pt', 'fr']) {
      const letter = noteNames[locale][item.root.letter];
      const accidental = long ? accidentals[locale][item.root.accidental + 2] : symbols[item.root.accidental + 2];
      const root = long ? [letter, accidental].filter(Boolean).join(' ') : letter + accidental;
      overrides[source][locale] = `${root} ${overrides[item.type.name]?.[locale] ?? item.type.name}`;
    }
  }
}
for (const locale of (process.argv.slice(2).length ? process.argv.slice(2) : ['en', 'pt', 'fr'])) {
  const file = `messages/${locale}.json`;
  const catalog = JSON.parse(fs.readFileSync(file, 'utf8'));
  for (const [source, translations] of Object.entries(overrides)) {
    const key = messageKey(normalizeMessage(source));
    for (const namespace of ['UI', 'Content']) if (key in catalog[namespace]) catalog[namespace][key] = translations[locale];
  }
  const teacher = {en: ['teacher', 'teachers'], pt: ['professor', 'professores'], fr: ['professeur', 'professeurs']}[locale];
  const metronome = {en: 'metronome', pt: 'metrônomo', fr: 'métronome'}[locale];
  for (const messages of Object.values(catalog)) for (const [key, value] of Object.entries(messages)) {
    messages[key] = value.split(/(\]\([^)]*\)|https?:\/\/\S+)/g).map((part, index) => index % 2 ? part : part.replace(/\b(profesors|profes|profe)\b/gi, word => {
      const translated = teacher[word.toLowerCase() === 'profe' ? 0 : 1];
      return word[0] === word[0].toUpperCase() ? translated[0].toUpperCase() + translated.slice(1) : translated;
    }).replace(/\bmetronom(?:o|al)\b/gi, word => word[0] === word[0].toUpperCase() ? metronome[0].toUpperCase() + metronome.slice(1) : metronome)).join('');
  }
  fs.writeFileSync(file, JSON.stringify(catalog, null, 2) + '\n');
}
