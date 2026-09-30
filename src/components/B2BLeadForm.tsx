"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/contact";

type Status = "idle" | "sending" | "sent" | "error";

export function B2BLeadForm({
  institutionTypes,
  services,
  defaultService = "",
}: {
  institutionTypes: string[];
  services: Array<{ slug: string; name: string }>;
  defaultService?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/b2b-leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = (await response.json().catch(() => ({}))) as { ok?: boolean; message?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "No pudimos enviar tu solicitud.");
      }

      form.reset();
      setStatus("sent");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "No pudimos enviar tu solicitud.");
    }
  }

  if (status === "sent") {
    return (
      <div className="ed-form-success" role="status">
        <CheckCircle2 size={36} strokeWidth={2.4} aria-hidden="true" />
        <h3>¡Recibimos tu solicitud!</h3>
        <p>Te escribiremos pronto al correo o WhatsApp que nos dejaste para contarte los siguientes pasos.</p>
      </div>
    );
  }

  return (
    <form className="ed-form" onSubmit={handleSubmit} noValidate={false}>
      <div className="ed-form-grid">
        <label className="ed-field">
          <span>Nombre<span className="ed-required" aria-hidden="true">*</span></span>
          <input name="nombre" type="text" autoComplete="name" required maxLength={120} />
        </label>
        <label className="ed-field">
          <span>Cargo</span>
          <input name="cargo" type="text" autoComplete="organization-title" maxLength={120} />
        </label>
        <label className="ed-field">
          <span>Institución<span className="ed-required" aria-hidden="true">*</span></span>
          <input name="institucion" type="text" autoComplete="organization" required maxLength={160} />
        </label>
        <label className="ed-field">
          <span>Tipo de institución<span className="ed-required" aria-hidden="true">*</span></span>
          <select name="tipo" required defaultValue="">
            <option value="" disabled>
              Selecciona una opción
            </option>
            {institutionTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label className="ed-field">
          <span>Correo<span className="ed-required" aria-hidden="true">*</span></span>
          <input name="correo" type="email" autoComplete="email" required maxLength={160} />
        </label>
        <label className="ed-field">
          <span>WhatsApp o teléfono<span className="ed-required" aria-hidden="true">*</span></span>
          <input name="telefono" type="tel" autoComplete="tel" required maxLength={40} />
        </label>
        <label className="ed-field">
          <span>Ciudad<span className="ed-required" aria-hidden="true">*</span></span>
          <input name="ciudad" type="text" autoComplete="address-level2" required maxLength={80} defaultValue="Bogotá" />
        </label>
        <label className="ed-field">
          <span>Servicio de interés</span>
          <select name="servicio" defaultValue={defaultService}>
            <option value="">Aún no lo sé</option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.name}
              </option>
            ))}
          </select>
        </label>
        <label className="ed-field ed-field--wide">
          <span>¿Qué necesitas?<span className="ed-required" aria-hidden="true">*</span></span>
          <textarea
            name="necesidad"
            required
            rows={4}
            maxLength={2000}
            placeholder="Instrumentos, número de vacantes o candidatos, edades de los estudiantes y fechas."
          />
        </label>
        <label className="ed-field-honeypot" aria-hidden="true">
          Sitio web
          <input name="sitio_web" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="ed-consent">
        <input name="consentimiento" type="checkbox" value="si" required />
        <span>
          Autorizo a A medio tono a usar estos datos para responder a mi solicitud, conforme a la
          Ley 1581 de 2012.
        </span>
      </label>

      <div className="ed-form-actions">
        <button className="ed-button" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Enviando…" : "Solicitar propuesta"}
          <ArrowRight size={20} strokeWidth={2.4} aria-hidden="true" />
        </button>
        <a
          className="ed-form-alt"
          href={whatsappHref("¡Hola! Quiero información sobre selección de profes para mi institución.")}
          target="_blank"
          rel="noopener"
        >
          <MessageCircle size={18} strokeWidth={2.4} aria-hidden="true" />
          Prefiero escribir por WhatsApp
        </a>
      </div>

      {status === "error" && (
        <p className="ed-form-error" role="alert">
          {message} Puedes intentarlo de nuevo o escribirnos por WhatsApp.
        </p>
      )}
    </form>
  );
}
