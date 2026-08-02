import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Angular theme factory",
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

export abstract class ComponentFactory {
  abstract createButton(): Button;
  abstract createInput(): Input;
  abstract createCard(): Card;
}`,
  explanation:
    "Angular services or abstract classes can create themed component families.",
};