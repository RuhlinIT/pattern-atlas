import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript = {
  language: "typescript",
  code: `type LegacyBillingApi = { createInvoice(payload: unknown): Promise<unknown> };
type ShippingApi = { quote(address: string): Promise<number> };

type OrderGateway = {
  submit(orderId: string, address: string, total: number): Promise<{ ok: boolean }>;
};

class IntegrationFacade implements OrderGateway {
  constructor(private billing: LegacyBillingApi, private shipping: ShippingApi) {}

  async submit(orderId: string, address: string, total: number) {
    const shippingCost = await this.shipping.quote(address);
    await this.billing.createInvoice({ orderId, total, shippingCost });
    return { ok: true };
  }
}
`,
} satisfies PatternLanguageExample;