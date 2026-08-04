import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const csharp: PatternLanguageExample = {
  language: "csharp",
  title: "C# UI factory",
  code: `public interface IButton { string Theme { get; } }
public interface IInput { string Theme { get; } }
public interface ICard { string Theme { get; } }
public interface IAlert { string Theme { get; } }

public interface IComponentFactory
{
    IButton CreateButton();
    IInput CreateInput();
    ICard CreateCard();
    IAlert CreateAlert();
}`,
  explanation:
    "C# factories can keep a UI component family consistent across theme changes.",
};