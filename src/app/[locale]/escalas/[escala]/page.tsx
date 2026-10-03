import {localizeMetadata} from "@/i18n/server";
import {getLocale} from "next-intl/server";
import {useText} from "@/i18n/use-text";
import {getText} from "@/i18n/server";
import type { Metadata } from "next";
import Link from "@/i18n/navigation";
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
  if (!scale) return await localizeMetadata({});
  const [tx, locale] = await Promise.all([getText(), getLocale()]);
  const title = locale === "es" ? scaleSeoTitle(scale) : tx.template("Escala de {p0}", {p0: tx(scale.longName)});

  return await localizeMetadata(createPageMetadata({
    title: brandTitle(title),
    description: scaleMetaDescription(scale),
    path: scalePath(scale),
    markdownPath: `${scalePath(scale)}.md`,
    image: shareImage("escalas"),
    keywords: [
      `escala de ${scale.longName.toLowerCase()}`,
      `escala de ${scale.longName.toLowerCase()} piano`,
      `escala de ${scale.longName.toLowerCase()} guitarra`,
      `notas de la escala de ${scale.longName.toLowerCase()}`,
    ],
  }));
}

const RELATED_POSTS: Record<string, string[]> = {
  default: ["escalas-mayores-y-menores-explicadas", "circulo-de-quintas-explicado", "que-es-un-intervalo-musical", "que-es-el-solfeo-y-como-practicarlo"],
  improvisation: ["como-empezar-a-improvisar", "escalas-mayores-y-menores-explicadas", "que-es-un-intervalo-musical"],
};

