import type { Metadata } from "next";
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

const TITLE = "Test de voz: descubre tu tipo de voz";
const DESCRIPTION =
  "Test de voz gratis con el micrófono: canta tu nota más grave y la más aguda y descubre si tu rango es de soprano, mezzo, contralto, tenor, barítono o bajo.";

export const metadata: Metadata = createPageMetadata({
  title: brandTitle("Test de voz online: ¿cuál es tu tipo de voz?"),
  description: DESCRIPTION,
  path: VOICE_TYPE_PATH,
  image: shareImage("tipo-de-voz"),
  keywords: ["test de voz", "cómo saber mi tipo de voz", "tipo de voz", "tesitura vocal", "rango vocal", "soy soprano o contralto"],
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
    { name: "Test de voz", path: VOICE_TYPE_PATH },
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
            <h2>Tipos de voz y sus rangos</h2>
            <p>
              Estos rangos son orientativos y corresponden a voces adultas con cierta práctica. Muchas
              personas cantan con comodidad solo una parte de ellos, y está bien.
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
            <h2>Consejos para hacer el test</h2>
            <ul>
              <li>Calienta la voz antes: unos minutos de sirenas o vibración de labios bastan.</li>
              <li>Busca un lugar silencioso y acerca el micrófono a tu boca a un palmo de distancia.</li>
              <li>Canta con una vocal abierta y sostén cada nota; el test solo cuenta notas estables.</li>
              <li>No fuerces: la nota que cuenta es la que puedes cantar con sonido limpio.</li>
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
