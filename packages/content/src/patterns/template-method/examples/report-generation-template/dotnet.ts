import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const dotnet: PatternLanguageExample = {
  language: "dotnet",
  title: "Report generation template",
  code: "using System;\nusing Microsoft.Extensions.DependencyInjection;\n\n\npublic abstract class ReportGenerator\n{\n    public void Generate()\n    {\n        CollectData();\n        FormatHeader();\n        RenderBody();\n        FormatFooter();\n    }\n\n\n    protected virtual void CollectData()\n    {\n        Console.WriteLine(\"Collecting data\");\n    }\n\n\n    protected virtual void FormatHeader()\n    {\n        Console.WriteLine(\"Formatting header\");\n    }\n\n\n    protected abstract void RenderBody();\n\n\n    protected virtual void FormatFooter()\n    {\n        Console.WriteLine(\"Formatting footer\");\n    }\n}\n\n\npublic class SalesReportGenerator : ReportGenerator\n{\n    protected override void RenderBody()\n    {\n        Console.WriteLine(\"Rendering sales report body\");\n    }\n}\n\n\npublic class InventoryReportGenerator : ReportGenerator\n{\n    protected override void RenderBody()\n    {\n        Console.WriteLine(\"Rendering inventory report body\");\n    }\n}\n\n\nvar services = new ServiceCollection();\nservices.AddSingleton<SalesReportGenerator>();\n\nvar provider = services.BuildServiceProvider();\nvar generator = provider.GetRequiredService<SalesReportGenerator>();\n\ngenerator.Generate();",
  explanation: "The .NET example resolves a report generator through dependency injection while the base class holds the generation template.",
};
