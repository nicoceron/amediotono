// Worker entry point: wraps the handler OpenNext generates at build time.
// `.open-next/worker.js` only exists after `opennextjs-cloudflare build`, so the
// import may or may not resolve when this file is type-checked.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { default as handler } from "./.open-next/worker.js";

const BARE_DOMAIN = "amediotonomusic.com";
const CANONICAL_HOST = "www.amediotonomusic.com";
const HSTS = "max-age=63072000; includeSubDomains";
// Matches images.minimumCacheTTL in next.config.ts.
const OPTIMIZED_IMAGE_CACHE = "public, max-age=604800, stale-while-revalidate=2592000";
const SHARE_IMAGE_CACHE = "public, max-age=86400, stale-while-revalidate=2592000";
// Teacher share cards are photos, so the PNG ImageResponse renders weighs
// 300-500 KB, above what WhatsApp shows as a preview. Pages link this JPEG.
const TEACHER_SHARE_JPEG = /^\/profes\/[a-z0-9-]+\/share-image\.jpg$/;

function withHeaders(response: Response, extra: Record<string, string>) {
  const headers = new Headers(response.headers);
  for (const [name, value] of Object.entries(extra)) headers.set(name, value);
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

async function teacherShareJpeg(request: Request, url: URL, env: CloudflareEnv, ctx: ExecutionContext) {
  const cache = await caches.open("teacher-share-jpeg");
  const cached = await cache.match(request);
  if (cached) return cached;

  const pngUrl = new URL(url);
  pngUrl.pathname = url.pathname.replace(/\.jpg$/, ".png");
  const png: Response = await handler.fetch(new Request(pngUrl, { headers: request.headers }), env, ctx);
  if (!png.ok || !png.body || !env.IMAGES) return png;

  const jpeg = await env.IMAGES.input(png.body).output({ format: "image/jpeg", quality: 82 });
  const response = new Response(jpeg.image(), {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": SHARE_IMAGE_CACHE,
      "Strict-Transport-Security": HSTS,
    },
  });
  if (request.method === "GET") ctx.waitUntil(cache.put(request, response.clone()));
  return response;
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // On Cloudflare, a plaintext request has an empty tlsVersion. `wrangler dev`
    // serves http but reports a TLS version, so local previews aren't redirected.
    const isPlainHttp = url.protocol === "http:" && request.cf?.tlsVersion === "";

    // Both hostnames point at this Worker; https://www is the canonical origin.
    // assets.run_worker_first sends static files here too, so this covers them.
    if (url.hostname === BARE_DOMAIN || isPlainHttp) {
      url.hostname = url.hostname === BARE_DOMAIN ? CANONICAL_HOST : url.hostname;
      url.protocol = "https:";
      url.port = "";
      return Response.redirect(url.toString(), 301);
    }

    const isRead = request.method === "GET" || request.method === "HEAD";

    if (isRead && TEACHER_SHARE_JPEG.test(url.pathname)) {
      return teacherShareJpeg(request, url, env, ctx);
    }

    // Static files (public/ and /_next/static) as before; public/_headers sets
    // their headers. Anything else is a page or route for the Next server.
    if (isRead && env.ASSETS) {
      const asset = await env.ASSETS.fetch(request);
      if (asset.status !== 404) return asset;
    }

    const response: Response = await handler.fetch(request, env, ctx);
    const extra: Record<string, string> = { "Strict-Transport-Security": HSTS };
    // OpenNext leaves /_next/image responses without Cache-Control for images
    // under public/, so browsers re-download them on every visit.
    if (url.pathname === "/_next/image" && response.ok && !response.headers.has("Cache-Control")) {
      extra["Cache-Control"] = OPTIMIZED_IMAGE_CACHE;
    }

    return withHeaders(response, extra);
  },
} satisfies ExportedHandler<CloudflareEnv>;
