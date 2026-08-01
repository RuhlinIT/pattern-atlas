import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "File format conversion adapter",
  code: "type CsvRow = Record<string, string>;\n\n\ntype InternalRecord = {\n  id: string;\n  name: string;\n  createdAt: Date;\n};\n\n\nexport function adaptCsvRow(row: CsvRow): InternalRecord {\n  return {\n    id: row.id,\n    name: row.name,\n    createdAt: new Date(row.created_at),\n  };\n}",
  explanation:
    "The adapter converts a CSV row into a typed internal record.",
};