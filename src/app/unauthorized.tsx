import type { Metadata } from "next";
import { ErrorPageState } from "@/components/ErrorPageState";

export const metadata: Metadata = {
  title: "Acceso requerido | A medio tono",
  description: "Esta sección requiere acceso autorizado.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Unauthorized() {
  return (
    <ErrorPageState
      status="401"
      title="Necesitas iniciar sesión."
      description="Esta sección requiere acceso autorizado. Puedes volver al inicio o explorar las clases disponibles."
      actions={[
        { href: "/", label: "Inicio", icon: "home" },
        { href: "/#cursos", label: "Ver cursos", icon: "music", variant: "secondary" },
      ]}
    />
  );
}
