import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Inline, plainText } from "@/components/RichText";
import { Breadcrumbs } from "@/components/editorial/Breadcrumbs";
import { CtaBand } from "@/components/editorial/CtaBand";
import { FaqList } from "@/components/editorial/FaqList";
import { JsonLdScript } from "@/components/editorial/JsonLdScript";
import { CircleOfFifths, type CircleKey } from "@/components/music/CircleOfFifths";
import type { FaqItem } from "@/lib/content-types";
import { whatsappHref } from "@/lib/contact";
import { CHORDS_PATH, CIRCLE_OF_FIFTHS_PATH, SCALES_PATH, chordPath, scaleNotesText, scalePath } from "@/lib/music-pages";
import {
  CIRCLE_OF_FIFTHS,
  diatonicTriads,
  enharmonicRoot,
  keySignature,
  keySignatureText,
  noteName,
  type Scale,
} from "@/lib/music-theory";
import { EAR_TRAINING_PATH, TOOLS_PATH } from "@/lib/music-tools";
import {
  absoluteUrl,
  brandTitle,
  breadcrumbJsonLd,
  createPageMetadata,
  faqPageJsonLd,
  webApplicationJsonLd,
  webPageJsonLd,
} from "@/lib/seo";
import { shareImage } from "@/lib/share-cards";

const TITLE = "Círculo de quintas interactivo";
const DESCRIPTION =
  "Círculo de quintas interactivo: toca una tonalidad y mira su armadura, su relativa menor, sus notas y sus acordes. Con explicación, tabla y trucos para memorizarlo.";
const UPDATED_AT = "2026-10-01";

export const metadata: Metadata = createPageMetadata({
  title: brandTitle("Círculo de quintas interactivo: armaduras y acordes"),
  description: DESCRIPTION,
  path: CIRCLE_OF_FIFTHS_PATH,
  image: shareImage("circulo-de-quintas"),
  keywords: ["círculo de quintas", "circulo de quintas interactivo", "círculo de quintas guitarra", "círculo de quintas piano", "armaduras musicales"],
});

/** Positions where the key is also commonly written with the other spelling. */
const ENHARMONIC_POSITIONS = new Set([5, 6, 7]);

function chords(scale: Scale) {
  return diatonicTriads(scale).map((item) => ({
    symbol: item.symbol,
    roman: item.roman,
    href: item.chord ? chordPath(item.chord) : undefined,
  }));
}

function signatureShort(scale: Scale) {
  const { sharps, flats } = keySignature(scale);
  return sharps.length ? `${sharps.length}♯` : flats.length ? `${flats.length}♭` : "";
}

const KEYS: CircleKey[] = CIRCLE_OF_FIFTHS.map(({ major, minor }, index) => {
  const other = ENHARMONIC_POSITIONS.has(index) ? enharmonicRoot(major.root) : undefined;
  return {
    major: { name: major.name, label: noteName(major.root), href: scalePath(major), notes: scaleNotesText(major) },
    minor: { name: `${noteName(minor.root)} menor`, label: `${noteName(minor.root)}m`, href: scalePath(minor), notes: scaleNotesText(minor) },
    signature: keySignatureText(keySignature(major)),
    signatureShort: signatureShort(major),
    enharmonic: other ? `${noteName(other)} mayor` : undefined,
    majorChords: chords(major),
    minorChords: chords(minor),
  };
});

const USES = [
  "**Saber la armadura de una tonalidad:** cada paso en el sentido del reloj agrega un sostenido; cada paso en sentido contrario, un bemol.",
  "**Encontrar la relativa menor:** está justo debajo de la mayor, en el anillo interior, y comparte todas sus notas.",
  "**Armar los acordes de una canción:** la tonalidad y sus dos vecinas (IV y V) más sus tres relativas menores son los seis acordes principales de esa tonalidad.",
  "**Entender progresiones:** el ii–V–I del jazz y muchas cadencias avanzan en sentido contrario al reloj, de quinta en quinta.",
  "**Transportar y modular:** las tonalidades vecinas comparten casi todas las notas, por eso pasar de una a otra suena natural.",
  "**Ordenar tu práctica de escalas:** empieza en Do y avanza una tonalidad por semana, agregando una alteración a la vez.",
];

