import { markdownResponse } from "@/lib/markdown";
import { rhythmPresetMarkdown } from "@/lib/music-markdown";
import { RHYTHM_PRESETS, getRhythmPreset, rhythmPresetPath } from "@/lib/music-tools";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return RHYTHM_PRESETS.map((preset) => ({ ritmo: preset.slug }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ ritmo: string }> }) {
  const { ritmo } = await params;
  const preset = getRhythmPreset(ritmo);
  if (!preset) return new Response("Not found", { status: 404 });
  return markdownResponse(rhythmPresetMarkdown(preset), rhythmPresetPath(preset.slug));
}
