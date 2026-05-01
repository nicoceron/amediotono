"use client";

import { useState, useCallback, useSyncExternalStore } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";

function useTheme() {
  const getSnapshot = useCallback(() => {
    if (typeof window === "undefined") return "dark";
    return document.documentElement.getAttribute("data-theme") as "light" | "dark" || "dark";
  }, []);

  const getServerSnapshot = useCallback(() => "dark", []);

  const subscribe = useCallback((callback: () => void) => {
    const observer = new MutationObserver(callback);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("tono-theme", next);
  };

  return (
    <header className="topnav">
      <div className="container topnav-inner">
        <a href="/" className="nav-logo" aria-label="A medio tono — inicio">
          <span className="a">A</span><span className="half">½</span><span className="t">t</span><span className="o1">o</span><span className="n">n</span><span className="o2">o</span>
        </a>

        <div className="nav-right">
          <nav className="nav-links" id="navLinks">
            <Link href="/nosotros" onClick={() => setOpen(false)}>Nosotros</Link>
          </nav>
          <button className="theme-toggle" onClick={toggleTheme} aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}>
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Abrir menú">
            ☰ Menú
          </button>
        </div>
      </div>
    </header>
  );
}