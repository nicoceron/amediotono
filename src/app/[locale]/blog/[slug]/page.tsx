import {getLocale} from "next-intl/server";
import {localizeMetadata} from "@/i18n/server";
import {getText} from "@/i18n/server";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "@/i18n/navigation";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays, Clock4, ListChecks, UserRound } from "lucide-react";
import { Footer } from "@/components/Footer";
import { ShareTeacherButton } from "@/components/ShareTeacherButton";
import { Inline, RichBlocks, plainText } from "@/components/RichText";
import { Breadcrumbs } from "@/components/editorial/Breadcrumbs";
import { CtaBand } from "@/components/editorial/CtaBand";
import { FaqList } from "@/components/editorial/FaqList";
import { JsonLdScript } from "@/components/editorial/JsonLdScript";
import { B2B_HUB_PATH } from "@/lib/b2b";
import {
  BLOG_CATEGORIES,
  BLOG_POSTS,
  categoryPath,
  formatPostDate,
  getPost,
  postAuthor,
  postPath,
  postWordCount,
  primaryCoursePosts,
  readingMinutes,
  relatedPosts,
} from "@/lib/blog";
import { whatsappHref } from "@/lib/contact";
import { getCoursePage, type CoursePage } from "@/lib/course-pages";
import {
  absoluteUrl,
  blogPostingJsonLd,
  brandTitle,
  breadcrumbJsonLd,
  createPageMetadata,
  faqPageJsonLd,
  organizationAuthorJsonLd,
  teacherAuthorJsonLd,
  webPageJsonLd,
} from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

