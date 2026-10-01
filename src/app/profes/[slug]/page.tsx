import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
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
import { TeacherCard } from "@/components/TeacherCard";
import { Breadcrumbs } from "@/components/editorial/Breadcrumbs";
import { postPath, primaryCoursePosts } from "@/lib/blog";
import {
  TEACHERS,
  getTeacherBySlug,
  shortDisplayName,
} from "@/lib/teachers";
import { whatsappHref } from "@/lib/contact";
import { COURSE_PAGE_PATHS } from "@/lib/course-pages";
import {
  absoluteUrl,
  brandTitle,
  createPageMetadata,
  jsonLd,
  teacherJsonLd,
} from "@/lib/seo";

export const dynamicParams = false;

function classFormatIcon(format: string) {
  return format === "A domicilio" ? House : Video;
}

function teacherMetaDescription(teacher: NonNullable<ReturnType<typeof getTeacherBySlug>>) {
  const languages = teacher.classLanguages?.join(" y ").toLowerCase() || "español";

  return `Clases de ${teacherShareCourseList(teacher).toLowerCase()} con ${teacher.name} en ${teacher.location}, ${teacherClassFormatsSummary(teacher)}, en ${languages}. ${teacher.bio}`;
}

function teacherProfileTitle(teacher: NonNullable<ReturnType<typeof getTeacherBySlug>>) {
  return `${teacher.name}, profe en A 1/2 tono`;
}

const MAX_SEARCH_TITLE_LENGTH = 62;

/**
 * Search title: name + what they teach + where, kept short enough for the
 * results page, e.g. "Gisselle Torres, profe de flauta traversa en Bogotá | A ½ tono".
 */
function teacherSearchTitle(teacher: NonNullable<ReturnType<typeof getTeacherBySlug>>) {
  const skills = teacher.skills.map((skill) => skill.label.toLowerCase());
  const candidates = [
    `${teacher.name}, profe de ${skills.slice(0, 2).join(" y ")} en ${teacher.location}`,
    `${teacher.name}, profe de ${skills[0]} en ${teacher.location}`,
    `${teacher.name}, profe de ${skills[0]}`,
  ].map(brandTitle);

  return candidates.find((title) => title.length <= MAX_SEARCH_TITLE_LENGTH) ?? candidates[candidates.length - 1];
}

function teacherClassFormatsSummary(
  teacher: NonNullable<ReturnType<typeof getTeacherBySlug>>,
) {
  const formats = teacher.classFormats ?? [];
  if (formats.length === 0) return "virtual y a domicilio";

  const labels = formats.map((format) =>
    format === "Virtual" ? "virtual" : format.toLowerCase(),
  );

  if (labels.length === 1) return labels[0];
  return `${labels.slice(0, -1).join(", ")} y ${labels[labels.length - 1]}`;
}

function teacherSocialDescription(
  teacher: NonNullable<ReturnType<typeof getTeacherBySlug>>,
) {
  return `Clases de arte y música en ${teacher.location}. Modalidad ${teacherClassFormatsSummary(teacher)}, para todas las edades.`;
}

function teacherShareCourseList(
  teacher: NonNullable<ReturnType<typeof getTeacherBySlug>>,
) {
  const courses = teacher.skills.map((skill) => skill.label);

  if (courses.length === 0) return teacher.role;
  if (courses.length === 1) return courses[0];

  return `${courses.slice(0, -1).join(", ")} y ${courses[courses.length - 1]}`;
}

const MORE_TEACHERS = 3;
const MORE_GUIDES = 4;

/**
 * Other profes for the first instrument (in this profe's order) that someone
 * else also teaches, so the "Más profes de X" heading is always accurate.
 */
