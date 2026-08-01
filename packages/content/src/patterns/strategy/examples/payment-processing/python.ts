import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Payment processing",
  code: "from abc import ABC, abstractmethod\n\nclass PaymentStrategy(ABC):\n    @abstractmethod\n    def pay(self, amount: float) -> None:\n        pass\n\nclass CreditCardPayment(PaymentStrategy):\n    def pay(self, amount: float) -> None:\n        print(f\"Paid {amount} with credit card\")\n\nclass PayPalPayment(PaymentStrategy):\n    def pay(self, amount: float) -> None:\n        print(f\"Paid {amount} with PayPal\")\n\nclass CheckoutService:\n    def __init__(self, strategy: PaymentStrategy) -> None:\n        self.strategy = strategy\n\n    def checkout(self, amount: float) -> None:\n        self.strategy.pay(amount)\n\ncheckout = CheckoutService(PayPalPayment())\ncheckout.checkout(250.0)",
  explanation: "The checkout flow stays simple because payment behavior is delegated to the selected strategy implementation.",
};
