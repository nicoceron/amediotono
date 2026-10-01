import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/editorial/Breadcrumbs";
import { CtaBand } from "@/components/editorial/CtaBand";
import { FaqList } from "@/components/editorial/FaqList";
import { JsonLdScript } from "@/components/editorial/JsonLdScript";
import { plainText } from "@/components/RichText";
import { Metronome } from "@/components/tools/Metronome";
import { ToolLinks } from "@/components/tools/ToolLinks";
import { RhythmPresetList } from "@/components/tools/ToolPresetLists";
import { getPost, postPath } from "@/lib/blog";
import type { FaqItem } from "@/lib/content-types";
import { whatsappHref } from "@/lib/contact";
import { METRONOME_PATH, RHYTHM_PRESETS, TEMPO_MARKINGS, TOOLS_PATH, TUNER_PATH, rhythmPresetPath } from "@/lib/music-tools";
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

const TITLE = "Metrónomo online gratis";
const DESCRIPTION =
  "Metrónomo online gratis: de 30 a 250 BPM, compases de 2/4 a 12/8, subdivisiones, acentos y tap tempo. Para cualquier instrumento, sin instalar nada.";

export const metadata: Metadata = createPageMetadata({
  title: brandTitle("Metrónomo online gratis: preciso y sin anuncios"),
  description: DESCRIPTION,
  path: METRONOME_PATH,
  image: shareImage("metronomo"),
  keywords: ["metrónomo online", "metrónomo gratis", "metrónomo online gratis", "metronomo", "tap tempo", "bpm"],
});

const FAQS: FaqItem[] = [
  {
    question: "¿Qué es un BPM?",
    answer:
      "BPM significa pulsos por minuto (beats per minute). A 60 BPM suena un pulso cada segundo; a 120 BPM, dos por segundo.",
  },
  {
    question: "¿Por qué el metrónomo no suena en mi celular?",
    answer:
      "Revisa que el volumen multimedia esté arriba y que el modo silencio no esté activado. En iPhone, el interruptor de silencio puede bloquear el sonido de las páginas web.",
  },
  {
    question: "¿Sirve para practicar compases de 6/8?",
    answer:
      "Sí: elige 6/8 en el selector de compás. El metrónomo cuenta dos pulsos de negra con puntillo por compás, y con la subdivisión en corcheas escuchas las seis corcheas. También tienes 9/8 y 12/8.",
  },
  {
    question: "¿Cómo cambio los acentos?",
    answer:
      "Toca cada punto de la fila de tiempos: pasa de acento fuerte a suave y a ninguno. Así puedes marcar, por ejemplo, el 1 fuerte y el 3 suave en un 4/4, o quitar todos los acentos con la casilla «Acentuar tiempos».",
  },
  {
    question: "¿Qué es el tap tempo?",
    answer:
      "Es una forma de medir el tempo de una canción: toca el botón al ritmo del pulso varias veces seguidas y el metrónomo calcula los BPM a partir del tiempo entre toques.",
  },
  {
    question: "¿Cuánto debo subir el tempo cada día?",
    answer:
      "Poco a poco: de 2 a 5 BPM cuando ya tocas el pasaje limpio tres veces seguidas. Lo explicamos en nuestra [guía para practicar con metrónomo](/blog/como-usar-el-metronomo-para-practicar).",
  },
];

const RELATED = [
  "como-usar-el-metronomo-para-practicar",
  "cuantas-horas-practicar-al-dia",
  "como-practicar-musica-en-casa",
]
  .map((slug) => getPost(slug))
  .filter((post) => post !== undefined);

