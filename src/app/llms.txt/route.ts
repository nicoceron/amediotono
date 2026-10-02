import { aiIndexResponse, rootAiMarkdown } from "@/lib/ai-discovery";

export const dynamic = "force-static";

export function GET() {
  return aiIndexResponse(rootAiMarkdown());
}