const FAQS: FaqItem[] = [
  {
    question: "¿Qué es el círculo de quintas?",
    answer:
      "Es un diagrama que ordena las 12 tonalidades mayores (y sus relativas menores) de modo que cada una está una quinta justa por encima de la anterior: Do, Sol, Re, La, Mi, Si, Fa♯… Así se ve de un vistazo cuántos sostenidos o bemoles tiene cada tonalidad y cuáles están emparentadas.",
  },
  {
    question: "¿Cómo se usa el círculo de quintas en la guitarra?",
    answer:
      "Para saber qué acordes van juntos: elige la tonalidad de la canción y toma ese acorde, sus dos vecinos (IV y V) y las tres menores de abajo. Por ejemplo, en Sol mayor: G, C, D, Em, Am y Bm. También sirve para transportar una canción a una tonalidad más cómoda para cantar.",
  },
  {
    question: "¿Cuál es el orden de los sostenidos y los bemoles?",
    answer:
      "Sostenidos: Fa, Do, Sol, Re, La, Mi, Si. Bemoles: el mismo orden al revés (Si, Mi, La, Re, Sol, Do, Fa). Truco: en tonalidades con sostenidos, la tónica está medio tono por encima del último sostenido; con bemoles, el penúltimo bemol es el nombre de la tonalidad (salvo Fa mayor, que tiene uno solo).",
  },
  {
    question: "¿Por qué Fa♯ y Sol♭ aparecen en el mismo lugar?",
    answer:
      "Porque suenan igual: son tonalidades enarmónicas. Fa♯ mayor se escribe con 6 sostenidos y Sol♭ mayor con 6 bemoles. Lo mismo pasa con Re♭/Do♯ y Si/Do♭: en la práctica se usa la que tenga menos alteraciones o la que pida la partitura.",
  },
  {
    question: "¿Qué relación hay entre el círculo de quintas y las cuartas?",
    answer:
      "Es el mismo círculo recorrido al revés: en sentido contrario al reloj cada tonalidad está una cuarta por encima de la anterior (Do, Fa, Si♭, Mi♭…). Por eso algunos lo llaman círculo de cuartas y quintas.",
  },
];

