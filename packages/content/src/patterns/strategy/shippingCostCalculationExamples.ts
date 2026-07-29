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
];
