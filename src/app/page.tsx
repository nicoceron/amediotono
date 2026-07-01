import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { VocesStrip } from "@/components/VocesStrip";
import { CursosSection } from "@/components/CursosSection";
import { ComoFuncionaSection } from "@/components/ComoFuncionaSection";
import { CalidadBanner } from "@/components/CalidadBanner";
import { TestimoniosSection } from "@/components/TestimoniosSection";
import { JobsCTASection } from "@/components/JobsCTASection";
import { ContactoSection } from "@/components/ContactoSection";
import { Footer } from "@/components/Footer";
import { COURSES } from "@/lib/courses";
import {
  SITE_BRAND,
  SITE_DESCRIPTION,
  coursesItemListJsonLd,
  createPageMetadata,
  jsonLd,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: `${SITE_BRAND} — Clases de música en Bogotá y virtuales`,
  description: SITE_DESCRIPTION,
  path: "/",
});

export default function Home() {
  const homeJsonLd = jsonLd(coursesItemListJsonLd(COURSES));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: homeJsonLd }}
      />
      <Hero />
      <CursosSection />
      <VocesStrip />
      <ComoFuncionaSection />
      <CalidadBanner />
      <TestimoniosSection />
      <JobsCTASection />
      <ContactoSection />
      <Footer />
    </>
  );
}
