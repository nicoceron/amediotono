import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/editorial/Breadcrumbs";
import { CtaBand } from "@/components/editorial/CtaBand";
import { FaqList } from "@/components/editorial/FaqList";
import { JsonLdScript } from "@/components/editorial/JsonLdScript";
import { plainText } from "@/components/RichText";
import { ToolLinks } from "@/components/tools/ToolLinks";
import { TunerPresetGroups } from "@/components/tools/ToolPresetLists";
import { Tuner } from "@/components/tools/Tuner";
import { formatHz } from "@/components/tools/TunerStringsTable";
import type { FaqItem } from "@/lib/content-types";
import { whatsappHref } from "@/lib/contact";
import {
  METRONOME_PATH,
  NOTE_NAMES_EN,
  NOTE_NAMES_ES,
  TOOLS_PATH,
  TUNER_PATH,
  VOICE_TYPE_PATH,
  midiToFrequency,
} from "@/lib/music-tools";
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

const TITLE = "Afinador online con micrófono";
const DESCRIPTION =
  "Afinador cromático online y gratis: usa el micrófono para afinar guitarra, violín, bajo, chelo, ukelele, voz o cualquier instrumento. Sin descargar nada.";

export const metadata: Metadata = createPageMetadata({
  title: brandTitle("Afinador online gratis con micrófono"),
  description: DESCRIPTION,
  path: TUNER_PATH,
  image: shareImage("afinador"),
  keywords: ["afinador online", "afinador cromático", "afinador con micrófono", "afinador gratis", "tuner online", "frecuencia de las notas musicales"],
});

/** Octaves shown in the frequency table: from the low strings of a guitar to the violin's E. */
const TABLE_OCTAVES = [2, 3, 4, 5];

const FAQS: FaqItem[] = [
  {
    question: "¿Cómo funciona un afinador cromático?",
    answer:
      "Escucha el sonido por el micrófono, calcula su frecuencia y te muestra la nota más cercana de las doce notas de la escala cromática, junto con cuántos cents estás por encima o por debajo.",
  },
  {
    question: "¿Qué significa estar a +10 cents?",
    answer:
      "Un cent es la centésima parte de un semitono. +10 cents significa que la nota está un poco alta: debes bajar la afinación. Entre −5 y +5 cents se considera afinado para la práctica.",
  },
  {
    question: "¿Por qué hay afinadores con La = 442 Hz?",
    answer:
      "El La central se afina en 440 Hz como estándar, pero algunas orquestas y grupos usan 441 o 442 Hz para un sonido más brillante. Puedes cambiarlo en el selector «La =».",
  },
  {
    question: "¿Grabamos tu audio?",
    answer:
      "No. El análisis ocurre en tu propio dispositivo; el sonido no se graba ni se envía a ningún servidor.",
  },
  {
    question: "¿Sirve para tiple, bandola o cuatro?",
    answer:
      "Sí. Este afinador reconoce cualquier nota, y además tienes afinadores con las notas exactas del [tiple](/herramientas/afinador/tiple), la [bandola andina](/herramientas/afinador/bandola-andina) y el [cuatro llanero](/herramientas/afinador/cuatro-llanero), incluidas las cuerdas en octava.",
  },
  {
    question: "¿Funciona en el celular?",
    answer:
      "Sí, en Chrome, Safari y Firefox actualizados, tanto en Android como en iPhone. Solo tienes que aceptar el permiso del micrófono la primera vez.",
  },
];

