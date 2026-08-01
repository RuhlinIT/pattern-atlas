import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const csharp: PatternLanguageExample = {
  language: "csharp",
  title: "Shipping cost calculation",
  code: "using System;\n\npublic interface IShippingStrategy\n{\n    decimal Calculate(decimal weight);\n}\n\npublic class StandardShipping : IShippingStrategy\n{\n    public decimal Calculate(decimal weight)\n    {\n        return 5m + weight * 0.5m;\n    }\n}\n\npublic class ExpressShipping : IShippingStrategy\n{\n    public decimal Calculate(decimal weight)\n    {\n        return 15m + weight * 1.25m;\n    }\n}\n\npublic class ShippingService\n{\n    private readonly IShippingStrategy _strategy;\n\n    public ShippingService(IShippingStrategy strategy)\n    {\n        _strategy = strategy;\n    }\n\n    public decimal GetCost(decimal weight)\n    {\n        return _strategy.Calculate(weight);\n    }\n}\n\nvar shipping = new ShippingService(new ExpressShipping());\nConsole.WriteLine(shipping.GetCost(8m));",
  explanation: "The C# example isolates shipping rules behind a shared contract, so the delivery mode can change without rewriting the service.",
};
