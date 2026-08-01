import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Data import template",
  code: "abstract class DataImporter {\n    public final void importData() {\n        String raw = readSource();\n        Object parsed = parse(raw);\n        validate(parsed);\n        save(parsed);\n    }\n\n\n    protected abstract String readSource();\n    protected abstract Object parse(String raw);\n\n\n    protected void validate(Object data) {\n        System.out.println(\"Validating imported data\");\n    }\n\n\n    protected void save(Object data) {\n        System.out.println(\"Saving imported data\");\n    }\n}\n\n\nclass CsvImporter extends DataImporter {\n    protected String readSource() {\n        return \"name,age\\nAlice,30\";\n    }\n\n\n    protected Object parse(String raw) {\n        return raw.split(\"\\n\");\n    }\n}\n\n\nclass JsonImporter extends DataImporter {\n    protected String readSource() {\n        return \"{\"name\":\"Alice\",\"age\":30}\";\n    }\n\n\n    protected Object parse(String raw) {\n        return raw;\n    }\n}\n\n\nDataImporter csv = new CsvImporter();\ncsv.importData();\n\n\nDataImporter json = new JsonImporter();\njson.importData();",
  explanation: "The Java data importer preserves the import steps while allowing each format to define its own reading and parsing logic.",
};
