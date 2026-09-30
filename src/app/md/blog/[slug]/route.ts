import { BLOG_POSTS, getPost, postPath } from "@/lib/blog";
import { markdownResponse, postMarkdown } from "@/lib/markdown";

// Served at /blog/<slug>.md through a rewrite in next.config.ts.
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return new Response("Not found", { status: 404 });

  return markdownResponse(postMarkdown(post), postPath(post.slug));
}
