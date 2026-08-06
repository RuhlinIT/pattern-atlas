import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript = {
  language: "typescript",
  code: `interface PaymentProcessor {
  charge(amount: number): Promise<{ success: boolean; transactionId: string }>;
}

class LegacyPaymentGateway {
  makePayment(amountInCents: number): { ok: number; reference: string } {
    return {
      ok: 1,
      reference: "LEGACY-" + amountInCents + "-" + Math.random().toString(16).slice(2, 8),
    };
  }
}

class LegacyPaymentAdapter implements PaymentProcessor {
  constructor(private readonly legacyGateway: LegacyPaymentGateway) {}

  async charge(amount: number): Promise<{ success: boolean; transactionId: string }> {
    const amountInCents = Math.round(amount * 100);
    const result = this.legacyGateway.makePayment(amountInCents);

    return {
      success: result.ok === 1,
      transactionId: result.reference,
    };
  }
}

class CheckoutService {
  constructor(private readonly processor: PaymentProcessor) {}

  async placeOrder(total: number): Promise<string> {
    const payment = await this.processor.charge(total);

    if (!payment.success) {
      return "Payment failed";
    }

    return "Order confirmed with transaction " + payment.transactionId;
  }
}

const processor: PaymentProcessor = new LegacyPaymentAdapter(
  new LegacyPaymentGateway()
);
const checkout = new CheckoutService(processor);

checkout.placeOrder(49.99).then(console.log);
`,
} satisfies PatternLanguageExample;