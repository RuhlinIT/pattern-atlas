import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const orderStateExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface OrderState {
  next(order: Order): void;
  name(): string;
}


class Order {
  private state: OrderState;


  constructor() {
    this.state = new PendingState();
  }


  setState(state: OrderState): void {
    this.state = state;
  }


  proceed(): void {
    this.state.next(this);
  }


  getStateName(): string {
    return this.state.name();
  }
}


class PendingState implements OrderState {
  next(order: Order): void {
    order.setState(new ProcessingState());
  }


  name(): string {
    return "Pending";
  }
}


class ProcessingState implements OrderState {
  next(order: Order): void {
    order.setState(new ShippedState());
  }


  name(): string {
    return "Processing";
  }
}


class ShippedState implements OrderState {
  next(order: Order): void {
    console.log("Order already shipped");
  }


  name(): string {
    return "Shipped";
  }
}


const order = new Order();
console.log(order.getStateName());
order.proceed();
console.log(order.getStateName());
order.proceed();
console.log(order.getStateName());
order.proceed();`,
    explanation:
      "The order object delegates state-dependent behavior to separate state classes, which makes lifecycle transitions easier to extend.",
  },
  {
    language: "Java",
    code: `interface OrderState {
    void next(Order order);
    String name();
}


class Order {
    private OrderState state;


    public Order() {
        this.state = new PendingState();
    }


    public void setState(OrderState state) {
        this.state = state;
    }


    public void proceed() {
        this.state.next(this);
    }


    public String getStateName() {
        return this.state.name();
    }
}


class PendingState implements OrderState {
    public void next(Order order) {
        order.setState(new ProcessingState());
    }


    public String name() {
        return "Pending";
    }
}


class ProcessingState implements OrderState {
    public void next(Order order) {
        order.setState(new ShippedState());
    }


    public String name() {
        return "Processing";
    }
}


class ShippedState implements OrderState {
    public void next(Order order) {
        System.out.println("Order already shipped");
    }


    public String name() {
        return "Shipped";
    }
}


