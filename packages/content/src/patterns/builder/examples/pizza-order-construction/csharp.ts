import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const csharp: PatternLanguageExample = {
  language: "csharp",
  title: "Pizza order construction",
  code: `public class PizzaOrder
{
    public string Size { get; set; } = "medium";
    public string Crust { get; set; } = "regular";
    public List<string> Toppings { get; set; } = new();
    public List<string> Extras { get; set; } = new();
}

public class PizzaOrderBuilder
{
    private readonly PizzaOrder order = new PizzaOrder();

    public PizzaOrderBuilder Size(string size)
    {
        order.Size = size;
        return this;
    }

    public PizzaOrderBuilder Crust(string crust)
    {
        order.Crust = crust;
        return this;
    }

    public PizzaOrderBuilder AddTopping(string topping)
    {
        order.Toppings.Add(topping);
        return this;
    }

    public PizzaOrderBuilder AddExtra(string extra)
    {
        order.Extras.Add(extra);
        return this;
    }

    public PizzaOrder Build() => order;
}

var order = new PizzaOrderBuilder()
    .Size("large")
    .Crust("thin")
    .AddTopping("pepperoni")
    .AddTopping("mushrooms")
    .AddExtra("garlic dip")
    .Build();`,
  explanation:
    "Builder works well for pizza orders because the final object is assembled from many optional choices.",
};