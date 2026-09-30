import { COURSE_PAGES, getCoursePage } from "@/lib/course-pages";
import { coursePageMarkdown, markdownResponse } from "@/lib/markdown";

// Served at /clases/<curso>.md through a rewrite in next.config.ts.
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return COURSE_PAGES.map((page) => ({ curso: page.course.id }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ curso: string }> }) {
  const { curso } = await params;
  const page = getCoursePage(curso);
  if (!page) return new Response("Not found", { status: 404 });

  return markdownResponse(coursePageMarkdown(page), page.path);
}
