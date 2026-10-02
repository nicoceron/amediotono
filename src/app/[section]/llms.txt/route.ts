import { AI_SECTIONS, aiIndexResponse, isAiSection, sectionAiMarkdown } from "@/lib/ai-discovery";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return AI_SECTIONS.map((section) => ({ section }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  if (!isAiSection(section)) return new Response("Not found", { status: 404 });
  return aiIndexResponse(sectionAiMarkdown(section));
}
