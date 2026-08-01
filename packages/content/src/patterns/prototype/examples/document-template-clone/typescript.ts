import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Document template clone",
  code: "interface DocumentPrototype {\n  clone(): DocumentPrototype;\n  render(): string;\n}\n\n\nclass ReportDocument implements DocumentPrototype {\n  constructor(\n    public title: string,\n    public author: string,\n    public sections: string[],\n  ) {}\n\n\n  clone(): DocumentPrototype {\n    return new ReportDocument(this.title, this.author, [...this.sections]);\n  }\n\n\n  render(): string {\n    return `${this.title} by ${this.author}: ${this.sections.join(\", \")}`;\n  }\n}\n\n\nconst template = new ReportDocument(\"Quarterly Report\", \"Atlas Team\", [\n  \"Summary\",\n  \"Metrics\",\n  \"Conclusion\",\n]);\n\n\nconst copy = template.clone() as ReportDocument;\ncopy.title = \"Quarterly Report Copy\";\ncopy.sections.push(\"Appendix\");\n\n\nconsole.log(template.render());\nconsole.log(copy.render());",
  explanation: "The document prototype lets the editor clone a prepared template and then customize the copy without rebuilding the document from scratch.",
};
