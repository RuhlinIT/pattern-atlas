import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Document generation family",
  code: `interface Invoice {
    String render();
}

interface Receipt {
    String render();
}

interface Report {
    String render();
}

interface DocumentFactory {
    Invoice createInvoice();
    Receipt createReceipt();
    Report createReport();
}

class BrandAInvoice implements Invoice {
    public String render() {
        return "Render Brand A invoice";
    }
}

class BrandAReceipt implements Receipt {
    public String render() {
        return "Render Brand A receipt";
    }
}

class BrandAReport implements Report {
    public String render() {
        return "Render Brand A report";
    }
}

class BrandADocumentFactory implements DocumentFactory {
    public Invoice createInvoice() {
        return new BrandAInvoice();
    }

    public Receipt createReceipt() {
        return new BrandAReceipt();
    }

    public Report createReport() {
        return new BrandAReport();
    }
}
`,
  explanation:
    "Java models a document family by letting one factory create matching printable artifacts for the same brand or locale.",
};