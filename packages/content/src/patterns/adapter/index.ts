import type { PatternRecord } from "@atlas-patterns/schemas";

import { meta } from "./meta";
import { scenarios } from "./scenarios";

import { paymentGatewayIntegrationExamples } from "./examples/payment-gateway-integration";
import { legacyNotificationServiceExamples } from "./examples/legacy-notification-service";
import { fileFormatConversionExamples } from "./examples/file-format-conversion";

export const adapterPattern: PatternRecord = {
  ...meta,
  scenarios,
  scenarioExamples: {
    "payment-gateway-integration": paymentGatewayIntegrationExamples,
    "legacy-notification-service": legacyNotificationServiceExamples,
    "file-format-conversion": fileFormatConversionExamples,
  },
  realWorldExamples: [
  {
    "title": "Third-party payment gateways",
    "description": "Wrap each payment provider SDK behind a common payment interface so checkout code does not depend on vendor-specific APIs."
  },
  {
    "title": "Legacy service modernization",
    "description": "Keep older services in place while exposing newer application-facing contracts through adapters."
  },
  {
    "title": "File and data format translation",
    "description": "Convert XML, CSV, or vendor-specific payloads into the internal models expected by the rest of the application."
  }
],
  tradeoffs: [
  "Adds an extra layer that can hide important service-specific behavior",
  "Too many adapters can make integration code harder to navigate"
],
  platforms: [
  "Web",
  "Backend",
  "Integrations"
],
  integrationNotes: "Adapters are especially useful when integrating legacy services, vendor SDKs, or mixed data formats behind a stable internal contract.",
  problem: "A client needs to use an existing class or external service, but its interface does not match what the application expects.",
};
