import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Checkout workflow",
  code: `class AuthService:
    def validate(self, user_id):
        return user_id is not None and user_id != ""

class InventoryService:
    def reserve_items(self, items):
        return items is not None and len(items) > 0

class PaymentService:
    def charge(self, amount):
        return amount > 0

class NotificationService:
    def send_receipt(self, user_id):
        return user_id is not None and user_id != ""

class CheckoutFacade:
    def __init__(self, auth_service, inventory_service, payment_service, notification_service):
        self.auth_service = auth_service
        self.inventory_service = inventory_service
        self.payment_service = payment_service
        self.notification_service = notification_service

    def place_order(self, user_id, items, amount):
        if not self.auth_service.validate(user_id):
            return False
        if not self.inventory_service.reserve_items(items):
            return False
        if not self.payment_service.charge(amount):
            return False
        return self.notification_service.send_receipt(user_id)

facade = CheckoutFacade(
    AuthService(),
    InventoryService(),
    PaymentService(),
    NotificationService(),
)
facade.place_order("user-1", ["item-a", "item-b"], 100)`,
  explanation:
    "Expose one checkout method that coordinates authentication, inventory, payment, and notification steps.",
};