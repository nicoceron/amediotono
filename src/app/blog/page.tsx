import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Rss } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/editorial/Breadcrumbs";
import { JsonLdScript } from "@/components/editorial/JsonLdScript";
import {
  BLOG_CATEGORIES,
  BLOG_CATEGORY_ORDER,
  BLOG_POSTS,
  formatPostDate,
  latestPostDate,
  postPath,
  postsByCategory,
  readingMinutes,
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

const PATH = "/blog";
const TITLE = "Blog de música: guías para aprender y enseñar";
const DESCRIPTION =
  "Guías prácticas para aprender música: a qué edad empezar, cómo elegir instrumento y profe, cómo practicar y cómo seleccionar profes para tu academia.";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: brandTitle(TITLE),
    description: DESCRIPTION,
    path: PATH,
  }),
  alternates: {
    canonical: PATH,
    types: {
      "application/rss+xml": [{ url: "/blog/rss.xml", title: "Blog de A medio tono" }],
    },
  },
};

function PostCard({ post }: { post: BlogPost }) {
  return (
    <li>
      <Link
        className="blog-card"
        href={postPath(post.slug)}
        prefetch={false}
        style={{ ["--ed-accent" as string]: BLOG_CATEGORIES[post.category].accent }}
      >
        <span className="blog-card-category">{BLOG_CATEGORIES[post.category].label}</span>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <span className="blog-card-meta">
          <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time> ·{" "}
          {readingMinutes(post)} min
        </span>
        <span className="blog-card-more">
          Leer artículo
          <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
        </span>
      </Link>
    </li>
  );
}

export default function BlogPage() {
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Blog", path: PATH },
  ];

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
              <span className="ed-eyebrow">Blog</span>
              <h1>{TITLE}</h1>
              <p className="ed-lead">
                Respuestas claras de profes de música para familias, estudiantes y academias.
              </p>
              <nav className="ed-chip-list ed-chip-list--center" aria-label="Categorías del blog">
                {BLOG_CATEGORY_ORDER.map((category) => (
                  <a key={category} href={`#${category}`}>
                    {BLOG_CATEGORIES[category].label}
                  </a>
                ))}
                <a href="/blog/rss.xml">
                  <Rss size={16} strokeWidth={2.4} aria-hidden="true" />
                  RSS
                </a>
              </nav>
            </div>
          </header>

          {BLOG_CATEGORY_ORDER.map((category) => {
            const posts = postsByCategory(category);
            if (posts.length === 0) return null;

            return (
              <section
                className="blog-category"
                id={category}
                key={category}
                aria-labelledby={`${category}-title`}
                style={{ ["--ed-accent" as string]: BLOG_CATEGORIES[category].accent }}
              >
                <div className="blog-category-head">
                  <h2 className="ed-h2" id={`${category}-title`}>
                    {BLOG_CATEGORIES[category].label}
                  </h2>
                  <p>{BLOG_CATEGORIES[category].description}</p>
                </div>
                <ul className="blog-grid">
                  {posts.map((post) => (
                    <PostCard post={post} key={post.slug} />
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}
