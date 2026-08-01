import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Shipping cost calculation",
  code: "interface ShippingStrategy {\n    double calculate(double weight);\n}\n\nclass StandardShipping implements ShippingStrategy {\n    public double calculate(double weight) {\n        return 5 + weight * 0.5;\n    }\n}\n\nclass ExpressShipping implements ShippingStrategy {\n    public double calculate(double weight) {\n        return 15 + weight * 1.25;\n    }\n}\n\nclass ShippingService {\n    private final ShippingStrategy strategy;\n\n    public ShippingService(ShippingStrategy strategy) {\n        this.strategy = strategy;\n    }\n\n    public double getCost(double weight) {\n        return strategy.calculate(weight);\n    }\n}\n\nShippingService shipping = new ShippingService(new ExpressShipping());\nSystem.out.println(shipping.getCost(8));",
  explanation: "The shipping service remains stable while rate calculation varies through interchangeable strategies.",
};
