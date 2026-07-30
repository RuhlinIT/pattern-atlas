import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const stockPriceAlertsExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface Observer {
  update(price: number): void;
}

class Stock {
  private observers: Observer[] = [];

  constructor(private price: number) {}

  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter((item) => item !== observer);
  }

  setPrice(price: number): void {
    this.price = price;
    this.notify();
  }

  private notify(): void {
    this.observers.forEach((observer) => observer.update(this.price));
  }
}

class PriceDisplay implements Observer {
  update(price: number): void {
    console.log(\`Display updated: \${price}\`);
  }
}

class PriceAlert implements Observer {
  update(price: number): void {
    if (price > 100) {
      console.log(\`Alert: stock price is \${price}\`);
    }
  }
}

const stock = new Stock(95);
stock.subscribe(new PriceDisplay());
stock.subscribe(new PriceAlert());
stock.setPrice(105);`,
    explanation:
      "The stock acts as the subject, while displays and alerts subscribe independently and react when the price changes.",
  },
  {
    language: "Java",
    code: `import java.util.ArrayList;
import java.util.List;

interface Observer {
    void update(double price);
}

class Stock {
    private final List<Observer> observers = new ArrayList<>();
    private double price;

    public Stock(double price) {
        this.price = price;
    }

    public void subscribe(Observer observer) {
        observers.add(observer);
    }

    public void unsubscribe(Observer observer) {
        observers.remove(observer);
    }

    public void setPrice(double price) {
        this.price = price;
        notifyObservers();
    }

    private void notifyObservers() {
        for (Observer observer : observers) {
            observer.update(price);
        }
    }
}

class PriceDisplay implements Observer {
    public void update(double price) {
        System.out.println("Display updated: " + price);
    }
}

class PriceAlert implements Observer {
    public void update(double price) {
        if (price > 100) {
            System.out.println("Alert: stock price is " + price);
        }
    }
}

Stock stock = new Stock(95);
stock.subscribe(new PriceDisplay());
stock.subscribe(new PriceAlert());
stock.setPrice(105);`,
    explanation:
      "The subject keeps a dynamic list of observers and pushes updates to each one when its state changes.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod

class Observer(ABC):
    @abstractmethod
    def update(self, price: float) -> None:
        pass

class Stock:
    def __init__(self, price: float) -> None:
        self.price = price
        self.observers: list[Observer] = []

    def subscribe(self, observer: Observer) -> None:
        self.observers.append(observer)

    def unsubscribe(self, observer: Observer) -> None:
        self.observers.remove(observer)

    def set_price(self, price: float) -> None:
        self.price = price
        self.notify()

    def notify(self) -> None:
        for observer in self.observers:
            observer.update(self.price)

class PriceDisplay(Observer):
    def update(self, price: float) -> None:
        print(f"Display updated: {price}")

class PriceAlert(Observer):
    def update(self, price: float) -> None:
        if price > 100:
            print(f"Alert: stock price is {price}")

stock = Stock(95)
stock.subscribe(PriceDisplay())
stock.subscribe(PriceAlert())
stock.set_price(105)`,
    explanation:
      "The stock pushes price updates to any subscribed observers, while each observer decides how to respond.",
  },
  {
    language: "Angular",
    code: `import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';


interface Observer {
  update(price: number): void;
}


@Injectable({ providedIn: 'root' })
class Stock {
  private price$ = new BehaviorSubject<number>(95);


  subscribe(observer: Observer): Subscription {
    return this.price$.subscribe((price) => observer.update(price));
  }


  setPrice(price: number): void {
    this.price$.next(price);
  }
}


class PriceDisplay implements Observer {
  update(price: number): void {
    console.log(\`Display updated: \${price}\`);
  }
}


class PriceAlert implements Observer {
  update(price: number): void {
    if (price > 100) {
      console.log(\`Alert: stock price is \${price}\`);
    }
  }
}


const stock = new Stock();
const displaySubscription = stock.subscribe(new PriceDisplay());
stock.subscribe(new PriceAlert());
stock.setPrice(105);
displaySubscription.unsubscribe();`,
    explanation:
      "The Angular stock service publishes each price change through a shared stream, while display and alert observers subscribe independently and react to the same update.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";

interface Observer {
  update(price: number): void;
}

class Stock {
  private observers: Observer[] = [];

  constructor(private price: number) {}

  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter((item) => item !== observer);
  }

  setPrice(price: number): void {
    this.price = price;
    this.notify();
  }

  private notify(): void {
    this.observers.forEach((observer) => observer.update(this.price));
  }
}

class PriceDisplay implements Observer {
  update(price: number): void {
    console.log(\`Display updated: \${price}\`);
  }
}

class PriceAlert implements Observer {
  update(price: number): void {
    if (price > 100) {
      console.log(\`Alert: stock price is \${price}\`);
    }
  }
}

function StockControls({ stock }: { stock: Stock }) {
  return <button onClick={() => stock.setPrice(105)}>Set price to 105</button>;
}

export function App() {
  const stock = useMemo(() => {
    const instance = new Stock(95);
    instance.subscribe(new PriceDisplay());
    instance.subscribe(new PriceAlert());
    return instance;
  }, []);

  return (
    <main>
      <h1>Stock Price Alerts</h1>
      <StockControls stock={stock} />
    </main>
  );
}`,
    explanation:
      "The React example keeps the stock as the subject and lets display and alert observers react independently when the price changes.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";

interface Observer {
  update(price: number): void;
}

class Stock {
  private observers: Observer[] = [];

  constructor(private price: number) {}

  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter((item) => item !== observer);
  }

  setPrice(price: number): void {
    this.price = price;
    this.notify();
  }

  private notify(): void {
    this.observers.forEach((observer) => observer.update(this.price));
  }
}

class PriceDisplay implements Observer {
  update(price: number): void {
    console.log(\`Display updated: \${price}\`);
  }
}

class PriceAlert implements Observer {
  update(price: number): void {
    if (price > 100) {
      console.log(\`Alert: stock price is \${price}\`);
    }
  }
}

function StockControls({ stock }: { stock: Stock }) {
  return (
    <Pressable
      onPress={() => stock.setPrice(105)}
      style={{ padding: 12, backgroundColor: "#111827", borderRadius: 8 }}
    >
      <Text style={{ color: "#fff", textAlign: "center" }}>Set price to 105</Text>
    </Pressable>
  );
}

export function App() {
  const stock = useMemo(() => {
    const instance = new Stock(95);
    instance.subscribe(new PriceDisplay());
    instance.subscribe(new PriceAlert());
    return instance;
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Stock Price Alerts</Text>
        <StockControls stock={stock} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native version uses the same observer setup, but triggers the price change from a mobile-friendly pressable control.",
  },
  {
    language: "C#",
    code: `using System;
using System.Collections.Generic;

public interface IObserver
{
    void Update(decimal price);
}

public class Stock
{
    private readonly List<IObserver> _observers = new();
    private decimal _price;

    public Stock(decimal price)
    {
        _price = price;
    }

    public void Subscribe(IObserver observer)
    {
        _observers.Add(observer);
    }

    public void Unsubscribe(IObserver observer)
    {
        _observers.Remove(observer);
    }

    public void SetPrice(decimal price)
    {
        _price = price;
        Notify();
    }

    private void Notify()
    {
        foreach (var observer in _observers)
        {
            observer.Update(_price);
        }
    }
}

public class PriceDisplay : IObserver
{
    public void Update(decimal price)
    {
        Console.WriteLine($"Display updated: {price}");
    }
}

public class PriceAlert : IObserver
{
    public void Update(decimal price)
    {
        if (price > 100)
        {
            Console.WriteLine($"Alert: stock price is {price}");
        }
    }
}

var stock = new Stock(95m);
stock.Subscribe(new PriceDisplay());
stock.Subscribe(new PriceAlert());
stock.SetPrice(105m);`,
    explanation:
      "The C# example keeps the subject responsible for notifying observers, while each observer decides how to respond to the new price.",
  },
  {
    language: ".NET",
    code: `using System;
using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;

public interface IObserver
{
    void Update(decimal price);
}

public class Stock
{
    private readonly List<IObserver> _observers = new();
    private decimal _price;

    public Stock(decimal price)
    {
        _price = price;
    }

    public void Subscribe(IObserver observer)
    {
        _observers.Add(observer);
    }

    public void Unsubscribe(IObserver observer)
    {
        _observers.Remove(observer);
    }

    public void SetPrice(decimal price)
    {
        _price = price;
        Notify();
    }

    private void Notify()
    {
        foreach (var observer in _observers)
        {
            observer.Update(_price);
        }
    }
}

public class PriceDisplay : IObserver
{
    public void Update(decimal price)
    {
        Console.WriteLine($"Display updated: {price}");
    }
}

public class PriceAlert : IObserver
{
    public void Update(decimal price)
    {
        if (price > 100)
        {
            Console.WriteLine($"Alert: stock price is {price}");
        }
    }
}

var services = new ServiceCollection();
services.AddSingleton(new Stock(95m));

var provider = services.BuildServiceProvider();
var stock = provider.GetRequiredService<Stock>();
stock.Subscribe(new PriceDisplay());
stock.Subscribe(new PriceAlert());
stock.SetPrice(105m);`,
    explanation:
      "The .NET version shows the same observer pattern with dependency injection available for the subject, while display and alert observers remain decoupled from the stock's internal state changes.",
  },
];
