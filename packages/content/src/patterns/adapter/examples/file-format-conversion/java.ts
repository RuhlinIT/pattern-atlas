import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "File format conversion",
  code: "import java.util.ArrayList;\nimport java.util.List;\n\ninterface UserDirectory {\n    List<UserRecord> listUsers();\n}\n\nclass CsvUserSource {\n    public List<String> fetchRows() {\n        return List.of(\"1,Ada Lovelace\", \"2,Grace Hopper\");\n    }\n}\n\nclass UserRecord {\n    public final int id;\n    public final String name;\n\n    public UserRecord(int id, String name) {\n        this.id = id;\n        this.name = name;\n    }\n}\n\nclass CsvUserAdapter implements UserDirectory {\n    private final CsvUserSource source;\n\n    public CsvUserAdapter(CsvUserSource source) {\n        this.source = source;\n    }\n\n    public List<UserRecord> listUsers() {\n        List<UserRecord> users = new ArrayList<>();\n\n        for (String row : source.fetchRows()) {\n            String[] parts = row.split(\",\");\n            users.add(new UserRecord(Integer.parseInt(parts[0]), parts[1]));\n        }\n\n        return users;\n    }\n}\n\nUserDirectory directory = new CsvUserAdapter(new CsvUserSource());\nSystem.out.println(directory.listUsers().size());",
  explanation: "The adapter shields the rest of the app from raw CSV parsing by exposing the structured directory interface it already expects.",
};
