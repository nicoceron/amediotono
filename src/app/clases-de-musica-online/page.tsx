import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  Camera,
  Globe2,
  Headphones,
  MessageCircle,
  MonitorSmartphone,
  UsersRound,
  Wifi,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { plainText } from "@/components/RichText";
import { Breadcrumbs } from "@/components/editorial/Breadcrumbs";
import { CtaBand } from "@/components/editorial/CtaBand";
import { FaqList } from "@/components/editorial/FaqList";
import { JsonLdScript } from "@/components/editorial/JsonLdScript";
import { ONLINE_CLASSES_PAGE } from "@/content/service-pages";
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

const PAGE = ONLINE_CLASSES_PAGE;
const PATH = PAGE.path;
const TITLE = PAGE.title;
const DESCRIPTION = PAGE.description;
const [BENEFITS_SECTION, SETUP_SECTION] = PAGE.sections;
const BENEFIT_ICONS = [Globe2, CalendarCheck, UsersRound, MonitorSmartphone];
const SETUP_ICONS = [Wifi, Camera, Headphones];

export const metadata: Metadata = createPageMetadata({
  title: brandTitle("Clases de música online en Colombia, en vivo"),
  description: DESCRIPTION,
  path: PATH,
  markdownPath: `${PATH}.md`,
  image: shareImage("clases-de-musica-online"),
  keywords: [
    "clases de música online",
    "clases de música virtuales",
    "clases de piano online",
    "clases de canto online",
    "clases de guitarra online Colombia",
  ],
});

export default function OnlineClassesPage() {
  const virtualTeachers = TEACHERS.filter((teacher) => teacher.classFormats?.includes("Virtual"));
  const guides = PAGE.guides.map((slug) => getPost(slug)).filter((post): post is BlogPost => Boolean(post));
  const waUrl = whatsappHref("¡Hola! Quiero información sobre clases de música online.");
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Clases de música online", path: PATH },
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
            name: "Clases de música online",
            serviceType: "Clases de música virtuales en vivo",
            description: DESCRIPTION,
            url: absoluteUrl(PATH),
            provider: { "@id": absoluteUrl("/#organization") },
            areaServed: { "@type": "Country", name: "Colombia" },
            availableChannel: { "@type": "ServiceChannel", name: "Videollamada", serviceUrl: absoluteUrl(PATH) },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Instrumentos disponibles en línea",
              itemListElement: COURSE_PAGES.map((page) => ({
                "@type": "Offer",
                itemOffered: { "@id": `${absoluteUrl(page.path)}#service` },
              })),
            },
          },
          faqPageJsonLd(PAGE.faqs.map((faq) => ({ question: faq.question, answer: plainText(faq.answer) })), PATH),
        ]}
      />

      <section className="block ed-page" style={{ ["--ed-accent" as string]: "var(--blue)" }}>
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <header className="ed-hero ed-hero--center">
            <div className="ed-hero-copy">
              <span className="ed-eyebrow">
                {virtualTeachers.length} profes · {COURSE_PAGES.length} instrumentos · en vivo
              </span>
              <h1>{TITLE}</h1>
              <p className="ed-lead">{PAGE.lead}</p>
              <div className="ed-actions">
                <a className="ed-button" href={waUrl} target="_blank" rel="noopener">
                  <MessageCircle size={20} strokeWidth={2.4} aria-hidden="true" />
                  Quiero clases online
                </a>
                <Link className="ed-button ed-button--ghost" href="/profes?formato=Virtual" prefetch={false}>
                  Ver profes
                </Link>
              </div>
            </div>
          </header>
        </div>
      </section>

      <section className="block ed-section" style={{ ["--ed-accent" as string]: "var(--blue)" }}>
        <div className="container">
          <div className="sec-head ed-sec-head">
            <h2>{BENEFITS_SECTION.heading}</h2>
          </div>
          <ul className="ed-benefit-grid ed-benefit-grid--4">
            {BENEFITS_SECTION.points.map((benefit, index) => {
              const Icon = BENEFIT_ICONS[index] ?? Globe2;
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
            <h2>Instrumentos que puedes aprender online</h2>
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
            <h2>{SETUP_SECTION.heading}</h2>
          </div>
          <ul className="ed-benefit-grid ed-benefit-grid--3">
            {SETUP_SECTION.points.map((item, index) => {
              const Icon = SETUP_ICONS[index] ?? Wifi;
              return (
                <li className="ed-benefit" key={item.title}>
                  <Icon size={22} strokeWidth={2.4} aria-hidden="true" />
                  <div>
                    <h3 className="ed-h3">{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </li>
              );
            })}
          </ul>
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
        </div>
      </section>

      <CtaBand
        title="Tu primera clase online empieza con un mensaje"
        text="Cuéntanos qué instrumento quieres aprender, tu edad y tu horario. Te recomendamos el profe ideal."
        primary={{ href: waUrl, label: "Escribir por WhatsApp", external: true }}
        secondary={{ href: "/clases", label: "Ver todas las clases" }}
      />
      <Footer />
    </>
  );
}