Order order = new Order();
System.out.println(order.getStateName());
order.proceed();
System.out.println(order.getStateName());
order.proceed();
System.out.println(order.getStateName());
order.proceed();`,
    explanation:
      "The Java order example uses state objects to encapsulate transition logic instead of large conditional blocks.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod


class OrderState(ABC):
    @abstractmethod
    def next(self, order: "Order") -> None:
        pass


    @abstractmethod
    def name(self) -> str:
        pass


class Order:
    def __init__(self) -> None:
        self.state: OrderState = PendingState()


    def set_state(self, state: OrderState) -> None:
        self.state = state


    def proceed(self) -> None:
        self.state.next(self)


    def get_state_name(self) -> str:
        return self.state.name()


class PendingState(OrderState):
    def next(self, order: Order) -> None:
        order.set_state(ProcessingState())


    def name(self) -> str:
        return "Pending"


class ProcessingState(OrderState):
    def next(self, order: Order) -> None:
        order.set_state(ShippedState())


    def name(self) -> str:
        return "Processing"


class ShippedState(OrderState):
    def next(self, order: Order) -> None:
        print("Order already shipped")


    def name(self) -> str:
        return "Shipped"


order = Order()
print(order.get_state_name())
order.proceed()
print(order.get_state_name())
order.proceed()
print(order.get_state_name())
order.proceed()`,
    explanation:
      "The Python order example lets each state decide what happens next, which keeps the order workflow clean and modular.",
  },
  {
    language: "Angular",
    code: `interface OrderState {
  next(order: Order): void;
  name(): string;
}


class Order {
  private state: OrderState;


  constructor() {
    this.state = new PendingState();
  }


  setState(state: OrderState): void {
    this.state = state;
  }


  proceed(): void {
    this.state.next(this);
  }


  getStateName(): string {
    return this.state.name();
  }
}


class PendingState implements OrderState {
  next(order: Order): void {
    order.setState(new ProcessingState());
  }


  name(): string {
    return "Pending";
  }
}


class ProcessingState implements OrderState {
  next(order: Order): void {
    order.setState(new ShippedState());
  }


  name(): string {
    return "Processing";
  }
}


class ShippedState implements OrderState {
  next(order: Order): void {
    console.log("Order already shipped");
  }


  name(): string {
    return "Shipped";
  }
}


const order = new Order();
console.log(order.getStateName());
order.proceed();
console.log(order.getStateName());
order.proceed();
console.log(order.getStateName());
order.proceed();`,
    explanation:
      "The Angular example keeps the order lifecycle behavior inside state classes so the context stays simple.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


interface OrderState {
  next(order: Order): void;
  name(): string;
}


class Order {
  private state: OrderState;


  constructor() {
    this.state = new PendingState();
  }


  setState(state: OrderState): void {
    this.state = state;
  }


  proceed(): void {
    this.state.next(this);
  }


  getStateName(): string {
    return this.state.name();
  }
}


class PendingState implements OrderState {
  next(order: Order): void {
    order.setState(new ProcessingState());
  }


  name(): string {
    return "Pending";
  }
}


class ProcessingState implements OrderState {
  next(order: Order): void {
    order.setState(new ShippedState());
  }


  name(): string {
    return "Processing";
  }
}


class ShippedState implements OrderState {
  next(order: Order): void {
    console.log("Order already shipped");
  }


  name(): string {
    return "Shipped";
  }
}


function OrderPreview({ order }: { order: Order }) {
  return <p>{order.getStateName()}</p>;
}


export function App() {
  const order = useMemo(() => new Order(), []);


  useMemo(() => {
    order.proceed();
  }, [order]);


  return (
    <main>
      <h1>Order State</h1>
      <OrderPreview order={order} />
    </main>
  );
}`,
    explanation:
      "The React example models state-specific behavior with separate classes while the UI only reads the current state name.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


interface OrderState {
  next(order: Order): void;
  name(): string;
}


class Order {
  private state: OrderState;


  constructor() {
    this.state = new PendingState();
  }


  setState(state: OrderState): void {
    this.state = state;
  }


  proceed(): void {
    this.state.next(this);
  }


  getStateName(): string {
    return this.state.name();
  }
}


class PendingState implements OrderState {
  next(order: Order): void {
    order.setState(new ProcessingState());
  }


  name(): string {
    return "Pending";
  }
}


class ProcessingState implements OrderState {
  next(order: Order): void {
    order.setState(new ShippedState());
  }


  name(): string {
    return "Processing";
  }
}


class ShippedState implements OrderState {
  next(order: Order): void {
    console.log("Order already shipped");
  }


  name(): string {
    return "Shipped";
  }
}


function OrderPreview({ order }: { order: Order }) {
  return (
    <View>
      <Text>{order.getStateName()}</Text>
    </View>
  );
}


export function App() {
  const order = useMemo(() => new Order(), []);


  useMemo(() => {
    order.proceed();
  }, [order]);


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Order State</Text>
        <OrderPreview order={order} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native example shows the current order state while the transition logic remains encapsulated in the state objects.",
  },
  {
    language: "C#",
    code: `using System;


public interface IOrderState
{
    void Next(Order order);
    string Name();
}


public class Order
{
    private IOrderState _state;


    public Order()
    {
        _state = new PendingState();
    }


    public void SetState(IOrderState state)
    {
        _state = state;
    }


    public void Proceed()
    {
        _state.Next(this);
    }


    public string GetStateName()
    {
        return _state.Name();
    }
}


public class PendingState : IOrderState
{
    public void Next(Order order)
    {
        order.SetState(new ProcessingState());
    }


    public string Name()
    {
        return "Pending";
    }
}


public class ProcessingState : IOrderState
{
    public void Next(Order order)
    {
        order.SetState(new ShippedState());
    }


    public string Name()
    {
        return "Processing";
    }
}


public class ShippedState : IOrderState
{
    public void Next(Order order)
    {
        Console.WriteLine("Order already shipped");
    }


    public string Name()
    {
        return "Shipped";
    }
}


var order = new Order();
Console.WriteLine(order.GetStateName());
order.Proceed();
Console.WriteLine(order.GetStateName());
order.Proceed();
Console.WriteLine(order.GetStateName());
order.Proceed();`,
    explanation:
      "The C# order example delegates state-specific transitions to separate classes and keeps the context focused on delegation.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;


public interface IOrderState
{
    void Next(Order order);
    string Name();
}


public class Order
{
    private IOrderState _state;


    public Order()
    {
        _state = new PendingState();
    }


    public void SetState(IOrderState state)
    {
        _state = state;
    }


    public void Proceed()
    {
        _state.Next(this);
    }


    public string GetStateName()
    {
        return _state.Name();
    }
}


public class PendingState : IOrderState
{
    public void Next(Order order)
    {
        order.SetState(new ProcessingState());
    }


    public string Name()
    {
        return "Pending";
    }
}


public class ProcessingState : IOrderState
{
    public void Next(Order order)
    {
        order.SetState(new ShippedState());
    }


    public string Name()
    {
        return "Processing";
    }
}


public class ShippedState : IOrderState
{
    public void Next(Order order)
    {
        Console.WriteLine("Order already shipped");
    }


    public string Name()
    {
        return "Shipped";
    }
}


var services = new ServiceCollection();
services.AddSingleton<Order>();

var provider = services.BuildServiceProvider();
var order = provider.GetRequiredService<Order>();

Console.WriteLine(order.GetStateName());
order.Proceed();
Console.WriteLine(order.GetStateName());
order.Proceed();
Console.WriteLine(order.GetStateName());
order.Proceed();`,
    explanation:
      "The .NET order example uses dependency injection for the context while state classes handle lifecycle transitions.",
  },
];
