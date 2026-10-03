"use client";
import {NextIntlClientProvider} from "next-intl";

import "./globals.css";
import { useEffect } from "react";
import { ErrorPageState } from "@/components/ErrorPageState";
import { ThemeScript } from "@/components/ThemeScript";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  unstable_retry?: () => void;
  reset?: () => void;
};

export default function GlobalError({ error, unstable_retry, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="es" className="antialiased" suppressHydrationWarning>
      <head><ThemeScript /></head>
      <body suppressHydrationWarning>
        <title>Error | A medio tono</title>
        {/* Source Spanish keeps this fallback independent of the full catalog. */}
        <NextIntlClientProvider locale="es" messages={{UI: {}}} timeZone="America/Bogota">
        <ErrorPageState
          status="500"
          title="Algo se desafinó."
          description="No pudimos cargar el sitio completo. Intenta de nuevo o vuelve al inicio."
          retryAction={{
            label: "Intentar de nuevo",
            onClick: unstable_retry ?? reset ?? (() => window.location.reload()),
          }}
          actions={[{ href: "/", label: "Inicio", icon: "home", variant: "secondary" }]}
          global
        />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
