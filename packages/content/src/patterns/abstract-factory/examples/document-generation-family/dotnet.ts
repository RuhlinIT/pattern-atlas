import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const dotnet: PatternLanguageExample = {
  language: "dotnet",
  title: ".NET document factory",
  code: `public interface IInvoice { string Locale { get; } }
public interface IReceipt { string Locale { get; } }
public interface IReport { string Locale { get; } }

public abstract class DocumentFactory
{
    public abstract IInvoice CreateInvoice();
    public abstract IReceipt CreateReceipt();
    public abstract IReport CreateReport();
}`,
  explanation:
    ".NET is a good fit for abstract factories that generate document families across regions.",
};