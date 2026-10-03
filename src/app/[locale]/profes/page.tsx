import {JsonLdScript} from "@/components/editorial/JsonLdScript";
import {localizeMetadata} from "@/i18n/server";
import {useText} from "@/i18n/use-text";
import type { Metadata } from "next";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { ProfesDirectory } from "@/components/ProfesDirectory";
import { ProfesDirectorySkeleton } from "@/components/ProfesDirectorySkeleton";
import { TEACHERS } from "@/lib/teachers";
import {
  brandTitle,
  breadcrumbJsonLd,
  createPageMetadata,
  jsonLd,
  teachersItemListJsonLd,
} from "@/lib/seo";
import { shareImage } from "@/lib/share-cards";

const baseMetadata: Metadata = createPageMetadata({
  title: brandTitle(`${TEACHERS.length} profesores de música a domicilio en Bogotá y virtuales`),
  description: `${TEACHERS.length} profes de música evaluados para clases particulares a domicilio en Bogotá o virtuales: piano, canto, guitarra, violín y más. Filtra por instrumento, formato e idioma.`,
  path: "/profes",
  markdownPath: "/profes.md",
  image: shareImage("profes"),
});

export default function ProfesPage() {
  const tx = useText();
  const profesJsonLd = jsonLd([
    breadcrumbJsonLd([
      { name: "Inicio", path: "/" },
      { name: "Profes", path: "/profes" },
    ]),
    teachersItemListJsonLd(TEACHERS),
  ]);

  return (
    <>
      <JsonLdScript nodes={JSON.parse(profesJsonLd)} />
      <section
        className="block"
        id="profes-page"
        data-screen-label={tx("Profesores")}
      >
        <div className="container">
          <div className="sec-head profes-page-head">
            <h1>{tx("Profesores de música a domicilio en Bogotá y virtuales")}</h1>
            <p className="sec-sub">
              {tx("Elige profes de piano, canto, guitarra, violín, flauta y más para clases virtuales o a domicilio en Bogotá.")}</p>
          </div>

          <Suspense fallback={<ProfesDirectorySkeleton teachers={TEACHERS} />}>
            <ProfesDirectory teachers={TEACHERS} />
          </Suspense>
        </div>
      </section>
      <Footer />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return localizeMetadata(baseMetadata);
}
