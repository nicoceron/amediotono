import { BLOG_CATEGORIES, BLOG_POSTS, getPost } from "@/lib/blog";
import { renderOgCard } from "@/lib/og-card";

export const runtime = "nodejs";
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return new Response("Not found", { status: 404 });
  }

  const category = BLOG_CATEGORIES[post.category];

  return renderOgCard({
    eyebrow: `Blog · ${category.label}`,
    title: post.title,
    accent: category.accent,
    footer: "amediotonomusic.com/blog",
  });
}
