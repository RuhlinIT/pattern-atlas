import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const dotnet: PatternLanguageExample = {
  language: "dotnet",
  title: ".NET office factory",
  code: `public interface IDesk { string Style { get; } string Material { get; } }
public interface IChair { string Style { get; } string Material { get; } }
public interface ICabinet { string Style { get; } string Material { get; } }

public abstract class OfficeFactory
{
    public abstract IDesk CreateDesk();
    public abstract IChair CreateChair();
    public abstract ICabinet CreateCabinet();
}`,
  explanation:
    ".NET can create matching office products through one abstract factory family.",
};