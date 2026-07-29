import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const paymentGatewayExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface PaymentProcessor {
    pay(amount: number): void;
  }
  
  class LegacyPaymentGateway {
    makePayment(totalInCents: number): void {
      console.log(\`Legacy gateway charged \${totalInCents} cents\`);
    }
  }
  
  class PaymentGatewayAdapter implements PaymentProcessor {
    constructor(private gateway: LegacyPaymentGateway) {}
  
    pay(amount: number): void {
      const totalInCents = Math.round(amount * 100);
      this.gateway.makePayment(totalInCents);
    }
  }
  
  class CheckoutService {
    constructor(private processor: PaymentProcessor) {}
  
    checkout(amount: number): void {
      this.processor.pay(amount);
    }
  }
  
  const processor = new PaymentGatewayAdapter(new LegacyPaymentGateway());
  const checkout = new CheckoutService(processor);
  checkout.checkout(49.99);`,
    explanation:
      "The adapter translates the app's pay contract into the legacy gateway's makePayment method and expected cents-based input.",
  },
  {
    language: "Java",
    code: `interface PaymentProcessor {
      void pay(double amount);
  }
  
  class LegacyPaymentGateway {
      public void makePayment(int totalInCents) {
          System.out.println("Legacy gateway charged " + totalInCents + " cents");
      }
  }
  
  class PaymentGatewayAdapter implements PaymentProcessor {
      private final LegacyPaymentGateway gateway;
  
      public PaymentGatewayAdapter(LegacyPaymentGateway gateway) {
          this.gateway = gateway;
      }
  
      public void pay(double amount) {
          int totalInCents = (int) Math.round(amount * 100);
          gateway.makePayment(totalInCents);
      }
  }
  
  class CheckoutService {
      private final PaymentProcessor processor;
  
      public CheckoutService(PaymentProcessor processor) {
          this.processor = processor;
      }
  
      public void checkout(double amount) {
          processor.pay(amount);
      }
  }
  
  PaymentProcessor processor =
      new PaymentGatewayAdapter(new LegacyPaymentGateway());
  CheckoutService checkout = new CheckoutService(processor);
  checkout.checkout(49.99);`,
    explanation:
      "The checkout service depends on the application interface, while the adapter handles the method and data conversion for the legacy gateway.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod
  
  class PaymentProcessor(ABC):
      @abstractmethod
      def pay(self, amount: float) -> None:
          pass
  
  class LegacyPaymentGateway:
      def make_payment(self, total_in_cents: int) -> None:
          print(f"Legacy gateway charged {total_in_cents} cents")
  
  class PaymentGatewayAdapter(PaymentProcessor):
      def __init__(self, gateway: LegacyPaymentGateway) -> None:
          self.gateway = gateway
  
      def pay(self, amount: float) -> None:
          total_in_cents = round(amount * 100)
          self.gateway.make_payment(total_in_cents)
  
  class CheckoutService:
      def __init__(self, processor: PaymentProcessor) -> None:
          self.processor = processor
  
      def checkout(self, amount: float) -> None:
          self.processor.pay(amount)
  
  processor = PaymentGatewayAdapter(LegacyPaymentGateway())
  checkout = CheckoutService(processor)
  checkout.checkout(49.99)`,
    explanation:
      "The adapter lets checkout code remain stable even though the integrated gateway uses a different method name and value format.",
  },
  {
    language: "Angular",
    code: `import { Injectable } from '@angular/core';


  abstract class PaymentProcessor {
    abstract pay(amount: number): void;
  }


  @Injectable({ providedIn: 'root' })
  class LegacyPaymentGateway {
    makePayment(totalInCents: number): void {
      console.log(\`Legacy gateway charged \${totalInCents} cents\`);
    }
  }


  @Injectable({ providedIn: 'root' })
  class PaymentGatewayAdapter extends PaymentProcessor {
    constructor(private gateway: LegacyPaymentGateway) {
      super();
    }


    pay(amount: number): void {
      const totalInCents = Math.round(amount * 100);
      this.gateway.makePayment(totalInCents);
    }
  }


  @Injectable({ providedIn: 'root' })
  class CheckoutService {
    constructor(private processor: PaymentGatewayAdapter) {}


    checkout(amount: number): void {
      this.processor.pay(amount);
    }
  }`,
    explanation:
      "The Angular adapter service preserves the app's payment contract while dependency injection supplies the legacy gateway it wraps and translates for.",
  },
];
