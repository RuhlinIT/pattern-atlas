import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Vendor bridge factory",
  code: `type Vendor = "stripe" | "adyen";

type Client = { vendor: Vendor };
type Mapper = { vendor: Vendor };
type Adapter = { vendor: Vendor };

interface VendorFactory {
  createClient(): Client;
  createMapper(): Mapper;
  createAdapter(): Adapter;
}

class StripeFactory implements VendorFactory {
  createClient(): Client {
    return { vendor: "stripe" };
  }

  createMapper(): Mapper {
    return { vendor: "stripe" };
  }

  createAdapter(): Adapter {
    return { vendor: "stripe" };
  }
}`,
  explanation:
    "This factory keeps integration pieces aligned for a specific vendor.",
};