import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const dotnet: PatternLanguageExample = {
  language: "dotnet",
  title: "Document composition",
  code: `public class Document
{
    public string Title { get; set; } = "";
    public List<string> Sections { get; } = new();
    public List<string> Clauses { get; } = new();
}

public class DocumentBuilder
{
    private readonly Document document = new();

    public DocumentBuilder Title(string title)
    {
        document.Title = title;
        return this;
    }

    public DocumentBuilder AddSection(string section)
    {
        document.Sections.Add(section);
        return this;
    }

    public DocumentBuilder AddClause(string clause)
    {
        document.Clauses.Add(clause);
        return this;
    }

    public Document Build() => document;
}

var document = new DocumentBuilder()
    .Title("Service Agreement")
    .AddSection("Overview")
    .AddClause("Payment terms")
    .AddClause("Termination")
    .Build();`,
  explanation:
    "Builder is useful for document assembly when the final output is composed from optional and reusable sections.",
};