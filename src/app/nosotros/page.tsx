import type { Metadata } from "next";
import { MisionSection } from "@/components/MisionSection";
import { NosotrosFAQSection } from "@/components/NosotrosFAQSection";
import { Footer } from "@/components/Footer";
import { JsonLdScript } from "@/components/editorial/JsonLdScript";
import { plainText } from "@/components/RichText";
import { NOSOTROS_FAQS } from "@/lib/nosotros-faq";
import {
  brandTitle,
  breadcrumbJsonLd,
  createPageMetadata,
  faqPageJsonLd,
  webPageJsonLd,
  SITE_CONTENT_UPDATED_AT,
} from "@/lib/seo";

const DESCRIPTION =
  "Conoce la misión, visión y fundadoras de A medio tono, una escuela de artes donde la música se vive, se siente y se comparte.";

export const metadata: Metadata = createPageMetadata({
  title: brandTitle("Nosotros: escuela de artes y música en Bogotá"),
  description: DESCRIPTION,
  path: "/nosotros",
});

export default function Nosotros() {
  return (
    <>
      <JsonLdScript
        nodes={[
          webPageJsonLd({
            path: "/nosotros",
            type: "AboutPage",
            name: "Nosotros: A medio tono, escuela de artes y música",
            description: DESCRIPTION,
            dateModified: SITE_CONTENT_UPDATED_AT,
          }),
          breadcrumbJsonLd([
            { name: "Inicio", path: "/" },
            { name: "Nosotros", path: "/nosotros" },
          ]),
          faqPageJsonLd(
            NOSOTROS_FAQS.map((faq) => ({ question: faq.question, answer: plainText(faq.answer) })),
            "/nosotros",
          ),
        ]}
      />
      <h1 className="visually-hidden">
        Nosotros: A medio tono, escuela de artes y música
      </h1>
      <MisionSection />
      <NosotrosFAQSection />
      <Footer />
    </>
  );
}
