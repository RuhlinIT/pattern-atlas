import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "File format conversion adapter",
  code: "public class FileFormatAdapter {\n    public InternalRecord adapt(Map<String, String> row) {\n        return new InternalRecord(\n            row.get(\"id\"),\n            row.get(\"name\"),\n            LocalDateTime.parse(row.get(\"created_at\"))\n        );\n    }\n}",
  explanation:
    "The adapter shields downstream code from file-format parsing details.",
};