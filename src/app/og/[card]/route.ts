import { renderOgCard } from "@/lib/og-card";
import { SHARE_CARDS } from "@/lib/share-cards";

export const runtime = "nodejs";
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(SHARE_CARDS).map((key) => ({ card: `${key}.png` }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ card: string }> },
) {
  const { card } = await params;
  const entry = card.endsWith(".png") ? SHARE_CARDS[card.slice(0, -4)] : undefined;

  if (!entry) {
    return new Response("Not found", { status: 404 });
  }

  return renderOgCard(entry);
}
