import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "React vendor bridge",
  code: `type Vendor = "stripe" | "adyen";

function createVendorBridge(vendor: Vendor) {
  return {
    client: { vendor },
    mapper: { vendor },
    adapter: { vendor },
  };
}`,
  explanation:
    "A React integration layer can centralize vendor-specific object creation in one family.",
};