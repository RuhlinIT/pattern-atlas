import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const dotnet: PatternLanguageExample = {
  language: "dotnet",
  title: "Document export",
  code: "using System;\nusing Microsoft.Extensions.DependencyInjection;\n\npublic interface IDocumentFile\n{\n    void Export();\n}\n\npublic class PdfDocument : IDocumentFile\n{\n    public void Export()\n    {\n        Console.WriteLine(\"Exporting PDF document\");\n    }\n}\n\npublic class CsvDocument : IDocumentFile\n{\n    public void Export()\n    {\n        Console.WriteLine(\"Exporting CSV document\");\n    }\n}\n\npublic abstract class DocumentExporter\n{\n    public abstract IDocumentFile CreateDocument();\n\n    public void RunExport()\n    {\n        var document = CreateDocument();\n        document.Export();\n    }\n}\n\npublic class PdfExporter : DocumentExporter\n{\n    public override IDocumentFile CreateDocument()\n    {\n        return new PdfDocument();\n    }\n}\n\npublic class CsvExporter : DocumentExporter\n{\n    public override IDocumentFile CreateDocument()\n    {\n        return new CsvDocument();\n    }\n}\n\nvar services = new ServiceCollection();\nservices.AddSingleton<DocumentExporter, PdfExporter>();\n\nvar provider = services.BuildServiceProvider();\nvar exporter = provider.GetRequiredService<DocumentExporter>();\nexporter.RunExport();",
  explanation: "The .NET version shows the same factory method pattern with dependency injection, so the export workflow stays stable while the concrete exporter is selected externally.",
};
