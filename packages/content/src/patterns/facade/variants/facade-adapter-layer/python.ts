import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python = {
  language: "python",
  code: `class IntegrationFacade:
    def __init__(self, billing, shipping):
        self.billing = billing
        self.shipping = shipping

    def submit(self, order_id, address, total):
        shipping_cost = self.shipping.quote(address)
        self.billing.create_invoice({"orderId": order_id, "total": total, "shippingCost": shipping_cost})
        return {"ok": True}
`,
} satisfies PatternLanguageExample;