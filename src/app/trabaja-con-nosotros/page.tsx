import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BriefcaseBusiness, GraduationCap, MapPin, Music2 } from "lucide-react";
import { JobApplicationTabs } from "@/components/JobApplicationTabs";
import { breadcrumbJsonLd, createPageMetadata, jsonLd } from "@/lib/seo";

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

export const metadata: Metadata = createPageMetadata({
  title: "Trabaja como profesor/a de música — A ½ tono",
  description:
    "Aplica para trabajar como profesor o profesora de música en A medio tono. Buscamos profes para clases virtuales y a domicilio en Bogotá y alrededores.",
  path: "/trabaja-con-nosotros",
});

export default function TrabajaConNosotrosPage() {
  const jobsJsonLd = jsonLd(
    breadcrumbJsonLd([
      { name: "Inicio", path: "/" },
      { name: "Trabaja con nosotros", path: "/trabaja-con-nosotros" },
    ]),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jobsJsonLd }}
      />
      <section className="job-application-page" data-screen-label="Aplicación profesor">
        <div className="job-application-shell">
          <header className="job-application-top">
            <Link className="job-back-link" href="/" aria-label="Volver al inicio">
              <ArrowLeft aria-hidden="true" size={22} strokeWidth={2.6} />
            </Link>
            <Image
              src="/logo-nav.png"
              alt="A medio tono"
              width={1205}
              height={300}
              loading="eager"
              className="job-logo logo-desktop-wordmark"
              unoptimized
            />
            <Image
              src="/logo-mark-transparent.png"
              alt="A medio tono"
              width={48}
              height={42}
              loading="eager"
              className="job-logo logo-mobile-mark"
              unoptimized
            />
          </header>

          <div className="job-application-title">
            <h1>Profesor/a de música</h1>
          </div>

          <div className="job-application-layout">
            <aside className="job-summary" id="job-overview" aria-label="Resumen del cargo">
              {JOB_DETAILS.map((detail) => {
                const Icon = detail.icon;
                return (
                  <div className="job-summary-item" key={detail.label}>
                    <Icon aria-hidden="true" size={22} strokeWidth={2.4} />
                    <div>
                      <span>{detail.label}</span>
                      <strong>{detail.value}</strong>
                    </div>
                  </div>
                );
              })}
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
