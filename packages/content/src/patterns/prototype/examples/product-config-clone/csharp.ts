import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const csharp: PatternLanguageExample = {
  language: "csharp",
  title: "Product config clone",
  code: "using System;\nusing System.Collections.Generic;\n\n\npublic interface IProductPrototype\n{\n    IProductPrototype Clone();\n    string Summary();\n}\n\n\npublic class ProductConfig : IProductPrototype\n{\n    public string Name { get; set; }\n    public int Price { get; set; }\n    public List<string> Options { get; set; }\n\n\n    public ProductConfig(string name, int price, List<string> options)\n    {\n        Name = name;\n        Price = price;\n        Options = options;\n    }\n\n\n    public IProductPrototype Clone()\n    {\n        return new ProductConfig(Name, Price, new List<string>(Options));\n    }\n\n\n    public string Summary()\n    {\n        return \"${Name} at ${Price}: ${string.Join(\", \", Options)}\";\n    }\n}\n\n\nvar baseProduct = new ProductConfig(\"Starter Pack\", 49, new List<string> { \"Basic Support\", \"Email Access\" });\nvar premiumProduct = (ProductConfig)baseProduct.Clone();\npremiumProduct.Name = \"Premium Pack\";\npremiumProduct.Price = 99;\npremiumProduct.Options.Add(\"Priority Support\");\n\n\nConsole.WriteLine(baseProduct.Summary());\nConsole.WriteLine(premiumProduct.Summary());",
  explanation: "The C# prototype pattern lets the commerce system duplicate a product configuration and then update the clone for a new pricing tier.",
};
