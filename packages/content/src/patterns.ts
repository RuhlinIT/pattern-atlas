import type { PatternRecord } from "@atlas-patterns/schemas";

export const patterns: PatternRecord[] = [
  {
    slug: "strategy",
    name: "Strategy",
    category: "Behavioral",
    problem:
      "A system needs to switch between interchangeable behaviors without hardcoding branching logic everywhere.",
    intent:
      "Encapsulate a family of algorithms or behaviors behind a common contract so they can be selected and swapped cleanly.",
    tradeoffs: [
      "Adds more moving parts than a direct conditional approach",
      "Works best when behavior variations are real and likely to grow",
    ],
    languages: ["TypeScript", "Java", "Python", "Go"],
    platforms: ["Web", "Backend", "Services"],
    integrationNotes:
      "Strategies can cross codebases through shared contracts, API selection rules, or runtime configuration.",
    examples: [
      {
        language: "TypeScript",
        title: "Checkout discount strategy",
        summary:
          "Select a discount rule at runtime without scattering pricing conditionals across checkout logic.",
        code: `interface DiscountStrategy {
  apply(total: number): number;
}

class NoDiscount implements DiscountStrategy {
  apply(total: number): number {
    return total;
  }
}

class PercentageDiscount implements DiscountStrategy {
  constructor(private percentage: number) {}

  apply(total: number): number {
    return total - total * this.percentage;
  }
}

class CheckoutService {
  constructor(private strategy: DiscountStrategy) {}

  total(amount: number): number {
    return this.strategy.apply(amount);
  }
}

const checkout = new CheckoutService(new PercentageDiscount(0.1));
console.log(checkout.total(100));`,
        explanation:
          "The checkout service depends on the strategy contract instead of a specific discount rule. That makes behavior changes easier to extend for campaigns, customer tiers, or testing.",
      },
      {
        language: "Java",
        title: "Payment processing strategy",
        summary:
          "Choose a payment behavior behind a stable interface so checkout does not depend on one provider.",
        code: `interface PaymentStrategy {
    void pay(double amount);
}

class CreditCardPayment implements PaymentStrategy {
    public void pay(double amount) {
        System.out.println("Paid " + amount + " with credit card");
    }
}

class PayPalPayment implements PaymentStrategy {
    public void pay(double amount) {
        System.out.println("Paid " + amount + " with PayPal");
    }
}

class PaymentService {
    private final PaymentStrategy strategy;

    public PaymentService(PaymentStrategy strategy) {
        this.strategy = strategy;
    }

    public void checkout(double amount) {
        strategy.pay(amount);
    }
}

PaymentService service = new PaymentService(new PayPalPayment());
service.checkout(250.00);`,
        explanation:
          "The payment service stays stable while provider behavior changes behind the interface. That is useful when provider choice varies by region, rules, or feature flags.",
      },
      {
        language: "Python",
        title: "Notification delivery strategy",
        summary:
          "Swap delivery behavior by channel without embedding branching logic inside the caller.",
        code: `from abc import ABC, abstractmethod

class NotificationStrategy(ABC):
    @abstractmethod
    def send(self, message: str) -> None:
        pass

class EmailStrategy(NotificationStrategy):
    def send(self, message: str) -> None:
        print(f"Sending email: {message}")

class SmsStrategy(NotificationStrategy):
    def send(self, message: str) -> None:
        print(f"Sending SMS: {message}")

class NotificationService:
    def __init__(self, strategy: NotificationStrategy) -> None:
        self.strategy = strategy

    def notify(self, message: str) -> None:
        self.strategy.send(message)

service = NotificationService(SmsStrategy())
service.notify("Deployment completed")`,
        explanation:
          "The service delegates channel-specific work to the selected strategy. That keeps the caller simple and makes new channels safer to add later.",
      },
    ],
  },
  {
    slug: "adapter",
    name: "Adapter",
    category: "Structural",
    problem:
      "A new system needs to work with an existing interface, library, or service that does not match the expected shape.",
    intent:
      "Translate one interface into another so incompatible parts can collaborate without changing their internals.",
    tradeoffs: [
      "Can hide deeper domain mismatch if overused",
      "May introduce a growing translation layer that needs clear ownership",
    ],
    languages: ["TypeScript", "C#", "Java", "Python"],
    platforms: ["Frontend", "Backend", "Integrations"],
    integrationNotes:
      "Adapters are often the safest way to connect different codebases, especially during migrations or legacy modernization.",
    examples: [],
  },
  {
    slug: "observer",
    name: "Observer",
    category: "Behavioral",
    problem:
      "Multiple parts of a system need to react when state changes, without tightly coupling every consumer to the producer.",
    intent:
      "Define a subscription relationship so dependents can be notified automatically when the source changes.",
    tradeoffs: [
      "Can become hard to trace when many subscribers exist",
      "Event ordering and side effects need discipline",
    ],
    languages: ["TypeScript", "JavaScript", "Java", "Kotlin"],
    platforms: ["Frontend", "Backend", "Event-driven systems"],
    integrationNotes:
      "Inside one app this may look like listeners or subscriptions, while across systems it often becomes pub-sub or event streaming.",
    examples: [],
  },
  {
    slug: "facade",
    name: "Facade",
    category: "Structural",
    problem:
      "A subsystem is too complex or noisy for most consumers to use directly.",
    intent:
      "Provide a simpler surface over a more complex set of classes, modules, or services.",
    tradeoffs: [
      "Can become a dumping ground if boundaries are unclear",
      "May obscure useful lower-level capabilities from advanced consumers",
    ],
    languages: ["TypeScript", "PHP", "Java", "C#"],
    platforms: ["Applications", "APIs", "Service layers"],
    integrationNotes:
      "Facades are useful when exposing a stable boundary over a multi-service or mixed-language backend.",
    examples: [],
  },
];