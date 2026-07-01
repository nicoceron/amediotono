import { getIndexNowKey } from "@/lib/seo";

export const dynamic = "force-dynamic";

export function GET() {
  const key = getIndexNowKey();

  if (!key) {
    return new Response("IndexNow key is not configured.", {
      status: 404,
      headers: {
        "content-type": "text/plain; charset=utf-8",
      },
    });
  }

  return new Response(key, {
    headers: {
      "cache-control": "public, max-age=3600",
      "content-type": "text/plain; charset=utf-8",
    },
  });
}
