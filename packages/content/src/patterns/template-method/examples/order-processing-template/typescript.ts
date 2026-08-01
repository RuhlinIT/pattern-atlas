import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Order processing template",
  code: "abstract class OrderProcessor {\n  process(): void {\n    this.validateOrder();\n    this.chargePayment();\n    this.fulfillOrder();\n    this.sendConfirmation();\n  }\n\n\n  protected validateOrder(): void {\n    console.log(\"Validating order\");\n  }\n\n\n  protected abstract chargePayment(): void;\n  protected abstract fulfillOrder(): void;\n\n\n  protected sendConfirmation(): void {\n    console.log(\"Sending confirmation\");\n  }\n}\n\n\nclass PhysicalOrderProcessor extends OrderProcessor {\n  protected chargePayment(): void {\n    console.log(\"Charging payment for physical order\");\n  }\n\n\n  protected fulfillOrder(): void {\n    console.log(\"Shipping physical order\");\n  }\n}\n\n\nclass DigitalOrderProcessor extends OrderProcessor {\n  protected chargePayment(): void {\n    console.log(\"Charging payment for digital order\");\n  }\n\n\n  protected fulfillOrder(): void {\n    console.log(\"Delivering digital product\");\n  }\n}\n\n\nconst physical = new PhysicalOrderProcessor();\nphysical.process();\n\n\nconst digital = new DigitalOrderProcessor();\ndigital.process();",
  explanation: "The template method defines the processing sequence once, while subclasses customize payment and fulfillment steps.",
};
