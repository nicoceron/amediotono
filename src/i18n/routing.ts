import {defineRouting} from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en", "pt", "fr"],
  defaultLocale: "es",
  localePrefix: "as-needed",
  localeCookie: {name: "TONO_LOCALE", maxAge: 60 * 60 * 24 * 365},
});

export type SiteLocale = (typeof routing.locales)[number];
export const localeNames: Record<SiteLocale, string> = {
  es: "Español", en: "English", pt: "Português", fr: "Français",
};

export function localizedPath(path: string, locale: string) {
  return locale === routing.defaultLocale ? path : `/${locale}${path === "/" ? "" : path}`;
}
