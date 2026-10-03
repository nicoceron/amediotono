import {useText} from "@/i18n/use-text";
import Image from "next/image";
import Link from "@/i18n/navigation";
import { Mail } from "lucide-react";
import { FooterReveal } from "@/components/FooterReveal";
import {
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  TIKTOK_URL,
  WHATSAPP_DISPLAY,
  whatsappHref,
} from "@/lib/contact";
import { COURSE_PAGES } from "@/lib/course-pages";

// Course links point at instruments with several profes, so their landing
// pages always exist (see COURSE_PAGES in src/lib/course-pages.ts).
const FOOTER_COLUMNS = [
  [
    { href: "/clases", label: "Clases" },
    { href: "/clases-de-musica-online", label: "Clases online" },
    { href: "/clases-de-musica-a-domicilio-bogota", label: "Clases a domicilio" },
    { href: "/preuniversitario-musica", label: "Preuniversitario" },
    { href: "/profes", label: "Profes" },
    { href: "/nosotros", label: "Nosotros" },
  ],
  [
    { href: "/clases/piano", label: "Clases de piano" },
    { href: "/clases/canto", label: "Clases de canto" },
    { href: "/clases/guitarra-acustica", label: "Clases de guitarra" },
    { href: "/clases/violin", label: "Clases de violín" },
    { href: "/clases/iniciacion-musical", label: "Iniciación musical" },
  ],
  [
    { href: "/blog", label: "Blog" },
    { href: "/herramientas", label: "Herramientas gratis" },
    { href: "/acordes", label: "Acordes" },
    { href: "/escalas", label: "Escalas musicales" },
    { href: "/glosario-musical", label: "Glosario musical" },
    { href: "/academias", label: "Para academias" },
    { href: "/trabaja-con-nosotros", label: "Trabaja con nosotros" },
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
    href: TIKTOK_URL,
    label: "TikTok",
    icon: (
      // Simple Icons TikTok mark, matching the existing inline social icons.
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
  {
    href: `mailto:${CONTACT_EMAIL}`,
    label: "Email",
    icon: <Mail size={20} strokeWidth={2.2} aria-hidden="true" />,
  },
];

export function Footer() {
  const tx = useText();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" data-screen-label={tx("Footer")}>
      <div className="footer-shell">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand-social">
              <FooterReveal className="footer-brand-form" delay={0.1}>
                <Link href="/" className="footer-logo-link" aria-label={tx("A medio tono — inicio")} prefetch={false}>
                  <Image
                    src="/logo-nav.webp"
                    alt={tx("A medio tono")}
                    width={1205}
                    height={300}
                    className="footer-logo-img logo-desktop-wordmark"
                    sizes="172px"
                  />
                  <Image
                    src="/logo-mark-transparent.webp"
                    alt={tx("A medio tono")}
                    width={48}
                    height={42}
                    className="footer-logo-img logo-mobile-mark"
                    sizes="48px"
                  />
                </Link>

                <p className="footer-tagline">
                  {tx("Una escuela donde el arte se vive, se siente y se comparte todos los días.")}</p>
              </FooterReveal>

              <FooterReveal className="footer-social-block" delay={0.2}>
                <div className="footer-social-row">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      className="footer-social-btn"
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener" : undefined}
                      aria-label={tx(link.label)}
                      title={tx(link.label)}
                      key={link.label}
                    >
                      {tx(link.icon)}
                    </a>
                  ))}
                </div>
                <a className="footer-direct-link" href={whatsappHref()} target="_blank" rel="noopener">
                  {tx(WHATSAPP_DISPLAY)}
                </a>
                <a className="footer-direct-link" href={`mailto:${CONTACT_EMAIL}`}>
                  {tx(CONTACT_EMAIL)}
                </a>
              </FooterReveal>
            </div>

            <FooterReveal
              as="nav"
              className="footer-menu"
              label="Enlaces del pie de página"
              delay={0.3}
            >
              {FOOTER_COLUMNS.map((column, columnIndex) => (
                <div className="footer-menu-column" key={columnIndex}>
                  {column.map((link) => (
                    <Link className="footer-menu-link" href={link.href} prefetch={false} key={link.label}>
                      <span>{tx(link.label)}</span>
                    </Link>
                  ))}
                </div>
              ))}
            </FooterReveal>
          </div>

          <nav className="footer-courses" aria-label={tx("Clases de música por instrumento")}>
            <p className="footer-courses-title">{tx("Clases de música en Bogotá y virtuales")}</p>
            <ul className="footer-courses-list">
              {COURSE_PAGES.map((page) => (
                <li key={page.path}>
                  <Link href={page.path} prefetch={false}>
                    {tx("Clases de ")}{tx(page.course.label.toLowerCase())}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-bottom">
            <span>{tx("© ")}{tx(year)} {tx(" A medio tono")}</span>
            <span className="footer-credit">
              {tx("Diseño y desarrollo:")}{tx(" ")}
              <a href="https://dardo.studio/es/" target="_blank" rel="noopener">
                {tx("Dardo")}</a>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
