import Link from "next/link";
import type { ComparePickerProps } from "./compare.types";
import { buildCompareHref } from "./compare.utils";

export function ComparePicker({
  items,
  selectedSlugs,
  maxSelections = 3,
  activeCategory = "All",
  differencesOnly = false,
}: ComparePickerProps) {
  return (
    <section className="compare-picker">
      <div className="compare-picker__header">
        <p className="eyebrow">Choose patterns</p>
        <h2>Select up to {maxSelections} patterns</h2>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => {
          const selected = selectedSlugs.includes(item.slug);
          const nextSelectedSlugs = selected
            ? selectedSlugs.filter((slug) => slug !== item.slug)
            : selectedSlugs.length >= maxSelections
              ? selectedSlugs
              : [...selectedSlugs, item.slug];

          return (
            <Link
              key={item.slug}
              href={buildCompareHref({
                selectedSlugs: nextSelectedSlugs,
                category: activeCategory,
                differencesOnly,
              })}
              aria-pressed={selected}
              className={`px-3 py-2 rounded-md text-sm font-medium border transition-colors ${
                selected
                  ? "bg-white text-black border-[#7dd3fc] hover:bg-slate-50"
                  : "bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700 hover:text-white hover:border-sky-500"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
