"use client";
import {useText} from "@/i18n/use-text";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "@/i18n/navigation";
import {useLocale} from "next-intl";
import {localizedPath} from "@/i18n/routing";
import {useSearchParams} from "next/navigation";
import {
  ArrowRight,
  ChevronDown,
  CircleX,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { whatsappHref } from "@/lib/contact";
import { COURSES, findCoursesByQuery, normalizeSearchText } from "@/lib/courses";
import type { Teacher } from "@/lib/teachers";
import { TeacherCard } from "@/components/TeacherCard";

type FilterState = {
  courseQuery: string;
  keywordQuery: string;
  formatFilter: string;
  languageFilter: string;
  locationFilter: string;
};

type FilterMenuOption = {
  value: string;
  label: string;
};

const CLASS_FORMAT_VALUES = new Set(["Virtual", "A domicilio"]);

function getExactSuggestedCourseValue(value: string, suggestions: FilterMenuOption[]) {
  const normalizedValue = normalizeSearchText(value);
  if (!normalizedValue) return "";

  return (
    suggestions.find((suggestion) => [suggestion.value, suggestion.label].some(label => normalizeSearchText(label) === normalizedValue))
      ?.value ?? ""
  );
}

function FilterMenu({
  label,
  value,
  fallbackLabel,
  options,
  ariaLabel,
  onSelect,
}: {
  label: string;
  value: string;
  fallbackLabel: string;
  options: FilterMenuOption[];
  ariaLabel: string;
  onSelect: (value: string) => void;
}) {
  const tx = useText();
  const activeLabel = options.find((option) => option.value === value)?.label ?? fallbackLabel;

  return (
    <details className="profes-filter-card profes-menu-field">
      <summary className="profes-menu-summary" aria-label={tx(ariaLabel)}>
        <span>
          <span className="profes-filter-label">{tx(label)}</span>
          <span className="profes-menu-value">{tx(activeLabel)}</span>
        </span>
        <ChevronDown
          className="profes-menu-chevron"
          size={20}
          strokeWidth={2.4}
          aria-hidden="true"
        />
      </summary>
      <div
        className="profes-menu-options"
        role="listbox"
        aria-label={tx(ariaLabel)}
        data-lenis-prevent="true"
      >
        {options.map((option) => (
          <button
            type="button"
            className={option.value === value ? "profes-menu-option is-selected" : "profes-menu-option"}
            key={option.value || option.label}
            role="option"
            aria-selected={option.value === value}
            onClick={(event) => {
              onSelect(option.value);
              event.currentTarget.closest("details")?.removeAttribute("open");
            }}
          >
            {tx(option.label)}
          </button>
        ))}
      </div>
    </details>
  );
}

function CourseAutocomplete({
  value,
  suggestions,
  onChange,
  onSelect,
  onClear,
}: {
  value: string;
  suggestions: FilterMenuOption[];
  onChange: (value: string) => void;
  onSelect: (value: string) => void;
  onClear: () => void;
}) {
  const tx = useText();
  const exactSuggestedValue = getExactSuggestedCourseValue(value, suggestions);

  return (
    <div className="profes-filter-card profes-course-field">
      <label className="profes-filter-label" htmlFor="profes-course-input">
        {tx("Quiero aprender")}</label>
      <span className="profes-course-control">
        <input
          id="profes-course-input"
          type="search"
          value={tx(value)}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              if (exactSuggestedValue) {
                onSelect(exactSuggestedValue);
              }
              event.currentTarget.blur();
            }

            if (event.key === "Escape") {
              event.preventDefault();
              event.currentTarget.blur();
            }
          }}
          placeholder={tx("Piano, canto, guitarra...")}
          aria-label={tx("Filtrar profes por curso")}
          aria-controls="profes-course-options"
          aria-haspopup="listbox"
          autoComplete="off"
        />
        {value ? (
          <button
            type="button"
            className="profes-filter-clear"
            onClick={onClear}
            aria-label={tx("Limpiar curso")}
          >
            <CircleX size={18} strokeWidth={2.4} aria-hidden="true" />
          </button>
        ) : (
          <ChevronDown
            className="profes-course-chevron"
            size={20}
            strokeWidth={2.4}
            aria-hidden="true"
          />
        )}
      </span>
      <div
        className="profes-course-options"
        id="profes-course-options"
        role="listbox"
        aria-label={tx("Cursos disponibles")}
        data-lenis-prevent="true"
      >
        {!value && (
          <button
            type="button"
            className="profes-course-option is-selected"
            role="option"
            aria-selected="true"
            onMouseDown={(event) => event.preventDefault()}
            onClick={(event) => {
              onSelect("");
              event.currentTarget.closest(".profes-course-field")?.querySelector("input")?.blur();
            }}
          >
            {tx("Todos los cursos")}</button>
        )}
        {suggestions.map((course) => (
          <button
            type="button"
            className={
              exactSuggestedValue === course.value
                ? "profes-course-option is-selected"
                : "profes-course-option"
            }
            key={course.value}
            role="option"
            aria-selected={exactSuggestedValue === course.value}
            onMouseDown={(event) => event.preventDefault()}
            onClick={(event) => {
              onSelect(course.value);
              event.currentTarget.closest(".profes-course-field")?.querySelector("input")?.blur();
            }}
          >
            {tx(course.label)}
          </button>
        ))}
        {suggestions.length === 0 && value && (
          <span className="profes-course-empty">{tx("No hay cursos con ese nombre")}</span>
        )}
      </div>
    </div>
  );
}

