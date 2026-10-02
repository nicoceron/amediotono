import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, KeyRound, Music2, Repeat, Ruler } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/editorial/Breadcrumbs";
import { CtaBand } from "@/components/editorial/CtaBand";
import { FaqList } from "@/components/editorial/FaqList";
import { JsonLdScript } from "@/components/editorial/JsonLdScript";
import { Fretboard } from "@/components/music/Fretboard";
import { PianoKeyboard } from "@/components/music/PianoKeyboard";
import { PlayNotesButton } from "@/components/music/PlayNotesButton";
import { getPost, postPath } from "@/lib/blog";
import { GUITAR_TUNING } from "@/lib/chord-voicings";
import type { BlogPost } from "@/lib/content-types";
import { whatsappHref } from "@/lib/contact";
import { courseLandingHref } from "@/lib/course-pages";
import { getCourseById } from "@/lib/courses";
import {
  CIRCLE_OF_FIFTHS_PATH,
  GUITAR_STRING_NAMES,
  SCALES_PATH,
  chordPath,
  practiceTips,
  relatedScales,
  scaleDegrees,
  scaleFaqs,
  scaleMetaDescription,
  scaleMidis,
  scaleNoteLabels,
  scaleNotesText,
  scalePath,
  scaleSeoTitle,
} from "@/lib/music-pages";
import {
  SCALES,
  SCALE_TYPES,
  degreeName,
  diatonicSevenths,
  diatonicTriads,
  getScale,
  keySignature,
  keySignatureText,
  noteName,
  pitchClass,
  scaleFor,
  stepPattern,
  type DiatonicChord,
} from "@/lib/music-theory";
import { METRONOME_PATH } from "@/lib/music-tools";
import { brandTitle, breadcrumbJsonLd, createPageMetadata, faqPageJsonLd, webPageJsonLd } from "@/lib/seo";
import { shareImage } from "@/lib/share-cards";

/** Date the scale dictionary was written; bump when the template copy changes. */
const SCALES_UPDATED_AT = "2026-10-01";

const SCALE_ACCENTS: Record<string, string> = {
  mayor: "var(--orange)",
  "menor-natural": "var(--blue)",
  "menor-armonica": "var(--purple)",
  "menor-melodica": "var(--green)",
  "pentatonica-mayor": "var(--orange)",
  "pentatonica-menor": "var(--pink)",
  blues: "var(--blue)",
};

export const dynamicParams = false;

