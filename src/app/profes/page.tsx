import type { Metadata } from "next";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { ProfesDirectory } from "@/components/ProfesDirectory";
import { ProfesDirectorySkeleton } from "@/components/ProfesDirectorySkeleton";
import { TEACHERS } from "@/lib/teachers";
import {
  breadcrumbJsonLd,
  createPageMetadata,
  jsonLd,
  teachersItemListJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Profesores de música en Bogotá y virtuales — A ½ tono",
  description:
    "Encuentra profes de música para clases particulares virtuales o a domicilio. Filtra por curso, formato, ubicación e idioma en A medio tono.",
  path: "/profes",
});

export default function ProfesPage() {
  const profesJsonLd = jsonLd([
    breadcrumbJsonLd([
      { name: "Inicio", path: "/" },
      { name: "Profes", path: "/profes" },
    ]),
    teachersItemListJsonLd(TEACHERS),
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: profesJsonLd }}
      />
      <section
        className="block"
        id="profes-page"
        data-screen-label="Profesores"
      >
        <div className="container">
          <div className="sec-head profes-page-head">
            <h1>Profes y tutores de música</h1>
            <p className="sec-sub">
              Elige profes de piano, canto, guitarra, violín, flauta y más para
              clases virtuales o a domicilio en Bogotá.
            </p>
          </div>

          <Suspense fallback={<ProfesDirectorySkeleton />}>
            <ProfesDirectory teachers={TEACHERS} />
          </Suspense>
        </div>
      </section>
      <Footer />
    </>
  );
}
