import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Checkout workflow",
  code: `class AuthService {
    boolean validate(String userId) {
        return userId != null && !userId.isEmpty();
    }
}

class InventoryService {
    boolean reserveItems(String[] items) {
        return items != null && items.length > 0;
    }
}

class PaymentService {
    boolean charge(int amount) {
        return amount > 0;
    }
}

class NotificationService {
    boolean sendReceipt(String userId) {
        return userId != null && !userId.isEmpty();
    }
}

class CheckoutFacade {
    private final AuthService authService;
    private final InventoryService inventoryService;
    private final PaymentService paymentService;
    private final NotificationService notificationService;

    CheckoutFacade(
        AuthService authService,
        InventoryService inventoryService,
        PaymentService paymentService,
        NotificationService notificationService
    ) {
        this.authService = authService;
        this.inventoryService = inventoryService;
        this.paymentService = paymentService;
        this.notificationService = notificationService;
    }

    boolean placeOrder(String userId, String[] items, int amount) {
        if (!authService.validate(userId)) return false;
        if (!inventoryService.reserveItems(items)) return false;
        if (!paymentService.charge(amount)) return false;
        return notificationService.sendReceipt(userId);
    }
}

class Example {
    public static void main(String[] args) {
        CheckoutFacade facade = new CheckoutFacade(
            new AuthService(),
            new InventoryService(),
            new PaymentService(),
            new NotificationService()
        );
        facade.placeOrder("user-1", new String[] {"item-a", "item-b"}, 100);
    }
}`,
  explanation:
    "Expose one checkout method that coordinates authentication, inventory, payment, and notification steps.",
};