import {localizeMetadata} from "@/i18n/server";
import {getText} from "@/i18n/server";
import type { Metadata } from "next";
import Link from "@/i18n/navigation";
import { notFound } from "next/navigation";
import { ArrowRight, Music2, Piano, Sigma, Tags } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/editorial/Breadcrumbs";
import { CtaBand } from "@/components/editorial/CtaBand";
import { FaqList } from "@/components/editorial/FaqList";
import { JsonLdScript } from "@/components/editorial/JsonLdScript";
import { ChordDiagram } from "@/components/music/ChordDiagram";
import { PianoKeyboard } from "@/components/music/PianoKeyboard";
import { PlayNotesButton } from "@/components/music/PlayNotesButton";
import { getPost, postPath } from "@/lib/blog";
import { GUITAR_TUNING, UKULELE_TUNING, guitarVoicings, ukuleleVoicings } from "@/lib/chord-voicings";
import type { BlogPost } from "@/lib/content-types";
import { whatsappHref } from "@/lib/contact";
import { courseLandingHref } from "@/lib/course-pages";
import { getCourseById } from "@/lib/courses";
import {
  CHORDS_PATH,
  CHORD_ACCENTS,
  CIRCLE_OF_FIFTHS_PATH,
  chordEnharmonic,
  chordFaqs,
  chordFormula,
  chordMetaDescription,
  chordNotesText,
  chordPath,
  chordProgressions,
  chordSeoTitle,
  chordTones,
  guitarInstructions,
  shapeName,
  pianoVoicing,
  sameRootChords,
  scalePath,
  voicingNoteNames,
  voicingRootStrings,
} from "@/lib/music-pages";
import { CHORDS, ascendingMidi, getChord, keysContaining, noteName, scaleFor } from "@/lib/music-theory";
import { TUNER_PATH, tunerPresetPath } from "@/lib/music-tools";
import {
  brandTitle,
  breadcrumbJsonLd,
  createPageMetadata,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/seo";
import { shareImage } from "@/lib/share-cards";

/** Date the chord dictionary was written; bump when the template copy changes. */
const CHORDS_UPDATED_AT = "2026-10-01";

export const dynamicParams = false;

export function generateStaticParams() {
  return CHORDS.map((chord) => ({ acorde: chord.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ acorde: string }>;
}): Promise<Metadata> {
  const { acorde } = await params;
  const chord = getChord(acorde);
  if (!chord) return await localizeMetadata({});
  const enharmonic = chordEnharmonic(chord);

  return await localizeMetadata(createPageMetadata({
    title: brandTitle(chordSeoTitle(chord)),
    description: chordMetaDescription(chord, guitarVoicings(chord)[0]),
    path: chordPath(chord),
    markdownPath: `${chordPath(chord)}.md`,
    image: shareImage("acordes"),
    keywords: [
      `acorde de ${chord.longName.toLowerCase()}`,
      `acorde ${chord.symbol}`,
      `${chord.symbol} guitarra`,
      `${chord.longName.toLowerCase()} piano`,
      `${chord.longName.toLowerCase()} ukelele`,
      ...(enharmonic ? [`acorde de ${enharmonic.longName.toLowerCase()}`] : []),
    ],
  }));
}

const RELATED_POSTS = [
  "acordes-basicos-de-guitarra-para-principiantes",
  "como-hacer-la-cejilla-en-guitarra",
  "ritmos-de-guitarra-rasgueos-basicos",
  "que-es-la-armonia-musical",
  "posicion-correcta-de-las-manos-en-el-piano",
];

export default async function ChordPage({
  params,
}: {
  params: Promise<{ acorde: string }>;
}) {
  const tx = await getText();
  const { acorde } = await params;
  const chord = getChord(acorde);
  if (!chord) notFound();

  const path = chordPath(chord);
  const accent = CHORD_ACCENTS[chord.type.id];
  const guitar = guitarVoicings(chord);
  const ukulele = ukuleleVoicings(chord);
  const piano = pianoVoicing(chord);
  const tones = chordTones(chord);
  const enharmonic = chordEnharmonic(chord);
  const keys = keysContaining(chord);
  const progressions = chordProgressions(chord);
  const siblings = sameRootChords(chord);
  const faqs = chordFaqs(chord, guitar[0]);
  const rootScale = scaleFor(chord.pitchClasses[0], chord.type.family === "minor" ? "menor-natural" : "mayor");
  const related = RELATED_POSTS.filter((slug) => slug !== "como-hacer-la-cejilla-en-guitarra" || guitar[0]?.barre)
    .map((slug) => getPost(slug))
    .filter((post): post is BlogPost => Boolean(post))
    .slice(0, 4);
  const guitarCourse = getCourseById("guitarra-acustica");
  const pianoCourse = getCourseById("piano");
  const title = `Acorde de ${chord.name} (${chord.displaySymbol})`;
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Acordes", path: CHORDS_PATH },
    { name: `${chord.name} (${chord.displaySymbol})`, path },
  ];

  return (
    <>
      <JsonLdScript
        nodes={[
          webPageJsonLd({
            path,
            name: title,
            description: chordMetaDescription(chord, guitar[0]),
            dateModified: CHORDS_UPDATED_AT,
            about: { "@type": "DefinedTerm", name: `Acorde de ${chord.longName}`, alternateName: chord.symbol },
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
              <h1>{tx(title)}</h1>
              <p className="ed-lead">
                {tx(chord.name)} {tx(" es un acorde ")}{tx(chord.type.name)} {tx(" de ")}{tx(chord.notes.length)} {tx(" notas: ")}{tx(chordNotesText(chord))}{tx(". Suena")}{tx(" ")}
                {tx(chord.type.sound)}{tx(". Aquí lo tienes en guitarra, piano y ukelele, con digitación y sonido.")}{tx(enharmonic && tx.template(" También se llama {p0} ({p1}).", {p0: tx(enharmonic.name), p1: tx(enharmonic.symbol)}))}
              </p>
              <div className="ed-actions">
                <PlayNotesButton key={chord.slug} midis={ascendingMidi(chord.notes, 3)} mode="chord" label={`Escuchar ${chord.displaySymbol}`} />
              </div>
            </div>
          </header>
          <ul className="ed-facts">
            <li>
              <Music2 size={24} strokeWidth={2.4} aria-hidden="true" />
              <span>{tx("Notas")}</span>
              <strong>{tx(chordNotesText(chord))}</strong>
            </li>
            <li>
              <Sigma size={24} strokeWidth={2.4} aria-hidden="true" />
              <span>{tx("Fórmula")}</span>
              <strong>{tx(chordFormula(chord))}</strong>
            </li>
            <li>
              <Tags size={24} strokeWidth={2.4} aria-hidden="true" />
              <span>{tx("Cifrado")}</span>
              <strong>
                {tx([chord.displaySymbol, ...chord.type.altSymbols.map((symbol) => tx.template("{p0}{p1}", {p0: tx(noteName(chord.root, "en")), p1: tx(symbol)}))].join(" · "))}
              </strong>
            </li>
            <li>
              <Piano size={24} strokeWidth={2.4} aria-hidden="true" />
              <span>{tx(enharmonic ? "Enarmónico" : "Tipo")}</span>
              <strong>{tx(enharmonic ? tx.template("{p0} ({p1})", {p0: tx(enharmonic.name), p1: tx(enharmonic.symbol)}) : tx.template("Acorde {p0}", {p0: tx(chord.type.name)}))}</strong>
            </li>
          </ul>

          <div className="music-panel" id="guitarra">
            <h2>{tx(chord.name)} {tx(" en guitarra")}</h2>
            <div className="music-panel-split">
              <ul className="voicing-grid">
                {guitar.map((voicing) => (
                  <li key={voicing.frets.join()}>
                    <figure>
                      <ChordDiagram
                        voicing={voicing}
                        noteNames={voicingNoteNames(chord, voicing, GUITAR_TUNING)}
                        rootStrings={voicingRootStrings(chord, voicing, GUITAR_TUNING)}
                        title={tx(tx.template("{p0} en guitarra, {p1}", {p0: tx(chord.name), p1: tx(voicing.label)}))}
                      />
                      <figcaption>{tx(voicing.label)}</figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
              {guitar[0] && (
                <div className="prose">
                  <h3>{tx("Cómo poner los dedos (")}{tx(shapeName(guitar[0]))}{tx(")")}</h3>
                  <ol>
                    {guitarInstructions(guitar[0]).map((step) => (
                      <li key={step}>{tx(step)}</li>
                    ))}
                  </ol>
                  <p>
                    {tx("Los números dentro de los puntos son los dedos de la mano izquierda: 1 índice, 2 medio, 3 anular y 4 meñique. Los puntos de color marcan la fundamental (")}{tx(noteName(chord.root))}{tx(").")}{tx(guitar.length > 1 && " Las otras posiciones sirven para cambiar de acorde sin saltar por el mástil o para un sonido más agudo.")}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="music-panel" id="piano">
            <div className="music-panel-head">
              <h2>{tx(chord.name)} {tx(" en piano")}</h2>
            </div>
            <PianoKeyboard
              highlighted={piano.midis}
              labels={chord.notes.map((n) => noteName(n))}
              roots={[piano.midis[0]]}
              title={tx(tx.template("Teclas del acorde de {p0}: {p1}", {p0: tx(chord.name), p1: tx(chordNotesText(chord))}))}
            />
            <div className="prose">
              <p>
                {tx("En estado fundamental, toca ")}{tx(chordNotesText(chord))} {tx(" de abajo hacia arriba")}{tx(chord.notes.length === 3
                  ? " con los dedos 1, 3 y 5 de la mano derecha (pulgar, medio y meñique)."
                  : " con los dedos 1, 2, 3 y 5 de la mano derecha.")}{tx(" ")}
                {tx("Con la mano izquierda se suele tocar solo la fundamental (")}{tx(noteName(chord.root))}{tx(") o la fundamental y la quinta.")}</p>
              <h3>{tx("Inversiones")}</h3>
              <ul>
                {piano.inversions.map((inversion) => (
                  <li key={inversion.label}>
                    <strong>{tx(inversion.label)} {tx(" inversión:")}</strong> {tx(inversion.notes)}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {ukulele.length > 0 && (
            <div className="music-panel" id="ukelele">
              <h2>{tx(chord.name)} {tx(" en ukelele")}</h2>
              <ul className="voicing-grid voicing-grid--compact">
                {ukulele.map((voicing) => (
                  <li key={voicing.frets.join()}>
                    <figure>
                      <ChordDiagram
                        voicing={voicing}
                        noteNames={voicingNoteNames(chord, voicing, UKULELE_TUNING)}
                        rootStrings={voicingRootStrings(chord, voicing, UKULELE_TUNING)}
                        title={tx(tx.template("{p0} en ukelele, {p1}", {p0: tx(chord.name), p1: tx(voicing.label)}))}
                        frets={4}
                      />
                      <figcaption>{tx(voicing.label)}</figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
              <p className="tool-hint">
                {tx("Afinación estándar Sol – Do – Mi – La (la cuerda de Sol es aguda). ¿Tu ukelele está afinado?")}{tx(" ")}
                <Link href={tunerPresetPath("ukelele")} prefetch={false}>
                  {tx("Usa el afinador de ukelele")}</Link>
                {tx(".")}</p>
            </div>
          )}
        </div>
      </section>

      <section className="block ed-section" style={{ ["--ed-accent" as string]: accent }}>
        <div className="container tool-content">
          <article className="prose">
            <h2>{tx("Notas e intervalos de ")}{tx(chord.name)}</h2>
            <ul className="music-notes">
              {tones.map((tone, i) => (
                <li key={tone.name} className={i === 0 ? "is-root" : undefined}>
                  <strong>{tx(tone.name)}</strong>
                  <span>
                    {tx(tone.short)} {tx(" · ")}{tx(tone.interval)}
                  </span>
                </li>
              ))}
            </ul>
            <p>{tx(chord.type.usage)}</p>
            {tones.some((tone) => tone.plain) && (
              <p>
                {tx(tones
                  .filter((tone) => tone.plain)
                  .map((tone) => tx.template("{p0} suena igual que {p1}", {p0: tx(tone.name), p1: tx(tone.plain)}))
                  .join("; "))}
                {tx(", pero en teoría se escribe así porque cada nota del acorde ocupa su propio nombre (Do, Mi, Sol…). En la guitarra y el piano se toca exactamente la misma tecla o traste.")}</p>
            )}

            <h2>{tx("Progresiones con ")}{tx(chord.displaySymbol)}</h2>
            {progressions.map((progression) => (
              <div key={progression.title}>
                <h3>
                  {tx(progression.title)}{tx(": ")}{tx(progression.numerals)}
                </h3>
                <ul className="fifths-chords">
                  {progression.chords.map((item, i) =>
                    item.chord ? (
                      <li key={`${item.label}-${i}`}>
                        <Link href={chordPath(item.chord)} prefetch={false}>
                          <strong>{tx(item.label)}</strong>
                        </Link>
                      </li>
                    ) : (
                      <li key={`${item.label}-${i}`}>
                        <span>
                          <strong>{tx(item.label)}</strong>
                        </span>
                      </li>
                    ),
                  )}
                </ul>
                <p>{tx(progression.note)}</p>
              </div>
            ))}

            {keys.length > 0 && (
              <>
                <h2>{tx("¿En qué tonalidades aparece ")}{tx(chord.name)}{tx("?")}</h2>
                <p>
                  {tx(chord.displaySymbol)} {tx(" pertenece a ")}{tx(keys.length)} {tx(" tonalidades: dentro de cada una cumple una función distinta según el grado (el número romano).")}</p>
                <div className="prose-table-wrap" role="region" aria-label={tx(tx.template("Tonalidades con {p0}", {p0: tx(chord.name)}))} tabIndex={0}>
                  <table>
                    <thead>
                      <tr>
                        <th scope="col">{tx("Tonalidad")}</th>
                        <th scope="col">{tx("Grado")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {keys.map((item) => (
                        <tr key={item.scale.slug}>
                          <th scope="row">
                            <Link href={scalePath(item.scale)} prefetch={false}>
                              {tx(item.scale.name)}
                            </Link>
                          </th>
                          <td>{tx(item.roman)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}

            <h2>{tx("Preguntas frecuentes")}</h2>
            <FaqList items={faqs} openFirst={false} />
          </article>

          <aside className="tool-aside">
            <h2 className="ed-h2">{tx("Otros acordes de ")}{tx(noteName(chord.root))}</h2>
            <ul className="ed-chip-list">
              {siblings.map((other) => (
                <li key={other.slug}>
                  <Link href={chordPath(other)} prefetch={false}>
                    {tx(other.displaySymbol)}
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="ed-h2">{tx("Escala y teoría")}</h2>
            <ul className="ed-link-list">
              <li>
                <Link href={scalePath(rootScale)} prefetch={false}>
                  <strong>{tx("Escala de ")}{tx(rootScale.name)}</strong>
                  <span>{tx("Notas, acordes de la tonalidad y mástil de guitarra.")}</span>
                </Link>
              </li>
              <li>
                <Link href={CIRCLE_OF_FIFTHS_PATH} prefetch={false}>
                  <strong>{tx("Círculo de quintas interactivo")}</strong>
                  <span>{tx("Encuentra los acordes de cualquier tonalidad.")}</span>
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
              {[guitarCourse, pianoCourse].map(
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
              <li>
                <Link href={TUNER_PATH} prefetch={false}>
                  <strong>{tx("Afinador online")}</strong>
                  <span>{tx("Afina antes de practicar: guitarra, ukelele y más.")}</span>
                </Link>
              </li>
            </ul>
            <p className="ed-center-link">
              <Link href={CHORDS_PATH} prefetch={false}>
                {tx("Ver todos los acordes ")}<ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </p>
          </aside>
        </div>
      </section>

      <CtaBand
        title={tx("¿Quieres tocar canciones completas?")}
        text="Un profe te enseña a cambiar de acorde con fluidez, a rasguear y a acompañar tus canciones favoritas, en clases virtuales o a domicilio en Bogotá."
        primary={{
          href: whatsappHref(tx.template("¡Hola! Vengo del acorde de {p0} y quiero información sobre clases.", {p0: tx(chord.name)})),
          label: "Escribir por WhatsApp",
          external: true,
        }}
        secondary={{ href: "/clases", label: "Ver clases" }}
      />
      <Footer />
    </>
  );
}
