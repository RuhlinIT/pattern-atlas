import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Java payment bridge",
  code: `interface PaymentGateway {
    void charge(int amount);
}

class CheckoutService {
    private final PaymentGateway gateway;

    CheckoutService(PaymentGateway gateway) {
        this.gateway = gateway;
    }
}`,
  explanation:
    "Java can separate checkout flow from provider-specific payment logic.",
};