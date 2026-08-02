import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Pizza order construction",
  code: `type PizzaOrder = {
  size: string;
  crust: string;
  toppings: string[];
  extras: string[];
};

class PizzaOrderBuilder {
  private order: PizzaOrder = {
    size: "medium",
    crust: "regular",
    toppings: [],
    extras: [],
  };

  size(size: string) {
    this.order.size = size;
    return this;
  }

  crust(crust: string) {
    this.order.crust = crust;
    return this;
  }

  addTopping(topping: string) {
    this.order.toppings.push(topping);
    return this;
  }

  addExtra(extra: string) {
    this.order.extras.push(extra);
    return this;
  }

  build() {
    return this.order;
  }
}

const order = new PizzaOrderBuilder()
  .size("large")
  .crust("thin")
  .addTopping("pepperoni")
  .addTopping("mushrooms")
  .addExtra("garlic dip")
  .build();`,
  explanation:
    "Builder fits pizza order construction because the order is assembled step by step and can include optional toppings and extras.",
};