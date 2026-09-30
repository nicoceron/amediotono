import type { Metadata } from "next";
import Link from "next/link";
import { ErrorPageState } from "@/components/ErrorPageState";

export const metadata: Metadata = {
  title: "Página no encontrada | A medio tono",
  description: "La página que buscas no existe o cambió de dirección.",
  robots: {
    index: false,
    follow: false,
  },
};

const POPULAR_LINKS = [
  { href: "/clases/piano", label: "Clases de piano" },
  { href: "/clases/canto", label: "Clases de canto" },
  { href: "/clases/guitarra-acustica", label: "Clases de guitarra" },
  { href: "/clases/violin", label: "Clases de violín" },
  { href: "/clases-de-musica-online", label: "Clases online" },
  { href: "/clases-de-musica-a-domicilio-bogota", label: "Clases a domicilio" },
  { href: "/blog", label: "Blog de música" },
  { href: "/herramientas", label: "Herramientas gratis" },
];

export default function NotFound() {
  return (
    <ErrorPageState
      status="404"
      title="Esta página se salió del compás."
      description="Puede que el enlace haya cambiado o ya no exista. Puedes volver al inicio o encontrar una clase."
      actions={[
        { href: "/", label: "Inicio", icon: "home" },
        { href: "/clases", label: "Ver clases", icon: "music", variant: "secondary" },
        { href: "/profes", label: "Profes", icon: "users", variant: "secondary" },
      ]}
    >
      <nav className="error-page-links" aria-label="Páginas populares">
        <p>Lo más buscado</p>
        <ul>
          {POPULAR_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} prefetch={false}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </ErrorPageState>
  );
}