function teacherSearchText(teacher: Teacher, tx: ReturnType<typeof useText>) {
  return normalizeSearchText(
    [
      teacher.name,
      teacher.shortName,
      teacher.role,
      teacher.skills.flatMap((skill) => [skill.label, tx(skill.label), ...skill.aliases]).join(" "),
      teacher.bio,
      tx(teacher.longBio),
      teacher.highlights.join(" "),
      teacher.location,
      (teacher.classFormats ?? []).join(" "),
      (teacher.classLanguages ?? []).join(" "),
    ].join(" "),
  );
}

function matchesCourse(teacher: Teacher, rawQuery: string, tx: ReturnType<typeof useText>) {
  const query = normalizeSearchText(rawQuery);
  if (!query) return true;

  const matchedCourses = findCoursesByQuery(query, tx);
  return matchedCourses.some((course) => teacher.skillIds.includes(course.id));
}

function matchesTeacher(teacher: Teacher, filters: FilterState, tx: ReturnType<typeof useText>) {
  const keyword = normalizeSearchText(filters.keywordQuery);
  const matchesKeyword = !keyword || teacherSearchText(teacher, tx).includes(keyword);
  const matchesFormat =
    !filters.formatFilter || (teacher.classFormats ?? []).some((format) => format === filters.formatFilter);
  const matchesLanguage =
    !filters.languageFilter ||
    (teacher.classLanguages ?? []).some((language) => language === filters.languageFilter);
  const matchesLocation =
    !filters.locationFilter || teacher.location === filters.locationFilter;

  return (
    matchesCourse(teacher, filters.courseQuery, tx) &&
    matchesKeyword &&
    matchesFormat &&
    matchesLanguage &&
    matchesLocation
  );
}

