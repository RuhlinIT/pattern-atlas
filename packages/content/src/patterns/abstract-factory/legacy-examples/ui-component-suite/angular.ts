import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Angular UI factory",
  code: `export type Theme = "light" | "dark";

export interface Button {
  theme: Theme;
}

export interface Input {
  theme: Theme;
}

export interface Card {
  theme: Theme;
}

export interface Alert {
  theme: Theme;
}

export abstract class ComponentFactory {
  abstract createButton(): Button;
  abstract createInput(): Input;
  abstract createCard(): Card;
  abstract createAlert(): Alert;
}`,
  explanation:
    "Angular can model a theme-aware UI family using abstract factories or abstract classes.",
};