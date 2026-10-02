import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/editorial/Breadcrumbs";
import { CtaBand } from "@/components/editorial/CtaBand";
import { FaqList } from "@/components/editorial/FaqList";
import { JsonLdScript } from "@/components/editorial/JsonLdScript";
import { plainText } from "@/components/RichText";
import { EarTrainer } from "@/components/tools/EarTrainer";
import { ToolLinks } from "@/components/tools/ToolLinks";
import { getPost, postPath } from "@/lib/blog";
import type { BlogPost, FaqItem } from "@/lib/content-types";
import { whatsappHref } from "@/lib/contact";
import { EAR_TRAINING_PATH, INTERVALS, TOOLS_PATH } from "@/lib/music-tools";
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

const TITLE = "Entrenamiento auditivo: ejercicios de intervalos";
const DESCRIPTION =
  "Entrena tu oído gratis: escucha intervalos ascendentes, descendentes o armónicos y adivina cuál es. Ideal para solfeo, dictado y pruebas de admisión.";

export const metadata: Metadata = createPageMetadata({
  title: brandTitle("Entrenamiento auditivo online: intervalos"),
  description: DESCRIPTION,
  path: EAR_TRAINING_PATH,
  image: shareImage("entrenamiento-auditivo"),
  keywords: ["entrenamiento auditivo", "ejercicios de intervalos", "reconocer intervalos", "dictado musical online", "oído musical"],
});

const FAQS: FaqItem[] = [
  {
    question: "¿Por qué practicar intervalos?",
    answer:
      "Reconocer intervalos es la base del dictado, del solfeo y de tocar de oído. Es una de las habilidades que más se evalúan en las pruebas de admisión de música.",
  },
  {
    question: "¿Cuánto tiempo al día debo entrenar?",
    answer:
      "Cinco a diez minutos diarios funcionan mejor que una sesión larga a la semana. Empieza en nivel básico y pasa al completo cuando aciertes la mayoría sin dudar.",
  },
  {
    question: "¿Sirven las canciones de referencia?",
    answer:
      "Sí, al principio ayudan mucho. Con la práctica conviene reconocer el intervalo por su sonido, sin pasar por la canción.",
  },
  {
    question: "¿Qué es un semitono?",
    answer:
      "Es la distancia más corta entre dos notas en la música occidental: de una tecla del piano a la siguiente, blanca o negra, o de un traste de la guitarra al vecino. Los intervalos se miden en semitonos: la quinta justa, por ejemplo, tiene siete.",
  },
  {
    question: "¿Me sirve para la prueba de admisión?",
    answer:
      "Es un buen complemento. Para prepararte a fondo, mira nuestra guía de [dictado musical](/blog/dictado-musical-como-prepararlo) y el [preuniversitario de música](/preuniversitario-musica).",
  },
];

const RELATED = ["que-es-un-intervalo-musical", "como-entrenar-el-oido-musical", "dictado-musical-como-prepararlo", "oido-absoluto-y-oido-relativo"]
  .map((slug) => getPost(slug))
  .filter((post): post is BlogPost => Boolean(post));

