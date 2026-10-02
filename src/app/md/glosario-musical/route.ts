import { glossaryMarkdown, markdownResponse } from "@/lib/markdown";

// Served at /glosario-musical.md through a rewrite in next.config.ts.
export const dynamic = "force-static";

export function GET() {
  return markdownResponse(glossaryMarkdown(), "/glosario-musical");
}
