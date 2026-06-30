"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import type { FormEvent, HTMLAttributes, ReactNode, RefObject } from "react";
import { ArrowRight, ChevronDown, Upload } from "lucide-react";
import { COUNTRY_DIAL_CODES } from "@/data/countryDialCodes";

type DropdownOption = {
  value: string;
  label: string;
  flag?: string;
  search?: string;
};

const LANGUAGE_OPTIONS = [
  "Inglés",
  "Francés",
  "Portugués",
  "Italiano",
  "Alemán",
  "Otro",
];

const BOGOTA_LOCATION_OPTIONS = [
  "Usaquén, Bogotá D.C., Colombia",
  "Chapinero, Bogotá D.C., Colombia",
  "Santa Fe, Bogotá D.C., Colombia",
  "San Cristóbal, Bogotá D.C., Colombia",
  "Usme, Bogotá D.C., Colombia",
  "Tunjuelito, Bogotá D.C., Colombia",
  "Bosa, Bogotá D.C., Colombia",
  "Kennedy, Bogotá D.C., Colombia",
  "Fontibón, Bogotá D.C., Colombia",
  "Engativá, Bogotá D.C., Colombia",
  "Suba, Bogotá D.C., Colombia",
  "Barrios Unidos, Bogotá D.C., Colombia",
  "Teusaquillo, Bogotá D.C., Colombia",
  "Los Mártires, Bogotá D.C., Colombia",
  "Antonio Nariño, Bogotá D.C., Colombia",
  "Puente Aranda, Bogotá D.C., Colombia",
  "La Candelaria, Bogotá D.C., Colombia",
  "Rafael Uribe Uribe, Bogotá D.C., Colombia",
  "Ciudad Bolívar, Bogotá D.C., Colombia",
  "Sumapaz, Bogotá D.C., Colombia",
];

const NEARBY_LOCATION_OPTIONS = [
  "Chía, Cundinamarca, Colombia",
  "Cajicá, Cundinamarca, Colombia",
  "Cota, Cundinamarca, Colombia",
  "Sopó, Cundinamarca, Colombia",
  "La Calera, Cundinamarca, Colombia",
  "Funza, Cundinamarca, Colombia",
  "Mosquera, Cundinamarca, Colombia",
  "Madrid, Cundinamarca, Colombia",
  "Tenjo, Cundinamarca, Colombia",
  "Tabio, Cundinamarca, Colombia",
  "Zipaquirá, Cundinamarca, Colombia",
  "Tocancipá, Cundinamarca, Colombia",
  "Facatativá, Cundinamarca, Colombia",
  "Soacha, Cundinamarca, Colombia",
  "Sibaté, Cundinamarca, Colombia",
  "Bojacá, Cundinamarca, Colombia",
  "El Rosal, Cundinamarca, Colombia",
];

function normalizeSearch(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es-CO");
}

function RequiredMark() {
  return (
    <span aria-hidden="true" className="job-required">
      *
    </span>
  );
}

function RequiredLabel({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <span className="job-gh-label" id={id}>
      {children}
      <RequiredMark />
    </span>
  );
}

function FieldLabel({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <span className="job-gh-label" id={id}>
      {children}
    </span>
  );
}

function useCloseOnOutsideClick(
  ref: RefObject<HTMLElement | null>,
  onClose: () => void,
) {
  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      onClose();
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [onClose, ref]);
}

function TextField({
  label,
  name,
  type = "text",
  inputMode,
  autoComplete,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  inputMode?: HTMLAttributes<HTMLInputElement>["inputMode"];
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <label className="job-gh-field">
      <RequiredLabel>{label}</RequiredLabel>
      <input
        name={name}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required
      />
    </label>
  );
}

