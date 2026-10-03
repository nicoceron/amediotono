import "server-only";
import {getLocale, getTranslations} from "next-intl/server";
import type {Metadata} from "next";
import {createText} from "./text";
import {localizedPath, routing} from "./routing";
import {SITE_BRAND, SITE_URL, brandTitle} from "@/lib/seo";

export async function getText() {
  return createText(await getTranslations());
}

const labels = new Set(["title", "default", "description", "alt", "keywords", "section", "tags", "headline", "name", "text", "jobTitle", "slogan", "articleBody", "caption"]);
const identities = new Set(["Organization", "EducationalOrganization", "Person", "ImageObject", "City", "Country", "Place"]);
const structuredPageLinks = new Set(["@id", "url", "item", "serviceUrl", "mainEntityOfPage"]);

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
    // Definitions and references must use the same ID. In particular, a
    // localized ProfilePage must point to the Person actually in its graph.
    if (structuredPageLinks.has(field) && value.startsWith(`${SITE_URL}/`)) {
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
    if (typeof value !== "string" || !labels.has(field)) return value;
    const translated = tx(value);
    const brandSuffix = ` | ${SITE_BRAND}`;
    // New titles can translate from their source copy immediately, without
    // depending on a second extraction of a concatenated prerendered title.
    if (translated === value && (field === "title" || field === "default") && value.endsWith(brandSuffix)) {
      return brandTitle(tx(value.slice(0, -brandSuffix.length)));
    }
    return translated;
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
