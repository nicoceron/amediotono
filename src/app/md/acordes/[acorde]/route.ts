import { markdownResponse } from "@/lib/markdown";
import { chordMarkdown } from "@/lib/music-markdown";
import { chordPath } from "@/lib/music-pages";
import { CHORDS, getChord } from "@/lib/music-theory";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return CHORDS.map((chord) => ({ acorde: chord.slug }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ acorde: string }> }) {
  const { acorde } = await params;
  const chord = getChord(acorde);
  if (!chord) return new Response("Not found", { status: 404 });
  return markdownResponse(chordMarkdown(chord), chordPath(chord));
}
