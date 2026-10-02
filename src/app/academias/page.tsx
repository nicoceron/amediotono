import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  AudioLines,
  CheckCircle2,
  ClipboardList,
  MapPin,
  MessageCircle,
  UsersRound,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { B2BLeadSection } from "@/components/b2b/B2BLeadSection";
import { B2BServiceCards } from "@/components/b2b/B2BServiceCards";
import { Breadcrumbs } from "@/components/editorial/Breadcrumbs";
import { FaqList } from "@/components/editorial/FaqList";
import { JsonLdScript } from "@/components/editorial/JsonLdScript";
import { plainText } from "@/components/RichText";
import {
  B2B_AUDIENCES,
  B2B_CRITERIA,
  B2B_HUB_FAQS,
  B2B_HUB_PATH,
  B2B_PAINS,
  B2B_SERVICES,
} from "@/lib/b2b";
import { postPath, postsByCategory } from "@/lib/blog";
import { whatsappHref } from "@/lib/contact";
import { COURSE_PAGES } from "@/lib/course-pages";
import { TEACHERS } from "@/lib/teachers";
import {
  brandTitle,
  breadcrumbJsonLd,
  businessServiceJsonLd,
  createPageMetadata,
  faqPageJsonLd,
  webPageJsonLd,
  SITE_CONTENT_UPDATED_AT,
} from "@/lib/seo";
import { shareImage } from "@/lib/share-cards";

const TITLE = "Selección y evaluación de profesores de música para academias y colegios";
const DESCRIPTION =
  "Encontramos y evaluamos profes de música para academias, colegios e instituciones: audición, clase muestra, entrevista y verificaciones. Músicos evaluando músicos.";

export const metadata: Metadata = createPageMetadata({
  title: brandTitle("Profes de música para academias y colegios"),
  description: DESCRIPTION,
  path: B2B_HUB_PATH,
  image: shareImage("academias"),
  keywords: [
    "selección de profesores de música",
    "profesores de música para colegios",
    "reclutamiento de profesores de música",
    "evaluación docente música",
    "empresa de selección de personal docente Bogotá",
  ],
});

const PROCESS = B2B_SERVICES[0].steps;

