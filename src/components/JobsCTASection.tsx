import {useText} from "@/i18n/use-text";
import Link from "@/i18n/navigation";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const HIGHLIGHTS = [
  "Conecta con estudiantes nuevos",
  "Acompaña procesos creativos",
  "Crece con una escuela cercana",
];

export function JobsCTASection() {
  const tx = useText();
  return (
    <section className="block jobs-cta-section" id="trabaja-con-nosotros" data-screen-label={tx("Trabaja con nosotros")}>
      <div className="container">
        <article className="jobs-cta-card">
          <div className="jobs-cta-photo" aria-hidden="true">
            <Image
              className="jobs-cta-portrait"
              src="/jobs/profesora-estudiante.webp"
              alt={tx("")}
              fill
              fetchPriority="low"
              loading="lazy"
              sizes="(max-width: 900px) 100vw, 46vw"
            />
          </div>

          <div className="jobs-cta-copy">
            <h2>{tx("Trabaja como profe")}</h2>
            <p className="jobs-cta-text">
              {tx("Buscamos profes de música que disfruten enseñar, escuchar y construir procesos reales con cada estudiante.")}</p>

            <ul className="jobs-cta-list" aria-label={tx("Beneficios para profesores")}>
              {HIGHLIGHTS.map((item) => (
                <li key={item}>
                  <CheckCircle2 aria-hidden="true" size={22} strokeWidth={2.7} />
                  <span>{tx(item)}</span>
                </li>
              ))}
            </ul>

            <Link className="jobs-cta-button" href="/trabaja-con-nosotros" prefetch={false}>
              {tx("Aplicar como profe")}<ArrowRight aria-hidden="true" size={22} strokeWidth={2.7} />
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
