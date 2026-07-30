import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const uiComponentSuiteExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface Button {
  render(): string;
}


interface Input {
  render(): string;
}


interface Card {
  render(): string;
}


interface UIComponentFactory {
  createButton(): Button;
  createInput(): Input;
  createCard(): Card;
}


class LightButton implements Button {
  render(): string {
    return "Rendering a light theme button";
  }
}


class LightInput implements Input {
  render(): string {
    return "Rendering a light theme input";
  }
}


class LightCard implements Card {
  render(): string {
    return "Rendering a light theme card";
  }
}


class DarkButton implements Button {
  render(): string {
    return "Rendering a dark theme button";
  }
}


class DarkInput implements Input {
  render(): string {
    return "Rendering a dark theme input";
  }
}


class DarkCard implements Card {
  render(): string {
    return "Rendering a dark theme card";
  }
}


class LightUIComponentFactory implements UIComponentFactory {
  createButton(): Button {
    return new LightButton();
  }


  createInput(): Input {
    return new LightInput();
  }


  createCard(): Card {
    return new LightCard();
  }
}


class DarkUIComponentFactory implements UIComponentFactory {
  createButton(): Button {
    return new DarkButton();
  }


  createInput(): Input {
    return new DarkInput();
  }


  createCard(): Card {
    return new DarkCard();
  }
}


class Dashboard {
  constructor(private factory: UIComponentFactory) {}


  render(): string {
    const button = this.factory.createButton();
    const input = this.factory.createInput();
    const card = this.factory.createCard();


    return [button.render(), input.render(), card.render()].join(" | ");
  }
}


const dashboard = new Dashboard(new DarkUIComponentFactory());
console.log(dashboard.render());`,
    explanation:
      "The UI component factory creates a consistent family of themed controls, so the application can switch between light and dark designs without changing component construction logic.",
  },
  {
    language: "Java",
    code: `interface Button {
    String render();
}


interface Input {
    String render();
}


interface Card {
    String render();
}


interface UIComponentFactory {
    Button createButton();
    Input createInput();
    Card createCard();
}


class LightButton implements Button {
    public String render() {
        return "Rendering a light theme button";
    }
}


class LightInput implements Input {
    public String render() {
        return "Rendering a light theme input";
    }
}


class LightCard implements Card {
    public String render() {
        return "Rendering a light theme card";
    }
}


class DarkButton implements Button {
    public String render() {
        return "Rendering a dark theme button";
    }
}


class DarkInput implements Input {
    public String render() {
        return "Rendering a dark theme input";
    }
}


class DarkCard implements Card {
    public String render() {
        return "Rendering a dark theme card";
    }
}


class LightUIComponentFactory implements UIComponentFactory {
    public Button createButton() {
        return new LightButton();
    }


    public Input createInput() {
        return new LightInput();
    }


    public Card createCard() {
        return new LightCard();
    }
}


class DarkUIComponentFactory implements UIComponentFactory {
    public Button createButton() {
        return new DarkButton();
    }


    public Input createInput() {
        return new DarkInput();
    }


    public Card createCard() {
        return new DarkCard();
    }
}


class Dashboard {
    private final UIComponentFactory factory;


    public Dashboard(UIComponentFactory factory) {
        this.factory = factory;
    }


    public String render() {
        Button button = factory.createButton();
        Input input = factory.createInput();
        Card card = factory.createCard();


        return button.render() + " | " + input.render() + " | " + card.render();
    }
}


