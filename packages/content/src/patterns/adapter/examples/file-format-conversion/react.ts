import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "File format conversion",
  code: "import React, { useMemo } from \"react\";\n\ntype UserRecord = {\n  id: number;\n  name: string;\n};\n\ninterface UserDirectory {\n  listUsers(): UserRecord[];\n}\n\nclass CsvUserSource {\n  fetchRows(): string[] {\n    return [\"1,Ada Lovelace\", \"2,Grace Hopper\"];\n  }\n}\n\nclass CsvUserAdapter implements UserDirectory {\n  constructor(private source: CsvUserSource) {}\n\n  listUsers(): UserRecord[] {\n    return this.source.fetchRows().map((row) => {\n      const [id, name] = row.split(\",\");\n      return { id: Number(id), name };\n    });\n  }\n}\n\nfunction UserList({ directory }: { directory: UserDirectory }) {\n  const users = useMemo(() => directory.listUsers(), [directory]);\n\n  return (\n    <ul>\n      {users.map((user) => (\n        <li key={user.id}>\n          {user.name} (#{user.id})\n        </li>\n      ))}\n    </ul>\n  );\n}\n\nexport function App() {\n  const directory = useMemo(() => new CsvUserAdapter(new CsvUserSource()), []);\n\n  return (\n    <main>\n      <h1>User Directory</h1>\n      <UserList directory={directory} />\n    </main>\n  );\n}",
  explanation: "The React component depends on a directory interface, while the adapter converts CSV rows into structured user records behind the scenes.",
};
