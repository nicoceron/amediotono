// OpenNext 1.20 supports Edge middleware; its Node proxy bundler expects a
// trace manifest Next 16.3 no longer emits. Keep this documented Edge path
// until the adapter supports the new output (opennextjs-cloudflare #1373).
import createMiddleware from "next-intl/middleware";
import type {NextRequest} from "next/server";
import {routing} from "./i18n/routing";

const handleI18n = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const response = handleI18n(request);
  // Only a choice in the picker persists. Automatic visitors continue to use
  // Accept-Language when they return with a different browser preference.
  if (!request.cookies.has("TONO_LOCALE")) response.cookies.delete("TONO_LOCALE");
  const explicitLocale = routing.locales.some(locale => request.nextUrl.pathname === `/${locale}` || request.nextUrl.pathname.startsWith(`/${locale}/`));
  if (!explicitLocale) {
    const vary = response.headers.get("Vary");
    response.headers.set("Vary", [vary, "Accept-Language", "Cookie"].filter(Boolean).join(", "));
    if (response.status >= 300 && response.status < 400) response.headers.set("Cache-Control", "private, no-store");
  }
  return response;
}

export const config = {
  matcher: "/((?!api|md|_next|_vercel|profes/[^/]+/opengraph-image|.*\\..*).*)",
};
