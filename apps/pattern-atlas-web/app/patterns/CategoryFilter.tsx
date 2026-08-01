"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

type CategoryFilterProps = {
  categories: string[];
  activeCategory: string;
};

function normalizeCategoryKey(category: string) {
  return category.toLowerCase();
}

function formatCategoryLabel(category: string) {
  const lower = category.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

export function CategoryFilter({
  categories,
  activeCategory,
}: CategoryFilterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function setCategory(category: string) {
    const params = new URLSearchParams(searchParams.toString());
    const key = normalizeCategoryKey(category);

    if (key === "all") {
      params.delete("category");
    } else {
      params.set("category", key);
    }

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname);
  }

  const normalizedActiveCategory = normalizeCategoryKey(activeCategory);

  return (
    <div className="filter-row" aria-label="Filter patterns by category">
      <button
        type="button"
        className={
          normalizedActiveCategory === "all"
            ? "filter-chip active"
            : "filter-chip"
        }
        onClick={() => setCategory("All")}
      >
        All
      </button>

      {Array.from(new Set(categories.map(normalizeCategoryKey))).map(
        (category) => (
          <button
            key={category}
            type="button"
            className={
              normalizedActiveCategory === category
                ? "filter-chip active"
                : "filter-chip"
            }
            onClick={() => setCategory(category)}
          >
            {formatCategoryLabel(category)}
          </button>
        ),
      )}
    </div>
  );
}