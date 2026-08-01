import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Coffee customization",
  code: "interface Coffee {\n  getDescription(): string;\n  getCost(): number;\n}\n\nclass SimpleCoffee implements Coffee {\n  getDescription(): string {\n    return \"Simple coffee\";\n  }\n\n  getCost(): number {\n    return 3;\n  }\n}\n\nabstract class CoffeeDecorator implements Coffee {\n  constructor(protected coffee: Coffee) {}\n\n  getDescription(): string {\n    return this.coffee.getDescription();\n  }\n\n  getCost(): number {\n    return this.coffee.getCost();\n  }\n}\n\nclass MilkDecorator extends CoffeeDecorator {\n  getDescription(): string {\n    return `${super.getDescription()}, milk`;\n  }\n\n  getCost(): number {\n    return super.getCost() + 1;\n  }\n}\n\nclass MochaDecorator extends CoffeeDecorator {\n  getDescription(): string {\n    return `${super.getDescription()}, mocha`;\n  }\n\n  getCost(): number {\n    return super.getCost() + 2;\n  }\n}\n\nclass WhipDecorator extends CoffeeDecorator {\n  getDescription(): string {\n    return `${super.getDescription()}, whip`;\n  }\n\n  getCost(): number {\n    return super.getCost() + 1;\n  }\n}\n\nconst order = new WhipDecorator(\n  new MochaDecorator(new MilkDecorator(new SimpleCoffee())),\n);\n\nconsole.log(order.getDescription());\nconsole.log(order.getCost());",
  explanation: "Each add-on decorates the base coffee with extra description and pricing behavior, which avoids a subclass for every drink combination.",
};
