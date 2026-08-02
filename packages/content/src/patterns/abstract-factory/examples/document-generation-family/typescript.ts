import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Document generation family",
  code: `interface Invoice {
  render(): string;
}

interface Receipt {
  render(): string;
}

interface Report {
  render(): string;
}

interface DocumentFactory {
  createInvoice(): Invoice;
  createReceipt(): Receipt;
  createReport(): Report;
}

class BrandAInvoice implements Invoice {
  render() {
    return "Render Brand A invoice";
  }
}

class BrandAReceipt implements Receipt {
  render() {
    return "Render Brand A receipt";
  }
}

class BrandAReport implements Report {
  render() {
    return "Render Brand A report";
  }
}

class BrandADocumentFactory implements DocumentFactory {
  createInvoice() {
    return new BrandAInvoice();
  }

  createReceipt() {
    return new BrandAReceipt();
  }

  createReport() {
    return new BrandAReport();
  }
}
`,
  explanation:
    "The factory creates a coordinated document family so invoices, receipts, and reports stay consistent for a brand or locale.",
};