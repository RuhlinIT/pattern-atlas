import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Payment routing bridge",
  code: `type Provider = "stripe" | "adyen" | "paypal";

interface PaymentGateway {
  charge(amount: number): Promise<void>;
}

class CheckoutService {
  constructor(private gateway: PaymentGateway) {}

  async pay(amount: number) {
    await this.gateway.charge(amount);
  }
}`,
  explanation:
    "Checkout behavior stays stable while the payment provider implementation can change.",
};