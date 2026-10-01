// Worker entry point: wraps the handler OpenNext generates at build time.
// `.open-next/worker.js` only exists after `opennextjs-cloudflare build`, so the
// import may or may not resolve when this file is type-checked.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { default as handler } from "./.open-next/worker.js";

const BARE_DOMAIN = "amediotonomusic.com";
const CANONICAL_HOST = "www.amediotonomusic.com";

export default {
  async fetch(request, env, ctx) {
    // Both hostnames point at this Worker; www is the canonical one.
    const url = new URL(request.url);
    if (url.hostname === BARE_DOMAIN) {
      url.hostname = CANONICAL_HOST;
      url.port = "";
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }

    return handler.fetch(request, env, ctx);
  },
} satisfies ExportedHandler<CloudflareEnv>;
