import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Pizza order construction",
  code: "interface PizzaOptions {\n  size: string;\n  crust: string;\n  cheese: boolean;\n  toppings: string[];\n}\n\nclass Pizza {\n  constructor(\n    public size: string,\n    public crust: string,\n    public cheese: boolean,\n    public toppings: string[],\n  ) {}\n}\n\nclass PizzaBuilder {\n  private size = \"medium\";\n  private crust = \"regular\";\n  private cheese = true;\n  private toppings: string[] = [];\n\n  withSize(size: string): this {\n    this.size = size;\n    return this;\n  }\n\n  withCrust(crust: string): this {\n    this.crust = crust;\n    return this;\n  }\n\n  withCheese(cheese: boolean): this {\n    this.cheese = cheese;\n    return this;\n  }\n\n  addTopping(topping: string): this {\n    this.toppings.push(topping);\n    return this;\n  }\n\n  build(): Pizza {\n    return new Pizza(this.size, this.crust, this.cheese, [...this.toppings]);\n  }\n}\n\nconst pizza = new PizzaBuilder()\n  .withSize(\"large\")\n  .withCrust(\"thin\")\n  .addTopping(\"pepperoni\")\n  .addTopping(\"mushrooms\")\n  .build();\n\nconsole.log(pizza);",
  explanation: "The Angular example uses the same builder chain, keeping pizza construction readable and separating configuration from object creation.",
};
