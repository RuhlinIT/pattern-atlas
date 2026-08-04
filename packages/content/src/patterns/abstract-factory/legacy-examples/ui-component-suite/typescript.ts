import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "TypeScript UI factory",
  code: `type Theme = "light" | "dark";

type Button = { theme: Theme; kind: "button" };
type Input = { theme: Theme; kind: "input" };
type Card = { theme: Theme; kind: "card" };
type Alert = { theme: Theme; kind: "alert" };

interface ComponentFactory {
  createButton(): Button;
  createInput(): Input;
  createCard(): Card;
  createAlert(): Alert;
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

  createAlert(): Alert {
    return { theme: this.theme, kind: "alert" };
  }
}`,
  explanation:
    "This TypeScript factory keeps all UI components aligned to one theme and interaction model.",
};