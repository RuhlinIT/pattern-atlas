import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Coffee customization",
  code: `interface Beverage {
    int cost();
    String description();
}

class Espresso implements Beverage {
    public int cost() { return 3; }
    public String description() { return "Espresso"; }
}
`,
  explanation: "Add toppings or extras by wrapping the base drink with optional cost and description layers.",
};