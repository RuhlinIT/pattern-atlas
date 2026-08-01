import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Frontend consumer of shared adapter output",
  code: "function OrderSummary({ order }: { order: FrontendOrderViewModel }) {\n  return (\n    <div>\n      <strong>{order.id}</strong>\n      <span>{order.total}</span>\n      <span>{order.itemCount} items</span>\n    </div>\n  );\n}",
  explanation:
    "The UI reads a stable model regardless of how the backend structures its DTOs.",
};