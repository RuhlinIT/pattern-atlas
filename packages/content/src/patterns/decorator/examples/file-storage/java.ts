import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "File storage",
  code: `interface Storage {
    void write(String name, String data);
}

class FileStorage implements Storage {
    public void write(String name, String data) {
        System.out.println("store " + name + ": " + data);
    }
}
`,
  explanation: "Layer compression and encryption around storage before the base write operation runs.",
};