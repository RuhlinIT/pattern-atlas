import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Payment gateway integration",
  code: "from abc import ABC, abstractmethod\n  \n  class PaymentProcessor(ABC):\n      @abstractmethod\n      def pay(self, amount: float) -> None:\n          pass\n  \n  class LegacyPaymentGateway:\n      def make_payment(self, total_in_cents: int) -> None:\n          print(f\"Legacy gateway charged {total_in_cents} cents\")\n  \n  class PaymentGatewayAdapter(PaymentProcessor):\n      def __init__(self, gateway: LegacyPaymentGateway) -> None:\n          self.gateway = gateway\n  \n      def pay(self, amount: float) -> None:\n          total_in_cents = round(amount * 100)\n          self.gateway.make_payment(total_in_cents)\n  \n  class CheckoutService:\n      def __init__(self, processor: PaymentProcessor) -> None:\n          self.processor = processor\n  \n      def checkout(self, amount: float) -> None:\n          self.processor.pay(amount)\n  \n  processor = PaymentGatewayAdapter(LegacyPaymentGateway())\n  checkout = CheckoutService(processor)\n  checkout.checkout(49.99)",
  explanation: "The adapter lets checkout code remain stable even though the integrated gateway uses a different method name and value format.",
};
