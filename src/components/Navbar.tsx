"use client";
import {LanguagePicker} from "@/components/LanguagePicker";
import {useLocale} from "next-intl";
import {localizedPath} from "@/i18n/routing";
import {useText} from "@/i18n/use-text";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {ChevronDown} from "lucide-react";

import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import Image from "next/image";
import Link from "@/i18n/navigation";
import {useLinkStatus} from "next/link";
import navLogo from "../../public/logo-nav.webp";
import mobileLogo from "../../public/logo-mark-transparent.webp";
import { usePathname, useRouter } from "@/i18n/navigation";

const SMOOTH_SCROLL_TO_EVENT = "mediotono:smooth-scroll-to";
const PENDING_SCROLL_TARGET_KEY = "mediotono:pending-scroll-target";

function NavigationLabel({ children }: { children: React.ReactNode }) {
  const { pending } = useLinkStatus();

  return (
    <span className="nav-link-label" data-pending={pending || undefined} aria-busy={pending}>
      {children}
    </span>
  );
}

export function Navbar() {
  const tx = useText();
  const locale = useLocale();
  const homePath = localizedPath("/", locale);
  const [menuOpen, setMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !event.defaultPrevented) setMenuOpen(false);
    };

    const handleResize = () => {
      setResourcesOpen(false);
      if (window.innerWidth >= 810) setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleContactClick = (event: MouseEvent<HTMLAnchorElement>) => {
    setMenuOpen(false);

    if (typeof window === "undefined") return;

    event.preventDefault();

    if (pathname !== "/") {
      window.sessionStorage.setItem(PENDING_SCROLL_TARGET_KEY, "#contacto");
      router.push("/#contacto", { scroll: false });
      return;
    }

    window.history.pushState(null, "", `${homePath}#contacto`);
    window.dispatchEvent(
      new CustomEvent(SMOOTH_SCROLL_TO_EVENT, {
        detail: { hash: "#contacto" },
      }),
    );
  };

  const handleHomeClick = (event: MouseEvent<HTMLAnchorElement>) => {
    setMenuOpen(false);

    if (typeof window === "undefined") return;

    event.preventDefault();
    window.sessionStorage.removeItem(PENDING_SCROLL_TARGET_KEY);

    if (pathname !== "/") {
      window.sessionStorage.setItem(PENDING_SCROLL_TARGET_KEY, "#top");
      router.replace("/", { scroll: false });
      return;
    }

    if (pathname !== "/" || window.location.search || window.location.hash) {
      window.history.replaceState(null, "", homePath);
    }

    window.dispatchEvent(
      new CustomEvent(SMOOTH_SCROLL_TO_EVENT, {
        detail: { hash: "#top" },
      }),
    );
  };

  const navClasses = ["topnav", menuOpen ? "topnav--open" : ""].join(" ");

  return (
    <header className={navClasses}>
      <div className="topnav-inner">
        <div className="nav-top">
          <Link
            href="/"
            className="nav-logo"
            aria-label={tx("A medio tono — inicio")}
            replace
            scroll={false}
            onClick={handleHomeClick}
          >
            <Image
              className="nav-logo-img logo-desktop-wordmark"
              src={navLogo}
              alt={tx("A medio tono")}
              width={1205}
              height={300}
              sizes="136px"
              fetchPriority="high"
            />
            <Image
              className="nav-logo-img logo-mobile-mark"
              src={mobileLogo}
              alt={tx("A medio tono")}
              width={48}
              height={42}
              sizes="48px"
              fetchPriority="high"
            />
          </Link>

          <div className="nav-mobile-actions">
            <Link
              href="/profes"
              className="nav-mobile-profes"
              prefetch={true}
              onClick={() => setMenuOpen(false)}
            >
              <NavigationLabel>{tx("Profes")}</NavigationLabel></Link>

            <button
              type="button"
              className="nav-menu-toggle"
              aria-label={tx(menuOpen ? "Cerrar menú" : "Abrir menú")}
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
              <NavigationLabel>{tx("Profes")}</NavigationLabel></Link>
            <Link href="/academias" prefetch={true} onClick={() => setMenuOpen(false)}><NavigationLabel>{tx("Academias")}</NavigationLabel></Link>
            <DropdownMenu.Root modal={false} open={resourcesOpen} onOpenChange={setResourcesOpen}>
              <DropdownMenu.Trigger asChild>
                <button type="button" className="nav-resources-trigger">
                  {tx("Recursos")} <ChevronDown size={14} aria-hidden="true" />
                </button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content className="nav-dropdown-menu resources-menu" align="center" sideOffset={8} collisionPadding={12} loop data-lenis-prevent>
                  <DropdownMenu.Item asChild>
                    <Link className="nav-dropdown-item" href="/clases" prefetch={true} onClick={() => setMenuOpen(false)}>
                      <NavigationLabel>{tx("Clases")}</NavigationLabel>
                    </Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item asChild>
                    <Link className="nav-dropdown-item" href="/blog" prefetch={true} onClick={() => setMenuOpen(false)}>
                      <NavigationLabel>{tx("Blog")}</NavigationLabel>
                    </Link>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
            <Link href="/nosotros" prefetch={true} onClick={() => setMenuOpen(false)}><NavigationLabel>{tx("Nosotros")}</NavigationLabel></Link>
          </nav>
          <LanguagePicker />
          <Link className="nav-cta" href="/#contacto" scroll={false} onClick={handleContactClick}>
            {tx("Contacto")}</Link>
        </div>
      </div>
    </header>
  );
}
