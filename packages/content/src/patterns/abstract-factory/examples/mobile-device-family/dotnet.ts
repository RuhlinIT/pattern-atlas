import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const dotnet: PatternLanguageExample = {
  language: "dotnet",
  title: ".NET device factory",
  code: `public interface IView { string Platform { get; } }
public interface IActionSheet { string Platform { get; } }
public interface INavigation { string Platform { get; } }

public abstract class DeviceFactory
{
    public abstract IView CreateView();
    public abstract IActionSheet CreateActionSheet();
    public abstract INavigation CreateNavigation();
}`,
  explanation:
    ".NET can use a device-specific abstract factory to keep platform objects aligned.",
};