import { COURSE_GUIDES } from "@/content/courses";
import type { CourseFamily, CourseGuide } from "@/lib/content-types";
import { COURSES, courseHref, getCourseById, type Course } from "@/lib/courses";
import { TEACHERS, type Teacher } from "@/lib/teachers";

export const COURSE_FAMILY_LABELS: Record<CourseFamily, string> = {
  formacion: "Formación musical",
  teclados: "Teclados",
  voz: "Voz",
  "cuerdas-pulsadas": "Cuerdas pulsadas",
  "cuerdas-frotadas": "Cuerdas frotadas",
  "vientos-madera": "Vientos madera",
  "vientos-metal": "Vientos metal",
  percusion: "Percusión",
};

export const COURSE_FAMILY_ORDER = Object.keys(COURSE_FAMILY_LABELS) as CourseFamily[];

/** Brand accent per instrument family, used as `--ed-accent` on course pages. */
export const COURSE_FAMILY_ACCENTS: Record<CourseFamily, string> = {
  formacion: "var(--orange)",
  teclados: "var(--blue)",
  voz: "var(--pink)",
  "cuerdas-pulsadas": "var(--green)",
  "cuerdas-frotadas": "var(--red)",
  "vientos-madera": "var(--purple)",
  "vientos-metal": "var(--orange)",
  percusion: "var(--pink)",
};

const GUIDE_BY_ID = new Map(COURSE_GUIDES.map((guide) => [guide.id, guide]));

const TEACHERS_BY_COURSE = new Map<string, Teacher[]>();
for (const teacher of TEACHERS) {
  for (const skillId of teacher.skillIds) {
    TEACHERS_BY_COURSE.set(skillId, [...(TEACHERS_BY_COURSE.get(skillId) ?? []), teacher]);
  }
}

export type CoursePage = {
  course: Course;
  guide: CourseGuide;
  teachers: Teacher[];
  path: string;
};

export function teachersForCourse(courseId: string) {
  return TEACHERS_BY_COURSE.get(courseId) ?? [];
}

export function coursePagePath(courseId: string) {
  return `/clases/${courseId}`;
}

/**
 * A course gets its own indexable landing page only when it has a written
 * guide AND at least one profe teaching it. Courses without profes keep
 * linking to the filtered directory so we never publish empty pages.
 */
export const COURSE_PAGES: CoursePage[] = COURSES.flatMap((course) => {
  const guide = GUIDE_BY_ID.get(course.id);
  const teachers = teachersForCourse(course.id);
  if (!guide || teachers.length === 0) return [];
  return [{ course, guide, teachers, path: coursePagePath(course.id) }];
});

const COURSE_PAGE_BY_ID = new Map(COURSE_PAGES.map((page) => [page.course.id, page]));

export const COURSE_PAGE_PATHS = new Map(
  COURSE_PAGES.map((page) => [page.course.id, page.path]),
);

export function getCoursePage(courseId: string) {
  return COURSE_PAGE_BY_ID.get(courseId);
}

/** Best link for a course: its landing page when it exists, else the directory filter. */
export function courseLandingHref(course: Pick<Course, "id" | "label">) {
  return COURSE_PAGE_PATHS.get(course.id) ?? courseHref(course);
}

export function relatedCoursePages(guide: CourseGuide) {
  return guide.relatedIds
    .map((id) => getCoursePage(id))
    .filter((page): page is CoursePage => Boolean(page));
}

export function coursePagesByFamily() {
  return COURSE_FAMILY_ORDER.map((family) => ({
    family,
    label: COURSE_FAMILY_LABELS[family],
    pages: COURSE_PAGES.filter((page) => page.guide.family === family),
  })).filter((group) => group.pages.length > 0);
}

export function courseLabel(courseId: string) {
  return getCourseById(courseId)?.label ?? courseId;
}
