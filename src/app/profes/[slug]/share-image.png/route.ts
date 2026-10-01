import { generateTeacherShareImage } from "@/lib/teacher-share-image";
import { TEACHERS } from "@/lib/teachers";

export const runtime = "nodejs";
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return TEACHERS.map((teacher) => ({ slug: teacher.slug }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  return generateTeacherShareImage(slug);
}
