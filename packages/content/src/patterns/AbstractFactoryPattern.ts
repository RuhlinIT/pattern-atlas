import type { PatternRecord } from "@atlas-patterns/schemas";
import { modernOfficeExamples } from "./abstract-factory/modernOfficeExamples";
import { uiComponentSuiteExamples } from "./abstract-factory/uiComponentSuiteExamples";
import { vehicleFactoryExamples } from "./abstract-factory/vehicleFactoryExamples";

export const AbstractFactoryPattern: PatternRecord = {
  slug: "abstract-factory",
  name: "Abstract Factory",
  category: "Creational",
  problem:
    "A system needs families of related objects created together, but direct construction ties clients to specific concrete classes and makes switching product families difficult.",
  intent:
    "Provide an interface for creating related objects without specifying their concrete classes, so entire product families can be swapped consistently.",
  tradeoffs: [
    "Can introduce many interfaces and classes for each product family",
    "May be more complex than necessary if the system only creates a few unrelated objects",
  ],
  languages: ["TypeScript", "Java", "Python", "Angular", "React", "React_Native", "C#", ".NET"],
  platforms: ["Web", "Backend", "Mobile", "UI kits", "Cross-platform systems"],
  integrationNotes:
    "Abstract Factory is useful when the application must stay consistent across themes, platforms, or vendor-specific product families, such as UI kits or device ecosystems.",
  scenarios: [
    {
      slug: "modern-office-setup",
      title: "Modern office setup",
      summary:
        "A workplace factory creates matching desks, chairs, and cabinets for either a modern or classic office theme.",
      languageExamples: modernOfficeExamples,
    },
    {
      slug: "ui-component-suite",
      title: "UI component suite",
      summary:
        "A design system factory provides related buttons, inputs, and cards for light or dark themes.",
      languageExamples: uiComponentSuiteExamples,
    },
    {
      slug: "vehicle-family-factory",
      title: "Vehicle family factory",
      summary:
        "A vehicle factory creates matching transport parts such as car, truck, and bike variants for different regions or fuel types.",
      languageExamples: vehicleFactoryExamples,
    },
  ],
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