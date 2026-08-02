import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Document generation family",
  code: `class Invoice:
    def render(self):
        raise NotImplementedError()

class Receipt:
    def render(self):
        raise NotImplementedError()

class Report:
    def render(self):
        raise NotImplementedError()

class DocumentFactory:
    def create_invoice(self):
        raise NotImplementedError()

    def create_receipt(self):
        raise NotImplementedError()

    def create_report(self):
        raise NotImplementedError()

class BrandAInvoice(Invoice):
    def render(self):
        return "Render Brand A invoice"

class BrandAReceipt(Receipt):
    def render(self):
        return "Render Brand A receipt"

class BrandAReport(Report):
    def render(self):
        return "Render Brand A report"

class BrandADocumentFactory(DocumentFactory):
    def create_invoice(self):
        return BrandAInvoice()

    def create_receipt(self):
        return BrandAReceipt()

    def create_report(self):
        return BrandAReport()
`,
  explanation:
    "Python keeps the document family lightweight while still showing how a single factory can produce consistent outputs.",
};