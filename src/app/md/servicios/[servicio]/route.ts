import { SERVICE_PAGES, servicePageSlug } from "@/content/service-pages";
import { markdownResponse, serviceMarkdown } from "@/lib/markdown";

// Served at /<service page>.md through a rewrite in next.config.ts.
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_PAGES.map((page) => ({ servicio: servicePageSlug(page) }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ servicio: string }> }) {
  const { servicio } = await params;
  const page = SERVICE_PAGES.find((item) => servicePageSlug(item) === servicio);
  if (!page) return new Response("Not found", { status: 404 });

  return markdownResponse(serviceMarkdown(page), page.path);
}
