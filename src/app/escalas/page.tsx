import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { plainText } from "@/components/RichText";
import { Breadcrumbs } from "@/components/editorial/Breadcrumbs";
import { CtaBand } from "@/components/editorial/CtaBand";
import { FaqList } from "@/components/editorial/FaqList";
import { JsonLdScript } from "@/components/editorial/JsonLdScript";
import type { FaqItem } from "@/lib/content-types";
import { whatsappHref } from "@/lib/contact";
import { CHORDS_PATH, CIRCLE_OF_FIFTHS_PATH, SCALES_PATH, scaleNotesText, scalePath } from "@/lib/music-pages";
import { SCALES, SCALE_TYPES, noteName, scaleFor, stepPattern } from "@/lib/music-theory";
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

const TITLE = "Escalas musicales: notas, piano y guitarra";
const DESCRIPTION = `Las ${SCALES.length} escalas más usadas en las 12 tonalidades: mayor, menor natural, armónica, melódica, pentatónicas y blues. Notas, fórmula, acordes y sonido.`;
const UPDATED_AT = "2026-10-01";

export const metadata: Metadata = createPageMetadata({
  title: brandTitle("Escalas musicales: notas en piano y guitarra"),
  description: DESCRIPTION,
  path: SCALES_PATH,
  image: shareImage("escalas"),
  keywords: ["escalas musicales", "escalas de piano", "escalas de guitarra", "escala mayor", "escala menor", "escala pentatónica"],
});

const FAQS: FaqItem[] = [
  {
    question: "¿Qué es una escala musical?",
    answer:
      "Es una serie de notas ordenadas de grave a agudo a partir de una nota principal (la tónica), siguiendo un patrón fijo de tonos y semitonos. Ese patrón le da a cada escala su color: la mayor suena brillante, la menor más oscura y la pentatónica abierta y sin tensiones.",
  },
  {
    question: "¿Cuál es la diferencia entre la escala mayor y la menor?",
    answer:
      "Cambian el tercer, sexto y séptimo grados: en la menor natural están medio tono más abajo. Por eso Do mayor (Do – Re – Mi – Fa – Sol – La – Si) y Do menor (Do – Re – Mi♭ – Fa – Sol – La♭ – Si♭) comparten la tónica pero suenan muy distinto. Te lo explicamos en detalle en [escalas mayores y menores explicadas](/blog/escalas-mayores-y-menores-explicadas).",
  },
  {
    question: "¿Qué escala aprender primero?",
    answer:
      "En el piano, Do mayor, porque se toca solo con teclas blancas. En la guitarra, la pentatónica menor de La (en el traste 5), que es la base para improvisar en rock y blues. Después vale la pena seguir el orden del [círculo de quintas](/herramientas/circulo-de-quintas): Sol, Re, La… agregando un sostenido a la vez.",
  },
  {
    question: "¿Para qué sirven las escalas?",
    answer:
      "Para conocer las notas de una tonalidad, entender de dónde salen los acordes de una canción, improvisar y ganar agilidad y precisión en los dedos. También son la base de los ejercicios de lectura y de oído de las pruebas de admisión a música.",
  },
];

export default function ScalesIndexPage() {
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Escalas", path: SCALES_PATH },
  ];
  const listJsonLd = jsonLd({
    "@type": "ItemList",
    "@id": `${absoluteUrl(SCALES_PATH)}#escalas`,
    name: "Escalas musicales",
    numberOfItems: SCALES.length,
    itemListElement: SCALES.map((scale, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `Escala de ${scale.longName}`,
      url: absoluteUrl(scalePath(scale)),
    })),
  });

  return (
    <>
      <JsonLdScript
        nodes={[
          webPageJsonLd({ path: SCALES_PATH, name: TITLE, description: DESCRIPTION, type: "CollectionPage", dateModified: UPDATED_AT }),
          breadcrumbJsonLd(crumbs),
          faqPageJsonLd(FAQS.map((faq) => ({ question: faq.question, answer: plainText(faq.answer) })), SCALES_PATH),
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: listJsonLd }} />
      <section className="block ed-page tool-page" style={{ ["--ed-accent" as string]: "var(--blue)" }}>
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <header className="ed-hero ed-hero--center">
            <div className="ed-hero-copy">
              <span className="ed-eyebrow">{SCALES.length} escalas · 12 tonalidades</span>
              <h1>{TITLE}</h1>
              <p className="ed-lead">
                Elige una tónica y un tipo de escala para ver sus notas, su fórmula de tonos y semitonos, sus acordes, el
                teclado del piano, el mástil de la guitarra y cómo suena.
              </p>
            </div>
          </header>

          <div className="music-panel">
            <h2>Todas las escalas</h2>
            <div className="prose-table-wrap music-index" role="region" aria-label="Tabla de escalas por tónica y tipo" tabIndex={0}>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Tónica</th>
                    {SCALE_TYPES.map((type) => (
                      <th scope="col" key={type.id}>
                        {type.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 12 }, (_, pc) => {
                    const row = SCALE_TYPES.map((type) => scaleFor(pc, type.id));
                    return (
                      <tr key={pc}>
                        <th scope="row">{[...new Set(row.map((scale) => noteName(scale.root)))].join(" / ")}</th>
                        {row.map((scale) => (
                          <td key={scale.slug}>
                            <Link href={scalePath(scale)} prefetch={false}>
                              {scale.name}
                            </Link>
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="block ed-section" style={{ ["--ed-accent" as string]: "var(--blue)" }}>
        <div className="container tool-content">
          <article className="prose">
            <h2>Tipos de escalas</h2>
            {SCALE_TYPES.map((type) => {
              const example = scaleFor(type.family === "major" ? 0 : 9, type.id);
              return (
                <div key={type.id}>
                  <h3>Escala {type.name}</h3>
                  <p>
                    Fórmula {stepPattern(example).join(" – ")}. Es una escala {type.sound}. {type.usage} Ejemplo:{" "}
                    <Link href={scalePath(example)} prefetch={false}>
                      {example.name}
                    </Link>{" "}
                    ({scaleNotesText(example)}).
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
                <Link href={CIRCLE_OF_FIFTHS_PATH} prefetch={false}>
                  <strong>Círculo de quintas interactivo</strong>
                  <span>Armaduras, relativas y acordes de cada tonalidad.</span>
                </Link>
              </li>
              <li>
                <Link href={CHORDS_PATH} prefetch={false}>
                  <strong>Diccionario de acordes</strong>
                  <span>Guitarra, piano y ukelele, con digitación y sonido.</span>
                </Link>
              </li>
              <li>
                <Link href="/blog/escalas-mayores-y-menores-explicadas" prefetch={false}>
                  <strong>Escalas mayores y menores explicadas</strong>
                  <span>Cómo se forman y en qué se diferencian.</span>
                </Link>
              </li>
              <li>
                <Link href="/blog/como-empezar-a-improvisar" prefetch={false}>
                  <strong>Cómo empezar a improvisar</strong>
                  <span>Usa la pentatónica para tus primeros solos.</span>
                </Link>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <CtaBand
        title="¿Quieres que la teoría te sirva para tocar?"
        text="Clases de piano, guitarra y teoría musical virtuales o a domicilio en Bogotá, con profes evaluados."
        primary={{ href: whatsappHref("¡Hola! Vengo de las escalas musicales y quiero información sobre clases."), label: "Escribir por WhatsApp", external: true }}
        secondary={{ href: "/clases", label: "Ver clases" }}
      />
      <Footer />
    </>
  );
}
