import type { MetadataRoute } from "next";
import { absoluteUrl, siteHost } from "@/lib/seo";

/**
 * We want to be found and cited everywhere people look for music classes:
 * classic search engines, AI answer engines (ChatGPT, Claude, Perplexity,
 * Gemini, Copilot, Meta AI) and link previews (WhatsApp, Instagram).
 *
 * Training crawlers are allowed on purpose: when models already know the
 * brand, assistants recommend it even without browsing. Only private API
 * routes are excluded.
 */
const searchAndPreviewBots = [
  "Googlebot",
  "Googlebot-Image",
  "Googlebot-Video",
  "Bingbot",
  "DuckDuckBot",
  "DuckAssistBot",
  "Applebot",
  "Slurp",
  "YandexBot",
  "Baiduspider",
  "facebookexternalhit",
  "WhatsApp",
  "Twitterbot",
  "LinkedInBot",
];

const aiAnswerBots = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "Claude-SearchBot",
  "Claude-User",
  "ClaudeBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "meta-externalagent",
  "CCBot",
  "MistralAI-User",
  "cohere-ai",
];

const privatePaths = ["/api/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [...searchAndPreviewBots, ...aiAnswerBots],
        allow: "/",
        disallow: privatePaths,
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: privatePaths,
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteHost(),
  };
}
