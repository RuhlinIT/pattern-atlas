import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Shipping cost calculation",
  code: "from abc import ABC, abstractmethod\n\nclass ShippingStrategy(ABC):\n    @abstractmethod\n    def calculate(self, weight: float) -> float:\n        pass\n\nclass StandardShipping(ShippingStrategy):\n    def calculate(self, weight: float) -> float:\n        return 5 + weight * 0.5\n\nclass ExpressShipping(ShippingStrategy):\n    def calculate(self, weight: float) -> float:\n        return 15 + weight * 1.25\n\nclass ShippingService:\n    def __init__(self, strategy: ShippingStrategy) -> None:\n        self.strategy = strategy\n\n    def get_cost(self, weight: float) -> float:\n        return self.strategy.calculate(weight)\n\nshipping = ShippingService(ExpressShipping())\nprint(shipping.get_cost(8))",
  explanation: "The service delegates pricing logic to the selected strategy so shipping options can evolve independently of the calling code.",
};
