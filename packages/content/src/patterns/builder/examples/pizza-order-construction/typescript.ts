import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Pizza order construction",
  code: "class Pizza {\n  constructor(\n    public size: string,\n    public crust: string,\n    public cheese: boolean,\n    public toppings: string[],\n  ) {}\n}\n\nclass PizzaBuilder {\n  private size = \"medium\";\n  private crust = \"regular\";\n  private cheese = true;\n  private toppings: string[] = [];\n\n  withSize(size: string): this {\n    this.size = size;\n    return this;\n  }\n\n  withCrust(crust: string): this {\n    this.crust = crust;\n    return this;\n  }\n\n  withCheese(cheese: boolean): this {\n    this.cheese = cheese;\n    return this;\n  }\n\n  addTopping(topping: string): this {\n    this.toppings.push(topping);\n    return this;\n  }\n\n  build(): Pizza {\n    return new Pizza(this.size, this.crust, this.cheese, [...this.toppings]);\n  }\n}\n\nconst pizza = new PizzaBuilder()\n  .withSize(\"large\")\n  .withCrust(\"thin\")\n  .addTopping(\"pepperoni\")\n  .addTopping(\"mushrooms\")\n  .build();\n\nconsole.log(pizza);",
  explanation: "The builder lets the caller assemble a pizza step by step, making optional choices readable and avoiding a long constructor.",
};
