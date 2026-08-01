import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const csharp: PatternLanguageExample = {
  language: "csharp",
  title: "Report generation template",
  code: "using System;\n\n\npublic abstract class ReportGenerator\n{\n    public void Generate()\n    {\n        CollectData();\n        FormatHeader();\n        RenderBody();\n        FormatFooter();\n    }\n\n\n    protected virtual void CollectData()\n    {\n        Console.WriteLine(\"Collecting data\");\n    }\n\n\n    protected virtual void FormatHeader()\n    {\n        Console.WriteLine(\"Formatting header\");\n    }\n\n\n    protected abstract void RenderBody();\n\n\n    protected virtual void FormatFooter()\n    {\n        Console.WriteLine(\"Formatting footer\");\n    }\n}\n\n\npublic class SalesReportGenerator : ReportGenerator\n{\n    protected override void RenderBody()\n    {\n        Console.WriteLine(\"Rendering sales report body\");\n    }\n}\n\n\npublic class InventoryReportGenerator : ReportGenerator\n{\n    protected override void RenderBody()\n    {\n        Console.WriteLine(\"Rendering inventory report body\");\n    }\n}\n\n\nvar sales = new SalesReportGenerator();\nsales.Generate();\n\n\nvar inventory = new InventoryReportGenerator();\ninventory.Generate();",
  explanation: "The C# report generator keeps the report lifecycle fixed and lets subclasses supply the body rendering step.",
};
