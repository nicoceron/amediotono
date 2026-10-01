import { markdownResponse, teacherProfileMarkdown } from "@/lib/markdown";
import { TEACHERS, getTeacherBySlug } from "@/lib/teachers";

// Served at /profes/<slug>.md through a rewrite in next.config.ts.
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return TEACHERS.map((teacher) => ({ slug: teacher.slug }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const teacher = getTeacherBySlug(slug);
  if (!teacher) return new Response("Not found", { status: 404 });

  return markdownResponse(teacherProfileMarkdown(teacher), `/profes/${teacher.slug}`);
}
