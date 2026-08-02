import type { PatternScenario } from "@atlas-patterns/schemas";

export const scenarios: readonly PatternScenario[] = [
  {
    slug: "modern-office-setup",
    title: "Modern office setup",
    summary:
      "A workplace factory creates matching desks, chairs, and cabinets for a modern or classic office theme.",
    context:
      "A product team needs to generate a coordinated office setup for different customer themes without mixing styles.",
    problem:
      "Directly creating each office piece makes it easy for the furniture, colors, and materials to drift out of sync.",
    solution:
      "Use an abstract factory to produce a consistent family of office items that all match the selected theme.",
    stackArea: "backend",
  },
  {
    slug: "ui-component-suite",
    title: "UI component suite",
    summary:
      "A design system factory provides related buttons, inputs, cards, and alerts for light and dark themes without visual drift.",
    context:
      "A frontend team needs a consistent component family that can change theme without breaking layout or style rules.",
    problem:
      "Creating UI pieces independently can lead to mismatched colors, spacing, and behavior across the app.",
    solution:
      "Use an abstract factory to generate a coordinated family of UI components for each theme.",
    stackArea: "frontend",
  },
  {
    slug: "backend-product-line",
    title: "Backend product line",
    summary:
      "A backend service provisions a consistent family of resources, rules, and workflows for each tenant or region.",
    context:
      "A platform serves multiple customers or regions that each need compatible backend objects.",
    problem:
      "Direct construction ties the service to specific implementations and makes tenant-specific variation difficult.",
    solution:
      "Use an abstract factory to create backend families that vary by tenant, region, or deployment target.",
    stackArea: "backend",
  },
  {
    slug: "integration-vendor-bridge",
    title: "Integration vendor bridge",
    summary:
      "An integration layer builds matching adapters, transformers, and clients for different vendors or external APIs.",
    context:
      "The system must integrate with multiple third-party providers while keeping a stable internal interface.",
    problem:
      "Hardcoding vendor logic creates fragile integrations and makes switching providers painful.",
    solution:
      "Use an abstract factory to create a vendor-specific integration family behind a stable contract.",
    stackArea: "integration",
  },
  {
    slug: "mobile-device-family",
    title: "Mobile device family",
    summary:
      "A mobile app creates coordinated UI and service objects for iOS and Android variants while keeping app behavior aligned.",
    context:
      "A cross-platform app must adapt to device-specific capabilities and conventions.",
    problem:
      "Creating device-specific objects separately can lead to inconsistent mobile experiences.",
    solution:
      "Use an abstract factory to create a device family of related mobile objects together.",
    stackArea: "frontend",
  },
  {
    slug: "document-generation-family",
    title: "Document generation family",
    summary:
      "A document system creates consistent invoices, receipts, and reports for each brand or locale.",
    context:
      "The business needs printable and exportable documents to vary by region or brand while staying coordinated.",
    problem:
      "Independent document creation can cause mismatched layouts, formats, and data rules.",
    solution:
      "Use an abstract factory to generate a family of documents that share the same brand or locale rules.",
    stackArea: "backend",
  },
];