import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/editorial/Breadcrumbs";
import { CtaBand } from "@/components/editorial/CtaBand";
import { FaqList } from "@/components/editorial/FaqList";
import { JsonLdScript } from "@/components/editorial/JsonLdScript";
import { plainText } from "@/components/RichText";
import { ToolLinks } from "@/components/tools/ToolLinks";
import { VoiceTypeTest } from "@/components/tools/VoiceTypeTest";
import { getPost, postPath } from "@/lib/blog";
import type { BlogPost, FaqItem } from "@/lib/content-types";
import { whatsappHref } from "@/lib/contact";
import { TOOLS_PATH, TUNER_PATH, VOICE_TYPES, VOICE_TYPE_PATH, noteLabel } from "@/lib/music-tools";
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

const TITLE = "¿Qué tipo de voz tengo? Test de tesitura online";
const DESCRIPTION =
  "Test de tesitura gratis con micrófono: canta tu nota más grave y la más aguda y descubre si eres soprano, mezzo, contralto, tenor, barítono o bajo.";

export const metadata: Metadata = createPageMetadata({
  title: brandTitle(TITLE),
  description: DESCRIPTION,
  path: VOICE_TYPE_PATH,
  image: shareImage("tipo-de-voz"),
  keywords: ["qué tipo de voz tengo", "test de tesitura", "test de tesitura online", "test de voz", "cómo saber mi tipo de voz", "tesitura vocal", "rango vocal"],
});

const FAQS: FaqItem[] = [
  {
    question: "¿Qué diferencia hay entre rango y tesitura?",
    answer:
      "El rango es todo lo que tu voz alcanza, de la nota más grave a la más aguda. La tesitura es la zona donde cantas con comodidad y mejor sonido, y es la que más importa para definir tu tipo de voz.",
  },
  {
    question: "¿El test es exacto?",
    answer:
      "Es una orientación. El tipo de voz depende también del color, del peso de la voz y de dónde cambias de registro. Un profe de canto puede escucharte y confirmarlo.",
  },
  {
    question: "¿Mi tipo de voz puede cambiar?",
    answer:
      "Con técnica, tu rango cómodo suele ampliarse, y en niños y adolescentes la voz cambia con el crecimiento. Por eso conviene repetir el test de vez en cuando y no encasillarse.",
  },
  {
    question: "¿Sirve para niños?",
    answer:
      "Las voces infantiles son más agudas y no se clasifican igual que las adultas. Para niños es mejor cantar en un rango cómodo y sin forzar; te contamos cómo en [canto para niños](/blog/canto-para-ninos-como-cuidar-su-voz).",
  },
  {
    question: "¿Cuenta el falsete?",
    answer:
      "El test registra cualquier nota estable que cantes. Para compararte con los rangos de la tabla, usa como nota aguda la más alta que logras con tu voz plena, la que se parece a tu voz hablada; el falsete amplía el rango, pero no define el tipo de voz. Lo explicamos en [voz de pecho, voz de cabeza y falsete](/blog/voz-de-pecho-voz-de-cabeza-y-falsete).",
  },
  {
    question: "¿Qué diferencia hay entre soprano y mezzosoprano?",
    answer:
      "La soprano canta cómoda en una zona más aguda; la mezzosoprano, en una zona intermedia, con un color más oscuro. Sus rangos se superponen en buena parte, por eso el color y la comodidad pesan tanto como las notas extremas.",
  },
];

const RELATED = ["como-saber-mi-tipo-de-voz", "como-ampliar-el-registro-vocal", "ejercicios-de-calentamiento-vocal", "primeras-clases-de-canto-que-esperar"]
  .map((slug) => getPost(slug))
  .filter((post): post is BlogPost => Boolean(post));

function rangeLabel(midi: number) {
  const note = noteLabel(midi);
  return `${note.es}${note.octave} (${note.scientific})`;
}

