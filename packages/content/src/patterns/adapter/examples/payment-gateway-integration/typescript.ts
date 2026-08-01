import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Payment gateway integration",
  code: "type ChargeCommand = {\n  orderId: string;\n  amountCents: number;\n  currency: string;\n};\n\n\ntype PaymentResult = {\n  paymentId: string;\n  status: \"approved\" | \"declined\";\n};\n\n\nexport interface BillingGateway {\n  charge(command: ChargeCommand): Promise<PaymentResult>;\n}\n\n\nexport class StripeAdapter implements BillingGateway {\n  constructor(private readonly stripeClient: StripeClient) {}\n\n\n  async charge(command: ChargeCommand): Promise<PaymentResult> {\n    const response = await this.stripeClient.pay({\n      reference: command.orderId,\n      amount: command.amountCents,\n      currency: command.currency,\n    });\n\n\n    return {\n      paymentId: response.id,\n      status: response.success ? \"approved\" : \"declined\",\n    };\n  }\n}",
  explanation:
    "The adapter converts your internal billing command into the payment provider’s request shape.",
};