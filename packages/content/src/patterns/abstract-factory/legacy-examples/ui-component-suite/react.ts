import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "React UI factory",
  code: `type Theme = "light" | "dark";

type UI = { theme: Theme };

function createUIFamily(theme: Theme) {
  return {
    button: { theme } satisfies UI,
    input: { theme } satisfies UI,
    card: { theme } satisfies UI,
    alert: { theme } satisfies UI,
  };
}`,
  explanation:
    "React can use an abstract factory-style helper to keep the full component family visually consistent.",
};