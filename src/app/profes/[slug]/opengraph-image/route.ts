import { generateTeacherShareImage } from "@/lib/teacher-share-image";

export const runtime = "nodejs";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  return generateTeacherShareImage(slug);
}
