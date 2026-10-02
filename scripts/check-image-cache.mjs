// Exercise worker.ts in Wrangler's real local Cache API runtime. Only the
// OpenNext image transformer is replaced, so no production requests are sent.
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { build } from "esbuild";

const require = createRequire(import.meta.url);
const wranglerRequire = createRequire(require.resolve("wrangler/package.json"));
const { Miniflare } = wranglerRequire("miniflare");
const bundle = await build({
  entryPoints: ["worker.ts"],
  bundle: true,
  write: false,
  format: "esm",
  platform: "neutral",
  plugins: [{
    name: "fixture-image-transformer",
    setup(builder) {
      builder.onResolve({ filter: /\.open-next\/worker\.js$/ }, () => ({
        path: "image-transformer",
        namespace: "fixture",
      }));
      builder.onLoad({ filter: /.*/, namespace: "fixture" }, () => ({
        contents: `
          let calls = 0;
          export default { async fetch(request) {
            calls++;
            const url = new URL(request.url);
            const mode = url.searchParams.get("test") || "";
            const headers = {
              "Content-Type": mode === "html" ? "text/html" : "image/avif",
              "Cache-Control": mode === "private" ? "private, max-age=60, immutable"
                : mode === "no-store" ? "no-store" : "public, max-age=31536000, immutable",
              "Vary": "Accept",
              "X-Transform-Call": String(calls),
            };
            if (mode === "cookie") headers["Set-Cookie"] = "fixture=true";
            return new Response(request.method === "HEAD" ? null : "image-" + calls, {
              status: mode === "error" ? 400 : 200, headers,
            });
          }};
        `,
      }));
    },
  }],
});
const runtime = new Miniflare({
  cf: false,
  telemetry: { enabled: false },
  workers: [{
    config: {
      name: "image-cache-check",
      compatibilityDate: "2026-09-30",
      cache: { enabled: true },
      manifest: {
        mainModule: "worker.mjs",
        modules: { "worker.mjs": { type: "esm", contents: bundle.outputFiles[0].text } },
      },
    },
  }],
});

const origin = "https://www.amediotonomusic.com";
const source = "/_next/static/media/logo.abc12345.webp";
const imageUrl = (file = source, width = 256, extra = "") =>
  origin + "/_next/image?url=" + encodeURIComponent(file) + "&w=" + width + "&q=75" + extra;
const avif = { Accept: "image/avif,image/webp,image/*" };
const request = async (url, options = {}) => {
  const response = await runtime.dispatchFetch(url, { headers: avif, ...options });
  await response.text();
  return response;
};
const call = (response) => response.headers.get("X-Transform-Call");
const waitForCache = async (url, headers = avif) => {
  const key = new URL(url);
  key.searchParams.set("__accept", headers.Accept ?? "");
  const cache = await (await runtime.getCaches()).open("next-static-images-v1");
  for (let attempt = 0; attempt < 40; attempt++) {
    if (await cache.match(key.toString())) return;
    await new Promise((resolve) => setTimeout(resolve, 10));
  }
  assert.fail("Optimized image did not reach the local edge cache");
};
let passed = 0;
try {
  const url = imageUrl();
  const first = await request(url);
  await waitForCache(url);
  assert.equal(call(await request(url)), call(first), "repeat GET must reuse the variant");
  assert.equal(first.headers.get("Strict-Transport-Security"), "max-age=63072000; includeSubDomains");
  passed++;

  const webpHeaders = { Accept: "image/webp,image/*" };
  const webp = await request(url, { headers: webpHeaders });
  assert.notEqual(call(webp), call(first), "Accept variants must be independent");
  await waitForCache(url, webpHeaders);
  assert.equal(call(await request(url, { headers: webpHeaders })), call(webp));
  passed++;

  const wider = await request(imageUrl(source, 640));
  assert.notEqual(call(wider), call(first), "width variants must be independent");
  passed++;

  const revised = await request(imageUrl("/_next/static/media/logo.def67890.webp"));
  assert.notEqual(call(revised), call(first), "changed content hash must get a fresh image");
  passed++;

  for (const mode of ["error", "cookie", "html", "private", "no-store"]) {
    const testUrl = imageUrl(source, 256, "&test=" + mode);
    assert.notEqual(call(await request(testUrl)), call(await request(testUrl)), mode + " must not be cached");
    passed++;
  }
  const publicUrl = imageUrl("/logo-nav.webp");
  assert.notEqual(call(await request(publicUrl)), call(await request(publicUrl)), "mutable public filename must bypass cache");
  passed++;

  for (const headers of [
    { ...avif, Authorization: "fixture" },
    { ...avif, Range: "bytes=0-10" },
    { ...avif, "If-None-Match": "fixture" },
    { ...avif, "If-Modified-Since": "Thu, 01 Oct 2026 00:00:00 GMT" },
  ]) {
    assert.notEqual(call(await request(url, { headers })), call(first), "special request must reach the handler");
    passed++;
  }
  assert.notEqual(call(await request(url, { method: "HEAD" })), call(first), "HEAD must reach the handler");
  passed++;
  console.log(passed + " optimized image cache checks passed");
} finally {
  await runtime.dispose();
}
