import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Angular printer bridge",
  code: `export interface PrinterDriver {
  print(document: string): void;
}

export class DocumentApp {
  constructor(private driver: PrinterDriver) {}

  printDocument(document: string) {
    this.driver.print(document);
  }
}`,
  explanation:
    "Angular can separate document handling from printer-specific implementation details.",
};