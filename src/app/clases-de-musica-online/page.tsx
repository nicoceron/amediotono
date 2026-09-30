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

const PATH = "/clases-de-musica-online";
const TITLE = "Clases de música online en vivo con profes evaluados";
const DESCRIPTION =
  "Clases de música online en vivo desde cualquier ciudad de Colombia: piano, canto, guitarra, violín y más, con profes evaluados y seguimiento semanal.";

export const metadata: Metadata = createPageMetadata({
  title: brandTitle("Clases de música online en Colombia, en vivo"),
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "clases de música online",
    "clases de música virtuales",
    "clases de piano online",
    "clases de canto online",
    "clases de guitarra online Colombia",
  ],
});

const BENEFITS = [
  {
    icon: Globe2,
    title: "Desde cualquier ciudad",
    body: "Medellín, Cali, Barranquilla, un municipio o fuera del país: solo necesitas conexión.",
  },
  {
    icon: CalendarCheck,
    title: "Horarios que sí te sirven",
    body: "Sin desplazamientos ni trancones: la clase empieza cuando abres la videollamada.",
  },
  {
    icon: UsersRound,
    title: "Profe elegido para ti",
    body: "Accedes a todo el equipo, sin depender de quién vive cerca.",
  },
  {
    icon: MonitorSmartphone,
    title: "Clase en vivo, no un curso grabado",
    body: "Tu profe te escucha, corrige en el momento y ajusta la clase a tu ritmo.",
  },
];

const SETUP = [
  { icon: Wifi, title: "Conexión estable", body: "Wifi o datos con buena señal; mejor si estás cerca del router." },
  { icon: Camera, title: "Cámara bien ubicada", body: "Que se vean tus manos y tu postura: de lado para piano, de frente para canto." },
  { icon: Headphones, title: "Audio claro", body: "Micrófono del celular o del computador; audífonos si hay eco." },
];

const FAQS: FaqItem[] = [
  {
    question: "¿De verdad se puede aprender música por videollamada?",
    answer:
      "Sí. Canto, teoría, piano y guitarra se adaptan muy bien, y la mayoría de instrumentos funcionan con una buena ubicación de cámara. Lo importante es que la clase sea en vivo y con seguimiento. Te contamos ventajas y límites en [por qué tomar clases de música online](/blog/por-que-tomar-clases-de-musica-online).",
  },
  {
    question: "¿Qué plataforma usan?",
    answer:
      "Una videollamada común desde el celular, la tableta o el computador. Tu profe te comparte el enlace y, si hace falta, te ayuda a configurar el audio antes de la primera clase.",
  },
  {
    question: "¿Sirven para niños?",
    answer:
      "Sí, con un adulto cerca en las primeras clases para ayudar con la cámara y la atención. Mira nuestra guía para [acompañar a tu hijo en clases virtuales](/blog/como-acompanar-a-tu-hijo-en-clases-virtuales-de-musica).",
  },
  {
    question: "¿Puedo combinar clases online y a domicilio?",
    answer:
      "Si vives en Bogotá o alrededores, sí: muchas familias combinan ambos formatos según la semana. Lo explicamos en [clases híbridas](/blog/clases-de-musica-hibridas-virtual-y-presencial).",
  },
  {
    question: "¿Cuánto cuestan las clases online?",
    answer:
      "El valor depende de la duración y la frecuencia. Escríbenos por WhatsApp y te enviamos las opciones.",
  },
];

const GUIDES = [
  "por-que-tomar-clases-de-musica-online",
  "como-preparar-tu-espacio-para-clases-virtuales-de-musica",
  "equipo-para-clases-virtuales-de-musica-camara-microfono",
  "clases-de-musica-a-domicilio-o-virtuales",
];

export default function OnlineClassesPage() {
  const virtualTeachers = TEACHERS.filter((teacher) => teacher.classFormats?.includes("Virtual"));
  const guides = GUIDES.map((slug) => getPost(slug)).filter((post): post is BlogPost => Boolean(post));
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
          faqPageJsonLd(FAQS.map((faq) => ({ question: faq.question, answer: plainText(faq.answer) })), PATH),
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
              <p className="ed-lead">
                Aprende piano, canto, guitarra, violín, vientos o teoría desde cualquier ciudad de
                Colombia, con clases en vivo por videollamada y un profe que te acompaña cada semana.
              </p>
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
            <h2>Por qué elegir clases online</h2>
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
            <h2>Lo que necesitas para tu primera clase</h2>
          </div>
          <ul className="ed-benefit-grid ed-benefit-grid--3">
            {SETUP.map((item) => {
              const Icon = item.icon;
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
              <h2 className="ed-h2">Guías para aprovechar tus clases online</h2>
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
