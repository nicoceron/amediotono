import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BadgeCheck,
  GraduationCap,
  House,
  Languages,
  MapPin,
  MessageCircle,
  Star,
  Video,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { ShareTeacherButton } from "@/components/ShareTeacherButton";
import {
  TEACHERS,
  getTeacherBySlug,
  primaryTeacherRole,
  shortDisplayName,
} from "@/lib/teachers";
import { whatsappHref } from "@/lib/contact";
import {
  absoluteUrl,
  createPageMetadata,
  jsonLd,
  teacherJsonLd,
} from "@/lib/seo";

export const dynamicParams = false;

function classFormatIcon(format: string) {
  return format === "A domicilio" ? House : Video;
}

function teacherMetaDescription(teacher: NonNullable<ReturnType<typeof getTeacherBySlug>>) {
  const formats = teacher.classFormats?.join(" y ") || "virtuales y a domicilio";
  const languages = teacher.classLanguages?.join(" y ") || "Español";

  return `Clases de ${teacher.role} con ${teacher.name} en ${teacher.location}. Modalidad ${formats}, en ${languages}. ${teacher.bio}`;
}

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

  return createPageMetadata({
    title: `${teacher.name}, profe de ${primaryTeacherRole(teacher)} — A ½ tono`,
    description: teacherMetaDescription(teacher),
    path: `/profes/${teacher.slug}`,
    image: {
      url: `/profes/${teacher.slug}/share-image.png`,
      width: 1200,
      height: 630,
      alt: `${teacher.name}, profe de ${primaryTeacherRole(teacher)} en A medio tono`,
      type: "image/png",
    },
  });
}

