import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
  DEFAULT_OG_IMAGE,
  SITE_BRAND,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_LOCALE,
  SITE_NAME,
  SITE_URL,
  jsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: `${SITE_BRAND} — Clases de música en Bogotá`,
    template: "%s",
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_BRAND} — Clases de música en Bogotá`,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: SITE_BRAND,
    locale: SITE_LOCALE,
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_BRAND} — Clases de música en Bogotá`,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const rootJsonLd = jsonLd([organizationJsonLd(), websiteJsonLd()]);

const themeInitScript = `
  (function() {
    try {
      var root = document.documentElement;
      var media = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
      var stored = localStorage.getItem('tono-theme');
      var theme = stored || (media && media.matches ? 'dark' : 'light');
      var applyTheme = function(next) {
        root.setAttribute('data-theme', next);
      };
      applyTheme(theme);
      requestAnimationFrame(function() {
        root.setAttribute('data-theme-ready', 'true');
      });
      if (media && media.addEventListener) {
        media.addEventListener('change', function(event) {
          if (!localStorage.getItem('tono-theme')) applyTheme(event.matches ? 'dark' : 'light');
        });
      }
    } catch (error) {
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.setAttribute('data-theme-ready', 'true');
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="es" className="antialiased" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: rootJsonLd }}
        />
      </head>
      <body suppressHydrationWarning>
        <SmoothScrollProvider>
          <Navbar />
          <main id="top">
            {children}
          </main>
          <WhatsAppFloat />
        </SmoothScrollProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
