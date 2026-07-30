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
  {
    language: "React",
    code: `import React, { useMemo } from "react";

interface PaymentProcessor {
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

function CheckoutButton({ checkout }: { checkout: CheckoutService }) {
  return (
    <button onClick={() => checkout.checkout(49.99)}>
      Pay $49.99
    </button>
  );
}

export function App() {
  const processor = useMemo(() => new PaymentGatewayAdapter(new LegacyPaymentGateway()), []);
  const checkout = useMemo(() => new CheckoutService(processor), [processor]);

  return (
    <main>
      <h1>Checkout</h1>
      <CheckoutButton checkout={checkout} />
    </main>
  );
}`,
    explanation:
      "The React example keeps checkout code dependent on a payment processor interface, while the adapter converts dollars into the legacy gateway's cents-based payment call.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";

interface PaymentProcessor {
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

function CheckoutButton({ checkout }: { checkout: CheckoutService }) {
  return (
    <Pressable
      onPress={() => checkout.checkout(49.99)}
      style={{ padding: 12, backgroundColor: "#111827", borderRadius: 8 }}
    >
      <Text style={{ color: "#fff", textAlign: "center" }}>Pay $49.99</Text>
    </Pressable>
  );
}

export function App() {
  const processor = useMemo(() => new PaymentGatewayAdapter(new LegacyPaymentGateway()), []);
  const checkout = useMemo(() => new CheckoutService(processor), [processor]);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Checkout</Text>
        <CheckoutButton checkout={checkout} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native example uses the same adapter flow, but triggers payment from a mobile-friendly pressable UI instead of a web button.",
  },
  {
    language: "C#",
    code: `using System;

public interface IPaymentProcessor
{
    void Pay(double amount);
}

public class LegacyPaymentGateway
{
    public void MakePayment(int totalInCents)
    {
        Console.WriteLine($"Legacy gateway charged {totalInCents} cents");
    }
}

public class PaymentGatewayAdapter : IPaymentProcessor
{
    private readonly LegacyPaymentGateway _gateway;

    public PaymentGatewayAdapter(LegacyPaymentGateway gateway)
    {
        _gateway = gateway;
    }

    public void Pay(double amount)
    {
        var totalInCents = (int)Math.Round(amount * 100);
        _gateway.MakePayment(totalInCents);
    }
}

public class CheckoutService
{
    private readonly IPaymentProcessor _processor;

    public CheckoutService(IPaymentProcessor processor)
    {
        _processor = processor;
    }

    public void Checkout(double amount)
    {
        _processor.Pay(amount);
    }
}

var processor = new PaymentGatewayAdapter(new LegacyPaymentGateway());
var checkout = new CheckoutService(processor);
checkout.Checkout(49.99);`,
    explanation:
      "The C# adapter translates the app's payment contract into the legacy gateway's cents-based MakePayment call.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;

public interface IPaymentProcessor
{
    void Pay(double amount);
}

public class LegacyPaymentGateway
{
    public void MakePayment(int totalInCents)
    {
        Console.WriteLine($"Legacy gateway charged {totalInCents} cents");
    }
}

public class PaymentGatewayAdapter : IPaymentProcessor
{
    private readonly LegacyPaymentGateway _gateway;

    public PaymentGatewayAdapter(LegacyPaymentGateway gateway)
    {
        _gateway = gateway;
    }

    public void Pay(double amount)
    {
        var totalInCents = (int)Math.Round(amount * 100);
        _gateway.MakePayment(totalInCents);
    }
}

public class CheckoutService
{
    private readonly IPaymentProcessor _processor;

    public CheckoutService(IPaymentProcessor processor)
    {
        _processor = processor;
    }

    public void Checkout(double amount)
    {
        _processor.Pay(amount);
    }
}

var services = new ServiceCollection();
services.AddSingleton<LegacyPaymentGateway>();
services.AddSingleton<IPaymentProcessor, PaymentGatewayAdapter>();
services.AddTransient<CheckoutService>();

var provider = services.BuildServiceProvider();
var checkout = provider.GetRequiredService<CheckoutService>();
checkout.Checkout(49.99);`,
    explanation:
      "The .NET version shows the same adapter with dependency injection, keeping checkout code isolated from the legacy gateway's implementation details.",
  },
];
