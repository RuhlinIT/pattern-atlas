import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "File format conversion",
  code: "from abc import ABC, abstractmethod\n\nclass UserDirectory(ABC):\n    @abstractmethod\n    def list_users(self) -> list[dict[str, object]]:\n        pass\n\nclass CsvUserSource:\n    def fetch_rows(self) -> list[str]:\n        return [\"1,Ada Lovelace\", \"2,Grace Hopper\"]\n\nclass CsvUserAdapter(UserDirectory):\n    def __init__(self, source: CsvUserSource) -> None:\n        self.source = source\n\n    def list_users(self) -> list[dict[str, object]]:\n        users = []\n\n        for row in self.source.fetch_rows():\n            user_id, name = row.split(\",\")\n            users.append({\"id\": int(user_id), \"name\": name})\n\n        return users\n\ndirectory = CsvUserAdapter(CsvUserSource())\nprint(directory.list_users())",
  explanation: "The adapter translates legacy row data into the structured records that client code can consume consistently.",
};
