import "@/components/music/music.css";
import { MusicIndexTable } from "@/components/music/MusicIndexTable";
import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { plainText } from "@/components/RichText";
import { Breadcrumbs } from "@/components/editorial/Breadcrumbs";
import { CtaBand } from "@/components/editorial/CtaBand";
import { FaqList } from "@/components/editorial/FaqList";
import { JsonLdScript } from "@/components/editorial/JsonLdScript";
import { ChordDiagram } from "@/components/music/ChordDiagram";
import { GUITAR_TUNING, guitarVoicings } from "@/lib/chord-voicings";
import type { FaqItem } from "@/lib/content-types";
import { whatsappHref } from "@/lib/contact";
import {
  CHORDS_PATH,
  CIRCLE_OF_FIFTHS_PATH,
  SCALES_PATH,
  chordFormula,
  chordPath,
  voicingNoteNames,
  voicingRootStrings,
} from "@/lib/music-pages";
import { CHORDS, CHORD_TYPES, chordFor, noteName, type ChordTypeId } from "@/lib/music-theory";
import {
  absoluteUrl,
  brandTitle,
  breadcrumbJsonLd,
  createPageMetadata,
  faqPageJsonLd,
  jsonLd,
  webPageJsonLd,
} from "@/lib/seo";
import { shareImage } from "@/lib/share-cards";

const TITLE = "Acordes de guitarra, piano y ukelele";
const DESCRIPTION = `Diccionario de ${CHORDS.length} acordes con diagramas: mayores, menores, séptimas, sus, disminuidos y más. Notas, digitación, inversiones y sonido de cada uno.`;
const UPDATED_AT = "2026-10-01";

export const metadata: Metadata = createPageMetadata({
  title: brandTitle("Acordes de guitarra, piano y ukelele con diagramas"),
  description: DESCRIPTION,
  path: CHORDS_PATH,
  image: shareImage("acordes"),
  keywords: ["acordes de guitarra", "acordes de piano", "acordes de ukelele", "diccionario de acordes", "tabla de acordes"],
});

/** The eight open chords most method books start with. */
const STARTER_CHORDS = [
  [0, "mayor"],
  [7, "mayor"],
  [2, "mayor"],
  [9, "menor"],
  [4, "menor"],
  [9, "mayor"],
  [4, "mayor"],
  [2, "menor"],
] as const;

const ROOT_ORDER = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const TYPE_HEADINGS: Record<ChordTypeId, string> = {
  mayor: "Acordes mayores (C, G, D…)",
  menor: "Acordes menores (Am, Em, Dm…)",
  septima: "Acordes de séptima o dominante (G7, D7…)",
  "septima-mayor": "Acordes de séptima mayor (Cmaj7, Fmaj7…)",
  "menor-septima": "Acordes menores con séptima (Am7, Dm7…)",
  sus2: "Acordes suspendidos 2 (Dsus2, Asus2…)",
  sus4: "Acordes suspendidos 4 (Dsus4, Asus4…)",
  disminuido: "Acordes disminuidos (Bdim, C♯dim…)",
  aumentado: "Acordes aumentados (Caug, Gaug…)",
  semidisminuido: "Acordes semidisminuidos (Bm7♭5, Em7♭5…)",
};

const FAQS: FaqItem[] = [
  {
    question: "¿Cuáles son los acordes básicos de guitarra?",
    answer:
      "Los primeros que se aprenden son los acordes abiertos: Do (C), Sol (G), Re (D), La (A) y Mi (E) mayores, y La menor (Am), Mi menor (Em) y Re menor (Dm). Con ellos ya puedes acompañar muchísimas canciones. En nuestra [guía de acordes básicos](/blog/acordes-basicos-de-guitarra-para-principiantes) te contamos en qué orden aprenderlos.",
  },
  {
    question: "¿Cómo se lee un diagrama de acordes?",
    answer:
      "Las líneas verticales son las cuerdas (la más gruesa a la izquierda) y las horizontales son los trastes. Cada punto indica dónde pisar y el número es el dedo: 1 índice, 2 medio, 3 anular y 4 meñique. Una × encima de una cuerda significa que no se toca y un ○ que suena al aire. Si aparece un número al lado, el diagrama empieza en ese traste.",
  },
  {
    question: "¿Qué significa el cifrado americano (C, Dm, G7…)?",
    answer:
      "Es la forma de escribir los acordes con letras: C = Do, D = Re, E = Mi, F = Fa, G = Sol, A = La y B = Si. Una «m» indica menor (Am = La menor), un «7» indica séptima (G7 = Sol séptima) y «maj7» séptima mayor.",
  },
  {
    question: "¿Qué es una cejilla?",
    answer:
      "Es cuando el dedo índice pisa varias cuerdas a la vez en el mismo traste, como una cejuela móvil. Permite tocar cualquier acorde moviendo la misma forma por el mástil. En nuestra [guía de la cejilla](/blog/como-hacer-la-cejilla-en-guitarra) te explicamos cómo lograrla sin dolor.",
  },
  {
    question: "¿Cuál es la diferencia entre un acorde mayor y uno menor?",
    answer:
      "Solo cambia una nota: la tercera. En el mayor está a dos tonos de la fundamental (Do – Mi) y en el menor a un tono y medio (Do – Mi♭). Por eso el mayor suena luminoso y el menor más oscuro o melancólico.",
  },
];