function shareImage(slug: string) {
  return `${postPath(slug)}/share-image.png`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return await localizeMetadata({});

  const author = postAuthor(post);

  return await localizeMetadata(createPageMetadata({
    title: brandTitle(post.seoTitle ?? post.title),
    description: post.description,
    socialTitle: post.title,
    path: postPath(post.slug),
    markdownPath: `${postPath(post.slug)}.md`,
    keywords: post.keywords,
    image: {
      url: shareImage(post.slug),
      width: 1200,
      height: 630,
      alt: post.title,
      type: "image/png",
    },
    article: {
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      section: BLOG_CATEGORIES[post.category].label,
      tags: post.keywords,
      authors: [absoluteUrl(author.path)],
    },
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const tx = await getText();
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const path = postPath(post.slug);
  const category = BLOG_CATEGORIES[post.category];
  const author = postAuthor(post);
  const related = relatedPosts(post);
  const courses = (post.relatedCourseIds ?? [])
    .map((id) => getCoursePage(id))
    .filter((page): page is CoursePage => Boolean(page));
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: category.label, path: categoryPath(post.category) },
    { name: post.title, path },
  ];
  const primaryCourse = courses[0]?.course;
  const courseTeachers = courses[0]?.teachers.slice(0, 8) ?? [];
  // Learner-facing posts also point to the two ways of taking classes.
  const showFormats = post.cta !== "academias";
  // Ring order: each article links the ones after it in its cluster, so every
  // guide about an instrument receives links from its siblings.
  const cluster = primaryCourse ? primaryCoursePosts(primaryCourse.id) : [];
  const clusterStart = cluster.findIndex((item) => item.slug === post.slug);
  const clusterPosts = [...cluster.slice(clusterStart + 1), ...cluster.slice(0, Math.max(clusterStart, 0))]
    .filter((item) => item.slug !== post.slug && !related.some((other) => other.slug === item.slug))
    .slice(0, 6);
  const faqs = post.faqs ?? [];
  const updated = post.updatedAt && post.updatedAt !== post.publishedAt ? post.updatedAt : undefined;

  return (
    <>
      <JsonLdScript
        nodes={[
          webPageJsonLd({
            path,
            name: post.title,
            description: post.description,
            image: shareImage(post.slug),
            datePublished: post.publishedAt,
            dateModified: post.updatedAt ?? post.publishedAt,
            about: { "@id": `${absoluteUrl(path)}#article` },
          }),
          breadcrumbJsonLd(crumbs),
          blogPostingJsonLd({
            post,
            path,
            image: shareImage(post.slug),
            wordCount: postWordCount(post),
            author: author.teacher ? teacherAuthorJsonLd(author.teacher) : organizationAuthorJsonLd(),
            section: category.label,
          }),
          ...(faqs.length
            ? [
                faqPageJsonLd(
                  faqs.map((faq) => ({ question: faq.question, answer: plainText(faq.answer) })),
                  path,
                ),
              ]
            : []),
        ]}
      />

      <article
        className="block ed-page blog-article"
        data-screen-label={tx(post.title)}
        style={{ ["--ed-accent" as string]: category.accent }}
      >
        <div className="container">
          <Breadcrumbs items={crumbs} />

          <header className="blog-header">
            <Link className="ed-category-link" href={categoryPath(post.category)} prefetch={false}>
              {tx(category.label)}
            </Link>
            <h1>{tx(post.title)}</h1>
            <p className="ed-lead">{tx(post.excerpt)}</p>
            <div className="blog-meta">
              <span>
                <UserRound size={18} strokeWidth={2.4} aria-hidden="true" />
                {tx("Por")}{tx(" ")}
                <Link href={author.path} prefetch={false}>
                  {tx(author.name)}
                </Link>
              </span>
              <span>
                <CalendarDays size={18} strokeWidth={2.4} aria-hidden="true" />
                <time dateTime={post.publishedAt}>{tx(formatPostDate(post.publishedAt, await getLocale()))}</time>
              </span>
              {updated && (
                <span>
                  {tx("Actualizado ")}<time dateTime={updated}>{tx(formatPostDate(updated, await getLocale()))}</time>
                </span>
              )}
              <span>
                <Clock4 size={18} strokeWidth={2.4} aria-hidden="true" />
                {tx(readingMinutes(post))} {tx(" min de lectura")}</span>
              <ShareTeacherButton
                className="blog-share"
                title={tx(post.title)}
                text={post.excerpt}
                url={absoluteUrl(path)}
                shareLabel="Compartir"
                showLabel
              />
            </div>
          </header>

          <div className="blog-layout">
            <aside className="blog-toc" aria-label={tx("Contenido del artículo")}>
              <p className="blog-toc-title">{tx("En este artículo")}</p>
              <ol>
                <li>
                  <a href="#en-resumen">{tx("En resumen")}</a>
                </li>
                {post.sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`}>{tx(section.heading)}</a>
                  </li>
                ))}
                {faqs.length > 0 && (
                  <li>
                    <a href="#preguntas-frecuentes">{tx("Preguntas frecuentes")}</a>
                  </li>
                )}
              </ol>
            </aside>

            <div className="prose">
              {post.intro.map((paragraph) => (
                <p className="prose-intro" key={paragraph}>
                  <Inline text={paragraph} />
                </p>
              ))}

              <section className="blog-takeaways" id="en-resumen" aria-labelledby="en-resumen-title">
                <h2 id="en-resumen-title">
                  <ListChecks size={24} strokeWidth={2.4} aria-hidden="true" />
                  {tx("En resumen")}</h2>
                <ul>
                  {post.keyTakeaways.map((item) => (
                    <li key={item}>
                      <Inline text={item} />
                    </li>
                  ))}
                </ul>
              </section>

              {post.sections.map((section) => (
                <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`}>
                  <h2 id={`${section.id}-title`}>{tx(section.heading)}</h2>
                  <RichBlocks blocks={section.blocks} />
                </section>
              ))}

              {faqs.length > 0 && (
                <section id="preguntas-frecuentes" aria-labelledby="preguntas-frecuentes-title">
                  <h2 id="preguntas-frecuentes-title">{tx("Preguntas frecuentes")}</h2>
                  <FaqList items={faqs} openFirst={false} />
                </section>
              )}

              <aside className="blog-author" aria-label={tx("Sobre el autor")}>
                {author.teacher ? (
                  <span className="blog-author-photo" style={{ borderColor: author.teacher.color }}>
                    <Image src={author.teacher.photo} alt={tx("")} fill sizes="64px" />
                  </span>
                ) : (
                  <span className="blog-author-photo blog-author-photo--brand">
                    <Image src="/logo-mark-transparent.webp" alt={tx("")} width={48} height={42} />
                  </span>
                )}
                <div>
                  <strong>
                    <Link href={author.path} prefetch={false}>
                      {tx(author.name)}
                    </Link>
                  </strong>
                  <span className="blog-author-role">{author.teacher ? tx.template("Profe de {p0}", {p0: tx(author.teacher.role)}) : tx(author.role)}</span>
                  <p>
                    {tx("A medio tono es una escuela de artes y música en Bogotá. Evaluamos a cada profe en música, pedagogía y calidad humana antes de su primera clase, y damos clases virtuales y a domicilio para todas las edades.")}</p>
                </div>
              </aside>
            </div>
          </div>

          {(courses.length > 0 || showFormats || related.length > 0 || clusterPosts.length > 0) && (
            <footer className="blog-related">
              {(courses.length > 0 || showFormats) && (
                <div className="ed-related">
                  <h2 className="ed-h2">{tx("Clases relacionadas")}</h2>
                  <ul className="ed-chip-list">
                    {courses.map((page) => (
                      <li key={page.course.id}>
                        <Link href={page.path} prefetch={false}>
                          <Image src={page.course.icon} alt={tx("")} width={28} height={28} />
                          {tx("Clases de ")}{tx(page.course.label.toLowerCase())}
                        </Link>
                      </li>
                    ))}
                    {showFormats && (
                      <>
                        <li>
                          <Link href="/clases-de-musica-a-domicilio-bogota" prefetch={false}>
                            {tx("Clases de música a domicilio en Bogotá")}</Link>
                        </li>
                        <li>
                          <Link href="/clases-de-musica-online" prefetch={false}>
                            {tx("Clases de música virtuales")}</Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              )}
              {courseTeachers.length > 0 && primaryCourse && (
                <div className="ed-related">
                  <h2 className="ed-h2">{tx("Profes de ")}{tx(primaryCourse.label.toLowerCase())}</h2>
                  <ul className="ed-chip-list">
                    {courseTeachers.map((teacher) => (
                      <li key={teacher.slug}>
                        <Link href={`/profes/${teacher.slug}`} prefetch={false}>
                          <Image
                            className="ed-chip-photo"
                            src={teacher.photo}
                            alt={tx("")}
                            width={28}
                            height={28}
                          />
                          {teacher.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {clusterPosts.length > 0 && primaryCourse && (
                <div className="ed-related">
                  <h2 className="ed-h2">{tx("Más guías de ")}{tx(primaryCourse.label.toLowerCase())}</h2>
                  <ul className="ed-link-list">
                    {clusterPosts.map((item) => (
                      <li key={item.slug}>
                        <Link href={postPath(item.slug)} prefetch={false}>
                          <strong>{tx(item.title)}</strong>
                          <span>{tx(item.excerpt)}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {related.length > 0 && (
                <div className="ed-related">
                  <h2 className="ed-h2">{tx("Sigue leyendo")}</h2>
                  <ul className="blog-grid">
                    {related.map((item) => (
                      <li key={item.slug}>
                        <Link className="blog-card" href={postPath(item.slug)} prefetch={false}>
                          <span className="blog-card-category">{tx(BLOG_CATEGORIES[item.category].label)}</span>
                          <h3>{tx(item.title)}</h3>
                          <p>{tx(item.excerpt)}</p>
                          <span className="blog-card-more">
                            {tx("Leer artículo")}<ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </footer>
          )}
        </div>
      </article>

      {post.cta === "academias" ? (
        <CtaBand
          title={tx("¿Necesitas profes de música para tu institución?")}
          text="Buscamos y evaluamos profes con audición, clase muestra y entrevista pedagógica. Músicos evaluando músicos."
          primary={{ href: `${B2B_HUB_PATH}#propuesta`, label: "Solicitar propuesta" }}
          secondary={{ href: B2B_HUB_PATH, label: "Ver servicios para academias" }}
        />
      ) : (
        <CtaBand
          title={tx("¿Listo para empezar tus clases?")}
          text="Cuéntanos qué quieres aprender y te recomendamos el profe ideal, a domicilio en Bogotá o virtual."
          primary={{
            href: whatsappHref(tx.template("¡Hola! Leí \"{p0}\" y quiero información sobre clases.", {p0: tx(post.title)})),
            label: "Escribir por WhatsApp",
            external: true,
          }}
          secondary={{ href: "/clases", label: "Ver todas las clases" }}
        />
      )}
      <Footer />
    </>
  );
}