function DropdownField({
  label,
  name,
  options,
  placeholder = "Selecciona...",
  defaultValue = "",
  menuClassName = "",
  searchable = false,
  searchPlaceholder = "Buscar...",
  display = "label",
}: {
  label: string;
  name: string;
  options: DropdownOption[];
  placeholder?: string;
  defaultValue?: string;
  menuClassName?: string;
  searchable?: boolean;
  searchPlaceholder?: string;
  display?: "label" | "flag" | "countryCode";
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<DropdownOption | undefined>(() =>
    options.find((option) => option.value === defaultValue),
  );
  const [query, setQuery] = useState("");
  const fieldRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const labelId = useId();
  const filteredOptions = useMemo(() => {
    const normalizedQuery = normalizeSearch(query.trim());
    if (!searchable || !normalizedQuery) return options;

    return options.filter((option) =>
      normalizeSearch(`${option.label} ${option.value} ${option.search ?? ""}`).includes(
        normalizedQuery,
      ),
    );
  }, [options, query, searchable]);

  const closeMenu = () => {
    setOpen(false);
    setQuery("");
  };

  useCloseOnOutsideClick(fieldRef, closeMenu);

  useEffect(() => {
    if (!open || !searchable) return;

    window.requestAnimationFrame(() => searchRef.current?.focus());
  }, [open, searchable]);

  return (
    <div className={open ? "job-gh-field job-gh-field-open" : "job-gh-field"} ref={fieldRef}>
      <RequiredLabel id={labelId}>{label}</RequiredLabel>
      <input name={name} type="hidden" value={selected?.value ?? ""} />
      <button
        type="button"
        className={[
          "job-gh-select-trigger",
          selected ? "" : "is-placeholder",
          display === "flag" ? "is-flag-only" : "",
          display === "countryCode" ? "is-country-code" : "",
        ].join(" ")}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={labelId}
        aria-label={selected ? `${label}: ${selected.label}` : label}
        onClick={() => {
          if (open) {
            closeMenu();
            return;
          }

          setOpen(true);
        }}
      >
        <span className="job-gh-select-value">
          {display === "countryCode" && selected ? (
            <>
              {selected.flag && (
                <span aria-hidden="true" className="job-country-flag-display">
                  {selected.flag}
                </span>
              )}
              <span className="job-country-code">{selected.value}</span>
            </>
          ) : display === "flag" && selected?.flag ? (
            <span aria-hidden="true" className="job-country-flag-display">
              {selected.flag}
            </span>
          ) : (
            <>
              {selected?.flag && <span aria-hidden="true">{selected.flag}</span>}
              {selected?.label ?? placeholder}
            </>
          )}
        </span>
        <ChevronDown aria-hidden="true" size={24} strokeWidth={3} />
      </button>

      {open && (
        <div className={`job-gh-menu ${menuClassName}`} role="listbox">
          {searchable && (
            <div className="job-gh-search">
              <input
                ref={searchRef}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={searchPlaceholder}
                aria-label={searchPlaceholder}
              />
            </div>
          )}

          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <button
                key={`${option.value}-${option.label}`}
                type="button"
                className={option === selected ? "job-gh-option is-selected" : "job-gh-option"}
                role="option"
                aria-selected={option === selected}
                onClick={() => {
                  setSelected(option);
                  closeMenu();
                }}
              >
                {option.flag && <span aria-hidden="true">{option.flag}</span>}
                <span>{option.label}</span>
              </button>
            ))
          ) : (
            <div className="job-gh-empty">Sin resultados</div>
          )}
        </div>
      )}
    </div>
  );
}

