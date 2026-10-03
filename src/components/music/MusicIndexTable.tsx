import {useText} from "@/i18n/use-text";
import Link from "@/i18n/navigation";
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
  const tx = useText();
  return (
    <div className={styles.index}>
      <p className={styles.scrollHint}>{tx("Desliza la tabla para ver todos los tipos →")}</p>
      <div className={styles.scroll} role="region" aria-label={tx(label)} tabIndex={0} data-lenis-prevent>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">{tx(rootHeading)}</th>
              {columns.map((column) => <th scope="col" key={column.id}>{tx(column.label)}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <th scope="row">{tx(row.label)}</th>
                {row.cells.map((cell) => (
                  <td key={cell.id}>
                    <Link href={cell.href} prefetch={false} aria-label={tx(cell.name)}>
                      {tx(cell.label)}
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