export default function AcademiasPage() {
  const guides = postsByCategory("academias");
  const whatsappUrl = whatsappHref(
    "¡Hola! Quiero información sobre selección de profes para mi institución.",
  );
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Academias y colegios", path: B2B_HUB_PATH },
  ];

  return (
    <>
      <JsonLdScript
        nodes={[
          webPageJsonLd({
            path: B2B_HUB_PATH,
            name: TITLE,
            description: DESCRIPTION,
            dateModified: SITE_CONTENT_UPDATED_AT,
          }),
          breadcrumbJsonLd(crumbs),
          businessServiceJsonLd({
            path: B2B_HUB_PATH,
            name: "Selección y evaluación de profesores de música",
            description: DESCRIPTION,
            serviceType: "Selección y evaluación de docentes de música",
            audience: "Academias de música, colegios e instituciones culturales",
          }),
          faqPageJsonLd(
            B2B_HUB_FAQS.map((faq) => ({ question: faq.question, answer: plainText(faq.answer) })),
            B2B_HUB_PATH,
          ),
        ]}
      />

      <section
        className="block ed-page b2b-hero"
        data-screen-label="Academias"
        style={{ ["--ed-accent" as string]: "var(--blue)" }}
      >
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <header className="ed-hero">
            <div className="ed-hero-copy">
              <h1>{TITLE}</h1>
              <p className="ed-lead">
                Somos una escuela de música que evalúa a cada profe antes de su primera clase.
                Ahora ponemos ese mismo filtro al servicio de tu institución:{" "}
                <strong>músicos evaluando músicos</strong>, con audición, clase muestra y
                entrevista pedagógica.
              </p>
              <div className="ed-actions">
                <a className="ed-button" href="#propuesta">
                  Solicitar propuesta
                  <ArrowRight size={20} strokeWidth={2.4} aria-hidden="true" />
                </a>
                <a className="ed-button ed-button--ghost" href={whatsappUrl} target="_blank" rel="noopener">
                  <MessageCircle size={20} strokeWidth={2.4} aria-hidden="true" />
                  Hablar por WhatsApp
                </a>
              </div>
            </div>
            <div className="b2b-hero-photo">
              <Image
                src="/jobs/profesora-estudiante.webp"
                alt="Profesora de música acompañando a una estudiante durante la clase"
                fill
                loading="eager"
                sizes="(max-width: 900px) 100vw, 40vw"
              />
            </div>
          </header>

          <ul className="ed-facts" aria-label="Por qué A medio tono">
            <li>
              <UsersRound size={22} strokeWidth={2.4} aria-hidden="true" />
              <span>Red de profes evaluados</span>
              <strong>{TEACHERS.length} profes activos</strong>
            </li>
            <li>
              <AudioLines size={22} strokeWidth={2.4} aria-hidden="true" />
              <span>Instrumentos en nuestra red</span>
              <strong>{COURSE_PAGES.length} instrumentos</strong>
            </li>
            <li>
              <ClipboardList size={22} strokeWidth={2.4} aria-hidden="true" />
              <span>Evaluación</span>
              <strong>Audición + clase muestra</strong>
            </li>
            <li>
              <MapPin size={22} strokeWidth={2.4} aria-hidden="true" />
              <span>Cobertura</span>
              <strong>Bogotá y virtual</strong>
            </li>
          </ul>
        </div>
      </section>

      <section className="block ed-section">
        <div className="container">
          <div className="sec-head ed-sec-head">
            <h2>Lo que resolvemos</h2>
            <p className="sec-sub">
              Contratar un profe de música es distinto a contratar cualquier otro cargo.
            </p>
          </div>
          <ul className="ed-benefit-grid ed-benefit-grid--4">
            {B2B_PAINS.map((pain) => (
              <li className="ed-benefit ed-benefit--stacked" key={pain.title}>
                <h3 className="ed-h3">{pain.title}</h3>
                <p>{pain.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="block ed-section" id="servicios">
        <div className="container">
          <div className="sec-head ed-sec-head">
            <h2>Servicios para instituciones</h2>
            <p className="sec-sub">
              Elige cómo quieres que te ayudemos: encontrar profes, evaluar a tus candidatos o
              fortalecer a tu equipo actual.
            </p>
          </div>
          <B2BServiceCards services={B2B_SERVICES} />
        </div>
      </section>

      <section className="block ed-section" style={{ ["--ed-accent" as string]: "var(--pink)" }}>
        <div className="container">
          <div className="sec-head ed-sec-head">
            <h2>Qué evaluamos en cada profe</h2>
            <p className="sec-sub">
              Los mismos criterios que usamos para elegir a nuestros profes, ajustados al cargo que
              necesitas.
            </p>
          </div>
          <ul className="ed-benefit-grid ed-benefit-grid--3">
            {B2B_CRITERIA.map((criterion) => (
              <li className="ed-benefit" key={criterion.title}>
                <CheckCircle2 size={22} strokeWidth={2.4} aria-hidden="true" />
                <div>
                  <h3 className="ed-h3">{criterion.title}</h3>
                  <p>{criterion.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="block ed-section" style={{ ["--ed-accent" as string]: "var(--blue)" }}>
        <div className="container">
          <div className="sec-head ed-sec-head">
            <h2>Cómo trabajamos</h2>
            <p className="sec-sub">Un proceso claro, con evidencia en cada etapa.</p>
          </div>
          <ol className="ed-steps ed-steps--5">
            {PROCESS.map((step, index) => (
              <li className="ed-step" key={step.title}>
                <span className="ed-step-number" aria-hidden="true">
                  {index + 1}
                </span>
                <h3 className="ed-h3">{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="block ed-section">
        <div className="container">
          <div className="sec-head ed-sec-head">
            <h2>Para quién es</h2>
          </div>
          <ul className="ed-benefit-grid ed-benefit-grid--4">
            {B2B_AUDIENCES.map((audience) => (
              <li className="ed-benefit ed-benefit--stacked" key={audience.title}>
                <h3 className="ed-h3">{audience.title}</h3>
                <p>{audience.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {guides.length > 0 && (
        <section className="block ed-section">
          <div className="container">
            <div className="ed-related">
              <h2 className="ed-h2">Guías para seleccionar profes de música</h2>
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

      <section className="block ed-section nosotros-faq-section" id="preguntas-frecuentes">
        <div className="container">
          <div className="sec-head ed-sec-head">
            <h2>Preguntas frecuentes</h2>
          </div>
          <FaqList items={B2B_HUB_FAQS} />
        </div>
      </section>

      <B2BLeadSection />
      <Footer />
    </>
  );
}
