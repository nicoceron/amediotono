import {localizeMetadata} from "@/i18n/server";
import {useText} from "@/i18n/use-text";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Inline, plainText } from "@/components/RichText";
import { Breadcrumbs } from "@/components/editorial/Breadcrumbs";
import { CtaBand } from "@/components/editorial/CtaBand";
import { JsonLdScript } from "@/components/editorial/JsonLdScript";
import { GLOSSARY, type GlossaryTerm } from "@/content/glossary";
import { whatsappHref } from "@/lib/contact";
import {
  absoluteUrl,
  brandTitle,
  breadcrumbJsonLd,
  createPageMetadata,
  webPageJsonLd,
  SITE_CONTENT_UPDATED_AT,
  SITE_LANGUAGE,
} from "@/lib/seo";
import { shareImage } from "@/lib/share-cards";

const PATH = "/glosario-musical";
const TITLE = "Diccionario musical: términos de música explicados";
const DESCRIPTION =
  "Glosario de términos musicales en español: qué es un acorde, compás, escala, intervalo, tonalidad, solfeo y más, explicados de forma clara y con ejemplos.";

const baseMetadata: Metadata = createPageMetadata({
  title: brandTitle("Diccionario musical: glosario de términos"),
  description: DESCRIPTION,
  path: PATH,
  markdownPath: `${PATH}.md`,
  image: shareImage("glosario-musical"),
  keywords: ["diccionario musical", "glosario musical", "términos musicales", "qué es un acorde", "qué es el compás"],
});

const GROUP_ORDER: GlossaryTerm["group"][] = [
  "Ritmo y tiempo",
  "Melodía y armonía",
  "Lectura y escritura",
  "Técnica e interpretación",
  "Instrumentos y voz",
  "Formas y estilos",
];

function groupId(group: string) {
  return group
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const TERM_BY_ID = new Map(GLOSSARY.map((term) => [term.id, term]));

export default function GlossaryPage() {
  const tx = useText();
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Glosario musical", path: PATH },
  ];
  const groups = GROUP_ORDER.map((group) => ({
    group,
    terms: GLOSSARY.filter((term) => term.group === group).sort((a, b) => a.term.localeCompare(b.term, "es")),
  })).filter((entry) => entry.terms.length > 0);

  return (
    <>
      <JsonLdScript
        nodes={[
          webPageJsonLd({
            path: PATH,
            name: TITLE,
            description: DESCRIPTION,
            dateModified: SITE_CONTENT_UPDATED_AT,
            about: { "@id": `${absoluteUrl(PATH)}#terms` },
          }),
          breadcrumbJsonLd(crumbs),
          {
            "@type": "DefinedTermSet",
            "@id": `${absoluteUrl(PATH)}#terms`,
            name: "Glosario de términos musicales",
            url: absoluteUrl(PATH),
            inLanguage: SITE_LANGUAGE,
            hasDefinedTerm: GLOSSARY.map((term) => ({
              "@type": "DefinedTerm",
              "@id": `${absoluteUrl(PATH)}#${term.id}`,
              name: term.term,
              description: plainText(term.definition),
              url: `${absoluteUrl(PATH)}#${term.id}`,
              inDefinedTermSet: { "@id": `${absoluteUrl(PATH)}#terms` },
            })),
          },
        ]}
      />

      <section className="block ed-page" style={{ ["--ed-accent" as string]: "var(--purple)" }}>
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <header className="ed-hero ed-hero--center">
            <div className="ed-hero-copy">
              <h1>{tx(TITLE)}</h1>
              <p className="ed-lead">
                {tx("Las palabras que escuchas en clase, explicadas en pocas líneas: desde pulso y compás hasta tonalidad, embocadura o bambuco.")}</p>
              <nav className="ed-chip-list ed-chip-list--center" aria-label={tx("Temas del glosario")}>
                {groups.map(({ group }) => (
                  <a key={group} href={`#${groupId(group)}`}>
                    {tx(group)}
                  </a>
                ))}
              </nav>
            </div>
          </header>

          <div className="glossary">
            {groups.map(({ group, terms }) => (
              <section className="glossary-group" id={groupId(group)} key={group} aria-labelledby={`${groupId(group)}-title`}>
                <h2 className="ed-h2" id={`${groupId(group)}-title`}>
                  {tx(group)}
                </h2>
                <dl>
                  {terms.map((term) => (
                    <div className="glossary-term" id={term.id} key={term.id}>
                      <dt>{tx(term.term)}</dt>
                      <dd>
                        <p>
                          <Inline text={term.definition} />
                        </p>
                        {term.example && (
                          <p className="glossary-example">
                            <Inline text={term.example} />
                          </p>
                        )}
                        {term.related?.length ? (
                          <p className="glossary-related">
                            {tx("Ver también:")}{tx(" ")}
                            {term.related
                              .map((id) => TERM_BY_ID.get(id))
                              .filter((related): related is GlossaryTerm => Boolean(related))
                              .map((related, index) => (
                                <span key={related.id}>
                                  {tx(index > 0 && ", ")}
                                  <a href={`#${related.id}`}>{tx(related.term.toLowerCase())}</a>
                                </span>
                              ))}
                          </p>
                        ) : null}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={tx("Del glosario a tu instrumento")}
        text="Aprende teoría, lectura y técnica con profes evaluados, en clases virtuales o a domicilio en Bogotá."
        primary={{
          href: whatsappHref(tx("¡Hola! Vengo del glosario musical y quiero información sobre clases.")),
          label: "Escribir por WhatsApp",
          external: true,
        }}
        secondary={{ href: "/clases/teoria-musical", label: "Ver clases de teoría musical" }}
      />
      <Footer />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return localizeMetadata(baseMetadata);
}
