import type { NextConfig } from "next";

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
  experimental: {
    authInterrupts: true,
  },
  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 604800,
    qualities: [75, 100],
  },
};

export default nextConfig;
