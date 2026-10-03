import type {useTranslations} from "next-intl";
import {messageKey, normalizeMessage} from "./key";

type Translator = ReturnType<typeof useTranslations>;

/** Source text identifies a saved message; values and React nodes retain their types. */
export function createText(t: Translator) {
  function keyFor(source: string) {
    const key = messageKey(normalizeMessage(source));
    if (t.has(`UI.${key}`)) return `UI.${key}`;
    if (t.has(`Content.${key}`)) return `Content.${key}`;
    return undefined;
  }

  function text<T>(value: T): T {
    if (typeof value !== "string" || !value.trim()) return value;
    const key = keyFor(value);
    if (!key) return value; // Proper names, musical symbols, numbers and identifiers.
    const translated: unknown = t.raw(key);
    if (typeof translated !== "string" || !translated) return value;
    const before = value.match(/^\s*/)?.[0] ?? "";
    const after = value.match(/\s*$/)?.[0] ?? "";
    return (before + translated + after) as T;
  }

  text.template = (source: string, values: Record<string, string | number | undefined>) => {
    const key = keyFor(source);
    if (key) return (source.match(/^\s*/)?.[0] ?? "") + t(key, Object.fromEntries(Object.entries(values).map(([name, value]) => [name, value ?? ""]))) + (source.match(/\s*$/)?.[0] ?? "");
    return source.replace(/\{(p\d+)\}/g, (_, name: string) => String(values[name] ?? ""));
  };
  return text;
}
