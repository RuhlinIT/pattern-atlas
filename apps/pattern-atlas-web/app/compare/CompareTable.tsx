import Link from "next/link";
import type { CompareRow, CompareTableProps } from "./compare.types";
import { groupCompareRows } from "./compare.utils";

function renderValue(value: CompareRow["values"][string]) {
  if (Array.isArray(value)) {
    if (value.length === 0) {
      return <span className="compare-table__empty">—</span>;
    }

    return (
      <ul className="compare-table__list" role="list">
        {value.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  if (!value) {
    return <span className="compare-table__empty">—</span>;
  }

  return <span>{value}</span>;
}

function renderRow(row: CompareRow, patternSlugs: string[]) {
  return (
    <tr key={row.key}>
      <th scope="row" className="compare-table__row-header">
        {row.label}
      </th>

      {patternSlugs.map((slug) => (
        <td key={slug} className="compare-table__cell">
          {renderValue(row.values[slug] ?? null)}
        </td>
      ))}
    </tr>
  );
}

export function CompareTable({
  patterns,
  rows,
  differencesOnly = false,
  emptyMessage = "Select patterns to compare.",
}: CompareTableProps) {
  if (patterns.length < 2) {
    return (
      <section className="compare-table compare-table--empty" aria-live="polite">
        <h2>Comparison</h2>
        <p>{emptyMessage}</p>
      </section>
    );
  }

  const groupedRows = groupCompareRows(rows);
  const patternSlugs = patterns.map((pattern) => pattern.slug);

  return (
    <section className="compare-table" aria-labelledby="compare-table-title">
      <div className="compare-table__header">
        <div>
          <p className="eyebrow">Analysis</p>
          <h2 id="compare-table-title">Pattern comparison</h2>
          <p className="compare-table__description">
            Reviewing {patterns.length} patterns
            {differencesOnly ? " with identical rows hidden" : ""}.
          </p>
        </div>
      </div>

      <div
        className="compare-table__scroll"
        tabIndex={0}
        aria-label="Scrollable comparison table"
      >
        <table className="compare-table__element">
          <thead>
            <tr>
              <th scope="col" className="compare-table__corner">
                Criteria
              </th>

              {patterns.map((pattern) => (
                <th
                  key={pattern.slug}
                  scope="col"
                  className="compare-table__column-header"
                >
                  <div className="compare-table__pattern-head">
                    <span className="compare-table__pattern-category">
                      {pattern.category}
                    </span>
                    <span className="compare-table__pattern-name">
                      {pattern.name}
                    </span>
                    <Link
                      className="compare-table__pattern-link"
                      href={`/patterns/${pattern.slug}`}
                    >
                      View pattern
                    </Link>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {groupedRows.basics.length > 0 ? (
              <>
                <tr className="compare-table__group-row">
                  <th colSpan={patterns.length + 1}>Basics</th>
                </tr>
                {groupedRows.basics.map((row) => renderRow(row, patternSlugs))}
              </>
            ) : null}

            {groupedRows.decision.length > 0 ? (
              <>
                <tr className="compare-table__group-row">
                  <th colSpan={patterns.length + 1}>Decision factors</th>
                </tr>
                {groupedRows.decision.map((row) => renderRow(row, patternSlugs))}
              </>
            ) : null}

            {groupedRows.practical.length > 0 ? (
              <>
                <tr className="compare-table__group-row">
                  <th colSpan={patterns.length + 1}>Practical fit</th>
                </tr>
                {groupedRows.practical.map((row) => renderRow(row, patternSlugs))}
              </>
            ) : null}
          </tbody>
        </table>
      </div>
    </section>
  );
}