// Verifies the chord and scale dictionaries: every chord spelled correctly,
// every guitar voicing sounds exactly its chord with the root in the bass,
// and each chord has at least one guitar and one ukulele voicing.
// Usage: node scripts/check-chord-voicings.mjs
import { build } from "esbuild";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

const dir = await mkdtemp(join(tmpdir(), "voicings-"));
const outfile = join(dir, "bundle.mjs");
await build({
  stdin: {
    contents: `export * from "@/lib/music-theory"; export * from "@/lib/chord-voicings";`,
    resolveDir: process.cwd(),
    loader: "ts",
  },
  bundle: true,
  format: "esm",
  platform: "node",
  outfile,
  alias: { "@": "./src" },
  logLevel: "error",
});
const lib = await import(outfile);
await rm(dir, { recursive: true });

const errors = [];
const slugs = new Set();
for (const chord of lib.CHORDS) {
  if (slugs.has(chord.slug)) errors.push(`duplicate slug ${chord.slug}`);
  slugs.add(chord.slug);
  const letters = chord.notes.map((n) => n.letter);
  if (new Set(letters).size !== letters.length) errors.push(`${chord.slug}: repeated letter ${chord.notes.map((n) => lib.noteName(n)).join(" ")}`);
  const guitar = lib.guitarVoicings(chord);
  const uke = lib.ukuleleVoicings(chord);
  if (guitar.length === 0) errors.push(`${chord.slug}: no guitar voicing`);
  if (uke.length === 0) errors.push(`${chord.slug}: no ukulele voicing`);
  for (const v of guitar) {
    if (!lib.voicingMatches(chord, v.frets, lib.GUITAR_TUNING, true)) errors.push(`${chord.slug}: bad guitar ${v.frets}`);
    const fretted = v.frets.filter((f) => f > 0);
    if (fretted.length && Math.max(...fretted) - Math.min(...fretted) > 4) errors.push(`${chord.slug}: stretch ${v.frets}`);
    if (Math.max(...v.frets) > 15) errors.push(`${chord.slug}: too high ${v.frets}`);
    if (v.fingers && v.fingers.some((finger, i) => (v.frets[i] > 0) !== (finger > 0))) errors.push(`${chord.slug}: fingers ${v.frets} / ${v.fingers}`);
  }
}
for (const scale of lib.SCALES) {
  if (slugs.has(scale.slug) && !scale.slug) errors.push(scale.slug);
  if (scale.notes.length === 7) {
    const letters = new Set(scale.notes.map((n) => n.letter));
    if (letters.size !== 7) errors.push(`${scale.slug}: letters ${scale.notes.map((n) => lib.noteName(n)).join(" ")}`);
  }
}

if (process.argv.includes("--print")) {
  for (const chord of lib.CHORDS) {
    const g = lib.guitarVoicings(chord).map((v) => v.frets.map((f) => (f < 0 ? "x" : f)).join(".")).join("  ");
    const u = lib.ukuleleVoicings(chord).map((v) => v.frets.join("")).join(" ");
    console.log(`${chord.slug.padEnd(28)} ${chord.displaySymbol.padEnd(8)} ${chord.notes.map((n) => lib.noteName(n)).join("-").padEnd(18)} G: ${g.padEnd(40)} U: ${u}`);
  }
  for (const scale of lib.SCALES) console.log(`${scale.slug.padEnd(30)} ${scale.notes.map((n) => lib.noteName(n)).join(" ")}`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`OK: ${lib.CHORDS.length} chords, ${lib.SCALES.length} scales`);
