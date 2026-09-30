import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/editorial/Breadcrumbs";
import { CtaBand } from "@/components/editorial/CtaBand";
import { FaqList } from "@/components/editorial/FaqList";
import { JsonLdScript } from "@/components/editorial/JsonLdScript";
import { plainText } from "@/components/RichText";
import { Metronome } from "@/components/tools/Metronome";
import { ToolLinks } from "@/components/tools/ToolLinks";
import { getPost, postPath } from "@/lib/blog";
import type { FaqItem } from "@/lib/content-types";
import { whatsappHref } from "@/lib/contact";
import { METRONOME_PATH, TEMPO_MARKINGS, TOOLS_PATH, TUNER_PATH } from "@/lib/music-tools";
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
  "Metrónomo online gratis y preciso: de 30 a 250 BPM, compases, subdivisiones, acento y tap tempo. Practica piano, guitarra, batería o canto sin instalar nada.";

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
      "Sí: elige compás de 2/4 con subdivisión en tresillos para sentir el 6/8 en dos pulsos, o compás de 6/4 con negras si prefieres contar las seis corcheas.",
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
            featureList: ["30 a 250 BPM", "Compases de 2 a 7 tiempos", "Subdivisiones", "Acento en el primer tiempo", "Tap tempo"],
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
        </div>
      </section>

      <section className="block ed-section" style={{ ["--ed-accent" as string]: "var(--orange)" }}>
        <div className="container tool-content">
          <article className="prose">
            <h2>Cómo usar el metrónomo</h2>
            <ol>
              <li>Elige el tempo con el control deslizante, los botones + y − o las flechas del teclado.</li>
              <li>Si no sabes el tempo de una canción, toca <strong>Tap tempo</strong> al ritmo de la música.</li>
              <li>Selecciona el compás (por ejemplo 3/4 para un vals o un pasillo) y activa el acento para escuchar el primer tiempo.</li>
              <li>Usa la subdivisión en corcheas, tresillos o semicorcheas para trabajar pasajes rápidos con precisión.</li>
              <li>Empieza lento, toca limpio y sube el tempo poco a poco.</li>
            </ol>

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
