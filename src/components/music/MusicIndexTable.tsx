import Link from "next/link";
import styles from "./MusicIndexTable.module.css";

type IndexRow = {
  id: string | number;
  label: string;
  cells: { id: string; label: string; href: string; name?: string }[];
};

/** A scrollable dictionary with a pinned note column and full-size link targets. */
export function MusicIndexTable({
  label,
  rootHeading,
  columns,
  rows,
}: {
  label: string;
  rootHeading: string;
  columns: { id: string; label: string }[];
  rows: IndexRow[];
}) {
  return (
    <div className={styles.index}>
      <p className={styles.scrollHint}>Desliza la tabla para ver todos los tipos →</p>
      <div className={styles.scroll} role="region" aria-label={label} tabIndex={0} data-lenis-prevent>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">{rootHeading}</th>
              {columns.map((column) => <th scope="col" key={column.id}>{column.label}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <th scope="row">{row.label}</th>
                {row.cells.map((cell) => (
                  <td key={cell.id}>
                    <Link href={cell.href} prefetch={false} aria-label={cell.name}>
                      {cell.label}
                    </Link>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
