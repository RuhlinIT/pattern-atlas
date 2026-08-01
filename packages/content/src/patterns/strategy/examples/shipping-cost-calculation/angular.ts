import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Shipping cost calculation",
  code: "import { Injectable } from '@angular/core';\n\n\nabstract class ShippingStrategy {\n  abstract calculate(weight: number): number;\n}\n\n\n@Injectable({ providedIn: 'root' })\nclass StandardShipping extends ShippingStrategy {\n  calculate(weight: number): number {\n    return 5 + weight * 0.5;\n  }\n}\n\n\n@Injectable({ providedIn: 'root' })\nclass ExpressShipping extends ShippingStrategy {\n  calculate(weight: number): number {\n    return 15 + weight * 1.25;\n  }\n}\n\n\n@Injectable({ providedIn: 'root' })\nclass ShippingService {\n  private strategy: ShippingStrategy;\n\n\n  constructor(\n    private standardShipping: StandardShipping,\n    private expressShipping: ExpressShipping,\n  ) {\n    this.strategy = this.expressShipping;\n  }\n\n\n  setStrategy(method: 'standard' | 'express'): void {\n    this.strategy =\n      method === 'standard' ? this.standardShipping : this.expressShipping;\n  }\n\n\n  getCost(weight: number): number {\n    return this.strategy.calculate(weight);\n  }\n}",
  explanation: "The Angular service acts as the strategy context, while injectable shipping strategies provide interchangeable pricing behavior selected at runtime.",
};
