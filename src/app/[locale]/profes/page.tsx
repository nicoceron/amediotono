import {JsonLdScript} from "@/components/editorial/JsonLdScript";
import {localizeMetadata} from "@/i18n/server";
import {useText} from "@/i18n/use-text";
import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "@/i18n/navigation";
import { COURSE_PAGES } from "@/lib/course-pages";
import { Footer } from "@/components/Footer";
import { ProfesDirectory } from "@/components/ProfesDirectory";
import { ProfesDirectorySkeleton } from "@/components/ProfesDirectorySkeleton";
import { TEACHERS } from "@/lib/teachers";
import {
  brandTitle,
  breadcrumbJsonLd,
  createPageMetadata,
  webPageJsonLd,
  SITE_CONTENT_UPDATED_AT,
  teachersItemListJsonLd,
} from "@/lib/seo";
import { shareImage } from "@/lib/share-cards";

const baseMetadata: Metadata = createPageMetadata({
  title: brandTitle("Profesores de música en Bogotá y online"),
  description: "Elige tu profesor de piano, canto, guitarra o violín. Compara experiencia, modalidad e idioma para clases a domicilio en Bogotá o en vivo online.",
  path: "/profes",
  markdownPath: "/profes.md",
  image: shareImage("profes"),
});

export default function ProfesPage() {
  const tx = useText();
  const profesJsonLd = [
    webPageJsonLd({
      path: "/profes",
      type: "CollectionPage",
      name: "Profesores de música en Bogotá y online",
      description: "Compara profesores de música por instrumento, experiencia, modalidad e idioma.",
      dateModified: SITE_CONTENT_UPDATED_AT,
    }),
    breadcrumbJsonLd([
      { name: "Inicio", path: "/" },
      { name: "Profes", path: "/profes" },
    ]),
    teachersItemListJsonLd(TEACHERS),
  ];

  return (
    <>
      <JsonLdScript nodes={profesJsonLd} />
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
      <section className="block ed-section" aria-labelledby="profes-clases-title">
        <div className="container">
          <div className="sec-head ed-sec-head">
            <h2 id="profes-clases-title">{tx("Encuentra tu profe por instrumento")}</h2>
            <p className="sec-sub">{tx("Consulta qué aprenderás, qué necesitas para empezar y los perfiles de los profes de cada clase.")}</p>
          </div>
          <ul className="ed-link-list">
            {COURSE_PAGES.map((page) => (
              <li key={page.course.id}>
                <Link href={page.path} prefetch={false}>
                  <strong>{tx.template("Clases de {p0}", {p0: tx(page.course.label.toLowerCase())})}</strong>
                  <span>{tx.template(page.teachers.length === 1 ? "{p0} profe disponible. Consulta qué aprenderás y cómo empezar." : "{p0} profes disponibles. Consulta qué aprenderás y cómo empezar.", {p0: page.teachers.length})}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="ed-note">
            {tx("Elige también dónde quieres aprender:")}{" "}
            <Link href="/clases-de-musica-a-domicilio-bogota" prefetch={false}>{tx("clases de música a domicilio en Bogotá")}</Link>
            {" · "}
            <Link href="/clases-de-musica-online" prefetch={false}>{tx("clases de música online")}</Link>
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return localizeMetadata(baseMetadata);
}