export default function MetronomePage() {
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Herramientas", path: TOOLS_PATH },
    { name: "Metrónomo", path: METRONOME_PATH },
  ];

  return (
    <>
      <JsonLdScript
        nodes={[
          webPageJsonLd({
            path: METRONOME_PATH,
            name: TITLE,
            description: DESCRIPTION,
            dateModified: SITE_CONTENT_UPDATED_AT,
            about: { "@id": `${absoluteUrl(METRONOME_PATH)}#app` },
          }),
          breadcrumbJsonLd(crumbs),
          webApplicationJsonLd({
            path: METRONOME_PATH,
            name: "Metrónomo online de A medio tono",
            description: DESCRIPTION,
            featureList: ["30 a 250 BPM", "Compases de 2/4 a 7/4, 2/2, 6/8, 9/8 y 12/8", "Subdivisiones", "Acentos por tiempo", "Tap tempo"],
          }),
          faqPageJsonLd(FAQS.map((faq) => ({ question: faq.question, answer: plainText(faq.answer) })), METRONOME_PATH),
        ]}
      />
      <section className="block ed-page tool-page" style={{ ["--ed-accent" as string]: "var(--orange)" }}>
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <header className="ed-hero ed-hero--center">
            <div className="ed-hero-copy">
              <span className="ed-eyebrow">Herramienta gratis</span>
              <h1>{TITLE}</h1>
              <p className="ed-lead">
                Un metrónomo preciso para practicar cualquier instrumento: elige el tempo, el
                compás y la subdivisión, y dale play. Funciona en el celular y en el computador,
                sin descargar nada.
              </p>
            </div>
          </header>
          <Metronome />
          <RhythmPresetList />
        </div>
      </section>

      <section className="block ed-section" style={{ ["--ed-accent" as string]: "var(--orange)" }}>
        <div className="container tool-content">
          <article className="prose">
            <h2>Cómo usar el metrónomo</h2>
            <ol>
              <li>Elige el tempo con el control deslizante, los botones + y − o las flechas del teclado.</li>
              <li>Si no sabes el tempo de una canción, toca <strong>Tap tempo</strong> al ritmo de la música.</li>
              <li>Selecciona el compás (por ejemplo 3/4 para un vals o un pasillo, o 6/8 para un currulao).</li>
              <li>Toca los puntos de la fila de tiempos para elegir qué tiempos suenan con acento fuerte, suave o sin acento.</li>
              <li>Usa la subdivisión en corcheas, tresillos o semicorcheas para trabajar pasajes rápidos con precisión.</li>
              <li>Empieza lento, toca limpio y sube el tempo poco a poco.</li>
            </ol>

            <h2>Compases simples y compuestos</h2>
            <p>
              El compás dice cuántos pulsos tiene cada grupo y qué figura vale un pulso. En los
              compases simples (2/4, 3/4, 4/4) el pulso es una negra y se divide en dos corcheas. En
              los compuestos (6/8, 9/8, 12/8) el pulso es una negra con puntillo y se divide en tres
              corcheas. El compás partido (2/2) cuenta blancas: dos pulsos amplios por compás.
            </p>
            <div className="prose-table-wrap" role="region" aria-label="Compases del metrónomo" tabIndex={0}>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Compás</th>
                    <th scope="col">Pulsos</th>
                    <th scope="col">El metrónomo cuenta</th>
                    <th scope="col">Ejemplos</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">2/4 y 4/4</th>
                    <td>2 o 4</td>
                    <td>Negras</td>
                    <td>Marchas, pop, rock, buena parte de la música popular</td>
                  </tr>
                  <tr>
                    <th scope="row">3/4</th>
                    <td>3</td>
                    <td>Negras</td>
                    <td>Vals, pasillo, guabina</td>
                  </tr>
                  <tr>
                    <th scope="row">2/2</th>
                    <td>2</td>
                    <td>Blancas</td>
                    <td>Cumbia, porro, paseo vallenato</td>
                  </tr>
                  <tr>
                    <th scope="row">6/8</th>
                    <td>2</td>
                    <td>Negras con puntillo</td>
                    <td>Currulao, bambuco (también en 3/4)</td>
                  </tr>
                  <tr>
                    <th scope="row">9/8 y 12/8</th>
                    <td>3 o 4</td>
                    <td>Negras con puntillo</td>
                    <td>12/8 es común en el blues lento y el shuffle</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Al pasar a un compás compuesto, el metrónomo activa la subdivisión en corcheas para que
              escuches los grupos de tres. Lee más en{" "}
              <Link href="/blog/compases-musicales-explicados-2-4-3-4-4-4-y-6-8" prefetch={false}>
                compases musicales explicados
              </Link>
              .
            </p>

            <h2>Ritmos colombianos con el metrónomo</h2>
            <p>
              Cada ritmo tiene su página con el compás, un tempo de referencia y los acentos listos
              para practicar:{" "}
              {RHYTHM_PRESETS.map((preset, index) => (
                <span key={preset.slug}>
                  <Link href={rhythmPresetPath(preset.slug)} prefetch={false}>
                    {preset.name}
                  </Link>
                  {index < RHYTHM_PRESETS.length - 2 ? ", " : index === RHYTHM_PRESETS.length - 2 ? " y " : "."}
                </span>
              ))}{" "}
              En el bambuco y el joropo puedes pasar de 6/8 a 3/4 sin cambiar la velocidad de las
              corcheas, para sentir la sesquiáltera.
            </p>

            <h2>Tempos musicales y sus BPM</h2>
            <p>
              Las indicaciones de tempo en italiano son orientativas: cada obra y cada intérprete
              las ajusta. Esta tabla te da un punto de partida.
            </p>
            <div className="prose-table-wrap" role="region" aria-label="Tempos y BPM" tabIndex={0}>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Indicación</th>
                    <th scope="col">BPM aproximados</th>
                    <th scope="col">Carácter</th>
                  </tr>
                </thead>
                <tbody>
                  {TEMPO_MARKINGS.map((marking) => (
                    <tr key={marking.name}>
                      <th scope="row">{marking.name}</th>
                      <td>
                        {marking.min}–{marking.max}
                      </td>
                      <td>{marking.feel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Subdivisiones: para qué sirve cada una</h2>
            <ul>
              <li>
                <strong>Corcheas:</strong> dos clics por pulso. Ayudan a ubicar los contratiempos y a
                no correr en los pasajes lentos.
              </li>
              <li>
                <strong>Tresillos:</strong> tres clics por pulso en compases simples. Sirven para el
                swing, el shuffle y cualquier pasaje en tresillos.
              </li>
              <li>
                <strong>Semicorcheas:</strong> cuatro clics por pulso. Son la red de seguridad para
                escalas y pasajes rápidos: si una nota se adelanta, la oyes de inmediato.
              </li>
            </ul>
            <p>
              Cuando el pasaje ya sale limpio con subdivisión, quítala: el objetivo es que el pulso
              interno lo lleves tú.
            </p>

            <h2>Cómo encontrar el tempo de una canción</h2>
            <p>
              Pon la canción y toca <strong>Tap tempo</strong> al ritmo del pulso, como si marcaras el
              paso con el pie, cuatro a seis veces seguidas. El metrónomo promedia el tiempo entre
              toques y te da los BPM. Si la canción está en 6/8 o en compás partido, elige primero ese
              compás y marca los pulsos largos, no todas las corcheas.
            </p>

            <h2>Tres ejercicios para practicar con metrónomo</h2>
            <ul>
              <li>
                <strong>El pulso en el 2 y el 4:</strong> pon el metrónomo a la mitad del tempo y
                siente cada clic como el segundo y cuarto tiempo, como en el jazz y el pop.
              </li>
              <li>
                <strong>Escalera de tempo:</strong> toca un pasaje difícil a un tempo cómodo, sube
                4 BPM cada vez que salga limpio tres veces y baja 8 si se desordena.
              </li>
              <li>
                <strong>Silencios del metrónomo:</strong> cuenta cuatro compases con clic y cuatro
                sin él; cuando vuelvas a escucharlo, deberías caer justo en el tiempo.
              </li>
            </ul>

            <h2>Preguntas frecuentes</h2>
            <FaqList items={FAQS} openFirst={false} />
          </article>

          <aside className="tool-aside">
            <h2 className="ed-h2">Sigue practicando</h2>
            <ToolLinks
              links={[
                { href: TUNER_PATH, title: "Afinador online", text: "Afina tu instrumento con el micrófono." },
                ...RELATED.map((post) => ({ href: postPath(post.slug), title: post.title, text: post.excerpt })),
              ]}
            />
          </aside>
        </div>
      </section>

      <CtaBand
        title="El metrónomo marca el pulso. Tu profe, el camino."
        text="Clases de música virtuales o a domicilio en Bogotá, para todas las edades, con profes evaluados."
        primary={{
          href: whatsappHref("¡Hola! Vengo del metrónomo online y quiero información sobre clases."),
          label: "Escribir por WhatsApp",
          external: true,
        }}
        secondary={{ href: "/clases", label: "Ver clases" }}
      />
      <Footer />
    </>
  );
}
