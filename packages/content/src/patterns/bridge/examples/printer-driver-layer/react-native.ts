import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const reactNative: PatternLanguageExample = {
  language: "react-native",
  title: "React Native printer bridge",
  code: `type PrinterDriver = {
  print(document: string): void;
};

function createDocumentApp(driver: PrinterDriver) {
  return {
    printDocument: (document: string) => driver.print(document),
  };
}`,
  explanation:
    "React Native can keep rendering behavior separate from device-specific printer drivers.",
};