import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, MonitorSmartphone, Timer } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog";
import { TOOLS_PATH } from "@/lib/music-tools";

const RESOURCES = [
  {
    href: "/clases-de-musica-online",
    title: "Clases online",
    body: "En vivo por videollamada, desde cualquier ciudad de Colombia.",
    icon: MonitorSmartphone,
    accent: "var(--blue)",
  },
  {
    href: "/preuniversitario-musica",
    title: "Preuniversitario de música",
    body: "Teoría, solfeo, dictado e instrumento para tu prueba de admisión.",
    icon: GraduationCap,
    accent: "var(--orange)",
  },
  {
    href: TOOLS_PATH,
    title: "Metrónomo y afinador",
    body: "Herramientas gratis para practicar desde el celular.",
    icon: Timer,
    accent: "var(--green)",
  },
  {
    href: "/blog",
    title: "Blog de música",
    body: `${BLOG_POSTS.length} guías: edades, instrumentos, técnica y cuidado.`,
    icon: BookOpen,
    accent: "var(--pink)",
  },
];

export function HomeResourcesSection() {
  return (
    <section className="block ed-section home-resources" aria-labelledby="explora-title">
      <div className="container">
        <div className="sec-head ed-sec-head">
          <h2 id="explora-title">Explora A ½ tono</h2>
          <p className="sec-sub">Más formas de aprender, practicar y prepararte con nosotros.</p>
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
                  <h3>{resource.title}</h3>
                  <p>{resource.body}</p>
                  <span className="b2b-service-more">
                    Ver más <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
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
