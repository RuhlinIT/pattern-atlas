import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java = {
  language: "java",
  code: `class IntegrationFacade {
  private final LegacyBillingApi billing;
  private final ShippingApi shipping;

  IntegrationFacade(LegacyBillingApi billing, ShippingApi shipping) {
    this.billing = billing;
    this.shipping = shipping;
  }

  SubmitResult submit(String orderId, String address, int total) {
    int shippingCost = shipping.quote(address);
    billing.createInvoice(orderId, total, shippingCost);
    return new SubmitResult(true);
  }
}
`,
} satisfies PatternLanguageExample;