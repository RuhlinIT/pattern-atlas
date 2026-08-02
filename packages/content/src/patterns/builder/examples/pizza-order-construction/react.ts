import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Pizza order construction",
  code: `type PizzaOrder = {
  size: string;
  crust: string;
  toppings: string[];
  extras: string[];
};

function buildPizzaOrder(): PizzaOrder {
  return {
    size: "large",
    crust: "thin",
    toppings: ["pepperoni", "mushrooms"],
    extras: ["garlic dip"],
  };
}

export function PizzaOrderSummary() {
  const order = buildPizzaOrder();

  return (
    <section>
      <h2>Pizza order</h2>
      <p>Size: {order.size}</p>
      <p>Crust: {order.crust}</p>
      <p>Toppings: {order.toppings.join(", ")}</p>
      <p>Extras: {order.extras.join(", ")}</p>
    </section>
  );
}`,
  explanation:
    "A builder-like step can prepare a complete pizza order object before rendering the summary.",
};