import { markdownResponse } from "@/lib/markdown";
import { scaleMarkdown } from "@/lib/music-markdown";
import { scalePath } from "@/lib/music-pages";
import { SCALES, getScale } from "@/lib/music-theory";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return SCALES.map((scale) => ({ escala: scale.slug }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ escala: string }> }) {
  const { escala } = await params;
  const scale = getScale(escala);
  if (!scale) return new Response("Not found", { status: 404 });
  return markdownResponse(scaleMarkdown(scale), scalePath(scale));
}
