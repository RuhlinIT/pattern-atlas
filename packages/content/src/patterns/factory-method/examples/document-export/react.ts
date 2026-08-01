import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Document export",
  code: "import React, { useMemo } from \"react\";\n\ninterface DocumentFile {\n  export(): void;\n}\n\nclass PdfDocument implements DocumentFile {\n  export(): void {\n    console.log(\"Exporting PDF document\");\n  }\n}\n\nclass CsvDocument implements DocumentFile {\n  export(): void {\n    console.log(\"Exporting CSV document\");\n  }\n}\n\nabstract class DocumentExporter {\n  abstract createDocument(): DocumentFile;\n\n  runExport(): void {\n    const document = this.createDocument();\n    document.export();\n  }\n}\n\nclass PdfExporter extends DocumentExporter {\n  createDocument(): DocumentFile {\n    return new PdfDocument();\n  }\n}\n\nclass CsvExporter extends DocumentExporter {\n  createDocument(): DocumentFile {\n    return new CsvDocument();\n  }\n}\n\nfunction ExportButton({ exporter }: { exporter: DocumentExporter }) {\n  return <button onClick={() => exporter.runExport()}>Run export</button>;\n}\n\nexport function App() {\n  const exporter = useMemo(() => new PdfExporter(), []);\n\n  return (\n    <main>\n      <h1>Document Export</h1>\n      <ExportButton exporter={exporter} />\n    </main>\n  );\n}",
  explanation: "The React example keeps the export workflow in the creator class while the concrete exporter decides which document gets instantiated.",
};
