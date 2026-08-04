import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Logging, metrics, and tracing",
  code: `interface Service {
    String handle(String input);
}

class BaseService implements Service {
    public String handle(String input) {
        return input.toUpperCase();
    }
}
`,
  explanation: "Wrap service calls with observability concerns without changing business logic.",
};