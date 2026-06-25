const SKELETON_CARDS = [0, 1, 2];

export function ProfesDirectorySkeleton() {
  return (
    <div
      className="profes-directory profes-directory-skeleton"
      aria-hidden="true"
    >
      <div className="profes-search-panel profes-search-skeleton">
        <div className="profes-filter-row profes-filter-row-main profes-skeleton-filter-row">
          <span className="profes-skeleton-field profes-skeleton-field-course" />
          <span className="profes-skeleton-field" />
          <span className="profes-skeleton-field" />
          <span className="profes-skeleton-field" />
          <span className="profes-skeleton-field profes-skeleton-field-keyword" />
        </div>
      </div>

      <ul className="profe-list profes-skeleton-list">
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
    </div>
  );
}
