import type { Metadata } from "next";
import Link from "next/link";
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
  if (!chord) return {};
  const enharmonic = chordEnharmonic(chord);

  return createPageMetadata({
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
  });
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
              <h1>{title}</h1>
              <p className="ed-lead">
                {chord.name} es un acorde {chord.type.name} de {chord.notes.length} notas: {chordNotesText(chord)}. Suena{" "}
                {chord.type.sound}. Aquí lo tienes en guitarra, piano y ukelele, con digitación y sonido.
                {enharmonic && ` También se llama ${enharmonic.name} (${enharmonic.symbol}).`}
              </p>
              <div className="ed-actions">
                <PlayNotesButton key={chord.slug} midis={ascendingMidi(chord.notes, 3)} mode="chord" label={`Escuchar ${chord.displaySymbol}`} />
              </div>
            </div>
          </header>
          <ul className="ed-facts">
            <li>
              <Music2 size={24} strokeWidth={2.4} aria-hidden="true" />
              <span>Notas</span>
              <strong>{chordNotesText(chord)}</strong>
            </li>
            <li>
              <Sigma size={24} strokeWidth={2.4} aria-hidden="true" />
              <span>Fórmula</span>
              <strong>{chordFormula(chord)}</strong>
            </li>
            <li>
              <Tags size={24} strokeWidth={2.4} aria-hidden="true" />
              <span>Cifrado</span>
              <strong>
                {[chord.displaySymbol, ...chord.type.altSymbols.map((symbol) => `${noteName(chord.root, "en")}${symbol}`)].join(" · ")}
              </strong>
            </li>
            <li>
              <Piano size={24} strokeWidth={2.4} aria-hidden="true" />
              <span>{enharmonic ? "Enarmónico" : "Tipo"}</span>
              <strong>{enharmonic ? `${enharmonic.name} (${enharmonic.symbol})` : `Acorde ${chord.type.name}`}</strong>
            </li>
          </ul>

          <div className="music-panel" id="guitarra">
            <h2>{chord.name} en guitarra</h2>
            <div className="music-panel-split">
              <ul className="voicing-grid">
                {guitar.map((voicing) => (
                  <li key={voicing.frets.join()}>
                    <figure>
                      <ChordDiagram
                        voicing={voicing}
                        noteNames={voicingNoteNames(chord, voicing, GUITAR_TUNING)}
                        rootStrings={voicingRootStrings(chord, voicing, GUITAR_TUNING)}
                        title={`${chord.name} en guitarra, ${voicing.label}`}
                      />
                      <figcaption>{voicing.label}</figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
              {guitar[0] && (
                <div className="prose">
                  <h3>Cómo poner los dedos ({shapeName(guitar[0])})</h3>
                  <ol>
                    {guitarInstructions(guitar[0]).map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                  <p>
                    Los números dentro de los puntos son los dedos de la mano izquierda: 1 índice, 2 medio, 3 anular y 4
                    meñique. Los puntos de color marcan la fundamental ({noteName(chord.root)}).
                    {guitar.length > 1 && " Las otras posiciones sirven para cambiar de acorde sin saltar por el mástil o para un sonido más agudo."}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="music-panel" id="piano">
            <div className="music-panel-head">
              <h2>{chord.name} en piano</h2>
            </div>
            <PianoKeyboard
              highlighted={piano.midis}
              labels={chord.notes.map((n) => noteName(n))}
              roots={[piano.midis[0]]}
              title={`Teclas del acorde de ${chord.name}: ${chordNotesText(chord)}`}
            />
            <div className="prose">
              <p>
                En estado fundamental, toca {chordNotesText(chord)} de abajo hacia arriba
                {chord.notes.length === 3
                  ? " con los dedos 1, 3 y 5 de la mano derecha (pulgar, medio y meñique)."
                  : " con los dedos 1, 2, 3 y 5 de la mano derecha."}{" "}
                Con la mano izquierda se suele tocar solo la fundamental ({noteName(chord.root)}) o la fundamental y la quinta.
              </p>
              <h3>Inversiones</h3>
              <ul>
                {piano.inversions.map((inversion) => (
                  <li key={inversion.label}>
                    <strong>{inversion.label} inversión:</strong> {inversion.notes}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {ukulele.length > 0 && (
            <div className="music-panel" id="ukelele">
              <h2>{chord.name} en ukelele</h2>
              <ul className="voicing-grid voicing-grid--compact">
                {ukulele.map((voicing) => (
                  <li key={voicing.frets.join()}>
                    <figure>
                      <ChordDiagram
                        voicing={voicing}
                        noteNames={voicingNoteNames(chord, voicing, UKULELE_TUNING)}
                        rootStrings={voicingRootStrings(chord, voicing, UKULELE_TUNING)}
                        title={`${chord.name} en ukelele, ${voicing.label}`}
                        frets={4}
                      />
                      <figcaption>{voicing.label}</figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
              <p className="tool-hint">
                Afinación estándar Sol – Do – Mi – La (la cuerda de Sol es aguda). ¿Tu ukelele está afinado?{" "}
                <Link href={tunerPresetPath("ukelele")} prefetch={false}>
                  Usa el afinador de ukelele
                </Link>
                .
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="block ed-section" style={{ ["--ed-accent" as string]: accent }}>
        <div className="container tool-content">
          <article className="prose">
            <h2>Notas e intervalos de {chord.name}</h2>
            <ul className="music-notes">
              {tones.map((tone, i) => (
                <li key={tone.name} className={i === 0 ? "is-root" : undefined}>
                  <strong>{tone.name}</strong>
                  <span>
                    {tone.short} · {tone.interval}
                  </span>
                </li>
              ))}
            </ul>
            <p>{chord.type.usage}</p>
            {tones.some((tone) => tone.plain) && (
              <p>
                {tones
                  .filter((tone) => tone.plain)
                  .map((tone) => `${tone.name} suena igual que ${tone.plain}`)
                  .join("; ")}
                , pero en teoría se escribe así porque cada nota del acorde ocupa su propio nombre (Do, Mi, Sol…). En la
                guitarra y el piano se toca exactamente la misma tecla o traste.
              </p>
            )}

            <h2>Progresiones con {chord.displaySymbol}</h2>
            {progressions.map((progression) => (
              <div key={progression.title}>
                <h3>
                  {progression.title}: {progression.numerals}
                </h3>
                <ul className="fifths-chords">
                  {progression.chords.map((item, i) =>
                    item.chord ? (
                      <li key={`${item.label}-${i}`}>
                        <Link href={chordPath(item.chord)} prefetch={false}>
                          <strong>{item.label}</strong>
                        </Link>
                      </li>
                    ) : (
                      <li key={`${item.label}-${i}`}>
                        <span>
                          <strong>{item.label}</strong>
                        </span>
                      </li>
                    ),
                  )}
                </ul>
                <p>{progression.note}</p>
              </div>
            ))}

            {keys.length > 0 && (
              <>
                <h2>¿En qué tonalidades aparece {chord.name}?</h2>
                <p>
                  {chord.displaySymbol} pertenece a {keys.length} tonalidades: dentro de cada una cumple una función
                  distinta según el grado (el número romano).
                </p>
                <div className="prose-table-wrap" role="region" aria-label={`Tonalidades con ${chord.name}`} tabIndex={0}>
                  <table>
                    <thead>
                      <tr>
                        <th scope="col">Tonalidad</th>
                        <th scope="col">Grado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {keys.map((item) => (
                        <tr key={item.scale.slug}>
                          <th scope="row">
                            <Link href={scalePath(item.scale)} prefetch={false}>
                              {item.scale.name}
                            </Link>
                          </th>
                          <td>{item.roman}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}

            <h2>Preguntas frecuentes</h2>
            <FaqList items={faqs} openFirst={false} />
          </article>

          <aside className="tool-aside">
            <h2 className="ed-h2">Otros acordes de {noteName(chord.root)}</h2>
            <ul className="ed-chip-list">
              {siblings.map((other) => (
                <li key={other.slug}>
                  <Link href={chordPath(other)} prefetch={false}>
                    {other.displaySymbol}
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="ed-h2">Escala y teoría</h2>
            <ul className="ed-link-list">
              <li>
                <Link href={scalePath(rootScale)} prefetch={false}>
                  <strong>Escala de {rootScale.name}</strong>
                  <span>Notas, acordes de la tonalidad y mástil de guitarra.</span>
                </Link>
              </li>
              <li>
                <Link href={CIRCLE_OF_FIFTHS_PATH} prefetch={false}>
                  <strong>Círculo de quintas interactivo</strong>
                  <span>Encuentra los acordes de cualquier tonalidad.</span>
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
              {[guitarCourse, pianoCourse].map(
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
              <li>
                <Link href={TUNER_PATH} prefetch={false}>
                  <strong>Afinador online</strong>
                  <span>Afina antes de practicar: guitarra, ukelele y más.</span>
                </Link>
              </li>
            </ul>
            <p className="ed-center-link">
              <Link href={CHORDS_PATH} prefetch={false}>
                Ver todos los acordes <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
              </Link>
            </p>
          </aside>
        </div>
      </section>

      <CtaBand
        title="¿Quieres tocar canciones completas?"
        text="Un profe te enseña a cambiar de acorde con fluidez, a rasguear y a acompañar tus canciones favoritas, en clases virtuales o a domicilio en Bogotá."
        primary={{
          href: whatsappHref(`¡Hola! Vengo del acorde de ${chord.name} y quiero información sobre clases.`),
          label: "Escribir por WhatsApp",
          external: true,
        }}
        secondary={{ href: "/clases", label: "Ver clases" }}
      />
      <Footer />
    </>
  );
}
