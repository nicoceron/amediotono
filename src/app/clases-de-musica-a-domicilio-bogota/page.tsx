import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  House,
  MessageCircle,
  Music2,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { plainText } from "@/components/RichText";
import { Breadcrumbs } from "@/components/editorial/Breadcrumbs";
import { CtaBand } from "@/components/editorial/CtaBand";
import { FaqList } from "@/components/editorial/FaqList";
import { JsonLdScript } from "@/components/editorial/JsonLdScript";
import { getPost, postPath } from "@/lib/blog";
import type { BlogPost, FaqItem } from "@/lib/content-types";
import { whatsappHref } from "@/lib/contact";
import { COURSE_PAGES } from "@/lib/course-pages";
import { TEACHERS } from "@/lib/teachers";
import {
  absoluteUrl,
  brandTitle,
  breadcrumbJsonLd,
  createPageMetadata,
  faqPageJsonLd,
  webPageJsonLd,
  SITE_CONTENT_UPDATED_AT,
} from "@/lib/seo";
import { shareImage } from "@/lib/share-cards";

const PATH = "/clases-de-musica-a-domicilio-bogota";
const TITLE = "Clases de música a domicilio en Bogotá";
const DESCRIPTION =
  "Clases de música a domicilio en Bogotá: piano, canto, guitarra, violín, batería y más, con profes evaluados que van a tu casa. Para niños, jóvenes y adultos.";

export const metadata: Metadata = createPageMetadata({
  title: brandTitle("Clases de música a domicilio en Bogotá"),
  description: DESCRIPTION,
  path: PATH,
  image: shareImage("clases-de-musica-a-domicilio-bogota"),
  keywords: [
    "clases de música a domicilio Bogotá",
    "clases de piano a domicilio Bogotá",
    "clases de guitarra a domicilio Bogotá",
    "clases de canto a domicilio",
    "profesor de música a domicilio",
  ],
});

const BENEFITS = [
  {
    icon: House,
    title: "En tu casa, con tu instrumento",
    body: "Aprendes en el piano, la guitarra o la batería con los que vas a practicar toda la semana.",
  },
  {
    icon: CalendarCheck,
    title: "Sin trancones de tu lado",
    body: "El profe llega a tu casa: tú no pierdes tiempo en desplazamientos ni en esperas.",
  },
  {
    icon: UsersRound,
    title: "Ideal para niños y familias",
    body: "Los niños aprenden en un entorno conocido y los papás pueden ver cómo avanza la clase.",
  },
  {
    icon: ShieldCheck,
    title: "Profes evaluados",
    body: "Cada profe pasa por una evaluación musical, pedagógica y de perfil antes de dar clases.",
  },
];

const STEPS = [
  {
    title: "Nos escribes",
    body: "Por WhatsApp nos cuentas el instrumento, la edad del estudiante, tu barrio y los horarios que te sirven.",
  },
  {
    title: "Te recomendamos profe",
    body: "Te proponemos el profe que mejor encaja con tus objetivos y su disponibilidad en tu zona.",
  },
  {
    title: "Empiezan las clases",
    body: "Acordamos día y hora fijos, y el profe llega a tu casa con el plan de la primera clase.",
  },
];

const FAQS: FaqItem[] = [
  {
    question: "¿A qué zonas de Bogotá van los profes?",
    answer:
      "Damos clases a domicilio en Bogotá y alrededores. La cobertura depende del barrio y de la disponibilidad de cada profe, así que escríbenos con tu dirección aproximada y te confirmamos.",
  },
  {
    question: "¿Necesito tener el instrumento en casa?",
    answer:
      "Para piano o batería, sí: el profe no puede llevarlos. Para guitarra, violín o vientos también conviene tener el tuyo para practicar entre clases. Si aún no lo tienes, te orientamos: mira [cómo elegir tu primer piano o teclado](/blog/como-elegir-tu-primer-piano-o-teclado) o [tu primera guitarra acústica](/blog/como-elegir-tu-primera-guitarra-acustica).",
  },
  {
    question: "¿Las clases a domicilio sirven para niños pequeños?",
    answer:
      "Sí. Para los más pequeños recomendamos empezar con [iniciación musical](/clases/iniciacion-musical), una clase de juego, ritmo y canto que se adapta muy bien a la casa.",
  },
  {
    question: "¿Puedo combinar clases a domicilio y virtuales?",
    answer:
      "Sí. Muchas familias alternan según la semana, por ejemplo cuando hay viajes o días de lluvia. Lo explicamos en [clases híbridas](/blog/clases-de-musica-hibridas-virtual-y-presencial).",
  },
  {
    question: "¿Cuánto cuestan las clases a domicilio?",
    answer:
      "El valor depende de la duración, la frecuencia y la zona. Escríbenos por WhatsApp y te enviamos las opciones.",
  },
];

const GUIDES = [
  "clases-de-musica-a-domicilio-que-esperar",
  "clases-de-musica-a-domicilio-o-virtuales",
  "clases-de-musica-hibridas-virtual-y-presencial",
  "como-elegir-profesor-de-musica",
];

