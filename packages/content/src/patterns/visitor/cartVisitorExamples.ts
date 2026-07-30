import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const cartVisitorExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface CartVisitor {
  visitBook(book: Book): number;
  visitFruit(fruit: Fruit): number;
}


interface CartItem {
  accept(visitor: CartVisitor): number;
}


class Book implements CartItem {
  constructor(
    public price: number,
    public isbn: string
  ) {}


  accept(visitor: CartVisitor): number {
    return visitor.visitBook(this);
  }
}


class Fruit implements CartItem {
  constructor(
    public pricePerKg: number,
    public weight: number,
    public name: string
  ) {}


  accept(visitor: CartVisitor): number {
    return visitor.visitFruit(this);
  }
}


class ShoppingCartVisitor implements CartVisitor {
  visitBook(book: Book): number {
    return book.price > 50 ? book.price - 5 : book.price;
  }


  visitFruit(fruit: Fruit): number {
    return fruit.pricePerKg * fruit.weight;
  }
}


const items: CartItem[] = [
  new Book(20, "1234"),
  new Book(100, "5678"),
  new Fruit(10, 2, "Banana"),
  new Fruit(5, 5, "Apple")
];


const visitor = new ShoppingCartVisitor();
const total = items.reduce((sum, item) => sum + item.accept(visitor), 0);


console.log(total);`,
    explanation:
      "The cart visitor calculates totals for different item types without putting pricing logic inside the items themselves.",
  },
  {
    language: "Java",
    code: `interface CartVisitor {
    int visitBook(Book book);
    int visitFruit(Fruit fruit);
}


interface CartItem {
    int accept(CartVisitor visitor);
}


class Book implements CartItem {
    private final int price;
    private final String isbn;


    public Book(int price, String isbn) {
        this.price = price;
        this.isbn = isbn;
    }


    public int getPrice() {
        return price;
    }


    public String getIsbn() {
        return isbn;
    }


    public int accept(CartVisitor visitor) {
        return visitor.visitBook(this);
    }
}


class Fruit implements CartItem {
    private final int pricePerKg;
    private final int weight;
    private final String name;


    public Fruit(int pricePerKg, int weight, String name) {
        this.pricePerKg = pricePerKg;
        this.weight = weight;
        this.name = name;
    }


    public int getPricePerKg() {
        return pricePerKg;
    }


    public int getWeight() {
        return weight;
    }


    public String getName() {
        return name;
    }


    public int accept(CartVisitor visitor) {
        return visitor.visitFruit(this);
    }
}


class ShoppingCartVisitorImpl implements CartVisitor {
    public int visitBook(Book book) {
        return book.getPrice() > 50 ? book.getPrice() - 5 : book.getPrice();
    }


    public int visitFruit(Fruit fruit) {
        return fruit.getPricePerKg() * fruit.getWeight();
    }
}


CartItem[] items = new CartItem[] {
    new Book(20, "1234"),
    new Book(100, "5678"),
    new Fruit(10, 2, "Banana"),
    new Fruit(5, 5, "Apple")
};


CartVisitor visitor = new ShoppingCartVisitorImpl();
int total = 0;
for (CartItem item : items) {
    total += item.accept(visitor);
}


