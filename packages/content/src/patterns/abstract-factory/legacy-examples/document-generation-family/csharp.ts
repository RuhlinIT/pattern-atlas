import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const csharp: PatternLanguageExample = {
  language: "csharp",
  title: "Document generation family",
  code: `public interface IInvoice
{
    string Render();
}

public interface IReceipt
{
    string Render();
}

public interface IReport
{
    string Render();
}

public interface IDocumentFactory
{
    IInvoice CreateInvoice();
    IReceipt CreateReceipt();
    IReport CreateReport();
}

public class BrandAInvoice : IInvoice
{
    public string Render() => "Render Brand A invoice";
}

public class BrandAReceipt : IReceipt
{
    public string Render() => "Render Brand A receipt";
}

public class BrandAReport : IReport
{
    public string Render() => "Render Brand A report";
}

public class BrandADocumentFactory : IDocumentFactory
{
    public IInvoice CreateInvoice() => new BrandAInvoice();
    public IReceipt CreateReceipt() => new BrandAReceipt();
    public IReport CreateReport() => new BrandAReport();
}
`,
  explanation:
    "C# keeps the document generation family strongly typed and consistent across all branded document outputs.",
};