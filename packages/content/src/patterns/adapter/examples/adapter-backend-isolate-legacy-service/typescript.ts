import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Backend service adapter",
  code: "export interface BillingGateway {\n  charge(order: Order): Promise<Invoice>;\n}\n\n\nexport class LegacyBillingAdapter implements BillingGateway {\n  constructor(private readonly legacyClient: LegacyBillingClient) {}\n\n\n  async charge(order: Order): Promise<Invoice> {\n    const response = await this.legacyClient.submit({\n      orderId: order.id,\n      totalCents: order.totalCents,\n    });\n\n\n    return {\n      id: response.invoiceId,\n      status: response.status,\n    };\n  }\n}",
  explanation:
    "This keeps the service boundary stable even if the legacy client changes.",
};