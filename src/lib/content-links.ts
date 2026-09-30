import { courseLandingHref } from "@/lib/course-pages";
import { getCourseById } from "@/lib/courses";

const COURSE_LINK_PATTERN = /^\/clases\/([a-z0-9-]+)$/;

/**
 * Course pages only exist while a course has profes, so `/clases/<id>` links in
 * content fall back to the filtered directory instead of ever returning 404.
 */
export function resolveContentHref(href: string) {
  const courseId = href.match(COURSE_LINK_PATTERN)?.[1];
  const course = courseId ? getCourseById(courseId) : undefined;
  return course ? courseLandingHref(course) : href;
}
