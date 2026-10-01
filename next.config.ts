import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const PUBLIC_ASSET_EXTENSIONS = [
  "avif",
  "gif",
  "ico",
  "jpg",
  "jpeg",
  "mp4",
  "png",
  "svg",
  "webp",
  "woff2",
];

const publicAssetCacheHeaders = [
  {
    key: "Cache-Control",
    value: "public, max-age=86400, s-maxage=604800, stale-while-revalidate=2592000",
  },
];

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  async headers() {
    return PUBLIC_ASSET_EXTENSIONS.map((extension) => ({
      source: `/:path*.${extension}`,
      headers: publicAssetCacheHeaders,
    }));
  },
  // Markdown twins for AI assistants (https://llmstxt.org): /blog/<slug>.md,
  // /clases/<curso>.md, /academias/<servicio>.md and /profes.md.
  async rewrites() {
    return [
      { source: "/blog/:slug\\.md", destination: "/md/blog/:slug" },
      { source: "/clases/:curso\\.md", destination: "/md/clases/:curso" },
      { source: "/academias/:servicio\\.md", destination: "/md/academias/:servicio" },
      { source: "/profes\\.md", destination: "/md/profes" },
    ];
  },
  experimental: {
    authInterrupts: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 604800,
    qualities: [75, 100],
  },
};

export default nextConfig;

// Gives `next dev` local versions of the Worker bindings (e.g. EMAIL).
initOpenNextCloudflareForDev();