System.out.println(total);`,
    explanation:
      "The Java cart visitor separates pricing behavior from cart items and computes totals through accept/visit calls.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod


class CartVisitor(ABC):
    @abstractmethod
    def visit_book(self, book: "Book") -> int:
        pass


    @abstractmethod
    def visit_fruit(self, fruit: "Fruit") -> int:
        pass


class CartItem(ABC):
    @abstractmethod
    def accept(self, visitor: CartVisitor) -> int:
        pass


class Book(CartItem):
    def __init__(self, price: int, isbn: str) -> None:
        self.price = price
        self.isbn = isbn


    def accept(self, visitor: CartVisitor) -> int:
        return visitor.visit_book(self)


class Fruit(CartItem):
    def __init__(self, price_per_kg: int, weight: int, name: str) -> None:
        self.price_per_kg = price_per_kg
        self.weight = weight
        self.name = name


    def accept(self, visitor: CartVisitor) -> int:
        return visitor.visit_fruit(self)


class ShoppingCartVisitor(CartVisitor):
    def visit_book(self, book: Book) -> int:
        return book.price - 5 if book.price > 50 else book.price


    def visit_fruit(self, fruit: Fruit) -> int:
        return fruit.price_per_kg * fruit.weight


items = [
    Book(20, "1234"),
    Book(100, "5678"),
    Fruit(10, 2, "Banana"),
    Fruit(5, 5, "Apple"),
]


visitor = ShoppingCartVisitor()
total = sum(item.accept(visitor) for item in items)


print(total)`,
    explanation:
      "The Python cart visitor lets you add a new calculation without modifying the item classes.",
  },
  {
    language: "Angular",
    code: `interface CartVisitor {
  visitBook(book: Book): number;
  visitFruit(fruit: Fruit): number;
}


interface CartItem {
  accept(visitor: CartVisitor): number;
}


class Book implements CartItem {
  constructor(
    public price: number,
    public isbn: string
  ) {}


  accept(visitor: CartVisitor): number {
    return visitor.visitBook(this);
  }
}


class Fruit implements CartItem {
  constructor(
    public pricePerKg: number,
    public weight: number,
    public name: string
  ) {}


  accept(visitor: CartVisitor): number {
    return visitor.visitFruit(this);
  }
}


class ShoppingCartVisitor implements CartVisitor {
  visitBook(book: Book): number {
    return book.price > 50 ? book.price - 5 : book.price;
  }


  visitFruit(fruit: Fruit): number {
    return fruit.pricePerKg * fruit.weight;
  }
}


const items: CartItem[] = [
  new Book(20, "1234"),
  new Book(100, "5678"),
  new Fruit(10, 2, "Banana"),
  new Fruit(5, 5, "Apple")
];


const visitor = new ShoppingCartVisitor();
const total = items.reduce((sum, item) => sum + item.accept(visitor), 0);


console.log(total);`,
    explanation:
      "The Angular cart visitor keeps pricing behavior separate from the product classes and calculates the cart total through the visitor.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


interface CartVisitor {
  visitBook(book: Book): number;
  visitFruit(fruit: Fruit): number;
}


interface CartItem {
  accept(visitor: CartVisitor): number;
}


class Book implements CartItem {
  constructor(
    public price: number,
    public isbn: string
  ) {}


  accept(visitor: CartVisitor): number {
    return visitor.visitBook(this);
  }
}


class Fruit implements CartItem {
  constructor(
    public pricePerKg: number,
    public weight: number,
    public name: string
  ) {}


  accept(visitor: CartVisitor): number {
    return visitor.visitFruit(this);
  }
}


class ShoppingCartVisitor implements CartVisitor {
  visitBook(book: Book): number {
    return book.price > 50 ? book.price - 5 : book.price;
  }


  visitFruit(fruit: Fruit): number {
    return fruit.pricePerKg * fruit.weight;
  }
}


function CartPreview() {
  return <p>Cart visitor ready</p>;
}


export function App() {
  const total = useMemo(() => {
    const visitor = new ShoppingCartVisitor();
    const items: CartItem[] = [
      new Book(20, "1234"),
      new Book(100, "5678"),
      new Fruit(10, 2, "Banana"),
      new Fruit(5, 5, "Apple")
    ];


    return items.reduce((sum, item) => sum + item.accept(visitor), 0);
  }, []);


  return (
    <main>
      <h1>Cart Visitor</h1>
      <CartPreview />
      <p>{total}</p>
    </main>
  );
}`,
    explanation:
      "The React example uses a visitor to compute cart totals while the UI simply renders the result.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


interface CartVisitor {
  visitBook(book: Book): number;
  visitFruit(fruit: Fruit): number;
}


interface CartItem {
  accept(visitor: CartVisitor): number;
}


class Book implements CartItem {
  constructor(
    public price: number,
    public isbn: string
  ) {}


  accept(visitor: CartVisitor): number {
    return visitor.visitBook(this);
  }
}


class Fruit implements CartItem {
  constructor(
    public pricePerKg: number,
    public weight: number,
    public name: string
  ) {}


  accept(visitor: CartVisitor): number {
    return visitor.visitFruit(this);
  }
}


class ShoppingCartVisitor implements CartVisitor {
  visitBook(book: Book): number {
    return book.price > 50 ? book.price - 5 : book.price;
  }


  visitFruit(fruit: Fruit): number {
    return fruit.pricePerKg * fruit.weight;
  }
}


function CartPreview({ total }: { total: number }) {
  return (
    <View>
      <Text>{total}</Text>
    </View>
  );
}


export function App() {
  const total = useMemo(() => {
    const visitor = new ShoppingCartVisitor();
    const items: CartItem[] = [
      new Book(20, "1234"),
      new Book(100, "5678"),
      new Fruit(10, 2, "Banana"),
      new Fruit(5, 5, "Apple")
    ];


    return items.reduce((sum, item) => sum + item.accept(visitor), 0);
  }, []);


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Cart Visitor</Text>
        <CartPreview total={total} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native cart visitor performs the same pricing calculation and displays the total on mobile.",
  },
  {
    language: "C#",
    code: `using System;
using System.Collections.Generic;


public interface ICartVisitor
{
    int VisitBook(Book book);
    int VisitFruit(Fruit fruit);
}


public interface ICartItem
{
    int Accept(ICartVisitor visitor);
}


public class Book : ICartItem
{
    public int Price { get; }
    public string Isbn { get; }


    public Book(int price, string isbn)
    {
        Price = price;
        Isbn = isbn;
    }


    public int Accept(ICartVisitor visitor)
    {
        return visitor.VisitBook(this);
    }
}


public class Fruit : ICartItem
{
    public int PricePerKg { get; }
    public int Weight { get; }
    public string Name { get; }


    public Fruit(int pricePerKg, int weight, string name)
    {
        PricePerKg = pricePerKg;
        Weight = weight;
        Name = name;
    }


    public int Accept(ICartVisitor visitor)
    {
        return visitor.VisitFruit(this);
    }
}


public class ShoppingCartVisitorImpl : ICartVisitor
{
    public int VisitBook(Book book)
    {
        return book.Price > 50 ? book.Price - 5 : book.Price;
    }


    public int VisitFruit(Fruit fruit)
    {
        return fruit.PricePerKg * fruit.Weight;
    }
}


var items = new List<ICartItem>
{
    new Book(20, "1234"),
    new Book(100, "5678"),
    new Fruit(10, 2, "Banana"),
    new Fruit(5, 5, "Apple")
};


var visitor = new ShoppingCartVisitorImpl();
var total = 0;
foreach (var item in items)
{
    total += item.Accept(visitor);
}


Console.WriteLine(total);`,
    explanation:
      "The C# cart visitor keeps total calculation out of the item classes and centralizes it in a visitor implementation.",
  },
  {
    language: ".NET",
    code: `using System;
using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;


public interface ICartVisitor
{
    int VisitBook(Book book);
    int VisitFruit(Fruit fruit);
}


public interface ICartItem
{
    int Accept(ICartVisitor visitor);
}


public class Book : ICartItem
{
    public int Price { get; }
    public string Isbn { get; }


    public Book(int price, string isbn)
    {
        Price = price;
        Isbn = isbn;
    }


    public int Accept(ICartVisitor visitor)
    {
        return visitor.VisitBook(this);
    }
}


public class Fruit : ICartItem
{
    public int PricePerKg { get; }
    public int Weight { get; }
    public string Name { get; }


    public Fruit(int pricePerKg, int weight, string name)
    {
        PricePerKg = pricePerKg;
        Weight = weight;
        Name = name;
    }


    public int Accept(ICartVisitor visitor)
    {
        return visitor.VisitFruit(this);
    }
}


public class ShoppingCartVisitorImpl : ICartVisitor
{
    public int VisitBook(Book book)
    {
        return book.Price > 50 ? book.Price - 5 : book.Price;
    }


    public int VisitFruit(Fruit fruit)
    {
        return fruit.PricePerKg * fruit.Weight;
    }
}


var services = new ServiceCollection();
services.AddSingleton<ICartVisitor, ShoppingCartVisitorImpl>();

var provider = services.BuildServiceProvider();
var visitor = provider.GetRequiredService<ICartVisitor>();


var items = new List<ICartItem>
{
    new Book(20, "1234"),
    new Book(100, "5678"),
    new Fruit(10, 2, "Banana"),
    new Fruit(5, 5, "Apple")
};


var total = 0;
foreach (var item in items)
{
    total += item.Accept(visitor);
}


Console.WriteLine(total);`,
    explanation:
      "The .NET cart visitor resolves the visitor through dependency injection and applies it to mixed cart items.",
  },
];
