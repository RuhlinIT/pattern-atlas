import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Data import template",
  code: "abstract class DataImporter {\n  import(): void {\n    const raw = this.readSource();\n    const parsed = this.parse(raw);\n    this.validate(parsed);\n    this.save(parsed);\n  }\n\n\n  protected abstract readSource(): string;\n  protected abstract parse(raw: string): unknown;\n  protected validate(data: unknown): void {\n    console.log(\"Validating imported data\");\n  }\n\n\n  protected save(data: unknown): void {\n    console.log(\"Saving imported data\");\n  }\n}\n\n\nclass CsvImporter extends DataImporter {\n  protected readSource(): string {\n    return \"name,age\\nAlice,30\";\n  }\n\n\n  protected parse(raw: string): unknown {\n    return raw.split(\"\\n\").map((line) => line.split(\",\"));\n  }\n}\n\n\nclass JsonImporter extends DataImporter {\n  protected readSource(): string {\n    return '{\"name\":\"Alice\",\"age\":30}';\n  }\n\n\n  protected parse(raw: string): unknown {\n    return JSON.parse(raw);\n  }\n}\n\n\nconst csv = new CsvImporter();\ncsv.import();\n\n\nconst json = new JsonImporter();\njson.import();",
  explanation: "The Angular example keeps the import pipeline stable and varies only the source-reading and parsing steps.",
};
