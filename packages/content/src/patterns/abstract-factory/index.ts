import type { PatternRecord } from "@atlas-patterns/schemas";
import { modernOfficeSetupExamples } from "./examples/modern-office-setup";
import { uiComponentSuiteExamples } from "./examples/ui-component-suite";
import { vehicleFamilyFactoryExamples } from "./examples/vehicle-family-factory";
import { meta } from "./meta";
import { scenarios } from "./scenarios";

export const abstractFactoryPattern: PatternRecord = {
  ...meta,
  problem:
    "A system needs families of related objects created together, but direct construction ties clients to specific concrete classes and makes switching product families difficult.",
  tradeoffs: [
    "Can introduce many interfaces and classes for each product family",
    "May be more complex than necessary if the system only creates a few unrelated objects",
  ],
  platforms: ["web", "backend", "mobile", "ui kits", "cross-platform systems"],
  integrationNotes:
    "Abstract Factory is useful when the application must stay consistent across themes, platforms, or vendor-specific product families, such as UI kits or device ecosystems.",
  scenarios,
  scenarioExamples: {
    "modern-office-setup": modernOfficeSetupExamples,
    "ui-component-suite": uiComponentSuiteExamples,
    "vehicle-family-factory": vehicleFamilyFactoryExamples,
  },
  realWorldExamples: [
    {
      title: "Themeable design systems",
      description:
        "Applications often need a consistent family of UI controls that change together when the theme changes.",
    },
    {
      title: "Cross-platform product lines",
      description:
        "A platform might create compatible services, controls, and adapters for each vendor or deployment target.",
    },
    {
      title: "Brand-specific product kits",
      description:
        "Businesses sometimes need matching sets of documents, assets, or interface components that vary by brand family.",
    },
  ],
};