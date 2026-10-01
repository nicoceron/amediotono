import type { Metadata } from "next";
import Link from "next/link";
import {
  AudioLines,
  BookOpenCheck,
  CalendarCheck,
  ClipboardList,
  Ear,
  MessageCircle,
  MicVocal,
  Music2,
  Video,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { TeacherCard } from "@/components/TeacherCard";
import { plainText } from "@/components/RichText";
import { Breadcrumbs } from "@/components/editorial/Breadcrumbs";
import { CtaBand } from "@/components/editorial/CtaBand";
import { FaqList } from "@/components/editorial/FaqList";
import { JsonLdScript } from "@/components/editorial/JsonLdScript";
import { PREUNIVERSITARIO_PAGE } from "@/content/service-pages";
import { getPost, postPath } from "@/lib/blog";
import type { BlogPost } from "@/lib/content-types";
import { whatsappHref } from "@/lib/contact";
import { teachersForCourse } from "@/lib/course-pages";
import {
  brandTitle,
  breadcrumbJsonLd,
  createPageMetadata,
  faqPageJsonLd,
  teachersItemListJsonLd,
  webPageJsonLd,
  absoluteUrl,
  SITE_CONTENT_UPDATED_AT,
} from "@/lib/seo";
import { shareImage } from "@/lib/share-cards";

const PAGE = PREUNIVERSITARIO_PAGE;
const PATH = PAGE.path;
const TITLE = PAGE.title;
const DESCRIPTION = PAGE.description;
const [COMPONENTS_SECTION, STEPS_SECTION] = PAGE.sections;
const COMPONENT_ICONS = [Ear, BookOpenCheck, AudioLines, Music2, MicVocal, ClipboardList];

export const metadata: Metadata = createPageMetadata({
  title: brandTitle("Preuniversitario de música en Bogotá y virtual"),
  description: DESCRIPTION,
  path: PATH,
  markdownPath: `${PATH}.md`,
  image: shareImage("preuniversitario-musica"),
  keywords: [
    "preuniversitario de música",
    "preparación prueba de admisión música",
    "preparatorio de música Bogotá",
    "clases de solfeo y dictado",
    "prueba específica música Universidad Nacional",
  ],
});

export default function PreuniversitarioPage() {
  const theoryTeachers = teachersForCourse("teoria-musical");
  const guides = PAGE.guides.map((slug) => getPost(slug)).filter(
    (post): post is BlogPost => Boolean(post),
  );
  const pillar = getPost("como-prepararte-para-la-prueba-de-admision-de-musica");
  const waUrl = whatsappHref("¡Hola! Quiero prepararme para la prueba de admisión de música.");
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Preuniversitario de música", path: PATH },
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
            name: "Preparación para la prueba de admisión de música",
            serviceType: "Preuniversitario de música",
            description: DESCRIPTION,
            url: absoluteUrl(PATH),
            provider: { "@id": absoluteUrl("/#organization") },
            areaServed: [
              { "@type": "City", name: "Bogotá" },
              { "@type": "Country", name: "Colombia" },
            ],
            audience: { "@type": "EducationalAudience", educationalRole: "student", audienceType: "Aspirantes a programas universitarios de música" },
          },
          teachersItemListJsonLd(theoryTeachers, { path: PATH, name: "Profes de teoría musical" }),
          faqPageJsonLd(PAGE.faqs.map((faq) => ({ question: faq.question, answer: plainText(faq.answer) })), PATH),
        ]}
      />

      <section className="block ed-page" style={{ ["--ed-accent" as string]: "var(--orange)" }}>
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <header className="ed-hero ed-hero--center">
            <div className="ed-hero-copy">
              <span className="ed-eyebrow">Preparación para pruebas de admisión</span>
              <h1>{TITLE}</h1>
              <p className="ed-lead">{PAGE.lead}</p>
              <div className="ed-actions">
                <a className="ed-button" href={waUrl} target="_blank" rel="noopener">
                  <MessageCircle size={20} strokeWidth={2.4} aria-hidden="true" />
                  Quiero prepararme
                </a>
                {pillar && (
                  <Link className="ed-button ed-button--ghost" href={postPath(pillar.slug)} prefetch={false}>
                    Leer la guía de admisiones
                  </Link>
                )}
              </div>
            </div>
          </header>

          <ul className="ed-facts" aria-label="Datos clave">
            <li>
              <BookOpenCheck size={22} strokeWidth={2.4} aria-hidden="true" />
              <span>Preparamos</span>
              <strong>Teoría, solfeo y dictado</strong>
            </li>
            <li>
              <Music2 size={22} strokeWidth={2.4} aria-hidden="true" />
              <span>Audición</span>
              <strong>Instrumento o voz</strong>
            </li>
            <li>
              <Video size={22} strokeWidth={2.4} aria-hidden="true" />
              <span>Modalidad</span>
              <strong>Virtual o a domicilio</strong>
            </li>
            <li>
              <CalendarCheck size={22} strokeWidth={2.4} aria-hidden="true" />
              <span>Plan</span>
              <strong>Hacia la fecha de tu prueba</strong>
            </li>
          </ul>
        </div>
      </section>

      <section className="block ed-section" style={{ ["--ed-accent" as string]: "var(--orange)" }}>
        <div className="container">
          <div className="sec-head ed-sec-head">
            <h2>{COMPONENTS_SECTION.heading}</h2>
            <p className="sec-sub">{COMPONENTS_SECTION.intro}</p>
          </div>
          <ul className="ed-benefit-grid ed-benefit-grid--3">
            {COMPONENTS_SECTION.points.map((component, index) => {
              const Icon = COMPONENT_ICONS[index] ?? Music2;
              const guide = component.guide ? getPost(component.guide) : undefined;
              return (
                <li className="ed-benefit ed-benefit--stacked about-criterion" key={component.title}>
                  <Icon size={26} strokeWidth={2.4} aria-hidden="true" />
                  <h3 className="ed-h3">{component.title}</h3>
                  <p>{component.body}</p>
                  {guide && (
                    <p>
                      <Link href={postPath(guide.slug)} prefetch={false}>
                        Guía: {guide.title}
                      </Link>
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="block ed-section" style={{ ["--ed-accent" as string]: "var(--blue)" }}>
        <div className="container">
          <div className="sec-head ed-sec-head">
            <h2>{STEPS_SECTION.heading}</h2>
          </div>
          <ol className="ed-steps ed-steps--4">
            {STEPS_SECTION.points.map((step, index) => (
              <li className="ed-step" key={step.title}>
                <span className="ed-step-number" aria-hidden="true">
                  {index + 1}
                </span>
                <h3 className="ed-h3">{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
          <aside className="prose-callout ed-disclaimer">
            <strong className="prose-callout-title">Importante</strong>
            <p>{STEPS_SECTION.note}</p>
          </aside>
        </div>
      </section>

      {guides.length > 0 && (
        <section className="block ed-section">
          <div className="container">
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
          </div>
        </section>
      )}

      {theoryTeachers.length > 0 && (
        <section className="block ed-section" id="profes">
          <div className="container">
            <div className="sec-head ed-sec-head">
              <h2>Profes de teoría musical</h2>
              <p className="sec-sub">
                Para el instrumento o la voz, te conectamos con un profe de tu instrumento.
              </p>
            </div>
            <ul className="profe-list">
              {theoryTeachers.map((teacher) => (
                <TeacherCard teacher={teacher} key={teacher.slug} />
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="block ed-section nosotros-faq-section" id="preguntas-frecuentes">
        <div className="container">
          <div className="sec-head ed-sec-head">
            <h2>Preguntas frecuentes</h2>
          </div>
          <FaqList items={PAGE.faqs} />
        </div>
      </section>

      <CtaBand
        title="Empieza tu preparación"
        text="Cuéntanos a qué universidad y programa quieres entrar, tu instrumento y la fecha de la prueba. Te proponemos un plan."
        primary={{ href: waUrl, label: "Escribir por WhatsApp", external: true }}
        secondary={{ href: "/clases/teoria-musical", label: "Ver clases de teoría musical" }}
      />
      <Footer />
    </>
  );
}
