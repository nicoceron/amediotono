import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: "A ½ tono — Escuela de Artes",
  description: "Descubre tu pasión por el arte. Música, canto, piano, violín, guitarra, batería, arte y más. Para todas las edades.",
};

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
