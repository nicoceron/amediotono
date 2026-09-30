import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { B2B_HUB_PATH, B2B_SERVICES } from "@/lib/b2b";
import { COURSE_PAGES } from "@/lib/course-pages";
import { TEACHERS } from "@/lib/teachers";
import {
  DEFAULT_OG_IMAGE,
  SITE_BRAND,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_LANGUAGE,
  SITE_LOCALE,
  SITE_NAME,
  SITE_URL,
  jsonLd,
  organizationJsonLd,
  siteVerification,
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
  category: "education",
  verification: siteVerification(),
  icons: {
    shortcut: [{ url: "/favicon.ico", sizes: "256x256", type: "image/x-icon" }],
    icon: [{ url: "/icon.png", sizes: "512x512", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [{ url: "/blog/rss.xml", title: "Blog de A medio tono" }],
    },
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

const FOUNDERS = TEACHERS.filter((teacher) => teacher.isFounder).sort(
  (a, b) => (a.founderOrder ?? 0) - (b.founderOrder ?? 0),
);

const rootJsonLd = jsonLd([
  organizationJsonLd({
    founders: FOUNDERS,
    services: [
      ...COURSE_PAGES.map((page) => ({
        name: `Clases de ${page.course.label.toLowerCase()}`,
        path: page.path,
      })),
      { name: "Selección y evaluación de profesores de música", path: B2B_HUB_PATH },
      ...B2B_SERVICES.map((service) => ({ name: service.headline, path: service.path })),
    ],
  }),
  websiteJsonLd(),
]);

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
      <html lang={SITE_LANGUAGE} className="antialiased" suppressHydrationWarning>
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
