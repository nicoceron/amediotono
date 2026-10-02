import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Rss } from "lucide-react";
import { Footer } from "@/components/Footer";
import { BlogSearch } from "@/components/editorial/BlogSearch";
import { Breadcrumbs } from "@/components/editorial/Breadcrumbs";
import { JsonLdScript } from "@/components/editorial/JsonLdScript";
import { PostCard } from "@/components/editorial/PostCard";
import {
  BLOG_CATEGORIES,
  BLOG_CATEGORY_ORDER,
  BLOG_POSTS,
  categoryPath,
  getPost,
  latestPostDate,
  postPath,
  postsByCategory,
} from "@/lib/blog";
import type { BlogPost } from "@/lib/content-types";
import {
  absoluteUrl,
  blogJsonLd,
  brandTitle,
  breadcrumbJsonLd,
  createPageMetadata,
  webPageJsonLd,
} from "@/lib/seo";
import { shareImage } from "@/lib/share-cards";

const PATH = "/blog";
const TITLE = "Blog de música: guías para aprender, enseñar y elegir instrumento";
const DESCRIPTION =
  "Guías de música para niños, adultos y academias: a qué edad empezar, cómo elegir y cuidar tu instrumento, técnica, teoría y admisiones en Colombia.";
const PREVIEW_COUNT = 6;

/** Evergreen pillar guides highlighted at the top of the blog. */
const ESSENTIAL_SLUGS = [
  "a-que-edad-empezar-a-estudiar-musica",
  "como-aprender-musica-desde-cero",
  "que-instrumento-elegir-para-mi-hijo",
  "aprender-musica-en-la-tercera-edad-nunca-es-tarde",
  "como-prepararte-para-la-prueba-de-admision-de-musica",
  "como-elegir-profesor-de-musica",
];

export const metadata: Metadata = {
  ...createPageMetadata({
    title: brandTitle("Blog de música: guías para aprender y enseñar"),
    description: DESCRIPTION,
    path: PATH,
    image: shareImage("blog"),
  }),
  alternates: {
    canonical: PATH,
    types: {
      "application/rss+xml": [{ url: "/blog/rss.xml", title: "Blog de A medio tono" }],
    },
  },
};

export default function BlogPage() {
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Blog", path: PATH },
  ];
  const essentials = ESSENTIAL_SLUGS.map((slug) => getPost(slug)).filter(
    (post): post is BlogPost => Boolean(post),
  );
  const categories = BLOG_CATEGORY_ORDER.map((category) => ({
    category,
    posts: postsByCategory(category),
  })).filter((group) => group.posts.length > 0);
  const searchItems = BLOG_POSTS.map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: BLOG_CATEGORIES[post.category].label,
    keywords: post.keywords.join(" "),
  }));

  return (
    <>
      <JsonLdScript
        nodes={[
          webPageJsonLd({
            path: PATH,
            type: "CollectionPage",
            name: TITLE,
            description: DESCRIPTION,
            dateModified: latestPostDate(),
            about: { "@id": absoluteUrl("/blog#blog") },
          }),
          breadcrumbJsonLd(crumbs),
          blogJsonLd(BLOG_POSTS.map((post) => ({ post, path: postPath(post.slug) }))),
        ]}
      />

      <section className="block ed-page" data-screen-label="Blog">
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <header className="ed-hero ed-hero--center">
            <div className="ed-hero-copy">
              <h1>{TITLE}</h1>
              <p className="ed-lead">
                Guías claras sobre música para familias, estudiantes de todas las edades y
                academias: desde la primera clase hasta la prueba de admisión.
              </p>
              <BlogSearch items={searchItems} />
            </div>
          </header>

          <nav className="blog-topics" aria-label="Temas del blog">
            <ul>
              {categories.map(({ category, posts }) => (
                <li key={category} style={{ ["--ed-accent" as string]: BLOG_CATEGORIES[category].accent }}>
                  <Link href={categoryPath(category)} prefetch={false}>
                    <strong>{BLOG_CATEGORIES[category].label}</strong>
                    <span>{posts.length} {posts.length === 1 ? "guía" : "guías"}</span>
                  </Link>
                </li>
              ))}
              <li style={{ ["--ed-accent" as string]: "var(--purple)" }}>
                <Link href="/glosario-musical" prefetch={false}>
                  <strong>Glosario musical</strong>
                  <span>Términos explicados</span>
                </Link>
              </li>
              <li style={{ ["--ed-accent" as string]: "var(--orange)" }}>
                <a href="/blog/rss.xml">
                  <strong>
                    <Rss size={16} strokeWidth={2.4} aria-hidden="true" /> RSS
                  </strong>
                  <span>Suscríbete</span>
                </a>
              </li>
            </ul>
          </nav>

          {essentials.length > 0 && (
            <section className="blog-category" aria-labelledby="esenciales-title">
              <div className="blog-category-head">
                <h2 className="ed-h2" id="esenciales-title">
                  Guías esenciales
                </h2>
                <p>Los artículos por los que te recomendamos empezar.</p>
              </div>
              <ul className="blog-grid">
                {essentials.map((post) => (
                  <PostCard post={post} key={post.slug} />
                ))}
              </ul>
            </section>
          )}

          {categories.map(({ category, posts }) => (
            <section
              className="blog-category"
              id={category}
              key={category}
              aria-labelledby={`${category}-title`}
              style={{ ["--ed-accent" as string]: BLOG_CATEGORIES[category].accent }}
            >
              <div className="blog-category-head">
                <h2 className="ed-h2" id={`${category}-title`}>
                  <Link href={categoryPath(category)} prefetch={false}>
                    {BLOG_CATEGORIES[category].label}
                  </Link>
                </h2>
                <p>{BLOG_CATEGORIES[category].description}</p>
              </div>
              <ul className="blog-grid">
                {posts.slice(0, PREVIEW_COUNT).map((post) => (
                  <PostCard post={post} key={post.slug} showCategory={false} />
                ))}
              </ul>
              {posts.length > PREVIEW_COUNT && (
                <p className="ed-center-link">
                  <Link href={categoryPath(category)} prefetch={false}>
                    Ver las {posts.length} guías de {BLOG_CATEGORIES[category].label.toLowerCase()}
                    <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
                  </Link>
                </p>
              )}
            </section>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
