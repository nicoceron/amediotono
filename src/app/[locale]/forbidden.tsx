import {localizeMetadata} from "@/i18n/server";
import {useText} from "@/i18n/use-text";
import type { Metadata } from "next";
import { ErrorPageState } from "@/components/ErrorPageState";

const baseMetadata: Metadata = {
  title: "Acceso no disponible | A medio tono",
  description: "No tienes acceso a esta sección.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Forbidden() {
  const tx = useText();
  return (
    <ErrorPageState
      status="403"
      title={tx("No tienes acceso a esta sección.")}
      description="Si crees que deberías poder verla, escríbenos. Mientras tanto puedes volver al inicio."
      actions={[
        { href: "/", label: "Inicio", icon: "home" },
        { href: "/#contacto", label: "Contacto", icon: "mail", variant: "secondary" },
      ]}
    />
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return localizeMetadata(baseMetadata);
}
