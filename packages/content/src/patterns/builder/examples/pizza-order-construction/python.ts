import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Pizza order construction",
  code: "class Pizza:\n    def __init__(self, size: str, crust: str, cheese: bool, toppings: list[str]) -> None:\n        self.size = size\n        self.crust = crust\n        self.cheese = cheese\n        self.toppings = toppings\n\nclass PizzaBuilder:\n    def __init__(self) -> None:\n        self.size = \"medium\"\n        self.crust = \"regular\"\n        self.cheese = True\n        self.toppings: list[str] = []\n\n    def with_size(self, size: str) -> \"PizzaBuilder\":\n        self.size = size\n        return self\n\n    def with_crust(self, crust: str) -> \"PizzaBuilder\":\n        self.crust = crust\n        return self\n\n    def with_cheese(self, cheese: bool) -> \"PizzaBuilder\":\n        self.cheese = cheese\n        return self\n\n    def add_topping(self, topping: str) -> \"PizzaBuilder\":\n        self.toppings.append(topping)\n        return self\n\n    def build(self) -> Pizza:\n        return Pizza(self.size, self.crust, self.cheese, list(self.toppings))\n\npizza = (\n    PizzaBuilder()\n    .with_size(\"large\")\n    .with_crust(\"thin\")\n    .add_topping(\"pepperoni\")\n    .add_topping(\"mushrooms\")\n    .build()\n)\n\nprint(pizza.__dict__)",
  explanation: "The builder makes pizza creation explicit and easy to extend as more toppings or options are added.",
};
