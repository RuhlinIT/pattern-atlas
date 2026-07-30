import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const trafficLightStateExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface TrafficLightState {
  next(light: TrafficLight): void;
  name(): string;
}


class TrafficLight {
  private state: TrafficLightState;


  constructor() {
    this.state = new RedState();
  }


  setState(state: TrafficLightState): void {
    this.state = state;
  }


  change(): void {
    this.state.next(this);
  }


  getStateName(): string {
    return this.state.name();
  }
}


class RedState implements TrafficLightState {
  next(light: TrafficLight): void {
    light.setState(new GreenState());
  }


  name(): string {
    return "Red";
  }
}


class GreenState implements TrafficLightState {
  next(light: TrafficLight): void {
    light.setState(new YellowState());
  }


  name(): string {
    return "Green";
  }
}


class YellowState implements TrafficLightState {
  next(light: TrafficLight): void {
    light.setState(new RedState());
  }


  name(): string {
    return "Yellow";
  }
}


const light = new TrafficLight();
console.log(light.getStateName());
light.change();
console.log(light.getStateName());
light.change();
console.log(light.getStateName());
light.change();
console.log(light.getStateName());`,
    explanation:
      "The traffic light switches behavior based on its current state, with each state object controlling the next transition.",
  },
  {
    language: "Java",
    code: `interface TrafficLightState {
    void next(TrafficLight light);
    String name();
}


class TrafficLight {
    private TrafficLightState state;


    public TrafficLight() {
        this.state = new RedState();
    }


    public void setState(TrafficLightState state) {
        this.state = state;
    }


    public void change() {
        this.state.next(this);
    }


    public String getStateName() {
        return this.state.name();
    }
}


class RedState implements TrafficLightState {
    public void next(TrafficLight light) {
        light.setState(new GreenState());
    }


    public String name() {
        return "Red";
    }
}


class GreenState implements TrafficLightState {
    public void next(TrafficLight light) {
        light.setState(new YellowState());
    }


    public String name() {
        return "Green";
    }
}


class YellowState implements TrafficLightState {
    public void next(TrafficLight light) {
        light.setState(new RedState());
    }


    public String name() {
        return "Yellow";
    }
}


