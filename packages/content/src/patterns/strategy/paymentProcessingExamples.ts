import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const paymentProcessingExamples: PatternLanguageExample[] = [
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
];
