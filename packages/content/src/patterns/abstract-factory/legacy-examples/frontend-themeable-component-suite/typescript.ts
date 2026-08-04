import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Themeable component factory",
  code: `type Theme = "light" | "dark";

type Button = { theme: Theme; kind: "button" };
type Input = { theme: Theme; kind: "input" };
type Card = { theme: Theme; kind: "card" };

interface ComponentFactory {
  createButton(): Button;
  createInput(): Input;
  createCard(): Card;
}

class ThemeFactory implements ComponentFactory {
  constructor(private theme: Theme) {}

  createButton(): Button {
    return { theme: this.theme, kind: "button" };
  }

  createInput(): Input {
    return { theme: this.theme, kind: "input" };
  }

  createCard(): Card {
    return { theme: this.theme, kind: "card" };
  }
}`,
  explanation:
    "This factory keeps frontend components aligned to a single theme across the suite.",
};