export default function CircleOfFifthsPage() {
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Herramientas", path: TOOLS_PATH },
    { name: "Círculo de quintas", path: CIRCLE_OF_FIFTHS_PATH },
  ];

  return (
    <>
      <JsonLdScript
        nodes={[
          webPageJsonLd({
            path: CIRCLE_OF_FIFTHS_PATH,
            name: TITLE,
            description: DESCRIPTION,
            dateModified: UPDATED_AT,
            about: { "@id": `${absoluteUrl(CIRCLE_OF_FIFTHS_PATH)}#app` },
          }),
          breadcrumbJsonLd(crumbs),
          webApplicationJsonLd({
            path: CIRCLE_OF_FIFTHS_PATH,
            name: "Círculo de quintas interactivo de A medio tono",
            description: DESCRIPTION,
            featureList: ["24 tonalidades mayores y menores", "Armaduras", "Relativas", "Acordes de cada tonalidad"],
          }),
          faqPageJsonLd(FAQS.map((faq) => ({ question: faq.question, answer: plainText(faq.answer) })), CIRCLE_OF_FIFTHS_PATH),
        ]}
      />
      <section className="block ed-page tool-page" style={{ ["--ed-accent" as string]: "var(--purple)" }}>
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <header className="ed-hero ed-hero--center">
            <div className="ed-hero-copy">
              <h1>{TITLE}</h1>
              <p className="ed-lead">
                Toca cualquier tonalidad para ver su armadura, su relativa menor, sus notas y los acordes que la forman. Las
                vecinas resaltadas son el cuarto y el quinto grado.
              </p>
            </div>
          </header>
          <div className="music-panel">
            <CircleOfFifths keys={KEYS} />
          </div>
        </div>
      </section>

      <section className="block ed-section" style={{ ["--ed-accent" as string]: "var(--purple)" }}>
        <div className="container tool-content">
          <article className="prose">
            <h2>Cómo leer el círculo de quintas</h2>
            <p>
              Arriba está Do mayor, sin sostenidos ni bemoles. Si avanzas en el sentido del reloj, cada tonalidad está una
              quinta justa más arriba (Do → Sol → Re → La…) y suma un sostenido. Si avanzas al revés, cada paso es una
              cuarta (Do → Fa → Si♭ → Mi♭…) y suma un bemol. Abajo, Fa♯ y Sol♭ se encuentran: suenan igual.
            </p>
            <p>
              En el anillo interior está la relativa menor de cada tonalidad mayor: La menor debajo de Do mayor, Mi menor
              debajo de Sol mayor, y así. Las dos comparten armadura y notas; solo cambia la nota en la que se apoyan.
            </p>

            <h2>Para qué sirve</h2>
            <ul className="ed-checklist">
              {USES.map((use) => (
                <li key={use}>
                  <CheckCircle2 size={22} strokeWidth={2.4} aria-hidden="true" />
                  <span>
                    <Inline text={use} />
                  </span>
                </li>
              ))}
            </ul>

            <h2>Tabla de tonalidades y armaduras</h2>
            <div className="prose-table-wrap" role="region" aria-label="Tonalidades, relativas y armaduras" tabIndex={0}>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Tonalidad mayor</th>
                    <th scope="col">Relativa menor</th>
                    <th scope="col">Armadura</th>
                  </tr>
                </thead>
                <tbody>
                  {CIRCLE_OF_FIFTHS.map(({ major, minor }) => (
                    <tr key={major.slug}>
                      <th scope="row">
                        <Link href={scalePath(major)} prefetch={false}>
                          {major.name}
                        </Link>
                      </th>
                      <td>
                        <Link href={scalePath(minor)} prefetch={false}>
                          {minor.name}
                        </Link>
                      </td>
                      <td>{keySignatureText(keySignature(major))}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Trucos para memorizarlo</h2>
            <ul>
              <li>
                Orden de los sostenidos: <strong>Fa, Do, Sol, Re, La, Mi, Si</strong>. El de los bemoles es el mismo al
                revés: <strong>Si, Mi, La, Re, Sol, Do, Fa</strong>.
              </li>
              <li>Con sostenidos, la tónica está medio tono arriba del último sostenido (último Do♯ → Re mayor).</li>
              <li>Con bemoles, el penúltimo bemol da el nombre de la tonalidad (Si♭, Mi♭ → Si♭ mayor).</li>
              <li>Para la relativa menor, baja una tercera menor desde la tónica mayor (Do → La).</li>
            </ul>

            <h2>Preguntas frecuentes</h2>
            <FaqList items={FAQS} openFirst={false} />
          </article>
          <aside className="tool-aside">
            <h2 className="ed-h2">Sigue practicando</h2>
            <ul className="ed-link-list">
              <li>
                <Link href={SCALES_PATH} prefetch={false}>
                  <strong>Escalas musicales</strong>
                  <span>Las 12 tonalidades con piano, guitarra y sonido.</span>
                </Link>
              </li>
              <li>
                <Link href={CHORDS_PATH} prefetch={false}>
                  <strong>Diccionario de acordes</strong>
                  <span>Cada acorde en guitarra, piano y ukelele.</span>
                </Link>
              </li>
              <li>
                <Link href="/blog/circulo-de-quintas-explicado" prefetch={false}>
                  <strong>El círculo de quintas explicado</strong>
                  <span>La guía paso a paso, con ejemplos para tu instrumento.</span>
                </Link>
              </li>
              <li>
                <Link href={EAR_TRAINING_PATH} prefetch={false}>
                  <strong>Entrenamiento auditivo</strong>
                  <span>Reconoce quintas, cuartas y el resto de intervalos de oído.</span>
                </Link>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <CtaBand
        title="¿Te preparas para una prueba de admisión?"
        text="Teoría, armonía y dictado con profes evaluados, en clases virtuales o a domicilio en Bogotá."
        primary={{ href: whatsappHref("¡Hola! Vengo del círculo de quintas y quiero información sobre clases de teoría."), label: "Escribir por WhatsApp", external: true }}
        secondary={{ href: "/preuniversitario-musica", label: "Ver preuniversitario" }}
      />
      <Footer />
    </>
  );
}
