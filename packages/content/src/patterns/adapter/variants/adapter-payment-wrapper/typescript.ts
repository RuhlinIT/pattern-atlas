import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript = {
  language: "typescript",
  code: `type PaymentRequest = {
  amount: number;
  currency: string;
  customerId: string;
};

type PaymentResult = {
  transactionId: string;
  status: "succeeded" | "failed";
};

type LegacyChargeRequest = {
  cents: number;
  currencyCode: string;
  customer: string;
};

type LegacyChargeResponse = {
  charge_id: string;
  result: "ok" | "declined";
};

class LegacyPaymentGateway {
  charge(
    request: LegacyChargeRequest,
  ): LegacyChargeResponse {
    return {
      charge_id: "charge_123",
      result: "ok",
    };
  }
}

interface PaymentGateway {
  charge(
    request: PaymentRequest,
  ): PaymentResult;
}

class LegacyPaymentGatewayAdapter
  implements PaymentGateway
{
  constructor(
    private readonly gateway: LegacyPaymentGateway,
  ) {}

  charge(
    request: PaymentRequest,
  ): PaymentResult {
    const legacyRequest: LegacyChargeRequest = {
      cents: request.amount,
      currencyCode: request.currency,
      customer: request.customerId,
    };

    const response =
      this.gateway.charge(legacyRequest);

    return {
      transactionId: response.charge_id,
      status: response.result === "ok"
        ? "succeeded"
        : "failed",
    };
  }
}

class CheckoutService {
  constructor(
    private readonly paymentGateway: PaymentGateway,
  ) {}

  completeCheckout(
    request: PaymentRequest,
  ): PaymentResult {
    return this.paymentGateway.charge(request);
  }
}

const legacyGateway = new LegacyPaymentGateway();

const paymentGateway =
  new LegacyPaymentGatewayAdapter(legacyGateway);

const checkout = new CheckoutService(
  paymentGateway,
);

const result = checkout.completeCheckout({
  amount: 4999,
  currency: "USD",
  customerId: "customer_456",
});

console.log(result);
`,
} satisfies PatternLanguageExample;