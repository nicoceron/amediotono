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
import { HOME_CLASSES_PAGE } from "@/content/service-pages";
import { getPost, postPath } from "@/lib/blog";
import type { BlogPost } from "@/lib/content-types";
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

const PAGE = HOME_CLASSES_PAGE;
const PATH = PAGE.path;
const TITLE = PAGE.title;
const DESCRIPTION = PAGE.description;
const [BENEFITS_SECTION, STEPS_SECTION] = PAGE.sections;
const BENEFIT_ICONS = [House, CalendarCheck, UsersRound, ShieldCheck];

export const metadata: Metadata = createPageMetadata({
  title: brandTitle("Clases de música a domicilio en Bogotá"),
  description: DESCRIPTION,
  path: PATH,
  markdownPath: `${PATH}.md`,
  image: shareImage("clases-de-musica-a-domicilio-bogota"),
  keywords: [
    "clases de música a domicilio Bogotá",
    "clases de piano a domicilio Bogotá",
    "clases de guitarra a domicilio Bogotá",
    "clases de canto a domicilio",
    "profesor de música a domicilio",
  ],
});

export default function HomeClassesPage() {
  const homeTeachers = TEACHERS.filter((teacher) => teacher.classFormats?.includes("A domicilio"));
  const guides = PAGE.guides.map((slug) => getPost(slug)).filter((post): post is BlogPost => Boolean(post));
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
          faqPageJsonLd(PAGE.faqs.map((faq) => ({ question: faq.question, answer: plainText(faq.answer) })), PATH),
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
              <p className="ed-lead">{PAGE.lead}</p>
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
            <h2>{BENEFITS_SECTION.heading}</h2>
          </div>
          <ul className="ed-benefit-grid ed-benefit-grid--4">
            {BENEFITS_SECTION.points.map((benefit, index) => {
              const Icon = BENEFIT_ICONS[index] ?? House;
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

      <section className="block ed-section" id="profes">
        <div className="container">
          <div className="sec-head ed-sec-head">
            <h2>Profes que van a tu casa</h2>
            <p className="sec-sub">
              Estos {homeTeachers.length} profes dan clases a domicilio en Bogotá. Entra a su
              perfil para ver su experiencia, sus instrumentos y las opiniones de sus estudiantes.
            </p>
          </div>
          <ul className="ed-chip-list ed-chip-list--center">
            {homeTeachers.map((teacher) => (
              <li key={teacher.slug}>
                <Link href={`/profes/${teacher.slug}`} prefetch={false}>
                  <Image
                    className="ed-chip-photo"
                    src={teacher.photo}
                    alt=""
                    width={28}
                    height={28}
                  />
                  {teacher.name} · {teacher.role}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="block ed-section" style={{ ["--ed-accent" as string]: "var(--green)" }}>
        <div className="container">
          <div className="sec-head ed-sec-head">
            <h2>{STEPS_SECTION.heading}</h2>
          </div>
          <ol className="ed-benefit-grid ed-benefit-grid--3">
            {STEPS_SECTION.points.map((step, index) => (
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
              <h2 className="ed-h2">{PAGE.guidesHeading}</h2>
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
          <FaqList items={PAGE.faqs} />
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
