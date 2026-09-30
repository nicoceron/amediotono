import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/editorial/Breadcrumbs";
import { CtaBand } from "@/components/editorial/CtaBand";
import { FaqList } from "@/components/editorial/FaqList";
import { JsonLdScript } from "@/components/editorial/JsonLdScript";
import { plainText } from "@/components/RichText";
import { Tuner } from "@/components/tools/Tuner";
import type { FaqItem } from "@/lib/content-types";
import { whatsappHref } from "@/lib/contact";
import {
  METRONOME_PATH,
  TOOLS_PATH,
  TUNER_PATH,
  TUNER_PRESETS,
  noteLabel,
  tunerPresetPath,
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

const TITLE = "Afinador online con micrófono";
const DESCRIPTION =
  "Afinador cromático online y gratis: usa el micrófono para afinar guitarra, violín, bajo, chelo, ukelele, voz o cualquier instrumento. Sin descargar nada.";

export const metadata: Metadata = createPageMetadata({
  title: brandTitle("Afinador online gratis con micrófono"),
  description: DESCRIPTION,
  path: TUNER_PATH,
  keywords: ["afinador online", "afinador cromático", "afinador con micrófono", "afinador gratis", "tuner online"],
});

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

          <nav className="tuner-presets" aria-label="Afinadores por instrumento">
            <h2 className="ed-h2">Afinador por instrumento</h2>
            <ul>
              {TUNER_PRESETS.map((preset) => (
                <li key={preset.slug}>
                  <Link href={tunerPresetPath(preset.slug)} prefetch={false}>
                    <strong>{preset.headline.replace(" online", "")}</strong>
                    <span>{preset.strings.map((item) => noteLabel(item.midi).es).join(" · ")}</span>
                    <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
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
            </ol>
            <h2>Consejos para una afinación estable</h2>
            <ul>
              <li>Afina en el mismo lugar donde vas a tocar: la temperatura cambia la afinación.</li>
              <li>Afina subiendo hacia la nota; si te pasas, baja un poco y vuelve a subir.</li>
              <li>Repasa todas las cuerdas al final: la tensión de unas mueve a las otras.</li>
              <li>Para la voz, canta una vocal abierta (a) y sostén la nota sin vibrato.</li>
            </ul>
            <h2>Preguntas frecuentes</h2>
            <FaqList items={FAQS} openFirst={false} />
          </article>
          <aside className="tool-aside">
            <h2 className="ed-h2">Más herramientas</h2>
            <ul className="ed-link-list">
              <li>
                <Link href={METRONOME_PATH} prefetch={false}>
                  <strong>Metrónomo online</strong>
                  <span>De 30 a 250 BPM, con compases y subdivisiones.</span>
                </Link>
              </li>
              <li>
                <Link href="/blog/como-afinar-la-guitarra" prefetch={false}>
                  <strong>Cómo afinar la guitarra</strong>
                  <span>Paso a paso, con afinador y de oído.</span>
                </Link>
              </li>
            </ul>
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
