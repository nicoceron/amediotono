import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/editorial/Breadcrumbs";
import { CtaBand } from "@/components/editorial/CtaBand";
import { FaqList } from "@/components/editorial/FaqList";
import { JsonLdScript } from "@/components/editorial/JsonLdScript";
import { Inline, RichBlocks, plainText } from "@/components/RichText";
import { Metronome } from "@/components/tools/Metronome";
import { getPost, postPath } from "@/lib/blog";
import type { BlogPost } from "@/lib/content-types";
import { whatsappHref } from "@/lib/contact";
import { getCoursePage } from "@/lib/course-pages";
import {
  METRONOME_PATH,
  RHYTHM_PRESETS,
  TOOLS_PATH,
  TUNER_PATH,
  getMeter,
  getRhythmPreset,
  rhythmPresetPath,
  type PulseUnit,
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

const EIGHTHS_PER_PULSE: Record<PulseUnit, number> = { negra: 2, blanca: 4, "negra con puntillo": 3 };

export function generateStaticParams() {
  return RHYTHM_PRESETS.map((preset) => ({ ritmo: preset.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ritmo: string }>;
}): Promise<Metadata> {
  const { ritmo } = await params;
  const preset = getRhythmPreset(ritmo);
  if (!preset) return {};

  return createPageMetadata({
    title: brandTitle(preset.seoTitle),
    description: preset.metaDescription,
    path: rhythmPresetPath(preset.slug),
    image: shareImage(`metronomo-${preset.slug}`),
    keywords: [
      `metrónomo para ${preset.name}`,
      `metrónomo ${preset.name}`,
      `compás ${preset.gender === "m" ? "del" : "de la"} ${preset.name}`,
      `tempo ${preset.gender === "m" ? "del" : "de la"} ${preset.name}`,
      `cómo practicar ${preset.name}`,
    ],
  });
}

export default async function RhythmPresetPage({
  params,
}: {
  params: Promise<{ ritmo: string }>;
}) {
  const { ritmo } = await params;
  const preset = getRhythmPreset(ritmo);
  if (!preset) notFound();

  const path = rhythmPresetPath(preset.slug);
  const of = `${preset.gender === "m" ? "del" : "de la"} ${preset.name}`;
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Herramientas", path: TOOLS_PATH },
    { name: "Metrónomo", path: METRONOME_PATH },
    { name: preset.headline, path },
  ];
  const coursePage = preset.courseId ? getCoursePage(preset.courseId) : undefined;
  const related = preset.relatedPostSlugs
    .map((slug) => getPost(slug))
    .filter((post): post is BlogPost => Boolean(post));
  const others = RHYTHM_PRESETS.filter((other) => other.slug !== preset.slug);

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
            featureList: [
              ...preset.setups.map((setup) => `Compás de ${setup.meter} a ${setup.bpm} BPM`),
              "Acentos por tiempo",
              "Subdivisiones",
              "Tap tempo",
            ],
          }),
          faqPageJsonLd(
            preset.faqs.map((faq) => ({ question: faq.question, answer: plainText(faq.answer) })),
            path,
          ),
        ]}
      />
      <section className="block ed-page tool-page" style={{ ["--ed-accent" as string]: "var(--orange)" }}>
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <header className="ed-hero ed-hero--center">
            <div className="ed-hero-copy">
              <h1>{preset.headline}</h1>
              <p className="ed-lead">{preset.intro}</p>
            </div>
          </header>
          <Metronome setups={preset.setups} />
          <p className="metronome-setup-note">
            <Inline text={preset.setupNote} />
          </p>
        </div>
      </section>

      <section className="block ed-section" style={{ ["--ed-accent" as string]: "var(--orange)" }}>
        <div className="container tool-content">
          <article className="prose">
            <h2>Compás y tempo {of}</h2>
            <div className="prose-table-wrap" role="region" aria-label={`Compás y tempo ${of}`} tabIndex={0}>
              <table>
                <tbody>
                  {preset.facts.map(([label, detail]) => (
                    <tr key={label}>
                      <th scope="row">{label}</th>
                      <td>
                        <Inline text={detail} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {preset.sections.map((section) => (
              <Fragment key={section.heading}>
                <h2>{section.heading}</h2>
                <RichBlocks blocks={section.blocks} />
              </Fragment>
            ))}

            <h2>Cómo practicar {preset.name} con el metrónomo</h2>
            <ol>
              {preset.practice.map((step) => (
                <li key={step}>
                  <Inline text={step} />
                </li>
              ))}
            </ol>

            <h2>Cómo leer el tempo de esta página</h2>
            <p>
              Los BPM cuentan el pulso del compás, que no siempre es una negra: en 6/8 cada pulso es
              una negra con puntillo (tres corcheas), en 2/2 es una blanca (cuatro corcheas) y en 3/4,
              una negra (dos corcheas). Por eso conviene pensar también en corcheas por minuto:
            </p>
            <ul>
              {preset.setups.map((setup) => {
                const pulse = getMeter(setup.meter).pulse;
                return (
                  <li key={setup.label}>
                    <strong>{setup.label}:</strong> {setup.bpm} BPM de {pulse}, es decir,{" "}
                    {setup.bpm * EIGHTHS_PER_PULSE[pulse]} corcheas por minuto.
                  </li>
                );
              })}
            </ul>
            {preset.setups.length > 1 && (
              <p>
                Como las corcheas van a la misma velocidad, al cambiar de compás el ritmo de fondo no
                cambia: solo cambia cómo se agrupan y dónde caen los apoyos.
              </p>
            )}

            <h2>Cómo ajustar el metrónomo</h2>
            <ul>
              <li>
                <strong>Compás:</strong> en los compases de 6/8 el metrónomo cuenta negras con puntillo
                (dos pulsos por compás); en 2/2 cuenta blancas; en 3/4, negras.
              </li>
              <li>
                <strong>Subdivisión:</strong> agrega clics suaves entre pulso y pulso. Con corcheas
                escuchas el detalle del ritmo; sin subdivisión, solo el pulso.
              </li>
              <li>
                <strong>Acentos:</strong> toca cada punto para que ese tiempo suene fuerte, suave o sin
                acento, y arma el patrón que estés practicando.
              </li>
              <li>
                <strong>Tempo de una grabación:</strong> pon la canción y toca <strong>Tap tempo</strong> al
                ritmo del pulso; el metrónomo calcula los BPM.
              </li>
              <li>
                <strong>Subir el tempo:</strong> de 2 a 5 BPM cuando el pasaje salga limpio tres veces
                seguidas. Si se desordena, baja 8 y vuelve a subir.
              </li>
            </ul>

            <h2>Errores comunes al practicar con metrónomo</h2>
            <ul>
              <li>
                <strong>Acelerar en los finales de frase:</strong> es el error más frecuente. Graba unos
                compases con el celular y escucha si llegas antes que el clic.
              </li>
              <li>
                <strong>Tocar sin escuchar el clic:</strong> cuando vas exactamente a tempo, tu golpe y
                el clic se funden y casi dejas de oírlo; si lo escuchas antes o después de tu nota,
                ajusta.
              </li>
              <li>
                <strong>Subir el tempo demasiado pronto:</strong> un ritmo limpio y lento suena mejor
                que uno rápido y desordenado, y se aprende más rápido.
              </li>
              <li>
                <strong>Contar el compás equivocado:</strong> a tempo rápido, un 6/8 se siente en dos
                pulsos y un 2/2 en dos blancas; contar todas las corcheas en voz alta te frena.
              </li>
            </ul>

            <h2>Preguntas frecuentes</h2>
            <FaqList items={preset.faqs} openFirst={false} />
          </article>
          <aside className="tool-aside">
            {coursePage && (
              <>
                <h2 className="ed-h2">Aprende con un profe</h2>
                <ul className="ed-link-list">
                  <li>
                    <Link href={coursePage.path} prefetch={false}>
                      <strong>Clases de {coursePage.course.label.toLowerCase()}</strong>
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
            <h2 className="ed-h2">Otros ritmos colombianos</h2>
            <ul className="ed-chip-list">
              {others.map((other) => (
                <li key={other.slug}>
                  <Link href={rhythmPresetPath(other.slug)} prefetch={false}>
                    {other.headline.replace(/^Metrónomo para /, "").replace(/^./, (letter) => letter.toUpperCase())}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="ed-chip-list">
              <li>
                <Link href={METRONOME_PATH} prefetch={false}>
                  Metrónomo
                </Link>
              </li>
              <li>
                <Link href={TUNER_PATH} prefetch={false}>
                  Afinador
                </Link>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <CtaBand
        title={coursePage ? `¿Quieres aprender ${coursePage.course.label.toLowerCase()}?` : "Aprende música con un profe"}
        text="Clases virtuales o a domicilio en Bogotá con profes evaluados en música, pedagogía y calidad humana."
        primary={{
          href: whatsappHref(`¡Hola! Vengo del metrónomo para ${preset.name} y quiero información sobre clases.`),
          label: "Escribir por WhatsApp",
          external: true,
        }}
        secondary={{ href: coursePage?.path ?? "/clases", label: "Ver clases" }}
      />
      <Footer />
    </>
  );
}
