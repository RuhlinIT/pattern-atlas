import type { PatternLanguageExample } from "@atlas-patterns/schemas";

class AuthService {
  validate(userId: string) {
    return userId.length > 0;
  }
}

class InventoryService {
  reserve(items: string[]) {
    return items.length > 0;
  }
}

class PaymentService {
  charge(amount: number) {
    return amount > 0;
  }
}

class CheckoutFacade {
  constructor(
    private auth: AuthService,
    private inventory: InventoryService,
    private payment: PaymentService,
  ) {}

  placeOrder(userId: string, items: string[], amount: number) {
    if (!this.auth.validate(userId)) return false;
    if (!this.inventory.reserve(items)) return false;
    return this.payment.charge(amount);
  }
}

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Checkout workflow",
  code: `class AuthService {
  validate(userId: string) {
    return userId.length > 0;
  }
}

class InventoryService {
  reserve(items: string[]) {
    return items.length > 0;
  }
}

class PaymentService {
  charge(amount: number) {
    return amount > 0;
  }
}

class CheckoutFacade {
  constructor(
    private auth: AuthService,
    private inventory: InventoryService,
    private payment: PaymentService,
  ) {}

  placeOrder(userId: string, items: string[], amount: number) {
    if (!this.auth.validate(userId)) return false;
    if (!this.inventory.reserve(items)) return false;
    return this.payment.charge(amount);
  }
}

const facade = new CheckoutFacade(
  new AuthService(),
  new InventoryService(),
  new PaymentService(),
);
facade.placeOrder("user-1", ["item-a"], 100);`,
  explanation: "Expose one checkout method that coordinates authentication, inventory, and payment steps.",
};