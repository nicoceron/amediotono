"use client";

import { useEffect } from "react";
import { ErrorPageState } from "@/components/ErrorPageState";

type ErrorProps = {
  error: Error & { digest?: string };
  unstable_retry?: () => void;
  reset?: () => void;
};

export default function Error({ error, unstable_retry, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <title>Error | A medio tono</title>
      <ErrorPageState
        status="500"
        title="Algo se desafinó."
        description="No pudimos cargar esta parte. Intenta de nuevo o vuelve al inicio."
        retryAction={{
          label: "Intentar de nuevo",
          onClick: unstable_retry ?? reset ?? (() => window.location.reload()),
        }}
        actions={[{ href: "/", label: "Inicio", icon: "home", variant: "secondary" }]}
      />
    </>
  );
}
