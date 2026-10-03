import {useText} from "@/i18n/use-text";
import Image from "next/image";
import Link from "@/i18n/navigation";
import { ChevronRight, Minus, Plus } from "lucide-react";
import { courseLandingHref } from "@/lib/course-pages";
import { MAIN_COURSES, MORE_COURSES, type Course } from "@/lib/courses";
import { TEACHERS } from "@/lib/teachers";
import cloudSeparator from "../../public/hero-cloud-separator.webp";

const COURSE_TEACHER_COUNTS = new Map<string, number>();

for (const teacher of TEACHERS) {
  for (const skillId of teacher.skillIds) {
    COURSE_TEACHER_COUNTS.set(skillId, (COURSE_TEACHER_COUNTS.get(skillId) ?? 0) + 1);
  }
}

function courseCountLabel(course: Course, tx: ReturnType<typeof useText>) {
  const count = COURSE_TEACHER_COUNTS.get(course.id) ?? 0;

  if (count === 0) return "Próximamente";
  return tx.template(count === 1 ? "{p0} profe disponible" : "{p0} profes disponibles", {p0: count});
}

function CourseCard({ course }: { course: Course }) {
  const tx = useText();
  const content = (
    <>
      <span className="course-icon" aria-hidden="true">
        <Image src={course.icon} alt={tx("")} width={64} height={64} />
      </span>
      <div className="course-copy">
        <span className="course-name">{tx(course.label)}</span>
        <span className="course-count">{tx(courseCountLabel(course, tx))}</span>
      </div>
    </>
  );

  // Courses without profes yet aren't linked: there is nothing to show behind them.
  if (!COURSE_TEACHER_COUNTS.get(course.id)) {
    return <div className="course-card course-card-soon">{content}</div>;
  }

  return (
    <Link
      className="course-card"
      href={courseLandingHref(course)}
      prefetch={false}
    >
      {content}
      <ChevronRight className="course-arrow" size={24} strokeWidth={2.4} aria-hidden="true" />
    </Link>
  );
}

export function CursosSection() {
  const tx = useText();
  return (
    <section
      className="block courses-section"
      id="cursos"
      data-screen-label={tx("Cursos")}
      data-scroll-align="center"
      data-scroll-target=".courses-grid"
    >
      <div className="hero-cloud-separator" aria-hidden="true">
        <Image
          src={cloudSeparator}
          alt={tx("")}
          fill
          fetchPriority="low"
          loading="lazy"
          sizes="100vw"
        />
      </div>
      <div className="container">
        <div className="visually-hidden">
          <h2>{tx("Cursos de música disponibles")}</h2>
          <p>
            {tx("Encuentra clases de piano, canto, guitarra, violín, flauta, percusión, teoría musical e iniciación musical con profes de A medio tono.")}</p>
        </div>
        <div className="courses-grid">
          {MAIN_COURSES.map((course) => (
            <CourseCard course={course} key={course.id} />
          ))}
        </div>
        <details className="courses-more">
          <summary>
            <Plus className="courses-more-icon courses-more-icon-plus" size={24} strokeWidth={2.5} aria-hidden="true" />
            <Minus className="courses-more-icon courses-more-icon-minus" size={24} strokeWidth={2.5} aria-hidden="true" />
            {tx("Ver más cursos")}</summary>
          <div className="courses-grid courses-grid-extra">
            {MORE_COURSES.map((course) => (
              <CourseCard course={course} key={course.id} />
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
