import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const csharp: PatternLanguageExample = {
  language: "csharp",
  title: "Document template clone",
  code: "using System;\nusing System.Collections.Generic;\n\n\npublic interface IDocumentPrototype\n{\n    IDocumentPrototype Clone();\n    string Render();\n}\n\n\npublic class ReportDocument : IDocumentPrototype\n{\n    public string Title { get; set; }\n    public string Author { get; set; }\n    public List<string> Sections { get; set; }\n\n\n    public ReportDocument(string title, string author, List<string> sections)\n    {\n        Title = title;\n        Author = author;\n        Sections = sections;\n    }\n\n\n    public IDocumentPrototype Clone()\n    {\n        return new ReportDocument(Title, Author, new List<string>(Sections));\n    }\n\n\n    public string Render()\n    {\n        return $\"{Title} by {Author}: {string.Join(\", \", Sections)}\";\n    }\n}\n\n\nvar template = new ReportDocument(\n    \"Quarterly Report\",\n    \"Atlas Team\",\n    new List<string> { \"Summary\", \"Metrics\", \"Conclusion\" }\n);\n\n\nvar copy = (ReportDocument)template.Clone();\ncopy.Title = \"Quarterly Report Copy\";\ncopy.Sections.Add(\"Appendix\");\n\n\nConsole.WriteLine(template.Render());\nConsole.WriteLine(copy.Render());",
  explanation: "The C# document prototype makes it easy to duplicate a structured report and then adjust the copy without rebuilding the original template.",
};
