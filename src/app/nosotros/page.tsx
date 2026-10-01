import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Ear,
  HeartHandshake,
  House,
  MessageCircle,
  Music2,
  Quote,
  Sparkles,
  Star,
  UsersRound,
  Video,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { BrandText } from "@/components/BrandWordmark";
import { NosotrosFAQSection } from "@/components/NosotrosFAQSection";
import { plainText } from "@/components/RichText";
import { Breadcrumbs } from "@/components/editorial/Breadcrumbs";
import { CtaBand } from "@/components/editorial/CtaBand";
import { JsonLdScript } from "@/components/editorial/JsonLdScript";
import { B2B_HUB_PATH } from "@/lib/b2b";
import { whatsappHref } from "@/lib/contact";
import { COURSE_PAGES } from "@/lib/course-pages";
import { NOSOTROS_FAQS } from "@/lib/nosotros-faq";
import { FEATURED_QUOTES, TEACHERS, primaryTeacherRole, shortDisplayName } from "@/lib/teachers";
import {
  brandTitle,
  breadcrumbJsonLd,
  createPageMetadata,
  faqPageJsonLd,
  webPageJsonLd,
  SITE_CONTENT_UPDATED_AT,
} from "@/lib/seo";
import { shareImage } from "@/lib/share-cards";

const PATH = "/nosotros";
const TITLE = "Somos A ½ tono: la escuela donde la música se vive, se siente y se comparte";
const DESCRIPTION =
  "Conoce A medio tono: escuela de artes y música en Bogotá con profes evaluados a mano y oído, clases virtuales y a domicilio para todas las edades.";

export const metadata: Metadata = createPageMetadata({
  title: brandTitle("Nosotros: escuela de artes y música en Bogotá"),
  description: DESCRIPTION,
  path: PATH,
  image: shareImage("nosotros"),
});

const FOUNDERS = TEACHERS.filter((teacher) => teacher.isFounder).sort(
  (a, b) => (a.founderOrder ?? 0) - (b.founderOrder ?? 0),
);
const REVIEW_COUNT = TEACHERS.reduce((total, teacher) => total + teacher.reviews.length, 0);
const HERO_FACES = TEACHERS.filter((teacher) => teacher.photo.endsWith(".webp")).slice(0, 6);

const PILLARS = [
  {
    label: "Misión",
    color: "var(--orange)",
    body: "Formar personas a través del arte y la música, en un espacio cálido donde cada estudiante encuentre su voz, su ritmo y su forma de expresarse.",
  },
  {
    label: "Visión",
    color: "var(--pink)",
    body: "Ser la escuela de artes referente de la región: un lugar donde niños, jóvenes y adultos descubran que aprender arte puede ser la mejor parte de su semana.",
  },
  {
    label: "Objetivo",
    color: "var(--blue)",
    body: "Ofrecer clases de altísima calidad humana y técnica, con grupos pequeños, profes apasionados y ambientes creativos que despierten la pasión por el arte.",
  },
];

const SELECTION_CRITERIA = [
  {
    icon: Music2,
    title: "Experiencia musical",
    body: "Dominio real de su instrumento o de su voz, y repertorio acorde a lo que va a enseñar.",
  },
  {
    icon: Sparkles,
    title: "Pedagogía",
    body: "Que sepa explicar, ordenar una clase y adaptarla a la edad, el nivel y el objetivo de cada estudiante.",
  },
  {
    icon: HeartHandshake,
    title: "Calidad humana",
    body: "Paciencia, escucha y una forma de corregir que construye confianza en lugar de miedo.",
  },
  {
    icon: Ear,
    title: "Forma de acompañar",
    body: "Compromiso con el proceso: puntualidad, comunicación con las familias y seguimiento semana a semana.",
  },
];

const WAYS_OF_WORKING = [
  {
    icon: House,
    title: "A domicilio",
    body: "Tu profe llega a tu casa en Bogotá y alrededores.",
  },
  {
    icon: Video,
    title: "Virtual",
    body: "Clases en vivo por videollamada desde cualquier lugar.",
  },
  {
    icon: UsersRound,
    title: "Todas las edades",
    body: "Desde la iniciación musical infantil hasta adultos y abuelos.",
  },
  {
    icon: CalendarCheck,
    title: "Seguimiento semanal",
    body: "Metas claras y avances visibles, clase a clase.",
  },
];

