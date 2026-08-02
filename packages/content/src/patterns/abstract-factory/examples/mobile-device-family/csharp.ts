import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const csharp: PatternLanguageExample = {
  language: "csharp",
  title: "C# device factory",
  code: `public interface IView { string Platform { get; } }
public interface IActionSheet { string Platform { get; } }
public interface INavigation { string Platform { get; } }

public interface IDeviceFactory
{
    IView CreateView();
    IActionSheet CreateActionSheet();
    INavigation CreateNavigation();
}`,
  explanation:
    "C# can coordinate mobile-related objects through a single abstract factory.",
};