function LocationField() {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const [residenceType, setResidenceType] = useState<"bogota" | "nearby">("bogota");
  const fieldRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const labelId = useId();
  const menuId = useId();
  const residenceTypeLabelId = useId();
  const locationOptions =
    residenceType === "bogota" ? BOGOTA_LOCATION_OPTIONS : NEARBY_LOCATION_OPTIONS;
  const locationLabel =
    residenceType === "bogota" ? "Localidad en Bogotá" : "Municipio cercano a Bogotá";
  const locationPlaceholder =
    residenceType === "bogota" ? "Ej. Suba, Usaquén, Chapinero..." : "Ej. Chía, Cajicá, Cota...";
  const suggestions = useMemo(() => {
    const query = normalizeSearch(value.trim());
    if (!query) return [];

    return locationOptions.filter((location) =>
      normalizeSearch(location).includes(query),
    ).slice(0, 5);
  }, [locationOptions, value]);
  const showSuggestions = focused && suggestions.length > 0;

  useCloseOnOutsideClick(fieldRef, () => setFocused(false));

  const handleResidenceTypeChange = (nextResidenceType: "bogota" | "nearby") => {
    setResidenceType(nextResidenceType);
    setValue("");
    setFocused(false);
    window.requestAnimationFrame(() => inputRef.current?.focus());
  };

  return (
    <div className="job-residence-group">
      <fieldset className="job-choice job-residence-choice" aria-labelledby={residenceTypeLabelId}>
        <legend id={residenceTypeLabelId}>
          ¿Vives en Bogotá?
          <RequiredMark />
        </legend>
        <label>
          <input
            type="radio"
            name="tipo_residencia"
            value="bogota"
            checked={residenceType === "bogota"}
            onChange={() => handleResidenceTypeChange("bogota")}
            required
          />
          <span>Sí, en Bogotá</span>
        </label>
        <label>
          <input
            type="radio"
            name="tipo_residencia"
            value="municipio_cercano"
            checked={residenceType === "nearby"}
            onChange={() => handleResidenceTypeChange("nearby")}
          />
          <span>No, vivo cerca de Bogotá</span>
        </label>
      </fieldset>

      <div
        className={showSuggestions ? "job-gh-field job-gh-field-open" : "job-gh-field"}
        ref={fieldRef}
      >
        <RequiredLabel id={labelId}>{locationLabel}</RequiredLabel>
        <div className="job-combobox-control">
          <input
            ref={inputRef}
            name="residencia"
            type="text"
            autoComplete="address-level2"
            value={value}
            placeholder={locationPlaceholder}
            onChange={(event) => {
              setValue(event.target.value);
              setFocused(true);
            }}
            onFocus={() => setFocused(true)}
            aria-autocomplete="list"
            aria-controls={showSuggestions ? menuId : undefined}
            aria-expanded={showSuggestions}
            aria-labelledby={labelId}
            role="combobox"
            required
          />
          <button
            type="button"
            className="job-combobox-toggle"
            aria-label={showSuggestions ? "Ocultar opciones" : "Mostrar opciones"}
            aria-expanded={showSuggestions}
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => {
              if (showSuggestions) {
                setFocused(false);
                return;
              }

              setFocused(true);
              window.requestAnimationFrame(() => inputRef.current?.focus());
            }}
          >
            <ChevronDown aria-hidden="true" size={22} strokeWidth={2.4} />
          </button>
        </div>
        {showSuggestions && (
          <div className="job-gh-menu job-location-menu" id={menuId} role="listbox">
            {suggestions.map((location, index) => (
              <button
                key={location}
                type="button"
                className={index === 0 ? "job-gh-option is-selected" : "job-gh-option"}
                role="option"
                aria-selected={index === 0}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => {
                  setValue(location);
                  setFocused(false);
                }}
              >
                {location}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function LanguageChecklist() {
  return (
    <fieldset className="job-language-checks">
      <legend>
        <FieldLabel>Idiomas adicionales</FieldLabel>
      </legend>
      <div className="job-language-options">
        {LANGUAGE_OPTIONS.map((language) => (
          <label key={language}>
            <input type="checkbox" name="idiomas" value={language} />
            <span>{language}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function JobApplicationForm() {
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [cvFileName, setCvFileName] = useState("");
  const isSubmitting = submissionStatus === "submitting";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmissionStatus("submitting");
    setSubmissionMessage("");

    try {
      const response = await fetch("/api/job-applications", {
        method: "POST",
        body: new FormData(event.currentTarget),
      });
      const payload = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(payload?.message || "No pudimos enviar la aplicación.");
      }

      setSubmissionStatus("success");
      setSubmissionMessage("Aplicación enviada. Revisaremos tu perfil pronto.");
    } catch (error) {
      setSubmissionStatus("error");
      setSubmissionMessage(
        error instanceof Error
          ? error.message
          : "No pudimos enviar la aplicación. Inténtalo de nuevo.",
      );
    }
  }

  return (
    <form className="job-form" encType="multipart/form-data" onSubmit={handleSubmit}>
      <section className="job-form-section" aria-labelledby="general-info-title">
        <h2 className="visually-hidden" id="general-info-title">
          Información general
        </h2>

        <TextField label="Nombre" name="nombre" autoComplete="name" />
        <TextField label="Correo electrónico" name="correo" type="email" autoComplete="email" />

        <div className="job-phone-row">
          <DropdownField
            label="País"
            name="whatsapp_country_code"
            options={COUNTRY_DIAL_CODES}
            defaultValue="+57"
            menuClassName="job-country-menu"
            searchable
            searchPlaceholder="Buscar país"
            display="countryCode"
          />
          <TextField
            label="Teléfono"
            name="whatsapp"
            type="tel"
            inputMode="tel"
            autoComplete="tel-national"
          />
        </div>

        <TextField
          label="Instrumento que interpreta"
          name="instrumento"
          placeholder="Ej. Piano, violín, guitarra, canto..."
        />

        <div className="job-form-grid">
          <fieldset className="job-choice">
            <legend>
              Experiencia en pedagogía musical
              <RequiredMark />
            </legend>
            <label>
              <input type="radio" name="pedagogia_musical" value="si" required />
              <span>Sí</span>
            </label>
            <label>
              <input type="radio" name="pedagogia_musical" value="no" />
              <span>No</span>
            </label>
          </fieldset>

          <fieldset className="job-choice">
            <legend>
              Experiencia en formación preuniversitaria
              <RequiredMark />
            </legend>
            <label>
              <input type="radio" name="formacion_preuniversitaria" value="si" required />
              <span>Sí</span>
            </label>
            <label>
              <input type="radio" name="formacion_preuniversitaria" value="no" />
              <span>No</span>
            </label>
          </fieldset>
        </div>

        <LocationField />

        <LanguageChecklist />
      </section>

      <section className="job-form-section" aria-labelledby="cv-title">
        <h2 className="visually-hidden" id="cv-title">
          CV
        </h2>
        <label className="job-upload" id="cv-upload">
          <Upload aria-hidden="true" size={30} strokeWidth={2.4} />
          <span>{cvFileName ? "Cambiar CV" : "Subir CV"}</span>
          <small className={cvFileName ? "job-upload-file" : undefined} aria-live="polite">
            {cvFileName || "PDF, DOC o DOCX · máx. 4 MB"}
          </small>
          <input
            name="cv"
            type="file"
            accept=".pdf,.doc,.docx"
            required
            onChange={(event) => {
              setCvFileName(event.currentTarget.files?.[0]?.name ?? "");
            }}
          />
        </label>
      </section>

      {submissionMessage && (
        <p
          className={`job-form-status job-form-status-${submissionStatus}`}
          role={submissionStatus === "error" ? "alert" : "status"}
          aria-live="polite"
        >
          {submissionMessage}
        </p>
      )}

      <button className="job-submit" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Enviar aplicación"}
        {!isSubmitting && <ArrowRight aria-hidden="true" size={22} strokeWidth={2.7} />}
      </button>
    </form>
  );
}
