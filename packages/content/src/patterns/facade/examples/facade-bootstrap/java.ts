import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Bootstrap facade",
  code: `class Database {
    boolean connect() { return true; }
}
`,
  explanation: "Make complex startup sequences easy to call.",
};