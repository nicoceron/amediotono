import {localizeMetadata} from "@/i18n/server";
import {useText} from "@/i18n/use-text";
import type { Metadata } from "next";
import Link from "@/i18n/navigation";
import { ArrowRight, CircleDot, Ear, Gauge, Guitar, Mic, Piano, Timer } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/editorial/Breadcrumbs";
import { JsonLdScript } from "@/components/editorial/JsonLdScript";
import { RhythmPresetList, TunerPresetGroups } from "@/components/tools/ToolPresetLists";
import {
  EAR_TRAINING_PATH,
  METRONOME_PATH,
  RHYTHM_PRESETS,
  TOOLS_PATH,
  TUNER_PATH,
  TUNER_PRESETS,
  VOICE_TYPE_PATH,
  rhythmPresetPath,
  tunerPresetPath,
} from "@/lib/music-tools";
import { CHORDS_PATH, CIRCLE_OF_FIFTHS_PATH, SCALES_PATH } from "@/lib/music-pages";
import { CHORDS, SCALES } from "@/lib/music-theory";
import {
  absoluteUrl,
  brandTitle,
  breadcrumbJsonLd,
  createPageMetadata,
  webPageJsonLd,
  SITE_CONTENT_UPDATED_AT,
} from "@/lib/seo";
import { shareImage } from "@/lib/share-cards";

const TITLE = "Herramientas gratis para músicos";
const DESCRIPTION =
  "Metrónomo online, afinador con micrófono, test de tipo de voz y entrenamiento auditivo de intervalos. Gratis, sin descargas y listos para practicar.";

const TOOLS = [
  {
    href: METRONOME_PATH,
    title: "Metrónomo online",
    text: "De 30 a 250 BPM, compases simples y compuestos, acentos y tap tempo.",
    cta: "Abrir metrónomo",
    accent: "var(--orange)",
    Icon: Timer,
  },
  {
    href: TUNER_PATH,
    title: "Afinador cromático",
    text: "Afina cualquier instrumento o tu voz con el micrófono.",
    cta: "Abrir afinador",
    accent: "var(--green)",
    Icon: Gauge,
  },
  {
    href: VOICE_TYPE_PATH,
    title: "¿Qué tipo de voz tengo?",
    text: "Test de tesitura: canta tu nota más grave y la más aguda.",
    cta: "Hacer el test",
    accent: "var(--pink)",
    Icon: Mic,
  },
  {
    href: EAR_TRAINING_PATH,
    title: "Entrenamiento auditivo",
    text: "Reconoce intervalos ascendentes, descendentes y armónicos.",
    cta: "Entrenar el oído",
    accent: "var(--blue)",
    Icon: Ear,
  },
  {
    href: CIRCLE_OF_FIFTHS_PATH,
    title: "Círculo de quintas",
    text: "Armaduras, relativas y acordes de las 24 tonalidades.",
    cta: "Abrir el círculo",
    accent: "var(--purple)",
    Icon: CircleDot,
  },
  {
    href: CHORDS_PATH,
    title: "Diccionario de acordes",
    text: `${CHORDS.length} acordes en guitarra, piano y ukelele, con digitación y sonido.`,
    cta: "Ver acordes",
    accent: "var(--orange)",
    Icon: Guitar,
  },
  {
    href: SCALES_PATH,
    title: "Escalas musicales",
    text: `${SCALES.length} escalas con teclado, mástil de guitarra y sonido.`,
    cta: "Ver escalas",
    accent: "var(--pink)",
    Icon: Piano,
  },
];

const baseMetadata: Metadata = createPageMetadata({
  title: brandTitle("Herramientas gratis para músicos: metrónomo, afinador y más"),
  description: DESCRIPTION,
  path: TOOLS_PATH,
  image: shareImage("herramientas"),
});

export default function ToolsPage() {
  const tx = useText();
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Herramientas", path: TOOLS_PATH },
  ];

  return (
    <>
      <JsonLdScript
        nodes={[
          webPageJsonLd({
            path: TOOLS_PATH,
            type: "CollectionPage",
            name: TITLE,
            description: DESCRIPTION,
            dateModified: SITE_CONTENT_UPDATED_AT,
          }),
          breadcrumbJsonLd(crumbs),
          {
            "@type": "ItemList",
            "@id": `${absoluteUrl(TOOLS_PATH)}#tools`,
            itemListElement: [
              ...TOOLS.map((tool) => tool.href),
              ...TUNER_PRESETS.map((preset) => tunerPresetPath(preset.slug)),
              ...RHYTHM_PRESETS.map((preset) => rhythmPresetPath(preset.slug)),
            ].map((path, index) => ({ "@type": "ListItem", position: index + 1, url: absoluteUrl(path) })),
          },
        ]}
      />
      <section className="block ed-page" style={{ ["--ed-accent" as string]: "var(--green)" }}>
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <header className="ed-hero ed-hero--center">
            <div className="ed-hero-copy">
              <h1>{tx(TITLE)}</h1>
              <p className="ed-lead">
                {tx("Herramientas para tu práctica diaria que funcionan en el navegador del celular o del computador. El audio se analiza en tu dispositivo: no grabamos ni enviamos nada.")}</p>
            </div>
          </header>

          <ul className="b2b-service-grid tools-grid">
            {TOOLS.map(({ href, title, text, cta, accent, Icon }) => (
              <li key={href}>
                <Link className="b2b-service-card" href={href} prefetch={false} style={{ ["--ed-accent" as string]: accent }}>
                  <span className="b2b-service-icon" aria-hidden="true">
                    <Icon size={26} strokeWidth={2.4} />
                  </span>
                  <h2 className="ed-h3">{tx(title)}</h2>
                  <p>{tx(text)}</p>
                  <span className="b2b-service-more">
                    {tx(cta)} <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <TunerPresetGroups title={tx("Afinadores por instrumento")} detail="tuning" />
          <RhythmPresetList />
        </div>
      </section>
      <Footer />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return localizeMetadata(baseMetadata);
}
