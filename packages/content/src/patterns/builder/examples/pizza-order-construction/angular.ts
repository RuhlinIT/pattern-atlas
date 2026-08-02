import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Pizza order construction",
  code: `type PizzaOrder = {
  size: string;
  crust: string;
  toppings: string[];
  extras: string[];
};

class PizzaOrderService {
  buildPizzaOrder(): PizzaOrder {
    return {
      size: "large",
      crust: "thin",
      toppings: ["pepperoni", "mushrooms"],
      extras: ["garlic dip"],
    };
  }
}

export class PizzaOrderComponent {
  order = new PizzaOrderService().buildPizzaOrder();
}`,
  explanation:
    "A builder-like service can assemble a full pizza order for Angular components to consume.",
};