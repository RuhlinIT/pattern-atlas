import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const go: PatternLanguageExample = {
  language: "go",
  title: "Pizza order construction",
  code: `package main

type PizzaOrder struct {
    Size     string
    Crust    string
    Toppings []string
    Extras   []string
}

type PizzaOrderBuilder struct {
    order PizzaOrder
}

func NewPizzaOrderBuilder() *PizzaOrderBuilder {
    return &PizzaOrderBuilder{order: PizzaOrder{Size: "medium", Crust: "regular"}}
}

func (b *PizzaOrderBuilder) Size(size string) *PizzaOrderBuilder {
    b.order.Size = size
    return b
}

func (b *PizzaOrderBuilder) Crust(crust string) *PizzaOrderBuilder {
    b.order.Crust = crust
    return b
}

func (b *PizzaOrderBuilder) AddTopping(topping string) *PizzaOrderBuilder {
    b.order.Toppings = append(b.order.Toppings, topping)
    return b
}

func (b *PizzaOrderBuilder) AddExtra(extra string) *PizzaOrderBuilder {
    b.order.Extras = append(b.order.Extras, extra)
    return b
}

func (b *PizzaOrderBuilder) Build() PizzaOrder {
    return b.order
}

func main() {
    order := NewPizzaOrderBuilder().Size("large").Crust("thin").AddTopping("pepperoni").AddTopping("mushrooms").AddExtra("garlic dip").Build()
    _ = order
}`,
  explanation:
    "Builder is useful for pizza order construction when the order is assembled step by step with optional choices.",
};