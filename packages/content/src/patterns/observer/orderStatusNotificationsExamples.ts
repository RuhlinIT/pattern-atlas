import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const orderStatusNotificationsExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface OrderObserver {
  update(status: string): void;
}

class Order {
  private observers: OrderObserver[] = [];

  constructor(private status: string) {}

  subscribe(observer: OrderObserver): void {
    this.observers.push(observer);
  }

  setStatus(status: string): void {
    this.status = status;
    this.notify();
  }

  private notify(): void {
    this.observers.forEach((observer) => observer.update(this.status));
  }
}

class EmailNotifier implements OrderObserver {
  update(status: string): void {
    console.log(\`Email sent for status: \${status}\`);
  }
}

class WarehouseUpdater implements OrderObserver {
  update(status: string): void {
    console.log(\`Warehouse updated for status: \${status}\`);
  }
}

class AnalyticsTracker implements OrderObserver {
  update(status: string): void {
    console.log(\`Analytics tracked: \${status}\`);
  }
}

const order = new Order("created");
order.subscribe(new EmailNotifier());
order.subscribe(new WarehouseUpdater());
order.subscribe(new AnalyticsTracker());
order.setStatus("shipped");`,
    explanation:
      "The order does not know who is listening beyond the observer contract, which keeps notification consumers loosely coupled.",
  },
  {
    language: "Java",
    code: `import java.util.ArrayList;
import java.util.List;

interface OrderObserver {
    void update(String status);
}

class Order {
    private final List<OrderObserver> observers = new ArrayList<>();
    private String status;

    public Order(String status) {
        this.status = status;
    }

    public void subscribe(OrderObserver observer) {
        observers.add(observer);
    }

    public void setStatus(String status) {
        this.status = status;
        notifyObservers();
    }

    private void notifyObservers() {
        for (OrderObserver observer : observers) {
            observer.update(status);
        }
    }
}

class EmailNotifier implements OrderObserver {
    public void update(String status) {
        System.out.println("Email sent for status: " + status);
    }
}

class WarehouseUpdater implements OrderObserver {
    public void update(String status) {
        System.out.println("Warehouse updated for status: " + status);
    }
}

class AnalyticsTracker implements OrderObserver {
    public void update(String status) {
        System.out.println("Analytics tracked: " + status);
    }
}

Order order = new Order("created");
order.subscribe(new EmailNotifier());
order.subscribe(new WarehouseUpdater());
order.subscribe(new AnalyticsTracker());
order.setStatus("shipped");`,
    explanation:
      "Each subscriber reacts to the same order event in its own way without the order object coordinating concrete downstream logic.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod

class OrderObserver(ABC):
    @abstractmethod
    def update(self, status: str) -> None:
        pass

class Order:
    def __init__(self, status: str) -> None:
        self.status = status
        self.observers: list[OrderObserver] = []

    def subscribe(self, observer: OrderObserver) -> None:
        self.observers.append(observer)

    def set_status(self, status: str) -> None:
        self.status = status
        self.notify()

    def notify(self) -> None:
        for observer in self.observers:
            observer.update(self.status)

class EmailNotifier(OrderObserver):
    def update(self, status: str) -> None:
        print(f"Email sent for status: {status}")

class WarehouseUpdater(OrderObserver):
    def update(self, status: str) -> None:
        print(f"Warehouse updated for status: {status}")

class AnalyticsTracker(OrderObserver):
    def update(self, status: str) -> None:
        print(f"Analytics tracked: {status}")

order = Order("created")
order.subscribe(EmailNotifier())
order.subscribe(WarehouseUpdater())
order.subscribe(AnalyticsTracker())
order.set_status("shipped")`,
    explanation:
      "The order broadcasts status updates once, and each observer handles its own side effect independently.",
  },
  {
    language: "Angular",
    code: `import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';


interface OrderObserver {
  update(status: string): void;
}


@Injectable({ providedIn: 'root' })
class Order {
  private statusChanges = new Subject<string>();
  private status: string;


  constructor() {
    this.status = 'created';
  }


  subscribe(observer: OrderObserver): Subscription {
    return this.statusChanges.subscribe((status) => observer.update(status));
  }


  setStatus(status: string): void {
    this.status = status;
    this.statusChanges.next(this.status);
  }
}


class EmailNotifier implements OrderObserver {
  update(status: string): void {
    console.log(\`Email sent for status: \${status}\`);
  }
}


class WarehouseUpdater implements OrderObserver {
  update(status: string): void {
    console.log(\`Warehouse updated for status: \${status}\`);
  }
}


class AnalyticsTracker implements OrderObserver {
  update(status: string): void {
    console.log(\`Analytics tracked: \${status}\`);
  }
}


const order = new Order();
order.subscribe(new EmailNotifier());
order.subscribe(new WarehouseUpdater());
order.subscribe(new AnalyticsTracker());
order.setStatus('shipped');`,
    explanation:
      "The Angular order service publishes each status change once, and multiple observers react independently through subscriptions to the same update stream.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";

interface OrderObserver {
  update(status: string): void;
}

class Order {
  private observers: OrderObserver[] = [];

  constructor(private status: string) {}

  subscribe(observer: OrderObserver): void {
    this.observers.push(observer);
  }

  setStatus(status: string): void {
    this.status = status;
    this.notify();
  }

  private notify(): void {
    this.observers.forEach((observer) => observer.update(this.status));
  }
}

class EmailNotifier implements OrderObserver {
  update(status: string): void {
    console.log(\`Email sent for status: \${status}\`);
  }
}

class WarehouseUpdater implements OrderObserver {
  update(status: string): void {
    console.log(\`Warehouse updated for status: \${status}\`);
  }
}

class AnalyticsTracker implements OrderObserver {
  update(status: string): void {
    console.log(\`Analytics tracked: \${status}\`);
  }
}

function UpdateButton({ order }: { order: Order }) {
  return <button onClick={() => order.setStatus("shipped")}>Mark shipped</button>;
}

export function App() {
  const order = useMemo(() => {
    const instance = new Order("created");
    instance.subscribe(new EmailNotifier());
    instance.subscribe(new WarehouseUpdater());
    instance.subscribe(new AnalyticsTracker());
    return instance;
  }, []);

  return (
    <main>
      <h1>Order Status Notifications</h1>
      <UpdateButton order={order} />
    </main>
  );
}`,
    explanation:
      "The React example lets the order broadcast status changes while each observer handles its own side effect independently.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";

interface OrderObserver {
  update(status: string): void;
}

class Order {
  private observers: OrderObserver[] = [];

  constructor(private status: string) {}

  subscribe(observer: OrderObserver): void {
    this.observers.push(observer);
  }

  setStatus(status: string): void {
    this.status = status;
    this.notify();
  }

  private notify(): void {
    this.observers.forEach((observer) => observer.update(this.status));
  }
}

class EmailNotifier implements OrderObserver {
  update(status: string): void {
    console.log(\`Email sent for status: \${status}\`);
  }
}

class WarehouseUpdater implements OrderObserver {
  update(status: string): void {
    console.log(\`Warehouse updated for status: \${status}\`);
  }
}

class AnalyticsTracker implements OrderObserver {
  update(status: string): void {
    console.log(\`Analytics tracked: \${status}\`);
  }
}

function UpdateButton({ order }: { order: Order }) {
  return (
    <Pressable
      onPress={() => order.setStatus("shipped")}
      style={{ padding: 12, backgroundColor: "#111827", borderRadius: 8 }}
    >
      <Text style={{ color: "#fff", textAlign: "center" }}>Mark shipped</Text>
    </Pressable>
  );
}

export function App() {
  const order = useMemo(() => {
    const instance = new Order("created");
    instance.subscribe(new EmailNotifier());
    instance.subscribe(new WarehouseUpdater());
    instance.subscribe(new AnalyticsTracker());
    return instance;
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Order Status Notifications</Text>
        <UpdateButton order={order} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native version uses the same observer setup, but exposes the status change through a mobile-friendly pressable control.",
  },
  {
    language: "C#",
    code: `using System;
using System.Collections.Generic;

public interface IOrderObserver
{
    void Update(string status);
}

public class Order
{
    private readonly List<IOrderObserver> _observers = new();
    private string _status;

    public Order(string status)
    {
        _status = status;
    }

    public void Subscribe(IOrderObserver observer)
    {
        _observers.Add(observer);
    }

    public void SetStatus(string status)
    {
        _status = status;
        Notify();
    }

    private void Notify()
    {
        foreach (var observer in _observers)
        {
            observer.Update(_status);
        }
    }
}

public class EmailNotifier : IOrderObserver
{
    public void Update(string status)
    {
        Console.WriteLine($"Email sent for status: {status}");
    }
}

public class WarehouseUpdater : IOrderObserver
{
    public void Update(string status)
    {
        Console.WriteLine($"Warehouse updated for status: {status}");
    }
}

public class AnalyticsTracker : IOrderObserver
{
    public void Update(string status)
    {
        Console.WriteLine($"Analytics tracked: {status}");
    }
}

var order = new Order("created");
order.Subscribe(new EmailNotifier());
order.Subscribe(new WarehouseUpdater());
order.Subscribe(new AnalyticsTracker());
order.SetStatus("shipped");`,
    explanation:
      "The C# example keeps the order as the subject and lets multiple observers react to status changes without the order knowing their concrete behavior.",
  },
  {
    language: ".NET",
    code: `using System;
using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;

public interface IOrderObserver
{
    void Update(string status);
}

public class Order
{
    private readonly List<IOrderObserver> _observers = new();
    private string _status;

    public Order(string status)
    {
        _status = status;
    }

    public void Subscribe(IOrderObserver observer)
    {
        _observers.Add(observer);
    }

    public void SetStatus(string status)
    {
        _status = status;
        Notify();
    }

    private void Notify()
    {
        foreach (var observer in _observers)
        {
            observer.Update(_status);
        }
    }
}

public class EmailNotifier : IOrderObserver
{
    public void Update(string status)
    {
        Console.WriteLine($"Email sent for status: {status}");
    }
}

public class WarehouseUpdater : IOrderObserver
{
    public void Update(string status)
    {
        Console.WriteLine($"Warehouse updated for status: {status}");
    }
}

public class AnalyticsTracker : IOrderObserver
{
    public void Update(string status)
    {
        Console.WriteLine($"Analytics tracked: {status}");
    }
}

var services = new ServiceCollection();
services.AddSingleton<Order>(_ => new Order("created"));

var provider = services.BuildServiceProvider();
var order = provider.GetRequiredService<Order>();
order.Subscribe(new EmailNotifier());
order.Subscribe(new WarehouseUpdater());
order.Subscribe(new AnalyticsTracker());
order.SetStatus("shipped");`,
    explanation:
      "The .NET version shows the same observer pattern with dependency injection available for the subject, while each observer stays decoupled from the order's internal state changes.",
  },
];
