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
  {
    language: "Angular",
    code: `import { Injectable } from '@angular/core';


abstract class PaymentStrategy {
  abstract pay(amount: number): void;
}


@Injectable({ providedIn: 'root' })
class CreditCardPayment extends PaymentStrategy {
  pay(amount: number): void {
    console.log(\`Paid $\${amount} with credit card\`);
  }
}


@Injectable({ providedIn: 'root' })
class PayPalPayment extends PaymentStrategy {
  pay(amount: number): void {
    console.log(\`Paid $\${amount} with PayPal\`);
  }
}


@Injectable({ providedIn: 'root' })
class CheckoutService {
  private strategy: PaymentStrategy;


  constructor(
    private creditCardPayment: CreditCardPayment,
    private payPalPayment: PayPalPayment,
  ) {
    this.strategy = this.payPalPayment;
  }


  setStrategy(method: 'credit-card' | 'paypal'): void {
    this.strategy =
      method === 'credit-card' ? this.creditCardPayment : this.payPalPayment;
  }


  checkout(amount: number): void {
    this.strategy.pay(amount);
  }
}`,
    explanation:
      "The Angular checkout service acts as the strategy context, while injectable payment services provide interchangeable payment behaviors selected at runtime.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";

interface PaymentStrategy {
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

function CheckoutButton({ checkout }: { checkout: CheckoutService }) {
  return <button onClick={() => checkout.checkout(250)}>Pay $250</button>;
}

export function App() {
  const checkout = useMemo(() => new CheckoutService(new PayPalPayment()), []);

  return (
    <main>
      <h1>Payment Processing</h1>
      <CheckoutButton checkout={checkout} />
    </main>
  );
}`,
    explanation:
      "The React example keeps checkout logic separate from payment implementation, so the selected strategy can change without affecting the caller.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";

interface PaymentStrategy {
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

function CheckoutButton({ checkout }: { checkout: CheckoutService }) {
  return (
    <Pressable
      onPress={() => checkout.checkout(250)}
      style={{ padding: 12, backgroundColor: "#111827", borderRadius: 8 }}
    >
      <Text style={{ color: "#fff", textAlign: "center" }}>Pay $250</Text>
    </Pressable>
  );
}

export function App() {
  const checkout = useMemo(() => new CheckoutService(new PayPalPayment()), []);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Payment Processing</Text>
        <CheckoutButton checkout={checkout} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native version uses the same strategy-based checkout flow, but presents the payment action through a mobile-friendly pressable control.",
  },
  {
    language: "C#",
    code: `using System;

public interface IPaymentStrategy
{
    void Pay(decimal amount);
}

public class CreditCardPayment : IPaymentStrategy
{
    public void Pay(decimal amount)
    {
        Console.WriteLine($"Paid {amount} with credit card");
    }
}

public class PayPalPayment : IPaymentStrategy
{
    public void Pay(decimal amount)
    {
        Console.WriteLine($"Paid {amount} with PayPal");
    }
}

public class CheckoutService
{
    private readonly IPaymentStrategy _strategy;

    public CheckoutService(IPaymentStrategy strategy)
    {
        _strategy = strategy;
    }

    public void Checkout(decimal amount)
    {
        _strategy.Pay(amount);
    }
}

var checkout = new CheckoutService(new PayPalPayment());
checkout.Checkout(250m);`,
    explanation:
      "The C# example keeps the checkout service dependent on a payment contract, allowing the payment algorithm to vary without changing the client code.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;

public interface IPaymentStrategy
{
    void Pay(decimal amount);
}

public class CreditCardPayment : IPaymentStrategy
{
    public void Pay(decimal amount)
    {
        Console.WriteLine($"Paid {amount} with credit card");
    }
}

public class PayPalPayment : IPaymentStrategy
{
    public void Pay(decimal amount)
    {
        Console.WriteLine($"Paid {amount} with PayPal");
    }
}

public class CheckoutService
{
    private IPaymentStrategy _strategy;

    public CheckoutService(IPaymentStrategy strategy)
    {
        _strategy = strategy;
    }

    public void SetStrategy(IPaymentStrategy strategy)
    {
        _strategy = strategy;
    }

    public void Checkout(decimal amount)
    {
        _strategy.Pay(amount);
    }
}

var services = new ServiceCollection();
services.AddSingleton<CreditCardPayment>();
services.AddSingleton<PayPalPayment>();
services.AddSingleton<CheckoutService>(provider =>
    new CheckoutService(provider.GetRequiredService<PayPalPayment>())
);

var provider = services.BuildServiceProvider();
var checkout = provider.GetRequiredService<CheckoutService>();
checkout.Checkout(250m);`,
    explanation:
      "The .NET version shows the same strategy pattern with dependency injection available, so the checkout context can swap payment behavior without changing callers.",
  },
];