function ChordRow({ items }: { items: DiatonicChord[] }) {
  const tx = useText();
  return (
    <ul className="fifths-chords">
      {items.map((item) => (
        <li key={item.roman}>
          {item.chord ? (
            <Link href={chordPath(item.chord)} prefetch={false}>
              <strong>{tx(item.symbol)}</strong>
              <small>{tx(item.roman)}</small>
            </Link>
          ) : (
            <span>
              <strong>{tx(item.symbol)}</strong>
              <small>{tx(item.roman)}</small>
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
  const tx = await getText();
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
  const title = tx.template("Escala de {p0}", {p0: tx(scale.name)});
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
                {tx("La escala de ")}{tx(scale.name)} {tx(" tiene ")}{tx(scale.notes.length)} {tx(" notas: ")}{tx(scaleNotesText(scale))}{tx(". Es una escala")}{tx(" ")}
                {tx(scale.type.sound)}{tx(". ")}{tx(scale.type.usage)}
              </p>
              <div className="ed-actions">
                <PlayNotesButton key={scale.slug} midis={midis} mode="scale" label={tx("Escuchar la escala")} />
              </div>
            </div>
          </header>
          <ul className="ed-facts">
            <li>
              <Music2 size={24} strokeWidth={2.4} aria-hidden="true" />
              <span>{tx("Notas")}</span>
              <strong>{tx(scaleNotesText(scale))}</strong>
            </li>
            <li>
              <Ruler size={24} strokeWidth={2.4} aria-hidden="true" />
              <span>{tx("Fórmula")}</span>
              <strong>{tx(steps.join(" – "))}</strong>
            </li>
            <li>
              <KeyRound size={24} strokeWidth={2.4} aria-hidden="true" />
              <span>{tx(signature ? "Armadura" : "Notas por octava")}</span>
              <strong>{tx(signature ?? tx.template("{p0} notas", {p0: tx(scale.notes.length)}))}</strong>
            </li>
            <li>
              <Repeat size={24} strokeWidth={2.4} aria-hidden="true" />
              <span>{tx(relative ? "Relativa" : "Paralela")}</span>
              <strong>{tx((relative ?? parallel).name)}</strong>
            </li>
          </ul>

          <div className="music-panel" id="piano">
            <h2>{tx("Escala de ")}{tx(scale.name)} {tx(" en piano")}</h2>
            <PianoKeyboard
              highlighted={midis}
              labels={[...degrees.map((degree) => degree.name), degrees[0].name]}
              roots={[midis[0], midis[midis.length - 1]]}
              title={tx(tx.template("Teclas de la escala de {p0}: {p1}", {p0: tx(scale.name), p1: tx(scaleNotesText(scale))}))}
            />
          </div>

          <div className="music-panel" id="guitarra">
            <h2>{tx("Escala de ")}{tx(scale.name)} {tx(" en guitarra")}</h2>
            <div className="fretboard-wrap" role="region" aria-label={tx(tx.template("Mástil de guitarra: {p0}", {p0: tx(scale.name)}))} tabIndex={0} data-lenis-prevent-horizontal>
              <Fretboard
                tuning={GUITAR_TUNING}
                stringLabels={GUITAR_STRING_NAMES}
                pitchClasses={scale.pitchClasses}
                rootPc={rootPc}
                noteLabel={scaleNoteLabels(scale)}
                title={tx(tx.template("Notas de la escala de {p0} en el mástil de la guitarra, del traste 0 al 12", {p0: tx(scale.name)}))}
              />
            </div>
            <p className="tool-hint">
              {tx("Todas las notas de la escala del traste 0 al 12, con la tónica (")}{tx(noteName(scale.root))}{tx(") en color. Las cuerdas van de la 1.ª (arriba) a la 6.ª (abajo), como en una tablatura.")}</p>
          </div>
        </div>
      </section>

      <section className="block ed-section" style={{ ["--ed-accent" as string]: accent }}>
        <div className="container tool-content">
          <article className="prose">
            <h2>{tx("Grados e intervalos")}</h2>
            <div className="prose-table-wrap" role="region" aria-label={tx(tx.template("Grados de la escala de {p0}", {p0: tx(scale.name)}))} tabIndex={0}>
              <table>
                <thead>
                  <tr>
                    <th scope="col">{tx("Grado")}</th>
                    <th scope="col">{tx("Nota")}</th>
                    <th scope="col">{tx("Intervalo desde la tónica")}</th>
                    {seven && <th scope="col">{tx("Función")}</th>}
                  </tr>
                </thead>
                <tbody>
                  {degrees.map((degree, i) => (
                    <tr key={degree.name}>
                      <th scope="row">{tx(degree.short)}</th>
                      <td>
                        {tx(degree.name)}
                        {tx(degree.plain && tx.template(" (suena como {p0})", {p0: tx(degree.plain)}))}
                      </td>
                      <td>{tx(degree.interval)}</td>
                      {seven && <td>{tx(degreeName(scale, i))}</td>}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              {tx("Entre nota y nota la escala avanza así: ")}{tx(steps.join(" – "))} {tx(" (T = tono, S = semitono")}{tx(steps.includes("T½") ? ", T½ = tono y medio" : "")}{tx("). Esa fórmula es la misma en cualquier tonalidad: si la aprendes, puedes armar la escala ")}{tx(scale.type.name)} {tx(" desde cualquier nota.")}</p>
            {degrees.some((degree) => degree.plain) && (
              <p>
                {tx("Algunas notas se escriben con un nombre poco común (")}{tx(degrees
                  .filter((degree) => degree.plain)
                  .map((degree) => tx.template("{p0} = {p1}", {p0: tx(degree.name), p1: tx(degree.plain)}))
                  .join(", "))}
                {tx(") porque en una escala de siete notas cada letra aparece una sola vez. Al tocar, es la misma tecla o traste.")}</p>
            )}

            {triads.length > 0 && (
              <>
                <h2>{tx("Acordes de la escala de ")}{tx(scale.name)}</h2>
                <p>{tx("Al apilar terceras sobre cada grado salen estos acordes. Son los que más vas a encontrar en canciones en esta tonalidad.")}</p>
                <h3>{tx("Tríadas")}</h3>
                <ChordRow items={triads} />
                <h3>{tx("Acordes de séptima")}</h3>
                <ChordRow items={sevenths} />
              </>
            )}

            <h2>{tx("Cómo practicar esta escala")}</h2>
            <ul>
              {practiceTips(scale).map((tip) => (
                <li key={tip}>{tx(tip)}</li>
              ))}
            </ul>

            <h2>{tx("Preguntas frecuentes")}</h2>
            <FaqList items={faqs} openFirst={false} />
          </article>

          <aside className="tool-aside">
            <h2 className="ed-h2">{tx("Escalas relacionadas")}</h2>
            <ul className="ed-link-list">
              {relative && (
                <li>
                  <Link href={scalePath(relative)} prefetch={false}>
                    <strong>{tx(relative.name)} {tx(" (relativa)")}</strong>
                    <span>{tx(scaleNotesText(relative))}</span>
                  </Link>
                </li>
              )}
              <li>
                <Link href={scalePath(parallel)} prefetch={false}>
                  <strong>{tx(parallel.name)} {tx(" (paralela)")}</strong>
                  <span>{tx(scaleNotesText(parallel))}</span>
                </Link>
              </li>
            </ul>
            <h2 className="ed-h2">{tx("Otras escalas de ")}{tx(noteName(scale.root))}</h2>
            <ul className="ed-chip-list">
              {siblings.map((other) => (
                <li key={other.slug}>
                  <Link href={scalePath(other)} prefetch={false}>
                    {other.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="ed-h2">{tx("Teoría y práctica")}</h2>
            <ul className="ed-link-list">
              <li>
                <Link href={CIRCLE_OF_FIFTHS_PATH} prefetch={false}>
                  <strong>{tx("Círculo de quintas interactivo")}</strong>
                  <span>{tx("Armaduras y acordes de las 24 tonalidades.")}</span>
                </Link>
              </li>
              <li>
                <Link href={METRONOME_PATH} prefetch={false}>
                  <strong>{tx("Metrónomo online")}</strong>
                  <span>{tx("Practica la escala a tempo y sube la velocidad poco a poco.")}</span>
                </Link>
              </li>
              {related.map((post) => (
                <li key={post.slug}>
                  <Link href={postPath(post.slug)} prefetch={false}>
                    <strong>{tx(post.title)}</strong>
                    <span>{tx(post.excerpt)}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="ed-h2">{tx("Aprende con un profe")}</h2>
            <ul className="ed-link-list">
              {courses.map(
                (course) =>
                  course && (
                    <li key={course.id}>
                      <Link href={courseLandingHref(course)} prefetch={false}>
                        <strong>{tx("Clases de ")}{tx(course.label.toLowerCase())}</strong>
                        <span>{tx("Virtuales o a domicilio en Bogotá, con profes evaluados.")}</span>
                      </Link>
                    </li>
                  ),
              )}
            </ul>
            <p className="ed-center-link">
              <Link href={SCALES_PATH} prefetch={false}>
                {tx("Ver todas las escalas ")}<ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </p>
          </aside>
        </div>
      </section>

      <CtaBand
        title={tx("¿Quieres entender la teoría tocando?")}
        text="Un profe te enseña escalas, armonía y lectura aplicadas a tu instrumento, en clases virtuales o a domicilio en Bogotá."
        primary={{
          href: whatsappHref(tx.template("¡Hola! Vengo de la escala de {p0} y quiero información sobre clases.", {p0: tx(scale.name)})),
          label: "Escribir por WhatsApp",
          external: true,
        }}
        secondary={{ href: "/clases", label: "Ver clases" }}
      />
      <Footer />
    </>
  );
}
