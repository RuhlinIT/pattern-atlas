import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java = {
  language: "java",
  code: `class CheckoutFacade {
  private final PaymentService payment;
  private final InventoryService inventory;
  private final NotificationService notifications;

  CheckoutFacade(PaymentService payment, InventoryService inventory, NotificationService notifications) {
    this.payment = payment;
    this.inventory = inventory;
    this.notifications = notifications;
  }

  OrderResult placeOrder(String orderId, List<String> items, int amount) {
    inventory.reserve(items);
    payment.charge(amount);
    notifications.sendReceipt(orderId);
    return new OrderResult(orderId, "confirmed");
  }
}
`,
} satisfies PatternLanguageExample;