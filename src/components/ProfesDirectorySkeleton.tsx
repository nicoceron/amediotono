import { TeacherCard } from "@/components/TeacherCard";
import type { Teacher } from "@/lib/teachers";

const SKELETON_CARDS = [0, 1, 2];

function SkeletonCards() {
  return (
    <ul className="profe-list profes-skeleton-list" aria-hidden="true">
      {SKELETON_CARDS.map((card) => (
        <li className="profe-card-wrap" key={card}>
          <article className="profe-card profe-card-skeleton">
            <div className="profe-card-photo profes-skeleton-photo" />

            <div className="profe-card-body">
              <div className="profe-card-head">
                <span className="profes-skeleton-line profes-skeleton-line-title" />
              </div>

              <div className="profe-card-meta profes-skeleton-meta">
                <span className="profes-skeleton-line profes-skeleton-line-meta" />
                <span className="profes-skeleton-line profes-skeleton-line-short" />
              </div>

              <div className="profe-card-bio profes-skeleton-copy">
                <span className="profes-skeleton-line" />
                <span className="profes-skeleton-line" />
                <span className="profes-skeleton-line profes-skeleton-line-short" />
              </div>
            </div>

            <div className="profe-card-actions profes-skeleton-actions">
              <span className="profes-skeleton-button" />
              <span className="profes-skeleton-line" />
              <span className="profes-skeleton-line profes-skeleton-line-short" />
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}

/**
 * Placeholder while the filterable directory loads. When `teachers` is
 * given (the /profes page), the real unfiltered list is rendered instead of
 * skeleton cards, so the prerendered HTML contains every profe for crawlers
 * and AI assistants that do not run JavaScript. The client directory shows
 * the same list in the same order, so nothing jumps on hydration.
 */
export function ProfesDirectorySkeleton({ teachers }: { teachers?: Teacher[] }) {
  return (
    <div className="profes-directory profes-directory-skeleton">
      <div className="profes-search-panel profes-search-skeleton" aria-hidden="true">
        <div className="profes-filter-row profes-filter-row-main profes-skeleton-filter-row">
          <span className="profes-skeleton-field profes-skeleton-field-course" />
          <span className="profes-skeleton-field" />
          <span className="profes-skeleton-field" />
          <span className="profes-skeleton-field" />
          <span className="profes-skeleton-field profes-skeleton-field-keyword" />
        </div>
      </div>

      {teachers?.length ? (
        <ul className="profe-list">
          {teachers.map((teacher) => (
            <TeacherCard teacher={teacher} key={teacher.slug} />
          ))}
        </ul>
      ) : (
        <SkeletonCards />
      )}
    </div>
  );
}
