import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const shippingCostCalculationExamples: PatternLanguageExample[] = [
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
  {
    language: "Angular",
    code: `import { Injectable } from '@angular/core';


abstract class ShippingStrategy {
  abstract calculate(weight: number): number;
}


@Injectable({ providedIn: 'root' })
class StandardShipping extends ShippingStrategy {
  calculate(weight: number): number {
    return 5 + weight * 0.5;
  }
}


@Injectable({ providedIn: 'root' })
class ExpressShipping extends ShippingStrategy {
  calculate(weight: number): number {
    return 15 + weight * 1.25;
  }
}


@Injectable({ providedIn: 'root' })
class ShippingService {
  private strategy: ShippingStrategy;


  constructor(
    private standardShipping: StandardShipping,
    private expressShipping: ExpressShipping,
  ) {
    this.strategy = this.expressShipping;
  }


  setStrategy(method: 'standard' | 'express'): void {
    this.strategy =
      method === 'standard' ? this.standardShipping : this.expressShipping;
  }


  getCost(weight: number): number {
    return this.strategy.calculate(weight);
  }
}`,
    explanation:
      "The Angular service acts as the strategy context, while injectable shipping strategies provide interchangeable pricing behavior selected at runtime.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";

interface ShippingStrategy {
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

function ShippingQuote({ shipping }: { shipping: ShippingService }) {
  return <p>Cost for 8 lb: {shipping.getCost(8).toFixed(2)}</p>;
}

export function App() {
  const shipping = useMemo(() => new ShippingService(new ExpressShipping()), []);

  return (
    <main>
      <h1>Shipping Cost Calculation</h1>
      <ShippingQuote shipping={shipping} />
    </main>
  );
}`,
    explanation:
      "The React example keeps shipping pricing behind a strategy interface, so the UI can ask for a quote without knowing how the cost is computed.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";

interface ShippingStrategy {
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

function ShippingQuote({ shipping }: { shipping: ShippingService }) {
  return (
    <Text>{"Cost for 8 lb: $" + shipping.getCost(8).toFixed(2)}</Text>
  );
}

export function App() {
  const shipping = useMemo(() => new ShippingService(new ExpressShipping()), []);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Shipping Cost Calculation</Text>
        <ShippingQuote shipping={shipping} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native version uses the same strategy-based shipping calculation, but presents the quote in a mobile-friendly layout.",
  },
  {
    language: "C#",
    code: `using System;

public interface IShippingStrategy
{
    decimal Calculate(decimal weight);
}

public class StandardShipping : IShippingStrategy
{
    public decimal Calculate(decimal weight)
    {
        return 5m + weight * 0.5m;
    }
}

public class ExpressShipping : IShippingStrategy
{
    public decimal Calculate(decimal weight)
    {
        return 15m + weight * 1.25m;
    }
}

public class ShippingService
{
    private readonly IShippingStrategy _strategy;

    public ShippingService(IShippingStrategy strategy)
    {
        _strategy = strategy;
    }

    public decimal GetCost(decimal weight)
    {
        return _strategy.Calculate(weight);
    }
}

var shipping = new ShippingService(new ExpressShipping());
Console.WriteLine(shipping.GetCost(8m));`,
    explanation:
      "The C# example isolates shipping rules behind a shared contract, so the delivery mode can change without rewriting the service.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;

public interface IShippingStrategy
{
    decimal Calculate(decimal weight);
}

public class StandardShipping : IShippingStrategy
{
    public decimal Calculate(decimal weight)
    {
        return 5m + weight * 0.5m;
    }
}

public class ExpressShipping : IShippingStrategy
{
    public decimal Calculate(decimal weight)
    {
        return 15m + weight * 1.25m;
    }
}

public class ShippingService
{
    private IShippingStrategy _strategy;

    public ShippingService(IShippingStrategy strategy)
    {
        _strategy = strategy;
    }

    public void SetStrategy(IShippingStrategy strategy)
    {
        _strategy = strategy;
    }

    public decimal GetCost(decimal weight)
    {
        return _strategy.Calculate(weight);
    }
}

var services = new ServiceCollection();
services.AddSingleton<StandardShipping>();
services.AddSingleton<ExpressShipping>();
services.AddSingleton<ShippingService>(provider =>
    new ShippingService(provider.GetRequiredService<ExpressShipping>())
);

var provider = services.BuildServiceProvider();
var shipping = provider.GetRequiredService<ShippingService>();
Console.WriteLine(shipping.GetCost(8m));`,
    explanation:
      "The .NET version shows the same strategy pattern with dependency injection available, so the shipping context can swap pricing behavior without changing callers.",
  },
];
