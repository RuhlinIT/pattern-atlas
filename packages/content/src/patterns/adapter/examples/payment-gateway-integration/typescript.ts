import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Payment gateway integration",
  code: "interface PaymentProcessor {\n    pay(amount: number): void;\n  }\n  \n  class LegacyPaymentGateway {\n    makePayment(totalInCents: number): void {\n      console.log(`Legacy gateway charged ${totalInCents} cents`);\n    }\n  }\n  \n  class PaymentGatewayAdapter implements PaymentProcessor {\n    constructor(private gateway: LegacyPaymentGateway) {}\n  \n    pay(amount: number): void {\n      const totalInCents = Math.round(amount * 100);\n      this.gateway.makePayment(totalInCents);\n    }\n  }\n  \n  class CheckoutService {\n    constructor(private processor: PaymentProcessor) {}\n  \n    checkout(amount: number): void {\n      this.processor.pay(amount);\n    }\n  }\n  \n  const processor = new PaymentGatewayAdapter(new LegacyPaymentGateway());\n  const checkout = new CheckoutService(processor);\n  checkout.checkout(49.99);",
  explanation: "The adapter translates the app's pay contract into the legacy gateway's makePayment method and expected cents-based input.",
};
