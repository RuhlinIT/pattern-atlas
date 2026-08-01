import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Document template clone",
  code: "import React, { useMemo } from \"react\";\n\n\ninterface DocumentPrototype {\n  clone(): DocumentPrototype;\n  render(): string;\n}\n\n\nclass ReportDocument implements DocumentPrototype {\n  constructor(\n    public title: string,\n    public author: string,\n    public sections: string[],\n  ) {}\n\n\n  clone(): DocumentPrototype {\n    return new ReportDocument(this.title, this.author, [...this.sections]);\n  }\n\n\n  render(): string {\n    return `${this.title} by ${this.author}: ${this.sections.join(\", \")}`;\n  }\n}\n\n\nfunction DocumentPreview({ document }: { document: DocumentPrototype }) {\n  return <p>{document.render()}</p>;\n}\n\n\nexport function App() {\n  const template = useMemo(\n    () => new ReportDocument(\"Quarterly Report\", \"Atlas Team\", [\"Summary\", \"Metrics\", \"Conclusion\"]),\n    [],\n  );\n\n\n  const copy = useMemo(() => {\n    const cloned = template.clone() as ReportDocument;\n    cloned.title = \"Quarterly Report Copy\";\n    cloned.sections.push(\"Appendix\");\n    return cloned;\n  }, [template]);\n\n\n  return (\n    <main>\n      <h1>Document Template</h1>\n      <DocumentPreview document={template} />\n      <DocumentPreview document={copy} />\n    </main>\n  );\n}",
  explanation: "The React example clones a report prototype so the interface can show a base document and a customized copy without recreating the whole structure.",
};
