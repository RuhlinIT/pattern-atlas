import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Product config clone",
  code: "from abc import ABC, abstractmethod\nfrom copy import deepcopy\n\n\nclass ProductPrototype(ABC):\n    @abstractmethod\n    def clone(self):\n        pass\n\n\n    @abstractmethod\n    def summary(self) -> str:\n        pass\n\n\nclass ProductConfig(ProductPrototype):\n    def __init__(self, name: str, price: int, options: list[str]) -> None:\n        self.name = name\n        self.price = price\n        self.options = options\n\n\n    def clone(self):\n        return deepcopy(self)\n\n\n    def summary(self) -> str:\n        return f\"{self.name} at ${self.price}: {', '.join(self.options)}\"\n\n\nbase_product = ProductConfig(\"Starter Pack\", 49, [\"Basic Support\", \"Email Access\"])\npremium_product = base_product.clone()\npremium_product.name = \"Premium Pack\"\npremium_product.price = 99\npremium_product.options.append(\"Priority Support\")\n\n\nprint(base_product.summary())\nprint(premium_product.summary())",
  explanation: "The product prototype makes it simple to duplicate a baseline configuration and then customize the cloned version for a different package.",
};
