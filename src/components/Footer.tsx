"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import {
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  WHATSAPP_DISPLAY,
  whatsappHref,
} from "@/lib/contact";

const FOOTER_COLUMNS = [
  [
    { href: "/", label: "Inicio" },
    { href: "/#cursos", label: "Cursos" },
    { href: "/profes", label: "Profes" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/#testimonios", label: "Voces" },
  ],
  [
    { href: "/#contacto", label: "Contacto" },
    { href: "/#como-funciona", label: "Cómo funciona" },
    { href: "/trabaja-con-nosotros", label: "Trabaja con nosotros" },
    { href: whatsappHref(), label: "WhatsApp", external: true },
    { href: INSTAGRAM_URL, label: "Instagram", external: true },
  ],
];

const SOCIAL_LINKS = [
  {
    href: whatsappHref(),
    label: "WhatsApp",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
        <path d="M20.52 3.48A11.94 11.94 0 0 0 12.04 0C5.48 0 .15 5.33.15 11.89c0 2.1.55 4.14 1.6 5.94L.05 24l6.34-1.66a11.86 11.86 0 0 0 5.65 1.43h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.17-3.42-8.4ZM12.05 21.4h-.01a9.5 9.5 0 0 1-4.84-1.32l-.35-.21-3.76.99 1-3.66-.23-.38a9.49 9.49 0 0 1-1.45-5.04c0-5.25 4.27-9.51 9.52-9.51 2.54 0 4.93.99 6.73 2.79a9.46 9.46 0 0 1 2.78 6.73c0 5.25-4.27 9.51-9.5 9.51Zm5.5-7.13c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.68-2.09-.18-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.63-.93-2.23-.24-.59-.49-.51-.68-.52l-.58-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.2-.57-.35Z" />
      </svg>
    ),
  },
  {
    href: INSTAGRAM_URL,
    label: "Instagram",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="20"
        height="20"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: `mailto:${CONTACT_EMAIL}`,
    label: "Email",
    icon: <Mail size={20} strokeWidth={2.2} aria-hidden="true" />,
  },
];

const FOOTER_REVEAL_INITIAL = { opacity: 0, y: 42 };
const footerRevealTransition = (delay: number) => ({
  damping: 48,
  delay,
  mass: 1,
  stiffness: 420,
  type: "spring" as const,
});

export function Footer() {
  const reduce = useReducedMotion();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" data-screen-label="Footer">
      <div className="footer-shell">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand-social">
              <motion.div
                className="footer-brand-form"
                initial={reduce ? false : FOOTER_REVEAL_INITIAL}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={footerRevealTransition(0.1)}
              >
                <Link href="/" className="footer-logo-link" aria-label="A medio tono — inicio">
                  <Image
                    src="/logo-nav.webp"
                    alt="A medio tono"
                    width={1205}
                    height={300}
                    className="footer-logo-img logo-desktop-wordmark"
                    sizes="172px"
                  />
                  <Image
                    src="/logo-mark-transparent.webp"
                    alt="A medio tono"
                    width={48}
                    height={42}
                    className="footer-logo-img logo-mobile-mark"
                    sizes="48px"
                  />
                </Link>

                <p className="footer-tagline">
                  Una escuela donde el arte se vive, se siente y se comparte todos los días.
                </p>
              </motion.div>

              <motion.div
                className="footer-social-block"
                initial={reduce ? false : FOOTER_REVEAL_INITIAL}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={footerRevealTransition(0.2)}
              >
                <div className="footer-social-row">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      className="footer-social-btn"
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener" : undefined}
                      aria-label={link.label}
                      title={link.label}
                      key={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
                <a className="footer-direct-link" href={whatsappHref()} target="_blank" rel="noopener">
                  {WHATSAPP_DISPLAY}
                </a>
                <a className="footer-direct-link" href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </a>
              </motion.div>
            </div>

            <motion.nav
              className="footer-menu"
              aria-label="Enlaces del pie de página"
              initial={reduce ? false : FOOTER_REVEAL_INITIAL}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={footerRevealTransition(0.3)}
            >
              {FOOTER_COLUMNS.map((column, columnIndex) => (
                <div className="footer-menu-column" key={columnIndex}>
                  {column.map((link) =>
                    link.external ? (
                      <a
                        className="footer-menu-link"
                        href={link.href}
                        target="_blank"
                        rel="noopener"
                        key={link.label}
                      >
                        <span>{link.label}</span>
                      </a>
                    ) : (
                      <Link className="footer-menu-link" href={link.href} key={link.label}>
                        <span>{link.label}</span>
                      </Link>
                    ),
                  )}
                </div>
              ))}
            </motion.nav>
          </div>

          <div className="footer-bottom">
            <span>© {year} A medio tono</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
