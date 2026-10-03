"""Generate saved Next.js translations locally with Argos/CTranslate2.

Run in a Python environment with argostranslate installed. Model files are
downloaded from Argos's package index; website text stays on this machine.
Existing nonempty translations are preserved, so edits survive reruns.
"""
import argparse
import json
import re
import time
from pathlib import Path

import argostranslate.package
import ctranslate2

ROOT = Path(__file__).resolve().parent.parent
SOURCE = json.loads((ROOT / "messages/source.json").read_text())
TEACHERS = json.loads((ROOT / "src/data/teachers.json").read_text())
PERSON_NAMES = sorted({name for teacher in TEACHERS for name in [teacher["name"], teacher["shortName"], teacher["name"].split()[0]]}, key=len, reverse=True)
# Keep interpolation arguments, Markdown links, musical notation and URLs intact.
PROTECTED = re.compile(r"(\{p\d+\}|\]\([^\s)]+\)|\[|\*\*|\||https?://[^\s]+|A medio tono|A ½ tono|A 1/2 tono|" + "|".join(re.escape(name) for name in PERSON_NAMES) + r")")


class Engine:
    def __init__(self, source, target):
        self.package = next(package for package in argostranslate.package.get_installed_packages()
                            if package.from_code == source and package.to_code == target)
        self.model = ctranslate2.Translator(str(self.package.package_path / "model"),
                                           device="cpu", compute_type="int8", intra_threads=6, inter_threads=2)

    def translate(self, texts):
        tokens = [self.package.tokenizer.encode(text) for text in texts]
        prefix = [[self.package.target_prefix]] * len(tokens) if self.package.target_prefix else None
        results = self.model.translate_batch(tokens, target_prefix=prefix,
                                             beam_size=2, max_batch_size=64,
                                             max_decoding_length=512, batch_type="examples", replace_unknowns=True)
        decoded = [self.package.tokenizer.decode(result.hypotheses[0]) for result in results]
        if self.package.target_prefix:
            decoded = [text.removeprefix(self.package.target_prefix).strip() for text in decoded]
        return decoded


def translated_messages(texts, engines):
    pieces = []
    indices = []
    for text in texts:
        record = []
        for index, part in enumerate(PROTECTED.split(text)):
            if index % 2 or not re.search(r"[a-zA-ZáéíóúñüÁÉÍÓÚÑÜ]", part):
                record.append((None, part))
            else:
                # The tokenizer strips boundary spaces. Store them separately.
                record.append((len(pieces), (part[:len(part) - len(part.lstrip())], part[len(part.rstrip()):])))
                pieces.append(part.strip())
        indices.append(record)
    if pieces:
        for engine in engines:
            pieces = engine.translate(pieces)
    outputs = []
    for record in indices:
        outputs.append("".join(value if index is None else value[0] + pieces[index] + value[1]
                               for index, value in record))
    return outputs


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--locales", nargs="+", default=["en", "pt", "fr"])
    args = parser.parse_args()
    engines = {}
    for locale in args.locales:
        if locale == "en": engines[locale] = [Engine("es", "en")]
        elif locale == "pt": engines[locale] = [Engine("es", "pt")]
        elif locale == "fr": engines[locale] = [Engine("en", "fr")]
        else: raise ValueError(f"No installed translation path for {locale}")
    # Translate visitor-facing controls before the editorial content.
    entries = sorted(SOURCE.items(), key=lambda item: (item[1]["namespace"] != "UI", len(item[1]["text"])))
    for locale in args.locales:
        english = json.loads((ROOT / "messages/en.json").read_text())
        destination = ROOT / f"messages/{locale}.json"
        catalog = json.loads(destination.read_text())
        missing = [(key, item) for key, item in entries if not catalog[item["namespace"]].get(key)]
        started = time.monotonic()
        for offset in range(0, len(missing), 64):
            batch = missing[offset:offset + 64]
            inputs = [english[item["namespace"]].get(key) or item["text"] for key, item in batch] if locale == "fr" else [item["text"] for _, item in batch]
            if locale == "fr" and any(not english[item["namespace"]].get(key) for key, item in batch):
                raise ValueError("Generate the English catalog before French (Spanish → English → French).")
            outputs = translated_messages(inputs, engines[locale])
            for (key, item), output in zip(batch, outputs):
                if not output.strip(): raise ValueError(f"Empty translation: {locale}/{key}")
                catalog[item["namespace"]][key] = output
            checkpoint = destination.with_suffix(".tmp")
            checkpoint.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + "\n")
            checkpoint.replace(destination)
            print(f"{locale}: {min(offset + 64, len(missing))}/{len(missing)} messages, {time.monotonic() - started:.1f}s", flush=True)


if __name__ == "__main__":
    main()
