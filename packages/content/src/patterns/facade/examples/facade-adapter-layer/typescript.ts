import type { PatternLanguageExample } from "@atlas-patterns/schemas";

class LegacyPaymentClient {
  submit(amount: number) {
    return amount > 0;
  }
}

class InventoryClient {
  reserve(items: string[]) {
    return items.length > 0;
  }
}

class CustomerClient {
  verify(customerId: string) {
    return customerId.length > 0;
  }
}

class CommerceFacade {
  constructor(
    private payment: LegacyPaymentClient,
    private inventory: InventoryClient,
    private customer: CustomerClient,
  ) {}

  checkout(customerId: string, items: string[], amount: number) {
    if (!this.customer.verify(customerId)) return false;
    if (!this.inventory.reserve(items)) return false;
    return this.payment.submit(amount);
  }
}

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Adapter-backed facade",
  code: `class LegacyPaymentClient {
  submit(amount: number) {
    return amount > 0;
  }
}

class InventoryClient {
  reserve(items: string[]) {
    return items.length > 0;
  }
}

class CustomerClient {
  verify(customerId: string) {
    return customerId.length > 0;
  }
}

class CommerceFacade {
  constructor(
    private payment: LegacyPaymentClient,
    private inventory: InventoryClient,
    private customer: CustomerClient,
  ) {}

  checkout(customerId: string, items: string[], amount: number) {
    if (!this.customer.verify(customerId)) return false;
    if (!this.inventory.reserve(items)) return false;
    return this.payment.submit(amount);
  }
}

new CommerceFacade(new LegacyPaymentClient(), new InventoryClient(), new CustomerClient()).checkout("c-1", ["sku-1"], 25);`,
  explanation: "Present a clean boundary over uneven internal interfaces.",
};