export default function TunerPage() {
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Herramientas", path: TOOLS_PATH },
    { name: "Afinador", path: TUNER_PATH },
  ];

  return (
    <>
      <JsonLdScript
        nodes={[
          webPageJsonLd({
            path: TUNER_PATH,
            name: TITLE,
            description: DESCRIPTION,
            dateModified: SITE_CONTENT_UPDATED_AT,
            about: { "@id": `${absoluteUrl(TUNER_PATH)}#app` },
          }),
          breadcrumbJsonLd(crumbs),
          webApplicationJsonLd({
            path: TUNER_PATH,
            name: "Afinador cromático online de A medio tono",
            description: DESCRIPTION,
            featureList: ["Detección de nota con micrófono", "Indicador en cents", "Calibración de La de 430 a 445 Hz", "Notas de referencia por instrumento"],
          }),
          faqPageJsonLd(FAQS.map((faq) => ({ question: faq.question, answer: plainText(faq.answer) })), TUNER_PATH),
        ]}
      />
      <section className="block ed-page tool-page" style={{ ["--ed-accent" as string]: "var(--green)" }}>
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <header className="ed-hero ed-hero--center">
            <div className="ed-hero-copy">
              <span className="ed-eyebrow">Herramienta gratis</span>
              <h1>{TITLE}</h1>
              <p className="ed-lead">
                Toca una nota y el afinador te dice cuál es y si debes subirla o bajarla. Sirve
                para cualquier instrumento y para la voz. Si tocas cuerdas, elige tu instrumento
                abajo para ver sus notas de referencia.
              </p>
            </div>
          </header>
          <Tuner />

          <TunerPresetGroups />
        </div>
      </section>

      <section className="block ed-section" style={{ ["--ed-accent" as string]: "var(--green)" }}>
        <div className="container tool-content">
          <article className="prose">
            <h2>Cómo afinar con este afinador</h2>
            <ol>
              <li>Toca <strong>Activar micrófono</strong> y acepta el permiso del navegador.</li>
              <li>Toca una sola cuerda o nota a la vez, cerca del micrófono y en un lugar sin ruido.</li>
              <li>Mira la aguja: a la izquierda estás bajo (sube la afinación), a la derecha estás alto (bájala).</li>
              <li>Cuando la aguja quede en la zona verde central, la nota está afinada.</li>
              <li>
                Si tocas un instrumento de cuerda, abre su afinador: ahí ves cada cuerda con su nota,
                puedes fijar la cuerda que estás afinando y escuchar la nota de referencia.
              </li>
            </ol>

            <h2>Qué te dicen la nota, la aguja y los cents</h2>
            <p>
              Arriba ves el nombre de la nota en español y en cifrado americano con su octava: por
              ejemplo, «La · A4» es el La de 440 Hz, el que se usa como referencia para afinar. La
              aguja mide la distancia a esa nota en cents. Un semitono, la distancia entre dos
              trastes vecinos de la guitarra o dos teclas vecinas del piano, se divide en 100 cents.
            </p>
            <p>
              Si la aguja marca −20, estás 20 cents por debajo: sube la afinación poco a poco. Entre
              −5 y +5 cents la nota se considera afinada para practicar. Cuando dos instrumentos
              suenan juntos, hasta diferencias pequeñas se oyen como una ondulación en el sonido; por
              eso conviene afinar con calma antes de tocar en grupo.
            </p>

            <h2>Frecuencia de las notas musicales (La = 440 Hz)</h2>
            <p>
              Cada nota corresponde a una frecuencia, medida en hercios (vibraciones por segundo). Al
              subir una octava, la frecuencia se duplica: el La4 vibra a 440 Hz, el La3 a 220 Hz y el
              La5 a 880 Hz. Esta tabla cubre el registro de la mayoría de instrumentos de cuerda y de
              la voz.
            </p>
            <div className="prose-table-wrap" role="region" aria-label="Frecuencia de las notas musicales" tabIndex={0}>
              <table>
                <caption>Frecuencia de cada nota en afinación temperada, con La4 = 440 Hz</caption>
                <thead>
                  <tr>
                    <th scope="col">Nota</th>
                    {TABLE_OCTAVES.map((octave) => (
                      <th scope="col" key={octave}>
                        Octava {octave}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {NOTE_NAMES_ES.map((name, index) => (
                    <tr key={name}>
                      <th scope="row">
                        {name} ({NOTE_NAMES_EN[index]})
                      </th>
                      {TABLE_OCTAVES.map((octave) => (
                        <td key={octave}>{formatHz(midiToFrequency((octave + 1) * 12 + index))}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              Como referencia: la 6.ª cuerda de la guitarra es un Mi2 (82,41 Hz), el Do central del
              piano es el Do4 (261,63 Hz) y la cuerda más aguda del violín es un Mi5 (659,26 Hz).
            </p>

            <h2>¿La = 440, 442 o 432 Hz?</h2>
            <p>
              La norma internacional ISO 16 fija el La4 en 440 Hz, y es la referencia de este
              afinador. Algunas orquestas y grupos afinan un poco más alto, en 441 o 442 Hz; si tocas
              con ellos, cambia el selector «La =» y todas las notas se ajustan. También verás 432 Hz:
              no es un estándar, así que úsalo solo si tu grupo o una grabación lo requieren. Lo
              importante es que todos los que tocan juntos usen la misma referencia.
            </p>

            <h2>Consejos para una afinación estable</h2>
            <ul>
              <li>Afina en el mismo lugar donde vas a tocar: la temperatura cambia la afinación.</li>
              <li>Afina subiendo hacia la nota; si te pasas, baja un poco y vuelve a subir.</li>
              <li>Repasa todas las cuerdas al final: la tensión de unas mueve a las otras.</li>
              <li>Para la voz, canta una vocal abierta (a) y sostén la nota sin vibrato.</li>
            </ul>

            <h2>Problemas comunes</h2>
            <ul>
              <li>
                <strong>La nota salta o aparece una octava arriba:</strong> toca más suave y deja que
                el sonido se estabilice. En cuerdas graves, el micrófono capta a veces más el
                armónico que la nota fundamental.
              </li>
              <li>
                <strong>No reacciona:</strong> revisa el permiso del micrófono en el navegador y que
                ninguna otra app lo esté usando. Con audífonos con micrófono, el navegador puede estar
                escuchando el de los audífonos.
              </li>
              <li>
                <strong>Hay mucho ruido:</strong> busca un lugar silencioso y acerca el celular al
                instrumento; el afinador ignora los sonidos muy débiles.
              </li>
            </ul>

            <h2>Afinar la voz</h2>
            <p>
              El afinador también sirve para cantar afinado: canta una nota larga con una vocal
              abierta y mira si la aguja se queda en el centro. Si quieres saber qué notas te quedan
              cómodas, haz el{" "}
              <Link href={VOICE_TYPE_PATH} prefetch={false}>
                test de tipo de voz
              </Link>
              .
            </p>

            <h2>Preguntas frecuentes</h2>
            <FaqList items={FAQS} openFirst={false} />
          </article>
          <aside className="tool-aside">
            <h2 className="ed-h2">Más herramientas</h2>
            <ToolLinks
              links={[
                { href: METRONOME_PATH, title: "Metrónomo online", text: "De 30 a 250 BPM, con compases, subdivisiones y acentos." },
                { href: VOICE_TYPE_PATH, title: "¿Qué tipo de voz tengo?", text: "Test de tesitura con el micrófono." },
                { href: "/blog/como-afinar-la-guitarra", title: "Cómo afinar la guitarra", text: "Paso a paso, con afinador y de oído." },
                { href: "/blog/como-afinar-el-tiple", title: "Cómo afinar el tiple", text: "Sus 12 cuerdas, orden por orden." },
              ]}
            />
          </aside>
        </div>
      </section>

      <CtaBand
        title="¿Quieres aprender a afinar de oído?"
        text="Nuestros profes te enseñan a escuchar, afinar y tocar con seguridad, en clases virtuales o a domicilio."
        primary={{
          href: whatsappHref("¡Hola! Vengo del afinador online y quiero información sobre clases."),
          label: "Escribir por WhatsApp",
          external: true,
        }}
        secondary={{ href: "/clases", label: "Ver clases" }}
      />
      <Footer />
    </>
  );
}