export function generateStaticParams() {
  return SCALES.map((scale) => ({ escala: scale.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ escala: string }>;
}): Promise<Metadata> {
  const { escala } = await params;
  const scale = getScale(escala);
  if (!scale) return {};

  return createPageMetadata({
    title: brandTitle(scaleSeoTitle(scale)),
    description: scaleMetaDescription(scale),
    path: scalePath(scale),
    image: shareImage("escalas"),
    keywords: [
      `escala de ${scale.longName.toLowerCase()}`,
      `escala de ${scale.longName.toLowerCase()} piano`,
      `escala de ${scale.longName.toLowerCase()} guitarra`,
      `notas de la escala de ${scale.longName.toLowerCase()}`,
    ],
  });
}

const RELATED_POSTS: Record<string, string[]> = {
  default: ["escalas-mayores-y-menores-explicadas", "circulo-de-quintas-explicado", "que-es-un-intervalo-musical", "que-es-el-solfeo-y-como-practicarlo"],
  improvisation: ["como-empezar-a-improvisar", "escalas-mayores-y-menores-explicadas", "que-es-un-intervalo-musical"],
};

function ChordRow({ items }: { items: DiatonicChord[] }) {
  return (
    <ul className="fifths-chords">
      {items.map((item) => (
        <li key={item.roman}>
          {item.chord ? (
            <Link href={chordPath(item.chord)} prefetch={false}>
              <strong>{item.symbol}</strong>
              <small>{item.roman}</small>
            </Link>
          ) : (
            <span>
              <strong>{item.symbol}</strong>
              <small>{item.roman}</small>
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default async function ScalePage({
  params,
}: {
  params: Promise<{ escala: string }>;
}) {
  const { escala } = await params;
  const scale = getScale(escala);
  if (!scale) notFound();

  const path = scalePath(scale);
  const accent = SCALE_ACCENTS[scale.type.id];
  const degrees = scaleDegrees(scale);
  const midis = scaleMidis(scale);
  const steps = stepPattern(scale);
  const seven = scale.notes.length === 7;
  const signature = seven ? keySignatureText(keySignature(scale)) : undefined;
  const { relative, parallel } = relatedScales(scale);
  const triads = diatonicTriads(scale);
  const sevenths = diatonicSevenths(scale);
  const faqs = scaleFaqs(scale);
  const rootPc = pitchClass(scale.root);
  const siblings = SCALE_TYPES.filter((type) => type.id !== scale.type.id).map((type) => scaleFor(rootPc, type.id));
  const improvisation = scale.type.id.startsWith("pentatonica") || scale.type.id === "blues";
  const related = (improvisation ? RELATED_POSTS.improvisation : RELATED_POSTS.default)
    .map((slug) => getPost(slug))
    .filter((post): post is BlogPost => Boolean(post));
  const courses = ["piano", "guitarra-acustica", "teoria-musical"].map((id) => getCourseById(id)).filter(Boolean);
  const title = `Escala de ${scale.name}`;
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Escalas", path: SCALES_PATH },
    { name: scale.name, path },
  ];

  return (
    <>
      <JsonLdScript
        nodes={[
          webPageJsonLd({
            path,
            name: title,
            description: scaleMetaDescription(scale),
            dateModified: SCALES_UPDATED_AT,
            about: { "@type": "DefinedTerm", name: `Escala de ${scale.longName}` },
          }),
          breadcrumbJsonLd(crumbs),
          faqPageJsonLd(faqs, path),
        ]}
      />
      <section className="block ed-page tool-page" style={{ ["--ed-accent" as string]: accent }}>
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <header className="ed-hero ed-hero--center">
            <div className="ed-hero-copy">
              <h1>{title}</h1>
              <p className="ed-lead">
                La escala de {scale.name} tiene {scale.notes.length} notas: {scaleNotesText(scale)}. Es una escala{" "}
                {scale.type.sound}. {scale.type.usage}
              </p>
              <div className="ed-actions">
                <PlayNotesButton key={scale.slug} midis={midis} mode="scale" label="Escuchar la escala" />
              </div>
            </div>
          </header>
          <ul className="ed-facts">
            <li>
              <Music2 size={24} strokeWidth={2.4} aria-hidden="true" />
              <span>Notas</span>
              <strong>{scaleNotesText(scale)}</strong>
            </li>
            <li>
              <Ruler size={24} strokeWidth={2.4} aria-hidden="true" />
              <span>Fórmula</span>
              <strong>{steps.join(" – ")}</strong>
            </li>
            <li>
              <KeyRound size={24} strokeWidth={2.4} aria-hidden="true" />
              <span>{signature ? "Armadura" : "Notas por octava"}</span>
              <strong>{signature ?? `${scale.notes.length} notas`}</strong>
            </li>
            <li>
              <Repeat size={24} strokeWidth={2.4} aria-hidden="true" />
              <span>{relative ? "Relativa" : "Paralela"}</span>
              <strong>{(relative ?? parallel).name}</strong>
            </li>
          </ul>

          <div className="music-panel" id="piano">
            <h2>Escala de {scale.name} en piano</h2>
            <PianoKeyboard
              highlighted={midis}
              labels={[...degrees.map((degree) => degree.name), degrees[0].name]}
              roots={[midis[0], midis[midis.length - 1]]}
              title={`Teclas de la escala de ${scale.name}: ${scaleNotesText(scale)}`}
            />
          </div>

          <div className="music-panel" id="guitarra">
            <h2>Escala de {scale.name} en guitarra</h2>
            <div className="fretboard-wrap" role="region" aria-label={`Mástil de guitarra: ${scale.name}`} tabIndex={0} data-lenis-prevent>
              <Fretboard
                tuning={GUITAR_TUNING}
                stringLabels={GUITAR_STRING_NAMES}
                pitchClasses={scale.pitchClasses}
                rootPc={rootPc}
                noteLabel={scaleNoteLabels(scale)}
                title={`Notas de la escala de ${scale.name} en el mástil de la guitarra, del traste 0 al 12`}
              />
            </div>
            <p className="tool-hint">
              Todas las notas de la escala del traste 0 al 12, con la tónica ({noteName(scale.root)}) en color. Las cuerdas
              van de la 1.ª (arriba) a la 6.ª (abajo), como en una tablatura.
            </p>
          </div>
        </div>
      </section>

      <section className="block ed-section" style={{ ["--ed-accent" as string]: accent }}>
        <div className="container tool-content">
          <article className="prose">
            <h2>Grados e intervalos</h2>
            <div className="prose-table-wrap" role="region" aria-label={`Grados de la escala de ${scale.name}`} tabIndex={0}>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Grado</th>
                    <th scope="col">Nota</th>
                    <th scope="col">Intervalo desde la tónica</th>
                    {seven && <th scope="col">Función</th>}
                  </tr>
                </thead>
                <tbody>
                  {degrees.map((degree, i) => (
                    <tr key={degree.name}>
                      <th scope="row">{degree.short}</th>
                      <td>
                        {degree.name}
                        {degree.plain && ` (suena como ${degree.plain})`}
                      </td>
                      <td>{degree.interval}</td>
                      {seven && <td>{degreeName(scale, i)}</td>}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              Entre nota y nota la escala avanza así: {steps.join(" – ")} (T = tono, S = semitono
              {steps.includes("T½") ? ", T½ = tono y medio" : ""}). Esa fórmula es la misma en cualquier tonalidad: si la
              aprendes, puedes armar la escala {scale.type.name} desde cualquier nota.
            </p>
            {degrees.some((degree) => degree.plain) && (
              <p>
                Algunas notas se escriben con un nombre poco común ({degrees
                  .filter((degree) => degree.plain)
                  .map((degree) => `${degree.name} = ${degree.plain}`)
                  .join(", ")}
                ) porque en una escala de siete notas cada letra aparece una sola vez. Al tocar, es la misma tecla o traste.
              </p>
            )}

            {triads.length > 0 && (
              <>
                <h2>Acordes de la escala de {scale.name}</h2>
                <p>Al apilar terceras sobre cada grado salen estos acordes. Son los que más vas a encontrar en canciones en esta tonalidad.</p>
                <h3>Tríadas</h3>
                <ChordRow items={triads} />
                <h3>Acordes de séptima</h3>
                <ChordRow items={sevenths} />
              </>
            )}

            <h2>Cómo practicar esta escala</h2>
            <ul>
              {practiceTips(scale).map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>

            <h2>Preguntas frecuentes</h2>
            <FaqList items={faqs} openFirst={false} />
          </article>

          <aside className="tool-aside">
            <h2 className="ed-h2">Escalas relacionadas</h2>
            <ul className="ed-link-list">
              {relative && (
                <li>
                  <Link href={scalePath(relative)} prefetch={false}>
                    <strong>{relative.name} (relativa)</strong>
                    <span>{scaleNotesText(relative)}</span>
                  </Link>
                </li>
              )}
              <li>
                <Link href={scalePath(parallel)} prefetch={false}>
                  <strong>{parallel.name} (paralela)</strong>
                  <span>{scaleNotesText(parallel)}</span>
                </Link>
              </li>
            </ul>
            <h2 className="ed-h2">Otras escalas de {noteName(scale.root)}</h2>
            <ul className="ed-chip-list">
              {siblings.map((other) => (
                <li key={other.slug}>
                  <Link href={scalePath(other)} prefetch={false}>
                    {other.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="ed-h2">Teoría y práctica</h2>
            <ul className="ed-link-list">
              <li>
                <Link href={CIRCLE_OF_FIFTHS_PATH} prefetch={false}>
                  <strong>Círculo de quintas interactivo</strong>
                  <span>Armaduras y acordes de las 24 tonalidades.</span>
                </Link>
              </li>
              <li>
                <Link href={METRONOME_PATH} prefetch={false}>
                  <strong>Metrónomo online</strong>
                  <span>Practica la escala a tempo y sube la velocidad poco a poco.</span>
                </Link>
              </li>
              {related.map((post) => (
                <li key={post.slug}>
                  <Link href={postPath(post.slug)} prefetch={false}>
                    <strong>{post.title}</strong>
                    <span>{post.excerpt}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="ed-h2">Aprende con un profe</h2>
            <ul className="ed-link-list">
              {courses.map(
                (course) =>
                  course && (
                    <li key={course.id}>
                      <Link href={courseLandingHref(course)} prefetch={false}>
                        <strong>Clases de {course.label.toLowerCase()}</strong>
                        <span>Virtuales o a domicilio en Bogotá, con profes evaluados.</span>
                      </Link>
                    </li>
                  ),
              )}
            </ul>
            <p className="ed-center-link">
              <Link href={SCALES_PATH} prefetch={false}>
                Ver todas las escalas <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </p>
          </aside>
        </div>
      </section>

      <CtaBand
        title="¿Quieres entender la teoría tocando?"
        text="Un profe te enseña escalas, armonía y lectura aplicadas a tu instrumento, en clases virtuales o a domicilio en Bogotá."
        primary={{
          href: whatsappHref(`¡Hola! Vengo de la escala de ${scale.name} y quiero información sobre clases.`),
          label: "Escribir por WhatsApp",
          external: true,
        }}
        secondary={{ href: "/clases", label: "Ver clases" }}
      />
      <Footer />
    </>
  );
}
