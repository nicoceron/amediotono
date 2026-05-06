import type { Metadata } from "next";
import Script from "next/script";
import { Caprasimo, Caveat, Nunito, Patrick_Hand } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

const caprasimo = Caprasimo({ weight: "400", subsets: ["latin"], display: "block", variable: "--font-caprasimo" });
const caveat = Caveat({ subsets: ["latin"], display: "swap", variable: "--font-caveat" });
const nunito = Nunito({ subsets: ["latin"], display: "swap", variable: "--font-nunito" });
const patrick = Patrick_Hand({ weight: "400", subsets: ["latin"], display: "swap", variable: "--font-patrick" });

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
    <html lang="es" className={`antialiased ${caprasimo.variable} ${caveat.variable} ${nunito.variable} ${patrick.variable}`} suppressHydrationWarning>
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
