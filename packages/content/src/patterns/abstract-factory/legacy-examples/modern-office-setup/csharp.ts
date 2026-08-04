import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const csharp: PatternLanguageExample = {
  language: "csharp",
  title: "C# office factory",
  code: `public interface IDesk { string Style { get; } string Material { get; } }
public interface IChair { string Style { get; } string Material { get; } }
public interface ICabinet { string Style { get; } string Material { get; } }

public interface IOfficeFactory
{
    IDesk CreateDesk();
    IChair CreateChair();
    ICabinet CreateCabinet();
}`,
  explanation:
    "C# abstract factories can create a complete office product family with the same theme.",
};