function similarTeachers(teacher: NonNullable<ReturnType<typeof getTeacherBySlug>>) {
  for (const skill of teacher.skills) {
    const others = TEACHERS.filter(
      (other) => other.slug !== teacher.slug && other.skills.some((item) => item.id === skill.id),
    );
    if (others.length) return { skill, teachers: others.slice(0, MORE_TEACHERS) };
  }
  return null;
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

  const profileTitle = teacherProfileTitle(teacher);

  return createPageMetadata({
    title: teacherSearchTitle(teacher),
    description: teacherMetaDescription(teacher),
    socialDescription: teacherSocialDescription(teacher),
    socialTitle: profileTitle,
    path: `/profes/${teacher.slug}`,
    markdownPath: `/profes/${teacher.slug}.md`,
    image: {
      url: `/profes/${teacher.slug}/share-image.png`,
      width: 1200,
      height: 630,
      alt: `${teacher.name}, profe de ${teacher.role} en A medio tono`,
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

  const classFormats = teacher.classFormats ?? [];
  const classLanguages = teacher.classLanguages ?? [];
  const hasReviews = teacher.reviews.length > 0;
  const profeJsonLd = jsonLd(teacherJsonLd(teacher, COURSE_PAGE_PATHS));
  const profileUrl = absoluteUrl(`/profes/${teacher.slug}`);
  const shareTitle = teacherProfileTitle(teacher);
  const shareText = `¡Mira el perfil de ${teacher.name}, tu profe de ${teacherShareCourseList(teacher)}!\nA 1/2 tono - Escuela de Artes y Música`;
  const mobileTeacherName = shortDisplayName(teacher.name);
  const similar = similarTeachers(teacher);
  const moreTeachers = similar?.teachers ?? [];
  const mainSkill = similar?.skill;
  const mainCoursePath = mainSkill ? COURSE_PAGE_PATHS.get(mainSkill.id) : undefined;
  const guideSkill = teacher.skills.find((skill) => primaryCoursePosts(skill.id).length > 0);
  const guides = guideSkill ? primaryCoursePosts(guideSkill.id).slice(0, MORE_GUIDES) : [];

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
          <Breadcrumbs
            items={[
              { name: "Inicio", path: "/" },
              { name: "Profes", path: "/profes" },
              { name: teacher.name, path: `/profes/${teacher.slug}` },
            ]}
          />

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
                    {/* The short mobile name is CSS-generated, so the heading's text
                        stays the full name for crawlers and screen readers. */}
                    <span className="pd-hero-name-full" data-short-name={mobileTeacherName}>
                      {teacher.name}
                    </span>
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
                    {teacher.skills.map((skill) => {
                      const coursePath = COURSE_PAGE_PATHS.get(skill.id);

                      return (
                        <li key={skill.id} className="pd-imparte-item">
                          <span
                            className="pd-imparte-dot"
                            style={{ background: teacher.color }}
                            aria-hidden="true"
                          />
                          {coursePath ? (
                            <Link
                              className="pd-imparte-link"
                              href={coursePath}
                              prefetch={false}
                              title={`Clases de ${skill.label.toLowerCase()} en A medio tono`}
                            >
                              {skill.label}
                            </Link>
                          ) : (
                            skill.label
                          )}
                        </li>
                      );
                    })}
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

      {(moreTeachers.length > 0 || guides.length > 0) && (
        <section className="block ed-section pd-more" aria-label="Más profes y guías">
          <div className="container">
            {moreTeachers.length > 0 && mainSkill && (
              <>
                <div className="sec-head ed-sec-head">
                  <h2>Más profes de {mainSkill.label.toLowerCase()}</h2>
                  {mainCoursePath && (
                    <p className="sec-sub">
                      <Link href={mainCoursePath} prefetch={false}>
                        Ver las clases de {mainSkill.label.toLowerCase()} y todos sus profes{" "}
                        <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
                      </Link>
                    </p>
                  )}
                </div>
                <ul className="profe-list">
                  {moreTeachers.map((other) => (
                    <TeacherCard teacher={other} key={other.slug} />
                  ))}
                </ul>
              </>
            )}
            {guides.length > 0 && guideSkill && (
              <div className="ed-related">
                <h2 className="ed-h2">Guías de {guideSkill.label.toLowerCase()}</h2>
                <ul className="ed-link-list">
                  {guides.map((post) => (
                    <li key={post.slug}>
                      <Link href={postPath(post.slug)} prefetch={false}>
                        <strong>{post.title}</strong>
                        <span>{post.excerpt}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}
      <Footer />
    </>
  );
}
