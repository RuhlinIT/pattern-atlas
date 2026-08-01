import type { PatternRecord } from "@atlas-patterns/schemas";

import { meta } from "./meta";
import { scenarios } from "./scenarios";

import { paymentGatewayExamples } from "./examples/payment-gateway-integration";
import { legacyNotificationExamples } from "./examples/legacy-notification-service";
import { fileFormatExamples } from "./examples/file-format-conversion";

export const adapterPattern: PatternRecord = {
  ...meta,
  scenarios,
  scenarioExamples: {
    "payment-gateway-integration": paymentGatewayExamples,
    "legacy-notification-service": legacyNotificationExamples,
    "file-format-conversion": fileFormatExamples,
  },
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