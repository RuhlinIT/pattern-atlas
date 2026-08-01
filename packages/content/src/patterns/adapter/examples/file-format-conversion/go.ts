import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const go: PatternLanguageExample = {
  language: "go",
  title: "File format conversion adapter",
  code: "type CsvRow map[string]string\n\n\ntype InternalRecord struct {\n\tID        string\n\tName      string\n\tCreatedAt time.Time\n}\n\n\nfunc AdaptCsvRow(row CsvRow) InternalRecord {\n\tcreatedAt, _ := time.Parse(time.RFC3339, row[\"created_at\"])\n\treturn InternalRecord{\n\t\tID:        row[\"id\"],\n\t\tName:      row[\"name\"],\n\t\tCreatedAt: createdAt,\n\t}\n}",
  explanation:
    "A Go adapter is a clean place to centralize file-to-domain translation.",
};