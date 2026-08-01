import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Shipping cost calculation",
  code: "interface ShippingStrategy {\n  calculate(weight: number): number;\n}\n\nclass StandardShipping implements ShippingStrategy {\n  calculate(weight: number): number {\n    return 5 + weight * 0.5;\n  }\n}\n\nclass ExpressShipping implements ShippingStrategy {\n  calculate(weight: number): number {\n    return 15 + weight * 1.25;\n  }\n}\n\nclass ShippingService {\n  constructor(private strategy: ShippingStrategy) {}\n\n  getCost(weight: number): number {\n    return this.strategy.calculate(weight);\n  }\n}\n\nconst shipping = new ShippingService(new ExpressShipping());\nconsole.log(shipping.getCost(8));",
  explanation: "Shipping rules are isolated behind a common interface so pricing behavior can change by delivery mode without rewriting the service.",
};
