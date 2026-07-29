import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const checkoutWorkflowExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `class AuthService {
                    authenticate(userId: string): boolean {
                        console.log(\`Authenticating \${userId}\`);
                        return true;
                    }
                }

                class PaymentService {
                    charge(userId: string, amount: number): void {
                        console.log(\`Charging \${userId} $\${amount}\`);
                    }
                }

                class InventoryService {
                    reserve(itemId: string): void {
                        console.log(\`Reserving item \${itemId}\`);
                    }
                }

                class NotificationService {
                    sendConfirmation(userId: string): void {
                        console.log(\`Sending confirmation to \${userId}\`);
                    }
                }

                class CheckoutFacade {
                    constructor(
                        private auth = new AuthService(),
                        private payment = new PaymentService(),
                        private inventory = new InventoryService(),
                        private notifications = new NotificationService(),
                    ) {}

                    placeOrder(userId: string, itemId: string, amount: number): void {
                        if (!this.auth.authenticate(userId)) {
                            throw new Error("Authentication failed");
                        }

                        this.inventory.reserve(itemId);
                        this.payment.charge(userId, amount);
                        this.notifications.sendConfirmation(userId);
                    }
                }

                const checkout = new CheckoutFacade();
                checkout.placeOrder("user-42", "book-7", 39.99);`,
    explanation:
      "The client calls one facade method, while the facade coordinates authentication, reservation, payment, and confirmation in the correct order.",
  },
  {
    language: "Java",
    code: `class AuthService {
                    public boolean authenticate(String userId) {
                        System.out.println("Authenticating " + userId);
                        return true;
                    }
                }

                class PaymentService {
                    public void charge(String userId, double amount) {
                        System.out.println("Charging " + userId + " $" + amount);
                    }
                }

                class InventoryService {
                    public void reserve(String itemId) {
                        System.out.println("Reserving item " + itemId);
                    }
                }

                class NotificationService {
                    public void sendConfirmation(String userId) {
                        System.out.println("Sending confirmation to " + userId);
                    }
                }

                class CheckoutFacade {
                    private final AuthService auth = new AuthService();
                    private final PaymentService payment = new PaymentService();
                    private final InventoryService inventory = new InventoryService();
                    private final NotificationService notifications = new NotificationService();

                    public void placeOrder(String userId, String itemId, double amount) {
                        if (!auth.authenticate(userId)) {
                            throw new RuntimeException("Authentication failed");
                        }

                        inventory.reserve(itemId);
                        payment.charge(userId, amount);
                        notifications.sendConfirmation(userId);
                    }
                }

                CheckoutFacade checkout = new CheckoutFacade();
                checkout.placeOrder("user-42", "book-7", 39.99);`,
    explanation:
      "The facade hides the multi-step checkout workflow so the client depends on one high-level API instead of four subsystem classes.",
  },
  {
    language: "Python",
    code: `class AuthService:
                    def authenticate(self, user_id: str) -> bool:
                        print(f"Authenticating {user_id}")
                        return True

                class PaymentService:
                    def charge(self, user_id: str, amount: float) -> None:
                        print(f"Charging {user_id} \${amount}")
                class InventoryService:
                    def reserve(self, item_id: str) -> None:
                        print(f"Reserving item {item_id}")

                class NotificationService:
                    def send_confirmation(self, user_id: str) -> None:
                        print(f"Sending confirmation to {user_id}")

                class CheckoutFacade:
                    def __init__(self) -> None:
                        self.auth = AuthService()
                        self.payment = PaymentService()
                        self.inventory = InventoryService()
                        self.notifications = NotificationService()

                    def place_order(self, user_id: str, item_id: str, amount: float) -> None:
                        if not self.auth.authenticate(user_id):
                            raise ValueError("Authentication failed")

                        self.inventory.reserve(item_id)
                        self.payment.charge(user_id, amount)
                        self.notifications.send_confirmation(user_id)

                checkout = CheckoutFacade()
                checkout.place_order("user-42", "book-7", 39.99)`,
    explanation:
      "The checkout facade gives callers one entrypoint while internally coordinating the subsystem calls needed to complete the order.",
  },
  {
    language: "Angular",
    code: `import { Injectable } from '@angular/core';


                @Injectable({ providedIn: 'root' })
                class AuthService {
                    authenticate(userId: string): boolean {
                        console.log(\`Authenticating \${userId}\`);
                        return true;
                    }
                }


                @Injectable({ providedIn: 'root' })
                class PaymentService {
                    charge(userId: string, amount: number): void {
                        console.log(\`Charging \${userId} $\${amount}\`);
                    }
                }


                @Injectable({ providedIn: 'root' })
                class InventoryService {
                    reserve(itemId: string): void {
                        console.log(\`Reserving item \${itemId}\`);
                    }
                }


                @Injectable({ providedIn: 'root' })
                class NotificationService {
                    sendConfirmation(userId: string): void {
                        console.log(\`Sending confirmation to \${userId}\`);
                    }
                }


                @Injectable({ providedIn: 'root' })
                class CheckoutFacade {
                    constructor(
                        private auth: AuthService,
                        private payment: PaymentService,
                        private inventory: InventoryService,
                        private notifications: NotificationService,
                    ) {}


                    placeOrder(userId: string, itemId: string, amount: number): void {
                        if (!this.auth.authenticate(userId)) {
                            throw new Error('Authentication failed');
                        }


                        this.inventory.reserve(itemId);
                        this.payment.charge(userId, amount);
                        this.notifications.sendConfirmation(userId);
                    }
                }`,
    explanation:
      "The Angular facade service gives components one checkout API while dependency injection supplies the subsystem services it coordinates internally.",
  },
];
