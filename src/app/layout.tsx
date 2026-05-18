import type { Metadata } from "next";
import Script from "next/script";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "A ½ tono — Escuela de Artes",
  description: "Descubre tu pasión por el arte. Música, canto, piano, violín, guitarra, batería, arte y más. Para todas las edades.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="es" className={`antialiased ${manrope.variable}`} suppressHydrationWarning>
      <head />
      <body suppressHydrationWarning>
        <Script src="/theme-init.js" strategy="beforeInteractive" />
        <SmoothScrollProvider>
          <Navbar />
          <main id="top">
            {children}
          </main>
          <WhatsAppFloat />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
