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
import { getPost, postPath } from "@/lib/blog";
import type { BlogPost, FaqItem } from "@/lib/content-types";
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

const PATH = "/preuniversitario-musica";
const TITLE = "Preuniversitario de música: prepárate para la prueba de admisión";
const DESCRIPTION =
  "Prepárate para la prueba de admisión de música con clases de teoría, solfeo, dictado e instrumento. Virtual o a domicilio en Bogotá, con plan a tu medida.";

export const metadata: Metadata = createPageMetadata({
  title: brandTitle("Preuniversitario de música en Bogotá y virtual"),
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "preuniversitario de música",
    "preparación prueba de admisión música",
    "preparatorio de música Bogotá",
    "clases de solfeo y dictado",
    "prueba específica música Universidad Nacional",
  ],
});

const COMPONENTS = [
  {
    icon: Ear,
    title: "Aptitud y entrenamiento auditivo",
    body: "Repetir ritmos, melodías e intervalos de oído y fortalecer la memoria musical.",
    guide: "que-es-un-intervalo-musical",
  },
  {
    icon: BookOpenCheck,
    title: "Teoría y gramática",
    body: "Tonalidades, armaduras, escalas, intervalos, tríadas y acordes de séptima; armonía cuando la prueba la pide.",
    guide: "escalas-mayores-y-menores-explicadas",
  },
  {
    icon: AudioLines,
    title: "Dictado",
    body: "Dictado rítmico, melódico, de intervalos y armónico, con un método progresivo.",
    guide: "dictado-musical-como-prepararlo",
  },
  {
    icon: Music2,
    title: "Lectura rítmica y melódica",
    body: "Solfeo entonado y lectura a primera vista, como se evalúa frente a un jurado.",
    guide: "lectura-ritmica-y-melodica-para-la-prueba-de-admision",
  },
  {
    icon: MicVocal,
    title: "Instrumento o voz",
    body: "Repertorio, escalas y estudios para la audición, con simulacros frente a tu profe.",
    guide: "repertorio-para-la-audicion-de-admision",
  },
  {
    icon: ClipboardList,
    title: "Entrevista",
    body: "Cómo contar tu recorrido musical y tu motivación, clave en muchas licenciaturas.",
    guide: "entrevista-de-admision-en-musica",
  },
];

const STEPS = [
  {
    title: "Diagnóstico",
    body: "Revisamos tu nivel actual, la universidad y el programa al que apuntas y la fecha de la prueba.",
  },
  {
    title: "Plan semana a semana",
    body: "Armamos un plan hacia la fecha de la prueba, con metas claras de teoría, oído e instrumento.",
  },
  {
    title: "Clases con profes",
    body: "Teoría, solfeo y dictado con profes de teoría musical, e instrumento con un profe de tu instrumento.",
  },
  {
    title: "Simulacros",
    body: "Practicas dictados, lectura a primera vista y tu audición en condiciones parecidas a las de la prueba.",
  },
];

const UNIVERSITY_GUIDES = [
  "examen-de-admision-musica-universidad-nacional",
  "admision-musica-universidad-distrital-asab",
  "admision-licenciatura-en-musica-universidad-pedagogica",
  "admision-musica-universidad-javeriana",
  "admision-musica-universidad-de-los-andes",
  "estudiar-musica-en-medellin-cali-y-otras-ciudades",
  "carreras-de-musica-en-colombia",
  "maestro-en-musica-o-licenciatura-en-musica",
];

const FAQS: FaqItem[] = [
  {
    question: "¿Con cuánto tiempo de anticipación debo empezar a prepararme?",
    answer:
      "Depende de tu punto de partida. Si ya lees música y tocas con soltura, unos meses de trabajo enfocado pueden ser suficientes; si empiezas desde cero en teoría y dictado, conviene empezar con más tiempo. En el diagnóstico te damos una recomendación honesta.",
  },
  {
    question: "¿Me sirve si soy autodidacta?",
    answer:
      "Sí. Muchos aspirantes tocan muy bien de oído pero nunca han estudiado teoría ni dictado. El plan se enfoca justamente en lo que te falta para la prueba específica.",
  },
  {
    question: "¿Puedo prepararme si vivo fuera de Bogotá?",
    answer:
      "Sí. Las clases de teoría, solfeo y dictado funcionan muy bien de forma virtual, y el instrumento también puede trabajarse por videollamada. Mira cómo funcionan nuestras [clases online](/clases-de-musica-online).",
  },
  {
    question: "¿La preparación garantiza que pase la prueba?",
    answer:
      "No, y desconfía de quien lo prometa. La admisión depende de la universidad, del número de cupos y de tu desempeño el día de la prueba. Nuestro objetivo es que llegues con las habilidades trabajadas y sin sorpresas. No estamos afiliados a ninguna universidad.",
  },
  {
    question: "¿Es lo mismo que el preparatorio de una universidad?",
    answer:
      "No. Algunas universidades tienen sus propios programas preparatorios o de extensión. Nuestras clases son particulares y se ajustan a tu nivel, tu horario y la prueba que vas a presentar. Te lo explicamos en [qué es un preuniversitario de música](/blog/preuniversitario-de-musica-que-es).",
  },
];

export default function PreuniversitarioPage() {
  const theoryTeachers = teachersForCourse("teoria-musical");
  const guides = UNIVERSITY_GUIDES.map((slug) => getPost(slug)).filter(
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
          faqPageJsonLd(FAQS.map((faq) => ({ question: faq.question, answer: plainText(faq.answer) })), PATH),
        ]}
      />

      <section className="block ed-page" style={{ ["--ed-accent" as string]: "var(--orange)" }}>
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <header className="ed-hero ed-hero--center">
            <div className="ed-hero-copy">
              <span className="ed-eyebrow">Preparación para pruebas de admisión</span>
              <h1>{TITLE}</h1>
              <p className="ed-lead">
                Clases de teoría, solfeo, dictado e instrumento con profes, virtuales o a domicilio
                en Bogotá, para que llegues a la prueba específica de la universidad que elijas con
                todo trabajado.
              </p>
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
            <h2>Qué preparamos</h2>
            <p className="sec-sub">
              Las pruebas específicas de música en Colombia suelen evaluar estos componentes. Cada
              universidad los combina y pondera distinto.
            </p>
          </div>
          <ul className="ed-benefit-grid ed-benefit-grid--3">
            {COMPONENTS.map((component) => {
              const Icon = component.icon;
              const guide = getPost(component.guide);
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
            <h2>Cómo funciona</h2>
          </div>
          <ol className="ed-steps ed-steps--4">
            {STEPS.map((step, index) => (
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
            <p>
              No estamos afiliados a ninguna universidad y ninguna preparación garantiza la
              admisión. Los requisitos cambian en cada convocatoria: revisa siempre el instructivo
              o la guía del aspirante vigente de tu universidad.
            </p>
          </aside>
        </div>
      </section>

      {guides.length > 0 && (
        <section className="block ed-section">
          <div className="container">
            <div className="ed-related">
              <h2 className="ed-h2">Guías por universidad y carrera</h2>
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
          <FaqList items={FAQS} />
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
