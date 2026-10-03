import {JsonLdScript} from "@/components/editorial/JsonLdScript";
import {localizeMetadata} from "@/i18n/server";
import {useText} from "@/i18n/use-text";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "@/i18n/navigation";
import { ArrowLeft, ArrowRight, BriefcaseBusiness, GraduationCap, MapPin, Music2 } from "lucide-react";
import { JobApplicationTabs } from "@/components/JobApplicationTabs";
import {
  JOB_POSTED_AT,
  JOB_TITLE,
  JOB_VALID_THROUGH,
  jobDescriptionHtml,
} from "@/lib/job-posting";
import {
  brandTitle,
  breadcrumbJsonLd,
  createPageMetadata,
  jobPostingJsonLd,
  jsonLd,
} from "@/lib/seo";
import { shareImage } from "@/lib/share-cards";

const JOB_DETAILS = [
  {
    label: "Cargo",
    value: "Profesor/a de música",
    icon: BriefcaseBusiness,
  },
  {
    label: "Modalidad",
    value: "Virtual y a domicilio",
    icon: Music2,
  },
  {
    label: "Ubicación",
    value: "Bogotá y alrededores",
    icon: MapPin,
  },
  {
    label: "Área",
    value: "Pedagogía musical",
    icon: GraduationCap,
  },
];

const baseMetadata: Metadata = createPageMetadata({
  title: brandTitle("Trabajo como profesor/a de música en Bogotá"),
  description:
    "Aplica para trabajar como profesor o profesora de música en A medio tono. Buscamos profes para clases virtuales y a domicilio en Bogotá y alrededores.",
  path: "/trabaja-con-nosotros",
  image: shareImage("trabaja-con-nosotros"),
});

export default function TrabajaConNosotrosPage() {
  const tx = useText();
  const jobsJsonLd = jsonLd([
    breadcrumbJsonLd([
      { name: "Inicio", path: "/" },
      { name: "Trabaja con nosotros", path: "/trabaja-con-nosotros" },
    ]),
    jobPostingJsonLd({
      path: "/trabaja-con-nosotros",
      title: JOB_TITLE,
      descriptionHtml: jobDescriptionHtml(tx),
      datePosted: JOB_POSTED_AT,
      validThrough: JOB_VALID_THROUGH,
    }),
  ]);

  return (
    <>
      <JsonLdScript nodes={JSON.parse(jobsJsonLd)} />
      <section className="job-application-page" data-screen-label={tx("Aplicación profesor")}>
        <div className="job-application-shell">
          <header className="job-application-top">
            <Link className="job-back-link" href="/" aria-label={tx("Volver al inicio")}>
              <ArrowLeft aria-hidden="true" size={22} strokeWidth={2.6} />
            </Link>
            <Image
              src="/logo-nav.webp"
              alt={tx("A medio tono")}
              width={1205}
              height={300}
              className="job-logo logo-desktop-wordmark"
              sizes="290px"
            />
            <Image
              src="/logo-mark-transparent.webp"
              alt={tx("A medio tono")}
              width={48}
              height={42}
              className="job-logo logo-mobile-mark"
              sizes="48px"
            />
          </header>

          <div className="job-application-title">
            <h1>{tx(JOB_TITLE)}</h1>
          </div>

          <div className="job-application-layout">
            <aside className="job-summary" id="job-overview" aria-label={tx("Resumen del cargo")}>
              {JOB_DETAILS.map((detail) => {
                const Icon = detail.icon;
                return (
                  <div className="job-summary-item" key={detail.label}>
                    <Icon aria-hidden="true" size={22} strokeWidth={2.4} />
                    <div>
                      <span>{tx(detail.label)}</span>
                      <strong>{tx(detail.value)}</strong>
                    </div>
                  </div>
                );
              })}
              <Link className="job-summary-guides" href="/blog/categoria/para-profes" prefetch={false}>
                {tx("Guías para profes de música")}<ArrowRight aria-hidden="true" size={18} strokeWidth={2.4} />
              </Link>
            </aside>

            <div className="job-form-panel" id="job-application-form">
              <JobApplicationTabs />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return localizeMetadata(baseMetadata);
}
