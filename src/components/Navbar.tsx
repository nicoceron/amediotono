"use client";

import { useEffect, useRef, useState, useCallback, useSyncExternalStore } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { gsap } from "@/lib/gsap";

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
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const navRef = useRef<HTMLElement>(null);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      if (currentY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setHidden(false);
      }

      if (delta > 10 && currentY > 200) {
        setHidden(true);
        setOpen(false);
      } else if (delta < -5) {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
      );
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("tono-theme", next);
  };

  const navClasses = [
    "topnav",
    hidden ? "topnav--hidden" : "",
    scrolled ? "topnav--scrolled" : "",
  ].join(" ");

  return (
    <header ref={navRef} className={navClasses} style={{ opacity: 0 }}>
      <div className="container topnav-inner">
        <a href="/" className="nav-logo" aria-label="A medio tono — inicio">
          <span className="a">A</span><span className="half">½</span><span className="t">t</span><span className="o1">o</span><span className="n">n</span><span className="o2">o</span>
        </a>

        <div className="nav-right">
          <nav className={`nav-links${open ? " open" : ""}`} id="navLinks">
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
