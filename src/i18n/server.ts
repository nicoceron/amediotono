import "server-only";
import {getLocale, getTranslations} from "next-intl/server";
import type {Metadata} from "next";
import {createText} from "./text";
import {localizedPath, routing} from "./routing";
import {SITE_URL} from "@/lib/seo";

export async function getText() {
  return createText(await getTranslations());
}

const labels = new Set(["title", "default", "description", "alt", "keywords", "section", "tags", "headline", "name", "text", "jobTitle", "slogan", "articleBody", "caption"]);
const identities = new Set(["Organization", "Person", "ImageObject"]);

export async function localizeStructuredData(value: unknown): Promise<unknown> {
  const [tx, locale] = await Promise.all([getText(), getLocale()]);
  function visit(value: unknown, field = "", identity = false): unknown {
    if (Array.isArray(value)) return value.map(item => visit(item, field, identity));
    if (value && typeof value === "object") {
      const node = value as Record<string, unknown>;
      const ownIdentity = identities.has(String(node["@type"]));
      return Object.fromEntries(Object.entries(node).map(([key, item]) => [key, visit(item, key, ownIdentity)]));
    }
    if (typeof value !== "string") return value;
    if (field === "inLanguage") return locale;
    if (field === "jobTitle" && value.startsWith("Profe de ")) return tx.template("Profe de {p0}", {p0: tx(value.slice("Profe de ".length))});
    if (labels.has(field) && !(identity && field === "name")) return tx(value);
    if ((field === "url" || (!identity && field === "@id")) && value.startsWith(SITE_URL)) {
      const url = new URL(value);
      if (!url.pathname.includes(".")) url.pathname = localizedPath(url.pathname, locale);
      return url.toString();
    }
    return value;
  }
  return visit(value);
}

export async function localizeMetadata(metadata: Metadata): Promise<Metadata> {
  const [tx, locale] = await Promise.all([getText(), getLocale()]);
  function visit(value: unknown, field = ""): unknown {
    if (Array.isArray(value)) return value.map(item => visit(item, field));
    if (value instanceof URL) return value;
    if (value && typeof value === "object") return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, visit(item, key)]));
    return typeof value === "string" && labels.has(field) ? tx(value) : value;
  }
  const result = visit(metadata) as Metadata;
  const canonical = metadata.alternates?.canonical;
  if (typeof canonical === "string") {
    const path = new URL(canonical, SITE_URL).pathname;
    result.alternates = {
      ...result.alternates,
      canonical: localizedPath(path, locale),
      languages: Object.fromEntries([
        ...routing.locales.map(language => [language, localizedPath(path, language)]),
        ["x-default", path],
      ]),
      ...(locale !== "es" ? {types: undefined} : {}),
    };
    if (result.openGraph) {
      result.openGraph.url = localizedPath(path, locale);
      result.openGraph.locale = {es: "es_CO", en: "en_US", pt: "pt_BR", fr: "fr_FR"}[locale];
    }
  }
  return result;
}
