import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Document template clone",
  code: "interface DocumentPrototype {\n    DocumentPrototype clone();\n    String render();\n}\n\n\nclass ReportDocument implements DocumentPrototype {\n    private String title;\n    private String author;\n    private String[] sections;\n\n\n    public ReportDocument(String title, String author, String[] sections) {\n        this.title = title;\n        this.author = author;\n        this.sections = sections;\n    }\n\n\n    public DocumentPrototype clone() {\n        return new ReportDocument(title, author, sections.clone());\n    }\n\n\n    public String render() {\n        return title + \" by \" + author + \": \" + String.join(\", \", sections);\n    }\n}\n\n\nReportDocument template = new ReportDocument(\n    \"Quarterly Report\",\n    \"Atlas Team\",\n    new String[] { \"Summary\", \"Metrics\", \"Conclusion\" }\n);\n\n\nReportDocument copy = (ReportDocument) template.clone();\ncopy = new ReportDocument(\"Quarterly Report Copy\", \"Atlas Team\", new String[] { \"Summary\", \"Metrics\", \"Conclusion\", \"Appendix\" });\n\n\nSystem.out.println(template.render());\nSystem.out.println(copy.render());",
  explanation: "The document prototype captures a reusable report structure so new documents can be created by cloning the template instead of reconstructing every field.",
};
