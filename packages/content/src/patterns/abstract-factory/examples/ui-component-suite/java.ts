import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Java UI factory",
  code: `interface Button { String theme(); }
interface Input { String theme(); }
interface Card { String theme(); }
interface Alert { String theme(); }

interface ComponentFactory {
    Button createButton();
    Input createInput();
    Card createCard();
    Alert createAlert();
}`,
  explanation:
    "Java abstract factories can create a coordinated set of UI components for each theme.",
};