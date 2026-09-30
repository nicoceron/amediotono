import { markdownResponse, teachersMarkdown } from "@/lib/markdown";
import { TEACHERS } from "@/lib/teachers";

// Served at /profes.md through a rewrite in next.config.ts.
export const dynamic = "force-static";

export function GET() {
  return markdownResponse(teachersMarkdown(TEACHERS), "/profes");
}
