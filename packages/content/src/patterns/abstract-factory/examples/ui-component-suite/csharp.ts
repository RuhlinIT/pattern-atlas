import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const csharp: PatternLanguageExample = {
  language: "csharp",
  title: "UI component suite",
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
};
