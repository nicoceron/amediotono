import {localizeMetadata} from "@/i18n/server";
import {getText} from "@/i18n/server";
import type { Metadata } from "next";
import Link from "@/i18n/navigation";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/editorial/Breadcrumbs";
import { CtaBand } from "@/components/editorial/CtaBand";
import { JsonLdScript } from "@/components/editorial/JsonLdScript";
import { PostCard } from "@/components/editorial/PostCard";
import { B2B_HUB_PATH } from "@/lib/b2b";
import {
  BLOG_CATEGORIES,
  BLOG_CATEGORY_ORDER,
  categoryPath,
  postPath,
  postsByCategory,
} from "@/lib/blog";
import { whatsappHref } from "@/lib/contact";
import type { BlogCategoryId } from "@/lib/content-types";
import {
  absoluteUrl,
  brandTitle,
  breadcrumbJsonLd,
  createPageMetadata,
  webPageJsonLd,
} from "@/lib/seo";
import { shareImage } from "@/lib/share-cards";

export const dynamicParams = false;

function isCategory(value: string): value is BlogCategoryId {
  return (BLOG_CATEGORY_ORDER as string[]).includes(value);
}

export function generateStaticParams() {
  return BLOG_CATEGORY_ORDER.filter((category) => postsByCategory(category).length > 0).map(
    (categoria) => ({ categoria }),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string }>;
}): Promise<Metadata> {
  const { categoria } = await params;
  if (!isCategory(categoria)) return await localizeMetadata({});
  const category = BLOG_CATEGORIES[categoria];

  return await localizeMetadata(createPageMetadata({
    title: brandTitle(category.title),
    description: category.description,
    path: categoryPath(categoria),
    image: shareImage(`blog-${categoria}`),
  }));
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ categoria: string }>;
}) {
  const tx = await getText();
  const { categoria } = await params;
  if (!isCategory(categoria)) notFound();

  const category = BLOG_CATEGORIES[categoria];
  const posts = postsByCategory(categoria);
  if (posts.length === 0) notFound();

  const path = categoryPath(categoria);
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: category.label, path },
  ];
  const otherCategories = BLOG_CATEGORY_ORDER.filter(
    (other) => other !== categoria && postsByCategory(other).length > 0,
  );

  return (
    <>
      <JsonLdScript
        nodes={[
          webPageJsonLd({
            path,
            type: "CollectionPage",
            name: category.title,
            description: category.description,
            about: { "@id": absoluteUrl("/blog#blog") },
          }),
          breadcrumbJsonLd(crumbs),
          {
            "@type": "ItemList",
            "@id": `${absoluteUrl(path)}#posts`,
            name: category.title,
            numberOfItems: posts.length,
            itemListElement: posts.map((post, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: post.title,
              url: absoluteUrl(postPath(post.slug)),
            })),
          },
        ]}
      />

      <section
        className="block ed-page"
        data-screen-label={tx(category.label)}
        style={{ ["--ed-accent" as string]: category.accent }}
      >
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <header className="ed-hero ed-hero--center">
            <div className="ed-hero-copy">
              <h1>{tx(category.title)}</h1>
              <p className="ed-lead">{tx(category.description)}</p>
            </div>
          </header>

          <h2 className="visually-hidden">{tx("Guías de ")}{tx(category.label.toLowerCase())}</h2>
          <ul className="blog-grid blog-grid--spaced">
            {posts.map((post) => (
              <PostCard post={post} key={post.slug} showCategory={false} />
            ))}
          </ul>

          <nav className="blog-other-categories" aria-label={tx("Otras categorías del blog")}>
            <h2 className="ed-h2">{tx("Más temas")}</h2>
            <ul className="ed-chip-list">
              {otherCategories.map((other) => (
                <li key={other}>
                  <Link href={categoryPath(other)} prefetch={false}>
                    {tx(BLOG_CATEGORIES[other].label)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {categoria === "academias" ? (
        <CtaBand
          title={tx("¿Necesitas profes de música para tu institución?")}
          text="Buscamos y evaluamos profes con audición, clase muestra y entrevista pedagógica."
          primary={{ href: `${B2B_HUB_PATH}#propuesta`, label: "Solicitar propuesta" }}
          secondary={{ href: B2B_HUB_PATH, label: "Ver servicios para academias" }}
        />
      ) : (
        <CtaBand
          title={tx("¿Prefieres aprender con un profe?")}
          text="Clases virtuales o a domicilio en Bogotá, para todas las edades, con profes evaluados."
          primary={{
            href: whatsappHref(tx.template("¡Hola! Vengo del blog ({p0}) y quiero información sobre clases.", {p0: tx(category.label)})),
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