function trimQuote(text: string, maxChars = 190) {
  if (text.length <= maxChars) return text;
  const slice = text.slice(0, maxChars);
  return `${slice.slice(0, slice.lastIndexOf(" ")).trim()}…`;
}

function firstSentences(text: string, count = 2) {
  const sentences = text.match(/[^.!?]+[.!?]+/g) ?? [text];
  return sentences.slice(0, count).join(" ").trim();
}

export default function Nosotros() {
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: PATH },
  ];
  const quotes = FEATURED_QUOTES.slice(0, 6);

  return (
    <>
      <JsonLdScript
        nodes={[
          webPageJsonLd({
            path: PATH,
            type: "AboutPage",
            name: "Nosotros: A medio tono, escuela de artes y música",
            description: DESCRIPTION,
            dateModified: SITE_CONTENT_UPDATED_AT,
          }),
          breadcrumbJsonLd(crumbs),
          faqPageJsonLd(
            NOSOTROS_FAQS.map((faq) => ({ question: faq.question, answer: plainText(faq.answer) })),
            PATH,
          ),
        ]}
      />

      <section
        className="block ed-page about-hero"
        data-screen-label="Nosotros"
        style={{ ["--ed-accent" as string]: "var(--pink)" }}
      >
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <header className="ed-hero">
            <div className="ed-hero-copy">
              <span className="ed-eyebrow">Nosotros</span>
              <h1>
                <BrandText text={TITLE} />
              </h1>
              <p className="ed-lead">
                Somos una escuela de artes y música en Bogotá. Unimos a estudiantes de todas las
                edades con profes que eligimos <strong>a mano y a oído</strong>: músicos que tocan
                bien, enseñan mejor y acompañan cada proceso con cariño, en clases virtuales o a
                domicilio.
              </p>
              <div className="ed-actions">
                <Link className="ed-button" href="/profes" prefetch={false}>
                  Conoce a los profes
                  <ArrowRight size={20} strokeWidth={2.4} aria-hidden="true" />
                </Link>
                <a
                  className="ed-button ed-button--ghost"
                  href={whatsappHref("¡Hola! Quiero conocer más sobre A medio tono.")}
                  target="_blank"
                  rel="noopener"
                >
                  <MessageCircle size={20} strokeWidth={2.4} aria-hidden="true" />
                  Escríbenos
                </a>
              </div>
            </div>
            <div className="about-faces" aria-hidden="true">
              {HERO_FACES.map((teacher, index) => (
                <span
                  className={`about-face about-face--${index + 1}`}
                  key={teacher.slug}
                  style={{ borderColor: teacher.color, background: teacher.color }}
                >
                  <Image
                    src={teacher.photo}
                    alt=""
                    fill
                    sizes="160px"
                    loading={index < 2 ? "eager" : "lazy"}
                    style={teacher.photoPosition ? { objectPosition: teacher.photoPosition } : undefined}
                  />
                </span>
              ))}
            </div>
          </header>

          <ul className="about-stats" aria-label="A medio tono en números">
            <li>
              <strong>{TEACHERS.length}</strong>
              <span>profes evaluados</span>
            </li>
            <li>
              <strong>{COURSE_PAGES.length}</strong>
              <span>instrumentos y cursos</span>
            </li>
            <li>
              <strong>{REVIEW_COUNT}</strong>
              <span>reseñas de estudiantes y familias</span>
            </li>
            <li>
              <strong>2</strong>
              <span>formatos: virtual y a domicilio</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="block ed-section about-name" aria-labelledby="nuestro-nombre">
        <div className="container">
          <div className="about-name-card">
            <div className="about-keys" aria-hidden="true">
              <svg viewBox="0 0 280 160" role="presentation" focusable="false">
                {[0, 1, 2, 3, 4, 5, 6].map((key) => (
                  <rect
                    key={key}
                    x={key * 40}
                    y="0"
                    width="38"
                    height="160"
                    rx="6"
                    className={key === 2 || key === 3 ? "about-key about-key--active" : "about-key"}
                  />
                ))}
                {[0, 1, 3, 4, 5].map((key) => (
                  <rect key={`b${key}`} x={key * 40 + 27} y="0" width="24" height="96" rx="4" className="about-key-black" />
                ))}
                <path className="about-key-arc" d="M 59 128 Q 80 104 101 128" />
              </svg>
              <span className="about-keys-label">Mi → Fa: medio tono</span>
            </div>
            <div>
              <h2 className="ed-h2" id="nuestro-nombre">
                ¿Por qué «A medio tono»?
              </h2>
              <p>
                En música, un <strong>medio tono</strong> (o semitono) es la distancia más pequeña
                entre dos notas: de Mi a Fa en el piano, o de un traste al siguiente en la guitarra.
                Es un paso diminuto, pero sin él no existiría ninguna melodía.
              </p>
              <p>
                Así entendemos el aprendizaje: avanzar medio tono a la vez, sin afanes y sin
                comparaciones, celebrando cada pequeño logro hasta que un día, casi sin darte
                cuenta, estás tocando la canción que soñabas.
              </p>
              <p>
                <Link href="/blog/escalas-mayores-y-menores-explicadas" prefetch={false}>
                  Aprende más sobre tonos y semitonos
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="block ed-section" id="mision" data-screen-label="Misión / Visión">
        <div className="container">
          <div className="sec-head ed-sec-head">
            <h2>Nuestro corazón</h2>
            <p className="sec-sub">
              Una escuela donde el arte se vive, se siente y se comparte, sin importar la edad.
            </p>
          </div>
          <ul className="ed-benefit-grid ed-benefit-grid--3">
            {PILLARS.map((pillar) => (
              <li
                className="ed-benefit ed-benefit--stacked"
                key={pillar.label}
                style={{ ["--ed-accent" as string]: pillar.color }}
              >
                <h3 className="ed-h3">{pillar.label}</h3>
                <p>{pillar.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="block ed-section" id="fundadoras" data-screen-label="Fundadoras">
        <div className="container">
          <div className="sec-head ed-sec-head">
            <h2>Quienes lo empezaron todo</h2>
            <p className="sec-sub">
              Dos profes de música fundaron A medio tono, y hoy siguen enseñando en ella.
            </p>
          </div>
          <ul className="about-founders">
            {FOUNDERS.map((founder) => (
              <li key={founder.slug} style={{ ["--ed-accent" as string]: founder.color }}>
                <article className="about-founder">
                  <span className="about-founder-photo" style={{ borderColor: founder.color, background: founder.color }}>
                    <Image
                      src={founder.photo}
                      alt={founder.name}
                      fill
                      sizes="160px"
                      style={founder.photoPosition ? { objectPosition: founder.photoPosition } : undefined}
                    />
                  </span>
                  <div>
                    <h3 className="ed-h3">{founder.name}</h3>
                    <p className="about-founder-role">
                      Cofundadora · Profe de {founder.skills.map((skill) => skill.label.toLowerCase()).join(", ")}
                    </p>
                    <blockquote>
                      <Quote size={20} strokeWidth={2.4} aria-hidden="true" />
                      <p>{firstSentences(founder.longBio)}</p>
                    </blockquote>
                    <Link className="about-link" href={`/profes/${founder.slug}`} prefetch={false}>
                      Ver perfil de {founder.shortName}
                      <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="block ed-section" id="como-elegimos" style={{ ["--ed-accent" as string]: "var(--green)" }}>
        <div className="container">
          <div className="sec-head ed-sec-head">
            <h2>Profes elegidos a mano, y oído</h2>
            <p className="sec-sub">
              Antes de su primera clase, cada profe pasa por nuestra evaluación. Esto es lo que
              escuchamos y observamos.
            </p>
          </div>
          <ul className="ed-benefit-grid ed-benefit-grid--4">
            {SELECTION_CRITERIA.map((criterion) => {
              const Icon = criterion.icon;
              return (
                <li className="ed-benefit ed-benefit--stacked about-criterion" key={criterion.title}>
                  <Icon size={26} strokeWidth={2.4} aria-hidden="true" />
                  <h3 className="ed-h3">{criterion.title}</h3>
                  <p>{criterion.body}</p>
                </li>
              );
            })}
          </ul>
          <p className="ed-center-link">
            <Link href={B2B_HUB_PATH} prefetch={false}>
              También evaluamos profes para academias y colegios
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
          </p>
        </div>
      </section>

      <section className="block ed-section" id="como-trabajamos" style={{ ["--ed-accent" as string]: "var(--orange)" }}>
        <div className="container">
          <div className="sec-head ed-sec-head">
            <h2>Cómo son nuestras clases</h2>
          </div>
          <ul className="ed-benefit-grid ed-benefit-grid--4">
            {WAYS_OF_WORKING.map((item) => {
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
          <p className="ed-center-link">
            <Link href="/clases" prefetch={false}>
              Ver todas las clases
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
          </p>
        </div>
      </section>

      <section className="block ed-section" id="equipo" aria-labelledby="equipo-title">
        <div className="container">
          <div className="sec-head ed-sec-head">
            <h2 id="equipo-title">El equipo</h2>
            <p className="sec-sub">
              {TEACHERS.length} profes de {COURSE_PAGES.length} instrumentos y cursos. Toca a
              cualquiera para conocer su historia.
            </p>
          </div>
          <ul className="about-team">
            {TEACHERS.map((teacher) => (
              <li key={teacher.slug}>
                <Link href={`/profes/${teacher.slug}`} prefetch={false} className="about-team-member">
                  <span className="about-team-photo" style={{ borderColor: teacher.color, background: teacher.color }}>
                    <Image
                      src={teacher.photo}
                      alt=""
                      fill
                      sizes="88px"
                      style={teacher.photoPosition ? { objectPosition: teacher.photoPosition } : undefined}
                    />
                  </span>
                  <strong>
                    {shortDisplayName(teacher.name)}
                    <BadgeCheck size={15} strokeWidth={2.4} aria-label="Profe verificado" style={{ color: teacher.color }} />
                  </strong>
                  <span>{primaryTeacherRole(teacher)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {quotes.length > 0 && (
        <section className="block ed-section" id="resenas" aria-labelledby="resenas-title">
          <div className="container">
            <div className="sec-head ed-sec-head">
              <h2 id="resenas-title">Lo que dicen las familias</h2>
              <p className="sec-sub">Reseñas reales de estudiantes y familias de nuestros profes.</p>
            </div>
            <ul className="about-quotes">
              {quotes.map((quote) => (
                <li key={quote.id} style={{ ["--ed-accent" as string]: quote.color }}>
                  <figure className="about-quote">
                    <span className="about-quote-stars" aria-hidden="true">
                      {[0, 1, 2, 3, 4].map((star) => (
                        <Star key={star} size={16} fill="currentColor" strokeWidth={0} />
                      ))}
                    </span>
                    <blockquote>
                      <p>{trimQuote(quote.quote)}</p>
                    </blockquote>
                    <figcaption>
                      <strong>{quote.author}</strong>
                      {quote.instrument ? ` · ${quote.instrument}` : ""} · con{" "}
                      <Link href={`/profes/${quote.teacherSlug}`} prefetch={false}>
                        {quote.teacherShortName}
                      </Link>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <NosotrosFAQSection />

      <CtaBand
        title="Tu próxima canción empieza con medio tono"
        text="Cuéntanos qué quieres aprender, tu edad y tu horario. Te ayudamos a elegir profe, instrumento y formato."
        primary={{
          href: whatsappHref("¡Hola! Quiero empezar clases con A medio tono."),
          label: "Escribir por WhatsApp",
          external: true,
        }}
        secondary={{ href: "/trabaja-con-nosotros", label: "¿Eres profe? Trabaja con nosotros" }}
      />
      <Footer />
    </>
  );
}
