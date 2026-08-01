import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Report generation template",
  code: "import React, { useMemo } from \"react\";\n\n\nabstract class ReportGenerator {\n  generate(): void {\n    this.collectData();\n    this.formatHeader();\n    this.renderBody();\n    this.formatFooter();\n  }\n\n\n  protected collectData(): void {\n    console.log(\"Collecting data\");\n  }\n\n\n  protected formatHeader(): void {\n    console.log(\"Formatting header\");\n  }\n\n\n  protected abstract renderBody(): void;\n\n\n  protected formatFooter(): void {\n    console.log(\"Formatting footer\");\n  }\n}\n\n\nclass SalesReportGenerator extends ReportGenerator {\n  protected renderBody(): void {\n    console.log(\"Rendering sales report body\");\n  }\n}\n\n\nclass InventoryReportGenerator extends ReportGenerator {\n  protected renderBody(): void {\n    console.log(\"Rendering inventory report body\");\n  }\n}\n\n\nfunction ReportPreview({ generator }: { generator: ReportGenerator }) {\n  return <p>Report generator ready</p>;\n}\n\n\nexport function App() {\n  const generator = useMemo(() => new SalesReportGenerator(), []);\n\n\n  useMemo(() => {\n    generator.generate();\n  }, [generator]);\n\n\n  return (\n    <main>\n      <h1>Report Generation Template</h1>\n      <ReportPreview generator={generator} />\n    </main>\n  );\n}",
  explanation: "The React example keeps the report algorithm in the base class and allows different report types to vary the body step.",
};
