"use client";

import "./globals.css";
import { useEffect } from "react";
import { ErrorPageState } from "@/components/ErrorPageState";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  unstable_retry?: () => void;
  reset?: () => void;
};

const themeInitScript = `
  (function() {
    try {
      var root = document.documentElement;
      var media = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
      var stored = localStorage.getItem('tono-theme');
      var theme = stored || (media && media.matches ? 'dark' : 'light');
      root.setAttribute('data-theme', theme);
      root.setAttribute('data-theme-ready', 'true');
    } catch (error) {
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.setAttribute('data-theme-ready', 'true');
    }
  })();
`;

export default function GlobalError({ error, unstable_retry, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="es" className="antialiased" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <title>Error | A medio tono</title>
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
      </body>
    </html>
  );
}
