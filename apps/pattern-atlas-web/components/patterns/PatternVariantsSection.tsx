"use client";

import { useMemo, useState } from "react";
import type { PatternRecord, PatternStackArea } from "@atlas-patterns/schemas";
import { PatternVariantCard } from "./PatternVariantCard";

type VariantStackArea = "all" | PatternStackArea;

const STACK_AREA_ORDER: readonly PatternStackArea[] = [
  "frontend",
  "backend",
  "integration",
  "devops",
  "cloud",
  "fullstack",
];

export function PatternVariantsSection({ pattern }: { pattern: PatternRecord }) {
  const variants = useMemo(() => pattern.variants ?? [], [pattern.variants]);

  const groupedVariants = useMemo(
    () => ({
      frontend: variants.filter((variant) => variant.stackArea === "frontend"),
      backend: variants.filter((variant) => variant.stackArea === "backend"),
      integration: variants.filter((variant) => variant.stackArea === "integration"),
      devops: variants.filter((variant) => variant.stackArea === "devops"),
      cloud: variants.filter((variant) => variant.stackArea === "cloud"),
      fullstack: variants.filter((variant) => variant.stackArea === "fullstack"),
    }),
    [variants],
  );

  const initialStackArea = useMemo<VariantStackArea>(() => {
    return STACK_AREA_ORDER.find((area) => groupedVariants[area].length > 0) ?? "all";
  }, [groupedVariants]);

  const [activeStackArea, setActiveStackArea] = useState<VariantStackArea>(initialStackArea);
  const [activeVariantSlug, setActiveVariantSlug] = useState("");

  const visibleVariants = useMemo(() => {
    if (activeStackArea === "all") return variants;
    return groupedVariants[activeStackArea];
  }, [activeStackArea, groupedVariants, variants]);

  const activeVariant =
    visibleVariants.find((variant) => variant.slug === activeVariantSlug) ??
    visibleVariants[0] ??
    null;

  function handleStackAreaChange(nextArea: VariantStackArea) {
    setActiveStackArea(nextArea);
    const nextVariants = nextArea === "all" ? variants : groupedVariants[nextArea];
    setActiveVariantSlug(nextVariants[0]?.slug ?? "");
  }

  if (!variants.length) {
    return null;
  }

  return (
    <section className="space-y-4">
      <div
        role="tablist"
        aria-label="Variant stack areas"
        className="flex flex-wrap gap-2 border-b border-slate-700"
      >
        {STACK_AREA_ORDER.map((area) => {
          const isActive = activeStackArea === area;
          const count = groupedVariants[area].length;

          if (count === 0) {
            return null;
          }

          return (
            <button
              key={area}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => handleStackAreaChange(area)}
              className={[
                "relative -mb-px rounded-t-lg border px-4 py-2 text-sm transition-all",
                isActive
                  ? "border-sky-400 border-b-slate-950 bg-slate-950 text-sky-400 shadow-sm"
                  : "border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500 hover:bg-slate-800 hover:text-slate-100",
              ].join(" ")}
            >
              {area} ({count})
            </button>
          );
        })}

        <button
          type="button"
          role="tab"
          aria-selected={activeStackArea === "all"}
          onClick={() => handleStackAreaChange("all")}
          className={[
            "relative -mb-px rounded-t-lg border px-4 py-2 text-sm transition-all",
            activeStackArea === "all"
              ? "border-sky-400 border-b-slate-950 bg-slate-950 text-sky-400 shadow-sm"
              : "border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500 hover:bg-slate-800 hover:text-slate-100",
          ].join(" ")}
        >
          all ({variants.length})
        </button>
      </div>

      {visibleVariants.length > 1 ? (
        <div role="tablist" aria-label="Variants" className="flex flex-wrap gap-2">
          {visibleVariants.map((variant) => {
            const isActive = variant.slug === activeVariant?.slug;

            return (
              <button
                key={variant.slug}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveVariantSlug(variant.slug)}
                className={[
                  "rounded-lg border px-3 py-2 text-sm transition-all",
                  isActive
                    ? "border-sky-400 bg-slate-950 text-sky-400 shadow-sm"
                    : "border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500 hover:bg-slate-800 hover:text-slate-100",
                ].join(" ")}
              >
                {variant.title}
              </button>
            );
          })}
        </div>
      ) : null}

      {activeVariant ? <PatternVariantCard variant={activeVariant} /> : null}
    </section>
  );
}