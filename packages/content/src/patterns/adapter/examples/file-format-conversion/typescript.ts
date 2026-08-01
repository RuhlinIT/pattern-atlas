import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "File format conversion",
  code: "interface UserDirectory {\n  listUsers(): { id: number; name: string }[];\n}\n\nclass CsvUserSource {\n  fetchRows(): string[] {\n    return [\"1,Ada Lovelace\", \"2,Grace Hopper\"];\n  }\n}\n\nclass CsvUserAdapter implements UserDirectory {\n  constructor(private source: CsvUserSource) {}\n\n  listUsers(): { id: number; name: string }[] {\n    return this.source.fetchRows().map((row) => {\n      const [id, name] = row.split(\",\");\n      return { id: Number(id), name };\n    });\n  }\n}\n\nconst directory = new CsvUserAdapter(new CsvUserSource());\nconsole.log(directory.listUsers());",
  explanation: "The adapter converts raw CSV rows into the structured user records expected by the application.",
};
