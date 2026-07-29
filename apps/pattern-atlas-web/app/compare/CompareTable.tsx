"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
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

function MotionRow({
  row,
  patternSlugs,
}: {
  row: CompareRow;
  patternSlugs: string[];
}) {
  return (
    <motion.tr
      layout={false}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.16, ease: "easeOut" }}
    >
      <th scope="row" className="compare-table__row-header">
        {row.label}
      </th>

      {patternSlugs.map((slug) => (
        <td key={slug} className="compare-table__cell">
          {renderValue(row.values[slug] ?? null)}
        </td>
      ))}
    </motion.tr>
  );
}

// function renderRow(row: CompareRow, patternSlugs: string[]) {
//   return (
//     <tr key={row.key}>
//       <th scope="row" className="compare-table__row-header">
//         {row.label}
//       </th>

//       {patternSlugs.map((slug) => (
//         <td key={slug} className="compare-table__cell">
//           {renderValue(row.values[slug] ?? null)}
//         </td>
//       ))}
//     </tr>
//   );
// }

export function CompareTable({
  patterns,
  rows,
  differencesOnly = false,
  emptyMessage = "Select patterns to compare.",
}: CompareTableProps) {
  if (patterns.length < 2) {
    return (
      <motion.section
        className="compare-table compare-table--empty"
        aria-live="polite"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <h2>Comparison</h2>
        <p>{emptyMessage}</p>
      </motion.section>
    );
  }

  const groupedRows = groupCompareRows(rows);
  const patternSlugs = patterns.map((pattern) => pattern.slug);

  return (
    <motion.section className="compare-table" aria-labelledby="compare-table-title"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
    >
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
                <AnimatePresence initial={false}>
                    {groupedRows.basics.map((row) => (
                        <MotionRow key={row.key} row={row} patternSlugs={patternSlugs}/>
                    ))}
                </AnimatePresence>
              </>
            ) : null}

            {groupedRows.decision.length > 0 ? (
              <>
                <tr className="compare-table__group-row">
                  <th colSpan={patterns.length + 1}>Decision factors</th>
                </tr>
                <AnimatePresence initial={false}>
                    {groupedRows.decision.map((row) => (
                    <MotionRow key={row.key} row={row} patternSlugs={patternSlugs}/>
                    ))}
                </AnimatePresence>
              </>
            ) : null}

            {groupedRows.practical.length > 0 ? (
              <>
                <tr className="compare-table__group-row">
                  <th colSpan={patterns.length + 1}>Practical fit</th>
                </tr>
                <AnimatePresence initial={false}>
                    {groupedRows.practical.map((row) => (
                        <MotionRow key={row.key} row={row} patternSlugs={patternSlugs}/>
                    ))}
                </AnimatePresence>
              </>
            ) : null}
          </tbody>
        </table>
      </div>
    </motion.section>
  );
}