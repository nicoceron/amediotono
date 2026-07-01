import type { Metadata } from "next";
import { MisionSection } from "@/components/MisionSection";
import { NosotrosFAQSection } from "@/components/NosotrosFAQSection";
import { Footer } from "@/components/Footer";
import { NOSOTROS_FAQS } from "@/lib/nosotros-faq";
import { breadcrumbJsonLd, createPageMetadata, faqPageJsonLd, jsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Nosotros — A ½ tono",
  description:
    "Conoce la misión, visión y fundadoras de A medio tono, una escuela de artes donde la música se vive, se siente y se comparte.",
  path: "/nosotros",
});

export default function Nosotros() {
  const nosotrosJsonLd = jsonLd([
    breadcrumbJsonLd([
      { name: "Inicio", path: "/" },
      { name: "Nosotros", path: "/nosotros" },
    ]),
    faqPageJsonLd(NOSOTROS_FAQS),
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: nosotrosJsonLd }}
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
