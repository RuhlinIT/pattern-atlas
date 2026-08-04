import type { PatternLanguageExample } from "@atlas-patterns/schemas";

class AuthService {
  validate(userId: string) {
    return userId.length > 0;
  }
}

class BillingService {
  charge(amount: number) {
    return amount > 0;
  }
}

class NotificationService {
  send(orderId: string) {
    return orderId.length > 0;
  }
}

class OrderFacade {
  constructor(
    private auth: AuthService,
    private billing: BillingService,
    private notification: NotificationService,
  ) {}

  placeOrder(userId: string, amount: number) {
    if (!this.auth.validate(userId)) return false;
    if (!this.billing.charge(amount)) return false;
    return this.notification.send(userId);
  }
}

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Coordinator facade",
  code: `class AuthService {
  validate(userId: string) {
    return userId.length > 0;
  }
}

class BillingService {
  charge(amount: number) {
    return amount > 0;
  }
}

class NotificationService {
  send(orderId: string) {
    return orderId.length > 0;
  }
}

class OrderFacade {
  constructor(
    private auth: AuthService,
    private billing: BillingService,
    private notification: NotificationService,
  ) {}

  placeOrder(userId: string, amount: number) {
    if (!this.auth.validate(userId)) return false;
    if (!this.billing.charge(amount)) return false;
    return this.notification.send(userId);
  }
}

new OrderFacade(new AuthService(), new BillingService(), new NotificationService()).placeOrder("user-1", 99);`,
  explanation: "Hide workflow orchestration behind a stable API.",
};