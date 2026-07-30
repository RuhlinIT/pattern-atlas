import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const pizzaBuilderExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `class Pizza {
  constructor(
    public size: string,
    public crust: string,
    public cheese: boolean,
    public toppings: string[],
  ) {}
}

class PizzaBuilder {
  private size = "medium";
  private crust = "regular";
  private cheese = true;
  private toppings: string[] = [];

  withSize(size: string): this {
    this.size = size;
    return this;
  }

  withCrust(crust: string): this {
    this.crust = crust;
    return this;
  }

  withCheese(cheese: boolean): this {
    this.cheese = cheese;
    return this;
  }

  addTopping(topping: string): this {
    this.toppings.push(topping);
    return this;
  }

  build(): Pizza {
    return new Pizza(this.size, this.crust, this.cheese, [...this.toppings]);
  }
}

const pizza = new PizzaBuilder()
  .withSize("large")
  .withCrust("thin")
  .addTopping("pepperoni")
  .addTopping("mushrooms")
  .build();

console.log(pizza);`,
    explanation:
      "The builder lets the caller assemble a pizza step by step, making optional choices readable and avoiding a long constructor.",
  },
  {
    language: "Java",
    code: `import java.util.ArrayList;
import java.util.List;

class Pizza {
    public final String size;
    public final String crust;
    public final boolean cheese;
    public final List<String> toppings;

    public Pizza(String size, String crust, boolean cheese, List<String> toppings) {
        this.size = size;
        this.crust = crust;
        this.cheese = cheese;
        this.toppings = toppings;
    }
}

class PizzaBuilder {
    private String size = "medium";
    private String crust = "regular";
    private boolean cheese = true;
    private final List<String> toppings = new ArrayList<>();

    public PizzaBuilder withSize(String size) {
        this.size = size;
        return this;
    }

    public PizzaBuilder withCrust(String crust) {
        this.crust = crust;
        return this;
    }

    public PizzaBuilder withCheese(boolean cheese) {
        this.cheese = cheese;
        return this;
    }

    public PizzaBuilder addTopping(String topping) {
        toppings.add(topping);
        return this;
    }

    public Pizza build() {
        return new Pizza(size, crust, cheese, new ArrayList<>(toppings));
    }
}

Pizza pizza = new PizzaBuilder()
    .withSize("large")
    .withCrust("thin")
    .addTopping("pepperoni")
    .addTopping("mushrooms")
    .build();

System.out.println(pizza.size);`,
    explanation:
      "The pizza builder creates a finished object from a sequence of readable configuration steps, which keeps construction flexible.",
  },
  {
    language: "Python",
    code: `class Pizza:
    def __init__(self, size: str, crust: str, cheese: bool, toppings: list[str]) -> None:
        self.size = size
        self.crust = crust
        self.cheese = cheese
        self.toppings = toppings

class PizzaBuilder:
    def __init__(self) -> None:
        self.size = "medium"
        self.crust = "regular"
        self.cheese = True
        self.toppings: list[str] = []

    def with_size(self, size: str) -> "PizzaBuilder":
        self.size = size
        return self

    def with_crust(self, crust: str) -> "PizzaBuilder":
        self.crust = crust
        return self

    def with_cheese(self, cheese: bool) -> "PizzaBuilder":
        self.cheese = cheese
        return self

    def add_topping(self, topping: str) -> "PizzaBuilder":
        self.toppings.append(topping)
        return self

    def build(self) -> Pizza:
        return Pizza(self.size, self.crust, self.cheese, list(self.toppings))

pizza = (
    PizzaBuilder()
    .with_size("large")
    .with_crust("thin")
    .add_topping("pepperoni")
    .add_topping("mushrooms")
    .build()
)

print(pizza.__dict__)`,
    explanation:
      "The builder makes pizza creation explicit and easy to extend as more toppings or options are added.",
  },
  {
    language: "Angular",
    code: `interface PizzaOptions {
  size: string;
  crust: string;
  cheese: boolean;
  toppings: string[];
}

class Pizza {
  constructor(
    public size: string,
    public crust: string,
    public cheese: boolean,
    public toppings: string[],
  ) {}
}

class PizzaBuilder {
  private size = "medium";
  private crust = "regular";
  private cheese = true;
  private toppings: string[] = [];

  withSize(size: string): this {
    this.size = size;
    return this;
  }

  withCrust(crust: string): this {
    this.crust = crust;
    return this;
  }

  withCheese(cheese: boolean): this {
    this.cheese = cheese;
    return this;
  }

  addTopping(topping: string): this {
    this.toppings.push(topping);
    return this;
  }

  build(): Pizza {
    return new Pizza(this.size, this.crust, this.cheese, [...this.toppings]);
  }
}

const pizza = new PizzaBuilder()
  .withSize("large")
  .withCrust("thin")
  .addTopping("pepperoni")
  .addTopping("mushrooms")
  .build();

console.log(pizza);`,
    explanation:
      "The Angular example uses the same builder chain, keeping pizza construction readable and separating configuration from object creation.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";

class Pizza {
  constructor(
    public size: string,
    public crust: string,
    public cheese: boolean,
    public toppings: string[],
  ) {}
}

class PizzaBuilder {
  private size = "medium";
  private crust = "regular";
  private cheese = true;
  private toppings: string[] = [];

  withSize(size: string): this {
    this.size = size;
    return this;
  }

  withCrust(crust: string): this {
    this.crust = crust;
    return this;
  }

  withCheese(cheese: boolean): this {
    this.cheese = cheese;
    return this;
  }

  addTopping(topping: string): this {
    this.toppings.push(topping);
    return this;
  }

  build(): Pizza {
    return new Pizza(this.size, this.crust, this.cheese, [...this.toppings]);
  }
}

function PizzaPreview({ pizza }: { pizza: Pizza }) {
  return (
    <div>
      <p>{pizza.size} pizza</p>
      <p>{pizza.crust} crust</p>
      <p>Cheese: {pizza.cheese ? "yes" : "no"}</p>
      <p>Toppings: {pizza.toppings.join(", ") || "none"}</p>
    </div>
  );
}

export function App() {
  const pizza = useMemo(
    () =>
      new PizzaBuilder()
        .withSize("large")
        .withCrust("thin")
        .addTopping("pepperoni")
        .addTopping("mushrooms")
        .build(),
    [],
  );

  return (
    <main>
      <h1>Pizza Builder</h1>
      <PizzaPreview pizza={pizza} />
    </main>
  );
}`,
    explanation:
      "The React example uses the builder to assemble a pizza object before rendering it, which keeps optional configuration out of the UI.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";

class Pizza {
  constructor(
    public size: string,
    public crust: string,
    public cheese: boolean,
    public toppings: string[],
  ) {}
}

class PizzaBuilder {
  private size = "medium";
  private crust = "regular";
  private cheese = true;
  private toppings: string[] = [];

  withSize(size: string): this {
    this.size = size;
    return this;
  }

  withCrust(crust: string): this {
    this.crust = crust;
    return this;
  }

  withCheese(cheese: boolean): this {
    this.cheese = cheese;
    return this;
  }

  addTopping(topping: string): this {
    this.toppings.push(topping);
    return this;
  }

  build(): Pizza {
    return new Pizza(this.size, this.crust, this.cheese, [...this.toppings]);
  }
}

function PizzaPreview({ pizza }: { pizza: Pizza }) {
  return (
    <View>
      <Text>{pizza.size} pizza</Text>
      <Text>{pizza.crust} crust</Text>
      <Text>Cheese: {pizza.cheese ? "yes" : "no"}</Text>
      <Text>Toppings: {pizza.toppings.join(", ") || "none"}</Text>
    </View>
  );
}

export function App() {
  const pizza = useMemo(
    () =>
      new PizzaBuilder()
        .withSize("large")
        .withCrust("thin")
        .addTopping("pepperoni")
        .addTopping("mushrooms")
        .build(),
    [],
  );

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Pizza Builder</Text>
        <PizzaPreview pizza={pizza} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native version uses the same builder chain, but presents the built pizza in a mobile-friendly layout.",
  },
  {
    language: "C#",
    code: `using System;
using System.Collections.Generic;
using System.Linq;

public class Pizza
{
    public string Size { get; }
    public string Crust { get; }
    public bool Cheese { get; }
    public List<string> Toppings { get; }

    public Pizza(string size, string crust, bool cheese, List<string> toppings)
    {
        Size = size;
        Crust = crust;
        Cheese = cheese;
        Toppings = toppings;
    }
}

public class PizzaBuilder
{
    private string _size = "medium";
    private string _crust = "regular";
    private bool _cheese = true;
    private readonly List<string> _toppings = new();

    public PizzaBuilder WithSize(string size)
    {
        _size = size;
        return this;
    }

    public PizzaBuilder WithCrust(string crust)
    {
        _crust = crust;
        return this;
    }

    public PizzaBuilder WithCheese(bool cheese)
    {
        _cheese = cheese;
        return this;
    }

    public PizzaBuilder AddTopping(string topping)
    {
        _toppings.Add(topping);
        return this;
    }

    public Pizza Build()
    {
        return new Pizza(_size, _crust, _cheese, _toppings.ToList());
    }
}

var pizza = new PizzaBuilder()
    .WithSize("large")
    .WithCrust("thin")
    .AddTopping("pepperoni")
    .AddTopping("mushrooms")
    .Build();

Console.WriteLine(string.Join(", ", pizza.Toppings));`,
    explanation:
      "The C# pizza builder lets the caller create a configured object in small steps instead of passing a huge constructor parameter list.",
  },
  {
    language: ".NET",
    code: `using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.DependencyInjection;

public class Pizza
{
    public string Size { get; }
    public string Crust { get; }
    public bool Cheese { get; }
    public List<string> Toppings { get; }

    public Pizza(string size, string crust, bool cheese, List<string> toppings)
    {
        Size = size;
        Crust = crust;
        Cheese = cheese;
        Toppings = toppings;
    }
}

public class PizzaBuilder
{
    private string _size = "medium";
    private string _crust = "regular";
    private bool _cheese = true;
    private readonly List<string> _toppings = new();

    public PizzaBuilder WithSize(string size)
    {
        _size = size;
        return this;
    }

    public PizzaBuilder WithCrust(string crust)
    {
        _crust = crust;
        return this;
    }

    public PizzaBuilder WithCheese(bool cheese)
    {
        _cheese = cheese;
        return this;
    }

    public PizzaBuilder AddTopping(string topping)
    {
        _toppings.Add(topping);
        return this;
    }

    public Pizza Build()
    {
        return new Pizza(_size, _crust, _cheese, _toppings.ToList());
    }
}

var services = new ServiceCollection();
services.AddSingleton<PizzaBuilder>();
var provider = services.BuildServiceProvider();

var pizza = provider.GetRequiredService<PizzaBuilder>()
    .WithSize("large")
    .WithCrust("thin")
    .AddTopping("pepperoni")
    .AddTopping("mushrooms")
    .Build();

Console.WriteLine(string.Join(", ", pizza.Toppings));`,
    explanation:
      "The .NET version shows the same builder pattern with dependency injection available, so construction stays readable and flexible.",
  },
];