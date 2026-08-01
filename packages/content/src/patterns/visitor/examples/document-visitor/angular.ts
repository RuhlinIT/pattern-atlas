import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Document visitor",
  code: "interface DocumentVisitor {\n  visitParagraph(paragraph: Paragraph): string;\n  visitHeading(heading: Heading): string;\n}\n\n\ninterface DocumentNode {\n  accept(visitor: DocumentVisitor): string;\n}\n\n\nclass Paragraph implements DocumentNode {\n  constructor(public text: string) {}\n\n\n  accept(visitor: DocumentVisitor): string {\n    return visitor.visitParagraph(this);\n  }\n}\n\n\nclass Heading implements DocumentNode {\n  constructor(\n    public level: number,\n    public text: string\n  ) {}\n\n\n  accept(visitor: DocumentVisitor): string {\n    return visitor.visitHeading(this);\n  }\n}\n\n\nclass HtmlExportVisitor implements DocumentVisitor {\n  visitParagraph(paragraph: Paragraph): string {\n    return `<p>${paragraph.text}</p>`;\n  }\n\n\n  visitHeading(heading: Heading): string {\n    return `<h${heading.level}>${heading.text}</h${heading.level}>`;\n  }\n}\n\n\nconst document: DocumentNode[] = [\n  new Heading(1, \"Report\"),\n  new Paragraph(\"This is the first paragraph.\"),\n  new Paragraph(\"This is the second paragraph.\")\n];\n\n\nconst visitor = new HtmlExportVisitor();\nconst html = document.map((node) => node.accept(visitor)).join(\"\\n\");\n\n\nconsole.log(html);",
  explanation: "The Angular example exports a document tree to HTML by delegating node-specific formatting to a visitor.",
};
