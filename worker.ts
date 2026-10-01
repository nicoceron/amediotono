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

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // On Cloudflare, a plaintext request has an empty tlsVersion. `wrangler dev`
    // serves http but reports a TLS version, so local previews aren't redirected.
    const isPlainHttp = url.protocol === "http:" && request.cf?.tlsVersion === "";

    // Both hostnames point at this Worker; https://www is the canonical origin.
    // Static files are served before this code runs; public/_headers covers them.
    if (url.hostname === BARE_DOMAIN || isPlainHttp) {
      url.hostname = url.hostname === BARE_DOMAIN ? CANONICAL_HOST : url.hostname;
      url.protocol = "https:";
      url.port = "";
      return Response.redirect(url.toString(), 301);
    }

    const response: Response = await handler.fetch(request, env, ctx);
    const headers = new Headers(response.headers);
    headers.set("Strict-Transport-Security", HSTS);
    // OpenNext leaves /_next/image responses without Cache-Control for images
    // under public/, so browsers re-download them on every visit.
    if (url.pathname === "/_next/image" && response.ok && !headers.has("Cache-Control")) {
      headers.set("Cache-Control", OPTIMIZED_IMAGE_CACHE);
    }

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
} satisfies ExportedHandler<CloudflareEnv>;
