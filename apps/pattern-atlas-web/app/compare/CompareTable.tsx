"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { CompareRow, CompareTableProps } from "./compare.types";
import { groupCompareRows } from "./compare.utils";

function renderValue(value: CompareRow["values"][string]) {
  if (Array.isArray(value)) {
    if (value.length === 0) {
      return <span className="compare-table__empty text-slate-400">—</span>;
    }

    return (
      <ul className="compare-table__list list-disc space-y-1 pl-5" role="list">
        {value.map((item) => (
          <li key={item} className="text-slate-200">
            {item}
          </li>
        ))}
      </ul>
    );
  }

  if (!value) {
    return <span className="compare-table__empty text-slate-400">—</span>;
  }

  return <span className="text-slate-100">{value}</span>;
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
      className="border-t border-slate-800"
    >
      <th
        scope="row"
        className="compare-table__row-header whitespace-nowrap px-4 py-3 text-left text-sm font-semibold text-slate-100"
      >
        {row.label}
      </th>

      {patternSlugs.map((slug) => (
        <td key={slug} className="compare-table__cell px-4 py-3 align-top text-sm text-slate-200">
          {renderValue(row.values[slug] ?? null)}
        </td>
      ))}
    </motion.tr>
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
      <motion.section
        className="compare-table compare-table--empty rounded-xl border border-slate-700 bg-slate-900/80 p-4 text-slate-100 shadow-sm"
        aria-live="polite"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <h2 className="text-lg font-semibold text-slate-50">Comparison</h2>
        <p className="mt-1 text-sm text-slate-300">{emptyMessage}</p>
      </motion.section>
    );
  }

  const groupedRows = groupCompareRows(rows);
  const patternSlugs = patterns.map((pattern) => pattern.slug);

  return (
    <motion.section
      className="compare-table rounded-xl border border-slate-700 bg-slate-900/80 p-4 text-slate-100 shadow-sm"
      aria-labelledby="compare-table-title"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="compare-table__header flex flex-col gap-2">
        <div>
          <p className="eyebrow text-slate-400">Analysis</p>
          <h2 id="compare-table-title" className="text-lg font-semibold text-slate-50">
            Pattern comparison
          </h2>
          <p className="compare-table__description mt-1 text-sm text-slate-300">
            Reviewing {patterns.length} patterns
            {differencesOnly ? " with identical rows hidden" : ""}.
          </p>
        </div>
      </div>

      <div
        className="compare-table__scroll mt-4 overflow-x-auto rounded-lg border border-slate-800"
        tabIndex={0}
        aria-label="Scrollable comparison table"
      >
        <table className="compare-table__element min-w-full border-collapse bg-slate-950">
          <thead>
            <tr className="border-b border-slate-800">
              <th
                scope="col"
                className="compare-table__corner px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400"
              >
                Criteria
              </th>

              {patterns.map((pattern) => (
                <th
                  key={pattern.slug}
                  scope="col"
                  className="compare-table__column-header px-4 py-3 text-left"
                >
                  <div className="compare-table__pattern-head flex flex-col gap-1">
                    <span className="compare-table__pattern-category text-xs font-medium uppercase tracking-wide text-sky-400">
                      {pattern.category}
                    </span>
                    <span className="compare-table__pattern-name text-sm font-semibold text-slate-100">
                      {pattern.name}
                    </span>
                    <Link
                      className="compare-table__pattern-link text-sm font-medium text-sky-400 hover:text-sky-300"
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
                <tr className="compare-table__group-row bg-slate-800/60">
                  <th
                    colSpan={patterns.length + 1}
                    className="px-4 py-2 text-left text-sm font-semibold text-slate-100"
                  >
                    Basics
                  </th>
                </tr>
                <AnimatePresence initial={false}>
                  {groupedRows.basics.map((row) => (
                    <MotionRow key={row.key} row={row} patternSlugs={patternSlugs} />
                  ))}
                </AnimatePresence>
              </>
            ) : null}

            {groupedRows.decision.length > 0 ? (
              <>
                <tr className="compare-table__group-row bg-slate-800/60">
                  <th
                    colSpan={patterns.length + 1}
                    className="px-4 py-2 text-left text-sm font-semibold text-slate-100"
                  >
                    Decision factors
                  </th>
                </tr>
                <AnimatePresence initial={false}>
                  {groupedRows.decision.map((row) => (
                    <MotionRow key={row.key} row={row} patternSlugs={patternSlugs} />
                  ))}
                </AnimatePresence>
              </>
            ) : null}

            {groupedRows.practical.length > 0 ? (
              <>
                <tr className="compare-table__group-row bg-slate-800/60">
                  <th
                    colSpan={patterns.length + 1}
                    className="px-4 py-2 text-left text-sm font-semibold text-slate-100"
                  >
                    Practical fit
                  </th>
                </tr>
                <AnimatePresence initial={false}>
                  {groupedRows.practical.map((row) => (
                    <MotionRow key={row.key} row={row} patternSlugs={patternSlugs} />
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