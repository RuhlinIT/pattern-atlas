import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript = {
  language: "typescript",
  code: `type Button = { label: string; theme: string };
type Input = { placeholder: string; theme: string };

type ThemeFactory = {
  createButton(): Button;
  createInput(): Input;
};

class LightThemeFactory implements ThemeFactory {
  createButton() {
    return { label: "Light Button", theme: "light" };
  }

  createInput() {
    return { placeholder: "Light input", theme: "light" };
  }
}

class DarkThemeFactory implements ThemeFactory {
  createButton() {
    return { label: "Dark Button", theme: "dark" };
  }

  createInput() {
    return { placeholder: "Dark input", theme: "dark" };
  }
}
`,
} satisfies PatternLanguageExample;