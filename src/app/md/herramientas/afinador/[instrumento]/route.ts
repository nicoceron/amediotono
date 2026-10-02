import { markdownResponse } from "@/lib/markdown";
import { tunerPresetMarkdown } from "@/lib/music-markdown";
import { TUNER_PRESETS, getTunerPreset, tunerPresetPath } from "@/lib/music-tools";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return TUNER_PRESETS.map((preset) => ({ instrumento: preset.slug }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ instrumento: string }> }) {
  const { instrumento } = await params;
  const preset = getTunerPreset(instrumento);
  if (!preset) return new Response("Not found", { status: 404 });
  return markdownResponse(tunerPresetMarkdown(preset), tunerPresetPath(preset.slug));
}
