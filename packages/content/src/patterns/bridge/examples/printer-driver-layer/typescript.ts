import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Printer driver bridge",
  code: `type PrinterMode = "local" | "network" | "cloud";

interface PrinterDriver {
  print(document: string): void;
}

class DocumentApp {
  constructor(private driver: PrinterDriver) {}

  printDocument(document: string) {
    this.driver.print(document);
  }
}`,
  explanation:
    "Document rendering is kept separate from the printer driver implementation.",
};