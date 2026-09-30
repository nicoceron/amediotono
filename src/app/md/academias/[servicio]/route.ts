import { B2B_SERVICES, getB2BService } from "@/lib/b2b";
import { b2bServiceMarkdown, markdownResponse } from "@/lib/markdown";

// Served at /academias/<servicio>.md through a rewrite in next.config.ts.
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return B2B_SERVICES.map((service) => ({ servicio: service.slug }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ servicio: string }> }) {
  const { servicio } = await params;
  const service = getB2BService(servicio);
  if (!service) return new Response("Not found", { status: 404 });

  return markdownResponse(b2bServiceMarkdown(service), service.path);
}
