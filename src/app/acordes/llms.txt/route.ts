import {GET as sectionIndex} from "@/lib/section-ai-route";

export const dynamic = "force-static";

export function GET(request: Request) {
  return sectionIndex(request, {params: Promise.resolve({section: "acordes"})});
}