export default async function ProfeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const teacher = getTeacherBySlug(slug);
  if (!teacher) notFound();

  const waUrl = whatsappHref(
    `¡Hola! Quiero más información sobre las clases con ${teacher.name}.`,
  );

  const instruments = teacher.skills.map((skill) => skill.label);
  const classFormats = teacher.classFormats ?? [];
  const classLanguages = teacher.classLanguages ?? [];
  const hasReviews = teacher.reviews.length > 0;
  const profeJsonLd = jsonLd(teacherJsonLd(teacher));
  const profileUrl = absoluteUrl(`/profes/${teacher.slug}`);
  const shareFileImageUrl = `/profes-share/${teacher.slug}.jpg`;
  const shareTitle = `${teacher.name}, profe de ${primaryTeacherRole(teacher)} — A ½ tono`;
  const shareText = `Mira el perfil de ${teacher.name}, profe de ${teacher.role} en A medio tono.`;
  const mobileTeacherName = shortDisplayName(teacher.name);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: profeJsonLd }}
      />
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

          <div className="profe-detail-grid">
            <div className="profe-detail-main">
              {/* Hero */}
              <header className="pd-hero">
                <div
                  className="pd-hero-photo"
                  style={{ borderColor: teacher.color }}
                >
                  <div
                    className="pd-hero-photo-bg"
                    style={{ background: teacher.color }}
                  />
                  <Image
                    src={teacher.photo}
                    alt={teacher.name}
                    fill
                    loading="eager"
                    fetchPriority="high"
                    sizes="(max-width: 360px) 172px, (max-width: 720px) 200px, 280px"
                    style={
                      teacher.photoPosition
                        ? { objectPosition: teacher.photoPosition }
                        : undefined
                    }
                  />
                </div>
                <div className="pd-hero-copy">
                  <h1 className="pd-hero-name">
                    <span className="pd-hero-name-full">{teacher.name}</span>
                    <span className="pd-hero-name-mobile">{mobileTeacherName}</span>
                    <BadgeCheck
                      size={28}
                      strokeWidth={2.4}
                      style={{ color: teacher.color }}
                      aria-label="Profe verificado"
                    />
                  </h1>
                  {teacher.location && (
                    <div className="pd-hero-meta">
                      <span className="pd-hero-location">
                        <MapPin size={15} strokeWidth={2.4} aria-hidden="true" />
                        {teacher.location}
                      </span>
                    </div>
                  )}
                </div>
                <div className="pd-hero-actions-mobile">
                  <a
                    className="pd-hero-message-button"
                    href={waUrl}
                    target="_blank"
                    rel="noopener"
                  >
                    <MessageCircle size={20} strokeWidth={2.4} />
                    Quiero clases con {teacher.shortName}
                  </a>
                  <ShareTeacherButton
                    className="pd-share-button-mobile"
                    imageFileName={`${teacher.slug}-a-medio-tono.jpg`}
                    imageUrl={shareFileImageUrl}
                    title={shareTitle}
                    text={shareText}
                    url={profileUrl}
                    showLabel={false}
                  />
                </div>
              </header>

              {/* Imparte */}
              <section className="pd-section">
                <header className="pd-section-head">
                  <GraduationCap size={20} strokeWidth={2.4} style={{ color: teacher.color }} />
                  <h2>Imparte</h2>
                </header>
                <div className="pd-imparte-groups">
                  <ul className="pd-imparte">
                    {instruments.map((inst) => (
                      <li key={inst} className="pd-imparte-item">
                        <span
                          className="pd-imparte-dot"
                          style={{ background: teacher.color }}
                          aria-hidden="true"
                        />
                        {inst}
                      </li>
                    ))}
                  </ul>

                  {(classFormats.length > 0 || classLanguages.length > 0) && (
                    <ul className="pd-imparte pd-imparte-details">
                      {classFormats.map((fmt) => {
                        const FormatIcon = classFormatIcon(fmt);

                        return (
                          <li key={fmt} className="pd-imparte-item pd-imparte-item-soft">
                            <FormatIcon
                              size={14}
                              strokeWidth={2.4}
                              style={{ color: teacher.color }}
                            />
                            {fmt}
                          </li>
                        );
                      })}
                      {classLanguages.map((language) => (
                        <li key={language} className="pd-imparte-item pd-imparte-item-soft">
                          <Languages
                            size={14}
                            strokeWidth={2.4}
                            style={{ color: teacher.color }}
                          />
                          {language}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>

              {/* Sobre mí */}
              <section className="pd-section">
                <header className="pd-section-head">
                  <h2 className="pd-about-title">Sobre mí</h2>
                </header>
                <p className="pd-about-body">{teacher.longBio}</p>
              </section>

              {hasReviews && (
                <section className="pd-section">
                  <header className="pd-section-head pd-reviews-head">
                    <h2>Reseñas de mis estudiantes</h2>
                    <div className="pd-reviews-rating">
                      <strong>5,0</strong>
                      <span
                        className="pd-reviews-stars"
                        aria-hidden="true"
                        style={{ color: teacher.color }}
                      >
                        {[0, 1, 2, 3, 4].map((s) => (
                          <Star
                            key={s}
                            size={16}
                            fill="currentColor"
                            strokeWidth={0}
                          />
                        ))}
                      </span>
                    </div>
                  </header>
                  <p className="pd-section-sub">
                    Basado en reseñas de {teacher.reviews.length}{" "}
                    {teacher.reviews.length === 1 ? "estudiante" : "estudiantes"}.
                  </p>
                  <div className="pd-reviews-grid">
                    {teacher.reviews.map((r) => (
                      <article className="pd-review" key={r.id}>
                        <header className="pd-review-head">
                          <span
                            className="pd-review-avatar"
                            style={{ background: teacher.color }}
                            aria-hidden="true"
                          >
                            {r.author.charAt(0).toUpperCase()}
                          </span>
                          <div className="pd-review-meta">
                            <strong>{r.author}</strong>
                            {r.instrument && (
                              <span>{r.instrument}</span>
                            )}
                          </div>
                        </header>
                        <span
                          className="pd-review-stars"
                          aria-hidden="true"
                          style={{ color: teacher.color }}
                        >
                          {[0, 1, 2, 3, 4].map((s) => (
                            <Star
                              key={s}
                              size={14}
                              fill="currentColor"
                              strokeWidth={0}
                            />
                          ))}
                        </span>
                        <p className="pd-review-quote">{r.quote}</p>
                      </article>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sticky right card */}
            <aside className="profe-detail-side">
              <div className="pd-cta-card">
                {hasReviews && (
                  <div className="pd-cta-stats">
                    <div className="pd-cta-stat">
                      <strong className="pd-cta-stars" aria-label="5 estrellas">
                        {[0, 1, 2, 3, 4].map((s) => (
                          <Star
                            key={s}
                            size={18}
                            fill="currentColor"
                            strokeWidth={0}
                            style={{ color: teacher.color }}
                            aria-hidden="true"
                          />
                        ))}
                      </strong>
                      <span>
                        {`${teacher.reviews.length} ${
                          teacher.reviews.length === 1 ? "reseña" : "reseñas"
                        }`}
                      </span>
                    </div>
                  </div>
                )}

                <div className="pd-cta-actions-desktop">
                  <a
                    className="pd-hero-message-button pd-cta-message-button"
                    href={waUrl}
                    target="_blank"
                    rel="noopener"
                  >
                    <MessageCircle size={20} strokeWidth={2.4} />
                    Quiero clases con {teacher.shortName}
                  </a>
                  <ShareTeacherButton
                    className="pd-share-button-desktop"
                    imageFileName={`${teacher.slug}-a-medio-tono.jpg`}
                    imageUrl={shareFileImageUrl}
                    title={shareTitle}
                    text={shareText}
                    url={profileUrl}
                    showLabel={false}
                  />
                </div>

                <div className="pd-cta-callout">
                  <BadgeCheck size={18} strokeWidth={2.4} />
                  <div>
                    <strong>¿No te convence?</strong>
                    <span>
                      Conoce al resto del equipo y elige otro profe.
                    </span>
                    <Link href="/profes" className="pd-cta-callout-link">
                      Ver todos los profes →
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
