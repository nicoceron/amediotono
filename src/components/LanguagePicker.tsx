"use client";

import {useLocale} from "next-intl";
import {useTransition} from "react";
import {Languages} from "lucide-react";
import {getPathname, usePathname, useRouter} from "@/i18n/navigation";
import {localeNames, routing, type SiteLocale} from "@/i18n/routing";
import {useText} from "@/i18n/use-text";

export function LanguagePicker() {
  const tx = useText();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  return (
    <label className="language-picker">
      <Languages size={18} aria-hidden="true" />
      <span className="visually-hidden">{tx("Idioma")}</span>
      <select aria-label={tx("Idioma")} value={locale} disabled={pending} onChange={event => {
        let next = event.target.value as SiteLocale;
        if (event.target.value === "system") {
          document.cookie = "TONO_LOCALE=; Max-Age=0; Path=/; SameSite=Lax";
          next = navigator.languages.map(language => language.split("-")[0]).find(language => routing.locales.includes(language as SiteLocale)) as SiteLocale ?? routing.defaultLocale;
          window.location.assign(getPathname({href: pathname, locale: next}) + window.location.search + window.location.hash);
          return;
        }
        document.cookie = `TONO_LOCALE=${next}; Max-Age=31536000; Path=/; SameSite=Lax`;
        startTransition(() => router.replace(pathname + window.location.search + window.location.hash, {locale: next, scroll: false}));
      }}>
        {routing.locales.map(language => <option key={language} value={language} lang={language}>{localeNames[language]}</option>)}
        <option value="system">{tx("Idioma del sistema")}</option>
      </select>
    </label>
  );
}