TrafficLight light = new TrafficLight();
System.out.println(light.getStateName());
light.change();
System.out.println(light.getStateName());
light.change();
System.out.println(light.getStateName());
light.change();
System.out.println(light.getStateName());`,
    explanation:
      "The Java traffic light example models each color as a separate state class and lets the context delegate transitions to it.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod


class TrafficLightState(ABC):
    @abstractmethod
    def next(self, light: "TrafficLight") -> None:
        pass


    @abstractmethod
    def name(self) -> str:
        pass


class TrafficLight:
    def __init__(self) -> None:
        self.state: TrafficLightState = RedState()


    def set_state(self, state: TrafficLightState) -> None:
        self.state = state


    def change(self) -> None:
        self.state.next(self)


    def get_state_name(self) -> str:
        return self.state.name()


class RedState(TrafficLightState):
    def next(self, light: TrafficLight) -> None:
        light.set_state(GreenState())


    def name(self) -> str:
        return "Red"


class GreenState(TrafficLightState):
    def next(self, light: TrafficLight) -> None:
        light.set_state(YellowState())


    def name(self) -> str:
        return "Green"


class YellowState(TrafficLightState):
    def next(self, light: TrafficLight) -> None:
        light.set_state(RedState())


    def name(self) -> str:
        return "Yellow"


light = TrafficLight()
print(light.get_state_name())
light.change()
print(light.get_state_name())
light.change()
print(light.get_state_name())
light.change()
print(light.get_state_name())`,
    explanation:
      "The Python traffic light example keeps each phase in a dedicated state class and rotates through them in order.",
  },
  {
    language: "Angular",
    code: `interface TrafficLightState {
  next(light: TrafficLight): void;
  name(): string;
}


class TrafficLight {
  private state: TrafficLightState;


  constructor() {
    this.state = new RedState();
  }


  setState(state: TrafficLightState): void {
    this.state = state;
  }


  change(): void {
    this.state.next(this);
  }


  getStateName(): string {
    return this.state.name();
  }
}


class RedState implements TrafficLightState {
  next(light: TrafficLight): void {
    light.setState(new GreenState());
  }


  name(): string {
    return "Red";
  }
}


class GreenState implements TrafficLightState {
  next(light: TrafficLight): void {
    light.setState(new YellowState());
  }


  name(): string {
    return "Green";
  }
}


class YellowState implements TrafficLightState {
  next(light: TrafficLight): void {
    light.setState(new RedState());
  }


  name(): string {
    return "Yellow";
  }
}


const light = new TrafficLight();
console.log(light.getStateName());
light.change();
console.log(light.getStateName());
light.change();
console.log(light.getStateName());
light.change();
console.log(light.getStateName());`,
    explanation:
      "The Angular example uses state objects to keep the traffic light behavior simple and extensible.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


interface TrafficLightState {
  next(light: TrafficLight): void;
  name(): string;
}


class TrafficLight {
  private state: TrafficLightState;


  constructor() {
    this.state = new RedState();
  }


  setState(state: TrafficLightState): void {
    this.state = state;
  }


  change(): void {
    this.state.next(this);
  }


  getStateName(): string {
    return this.state.name();
  }
}


class RedState implements TrafficLightState {
  next(light: TrafficLight): void {
    light.setState(new GreenState());
  }


  name(): string {
    return "Red";
  }
}


class GreenState implements TrafficLightState {
  next(light: TrafficLight): void {
    light.setState(new YellowState());
  }


  name(): string {
    return "Green";
  }
}


class YellowState implements TrafficLightState {
  next(light: TrafficLight): void {
    light.setState(new RedState());
  }


  name(): string {
    return "Yellow";
  }
}


function LightPreview({ light }: { light: TrafficLight }) {
  return <p>{light.getStateName()}</p>;
}


export function App() {
  const light = useMemo(() => new TrafficLight(), []);


  useMemo(() => {
    light.change();
  }, [light]);


  return (
    <main>
      <h1>Traffic Light State</h1>
      <LightPreview light={light} />
    </main>
  );
}`,
    explanation:
      "The React example reads the current traffic light state while the state objects themselves control transitions.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


interface TrafficLightState {
  next(light: TrafficLight): void;
  name(): string;
}


class TrafficLight {
  private state: TrafficLightState;


  constructor() {
    this.state = new RedState();
  }


  setState(state: TrafficLightState): void {
    this.state = state;
  }


  change(): void {
    this.state.next(this);
  }


  getStateName(): string {
    return this.state.name();
  }
}


class RedState implements TrafficLightState {
  next(light: TrafficLight): void {
    light.setState(new GreenState());
  }


  name(): string {
    return "Red";
  }
}


class GreenState implements TrafficLightState {
  next(light: TrafficLight): void {
    light.setState(new YellowState());
  }


  name(): string {
    return "Green";
  }
}


class YellowState implements TrafficLightState {
  next(light: TrafficLight): void {
    light.setState(new RedState());
  }


  name(): string {
    return "Yellow";
  }
}


function LightPreview({ light }: { light: TrafficLight }) {
  return (
    <View>
      <Text>{light.getStateName()}</Text>
    </View>
  );
}


export function App() {
  const light = useMemo(() => new TrafficLight(), []);


  useMemo(() => {
    light.change();
  }, [light]);


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Traffic Light State</Text>
        <LightPreview light={light} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native example displays the current light color while the state classes manage the sequence behind the scenes.",
  },
  {
    language: "C#",
    code: `using System;


public interface ITrafficLightState
{
    void Next(TrafficLight light);
    string Name();
}


public class TrafficLight
{
    private ITrafficLightState _state;


    public TrafficLight()
    {
        _state = new RedState();
    }


    public void SetState(ITrafficLightState state)
    {
        _state = state;
    }


    public void Change()
    {
        _state.Next(this);
    }


    public string GetStateName()
    {
        return _state.Name();
    }
}


public class RedState : ITrafficLightState
{
    public void Next(TrafficLight light)
    {
        light.SetState(new GreenState());
    }


    public string Name()
    {
        return "Red";
    }
}


public class GreenState : ITrafficLightState
{
    public void Next(TrafficLight light)
    {
        light.SetState(new YellowState());
    }


    public string Name()
    {
        return "Green";
    }
}


public class YellowState : ITrafficLightState
{
    public void Next(TrafficLight light)
    {
        light.SetState(new RedState());
    }


    public string Name()
    {
        return "Yellow";
    }
}


var light = new TrafficLight();
Console.WriteLine(light.GetStateName());
light.Change();
Console.WriteLine(light.GetStateName());
light.Change();
Console.WriteLine(light.GetStateName());
light.Change();
Console.WriteLine(light.GetStateName());`,
    explanation:
      "The C# traffic light example uses state polymorphism to handle each color's transition behavior cleanly.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;


public interface ITrafficLightState
{
    void Next(TrafficLight light);
    string Name();
}


public class TrafficLight
{
    private ITrafficLightState _state;


    public TrafficLight()
    {
        _state = new RedState();
    }


    public void SetState(ITrafficLightState state)
    {
        _state = state;
    }


    public void Change()
    {
        _state.Next(this);
    }


    public string GetStateName()
    {
        return _state.Name();
    }
}


public class RedState : ITrafficLightState
{
    public void Next(TrafficLight light)
    {
        light.SetState(new GreenState());
    }


    public string Name()
    {
        return "Red";
    }
}


public class GreenState : ITrafficLightState
{
    public void Next(TrafficLight light)
    {
        light.SetState(new YellowState());
    }


    public string Name()
    {
        return "Green";
    }
}


public class YellowState : ITrafficLightState
{
    public void Next(TrafficLight light)
    {
        light.SetState(new RedState());
    }


    public string Name()
    {
        return "Yellow";
    }
}


var services = new ServiceCollection();
services.AddSingleton<TrafficLight>();

var provider = services.BuildServiceProvider();
var light = provider.GetRequiredService<TrafficLight>();


Console.WriteLine(light.GetStateName());
light.Change();
Console.WriteLine(light.GetStateName());
light.Change();
Console.WriteLine(light.GetStateName());
light.Change();
Console.WriteLine(light.GetStateName());`,
    explanation:
      "The .NET traffic light example resolves the context through dependency injection while the state objects drive behavior changes.",
  },
];
