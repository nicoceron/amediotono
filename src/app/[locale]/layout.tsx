import {NextIntlClientProvider} from "next-intl";
import {getLocale, getMessages} from "next-intl/server";
import {routing} from "@/i18n/routing";
import {localizeMetadata, localizeStructuredData} from "@/i18n/server";
import type { Metadata } from "next";
import Script from "next/script";
import "../globals.css";
import { Navbar } from "@/components/Navbar";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ThemeScript } from "@/components/ThemeScript";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { B2B_HUB_PATH, B2B_SERVICES } from "@/lib/b2b";
import { COURSE_PAGES } from "@/lib/course-pages";
import { TEACHERS } from "@/lib/teachers";
import {
  DEFAULT_OG_IMAGE,
  SITE_BRAND,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_LOCALE,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  jsonLd,
  organizationJsonLd,
  siteVerification,
  websiteJsonLd,
} from "@/lib/seo";

// Cloudflare Web Analytics (cookieless). The token is public by design; the
// site is managed in the Cloudflare dashboard under Analytics > Web Analytics.
const CLOUDFLARE_WEB_ANALYTICS_TOKEN = "34f7314ed803427fa410404495e39475";

const baseMetadata: Metadata = {
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
      { name: "Clases de música online", path: "/clases-de-musica-online" },
      { name: "Preuniversitario de música", path: "/preuniversitario-musica" },
      { name: "Selección y evaluación de profesores de música", path: B2B_HUB_PATH },
      ...B2B_SERVICES.map((service) => ({ name: service.headline, path: service.path })),
    ],
  }),
  websiteJsonLd(),
]);

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  const localizedJsonLd = JSON.stringify(await localizeStructuredData(JSON.parse(rootJsonLd))).replace(/</g, "\\u003c");
  return (
    <html lang={locale} className="antialiased" suppressHydrationWarning>
      <head>
        <link rel="describedby" type="text/markdown" href={absoluteUrl("/llms.txt")} />
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: localizedJsonLd }}
        />
      </head>
      <body suppressHydrationWarning>
        <NextIntlClientProvider messages={{UI: messages.UI}}>
        <SmoothScrollProvider>
          <Navbar />
          <main id="top">
            {children}
          </main>
          <WhatsAppFloat />
        </SmoothScrollProvider>
        </NextIntlClientProvider>
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon={JSON.stringify({ token: CLOUDFLARE_WEB_ANALYTICS_TOKEN })}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({locale}));
}

export async function generateMetadata(): Promise<Metadata> {
  return localizeMetadata(baseMetadata);
}