export default function ChordsIndexPage() {
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Acordes", path: CHORDS_PATH },
  ];
  const starters = STARTER_CHORDS.map(([pc, type]) => chordFor(pc, type)!);
  const listJsonLd = jsonLd({
    "@type": "ItemList",
    "@id": `${absoluteUrl(CHORDS_PATH)}#acordes`,
    name: "Diccionario de acordes",
    numberOfItems: CHORDS.length,
    itemListElement: CHORDS.map((chord, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `Acorde de ${chord.longName} (${chord.symbol})`,
      url: absoluteUrl(chordPath(chord)),
    })),
  });

  return (
    <>
      <JsonLdScript
        nodes={[
          webPageJsonLd({ path: CHORDS_PATH, name: TITLE, description: DESCRIPTION, type: "CollectionPage", dateModified: UPDATED_AT }),
          breadcrumbJsonLd(crumbs),
          faqPageJsonLd(FAQS.map((faq) => ({ question: faq.question, answer: plainText(faq.answer) })), CHORDS_PATH),
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: listJsonLd }} />
      <section className="block ed-page tool-page" style={{ ["--ed-accent" as string]: "var(--orange)" }}>
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <header className="ed-hero ed-hero--center">
            <div className="ed-hero-copy">
              <h1>{TITLE}</h1>
              <p className="ed-lead">
                Busca cualquier acorde y míralo en guitarra, piano y ukelele: notas, digitación paso a paso, inversiones,
                progresiones y cómo suena. Los 12 tonos y los {CHORD_TYPES.length} tipos de acorde más usados.
              </p>
            </div>
          </header>

          <div className="music-panel">
            <h2>Los 8 acordes para empezar en guitarra</h2>
            <ul className="voicing-grid voicing-grid--compact">
              {starters.map((chord) => {
                const voicing = guitarVoicings(chord)[0];
                return (
                  <li key={chord.slug}>
                    <Link href={chordPath(chord)} prefetch={false}>
                      <figure>
                        <strong>
                          {chord.name} ({chord.displaySymbol})
                        </strong>
                        <ChordDiagram
                          voicing={voicing}
                          noteNames={voicingNoteNames(chord, voicing, GUITAR_TUNING)}
                          rootStrings={voicingRootStrings(chord, voicing, GUITAR_TUNING)}
                          title={`${chord.name} en guitarra`}
                        />
                      </figure>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="music-panel">
            <h2>Todos los acordes</h2>
            <MusicIndexTable
              label="Tabla de acordes por nota y tipo"
              rootHeading="Nota"
              columns={CHORD_TYPES.map((type) => ({ id: type.id, label: type.name }))}
              rows={ROOT_ORDER.map((pc) => {
                const row = CHORD_TYPES.map((type) => chordFor(pc, type.id)!);
                return {
                  id: pc,
                  label: [...new Set(row.map((chord) => noteName(chord.root)))].join(" / "),
                  cells: row.map((chord) => ({
                    id: chord.slug, label: chord.displaySymbol, href: chordPath(chord), name: `Acorde de ${chord.name}`,
                  })),
                };
              })}
            />
          </div>
        </div>
      </section>

      <section className="block ed-section" style={{ ["--ed-accent" as string]: "var(--orange)" }}>
        <div className="container tool-content">
          <article className="prose">
            <h2>Tipos de acordes</h2>
            {CHORD_TYPES.map((type) => {
              const example = chordFor(0, type.id)!;
              return (
                <div key={type.id}>
                  <h3>{TYPE_HEADINGS[type.id]}</h3>
                  <p>
                    Fórmula {chordFormula(example)}. Suena {type.sound}. {type.usage} Ejemplo:{" "}
                    <Link href={chordPath(example)} prefetch={false}>
                      {example.name} ({example.displaySymbol})
                    </Link>
                    .
                  </p>
                </div>
              );
            })}
            <h2>Preguntas frecuentes</h2>
            <FaqList items={FAQS} openFirst={false} />
          </article>
          <aside className="tool-aside">
            <h2 className="ed-h2">Más teoría</h2>
            <ul className="ed-link-list">
              <li>
                <Link href={SCALES_PATH} prefetch={false}>
                  <strong>Escalas musicales</strong>
                  <span>Mayores, menores, pentatónicas y blues en las 12 tonalidades.</span>
                </Link>
              </li>
              <li>
                <Link href={CIRCLE_OF_FIFTHS_PATH} prefetch={false}>
                  <strong>Círculo de quintas interactivo</strong>
                  <span>Los acordes de cada tonalidad de un vistazo.</span>
                </Link>
              </li>
              <li>
                <Link href="/blog/acordes-basicos-de-guitarra-para-principiantes" prefetch={false}>
                  <strong>Acordes básicos de guitarra para principiantes</strong>
                  <span>En qué orden aprenderlos y cómo cambiar entre ellos.</span>
                </Link>
              </li>
              <li>
                <Link href="/blog/ritmos-de-guitarra-rasgueos-basicos" prefetch={false}>
                  <strong>Rasgueos básicos de guitarra</strong>
                  <span>Ritmos para acompañar tus primeras canciones.</span>
                </Link>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <CtaBand
        title="¿Prefieres aprender con alguien al lado?"
        text="Clases de guitarra y piano virtuales o a domicilio en Bogotá, con profes evaluados."
        primary={{ href: whatsappHref("¡Hola! Vengo del diccionario de acordes y quiero información sobre clases."), label: "Escribir por WhatsApp", external: true }}
        secondary={{ href: "/clases", label: "Ver clases" }}
      />
      <Footer />
    </>
  );
}
