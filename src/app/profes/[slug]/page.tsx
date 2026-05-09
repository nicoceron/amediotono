import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Quote } from "lucide-react";
import { Footer } from "@/components/Footer";
import { TEACHERS, getTeacherBySlug } from "@/lib/teachers";

const WA_NUMBER = "573228725396";

export function generateStaticParams() {
  return TEACHERS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const teacher = getTeacherBySlug(slug);
  if (!teacher) return { title: "Profe — A ½ tono" };
  return {
    title: `${teacher.name} — Profe de ${teacher.role} · A ½ tono`,
    description: teacher.bio,
  };
}

export default async function ProfeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const teacher = getTeacherBySlug(slug);
  if (!teacher) notFound();

  const waMsg = encodeURIComponent(
    `¡Hola! Quiero más información sobre las clases con ${teacher.shortName}.`,
  );
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${waMsg}`;

  return (
    <>
      <section
        className="block profe-detail"
        data-screen-label={teacher.name}
        style={{ "--profe-color": teacher.color } as React.CSSProperties}
      >
        <div className="container">
          <Link href="/profes" className="profe-back">
            <ArrowLeft size={18} strokeWidth={2.4} />
            <span>Volver a profes</span>
          </Link>

          <div className="profe-hero">
            <div
              className="profe-hero-photo"
              style={{ borderColor: teacher.color }}
            >
              <div
                className="profe-hero-photo-bg"
                style={{ background: teacher.color }}
              />
              <img src={teacher.photo} alt={teacher.name} />
            </div>
            <div className="profe-hero-copy">
              <span
                className="profe-hero-role"
                style={{ color: teacher.color }}
              >
                Profe de {teacher.role}
              </span>
              <h1 className="profe-hero-name">{teacher.name}</h1>
              <p className="profe-hero-bio">{teacher.longBio}</p>
              <a
                className="btn btn-pink profe-hero-cta"
                href={waUrl}
                target="_blank"
                rel="noopener"
              >
                Quiero clases con {teacher.shortName} →
              </a>
            </div>
          </div>

          <div className="profe-reviews">
            <div className="profe-reviews-head">
              <h2>
                <span
                  style={{
                    color: teacher.color,
                    marginRight: 10,
                    display: "inline-block",
                  }}
                >
                  Lo que dicen
                </span>
                <span style={{ color: "var(--ink)", display: "inline-block" }}>
                  sus estudiantes
                </span>
              </h2>
              <div className="sec-sub">
                {teacher.reviews.length}{" "}
                {teacher.reviews.length === 1
                  ? "reseña real"
                  : "reseñas reales"}{" "}
                de estudiantes.
              </div>
            </div>

            <div className="profe-reviews-grid">
              {teacher.reviews.map((r) => (
                <article className="profe-review-card" key={r.id}>
                  <Quote
                    className="profe-review-quote-icon"
                    size={22}
                    strokeWidth={2.2}
                    style={{ color: teacher.color }}
                  />
                  <p className="profe-review-quote">{r.quote}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
