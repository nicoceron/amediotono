import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/editorial/Breadcrumbs";
import { CtaBand } from "@/components/editorial/CtaBand";
import { FaqList } from "@/components/editorial/FaqList";
import { JsonLdScript } from "@/components/editorial/JsonLdScript";
import { plainText } from "@/components/RichText";
import { Tuner } from "@/components/tools/Tuner";
import { TunerStringsTable } from "@/components/tools/TunerStringsTable";
import { getPost, postPath } from "@/lib/blog";
import type { BlogPost } from "@/lib/content-types";
import { whatsappHref } from "@/lib/contact";
import { courseLandingHref } from "@/lib/course-pages";
import { getCourseById } from "@/lib/courses";
import {
  METRONOME_PATH,
  TOOLS_PATH,
  TUNER_PATH,
  TUNER_PRESETS,
  getTunerPreset,
  tunerPresetPath,
} from "@/lib/music-tools";
import {
  absoluteUrl,
  brandTitle,
  breadcrumbJsonLd,
  createPageMetadata,
  faqPageJsonLd,
  webApplicationJsonLd,
  webPageJsonLd,
  SITE_CONTENT_UPDATED_AT,
} from "@/lib/seo";
import { shareImage } from "@/lib/share-cards";

export const dynamicParams = false;

export function generateStaticParams() {
  return TUNER_PRESETS.map((preset) => ({ instrumento: preset.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ instrumento: string }>;
}): Promise<Metadata> {
  const { instrumento } = await params;
  const preset = getTunerPreset(instrumento);
  if (!preset) return {};

  return createPageMetadata({
    title: brandTitle(`${preset.headline} gratis con micrófono`),
    description: preset.metaDescription,
    path: tunerPresetPath(preset.slug),
    image: shareImage(`afinador-${preset.slug}`),
    keywords: [
      `afinador de ${preset.name}`,
      `afinador de ${preset.name} online`,
      `afinar ${preset.name}`,
      `notas de las cuerdas del ${preset.name}`,
      `afinación ${preset.name}`,
    ],
  });
}

export default async function TunerPresetPage({
  params,
}: {
  params: Promise<{ instrumento: string }>;
}) {
  const { instrumento } = await params;
  const preset = getTunerPreset(instrumento);
  if (!preset) notFound();

  const path = tunerPresetPath(preset.slug);
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Herramientas", path: TOOLS_PATH },
    { name: "Afinador", path: TUNER_PATH },
    { name: preset.headline.replace(" online", ""), path },
  ];
  const course = preset.courseId ? getCourseById(preset.courseId) : undefined;
  const related = preset.relatedPostSlugs
    .map((slug) => getPost(slug))
    .filter((post): post is BlogPost => Boolean(post));
  const otherPresets = TUNER_PRESETS.filter((other) => other.slug !== preset.slug);

  return (
    <>
      <JsonLdScript
        nodes={[
          webPageJsonLd({
            path,
            name: preset.headline,
            description: preset.metaDescription,
            dateModified: SITE_CONTENT_UPDATED_AT,
            about: { "@id": `${absoluteUrl(path)}#app` },
          }),
          breadcrumbJsonLd(crumbs),
          webApplicationJsonLd({
            path,
            name: `${preset.headline} de A medio tono`,
            description: preset.metaDescription,
            featureList: [preset.tuningName, "Detección automática de cuerda", "Notas de referencia", "Indicador en cents"],
          }),
          faqPageJsonLd(
            preset.faqs.map((faq) => ({ question: faq.question, answer: plainText(faq.answer) })),
            path,
          ),
        ]}
      />
      <section className="block ed-page tool-page" style={{ ["--ed-accent" as string]: "var(--green)" }}>
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <header className="ed-hero ed-hero--center">
            <div className="ed-hero-copy">
              <span className="ed-eyebrow">{preset.tuningName}</span>
              <h1>{preset.headline}</h1>
              <p className="ed-lead">{preset.intro}</p>
            </div>
          </header>
          <Tuner strings={preset.strings} instrumentName={preset.name} />
        </div>
      </section>

      <section className="block ed-section" style={{ ["--ed-accent" as string]: "var(--green)" }}>
        <div className="container tool-content">
          <article className="prose">
            <h2>Notas de las cuerdas del {preset.name}</h2>
            <TunerStringsTable strings={preset.strings} caption={preset.tuningName} />
            <h2>Consejos para afinar tu {preset.name}</h2>
            <ul className="ed-checklist">
              {preset.tips.map((tip) => (
                <li key={tip}>
                  <CheckCircle2 size={22} strokeWidth={2.4} aria-hidden="true" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
            <h2>Preguntas frecuentes</h2>
            <FaqList items={preset.faqs} openFirst={false} />
          </article>
          <aside className="tool-aside">
            {course && (
              <>
                <h2 className="ed-h2">Aprende con un profe</h2>
                <ul className="ed-link-list">
                  <li>
                    <Link href={courseLandingHref(course)} prefetch={false}>
                      <strong>Clases de {course.label.toLowerCase()}</strong>
                      <span>Virtuales o a domicilio en Bogotá, con profes evaluados.</span>
                    </Link>
                  </li>
                </ul>
              </>
            )}
            {related.length > 0 && (
              <>
                <h2 className="ed-h2">Guías relacionadas</h2>
                <ul className="ed-link-list">
                  {related.map((post) => (
                    <li key={post.slug}>
                      <Link href={postPath(post.slug)} prefetch={false}>
                        <strong>{post.title}</strong>
                        <span>{post.excerpt}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
            <h2 className="ed-h2">Otros afinadores</h2>
            <ul className="ed-chip-list">
              {otherPresets.map((other) => (
                <li key={other.slug}>
                  <Link href={tunerPresetPath(other.slug)} prefetch={false}>
                    {other.headline.replace(" online", "")}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={METRONOME_PATH} prefetch={false}>
                  Metrónomo
                </Link>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <CtaBand
        title={`¿Quieres aprender ${preset.name}?`}
        text="Clases virtuales o a domicilio en Bogotá con profes evaluados en música, pedagogía y calidad humana."
        primary={{
          href: whatsappHref(`¡Hola! Vengo del afinador de ${preset.name} y quiero información sobre clases.`),
          label: "Escribir por WhatsApp",
          external: true,
        }}
        secondary={{ href: "/clases", label: "Ver clases" }}
      />
      <Footer />
    </>
  );
}
