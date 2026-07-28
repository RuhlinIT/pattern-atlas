"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

type CategoryFilterProps = {
  categories: string[];
  activeCategory: string;
};

export function CategoryFilter({ categories, activeCategory }: CategoryFilterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function setCategory(category: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (category === "All") {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname);
  }

  return (
    <div className="filter-row" aria-label="Filter patterns by category">
      <button
        type="button"
        className={activeCategory === "All" ? "filter-chip active" : "filter-chip"}
        onClick={() => setCategory("All")}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={activeCategory === category ? "filter-chip active" : "filter-chip"}
          onClick={() => setCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}