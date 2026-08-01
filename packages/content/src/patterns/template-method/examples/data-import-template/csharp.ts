import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const csharp: PatternLanguageExample = {
  language: "csharp",
  title: "Data import template",
  code: "using System;\n\n\npublic abstract class DataImporter\n{\n    public void Import()\n    {\n        var raw = ReadSource();\n        var parsed = Parse(raw);\n        Validate(parsed);\n        Save(parsed);\n    }\n\n\n    protected abstract string ReadSource();\n    protected abstract object Parse(string raw);\n\n\n    protected virtual void Validate(object data)\n    {\n        Console.WriteLine(\"Validating imported data\");\n    }\n\n\n    protected virtual void Save(object data)\n    {\n        Console.WriteLine(\"Saving imported data\");\n    }\n}\n\n\npublic class CsvImporter : DataImporter\n{\n    protected override string ReadSource()\n    {\n        return \"name,age\\nAlice,30\";\n    }\n\n\n    protected override object Parse(string raw)\n    {\n        return raw.Split(\"\\n\");\n    }\n}\n\n\npublic class JsonImporter : DataImporter\n{\n    protected override string ReadSource()\n    {\n        return \"{\"name\":\"Alice\",\"age\":30}\";\n    }\n\n\n    protected override object Parse(string raw)\n    {\n        return raw;\n    }\n}\n\n\nvar csv = new CsvImporter();\ncsv.Import();\n\n\nvar json = new JsonImporter();\njson.Import();",
  explanation: "The C# data importer preserves the import skeleton and lets subclasses customize the file-specific steps.",
};
