import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Product config clone",
  code: "interface ProductPrototype {\n  clone(): ProductPrototype;\n  summary(): string;\n}\n\n\nclass ProductConfig implements ProductPrototype {\n  constructor(\n    public name: string,\n    public price: number,\n    public options: string[],\n  ) {}\n\n\n  clone(): ProductPrototype {\n    return new ProductConfig(this.name, this.price, [...this.options]);\n  }\n\n\n  summary(): string {\n    return `${this.name} at $${this.price}: ${this.options.join(\", \")}`;\n  }\n}\n\n\nconst baseProduct = new ProductConfig(\"Starter Pack\", 49, [\"Basic Support\", \"Email Access\"]);\nconst premiumProduct = baseProduct.clone() as ProductConfig;\npremiumProduct.name = \"Premium Pack\";\npremiumProduct.price = 99;\npremiumProduct.options.push(\"Priority Support\");\n\n\nconsole.log(baseProduct.summary());\nconsole.log(premiumProduct.summary());",
  explanation: "The product prototype lets the commerce system clone a base catalog configuration and then adjust pricing or features for a new offer.",
};
