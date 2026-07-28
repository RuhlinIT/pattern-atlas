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
    languages: ["TypeScript", "Java", "Python"],
    platforms: ["Web", "Backend", "Services"],
    integrationNotes:
      "Strategies can cross codebases through shared contracts, API selection rules, or runtime configuration.",
    scenarios: [
      {
        slug: "payment-processing",
        title: "Payment processing",
        summary:
          "A checkout flow delegates payment behavior to a selected strategy so the order flow stays stable while payment methods vary.",
        languageExamples: [
          {
            language: "TypeScript",
            code: `interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCardPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(\`Paid $\${amount} with credit card\`);
  }
}

class PayPalPayment implements PaymentStrategy {
  pay(amount: number): void {
    console.log(\`Paid $\${amount} with PayPal\`);
  }
}

class CheckoutService {
  constructor(private strategy: PaymentStrategy) {}

  checkout(amount: number): void {
    this.strategy.pay(amount);
  }
}

const checkout = new CheckoutService(new PayPalPayment());
checkout.checkout(250);`,
            explanation:
              "The checkout service depends on a payment contract instead of concrete payment logic, so payment methods can vary without changing the caller.",
          },
          {
            language: "Java",
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

class CheckoutService {
    private final PaymentStrategy strategy;

    public CheckoutService(PaymentStrategy strategy) {
        this.strategy = strategy;
    }

    public void checkout(double amount) {
        strategy.pay(amount);
    }
}

CheckoutService checkout = new CheckoutService(new PayPalPayment());
checkout.checkout(250.00);`,
            explanation:
              "The payment algorithm is selected through a shared interface, which keeps checkout stable while provider behavior changes.",
          },
          {
            language: "Python",
            code: `from abc import ABC, abstractmethod

class PaymentStrategy(ABC):
    @abstractmethod
    def pay(self, amount: float) -> None:
        pass

class CreditCardPayment(PaymentStrategy):
    def pay(self, amount: float) -> None:
        print(f"Paid {amount} with credit card")

class PayPalPayment(PaymentStrategy):
    def pay(self, amount: float) -> None:
        print(f"Paid {amount} with PayPal")

class CheckoutService:
    def __init__(self, strategy: PaymentStrategy) -> None:
        self.strategy = strategy

    def checkout(self, amount: float) -> None:
        self.strategy.pay(amount)

checkout = CheckoutService(PayPalPayment())
checkout.checkout(250.0)`,
            explanation:
              "The checkout flow stays simple because payment behavior is delegated to the selected strategy implementation.",
          },
        ],
      },
      {
        slug: "shipping-cost-calculation",
        title: "Shipping cost calculation",
        summary:
          "An order service chooses a shipping algorithm based on delivery type without embedding pricing rules in one large conditional block.",
        languageExamples: [
          {
            language: "TypeScript",
            code: `interface ShippingStrategy {
  calculate(weight: number): number;
}

class StandardShipping implements ShippingStrategy {
  calculate(weight: number): number {
    return 5 + weight * 0.5;
  }
}

class ExpressShipping implements ShippingStrategy {
  calculate(weight: number): number {
    return 15 + weight * 1.25;
  }
}

class ShippingService {
  constructor(private strategy: ShippingStrategy) {}

  getCost(weight: number): number {
    return this.strategy.calculate(weight);
  }
}

const shipping = new ShippingService(new ExpressShipping());
console.log(shipping.getCost(8));`,
            explanation:
              "Shipping rules are isolated behind a common interface so pricing behavior can change by delivery mode without rewriting the service.",
          },
          {
            language: "Java",
            code: `interface ShippingStrategy {
    double calculate(double weight);
}

class StandardShipping implements ShippingStrategy {
    public double calculate(double weight) {
        return 5 + weight * 0.5;
    }
}

class ExpressShipping implements ShippingStrategy {
    public double calculate(double weight) {
        return 15 + weight * 1.25;
    }
}

class ShippingService {
    private final ShippingStrategy strategy;

    public ShippingService(ShippingStrategy strategy) {
        this.strategy = strategy;
    }

    public double getCost(double weight) {
        return strategy.calculate(weight);
    }
}

ShippingService shipping = new ShippingService(new ExpressShipping());
System.out.println(shipping.getCost(8));`,
            explanation:
              "The shipping service remains stable while rate calculation varies through interchangeable strategies.",
          },
          {
            language: "Python",
            code: `from abc import ABC, abstractmethod

class ShippingStrategy(ABC):
    @abstractmethod
    def calculate(self, weight: float) -> float:
        pass

class StandardShipping(ShippingStrategy):
    def calculate(self, weight: float) -> float:
        return 5 + weight * 0.5

class ExpressShipping(ShippingStrategy):
    def calculate(self, weight: float) -> float:
        return 15 + weight * 1.25

class ShippingService:
    def __init__(self, strategy: ShippingStrategy) -> None:
        self.strategy = strategy

    def get_cost(self, weight: float) -> float:
        return self.strategy.calculate(weight)

shipping = ShippingService(ExpressShipping())
print(shipping.get_cost(8))`,
            explanation:
              "The service delegates pricing logic to the selected strategy so shipping options can evolve independently of the calling code.",
          },
        ],
      },
      {
        slug: "notification-delivery",
        title: "Notification delivery",
        summary:
          "A notification service picks a delivery channel strategy so the caller does not manage channel-specific branching logic.",
        languageExamples: [
          {
            language: "TypeScript",
            code: `interface NotificationStrategy {
  send(message: string): void;
}

class EmailNotification implements NotificationStrategy {
  send(message: string): void {
    console.log(\`Email: \${message}\`);
  }
}

class SmsNotification implements NotificationStrategy {
  send(message: string): void {
    console.log(\`SMS: \${message}\`);
  }
}

class NotificationService {
  constructor(private strategy: NotificationStrategy) {}

  notify(message: string): void {
    this.strategy.send(message);
  }
}

const notifier = new NotificationService(new SmsNotification());
notifier.notify("Deployment completed");`,
            explanation:
              "The service stays focused on sending a notification while the chosen strategy handles channel-specific behavior.",
          },
          {
            language: "Java",
            code: `interface NotificationStrategy {
    void send(String message);
}

class EmailNotification implements NotificationStrategy {
    public void send(String message) {
        System.out.println("Email: " + message);
    }
}

class SmsNotification implements NotificationStrategy {
    public void send(String message) {
        System.out.println("SMS: " + message);
    }
}

class NotificationService {
    private final NotificationStrategy strategy;

    public NotificationService(NotificationStrategy strategy) {
        this.strategy = strategy;
    }

    public void notify(String message) {
        strategy.send(message);
    }
}

NotificationService notifier = new NotificationService(new SmsNotification());
notifier.notify("Deployment completed");`,
            explanation:
              "Channel-specific logic is isolated behind the notification interface, making new delivery methods easier to add.",
          },
          {
            language: "Python",
            code: `from abc import ABC, abstractmethod

class NotificationStrategy(ABC):
    @abstractmethod
    def send(self, message: str) -> None:
        pass

class EmailNotification(NotificationStrategy):
    def send(self, message: str) -> None:
        print(f"Email: {message}")

class SmsNotification(NotificationStrategy):
    def send(self, message: str) -> None:
        print(f"SMS: {message}")

class NotificationService:
    def __init__(self, strategy: NotificationStrategy) -> None:
        self.strategy = strategy

    def notify(self, message: str) -> None:
        self.strategy.send(message)

notifier = NotificationService(SmsNotification())
notifier.notify("Deployment completed")`,
            explanation:
              "The caller delegates channel behavior to the selected strategy, which keeps notification expansion simpler and safer.",
          },
        ],
      },
    ],
    realWorldExamples: [
      {
        title: "Checkout payment providers",
        description:
          "Choose Stripe, PayPal, or bank transfer behavior behind a stable checkout flow.",
      },
      {
        title: "Shipping rate engines",
        description:
          "Switch between standard, express, and international pricing algorithms.",
      },
      {
        title: "Messaging channels",
        description:
          "Select email, SMS, or push delivery based on user preference or channel availability.",
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
    languages: ["TypeScript", "Java", "Python"],
    platforms: ["Frontend", "Backend", "Integrations"],
    integrationNotes:
      "Adapters are often the safest way to connect different codebases, especially during migrations or legacy modernization.",
    scenarios: [],
    realWorldExamples: [],
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
    languages: ["TypeScript", "Java", "Python"],
    platforms: ["Frontend", "Backend", "Event-driven systems"],
    integrationNotes:
      "Inside one app this may look like listeners or subscriptions, while across systems it often becomes pub-sub or event streaming.",
    scenarios: [],
    realWorldExamples: [],
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
    languages: ["TypeScript", "Java", "Python"],
    platforms: ["Applications", "APIs", "Service layers"],
    integrationNotes:
      "Facades are useful when exposing a stable boundary over a multi-service or mixed-language backend.",
    scenarios: [],
    realWorldExamples: [],
  },
];