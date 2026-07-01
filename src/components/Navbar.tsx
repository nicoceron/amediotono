"use client";

import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const SMOOTH_SCROLL_TO_EVENT = "mediotono:smooth-scroll-to";
const PENDING_SCROLL_TARGET_KEY = "mediotono:pending-scroll-target";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

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

  useEffect(() => {
    router.prefetch("/profes");
  }, [router]);

  const handleContactClick = (event: MouseEvent<HTMLAnchorElement>) => {
    setMenuOpen(false);

    if (typeof window === "undefined") return;

    event.preventDefault();

    if (pathname !== "/") {
      window.sessionStorage.setItem(PENDING_SCROLL_TARGET_KEY, "#contacto");
      router.push("/#contacto", { scroll: false });
      return;
    }

    window.history.pushState(null, "", "/#contacto");
    window.dispatchEvent(
      new CustomEvent(SMOOTH_SCROLL_TO_EVENT, {
        detail: { hash: "#contacto" },
      }),
    );
  };

  const navClasses = ["topnav", menuOpen ? "topnav--open" : ""].join(" ");

  return (
    <header className={navClasses}>
      <div className="topnav-inner">
        <div className="nav-top">
          <Link href="/" className="nav-logo" aria-label="A medio tono — inicio" onClick={() => setMenuOpen(false)}>
            <Image
              className="nav-logo-img logo-desktop-wordmark"
              src="/logo-nav.webp"
              alt="A medio tono"
              width={1205}
              height={300}
              sizes="136px"
            />
            <Image
              className="nav-logo-img logo-mobile-mark"
              src="/logo-mark-transparent.webp"
              alt="A medio tono"
              width={48}
              height={42}
              sizes="48px"
            />
          </Link>

          <div className="nav-mobile-actions">
            <Link
              href="/profes"
              className="nav-mobile-profes"
              prefetch={true}
              onClick={() => setMenuOpen(false)}
            >
              Profes
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
        </div>

        <div className="nav-right" id="navMenu">
          <nav className="nav-links" id="navLinks">
            <Link
              href="/profes"
              className="nav-link-profes"
              prefetch={true}
              onClick={() => setMenuOpen(false)}
            >
              Profes
            </Link>
            <Link href="/nosotros" onClick={() => setMenuOpen(false)}>Nosotros</Link>
          </nav>
          <Link className="nav-cta" href="/#contacto" scroll={false} onClick={handleContactClick}>
            Contacto
          </Link>
        </div>
      </div>
    </header>
  );
}
