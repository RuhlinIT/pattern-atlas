import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const csharp: PatternLanguageExample = {
  language: "csharp",
  title: "Document export",
  code: "using System;\n\npublic interface IDocumentFile\n{\n    void Export();\n}\n\npublic class PdfDocument : IDocumentFile\n{\n    public void Export()\n    {\n        Console.WriteLine(\"Exporting PDF document\");\n    }\n}\n\npublic class CsvDocument : IDocumentFile\n{\n    public void Export()\n    {\n        Console.WriteLine(\"Exporting CSV document\");\n    }\n}\n\npublic abstract class DocumentExporter\n{\n    public abstract IDocumentFile CreateDocument();\n\n    public void RunExport()\n    {\n        var document = CreateDocument();\n        document.Export();\n    }\n}\n\npublic class PdfExporter : DocumentExporter\n{\n    public override IDocumentFile CreateDocument()\n    {\n        return new PdfDocument();\n    }\n}\n\npublic class CsvExporter : DocumentExporter\n{\n    public override IDocumentFile CreateDocument()\n    {\n        return new CsvDocument();\n    }\n}\n\nDocumentExporter exporter = new PdfExporter();\nexporter.RunExport();",
  explanation: "The C# example keeps the export workflow in the base creator while subclasses decide which concrete document type to instantiate.",
};
