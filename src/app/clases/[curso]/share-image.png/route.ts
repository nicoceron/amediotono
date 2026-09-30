import { COURSE_FAMILY_ACCENTS, COURSE_PAGES, getCoursePage } from "@/lib/course-pages";
import { renderOgCard } from "@/lib/og-card";

export const runtime = "nodejs";
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return COURSE_PAGES.map((page) => ({ curso: page.course.id }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ curso: string }> },
) {
  const { curso } = await params;
  const page = getCoursePage(curso);

  if (!page) {
    return new Response("Not found", { status: 404 });
  }

  return renderOgCard({
    eyebrow: `${page.teachers.length} ${page.teachers.length === 1 ? "profe evaluado" : "profes evaluados"}`,
    title: `Clases de ${page.course.label.toLowerCase()}`,
    subtitle: "A domicilio en Bogotá y virtuales, para niños, jóvenes y adultos.",
    accent: COURSE_FAMILY_ACCENTS[page.guide.family],
    icon: page.course.icon,
  });
}
