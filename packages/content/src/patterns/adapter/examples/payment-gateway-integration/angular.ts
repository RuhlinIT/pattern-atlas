import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Payment gateway integration",
  code: "import { Injectable } from '@angular/core';\n\n\n  abstract class PaymentProcessor {\n    abstract pay(amount: number): void;\n  }\n\n\n  @Injectable({ providedIn: 'root' })\n  class LegacyPaymentGateway {\n    makePayment(totalInCents: number): void {\n      console.log(`Legacy gateway charged ${totalInCents} cents`);\n    }\n  }\n\n\n  @Injectable({ providedIn: 'root' })\n  class PaymentGatewayAdapter extends PaymentProcessor {\n    constructor(private gateway: LegacyPaymentGateway) {\n      super();\n    }\n\n\n    pay(amount: number): void {\n      const totalInCents = Math.round(amount * 100);\n      this.gateway.makePayment(totalInCents);\n    }\n  }\n\n\n  @Injectable({ providedIn: 'root' })\n  class CheckoutService {\n    constructor(private processor: PaymentGatewayAdapter) {}\n\n\n    checkout(amount: number): void {\n      this.processor.pay(amount);\n    }\n  }",
  explanation: "The Angular adapter service preserves the app's payment contract while dependency injection supplies the legacy gateway it wraps and translates for.",
};
