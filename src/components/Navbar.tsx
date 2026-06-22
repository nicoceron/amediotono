"use client";

import { useEffect, useState, useCallback, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";

function useTheme() {
  const getSnapshot = useCallback(() => {
    if (typeof window === "undefined") return "light";
    return document.documentElement.getAttribute("data-theme") as "light" | "dark" || "light";
  }, []);

  const getServerSnapshot = useCallback(() => "light", []);

  const subscribe = useCallback((callback: () => void) => {
    const observer = new MutationObserver(callback);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth >= 810) setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("tono-theme", next);
  };

  const navClasses = ["topnav", menuOpen ? "topnav--open" : ""].join(" ");

  return (
    <header className={navClasses}>
      <div className="topnav-inner">
        <div className="nav-top">
          <Link href="/" className="nav-logo" aria-label="A medio tono — inicio" onClick={() => setMenuOpen(false)}>
            <Image
              className="nav-logo-img logo-desktop-wordmark"
              src="/logo-nav-947b682d.svg"
              alt="A medio tono"
              width={1205}
              height={300}
              loading="eager"
              unoptimized
            />
            <Image
              className="nav-logo-img logo-mobile-mark"
              src="/logo-mark-transparent.png"
              alt="A medio tono"
              width={48}
              height={42}
              loading="eager"
            />
          </Link>

          <button
            type="button"
            className="nav-menu-toggle"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-controls="navMenu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>

        <div className="nav-right" id="navMenu">
          <nav className="nav-links" id="navLinks">
            <Link href="/profes" onClick={() => setMenuOpen(false)}>Profes</Link>
            <Link href="/nosotros" onClick={() => setMenuOpen(false)}>Nosotros</Link>
          </nav>
          <Link className="nav-cta" href="/#contacto" onClick={() => setMenuOpen(false)}>
            Contacto
          </Link>
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Cambiar a modo claro"
                : "Cambiar a modo oscuro"
            }
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}