export default function EarTrainingPage() {
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Herramientas", path: TOOLS_PATH },
    { name: "Entrenamiento auditivo", path: EAR_TRAINING_PATH },
  ];

  return (
    <>
      <JsonLdScript
        nodes={[
          webPageJsonLd({
            path: EAR_TRAINING_PATH,
            name: TITLE,
            description: DESCRIPTION,
            dateModified: SITE_CONTENT_UPDATED_AT,
            about: { "@id": `${absoluteUrl(EAR_TRAINING_PATH)}#app` },
          }),
          breadcrumbJsonLd(crumbs),
          webApplicationJsonLd({
            path: EAR_TRAINING_PATH,
            name: "Entrenamiento auditivo de A medio tono",
            description: DESCRIPTION,
            featureList: ["Intervalos ascendentes, descendentes y armónicos", "Nivel básico y completo", "Puntaje y racha", "Canciones de referencia"],
          }),
          faqPageJsonLd(FAQS.map((faq) => ({ question: faq.question, answer: plainText(faq.answer) })), EAR_TRAINING_PATH),
        ]}
      />
      <section className="block ed-page tool-page" style={{ ["--ed-accent" as string]: "var(--blue)" }}>
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <header className="ed-hero ed-hero--center">
            <div className="ed-hero-copy">
              <h1>{TITLE}</h1>
              <p className="ed-lead">
                Escucha dos notas y elige qué intervalo forman. Practica unos minutos al día y verás
                cómo tu oído empieza a reconocerlos solo.
              </p>
            </div>
          </header>
          <EarTrainer />
        </div>
      </section>

      <section className="block ed-section" style={{ ["--ed-accent" as string]: "var(--blue)" }}>
        <div className="container tool-content">
          <article className="prose">
            <h2>Cómo funciona el ejercicio</h2>
            <p>
              Cada pregunta toca dos notas al azar, empezando en algún punto entre Sol3 y Sol4, y tú
              eliges qué intervalo forman. Puedes repetir el sonido cuantas veces quieras antes de
              responder, y el puntaje y la racha te muestran cómo vas.
            </p>
            <ul>
              <li>
                <strong>Nivel básico:</strong> segunda mayor, terceras menor y mayor, cuarta justa,
                quinta justa y octava. Son los intervalos más frecuentes en melodías sencillas.
              </li>
              <li>
                <strong>Nivel completo:</strong> los doce intervalos de la octava, incluidos la segunda
                menor, el tritono, las sextas y las séptimas.
              </li>
              <li>
                <strong>Ascendente, descendente o armónico:</strong> las notas suenan de grave a agudo,
                de agudo a grave o al mismo tiempo.
              </li>
            </ul>

            <h2>Los intervalos y sus canciones de referencia</h2>
            <div className="prose-table-wrap" role="region" aria-label="Intervalos y canciones de referencia" tabIndex={0}>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Intervalo</th>
                    <th scope="col">Semitonos</th>
                    <th scope="col">Referencia ascendente</th>
                  </tr>
                </thead>
                <tbody>
                  {INTERVALS.map((interval) => (
                    <tr key={interval.semitones}>
                      <th scope="row">
                        {interval.name} ({interval.short})
                      </th>
                      <td>{interval.semitones}</td>
                      <td>{interval.hint || "Reconócelo por su sonido"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              Un intervalo es la distancia entre dos notas, y se mide en semitonos. Las canciones de
              referencia ayudan al principio: si el salto suena como el inicio de una melodía que
              conoces, probablemente es ese intervalo. Con la práctica, el objetivo es reconocerlo
              por su sonido, sin pasar por la canción.
            </p>

            <h2>Ascendente, descendente y armónico</h2>
            <p>
              El mismo intervalo suena distinto según cómo se presente. En el modo ascendente, la
              segunda nota es más aguda; en el descendente, más grave, y muchas canciones de
              referencia dejan de servir porque el salto va al revés. En el armónico las dos notas
              suenan juntas y hay que escuchar el color del conjunto en lugar del salto, por eso suele
              costar más al principio.
            </p>

            <h2>Consonancias y disonancias</h2>
            <p>
              Una forma de orientarte en el modo armónico es escuchar cuánta tensión tiene el sonido.
              La octava, la quinta y la cuarta justas suenan abiertas y estables (consonancias
              perfectas). Las terceras y las sextas suenan llenas y dulces (consonancias imperfectas).
              Las segundas, las séptimas y el tritono suenan tensos, como si pidieran moverse a otro
              lugar (disonancias).
            </p>

            <h2>Cómo practicar</h2>
            <ol>
              <li>Empieza en nivel básico y modo ascendente.</li>
              <li>Canta mentalmente las dos notas antes de responder.</li>
              <li>Cuando aciertes casi siempre, pasa a descendente y luego a armónico.</li>
              <li>Activa el nivel completo para sumar sextas, séptimas y el tritono.</li>
              <li>
                Canta en voz alta el intervalo después de cada respuesta, con los nombres de las notas
                si estudias solfeo: así lo fijas en el oído y en la voz.
              </li>
              <li>
                Practica cinco a diez minutos al día; la constancia pesa más que las sesiones largas.
              </li>
            </ol>

            <h2>Errores comunes</h2>
            <ul>
              <li>
                <strong>Depender siempre de la canción:</strong> ayuda al principio, pero es lenta.
                Cuando la reconozcas rápido, intenta responder antes de pensar en ella.
              </li>
              <li>
                <strong>Practicar solo ascendente:</strong> en la música real los intervalos bajan y
                suenan juntos. Alterna los tres modos desde que el básico te salga bien.
              </li>
              <li>
                <strong>Responder sin cantar:</strong> cantar el intervalo, aunque sea en voz baja,
                conecta el oído con la voz y fija el sonido en la memoria.
              </li>
              <li>
                <strong>Sesiones muy largas:</strong> el oído se cansa. Diez minutos con atención
                rinden más que una hora distraída.
              </li>
            </ul>

            <h2>Del oído al dictado</h2>
            <p>
              Reconocer intervalos es la base del dictado melódico: cada nota nueva de una melodía es
              un intervalo desde la anterior. Cuando el nivel completo te resulte cómodo, prueba a
              escribir melodías cortas de oído y compáralas con la partitura. Te contamos cómo
              hacerlo en la guía de{" "}
              <Link href="/blog/dictado-musical-como-prepararlo" prefetch={false}>
                dictado musical
              </Link>{" "}
              y en{" "}
              <Link href="/blog/que-es-el-solfeo-y-como-practicarlo" prefetch={false}>
                qué es el solfeo y cómo practicarlo
              </Link>
              .
            </p>
            <h2>Preguntas frecuentes</h2>
            <FaqList items={FAQS} openFirst={false} />
          </article>
          <aside className="tool-aside">
            <h2 className="ed-h2">Sigue entrenando</h2>
            <ToolLinks
              links={[
                { href: "/clases/teoria-musical", title: "Clases de teoría musical", text: "Solfeo, dictado y armonía con profes evaluados." },
                ...RELATED.map((post) => ({ href: postPath(post.slug), title: post.title, text: post.excerpt })),
              ]}
            />
          </aside>
        </div>
      </section>

      <CtaBand
        title="Entrena tu oído con un profe"
        text="Clases de teoría, solfeo y dictado, virtuales o a domicilio en Bogotá, también para preparar pruebas de admisión."
        primary={{
          href: whatsappHref("¡Hola! Vengo del entrenamiento auditivo y quiero clases de teoría musical."),
          label: "Escribir por WhatsApp",
          external: true,
        }}
        secondary={{ href: "/preuniversitario-musica", label: "Ver preuniversitario de música" }}
      />
      <Footer />
    </>
  );
}
