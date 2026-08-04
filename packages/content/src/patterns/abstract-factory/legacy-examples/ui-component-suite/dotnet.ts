import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const dotnet: PatternLanguageExample = {
  language: "dotnet",
  title: ".NET UI factory",
  code: `public interface IButton { string Theme { get; } }
public interface IInput { string Theme { get; } }
public interface ICard { string Theme { get; } }
public interface IAlert { string Theme { get; } }

public abstract class ComponentFactory
{
    public abstract IButton CreateButton();
    public abstract IInput CreateInput();
    public abstract ICard CreateCard();
    public abstract IAlert CreateAlert();
}`,
  explanation:
    ".NET can use an abstract factory to keep themed UI objects aligned as a family.",
};