export function ProfesDirectory({ teachers }: { teachers: Teacher[] }) {
  const tx = useText();
  const locale = useLocale();
  const pathname = localizedPath(usePathname(), locale);
  const searchParams = useSearchParams();
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const courseQuery = searchParams.get("curso") ?? "";
  const keywordQuery = searchParams.get("q") ?? "";
  const rawFormatFilter = searchParams.get("formato") ?? "";
  const formatFilter = CLASS_FORMAT_VALUES.has(rawFormatFilter) ? rawFormatFilter : "";
  const languageFilter = searchParams.get("idioma") ?? "";
  const locationFilter = searchParams.get("ubicacion") ?? "";

  useEffect(() => {
    if (!searchParams.has("orden") && (!rawFormatFilter || rawFormatFilter === formatFilter)) return;

    const params = new URLSearchParams(searchParams.toString());
    params.delete("orden");
    if (rawFormatFilter && rawFormatFilter !== formatFilter) {
      params.delete("formato");
    }
    const nextUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname;
    window.history.replaceState(null, "", nextUrl);
  }, [formatFilter, pathname, rawFormatFilter, searchParams]);

  useEffect(() => {
    if (!isMobileFilterOpen) return;

    const scrollY = window.scrollY;
    const { body, documentElement } = document;
    const previousBodyPosition = body.style.position;
    const previousBodyTop = body.style.top;
    const previousBodyLeft = body.style.left;
    const previousBodyRight = body.style.right;
    const previousBodyWidth = body.style.width;
    const previousBodyOverflow = body.style.overflow;
    const previousRootOverflow = documentElement.style.overflow;

    documentElement.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";

    return () => {
      documentElement.style.overflow = previousRootOverflow;
      body.style.overflow = previousBodyOverflow;
      body.style.position = previousBodyPosition;
      body.style.top = previousBodyTop;
      body.style.left = previousBodyLeft;
      body.style.right = previousBodyRight;
      body.style.width = previousBodyWidth;
      window.scrollTo(0, scrollY);
    };
  }, [isMobileFilterOpen]);

  const formatOptions = useMemo(
    () =>
      Array.from(new Set(teachers.flatMap((teacher) => teacher.classFormats ?? []))).sort((a, b) =>
        a.localeCompare(b, locale),
      ),
    [teachers, locale],
  );
  const languageOptions = useMemo(
    () =>
      Array.from(new Set(teachers.flatMap((teacher) => teacher.classLanguages ?? []))).sort(
        (a, b) => a.localeCompare(b, locale),
      ),
    [teachers, locale],
  );
  const locationOptions = useMemo(
    () =>
      Array.from(new Set(teachers.map((teacher) => teacher.location).filter(Boolean))).sort(
        (a, b) => a.localeCompare(b, locale),
      ),
    [teachers, locale],
  );
  const courseSuggestions = useMemo(
    () =>
      (courseQuery ? findCoursesByQuery(courseQuery, tx) : COURSES).map((course) => ({
        value: course.label,
        label: tx(course.label),
      })),
    [courseQuery, tx],
  );
  const formatMenuOptions = useMemo(
    () => [
      { value: "", label: "Cualquier formato" },
      ...formatOptions.map((format) => ({ value: format, label: format })),
    ],
    [formatOptions],
  );
  const locationMenuOptions = useMemo(
    () => [
      { value: "", label: "Cualquier ubicación" },
      ...locationOptions.map((location) => ({ value: location, label: location })),
    ],
    [locationOptions],
  );
  const languageMenuOptions = useMemo(
    () => [
      { value: "", label: "Cualquier idioma" },
      ...languageOptions.map((language) => ({ value: language, label: language })),
    ],
    [languageOptions],
  );

  const filters = useMemo(
    () => ({
      courseQuery,
      keywordQuery,
      formatFilter,
      languageFilter,
      locationFilter,
    }),
    [courseQuery, keywordQuery, formatFilter, languageFilter, locationFilter],
  );

  const filteredTeachers = useMemo(
    () => teachers.filter((teacher) => matchesTeacher(teacher, filters, tx)),
    [teachers, filters, tx],
  );
  const requestedCourse = courseQuery.trim() || "la clase que estás buscando";
  const emptyContactHref = whatsappHref(
    tx.template("¡Hola! Estoy buscando profe para {p0}. ¿Me pueden ayudar?", {p0: tx(requestedCourse)}),
  );
  const hasActiveFilters =
    Boolean(courseQuery.trim()) ||
    Boolean(keywordQuery.trim()) ||
    Boolean(formatFilter) ||
    Boolean(languageFilter) ||
    Boolean(locationFilter);
  const mobileFilterCount = [
    keywordQuery.trim(),
    formatFilter,
    locationFilter,
    languageFilter,
  ].filter(Boolean).length;

  const updateFilters = (updates: Partial<FilterState>) => {
    const currentParams = new URLSearchParams(
      typeof window === "undefined" ? searchParams.toString() : window.location.search,
    );
    const next = {
      courseQuery: currentParams.get("curso") ?? courseQuery,
      keywordQuery: currentParams.get("q") ?? keywordQuery,
      formatFilter: currentParams.get("formato") ?? formatFilter,
      languageFilter: currentParams.get("idioma") ?? languageFilter,
      locationFilter: currentParams.get("ubicacion") ?? locationFilter,
      ...updates,
    };

    const params = new URLSearchParams();
    const nextParams = {
      curso: next.courseQuery,
      q: next.keywordQuery,
      formato: next.formatFilter,
      idioma: next.languageFilter,
      ubicacion: next.locationFilter,
    };

    for (const [key, value] of Object.entries(nextParams)) {
      if (value.trim()) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    }

    const nextUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname;
    window.history.replaceState(null, "", nextUrl);
  };

  const clearFilters = () => {
    updateFilters({
      courseQuery: "",
      keywordQuery: "",
      formatFilter: "",
      languageFilter: "",
      locationFilter: "",
    });
  };
  const clearMobileSheetFilters = () => {
    updateFilters({
      keywordQuery: "",
      formatFilter: "",
      languageFilter: "",
      locationFilter: "",
    });
  };
  const closeMobileFilterSheet = (element: HTMLElement) => {
    element.closest(".profes-mobile-filters")?.removeAttribute("open");
    setIsMobileFilterOpen(false);
  };

  return (
    <div className="profes-directory">
      <form className="profes-search-panel" role="search" onSubmit={(event) => event.preventDefault()}>
        <div
          className={
            mobileFilterCount > 0
              ? "profes-filter-row profes-filter-row-main has-mobile-filter-count"
              : "profes-filter-row profes-filter-row-main"
          }
        >
          <CourseAutocomplete
            value={courseQuery}
            suggestions={courseSuggestions}
            onChange={(value) => updateFilters({ courseQuery: value })}
            onSelect={(value) => updateFilters({ courseQuery: value })}
            onClear={() => updateFilters({ courseQuery: "" })}
          />

          <details
            className="profes-mobile-filters"
            onToggle={(event) => setIsMobileFilterOpen(event.currentTarget.open)}
          >
            <summary
              className="profes-mobile-filter-summary"
              aria-label={
                tx(mobileFilterCount > 0
                  ? tx.template("Abrir filtros, {p0} activos", {p0: tx(mobileFilterCount)})
                  : "Abrir filtros")
              }
            >
              <span>
                <SlidersHorizontal size={18} strokeWidth={2.4} aria-hidden="true" />
                {mobileFilterCount > 0 && (
                  <span className="profes-mobile-filter-count">{tx(mobileFilterCount)}</span>
                )}
              </span>
              <ChevronDown
                className="profes-mobile-filter-chevron"
                size={20}
                strokeWidth={2.4}
                aria-hidden="true"
              />
            </summary>
            <div className="profes-mobile-filter-panel" data-lenis-prevent="true">
              <div className="profes-mobile-filter-sheet-head">
                <button
                  type="button"
                  className="profes-mobile-filter-sheet-clear"
                  onClick={clearMobileSheetFilters}
                  disabled={mobileFilterCount === 0}
                >
                  {tx("Limpiar")}</button>
                <strong className="profes-mobile-filter-sheet-title">{tx("Filtros")}</strong>
                <button
                  type="button"
                  className="profes-mobile-filter-sheet-close"
                  onClick={(event) => closeMobileFilterSheet(event.currentTarget)}
                  aria-label={tx("Cerrar filtros")}
                >
                  <X size={28} strokeWidth={2.6} aria-hidden="true" />
                </button>
              </div>

              <div className="profes-mobile-filter-sheet-body" data-lenis-prevent="true">
                <label className="profes-keyword-field profes-mobile-sheet-keyword">
                  <Search size={18} strokeWidth={2.4} aria-hidden="true" />
                  <input
                    type="search"
                    value={keywordQuery}
                    onChange={(event) => updateFilters({ keywordQuery: event.target.value })}
                    placeholder={tx("Buscar profe")}
                    aria-label={tx("Buscar por nombre o palabra clave")}
                  />
                  {keywordQuery && (
                    <button
                      type="button"
                      className="profes-filter-clear"
                      onClick={() => updateFilters({ keywordQuery: "" })}
                      aria-label={tx("Limpiar búsqueda")}
                    >
                      <CircleX size={18} strokeWidth={2.4} aria-hidden="true" />
                    </button>
                  )}
                </label>

                <FilterMenu
                  label="Formato"
                  value={formatFilter}
                  fallbackLabel="Cualquier formato"
                  options={formatMenuOptions}
                  ariaLabel="Filtrar por formato de clase"
                  onSelect={(value) => updateFilters({ formatFilter: value })}
                />

                <FilterMenu
                  label="Ubicación"
                  value={locationFilter}
                  fallbackLabel="Cualquier ubicación"
                  options={locationMenuOptions}
                  ariaLabel="Filtrar por ubicación"
                  onSelect={(value) => updateFilters({ locationFilter: value })}
                />

                <FilterMenu
                  label="Idioma"
                  value={languageFilter}
                  fallbackLabel="Cualquier idioma"
                  options={languageMenuOptions}
                  ariaLabel="Filtrar por idioma de clase"
                  onSelect={(value) => updateFilters({ languageFilter: value })}
                />
              </div>

              <div className="profes-mobile-filter-sheet-foot">
                <button
                  type="button"
                  className="profes-mobile-filter-sheet-submit"
                  onClick={(event) => closeMobileFilterSheet(event.currentTarget)}
                >
                  {tx("Ver ")}{tx(filteredTeachers.length)} {tx(" profes")}</button>
              </div>
            </div>
          </details>

          <div className="profes-desktop-filter">
            <FilterMenu
              label="Formato"
              value={formatFilter}
              fallbackLabel="Cualquier formato"
              options={formatMenuOptions}
              ariaLabel="Filtrar por formato de clase"
              onSelect={(value) => updateFilters({ formatFilter: value })}
            />
          </div>

          <div className="profes-desktop-filter">
            <FilterMenu
              label="Ubicación"
              value={locationFilter}
              fallbackLabel="Cualquier ubicación"
              options={locationMenuOptions}
              ariaLabel="Filtrar por ubicación"
              onSelect={(value) => updateFilters({ locationFilter: value })}
            />
          </div>

          <div className="profes-desktop-filter">
            <FilterMenu
              label="Idioma"
              value={languageFilter}
              fallbackLabel="Cualquier idioma"
              options={languageMenuOptions}
              ariaLabel="Filtrar por idioma de clase"
              onSelect={(value) => updateFilters({ languageFilter: value })}
            />
          </div>

          <div className="profes-desktop-keyword">
            <label className="profes-keyword-field">
              <Search size={18} strokeWidth={2.4} aria-hidden="true" />
              <input
                type="search"
                value={keywordQuery}
                onChange={(event) => updateFilters({ keywordQuery: event.target.value })}
                placeholder={tx("Buscar profe")}
                aria-label={tx("Buscar por nombre o palabra clave")}
              />
              {keywordQuery && (
                <button
                  type="button"
                  className="profes-filter-clear"
                  onClick={() => updateFilters({ keywordQuery: "" })}
                  aria-label={tx("Limpiar búsqueda")}
                >
                  <CircleX size={18} strokeWidth={2.4} aria-hidden="true" />
                </button>
              )}
            </label>
          </div>

          <div className="profes-clear-filters-slot">
            {hasActiveFilters && (
              <button
                type="button"
                className="profes-clear-filters-icon"
                onClick={clearFilters}
                aria-label={tx("Limpiar filtros")}
                title={tx("Limpiar filtros")}
              >
                <X size={22} strokeWidth={2.6} aria-hidden="true" />
              </button>
            )}
          </div>
        </div>
      </form>

      {filteredTeachers.length > 0 ? (
        <ul className="profe-list">
          {filteredTeachers.map((teacher) => (
            <TeacherCard teacher={teacher} key={teacher.slug} />
          ))}
        </ul>
      ) : (
        <div className="profes-empty">
          <strong>{tx("Contáctanos para encontrar un profesor")}</strong>
          <p>
            {tx("Aún no tenemos un profe disponible para ")}{tx(requestedCourse)}{tx(". Cuéntanos qué necesitas y buscamos un profesor que pueda ayudarte.")}</p>
          <a href={emptyContactHref} target="_blank" rel="noopener">
            {tx("Contáctanos")}<ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
          </a>
        </div>
      )}
    </div>
  );
}
