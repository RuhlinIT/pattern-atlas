import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Pizza order construction",
  code: `class PizzaOrder {
    String size = "medium";
    String crust = "regular";
    java.util.List<String> toppings = new java.util.ArrayList<>();
    java.util.List<String> extras = new java.util.ArrayList<>();
}

class PizzaOrderBuilder {
    private final PizzaOrder order = new PizzaOrder();

    PizzaOrderBuilder size(String size) {
        order.size = size;
        return this;
    }

    PizzaOrderBuilder crust(String crust) {
        order.crust = crust;
        return this;
    }

    PizzaOrderBuilder addTopping(String topping) {
        order.toppings.add(topping);
        return this;
    }

    PizzaOrderBuilder addExtra(String extra) {
        order.extras.add(extra);
        return this;
    }

    PizzaOrder build() {
        return order;
    }
}

PizzaOrder order = new PizzaOrderBuilder()
    .size("large")
    .crust("thin")
    .addTopping("pepperoni")
    .addTopping("mushrooms")
    .addExtra("garlic dip")
    .build();`,
  explanation:
    "Builder fits pizza ordering because the final order is composed incrementally from several optional choices.",
};