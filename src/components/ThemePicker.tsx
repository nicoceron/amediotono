"use client";
import {useText} from "@/i18n/use-text";
import {useLocale} from "next-intl";

import { useLayoutEffect, useSyncExternalStore } from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { getThemePreference, setThemePreference, THEME_CHANGE_EVENT, THEME_RESTORE_EVENT } from "@/lib/theme";

const choices = [
  { value: "system", label: "Sistema", icon: Monitor },
  { value: "light", label: "Claro", icon: Sun },
  { value: "dark", label: "Oscuro", icon: Moon },
] as const;

function subscribe(onChange: () => void) {
  window.addEventListener(THEME_CHANGE_EVENT, onChange);
  return () => window.removeEventListener(THEME_CHANGE_EVENT, onChange);
}

export function ThemePicker() {
  const tx = useText();
  const locale = useLocale();
  const preference = useSyncExternalStore(subscribe, getThemePreference, () => "system");
  // A locale switch updates <html>. Restore the head script's preference
  // before paint, including choices made when localStorage is unavailable.
  useLayoutEffect(() => {
    window.dispatchEvent(new Event(THEME_RESTORE_EVENT));
  }, [locale]);

  return (
    <details className="theme-picker" onKeyDown={(event) => {
      if (event.key === "Escape") {
        event.currentTarget.open = false;
        event.currentTarget.querySelector("summary")?.focus();
      }
    }}>
      <summary className="theme-float-toggle" aria-label={tx("Elegir tema")} title={tx("Elegir tema")}>
        <Sun className="theme-icon theme-icon-sun" size={20} aria-hidden="true" />
        <Moon className="theme-icon theme-icon-moon" size={20} aria-hidden="true" />
      </summary>
      <div className="theme-picker-options" role="group" aria-label={tx("Tema")}>
        {choices.map(({ value, label, icon: Icon }) => (
          <button key={value} type="button" aria-pressed={preference === value} onClick={(event) => {
            setThemePreference(value);
            const details = event.currentTarget.closest("details");
            if (details) {
              details.open = false;
              details.querySelector("summary")?.focus();
            }
          }}>
            <Icon size={16} aria-hidden="true" />
            {tx(label)}
          </button>
        ))}
      </div>
    </details>
  );
}
