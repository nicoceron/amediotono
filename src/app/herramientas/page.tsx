import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Gauge, Timer } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/editorial/Breadcrumbs";
import { JsonLdScript } from "@/components/editorial/JsonLdScript";
import {
  METRONOME_PATH,
  TOOLS_PATH,
  TUNER_PATH,
  TUNER_PRESETS,
  tunerPresetPath,
} from "@/lib/music-tools";
import {
  absoluteUrl,
  brandTitle,
  breadcrumbJsonLd,
  createPageMetadata,
  webPageJsonLd,
  SITE_CONTENT_UPDATED_AT,
} from "@/lib/seo";

const TITLE = "Herramientas gratis para músicos";
const DESCRIPTION =
  "Metrónomo online y afinador con micrófono para guitarra, violín, bajo, chelo, contrabajo y ukelele. Gratis, sin descargas y listos para practicar.";

export const metadata: Metadata = createPageMetadata({
  title: brandTitle("Herramientas gratis para músicos: metrónomo y afinador"),
  description: DESCRIPTION,
  path: TOOLS_PATH,
});

export default function ToolsPage() {
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
            itemListElement: [METRONOME_PATH, TUNER_PATH, ...TUNER_PRESETS.map((preset) => tunerPresetPath(preset.slug))].map(
              (path, index) => ({ "@type": "ListItem", position: index + 1, url: absoluteUrl(path) }),
            ),
          },
        ]}
      />
      <section className="block ed-page" style={{ ["--ed-accent" as string]: "var(--green)" }}>
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <header className="ed-hero ed-hero--center">
            <div className="ed-hero-copy">
              <span className="ed-eyebrow">Gratis · sin descargas</span>
              <h1>{TITLE}</h1>
              <p className="ed-lead">
                Las herramientas que usan nuestros profes en clase, listas para tu práctica diaria.
                Funcionan en el navegador del celular o del computador.
              </p>
            </div>
          </header>

          <ul className="b2b-service-grid tools-grid">
            <li>
              <Link className="b2b-service-card" href={METRONOME_PATH} prefetch={false} style={{ ["--ed-accent" as string]: "var(--orange)" }}>
                <span className="b2b-service-icon" aria-hidden="true">
                  <Timer size={26} strokeWidth={2.4} />
                </span>
                <h2 className="ed-h3">Metrónomo online</h2>
                <p>De 30 a 250 BPM, compases, subdivisiones, acento y tap tempo.</p>
                <span className="b2b-service-more">
                  Abrir metrónomo <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
                </span>
              </Link>
            </li>
            <li>
              <Link className="b2b-service-card" href={TUNER_PATH} prefetch={false} style={{ ["--ed-accent" as string]: "var(--green)" }}>
                <span className="b2b-service-icon" aria-hidden="true">
                  <Gauge size={26} strokeWidth={2.4} />
                </span>
                <h2 className="ed-h3">Afinador cromático</h2>
                <p>Afina cualquier instrumento o tu voz con el micrófono.</p>
                <span className="b2b-service-more">
                  Abrir afinador <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
                </span>
              </Link>
            </li>
          </ul>

          <nav className="tuner-presets" aria-label="Afinadores por instrumento">
            <h2 className="ed-h2">Afinadores por instrumento</h2>
            <ul>
              {TUNER_PRESETS.map((preset) => (
                <li key={preset.slug}>
                  <Link href={tunerPresetPath(preset.slug)} prefetch={false}>
                    <strong>{preset.headline.replace(" online", "")}</strong>
                    <span>{preset.tuningName}</span>
                    <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
      <Footer />
    </>
  );
}
