import type { PatternRecord } from "@atlas-patterns/schemas";
import { fileFormatExamples, legacyNotificationExamples, paymentGatewayExamples } from "./adapter";

export const AdapterPattern: PatternRecord = {
  slug: "adapter",
  name: "Adapter",
  category: "Structural",
  problem:
    "A client needs to use an existing class or external service, but its interface does not match what the application expects.",
  intent:
    "Convert the interface of an existing class into one that the client can use without changing the original implementation.",
  tradeoffs: [
    "Adds an extra layer that can hide important service-specific behavior",
    "Too many adapters can make integration code harder to navigate",
  ],
  languages: ["TypeScript", "Java", "Python"],
  platforms: ["Web", "Backend", "Integrations"],
  integrationNotes:
    "Adapters are especially useful when integrating legacy services, vendor SDKs, or mixed data formats behind a stable internal contract.",
  scenarios: [
    {
      slug: "payment-gateway-integration",
      title: "Payment gateway integration",
      summary:
        "A checkout flow expects one payment interface, while a third-party gateway exposes a different SDK method and payload shape.",
      languageExamples: paymentGatewayExamples,
    },
    {
      slug: "legacy-notification-service",
      title: "Legacy notification service",
      summary:
        "An application expects a notifier interface, but an older messaging service exposes a different send API.",
      languageExamples: legacyNotificationExamples,
    },
    {
      slug: "file-format-conversion",
      title: "File format conversion",
      summary:
        "An application expects structured user records, but a legacy data source returns rows in a different format that must be translated.",
      languageExamples: fileFormatExamples,
    },
  ],
  realWorldExamples: [
    {
      title: "Third-party payment gateways",
      description:
        "Wrap each payment provider SDK behind a common payment interface so checkout code does not depend on vendor-specific APIs.",
    },
    {
      title: "Legacy service modernization",
      description:
        "Keep older services in place while exposing newer application-facing contracts through adapters.",
    },
    {
      title: "File and data format translation",
      description:
        "Convert XML, CSV, or vendor-specific payloads into the internal models expected by the rest of the application.",
    },
  ],
};
