"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { CompareSelectedSummaryProps } from "./compare.types";
import { buildCompareHref } from "./compare.utils";

export function CompareSelectedSummary({
  patterns,
  category,
  differencesOnly = false,
  maxSelections = 3,
}: CompareSelectedSummaryProps) {
  if (patterns.length === 0) {
    return (
      <motion.section
        className="compare-summary rounded-xl border border-slate-700 bg-slate-900/80 p-4 text-slate-100 shadow-sm"
        aria-labelledby="compare-summary-title"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <div className="compare-summary__header">
          <div>
            <p className="eyebrow text-slate-400">Current selection</p>
            <h2 id="compare-summary-title" className="text-lg font-semibold text-slate-50">
              No patterns selected yet
            </h2>
            <p className="compare-summary__description mt-1 text-sm text-slate-300">
              Choose up to {maxSelections} patterns to unlock side-by-side comparison.
            </p>
          </div>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      className="compare-summary rounded-xl border border-slate-700 bg-slate-900/80 p-4 text-slate-100 shadow-sm"
      aria-labelledby="compare-summary-title"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      layout
    >
      <div className="compare-summary__header flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="eyebrow text-slate-400">Current selection</p>
          <h2 id="compare-summary-title" className="text-lg font-semibold text-slate-50">
            {patterns.length} of {maxSelections} selected
          </h2>
          <p className="compare-summary__description mt-1 text-sm text-slate-300">
            {patterns.length < 2
              ? "Select at least one more pattern to compare them side by side."
              : "You can now review the differences across the comparison table below."}
          </p>
        </div>

        <div className="compare-summary__actions">
          <Link
            className="button-link button-link--ghost inline-flex items-center rounded-md border border-slate-600 px-3 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-800 hover:text-white"
            href="/compare"
          >
            Clear all
          </Link>
        </div>
      </div>

      <motion.ul className="compare-summary__list mt-4 flex flex-wrap gap-2" role="list" layout>
        <AnimatePresence initial={false}>
          {patterns.map((pattern) => {
            const nextSelectedSlugs = patterns
              .filter((item) => item.slug !== pattern.slug)
              .map((item) => item.slug);

            return (
              <motion.li
                key={pattern.slug}
                className="compare-summary__item"
                layout
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                <div className="compare-summary__chip flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2">
                  <div className="compare-summary__chip-content flex flex-col">
                    <span className="compare-summary__chip-name text-sm font-semibold text-slate-50">
                      {pattern.name}
                    </span>
                    <span className="compare-summary__chip-meta text-xs text-slate-400">
                      {pattern.category}
                    </span>
                  </div>

                  <div className="compare-summary__chip-actions flex items-center gap-3">
                    <Link
                      className="compare-summary__chip-link text-sm font-medium text-sky-400 hover:text-sky-300"
                      href={`/patterns/${pattern.slug}`}
                    >
                      View
                    </Link>

                    <Link
                      className="compare-summary__chip-remove text-sm font-medium text-sky-400 hover:text-sky-300"
                      href={buildCompareHref({
                        selectedSlugs: nextSelectedSlugs,
                        differencesOnly,
                        ...(category ? { category } : {}),
                      })}
                      aria-label={`Remove ${pattern.name} from compare selection`}
                    >
                      Remove
                    </Link>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>
    </motion.section>
  );
}