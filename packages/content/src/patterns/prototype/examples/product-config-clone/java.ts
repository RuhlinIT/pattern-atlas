import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Product config clone",
  code: "interface ProductPrototype {\n    ProductPrototype clone();\n    String summary();\n}\n\n\nclass ProductConfig implements ProductPrototype {\n    private String name;\n    private int price;\n    private String[] options;\n\n\n    public ProductConfig(String name, int price, String[] options) {\n        this.name = name;\n        this.price = price;\n        this.options = options;\n    }\n\n\n    public ProductPrototype clone() {\n        return new ProductConfig(name, price, options.clone());\n    }\n\n\n    public String summary() {\n        return name + \" at $\" + price + \": \" + String.join(\", \", options);\n    }\n}\n\n\nProductConfig baseProduct = new ProductConfig(\"Starter Pack\", 49, new String[] { \"Basic Support\", \"Email Access\" });\nProductConfig premiumProduct = (ProductConfig) baseProduct.clone();\npremiumProduct = new ProductConfig(\"Premium Pack\", 99, new String[] { \"Basic Support\", \"Email Access\", \"Priority Support\" });\n\n\nSystem.out.println(baseProduct.summary());\nSystem.out.println(premiumProduct.summary());",
  explanation: "The product configuration prototype gives the system a reusable base offer that can be cloned and adjusted for different catalog tiers.",
};