export default function VoiceTypePage() {
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Herramientas", path: TOOLS_PATH },
    { name: "Test de tipo de voz", path: VOICE_TYPE_PATH },
  ];

  return (
    <>
      <JsonLdScript
        nodes={[
          webPageJsonLd({
            path: VOICE_TYPE_PATH,
            name: TITLE,
            description: DESCRIPTION,
            dateModified: SITE_CONTENT_UPDATED_AT,
            about: { "@id": `${absoluteUrl(VOICE_TYPE_PATH)}#app` },
          }),
          breadcrumbJsonLd(crumbs),
          webApplicationJsonLd({
            path: VOICE_TYPE_PATH,
            name: "Test de tipo de voz de A medio tono",
            description: DESCRIPTION,
            featureList: ["Detección de la nota más grave y más aguda", "Estimación del tipo de voz", "Comparación con rangos típicos"],
          }),
          faqPageJsonLd(FAQS.map((faq) => ({ question: faq.question, answer: plainText(faq.answer) })), VOICE_TYPE_PATH),
        ]}
      />
      <section className="block ed-page tool-page" style={{ ["--ed-accent" as string]: "var(--pink)" }}>
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <header className="ed-hero ed-hero--center">
            <div className="ed-hero-copy">
              <span className="ed-eyebrow">Herramienta gratis</span>
              <h1>{TITLE}</h1>
              <p className="ed-lead">
                Canta tu nota más grave y tu nota más aguda con el micrófono y compara tu rango con
                los tipos de voz clásicos. Toma menos de un minuto.
              </p>
            </div>
          </header>
          <VoiceTypeTest />
        </div>
      </section>

      <section className="block ed-section" style={{ ["--ed-accent" as string]: "var(--pink)" }}>
        <div className="container tool-content">
          <article className="prose">
            <h2>Cómo funciona el test</h2>
            <ol>
              <li>
                Toca <strong>Empezar el test</strong> y acepta el permiso del micrófono. El sonido se
                analiza en tu dispositivo: no se graba ni se envía.
              </li>
              <li>
                Baja poco a poco con una vocal abierta y sostén la nota más grave que puedas cantar
                con comodidad. El test solo cuenta una nota cuando la mantienes estable cerca de medio
                segundo, así que los ruidos y las notas sueltas no lo engañan.
              </li>
              <li>Repite hacia arriba: sube despacio y sostén la nota más aguda que cantes sin forzar.</li>
              <li>
                El test compara tu nota más grave y tu nota más aguda con los rangos típicos de cada
                tipo de voz y te muestra el más cercano, junto con la extensión de tu rango en
                semitonos.
              </li>
            </ol>

            <h2>Tipos de voz y sus rangos</h2>
            <p>
              Estos rangos son orientativos y corresponden a voces adultas con cierta práctica. Muchas
              personas cantan con comodidad solo una parte de ellos, y está bien. El Do4 es el Do
              central del piano.
            </p>
            <div className="prose-table-wrap" role="region" aria-label="Tipos de voz y rangos" tabIndex={0}>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Tipo de voz</th>
                    <th scope="col">Rango aproximado</th>
                    <th scope="col">Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  {[...VOICE_TYPES].reverse().map((type) => (
                    <tr key={type.name}>
                      <th scope="row">{type.name}</th>
                      <td>
                        {rangeLabel(type.low)} a {rangeLabel(type.high)}
                      </td>
                      <td>{type.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Rango, tesitura y tipo de voz no son lo mismo</h2>
            <ul>
              <li>
                <strong>Rango:</strong> todas las notas que alcanzas, de la más grave a la más aguda,
                aunque algunas suenen forzadas.
              </li>
              <li>
                <strong>Tesitura:</strong> la zona donde cantas cómodo durante un buen rato, con buen
                sonido. Es la que más pesa para clasificar una voz.
              </li>
              <li>
                <strong>Tipo de voz:</strong> la clasificación (soprano, tenor, etc.), que combina la
                tesitura con el color de la voz y con los puntos donde cambias de registro.
              </li>
            </ul>
            <p>
              Por eso dos personas con el mismo rango pueden tener tipos de voz distintos. Este test
              mide el rango; para afinar la clasificación, fíjate en qué zona te sientes cómodo y
              repite la prueba en días distintos.
            </p>

            <h2>Cómo saber tu tipo de voz sin micrófono</h2>
            <p>
              Con un piano, un teclado o una aplicación de piano: toca el Do central (Do4) y canta
              esa nota. Baja tecla por tecla cantando cada nota hasta la más grave que suene limpia, y
              luego sube hasta la más aguda que puedas sostener sin apretar la garganta. Anota las
              dos y compáralas con la tabla. Si quieres comprobar que estás cantando la nota exacta,
              usa el{" "}
              <Link href={TUNER_PATH} prefetch={false}>
                afinador
              </Link>
              : canta y mira si la aguja queda en el centro.
            </p>

            <h2>Consejos para hacer el test</h2>
            <ul>
              <li>Calienta la voz antes: unos minutos de sirenas o vibración de labios bastan.</li>
              <li>Busca un lugar silencioso y acerca el micrófono a tu boca a un palmo de distancia.</li>
              <li>Canta con una vocal abierta y sostén cada nota; el test solo cuenta notas estables.</li>
              <li>No fuerces: la nota que cuenta es la que puedes cantar con sonido limpio.</li>
              <li>Repite el test otro día: la voz cambia con el cansancio, la hora y la hidratación.</li>
            </ul>

            <h2>Errores comunes</h2>
            <ul>
              <li>
                <strong>Empujar las notas extremas:</strong> si la garganta aprieta o la voz se raspa,
                esa nota no es parte de tu tesitura, aunque el test la registre.
              </li>
              <li>
                <strong>Clasificarse por las canciones que te gustan:</strong> si tu voz es de
                barítono y te encanta un tenor, puedes{" "}
                <Link href="/blog/como-transportar-una-cancion" prefetch={false}>
                  transportar la canción
                </Link>{" "}
                a tu tono.
              </li>
              <li>
                <strong>Hacer el test sin calentar:</strong> la voz fría suele quedarse corta en los
                agudos y da un rango menor al real.
              </li>
            </ul>

            <h2>Preguntas frecuentes</h2>
            <FaqList items={FAQS} openFirst={false} />
          </article>
          <aside className="tool-aside">
            <h2 className="ed-h2">Sigue con tu voz</h2>
            <ToolLinks
              links={[
                { href: "/clases/canto", title: "Clases de canto", text: "Virtuales o a domicilio en Bogotá, con profes evaluados." },
                { href: TUNER_PATH, title: "Afinador online", text: "Comprueba si estás afinando cada nota." },
                ...RELATED.map((post) => ({ href: postPath(post.slug), title: post.title, text: post.excerpt })),
              ]}
            />
          </aside>
        </div>
      </section>

      <CtaBand
        title="Descubre todo lo que tu voz puede hacer"
        text="Un profe de canto te ayuda a confirmar tu tipo de voz y a cantar con más rango y menos esfuerzo."
        primary={{
          href: whatsappHref("¡Hola! Hice el test de voz y quiero información sobre clases de canto."),
          label: "Escribir por WhatsApp",
          external: true,
        }}
        secondary={{ href: "/clases/canto", label: "Ver clases de canto" }}
      />
      <Footer />
    </>
  );
}
