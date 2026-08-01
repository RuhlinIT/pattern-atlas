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
        className="compare-summary"
        aria-labelledby="compare-summary-title"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <div className="compare-summary__header">
          <div>
            <p className="eyebrow">Current selection</p>
            <h2 id="compare-summary-title">No patterns selected yet</h2>
            <p className="compare-summary__description">
              Choose up to {maxSelections} patterns to unlock side-by-side comparison.
            </p>
          </div>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      className="compare-summary"
      aria-labelledby="compare-summary-title"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      layout
    >
      <div className="compare-summary__header">
        <div>
          <p className="eyebrow">Current selection</p>
          <h2 id="compare-summary-title">
            {patterns.length} of {maxSelections} selected
          </h2>
          <p className="compare-summary__description">
            {patterns.length < 2
              ? "Select at least one more pattern to compare them side by side."
              : "You can now review the differences across the comparison table below."}
          </p>
        </div>

        <div className="compare-summary__actions">
          <Link className="button-link button-link--ghost" href="/compare">
            Clear all
          </Link>
        </div>
      </div>

      <motion.ul className="compare-summary__list" role="list" layout>
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
                <div className="compare-summary__chip">
                  <div className="compare-summary__chip-content">
                    <span className="compare-summary__chip-name">{pattern.name}</span>
                    <span className="compare-summary__chip-meta">{pattern.category}</span>
                  </div>

                  <div className="compare-summary__chip-actions">
                    <Link
                      className="compare-summary__chip-link"
                      href={`/patterns/${pattern.slug}`}
                    >
                      View
                    </Link>

                    <Link
                      className="compare-summary__chip-remove"
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