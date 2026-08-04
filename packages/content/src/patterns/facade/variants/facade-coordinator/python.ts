import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python = {
  language: "python",
  code: `class CheckoutFacade:
    def __init__(self, payment, inventory, notifications):
        self.payment = payment
        self.inventory = inventory
        self.notifications = notifications

    def place_order(self, order_id, items, amount):
        self.inventory.reserve(items)
        self.payment.charge(amount)
        self.notifications.send_receipt(order_id)
        return {"orderId": order_id, "status": "confirmed"}
`,
} satisfies PatternLanguageExample;