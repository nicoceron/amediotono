"use client";

import {useLocale} from "next-intl";
import {useTransition} from "react";
import {Check, Globe} from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {useRouter} from "next/navigation";
import {getPathname, usePathname} from "@/i18n/navigation";
import {localeNames, routing, type SiteLocale} from "@/i18n/routing";
import {useText} from "@/i18n/use-text";

export function LanguagePicker() {
  const tx = useText();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  function changeLanguage(value: string) {
    let next = value as SiteLocale;
    if (value === "system") {
      document.cookie = "TONO_LOCALE=; Max-Age=0; Path=/; SameSite=Lax";
      next = navigator.languages.map(language => language.split("-")[0]).find(language => routing.locales.includes(language as SiteLocale)) as SiteLocale ?? routing.defaultLocale;
    } else {
      document.cookie = `TONO_LOCALE=${next}; Max-Age=31536000; Path=/; SameSite=Lax`;
    }
    // Next's router keeps system mode from recreating a manual locale cookie.
    startTransition(() => router.replace(getPathname({href: pathname, locale: next}) + window.location.search + window.location.hash, {scroll: false}));
  }

  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger asChild>
        <button
          className="language-picker"
          type="button"
          aria-label={`${tx("Idioma")}: ${localeNames[locale as SiteLocale]}`}
          title={tx("Idioma")}
          disabled={pending}
          aria-busy={pending}
        >
          <Globe size={21} aria-hidden="true" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="nav-dropdown-menu language-menu" align="end" sideOffset={8} collisionPadding={12} loop data-lenis-prevent>
          <DropdownMenu.Label className="nav-dropdown-label">{tx("Idioma")}</DropdownMenu.Label>
          <DropdownMenu.RadioGroup value={locale} onValueChange={changeLanguage}>
            {routing.locales.map(language => (
              <DropdownMenu.RadioItem className="nav-dropdown-item" key={language} value={language} lang={language}>
                {localeNames[language]}
                <DropdownMenu.ItemIndicator><Check size={16} aria-hidden="true" /></DropdownMenu.ItemIndicator>
              </DropdownMenu.RadioItem>
            ))}
          </DropdownMenu.RadioGroup>
          <DropdownMenu.Separator className="nav-dropdown-separator" />
          <DropdownMenu.Item className="nav-dropdown-item" onSelect={() => changeLanguage("system")}>
            {tx("Idioma del sistema")}
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