export default function HomeClassesPage() {
  const homeTeachers = TEACHERS.filter((teacher) => teacher.classFormats?.includes("A domicilio"));
  const guides = GUIDES.map((slug) => getPost(slug)).filter((post): post is BlogPost => Boolean(post));
  const waUrl = whatsappHref("¡Hola! Quiero información sobre clases de música a domicilio en Bogotá.");
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Clases a domicilio en Bogotá", path: PATH },
  ];

  return (
    <>
      <JsonLdScript
        nodes={[
          webPageJsonLd({
            path: PATH,
            name: TITLE,
            description: DESCRIPTION,
            dateModified: SITE_CONTENT_UPDATED_AT,
            about: { "@id": `${absoluteUrl(PATH)}#service` },
          }),
          breadcrumbJsonLd(crumbs),
          {
            "@type": "Service",
            "@id": `${absoluteUrl(PATH)}#service`,
            name: "Clases de música a domicilio en Bogotá",
            serviceType: "Clases de música a domicilio",
            description: DESCRIPTION,
            url: absoluteUrl(PATH),
            provider: { "@id": absoluteUrl("/#organization") },
            areaServed: { "@type": "City", name: "Bogotá", containedInPlace: { "@type": "Country", name: "Colombia" } },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Instrumentos disponibles a domicilio",
              itemListElement: COURSE_PAGES.map((page) => ({
                "@type": "Offer",
                itemOffered: { "@id": `${absoluteUrl(page.path)}#service` },
              })),
            },
          },
          faqPageJsonLd(FAQS.map((faq) => ({ question: faq.question, answer: plainText(faq.answer) })), PATH),
        ]}
      />

      <section className="block ed-page" style={{ ["--ed-accent" as string]: "var(--orange)" }}>
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <header className="ed-hero ed-hero--center">
            <div className="ed-hero-copy">
              <span className="ed-eyebrow">
                {homeTeachers.length} profes · {COURSE_PAGES.length} instrumentos · Bogotá
              </span>
              <h1>{TITLE}</h1>
              <p className="ed-lead">
                Un profe de música evaluado va a tu casa en Bogotá y alrededores. Piano, canto,
                guitarra, violín, batería, vientos e iniciación musical para niños, jóvenes y adultos.
              </p>
              <div className="ed-actions">
                <a className="ed-button" href={waUrl} target="_blank" rel="noopener">
                  <MessageCircle size={20} strokeWidth={2.4} aria-hidden="true" />
                  Quiero clases a domicilio
                </a>
                <Link className="ed-button ed-button--ghost" href="/profes?formato=A%20domicilio" prefetch={false}>
                  Ver profes
                </Link>
              </div>
            </div>
          </header>
        </div>
      </section>

      <section className="block ed-section" style={{ ["--ed-accent" as string]: "var(--orange)" }}>
        <div className="container">
          <div className="sec-head ed-sec-head">
            <h2>Por qué elegir clases a domicilio</h2>
          </div>
          <ul className="ed-benefit-grid ed-benefit-grid--4">
            {BENEFITS.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <li className="ed-benefit ed-benefit--stacked about-criterion" key={benefit.title}>
                  <Icon size={26} strokeWidth={2.4} aria-hidden="true" />
                  <h3 className="ed-h3">{benefit.title}</h3>
                  <p>{benefit.body}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="block ed-section">
        <div className="container">
          <div className="sec-head ed-sec-head">
            <h2>Instrumentos que puedes aprender en casa</h2>
          </div>
          <ul className="ed-related-courses">
            {COURSE_PAGES.map((page) => (
              <li key={page.course.id}>
                <Link className="course-card" href={page.path} prefetch={false}>
                  <span className="course-icon" aria-hidden="true">
                    <Image src={page.course.icon} alt="" width={64} height={64} />
                  </span>
                  <span className="course-copy">
                    <span className="course-name">{page.course.label}</span>
                    <span className="course-count">
                      {page.teachers.length} {page.teachers.length === 1 ? "profe" : "profes"}
                    </span>
                  </span>
                  <ArrowRight className="course-arrow" size={24} strokeWidth={2.4} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="block ed-section" style={{ ["--ed-accent" as string]: "var(--green)" }}>
        <div className="container">
          <div className="sec-head ed-sec-head">
            <h2>Cómo empezar</h2>
          </div>
          <ol className="ed-benefit-grid ed-benefit-grid--3">
            {STEPS.map((step, index) => (
              <li className="ed-benefit" key={step.title}>
                <Music2 size={22} strokeWidth={2.4} aria-hidden="true" />
                <div>
                  <h3 className="ed-h3">
                    {index + 1}. {step.title}
                  </h3>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          {guides.length > 0 && (
            <div className="ed-related">
              <h2 className="ed-h2">Guías sobre clases a domicilio</h2>
              <ul className="ed-link-list">
                {guides.map((post) => (
                  <li key={post.slug}>
                    <Link href={postPath(post.slug)} prefetch={false}>
                      <strong>{post.title}</strong>
                      <span>{post.excerpt}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="block ed-section nosotros-faq-section" id="preguntas-frecuentes">
        <div className="container">
          <div className="sec-head ed-sec-head">
            <h2>Preguntas frecuentes</h2>
          </div>
          <FaqList items={FAQS} />
          <p className="ed-note">
            ¿No vives en Bogotá? Toma tus clases en vivo por videollamada:{" "}
            <Link href="/clases-de-musica-online" prefetch={false}>
              clases de música online
            </Link>
            .
          </p>
        </div>
      </section>

      <CtaBand
        title="Tu profe de música puede llegar a tu casa"
        text="Cuéntanos el instrumento, la edad del estudiante y tu barrio. Te recomendamos el profe ideal."
        primary={{ href: waUrl, label: "Escribir por WhatsApp", external: true }}
        secondary={{ href: "/clases", label: "Ver todas las clases" }}
      />
      <Footer />
    </>
  );
}
