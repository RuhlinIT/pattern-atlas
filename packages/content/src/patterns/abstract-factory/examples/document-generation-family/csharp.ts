import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const csharp: PatternLanguageExample = {
  language: "csharp",
  title: "C# document factory",
  code: `public interface IInvoice { string Locale { get; } }
public interface IReceipt { string Locale { get; } }
public interface IReport { string Locale { get; } }

public interface IDocumentFactory
{
    IInvoice CreateInvoice();
    IReceipt CreateReceipt();
    IReport CreateReport();
}`,
  explanation:
    "C# can create a consistent document family that varies by brand or locale.",
};