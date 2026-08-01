import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Shipping cost calculation",
  code: "import React, { useMemo } from \"react\";\n\ninterface ShippingStrategy {\n  calculate(weight: number): number;\n}\n\nclass StandardShipping implements ShippingStrategy {\n  calculate(weight: number): number {\n    return 5 + weight * 0.5;\n  }\n}\n\nclass ExpressShipping implements ShippingStrategy {\n  calculate(weight: number): number {\n    return 15 + weight * 1.25;\n  }\n}\n\nclass ShippingService {\n  constructor(private strategy: ShippingStrategy) {}\n\n  getCost(weight: number): number {\n    return this.strategy.calculate(weight);\n  }\n}\n\nfunction ShippingQuote({ shipping }: { shipping: ShippingService }) {\n  return <p>Cost for 8 lb: {shipping.getCost(8).toFixed(2)}</p>;\n}\n\nexport function App() {\n  const shipping = useMemo(() => new ShippingService(new ExpressShipping()), []);\n\n  return (\n    <main>\n      <h1>Shipping Cost Calculation</h1>\n      <ShippingQuote shipping={shipping} />\n    </main>\n  );\n}",
  explanation: "The React example keeps shipping pricing behind a strategy interface, so the UI can ask for a quote without knowing how the cost is computed.",
};
