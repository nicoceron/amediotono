import type { Metadata } from "next";
import { ErrorPageState } from "@/components/ErrorPageState";

export const metadata: Metadata = {
  title: "Acceso no disponible | A medio tono",
  description: "No tienes acceso a esta sección.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Forbidden() {
  return (
    <ErrorPageState
      status="403"
      title="No tienes acceso a esta sección."
      description="Si crees que deberías poder verla, escríbenos. Mientras tanto puedes volver al inicio."
      actions={[
        { href: "/", label: "Inicio", icon: "home" },
        { href: "/#contacto", label: "Contacto", icon: "mail", variant: "secondary" },
      ]}
    />
  );
}
