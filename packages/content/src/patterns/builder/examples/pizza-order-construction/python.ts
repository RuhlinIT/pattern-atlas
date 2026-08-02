import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Pizza order construction",
  code: `from dataclasses import dataclass, field
from typing import List

@dataclass
class PizzaOrder:
    size: str = "medium"
    crust: str = "regular"
    toppings: List[str] = field(default_factory=list)
    extras: List[str] = field(default_factory=list)

class PizzaOrderBuilder:
    def __init__(self):
        self._order = PizzaOrder()

    def size(self, size: str):
        self._order.size = size
        return self

    def crust(self, crust: str):
        self._order.crust = crust
        return self

    def add_topping(self, topping: str):
        self._order.toppings.append(topping)
        return self

    def add_extra(self, extra: str):
        self._order.extras.append(extra)
        return self

    def build(self):
        return self._order

order = (
    PizzaOrderBuilder()
    .size("large")
    .crust("thin")
    .add_topping("pepperoni")
    .add_topping("mushrooms")
    .add_extra("garlic dip")
    .build()
)`,
  explanation:
    "A builder works well here because a pizza order is assembled in stages with optional toppings and extras.",
};