Dashboard dashboard = new Dashboard(new DarkUIComponentFactory());
System.out.println(dashboard.render());`,
    explanation:
      "The abstract factory ensures all UI controls come from the same theme family, which keeps the interface visually consistent.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod



class Button(ABC):
    @abstractmethod
    def render(self) -> str:
        pass



class Input(ABC):
    @abstractmethod
    def render(self) -> str:
        pass



class Card(ABC):
    @abstractmethod
    def render(self) -> str:
        pass



class UIComponentFactory(ABC):
    @abstractmethod
    def create_button(self) -> Button:
        pass


    @abstractmethod
    def create_input(self) -> Input:
        pass


    @abstractmethod
    def create_card(self) -> Card:
        pass



class LightButton(Button):
    def render(self) -> str:
        return "Rendering a light theme button"



class LightInput(Input):
    def render(self) -> str:
        return "Rendering a light theme input"



class LightCard(Card):
    def render(self) -> str:
        return "Rendering a light theme card"



class DarkButton(Button):
    def render(self) -> str:
        return "Rendering a dark theme button"



class DarkInput(Input):
    def render(self) -> str:
        return "Rendering a dark theme input"



class DarkCard(Card):
    def render(self) -> str:
        return "Rendering a dark theme card"



class LightUIComponentFactory(UIComponentFactory):
    def create_button(self) -> Button:
        return LightButton()


    def create_input(self) -> Input:
        return LightInput()


    def create_card(self) -> Card:
        return LightCard()



class DarkUIComponentFactory(UIComponentFactory):
    def create_button(self) -> Button:
        return DarkButton()


    def create_input(self) -> Input:
        return DarkInput()


    def create_card(self) -> Card:
        return DarkCard()



class Dashboard:
    def __init__(self, factory: UIComponentFactory) -> None:
        self.factory = factory


    def render(self) -> str:
        button = self.factory.create_button()
        input = self.factory.create_input()
        card = self.factory.create_card()
        return " | ".join([button.render(), input.render(), card.render()])



dashboard = Dashboard(DarkUIComponentFactory())
print(dashboard.render())`,
    explanation:
      "The UI component factory creates a related family of controls, which lets the theme change without affecting the dashboard logic.",
  },
  {
    language: "Angular",
    code: `interface Button {
  render(): string;
}


interface Input {
  render(): string;
}


interface Card {
  render(): string;
}


interface UIComponentFactory {
  createButton(): Button;
  createInput(): Input;
  createCard(): Card;
}


class LightButton implements Button {
  render(): string {
    return "Rendering a light theme button";
  }
}


class LightInput implements Input {
  render(): string {
    return "Rendering a light theme input";
  }
}


class LightCard implements Card {
  render(): string {
    return "Rendering a light theme card";
  }
}


class DarkButton implements Button {
  render(): string {
    return "Rendering a dark theme button";
  }
}


class DarkInput implements Input {
  render(): string {
    return "Rendering a dark theme input";
  }
}


class DarkCard implements Card {
  render(): string {
    return "Rendering a dark theme card";
  }
}


class LightUIComponentFactory implements UIComponentFactory {
  createButton(): Button {
    return new LightButton();
  }


  createInput(): Input {
    return new LightInput();
  }


  createCard(): Card {
    return new LightCard();
  }
}


class DarkUIComponentFactory implements UIComponentFactory {
  createButton(): Button {
    return new DarkButton();
  }


  createInput(): Input {
    return new DarkInput();
  }


  createCard(): Card {
    return new DarkCard();
  }
}


class Dashboard {
  constructor(private factory: UIComponentFactory) {}


  render(): string {
    const button = this.factory.createButton();
    const input = this.factory.createInput();
    const card = this.factory.createCard();


    return [button.render(), input.render(), card.render()].join(" | ");
  }
}


const dashboard = new Dashboard(new DarkUIComponentFactory());
console.log(dashboard.render());`,
    explanation:
      "The Angular example uses a UI factory so the application can produce a matching set of theme components without coupling to concrete classes.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


interface Button {
  render(): string;
}


interface Input {
  render(): string;
}


interface Card {
  render(): string;
}


interface UIComponentFactory {
  createButton(): Button;
  createInput(): Input;
  createCard(): Card;
}


class LightButton implements Button {
  render(): string {
    return "Rendering a light theme button";
  }
}


class LightInput implements Input {
  render(): string {
    return "Rendering a light theme input";
  }
}


class LightCard implements Card {
  render(): string {
    return "Rendering a light theme card";
  }
}


class DarkButton implements Button {
  render(): string {
    return "Rendering a dark theme button";
  }
}


class DarkInput implements Input {
  render(): string {
    return "Rendering a dark theme input";
  }
}


class DarkCard implements Card {
  render(): string {
    return "Rendering a dark theme card";
  }
}


class LightUIComponentFactory implements UIComponentFactory {
  createButton(): Button {
    return new LightButton();
  }


  createInput(): Input {
    return new LightInput();
  }


  createCard(): Card {
    return new LightCard();
  }
}


class DarkUIComponentFactory implements UIComponentFactory {
  createButton(): Button {
    return new DarkButton();
  }


  createInput(): Input {
    return new DarkInput();
  }


  createCard(): Card {
    return new DarkCard();
  }
}


function ThemePreview({ factory }: { factory: UIComponentFactory }) {
  const button = factory.createButton();
  const input = factory.createInput();
  const card = factory.createCard();


  return <p>{[button.render(), input.render(), card.render()].join(" | ")}</p>;
}


export function App() {
  const factory = useMemo(() => new DarkUIComponentFactory(), []);


  return (
    <main>
      <h1>Dark Theme Preview</h1>
      <ThemePreview factory={factory} />
    </main>
  );
}`,
    explanation:
      "The React example uses an abstract factory to assemble themed controls before rendering the UI, so the component family stays visually aligned.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


interface Button {
  render(): string;
}


interface Input {
  render(): string;
}


interface Card {
  render(): string;
}


interface UIComponentFactory {
  createButton(): Button;
  createInput(): Input;
  createCard(): Card;
}


class LightButton implements Button {
  render(): string {
    return "Rendering a light theme button";
  }
}


class LightInput implements Input {
  render(): string {
    return "Rendering a light theme input";
  }
}


class LightCard implements Card {
  render(): string {
    return "Rendering a light theme card";
  }
}


class DarkButton implements Button {
  render(): string {
    return "Rendering a dark theme button";
  }
}


class DarkInput implements Input {
  render(): string {
    return "Rendering a dark theme input";
  }
}


class DarkCard implements Card {
  render(): string {
    return "Rendering a dark theme card";
  }
}


class LightUIComponentFactory implements UIComponentFactory {
  createButton(): Button {
    return new LightButton();
  }


  createInput(): Input {
    return new LightInput();
  }


  createCard(): Card {
    return new LightCard();
  }
}


class DarkUIComponentFactory implements UIComponentFactory {
  createButton(): Button {
    return new DarkButton();
  }


  createInput(): Input {
    return new DarkInput();
  }


  createCard(): Card {
    return new DarkCard();
  }
}


function ThemePreview({ factory }: { factory: UIComponentFactory }) {
  const button = factory.createButton();
  const input = factory.createInput();
  const card = factory.createCard();


  return (
    <View>
      <Text>{button.render()}</Text>
      <Text>{input.render()}</Text>
      <Text>{card.render()}</Text>
    </View>
  );
}


export function App() {
  const factory = useMemo(() => new DarkUIComponentFactory(), []);


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Dark Theme Preview</Text>
        <ThemePreview factory={factory} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native version uses the same abstract factory to create a matching set of theme components and display them in a mobile layout.",
  },
  {
    language: "C#",
    code: `using System;


public interface IButton
{
    string Render();
}


public interface IInput
{
    string Render();
}


public interface ICard
{
    string Render();
}


public interface IUIComponentFactory
{
    IButton CreateButton();
    IInput CreateInput();
    ICard CreateCard();
}


public class LightButton : IButton
{
    public string Render()
    {
        return "Rendering a light theme button";
    }
}


public class LightInput : IInput
{
    public string Render()
    {
        return "Rendering a light theme input";
    }
}


public class LightCard : ICard
{
    public string Render()
    {
        return "Rendering a light theme card";
    }
}


public class DarkButton : IButton
{
    public string Render()
    {
        return "Rendering a dark theme button";
    }
}


public class DarkInput : IInput
{
    public string Render()
    {
        return "Rendering a dark theme input";
    }
}


public class DarkCard : ICard
{
    public string Render()
    {
        return "Rendering a dark theme card";
    }
}


public class LightUIComponentFactory : IUIComponentFactory
{
    public IButton CreateButton()
    {
        return new LightButton();
    }


    public IInput CreateInput()
    {
        return new LightInput();
    }


    public ICard CreateCard()
    {
        return new LightCard();
    }
}


public class DarkUIComponentFactory : IUIComponentFactory
{
    public IButton CreateButton()
    {
        return new DarkButton();
    }


    public IInput CreateInput()
    {
        return new DarkInput();
    }


    public ICard CreateCard()
    {
        return new DarkCard();
    }
}


public class Dashboard
{
    private readonly IUIComponentFactory _factory;


    public Dashboard(IUIComponentFactory factory)
    {
        _factory = factory;
    }


    public string Render()
    {
        var button = _factory.CreateButton();
        var input = _factory.CreateInput();
        var card = _factory.CreateCard();


        return string.Join(" | ", button.Render(), input.Render(), card.Render());
    }
}


var dashboard = new Dashboard(new DarkUIComponentFactory());
Console.WriteLine(dashboard.Render());`,
    explanation:
      "The C# example keeps each UI control within the same visual family by relying on a single abstract factory for theme-specific components.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;


public interface IButton
{
    string Render();
}


public interface IInput
{
    string Render();
}


public interface ICard
{
    string Render();
}


public interface IUIComponentFactory
{
    IButton CreateButton();
    IInput CreateInput();
    ICard CreateCard();
}


public class LightButton : IButton
{
    public string Render()
    {
        return "Rendering a light theme button";
    }
}


public class LightInput : IInput
{
    public string Render()
    {
        return "Rendering a light theme input";
    }
}


public class LightCard : ICard
{
    public string Render()
    {
        return "Rendering a light theme card";
    }
}


public class DarkButton : IButton
{
    public string Render()
    {
        return "Rendering a dark theme button";
    }
}


public class DarkInput : IInput
{
    public string Render()
    {
        return "Rendering a dark theme input";
    }
}


public class DarkCard : ICard
{
    public string Render()
    {
        return "Rendering a dark theme card";
    }
}


public class LightUIComponentFactory : IUIComponentFactory
{
    public IButton CreateButton()
    {
        return new LightButton();
    }


    public IInput CreateInput()
    {
        return new LightInput();
    }


    public ICard CreateCard()
    {
        return new LightCard();
    }
}


public class DarkUIComponentFactory : IUIComponentFactory
{
    public IButton CreateButton()
    {
        return new DarkButton();
    }


    public IInput CreateInput()
    {
        return new DarkInput();
    }


    public ICard CreateCard()
    {
        return new DarkCard();
    }
}


public class Dashboard
{
    private readonly IUIComponentFactory _factory;


    public Dashboard(IUIComponentFactory factory)
    {
        _factory = factory;
    }


    public string Render()
    {
        var button = _factory.CreateButton();
        var input = _factory.CreateInput();
        var card = _factory.CreateCard();


        return string.Join(" | ", button.Render(), input.Render(), card.Render());
    }
}


var services = new ServiceCollection();
services.AddSingleton<IUIComponentFactory, DarkUIComponentFactory>();
services.AddTransient<Dashboard>();

var provider = services.BuildServiceProvider();
var dashboard = provider.GetRequiredService<Dashboard>();

Console.WriteLine(dashboard.Render());`,
    explanation:
      "The .NET example uses dependency injection to resolve a themed UI factory, which keeps the dashboard decoupled from concrete controls.",
  },
];
