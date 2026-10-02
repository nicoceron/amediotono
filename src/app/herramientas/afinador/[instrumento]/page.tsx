import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/editorial/Breadcrumbs";
import { CtaBand } from "@/components/editorial/CtaBand";
import { FaqList } from "@/components/editorial/FaqList";
import { JsonLdScript } from "@/components/editorial/JsonLdScript";
import { Inline, RichBlocks, plainText } from "@/components/RichText";
import { Tuner } from "@/components/tools/Tuner";
import { TunerStringsTable, TuningChangesTable } from "@/components/tools/TunerStringsTable";
import { getPost, postPath } from "@/lib/blog";
import type { BlogPost } from "@/lib/content-types";
import { whatsappHref } from "@/lib/contact";
import { getCoursePage } from "@/lib/course-pages";
import {
  METRONOME_PATH,
  STANDARD_GUITAR_MIDI,
  TOOLS_PATH,
  TUNER_GROUPS,
  TUNER_PATH,
  TUNER_PRESETS,
  getTunerPreset,
  tunerPresetPath,
  tunerPresetTitle,
  tunerPresetsInGroup,
  tunerSubject,
  tunerSubjectOf,
  type TunerPreset,
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

const COUNT_WORDS = ["cero", "una", "dos", "tres", "cuatro", "cinco", "seis"];

export function generateStaticParams() {
  return TUNER_PRESETS.map((preset) => ({ instrumento: preset.slug }));
}

/** "el tiple", "la guitarra en Drop D" */
function withArticle(preset: TunerPreset) {
  return `${preset.gender === "m" ? "el" : "la"} ${tunerSubject(preset)}`;
}

/** "Drop D", "Medio tono abajo": the alternate tuning's name for table headers. */
function variantLabel(preset: TunerPreset) {
  const label = (preset.variant ?? "").replace(/^en /, "");
  return label.charAt(0).toUpperCase() + label.slice(1);
}

/** True when a course's strings don't all sound at the same octave (tiple, charango). */
function hasCourses(preset: TunerPreset) {
  return preset.strings.some((item) => /orden/.test(item.label));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ instrumento: string }>;
}): Promise<Metadata> {
  const { instrumento } = await params;
  const preset = getTunerPreset(instrumento);
  if (!preset) return {};

  const subject = tunerSubject(preset);
  return createPageMetadata({
    title: brandTitle(preset.seoTitle ?? `${preset.headline} gratis con micrófono`),
    description: preset.metaDescription,
    path: tunerPresetPath(preset.slug),
    image: shareImage(`afinador-${preset.slug}`),
    keywords: [
      `afinador de ${subject}`,
      `afinador de ${subject} online`,
      `afinar ${withArticle(preset)}`,
      `notas de las cuerdas ${tunerSubjectOf(preset)}`,
      `afinación ${tunerSubjectOf(preset)}`,
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
  const title = tunerPresetTitle(preset);
  const subject = tunerSubject(preset);
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Herramientas", path: TOOLS_PATH },
    { name: "Afinador", path: TUNER_PATH },
    { name: title, path },
  ];
  const coursePage = preset.courseId ? getCoursePage(preset.courseId) : undefined;
  const related = preset.relatedPostSlugs
    .map((slug) => getPost(slug))
    .filter((post): post is BlogPost => Boolean(post));
  const group = TUNER_GROUPS.find((item) => item.id === preset.group);
  const siblings = tunerPresetsInGroup(preset.group).filter((other) => other.slug !== preset.slug);
  const standardGuitar = getTunerPreset("guitarra");
  const isGuitarVariant = preset.group === "guitarra";
  const changed = preset.strings.filter((item, index) => item.midi !== STANDARD_GUITAR_MIDI[index]).length;
  const raises = preset.strings.some((item, index) => item.midi > STANDARD_GUITAR_MIDI[index]);
  const courses = hasCourses(preset);
  const lowercaseTitle = title.charAt(0).toLowerCase() + title.slice(1);

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
              <h1>{preset.headline}</h1>
              <p className="ed-lead">{preset.intro}</p>
            </div>
          </header>
          <Tuner strings={preset.strings} instrumentName={subject} flats={preset.flats} />
        </div>
      </section>

      <section className="block ed-section" style={{ ["--ed-accent" as string]: "var(--green)" }}>
        <div className="container tool-content">
          <article className="prose">
            <h2>Notas de las cuerdas {tunerSubjectOf(preset)}</h2>
            <p>
              Frecuencias calculadas con el La de referencia en 440 Hz. Si tu grupo afina con otra
              referencia, por ejemplo 442 Hz, cámbiala en el selector «La =» y el afinador ajusta
              todas las notas.
            </p>
            <TunerStringsTable strings={preset.strings} caption={preset.tuningName} flats={preset.flats} />
            {preset.stringsNote?.map((paragraph) => (
              <p key={paragraph}>
                <Inline text={paragraph} />
              </p>
            ))}

            {isGuitarVariant && (
              <>
                <h2>Cómo pasar de la afinación estándar a {variantLabel(preset)}</h2>
                <TuningChangesTable
                  standard={STANDARD_GUITAR_MIDI}
                  strings={preset.strings}
                  tuningLabel={variantLabel(preset)}
                  flats={preset.flats}
                />
                <p>
                  {changed === 1
                    ? "Cambia una sola cuerda."
                    : `Cambian ${changed === 6 ? "las seis cuerdas" : `${COUNT_WORDS[changed]} de las seis cuerdas`}.`}{" "}
                  {raises
                    ? "Algunas suben: hazlo despacio y en pasos cortos, porque subir una cuerda aumenta su tensión."
                    : "Todas las que cambian bajan, así que la guitarra queda con menos tensión que en la afinación estándar."}{" "}
                  Si te pasas, vuelve a subir hasta la nota desde abajo: así la cuerda queda firme en la
                  clavija. Para volver a la afinación normal, usa el{" "}
                  {standardGuitar && (
                    <Link href={tunerPresetPath(standardGuitar.slug)} prefetch={false}>
                      afinador de guitarra estándar
                    </Link>
                  )}
                  .
                </p>
              </>
            )}

            {preset.sections.map((section) => (
              <Fragment key={section.heading}>
                <h2>{section.heading}</h2>
                <RichBlocks blocks={section.blocks} />
              </Fragment>
            ))}

            <h2>Cómo afinar {withArticle(preset)} con este afinador</h2>
            <ol>
              <li>
                Toca <strong>Activar micrófono</strong> y acepta el permiso del navegador. El sonido se
                analiza en tu dispositivo: no se graba ni se envía.
              </li>
              <li>
                Deja la cuerda objetivo en <strong>Auto</strong> para que el afinador reconozca qué
                cuerda tocas, o toca una nota para fijarla.
                {courses && " Las cuerdas que suenan exactamente igual comparten botón; las que van en octava tienen el suyo."}
              </li>
              <li>
                Toca una sola cuerda al aire, con fuerza media, y deja que suene.
                {courses && " Apaga con la mano las demás cuerdas del orden para que el micrófono escuche solo una."}
              </li>
              <li>
                Si la aguja está a la izquierda, la nota está baja: sube la afinación. Si está a la
                derecha, bájala. Entre −5 y +5 cents se considera afinada.
              </li>
              <li>Usa el parlante junto a cada nota para escuchar la referencia y entrenar el oído.</li>
              <li>Repasa todas las cuerdas al final: la tensión de unas mueve un poco a las otras.</li>
            </ol>

            <h2>Consejos para afinar tu {subject}</h2>
            <ul className="ed-checklist">
              {preset.tips.map((tip) => (
                <li key={tip}>
                  <CheckCircle2 size={22} strokeWidth={2.4} aria-hidden="true" />
                  <span>
                    <Inline text={tip} />
                  </span>
                </li>
              ))}
            </ul>

            <h2>Problemas comunes al afinar</h2>
            <ul>
              <li>
                <strong>La aguja salta entre notas:</strong> toca una sola cuerda, un poco más suave, y
                espera a que el sonido se estabilice. El primer instante de cada nota siempre suena un
                poco más agudo.
              </li>
              <li>
                <strong>No detecta las cuerdas graves:</strong> los micrófonos de celular captan mal las
                frecuencias bajas. Acércalo al instrumento o toca el armónico de la mitad de la cuerda
                (traste 12): el afinador lo reconoce como la misma cuerda y te avisa que suena una
                octava arriba.
              </li>
              <li>
                <strong>Al aire está afinado, pero lo que tocas suena mal:</strong> revisa que ninguna
                cuerda esté en la octava equivocada y que las cuerdas no estén viejas. Si sigue igual,
                pide a tu profe o a un luthier que revise la calibración del instrumento.
              </li>
              <li>
                <strong>Se desafina enseguida:</strong> las cuerdas nuevas se estiran durante varios
                días, y los cambios de temperatura y humedad mueven la afinación. Afina en el mismo
                lugar donde vas a tocar.
              </li>
              <li>
                <strong>El navegador no pide el micrófono:</strong> revisa los permisos del sitio en la
                configuración del navegador y que ninguna otra app esté usando el micrófono.
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
            <h2 className="ed-h2">{group?.title ?? "Otros afinadores"}</h2>
            <ul className="ed-chip-list">
              {isGuitarVariant && standardGuitar && (
                <li>
                  <Link href={tunerPresetPath(standardGuitar.slug)} prefetch={false}>
                    Guitarra estándar
                  </Link>
                </li>
              )}
              {siblings.map((other) => (
                <li key={other.slug}>
                  <Link href={tunerPresetPath(other.slug)} prefetch={false}>
                    {other.group === "guitarra" ? variantLabel(other) : tunerPresetTitle(other).replace(/^Afinador de /, "")}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="ed-chip-list">
              <li>
                <Link href={TUNER_PATH} prefetch={false}>
                  Todos los afinadores
                </Link>
              </li>
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
        title={coursePage ? `¿Quieres aprender ${coursePage.course.label.toLowerCase()}?` : "Aprende con un profe de música"}
        text="Clases virtuales o a domicilio en Bogotá con profes evaluados en música, pedagogía y calidad humana."
        primary={{
          href: whatsappHref(`¡Hola! Vengo del ${lowercaseTitle} y quiero información sobre clases.`),
          label: "Escribir por WhatsApp",
          external: true,
        }}
        secondary={{ href: coursePage?.path ?? "/clases", label: "Ver clases" }}
      />
      <Footer />
    </>
  );
}
