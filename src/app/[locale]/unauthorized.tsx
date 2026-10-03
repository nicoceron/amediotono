import {localizeMetadata} from "@/i18n/server";
import {useText} from "@/i18n/use-text";
import type { Metadata } from "next";
import { ErrorPageState } from "@/components/ErrorPageState";

const baseMetadata: Metadata = {
  title: "Acceso requerido | A medio tono",
  description: "Esta sección requiere acceso autorizado.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Unauthorized() {
  const tx = useText();
  return (
    <ErrorPageState
      status="401"
      title={tx("Necesitas iniciar sesión.")}
      description="Esta sección requiere acceso autorizado. Puedes volver al inicio o explorar las clases disponibles."
      actions={[
        { href: "/", label: "Inicio", icon: "home" },
        { href: "/#cursos", label: "Ver cursos", icon: "music", variant: "secondary" },
      ]}
    />
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return localizeMetadata(baseMetadata);
}
