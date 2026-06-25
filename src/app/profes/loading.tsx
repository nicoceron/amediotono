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
          <h1>Profes y tutores de música</h1>
        </div>

        <ProfesDirectorySkeleton />
      </div>
    </section>
  );
}
