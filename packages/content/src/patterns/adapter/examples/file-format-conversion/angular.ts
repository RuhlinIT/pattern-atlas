import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "File format conversion",
  code: "import { Injectable } from '@angular/core';\n\n\n  type UserRecord = {\n    id: number;\n    name: string;\n  };\n\n\n  abstract class UserDirectory {\n    abstract listUsers(): UserRecord[];\n  }\n\n\n  @Injectable({ providedIn: 'root' })\n  class CsvUserSource {\n    fetchRows(): string[] {\n      return ['1,Ada Lovelace', '2,Grace Hopper'];\n    }\n  }\n\n\n  @Injectable({ providedIn: 'root' })\n  class CsvUserAdapter extends UserDirectory {\n    constructor(private source: CsvUserSource) {\n      super();\n    }\n\n\n    listUsers(): UserRecord[] {\n      return this.source.fetchRows().map((row) => {\n        const [id, name] = row.split(',');\n        return { id: Number(id), name };\n      });\n    }\n  }",
  explanation: "The Angular adapter service converts CSV rows into the structured user records expected by the rest of the application.",
};
