import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CalendarHeart,
  CheckCircle2,
  GraduationCap,
  MapPin,
  MessageCircle,
  Sparkles,
  Video,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { TeacherCard } from "@/components/TeacherCard";
import { Inline, plainText } from "@/components/RichText";
import { Breadcrumbs } from "@/components/editorial/Breadcrumbs";
import { CtaBand } from "@/components/editorial/CtaBand";
import { FaqList } from "@/components/editorial/FaqList";
import { JsonLdScript } from "@/components/editorial/JsonLdScript";
import { postPath, postsForCourse } from "@/lib/blog";
import { whatsappHref } from "@/lib/contact";
import {
  COURSE_FAMILY_ACCENTS,
  COURSE_FAMILY_LABELS,
  COURSE_PAGES,
  getCoursePage,
  relatedCoursePages,
} from "@/lib/course-pages";
import { courseHref } from "@/lib/courses";
import {
  EAR_TRAINING_PATH,
  METRONOME_PATH,
  TUNER_PATH,
  VOICE_TYPE_PATH,
  tunerPresetForCourse,
  tunerPresetPath,
} from "@/lib/music-tools";
import {
  absoluteUrl,
  brandTitle,
  breadcrumbJsonLd,
  courseJsonLd,
  courseServiceJsonLd,
  createPageMetadata,
  faqPageJsonLd,
  teachersItemListJsonLd,
  webPageJsonLd,
  SITE_CONTENT_UPDATED_AT,
} from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return COURSE_PAGES.map((page) => ({ curso: page.course.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ curso: string }>;
}): Promise<Metadata> {
  const { curso } = await params;
  const page = getCoursePage(curso);
  if (!page) return {};

  return createPageMetadata({
    title: brandTitle(page.guide.seoTitle),
    description: page.guide.metaDescription,
    path: page.path,
    markdownPath: `${page.path}.md`,
    image: {
      url: `${page.path}/share-image.png`,
      width: 1200,
      height: 630,
      alt: `Clases de ${page.course.label.toLowerCase()} en A medio tono`,
      type: "image/png",
    },
    keywords: [
      `clases de ${page.course.label.toLowerCase()}`,
      `clases de ${page.course.label.toLowerCase()} en Bogotá`,
      `profesor de ${page.course.label.toLowerCase()}`,
      `clases de ${page.course.label.toLowerCase()} a domicilio`,
      `clases de ${page.course.label.toLowerCase()} virtuales`,
      ...page.course.aliases.map((alias) => `clases de ${alias.toLowerCase()}`),
    ],
  });
}

const HOW_IT_WORKS = [
  {
    title: "Cuéntanos tu objetivo",
    body: "Escríbenos por WhatsApp: edad, nivel, horarios y si prefieres clases virtuales o a domicilio.",
  },
  {
    title: "Conoce a tu profe",
    body: "Te recomendamos el profe que mejor encaja contigo, o eliges directamente desde su perfil.",
  },
  {
    title: "Avanza cada semana",
    body: "Clases adaptadas a tu ritmo, con tareas claras y seguimiento de tu progreso.",
  },
];

