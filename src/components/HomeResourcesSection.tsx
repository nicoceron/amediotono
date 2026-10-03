import {useText} from "@/i18n/use-text";
import Link from "@/i18n/navigation";
import { BrandWordmark } from "@/components/BrandWordmark";
import {
  ArrowRight,
  BookOpen,
  CircleDot,
  GraduationCap,
  Guitar,
  House,
  Library,
  MonitorSmartphone,
  Piano,
  Timer,
} from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog";
import { TOOLS_PATH } from "@/lib/music-tools";
import { CHORDS_PATH, CIRCLE_OF_FIFTHS_PATH, SCALES_PATH } from "@/lib/music-pages";
import { CHORDS } from "@/lib/music-theory";

const RESOURCES = [
  {
    href: "/clases-de-musica-online",
    title: "Clases online",
    body: "En vivo por videollamada, desde cualquier ciudad de Colombia.",
    icon: MonitorSmartphone,
    accent: "var(--blue)",
  },
  {
    href: "/clases-de-musica-a-domicilio-bogota",
    title: "Clases a domicilio",
    body: "Tu profe va a tu casa en Bogotá y alrededores.",
    icon: House,
    accent: "var(--orange)",
  },
  {
    href: "/preuniversitario-musica",
    title: "Preuniversitario de música",
    body: "Teoría, solfeo, dictado e instrumento para tu prueba de admisión.",
    icon: GraduationCap,
    accent: "var(--green)",
  },
  {
    href: TOOLS_PATH,
    title: "Herramientas gratis",
    body: "Metrónomo, afinador, test de voz y entrenamiento auditivo.",
    icon: Timer,
    accent: "var(--pink)",
  },
  {
    href: "/blog",
    title: "Blog de música",
    body: `${BLOG_POSTS.length} guías: edades, instrumentos, técnica y cuidado.`,
    icon: BookOpen,
    accent: "var(--blue)",
  },
  {
    href: "/glosario-musical",
    title: "Glosario musical",
    body: "Los términos de la música explicados en palabras sencillas.",
    icon: Library,
    accent: "var(--orange)",
  },
  {
    href: CHORDS_PATH,
    title: "Acordes",
    body: `${CHORDS.length} acordes con diagramas para guitarra, piano y ukelele.`,
    icon: Guitar,
    accent: "var(--green)",
  },
  {
    href: SCALES_PATH,
    title: "Escalas musicales",
    body: "Mayores, menores, pentatónicas y blues, con teclado, mástil y sonido.",
    icon: Piano,
    accent: "var(--pink)",
  },
  {
    href: CIRCLE_OF_FIFTHS_PATH,
    title: "Círculo de quintas",
    body: "Armaduras, relativas y acordes de cada tonalidad, interactivo.",
    icon: CircleDot,
    accent: "var(--blue)",
  },
];

export function HomeResourcesSection() {
  const tx = useText();
  return (
    <section className="block ed-section home-resources" aria-labelledby="explora-title">
      <div className="container">
        <div className="sec-head ed-sec-head">
          <h2 id="explora-title">
            {tx("Explora ")}<BrandWordmark />
          </h2>
          <p className="sec-sub">{tx("Más formas de aprender, practicar y prepararte con nosotros.")}</p>
        </div>
        <ul className="b2b-service-grid home-resources-grid">
          {RESOURCES.map((resource) => {
            const Icon = resource.icon;
            return (
              <li key={resource.href}>
                <Link
                  className="b2b-service-card"
                  href={resource.href}
                  prefetch={false}
                  style={{ ["--ed-accent" as string]: resource.accent }}
                >
                  <span className="b2b-service-icon" aria-hidden="true">
                    <Icon size={26} strokeWidth={2.4} />
                  </span>
                  <h3>{tx(resource.title)}</h3>
                  <p>{tx(resource.body)}</p>
                  <span className="b2b-service-more">
                    {tx("Ver más ")}<ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
