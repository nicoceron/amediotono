import type { Metadata } from "next";
import { preload } from "react-dom";
import { HERO_DESKTOP_AVIF_SRCSET, HERO_MOBILE_AVIF_SRCSET, Hero } from "@/components/Hero";
import { VocesStrip } from "@/components/VocesStrip";
import { CursosSection } from "@/components/CursosSection";
import { ComoFuncionaSection } from "@/components/ComoFuncionaSection";
import { CalidadBanner } from "@/components/CalidadBanner";
import { TestimoniosSection } from "@/components/TestimoniosSection";
import { JobsCTASection } from "@/components/JobsCTASection";
import { HomeFaqSection, HOME_FAQS } from "@/components/HomeFaqSection";
import { HomeResourcesSection } from "@/components/HomeResourcesSection";
import { ContactoSection } from "@/components/ContactoSection";
import { Footer } from "@/components/Footer";
import { JsonLdScript } from "@/components/editorial/JsonLdScript";
import { plainText } from "@/components/RichText";
import { COURSE_PAGES } from "@/lib/course-pages";
import {
  SITE_CONTENT_UPDATED_AT,
  SITE_DESCRIPTION,
  SITE_NAME,
  coursesItemListJsonLd,
  createPageMetadata,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/seo";

// The plain-text brand name: searches for "A medio tono" don't match "A ½ tono".
const HOME_TITLE = `${SITE_NAME}: clases de música a domicilio en Bogotá y virtuales`;

export const metadata: Metadata = createPageMetadata({
  title: HOME_TITLE,
  description: SITE_DESCRIPTION,
  path: "/",
});

export default function Home() {
  preload("/hero/hero-mobile-720.avif", {
    as: "image",
    fetchPriority: "high",
    media: "(max-width: 880px)",
    type: "image/avif",
    imageSrcSet: HERO_MOBILE_AVIF_SRCSET,
    imageSizes: "100vw",
  });
  preload("/hero/hero-desktop-1672.avif", {
    as: "image",
    fetchPriority: "high",
    media: "(min-width: 881px)",
    type: "image/avif",
    imageSrcSet: HERO_DESKTOP_AVIF_SRCSET,
    imageSizes: "100vw",
  });

  return (
    <>
      <JsonLdScript
        nodes={[
          webPageJsonLd({
            path: "/",
            name: HOME_TITLE,
            description: SITE_DESCRIPTION,
            dateModified: SITE_CONTENT_UPDATED_AT,
            image: "/og-logo-white.png",
            breadcrumb: false,
          }),
          coursesItemListJsonLd(COURSE_PAGES.map((page) => ({ ...page.course, href: page.path }))),
          faqPageJsonLd(
            HOME_FAQS.map((faq) => ({ question: faq.question, answer: plainText(faq.answer) })),
            "/",
          ),
        ]}
      />
      <Hero />
      <CursosSection />
      <VocesStrip />
      <ComoFuncionaSection />
      <CalidadBanner />
      <TestimoniosSection />
      <HomeResourcesSection />
      <HomeFaqSection />
      <JobsCTASection />
      <ContactoSection />
      <Footer />
    </>
  );
}
