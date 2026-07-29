"use client";

import Link from "next/link";
import { useMemo } from "react";
import type { ComparePickerProps } from "./compare.types";
import { buildCompareHref } from "./compare.utils";

export function ComparePicker({
  items,
  selectedSlugs,
  maxSelections = 3,
  activeCategory = "All",
  differencesOnly = false,
}: ComparePickerProps) {
  const selectedSet = useMemo(() => new Set(selectedSlugs), [selectedSlugs]);

  return (
    <section className="compare-picker" aria-labelledby="compare-picker-title">
      <div className="compare-picker__header">
        <div>
          <p className="eyebrow">Selection</p>
          <h2 id="compare-picker-title">Choose up to {maxSelections} patterns</h2>
          <p className="compare-picker__description">
            Pick two or three patterns to compare side by side.
          </p>
        </div>

        <div className="compare-picker__actions">
          <Link
            className="button-link button-link--secondary"
            href={buildCompareHref({
              selectedSlugs,
              category: activeCategory,
              differencesOnly: !differencesOnly,
            })}
          >
            {differencesOnly ? "Show all rows" : "Show differences only"}
          </Link>

          <Link className="button-link button-link--ghost" href="/compare">
            Clear selection
          </Link>
        </div>
      </div>

      <fieldset className="compare-picker__fieldset">
        <legend className="compare-picker__legend">
          Available patterns ({items.length})
        </legend>

        <div className="compare-picker__grid">
          {items.map((item) => {
            const isSelected = selectedSet.has(item.slug);
            const selectionLimitReached =
              selectedSlugs.length >= maxSelections && !isSelected;

            const nextSelectedSlugs = isSelected
              ? selectedSlugs.filter((slug) => slug !== item.slug)
              : [...selectedSlugs, item.slug];

            const href = buildCompareHref({
              selectedSlugs: nextSelectedSlugs,
              category: activeCategory,
              differencesOnly,
            });

            return (
              <article
                key={item.slug}
                className={[
                  "compare-picker__card",
                  isSelected ? "is-selected" : "",
                  selectionLimitReached ? "is-disabled" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className="compare-picker__card-top">
                  <span className="compare-picker__category">{item.category}</span>
                  {isSelected ? (
                    <span className="compare-picker__status">Selected</span>
                  ) : null}
                </div>

                <h3 className="compare-picker__name">{item.name}</h3>
                <p className="compare-picker__summary">{item.summary}</p>

                <div className="compare-picker__card-actions">
                  {selectionLimitReached ? (
                    <span className="compare-picker__hint" aria-live="polite">
                      Max {maxSelections} selected
                    </span>
                  ) : (
                    <Link className="button-link button-link--secondary" href={href}>
                      {isSelected ? "Remove" : "Add to compare"}
                    </Link>
                  )}

                  <Link
                    className="button-link button-link--ghost"
                    href={`/patterns/${item.slug}`}
                  >
                    View pattern
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </fieldset>
    </section>
  );
}