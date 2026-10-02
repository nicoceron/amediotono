import { aiIndexResponse, blogCategoryAiMarkdown } from "@/lib/ai-discovery";
import { BLOG_CATEGORY_ORDER } from "@/lib/blog";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_CATEGORY_ORDER.map((categoria) => ({ categoria }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ categoria: string }> }) {
  const { categoria } = await params;
  const category = BLOG_CATEGORY_ORDER.find((value) => value === categoria);
  if (!category) return new Response("Not found", { status: 404 });
  return aiIndexResponse(blogCategoryAiMarkdown(category));
}
