import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Document family factory",
  code: `type Locale = "en-US" | "fr-FR";

type Invoice = { locale: Locale };
type Receipt = { locale: Locale };
type Report = { locale: Locale };

interface DocumentFactory {
  createInvoice(): Invoice;
  createReceipt(): Receipt;
  createReport(): Report;
}`,
  explanation:
    "A document abstract factory keeps invoices, receipts, and reports aligned by locale or brand.",
};