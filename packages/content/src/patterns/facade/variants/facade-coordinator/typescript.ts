import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript = {
  language: "typescript",
  code: `type PaymentService = { charge(amount: number): Promise<void> };
type InventoryService = { reserve(items: string[]): Promise<void> };
type NotificationService = { sendReceipt(orderId: string): Promise<void> };

class CheckoutFacade {
  constructor(
    private payment: PaymentService,
    private inventory: InventoryService,
    private notifications: NotificationService,
  ) {}

  async placeOrder(orderId: string, items: string[], amount: number) {
    await this.inventory.reserve(items);
    await this.payment.charge(amount);
    await this.notifications.sendReceipt(orderId);
    return { orderId, status: "confirmed" };
  }
}
`,
} satisfies PatternLanguageExample;