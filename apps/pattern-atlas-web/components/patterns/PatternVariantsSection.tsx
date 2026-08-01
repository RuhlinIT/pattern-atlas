"use client";

import { useMemo, useState } from "react";
import type { PatternRecord } from "@atlas-patterns/schemas";
import { PatternVariantCard } from "./PatternVariantCard";

type VariantLayer = "frontend" | "backend" | "integration";

export function PatternVariantsSection({ pattern }: { pattern: PatternRecord }) {
  const variants = pattern.variants ?? [];

  const groupedVariants = useMemo(() => {
    return {
      frontend: variants.filter((variant) => variant.layer === "frontend"),
      backend: variants.filter((variant) => variant.layer === "backend"),
      integration: variants.filter((variant) => variant.layer === "integration"),
    };
  }, [variants]);

  const initialLayer: VariantLayer =
    groupedVariants.frontend.length > 0
      ? "frontend"
      : groupedVariants.backend.length > 0
        ? "backend"
        : "integration";

  const [activeLayer, setActiveLayer] = useState<VariantLayer>(initialLayer);
  const activeVariants = groupedVariants[activeLayer];
  const [activeVariantSlug, setActiveVariantSlug] = useState(
    activeVariants[0]?.slug ?? "",
  );

  const activeVariant =
    activeVariants.find((variant) => variant.slug === activeVariantSlug) ??
    activeVariants[0];

  function handleLayerChange(nextLayer: VariantLayer) {
    setActiveLayer(nextLayer);
    const nextFirstVariant = groupedVariants[nextLayer][0];
    setActiveVariantSlug(nextFirstVariant?.slug ?? "");
  }

  function handleVariantChange(nextVariantSlug: string) {
    setActiveVariantSlug(nextVariantSlug);
  }

  if (!variants.length) {
    return null;
  }

  return (
    <section className="space-y-4">
      <div
        role="tablist"
        aria-label="Variant layers"
        className="flex flex-wrap gap-2 border-b border-slate-700"
      >
        {(["frontend", "backend", "integration"] as const).map((layer) => {
          const isActive = activeLayer === layer;
          const count = groupedVariants[layer].length;

          if (count === 0) {
            return null;
          }

          return (
            <button
              key={layer}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => handleLayerChange(layer)}
              className={[
                "relative -mb-px rounded-t-lg border px-4 py-2 text-sm transition-all",
                isActive
                  ? "border-sky-400 border-b-slate-950 bg-slate-950 text-sky-400 shadow-sm"
                  : "border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500 hover:bg-slate-800 hover:text-slate-100",
              ].join(" ")}
            >
              {layer} ({count})
            </button>
          );
        })}
      </div>

      {activeVariants.length > 1 ? (
        <div
          role="tablist"
          aria-label="Variants"
          className="flex flex-wrap gap-2"
        >
          {activeVariants.map((variant) => {
            const isActive = variant.slug === activeVariant?.slug;

            return (
              <button
                key={variant.slug}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleVariantChange(variant.slug)}
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