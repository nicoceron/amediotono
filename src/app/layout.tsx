import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

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
    <html lang="es" className="antialiased" suppressHydrationWarning>
      <head />
      <body>
        <Script src="/theme-init.js" strategy="beforeInteractive" />
        <Navbar />
        <main id="top">
          {children}
        </main>
        <WhatsAppFloat />
      </body>
    </html>
  );
}