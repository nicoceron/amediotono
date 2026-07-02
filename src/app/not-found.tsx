import type { Metadata } from "next";
import { ErrorPageState } from "@/components/ErrorPageState";

export const metadata: Metadata = {
  title: "Página no encontrada | A medio tono",
  description: "La página que buscas no existe o cambió de dirección.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <ErrorPageState
      status="404"
      title="Esta página se salió del compás."
      description="Puede que el enlace haya cambiado o ya no exista. Puedes volver al inicio o encontrar una clase."
      actions={[
        { href: "/", label: "Inicio", icon: "home" },
        { href: "/#cursos", label: "Ver cursos", icon: "music", variant: "secondary" },
        { href: "/profes", label: "Profes", icon: "users", variant: "secondary" },
      ]}
    />
  );
}
