"use client";

import { useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type CategoryFilterProps = {
  categories: string[];
  activeCategory: string;
};

function formatCategoryLabel(category: string) {
  const lower = category.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

export function CategoryFilter({
  categories,
  activeCategory,
}: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const tabs = useMemo(() => ["all", ...categories], [categories]);

  function updateCategory(nextCategory: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (nextCategory === "all") {
      params.delete("category");
    } else {
      params.set("category", nextCategory.toLowerCase());
    }

    const query = params.toString();
    router.push(query ? `/patterns?${query}` : "/patterns");
  }

  return (
    <div className="space-y-0">
      <div
        role="tablist"
        aria-label="Pattern categories"
        className="flex flex-wrap gap-2 border-b border-slate-700"
      >
        {tabs.map((category) => {
          const isActive =
            category === "all"
              ? activeCategory === "all"
              : activeCategory === category.toLowerCase();

          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => updateCategory(category)}
              className={[
                "relative -mb-px rounded-t-lg border px-4 py-3 text-sm transition-all",
                isActive
                  ? "border-sky-400 border-b-slate-950 bg-slate-950 text-sky-400 shadow-sm"
                  : "border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500 hover:bg-slate-800 hover:text-slate-100",
              ].join(" ")}
            >
              {category === "all" ? "All" : formatCategoryLabel(category)}
            </button>
          );
        })}
      </div>
    </div>
  );
}