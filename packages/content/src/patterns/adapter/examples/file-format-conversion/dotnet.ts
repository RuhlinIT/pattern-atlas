import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const dotnet: PatternLanguageExample = {
  language: "dotnet",
  title: "File format conversion",
  code: "using System;\nusing System.Collections.Generic;\nusing System.Linq;\n\npublic interface IUserDirectory\n{\n    List<UserRecord> ListUsers();\n}\n\npublic class CsvUserSource\n{\n    public List<string> FetchRows()\n    {\n        return new List<string> { \"1,Ada Lovelace\", \"2,Grace Hopper\" };\n    }\n}\n\npublic record UserRecord(int Id, string Name);\n\npublic class CsvUserAdapter : IUserDirectory\n{\n    private readonly CsvUserSource _source;\n\n    public CsvUserAdapter(CsvUserSource source)\n    {\n        _source = source;\n    }\n\n    public List<UserRecord> ListUsers()\n    {\n        return _source.FetchRows()\n            .Select(row =>\n            {\n                var parts = row.Split(',');\n                return new UserRecord(int.Parse(parts[0]), parts[1]);\n            })\n            .ToList();\n    }\n}\n\nIUserDirectory directory = new CsvUserAdapter(new CsvUserSource());\nConsole.WriteLine(string.Join(\", \", directory.ListUsers().Select(u => u.Name)));",
  explanation: "The .NET version uses a record for the user model and an adapter to translate legacy CSV data into the structured interface expected by application code.",
};
