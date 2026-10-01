import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  // No headers() here: cache headers for files in public/ live in
  // public/_headers, because Cloudflare serves static files before Next runs.

  // Markdown twins for AI assistants (https://llmstxt.org): /blog/<slug>.md,
  // /clases/<curso>.md, /academias/<servicio>.md, /profes.md,
  // /profes/<slug>.md and the service pages (src/content/service-pages.ts).
  async rewrites() {
    return [
      { source: "/blog/:slug\\.md", destination: "/md/blog/:slug" },
      { source: "/clases/:curso\\.md", destination: "/md/clases/:curso" },
      { source: "/academias/:servicio\\.md", destination: "/md/academias/:servicio" },
      { source: "/profes\\.md", destination: "/md/profes" },
      { source: "/profes/:slug\\.md", destination: "/md/profes/:slug" },
      {
        source:
          "/:servicio(clases-de-musica-a-domicilio-bogota|clases-de-musica-online|preuniversitario-musica)\\.md",
        destination: "/md/servicios/:servicio",
      },
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
