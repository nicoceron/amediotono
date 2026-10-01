import { ProfesDirectorySkeleton } from "@/components/ProfesDirectorySkeleton";

export default function Loading() {
  return (
    <section
      className="block"
      id="profes-page"
      data-screen-label="Profesores"
    >
      <div className="container">
        <div className="sec-head profes-page-head">
          {/* Not an <h1>: this fallback is streamed into the prerendered HTML of /profes and every profile. */}
          <p className="profes-page-title" aria-hidden="true">Profesores de música a domicilio en Bogotá y virtuales</p>
        </div>

        <ProfesDirectorySkeleton />
      </div>
    </section>
  );
}
