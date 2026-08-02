import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Document composition",
  code: `type Document = {
  title: string;
  sections: string[];
  clauses: string[];
};

class DocumentBuilder {
  private document: Document = {
    title: "",
    sections: [],
    clauses: [],
  };

  title(title: string) {
    this.document.title = title;
    return this;
  }

  addSection(section: string) {
    this.document.sections.push(section);
    return this;
  }

  addClause(clause: string) {
    this.document.clauses.push(clause);
    return this;
  }

  build() {
    return this.document;
  }
}

const document = new DocumentBuilder()
  .title("Service Agreement")
  .addSection("Overview")
  .addClause("Payment terms")
  .addClause("Termination")
  .build();`,
  explanation:
    "Builder works well for documents because sections and clauses are often assembled from reusable pieces.",
};