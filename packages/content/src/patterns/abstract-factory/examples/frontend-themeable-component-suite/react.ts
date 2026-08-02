import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "React theme factory",
  code: `type Theme = "light" | "dark";

type UI = { theme: Theme };

function createThemeUI(theme: Theme) {
  return {
    button: { theme } satisfies UI,
    input: { theme } satisfies UI,
    card: { theme } satisfies UI,
  };
}`,
  explanation:
    "A React app can centralize theme family creation in one place to avoid visual drift.",
};