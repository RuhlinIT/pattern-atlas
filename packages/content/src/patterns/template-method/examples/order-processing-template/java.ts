import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Order processing template",
  code: "abstract class OrderProcessor {\n    public final void process() {\n        validateOrder();\n        chargePayment();\n        fulfillOrder();\n        sendConfirmation();\n    }\n\n\n    protected void validateOrder() {\n        System.out.println(\"Validating order\");\n    }\n\n\n    protected abstract void chargePayment();\n    protected abstract void fulfillOrder();\n\n\n    protected void sendConfirmation() {\n        System.out.println(\"Sending confirmation\");\n    }\n}\n\n\nclass PhysicalOrderProcessor extends OrderProcessor {\n    protected void chargePayment() {\n        System.out.println(\"Charging payment for physical order\");\n    }\n\n\n    protected void fulfillOrder() {\n        System.out.println(\"Shipping physical order\");\n    }\n}\n\n\nclass DigitalOrderProcessor extends OrderProcessor {\n    protected void chargePayment() {\n        System.out.println(\"Charging payment for digital order\");\n    }\n\n\n    protected void fulfillOrder() {\n        System.out.println(\"Delivering digital product\");\n    }\n}\n\n\nOrderProcessor physical = new PhysicalOrderProcessor();\nphysical.process();\n\n\nOrderProcessor digital = new DigitalOrderProcessor();\ndigital.process();",
  explanation: "The Java example locks in the algorithm flow while allowing subclasses to vary the important steps.",
};
