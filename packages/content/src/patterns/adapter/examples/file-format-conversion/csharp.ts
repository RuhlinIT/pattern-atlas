import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const csharp: PatternLanguageExample = {
  language: "csharp",
  title: "File format conversion",
  code: "using System;\nusing System.Collections.Generic;\nusing System.Linq;\n\npublic interface IUserDirectory\n{\n    List<UserRecord> ListUsers();\n}\n\npublic class CsvUserSource\n{\n    public List<string> FetchRows()\n    {\n        return new List<string> { \"1,Ada Lovelace\", \"2,Grace Hopper\" };\n    }\n}\n\npublic class UserRecord\n{\n    public int Id { get; }\n    public string Name { get; }\n\n    public UserRecord(int id, string name)\n    {\n        Id = id;\n        Name = name;\n    }\n}\n\npublic class CsvUserAdapter : IUserDirectory\n{\n    private readonly CsvUserSource _source;\n\n    public CsvUserAdapter(CsvUserSource source)\n    {\n        _source = source;\n    }\n\n    public List<UserRecord> ListUsers()\n    {\n        return _source.FetchRows()\n            .Select(row =>\n            {\n                var parts = row.Split(',');\n                return new UserRecord(int.Parse(parts[0]), parts[1]);\n            })\n            .ToList();\n    }\n}\n\nvar directory = new CsvUserAdapter(new CsvUserSource());\nConsole.WriteLine(directory.ListUsers().Count);",
  explanation: "The C# adapter converts raw CSV rows into structured user records that the rest of the application can consume through a clean interface.",
};
