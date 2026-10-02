import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

// Teacher profiles renamed in #49 and #72. Google still had some old URLs
// indexed (e.g. /profes/canto-autentico), so they redirect to the new slug.
const RENAMED_TEACHER_SLUGS: Record<string, string> = {
  niko: "niko-ferro",
  luna: "luna-chavela",
  mariana: "mariana-castro",
  sergio: "sergio-ramirez",
  david: "david-ardila",
  jaider: "jaider-bohorquez",
  "julian-divertido": "julian-perez",
  "julian-chacon": "julian-perez",
  "voz-serena": "laura-castellanos",
  cesar: "cesar-avila",
  fabian: "fabian-garzon",
  jose: "jose-garcia",
  alejandro: "alejandro-guzman",
  carlos: "carlos-santamaria",
  madeline: "madeline-castiblanco",
  juank: "juank-chavez",
  dara: "dara-cifuentes",
  "canto-autentico": "natalia-bernal",
  laura: "laura-bonilla",
  jhony: "jhony-baez",
  "contrabajo-teoria": "mateo-mancipe",
  leila: "leila-fernandez",
  diego: "diego-quiroga",
  "julian-guitarra-electrica": "julian-cortes",
  moises: "moises-clavijo",
  "juan-david": "juan-david-ardila",
};

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  async redirects() {
    return Object.entries(RENAMED_TEACHER_SLUGS).map(([from, to]) => ({
      source: `/profes/${from}`,
      destination: `/profes/${to}`,
      permanent: true,
    }));
  },
  // No headers() here: cache headers for files in public/ live in
  // public/_headers, because Cloudflare serves static files before Next runs.

  // Markdown twins for AI assistants (https://llmstxt.org): /blog/<slug>.md,
  // /clases/<curso>.md, /academias/<servicio>.md, /profes.md,
  // /profes/<slug>.md, chords, scales, tuner and rhythm presets, the glossary
  // and the service pages (src/content/service-pages.ts). worker.ts also
  // serves them for `Accept: text/markdown` requests to the HTML URL.
  async rewrites() {
    return [
      { source: "/blog/:slug\\.md", destination: "/md/blog/:slug" },
      { source: "/clases/:curso\\.md", destination: "/md/clases/:curso" },
      { source: "/academias/:servicio\\.md", destination: "/md/academias/:servicio" },
      { source: "/profes\\.md", destination: "/md/profes" },
      { source: "/profes/:slug\\.md", destination: "/md/profes/:slug" },
      { source: "/acordes/:acorde\\.md", destination: "/md/acordes/:acorde" },
      { source: "/escalas/:escala\\.md", destination: "/md/escalas/:escala" },
      { source: "/herramientas/afinador/:instrumento\\.md", destination: "/md/herramientas/afinador/:instrumento" },
      { source: "/herramientas/metronomo/:ritmo\\.md", destination: "/md/herramientas/metronomo/:ritmo" },
      { source: "/glosario-musical\\.md", destination: "/md/glosario-musical" },
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
