import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
  formatPostDate,
  getPost,
  postAuthor,
  postPath,
  postWordCount,
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
  if (!post) return {};

  const author = postAuthor(post);

  return createPageMetadata({
    title: brandTitle(post.seoTitle ?? post.title),
    description: post.description,
    socialTitle: post.title,
    path: postPath(post.slug),
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
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
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
    { name: post.title, path },
  ];
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
        data-screen-label={post.title}
        style={{ ["--ed-accent" as string]: category.accent }}
      >
        <div className="container">
          <Breadcrumbs items={crumbs} />

          <header className="blog-header">
            <Link className="ed-eyebrow" href={`/blog#${post.category}`} prefetch={false}>
              {category.label}
            </Link>
            <h1>{post.title}</h1>
            <p className="ed-lead">{post.excerpt}</p>
            <div className="blog-meta">
              <span>
                <UserRound size={18} strokeWidth={2.4} aria-hidden="true" />
                Por{" "}
                <Link href={author.path} prefetch={false}>
                  {author.name}
                </Link>
              </span>
              <span>
                <CalendarDays size={18} strokeWidth={2.4} aria-hidden="true" />
                <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
              </span>
              {updated && (
                <span>
                  Actualizado <time dateTime={updated}>{formatPostDate(updated)}</time>
                </span>
              )}
              <span>
                <Clock4 size={18} strokeWidth={2.4} aria-hidden="true" />
                {readingMinutes(post)} min de lectura
              </span>
              <ShareTeacherButton
                className="blog-share"
                title={post.title}
                text={post.excerpt}
                url={absoluteUrl(path)}
                shareLabel="Compartir"
                showLabel
              />
            </div>
          </header>

          <div className="blog-layout">
            <aside className="blog-toc" aria-label="Contenido del artículo">
              <p className="blog-toc-title">En este artículo</p>
              <ol>
                <li>
                  <a href="#en-resumen">En resumen</a>
                </li>
                {post.sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`}>{section.heading}</a>
                  </li>
                ))}
                {faqs.length > 0 && (
                  <li>
                    <a href="#preguntas-frecuentes">Preguntas frecuentes</a>
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
                  En resumen
                </h2>
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
                  <h2 id={`${section.id}-title`}>{section.heading}</h2>
                  <RichBlocks blocks={section.blocks} />
                </section>
              ))}

              {faqs.length > 0 && (
                <section id="preguntas-frecuentes" aria-labelledby="preguntas-frecuentes-title">
                  <h2 id="preguntas-frecuentes-title">Preguntas frecuentes</h2>
                  <FaqList items={faqs} openFirst={false} />
                </section>
              )}

              <aside className="blog-author" aria-label="Sobre el autor">
                {author.teacher ? (
                  <span className="blog-author-photo" style={{ borderColor: author.teacher.color }}>
                    <Image src={author.teacher.photo} alt="" fill sizes="64px" />
                  </span>
                ) : (
                  <span className="blog-author-photo blog-author-photo--brand">
                    <Image src="/logo-mark-transparent.webp" alt="" width={48} height={42} />
                  </span>
                )}
                <div>
                  <strong>
                    <Link href={author.path} prefetch={false}>
                      {author.name}
                    </Link>
                  </strong>
                  <span>{author.role}</span>
                  <p>
                    En A medio tono evaluamos a cada profe en música, pedagogía y calidad humana
                    antes de su primera clase. Escribimos estas guías desde lo que vivimos en clase
                    con estudiantes de todas las edades.
                  </p>
                </div>
              </aside>
            </div>
          </div>

          {(courses.length > 0 || related.length > 0) && (
            <footer className="blog-related">
              {courses.length > 0 && (
                <div className="ed-related">
                  <h2 className="ed-h2">Clases relacionadas</h2>
                  <ul className="ed-chip-list">
                    {courses.map((page) => (
                      <li key={page.course.id}>
                        <Link href={page.path} prefetch={false}>
                          <Image src={page.course.icon} alt="" width={28} height={28} />
                          Clases de {page.course.label.toLowerCase()}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {related.length > 0 && (
                <div className="ed-related">
                  <h2 className="ed-h2">Sigue leyendo</h2>
                  <ul className="blog-grid">
                    {related.map((item) => (
                      <li key={item.slug}>
                        <Link className="blog-card" href={postPath(item.slug)} prefetch={false}>
                          <span className="blog-card-category">{BLOG_CATEGORIES[item.category].label}</span>
                          <h3>{item.title}</h3>
                          <p>{item.excerpt}</p>
                          <span className="blog-card-more">
                            Leer artículo
                            <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
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
          title="¿Necesitas profes de música para tu institución?"
          text="Buscamos y evaluamos profes con audición, clase muestra y entrevista pedagógica. Músicos evaluando músicos."
          primary={{ href: `${B2B_HUB_PATH}#propuesta`, label: "Solicitar propuesta" }}
          secondary={{ href: B2B_HUB_PATH, label: "Ver servicios para academias" }}
        />
      ) : (
        <CtaBand
          title="¿Listo para empezar tus clases?"
          text="Cuéntanos qué quieres aprender y te recomendamos el profe ideal, a domicilio en Bogotá o virtual."
          primary={{
            href: whatsappHref(`¡Hola! Leí "${post.title}" y quiero información sobre clases.`),
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
