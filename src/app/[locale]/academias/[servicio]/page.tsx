import {localizeMetadata} from "@/i18n/server";
import {getText} from "@/i18n/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, FileCheck2, MessageCircle, Target } from "lucide-react";
import { Footer } from "@/components/Footer";
import { B2BLeadSection } from "@/components/b2b/B2BLeadSection";
import { B2BServiceCards } from "@/components/b2b/B2BServiceCards";
import { Breadcrumbs } from "@/components/editorial/Breadcrumbs";
import { FaqList } from "@/components/editorial/FaqList";
import { JsonLdScript } from "@/components/editorial/JsonLdScript";
import { Inline, plainText } from "@/components/RichText";
import { B2B_HUB_PATH, B2B_SERVICES, getB2BService } from "@/lib/b2b";
import { whatsappHref } from "@/lib/contact";
import {
  brandTitle,
  breadcrumbJsonLd,
  businessServiceJsonLd,
  createPageMetadata,
  faqPageJsonLd,
  webPageJsonLd,
  SITE_CONTENT_UPDATED_AT,
} from "@/lib/seo";
import { shareImage } from "@/lib/share-cards";

export const dynamicParams = false;

export function generateStaticParams() {
  return B2B_SERVICES.map((service) => ({ servicio: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ servicio: string }>;
}): Promise<Metadata> {
  const { servicio } = await params;
  const service = getB2BService(servicio);
  if (!service) return await localizeMetadata({});

  return await localizeMetadata(createPageMetadata({
    title: brandTitle(service.seoTitle),
    description: service.metaDescription,
    path: service.path,
    markdownPath: `${service.path}.md`,
    image: shareImage(`academias-${service.slug}`),
    keywords: service.keywords,
  }));
}

export default async function B2BServicePage({
  params,
}: {
  params: Promise<{ servicio: string }>;
}) {
  const tx = await getText();
  const { servicio } = await params;
  const service = getB2BService(servicio);
  if (!service) notFound();

  const otherServices = B2B_SERVICES.filter((item) => item.slug !== service.slug);
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Academias y colegios", path: B2B_HUB_PATH },
    { name: service.name, path: service.path },
  ];
  const whatsappUrl = whatsappHref(
    tx.template("¡Hola! Quiero información sobre el servicio de {p0} para mi institución.", {p0: tx(service.name.toLowerCase())}),
  );

  return (
    <>
      <JsonLdScript
        nodes={[
          webPageJsonLd({
            path: service.path,
            name: service.headline,
            description: service.metaDescription,
            dateModified: SITE_CONTENT_UPDATED_AT,
          }),
          breadcrumbJsonLd(crumbs),
          businessServiceJsonLd({
            path: service.path,
            name: service.headline,
            description: service.metaDescription,
            serviceType: service.name,
            audience: "Academias de música, colegios e instituciones culturales",
          }),
          faqPageJsonLd(
            service.faqs.map((faq) => ({ question: faq.question, answer: plainText(faq.answer) })),
            service.path,
          ),
        ]}
      />

      <section
        className="block ed-page"
        data-screen-label={tx(service.name)}
        style={{ ["--ed-accent" as string]: service.accent }}
      >
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <header className="ed-hero ed-hero--center">
            <div className="ed-hero-copy">
              <h1>{tx(service.headline)}</h1>
              <p className="ed-lead">
                <Inline text={service.intro} />
              </p>
              <div className="ed-actions">
                <a className="ed-button" href="#propuesta">
                  {tx("Solicitar propuesta")}<ArrowRight size={20} strokeWidth={2.4} aria-hidden="true" />
                </a>
                <a className="ed-button ed-button--ghost" href={whatsappUrl} target="_blank" rel="noopener">
                  <MessageCircle size={20} strokeWidth={2.4} aria-hidden="true" />
                  {tx("Hablar por WhatsApp")}</a>
              </div>
            </div>
          </header>
        </div>
      </section>

      <section className="block ed-section" style={{ ["--ed-accent" as string]: service.accent }}>
        <div className="container">
          <div className="ed-split">
            <article className="ed-card">
              <h2 className="ed-h2">
                <Target size={26} strokeWidth={2.4} aria-hidden="true" />
                {tx("Ideal para")}</h2>
              <ul className="ed-bullets">
                {service.idealFor.map((item) => (
                  <li key={item}>{tx(item)}</li>
                ))}
              </ul>
            </article>
            <article className="ed-card">
              <h2 className="ed-h2">{tx("Qué incluye")}</h2>
              <ul className="ed-checklist">
                {service.includes.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={22} strokeWidth={2.4} aria-hidden="true" />
                    <span>{tx(item)}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="block ed-section" style={{ ["--ed-accent" as string]: service.accent }}>
        <div className="container">
          <div className="sec-head ed-sec-head">
            <h2>{tx("Cómo funciona")}</h2>
          </div>
          <ol className={`ed-steps ${service.steps.length === 5 ? "ed-steps--5" : "ed-steps--4"}`}>
            {service.steps.map((step, index) => (
              <li className="ed-step" key={step.title}>
                <span className="ed-step-number" aria-hidden="true">
                  {tx(index + 1)}
                </span>
                <h3 className="ed-h3">{tx(step.title)}</h3>
                <p>{tx(step.body)}</p>
              </li>
            ))}
          </ol>

          <div className="ed-card ed-deliverable">
            <h2 className="ed-h2">
              <FileCheck2 size={26} strokeWidth={2.4} aria-hidden="true" />
              {tx(service.deliverable.title)}
            </h2>
            <ul className="ed-detail-list">
              {service.deliverable.items.map((item) => (
                <li key={item}>{tx(item)}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="block ed-section nosotros-faq-section" id="preguntas-frecuentes">
        <div className="container">
          <div className="sec-head ed-sec-head">
            <h2>{tx("Preguntas frecuentes")}</h2>
          </div>
          <FaqList items={service.faqs} />
        </div>
      </section>

      <section className="block ed-section">
        <div className="container">
          <div className="sec-head ed-sec-head">
            <h2>{tx("Otros servicios para instituciones")}</h2>
          </div>
          <B2BServiceCards services={otherServices} />
        </div>
      </section>

      <B2BLeadSection defaultService={service.slug} />
      <Footer />
    </>
  );
}
