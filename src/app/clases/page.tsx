import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/editorial/Breadcrumbs";
import { CtaBand } from "@/components/editorial/CtaBand";
import { FaqList } from "@/components/editorial/FaqList";
import { JsonLdScript } from "@/components/editorial/JsonLdScript";
import { whatsappHref } from "@/lib/contact";
import { COURSE_FAMILY_ACCENTS, COURSE_PAGES, coursePagesByFamily } from "@/lib/course-pages";
import type { FaqItem } from "@/lib/content-types";
import { TEACHERS } from "@/lib/teachers";
import {
  brandTitle,
  breadcrumbJsonLd,
  coursesItemListJsonLd,
  createPageMetadata,
  faqPageJsonLd,
  webPageJsonLd,
  SITE_CONTENT_UPDATED_AT,
} from "@/lib/seo";
import { shareImage } from "@/lib/share-cards";

const PATH = "/clases";
const TITLE = "Clases de música en Bogotá y virtuales";
const DESCRIPTION =
  "Clases de piano, canto, guitarra, violín, vientos y más, a domicilio en Bogotá o virtuales. Profes evaluados para niños, jóvenes y adultos.";

export const metadata: Metadata = createPageMetadata({
  title: brandTitle(TITLE),
  description: DESCRIPTION,
  path: PATH,
  image: shareImage("clases"),
  keywords: [
    "clases de música en Bogotá",
    "clases de música a domicilio",
    "clases de música virtuales",
    "escuela de música Bogotá",
    "clases de instrumentos",
  ],
});

const HUB_FAQS: FaqItem[] = [
  {
    question: "¿Las clases son individuales o grupales?",
    answer:
      "La mayoría de procesos son clases particulares, uno a uno con tu profe. También acompañamos grupos pequeños, por ejemplo hermanos o amigos que quieren aprender juntos.",
  },
  {
    question: "¿Qué diferencia hay entre clases virtuales y a domicilio?",
    answer:
      "En las clases a domicilio el profe va a tu casa en Bogotá o alrededores; en las virtuales te conectas por videollamada desde donde estés. Te contamos las ventajas de cada una en nuestra [guía para elegir formato](/blog/clases-de-musica-a-domicilio-o-virtuales).",
  },
  {
    question: "¿Cuánto cuestan las clases?",
    answer:
      "El valor depende del formato (virtual o a domicilio), la duración y la frecuencia de las clases. Escríbenos por WhatsApp y te enviamos las opciones que mejor se ajustan a lo que buscas.",
  },
  {
    question: "¿Necesito saber música para empezar?",
    answer:
      "No. Recibimos estudiantes desde cero y también músicos que quieren pulir técnica o prepararse para una audición. Tu profe ajusta la clase a tu nivel desde el primer día.",
  },
];

export default function ClasesPage() {
  const groups = coursePagesByFamily();
  const listItems = COURSE_PAGES.map((page) => ({ ...page.course, href: page.path }));
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Clases", path: PATH },
  ];

  return (
    <>
      <JsonLdScript
        nodes={[
          webPageJsonLd({
            path: PATH,
            type: "CollectionPage",
            name: TITLE,
            description: DESCRIPTION,
            dateModified: SITE_CONTENT_UPDATED_AT,
          }),
          breadcrumbJsonLd(crumbs),
          coursesItemListJsonLd(listItems, PATH),
          faqPageJsonLd(HUB_FAQS, PATH),
        ]}
      />

      <section className="block ed-page" data-screen-label="Clases">
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <header className="ed-hero ed-hero--center">
            <div className="ed-hero-copy">
              <span className="ed-eyebrow">{COURSE_PAGES.length} instrumentos · {TEACHERS.length} profes</span>
              <h1>{TITLE}</h1>
              <p className="ed-lead">
                Elige tu instrumento y conoce a los profes que lo enseñan. Clases a domicilio en
                Bogotá y alrededores o virtuales desde cualquier lugar, para todas las edades y
                niveles.
              </p>
              <div className="ed-actions">
                <a
                  className="ed-button"
                  href={whatsappHref("¡Hola! Quiero ayuda para elegir clases de música.")}
                  target="_blank"
                  rel="noopener"
                >
                  <MessageCircle size={20} strokeWidth={2.4} aria-hidden="true" />
                  Ayúdame a elegir
                </a>
                <Link className="ed-button ed-button--ghost" href="/profes" prefetch={false}>
                  Ver todos los profes
                </Link>
              </div>
            </div>
          </header>

          {groups.map((group) => (
            <section
              className="ed-family"
              key={group.family}
              aria-labelledby={`familia-${group.family}`}
              style={{ ["--ed-accent" as string]: COURSE_FAMILY_ACCENTS[group.family] }}
            >
              <h2 className="ed-h2 ed-family-title" id={`familia-${group.family}`}>
                {group.label}
              </h2>
              <ul className="ed-related-courses">
                {group.pages.map((page) => (
                  <li key={page.course.id}>
                    <Link className="course-card" href={page.path} prefetch={false}>
                      <span className="course-icon" aria-hidden="true">
                        <Image src={page.course.icon} alt="" width={64} height={64} />
                      </span>
                      <span className="course-copy">
                        <span className="course-name">{page.course.label}</span>
                        <span className="course-count">
                          {page.guide.startingAge} · {page.teachers.length}{" "}
                          {page.teachers.length === 1 ? "profe" : "profes"}
                        </span>
                      </span>
                      <ArrowRight className="course-arrow" size={24} strokeWidth={2.4} aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <section className="block ed-section nosotros-faq-section" id="preguntas-frecuentes">
        <div className="container">
          <div className="sec-head ed-sec-head">
            <h2>Preguntas frecuentes</h2>
          </div>
          <FaqList items={HUB_FAQS} />
        </div>
      </section>

      <CtaBand
        title="¿No sabes qué instrumento elegir?"
        text="Cuéntanos la edad, los gustos musicales y el tiempo disponible. Te ayudamos a elegir instrumento y profe."
        primary={{
          href: whatsappHref("¡Hola! Quiero ayuda para elegir instrumento."),
          label: "Escribir por WhatsApp",
          external: true,
        }}
        secondary={{ href: "/blog/piano-o-guitarra-primer-instrumento", label: "Leer la guía para elegir instrumento" }}
      />
      <Footer />
    </>
  );
}