export default async function CoursePage({
  params,
}: {
  params: Promise<{ curso: string }>;
}) {
  const { curso } = await params;
  const page = getCoursePage(curso);
  if (!page) notFound();

  const { course, guide, teachers, path } = page;
  const label = course.label;
  const lowerLabel = label.toLowerCase();
  const accent = COURSE_FAMILY_ACCENTS[guide.family];
  const related = relatedCoursePages(guide);
  const posts = postsForCourse(course.id).slice(0, 12);
  const tuner = tunerPresetForCourse(course.id);
  const waUrl = whatsappHref(`¡Hola! Quiero información sobre clases de ${lowerLabel}.`);
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Clases", path: "/clases" },
    { name: `Clases de ${lowerLabel}`, path },
  ];

  return (
    <>
      <JsonLdScript
        nodes={[
          webPageJsonLd({
            path,
            name: guide.headline,
            description: guide.metaDescription,
            image: `${path}/share-image.png`,
            dateModified: SITE_CONTENT_UPDATED_AT,
            about: { "@id": `${absoluteUrl(path)}#service` },
          }),
          breadcrumbJsonLd(crumbs),
          courseServiceJsonLd({ course, guide, path, teachers }),
          courseJsonLd({ course, guide, path }),
          teachersItemListJsonLd(teachers, { path, name: `Profes de ${lowerLabel} en A medio tono` }),
          faqPageJsonLd(
            guide.faqs.map((faq) => ({ question: faq.question, answer: plainText(faq.answer) })),
            path,
          ),
        ]}
      />

      <section
        className="block ed-page ed-course-hero"
        data-screen-label={`Clases de ${label}`}
        style={{ ["--ed-accent" as string]: accent }}
      >
        <div className="container">
          <Breadcrumbs items={crumbs} />

          <header className="ed-hero">
            <div className="ed-hero-copy">
              <span className="ed-eyebrow">{COURSE_FAMILY_LABELS[guide.family]}</span>
              <h1>{guide.headline}</h1>
              <p className="ed-lead">
                <Inline text={guide.intro} />
              </p>
              <div className="ed-actions">
                <a className="ed-button" href={waUrl} target="_blank" rel="noopener">
                  <MessageCircle size={20} strokeWidth={2.4} aria-hidden="true" />
                  Quiero clases de {lowerLabel}
                </a>
                <a className="ed-button ed-button--ghost" href="#profes">
                  Ver {teachers.length} {teachers.length === 1 ? "profe" : "profes"}
                </a>
              </div>
            </div>
            <div className="ed-hero-art" aria-hidden="true">
              <Image src={course.icon} alt="" width={220} height={220} loading="eager" />
            </div>
          </header>

          <ul className="ed-facts" aria-label={`Datos clave de las clases de ${lowerLabel}`}>
            <li>
              <CalendarHeart size={22} strokeWidth={2.4} aria-hidden="true" />
              <span>Edad para empezar</span>
              <strong>{guide.startingAge}</strong>
            </li>
            <li>
              <Video size={22} strokeWidth={2.4} aria-hidden="true" />
              <span>Modalidad</span>
              <strong>Virtual y a domicilio</strong>
            </li>
            <li>
              <MapPin size={22} strokeWidth={2.4} aria-hidden="true" />
              <span>A domicilio en</span>
              <strong>Bogotá y alrededores</strong>
            </li>
            <li>
              <GraduationCap size={22} strokeWidth={2.4} aria-hidden="true" />
              <span>Profes evaluados</span>
              <strong>
                {teachers.length} {teachers.length === 1 ? "profe" : "profes"} de {lowerLabel}
              </strong>
            </li>
          </ul>
        </div>
      </section>

      <section className="block ed-section" id="profes" style={{ ["--ed-accent" as string]: accent }}>
        <div className="container">
          <div className="sec-head ed-sec-head">
            <h2>Profes de {lowerLabel}</h2>
            <p className="sec-sub">
              Cada profe pasó por nuestra evaluación de música, pedagogía y calidad humana antes
              de su primera clase. Mira su perfil y escríbele directo.
            </p>
          </div>
          <ul className="profe-list">
            {teachers.map((teacher) => (
              <TeacherCard teacher={teacher} key={teacher.slug} />
            ))}
          </ul>
          <p className="ed-center-link">
            <Link href={courseHref(course)} prefetch={false}>
              Filtrar profes de {lowerLabel} por formato e idioma
              <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
            </Link>
          </p>
        </div>
      </section>

      <section className="block ed-section" style={{ ["--ed-accent" as string]: accent }}>
        <div className="container">
          <div className="ed-split">
            <article className="ed-card">
              <h2 className="ed-h2">Qué vas a aprender en clases de {lowerLabel}</h2>
              <ul className="ed-checklist">
                {guide.learn.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={22} strokeWidth={2.4} aria-hidden="true" />
                    <span>
                      <Inline text={item} />
                    </span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="ed-card">
              <h2 className="ed-h2">¿A qué edad empezar?</h2>
              <p className="ed-card-highlight">{guide.startingAge}</p>
              <p>
                <Inline text={guide.ageNote} />
              </p>
              <h3 className="ed-h3">Qué necesitas para empezar</h3>
              <ul className="ed-bullets">
                {guide.whatYouNeed.map((item) => (
                  <li key={item}>
                    <Inline text={item} />
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="ed-benefits">
            <h2 className="ed-h2">Por qué aprender {lowerLabel}</h2>
            <ul className="ed-benefit-grid">
              {guide.benefits.map((benefit) => (
                <li className="ed-benefit" key={benefit}>
                  <Sparkles size={22} strokeWidth={2.4} aria-hidden="true" />
                  <p>
                    <Inline text={benefit} />
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="block ed-section" style={{ ["--ed-accent" as string]: accent }}>
        <div className="container">
          <div className="sec-head ed-sec-head">
            <h2>Cómo empezar tus clases de {lowerLabel}</h2>
            <p className="sec-sub">
              <Link href="/clases-de-musica-online" prefetch={false}>
                Clases virtuales
              </Link>{" "}
              desde cualquier lugar o{" "}
              <Link href="/clases-de-musica-a-domicilio-bogota" prefetch={false}>
                a domicilio en Bogotá
              </Link>{" "}
              y alrededores, para niños, jóvenes y adultos.
            </p>
          </div>
          <ol className="ed-steps">
            {HOW_IT_WORKS.map((step, index) => (
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

      <section className="block ed-section nosotros-faq-section" id="preguntas-frecuentes">
        <div className="container">
          <div className="sec-head ed-sec-head">
            <h2>Preguntas frecuentes sobre clases de {lowerLabel}</h2>
          </div>
          <FaqList items={guide.faqs} />
        </div>
      </section>

      {(related.length > 0 || posts.length > 0) && (
        <section className="block ed-section">
          <div className="container">
            {related.length > 0 && (
              <div className="ed-related">
                <h2 className="ed-h2">Otras clases que te pueden interesar</h2>
                <ul className="ed-related-courses">
                  {related.map((relatedPage) => (
                    <li key={relatedPage.course.id}>
                      <Link className="course-card" href={relatedPage.path} prefetch={false}>
                        <span className="course-icon" aria-hidden="true">
                          <Image src={relatedPage.course.icon} alt="" width={64} height={64} />
                        </span>
                        <span className="course-copy">
                          <span className="course-name">Clases de {relatedPage.course.label.toLowerCase()}</span>
                          <span className="course-count">
                            {relatedPage.teachers.length}{" "}
                            {relatedPage.teachers.length === 1 ? "profe disponible" : "profes disponibles"}
                          </span>
                        </span>
                        <ArrowRight className="course-arrow" size={24} strokeWidth={2.4} aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="ed-related">
              <h2 className="ed-h2">Herramientas gratis para practicar</h2>
              <ul className="ed-chip-list">
                {tuner && (
                  <li>
                    <Link href={tunerPresetPath(tuner.slug)} prefetch={false}>
                      {tuner.headline}
                    </Link>
                  </li>
                )}
                {course.id === "canto" && (
                  <>
                    <li>
                      <Link href={VOICE_TYPE_PATH} prefetch={false}>
                        Test de tipo de voz
                      </Link>
                    </li>
                    <li>
                      <Link href={TUNER_PATH} prefetch={false}>
                        Afinador para la voz
                      </Link>
                    </li>
                  </>
                )}
                <li>
                  <Link href={METRONOME_PATH} prefetch={false}>
                    Metrónomo online
                  </Link>
                </li>
                <li>
                  <Link href={EAR_TRAINING_PATH} prefetch={false}>
                    Entrenamiento auditivo
                  </Link>
                </li>
              </ul>
            </div>

            {posts.length > 0 && (
              <div className="ed-related">
                <h2 className="ed-h2">Guías para aprender {lowerLabel}</h2>
                <ul className="ed-link-list">
                  {posts.map((post) => (
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
      )}

      <CtaBand
        title={`Empieza tus clases de ${lowerLabel}`}
        text="Cuéntanos tu edad, nivel y horario. Te respondemos por WhatsApp con el profe que mejor encaja contigo."
        primary={{ href: waUrl, label: "Escribir por WhatsApp", external: true }}
        secondary={{ href: "/clases", label: "Ver todas las clases" }}
      />
      <Footer />
    </>
  );
}
