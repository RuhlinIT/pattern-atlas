import type { PatternScenario } from "@atlas-patterns/schemas";

export const scenarios: readonly PatternScenario[] = [
  {
    slug: "ui-theme-kit",
    title: "UI theme kit",
    summary:
      "An abstract factory creates matching UI controls such as buttons, inputs, and dialogs for a light or dark theme.",
    context:
      "A design system needs to produce consistent component families across themes.",
    problem:
      "Creating themed components one by one leads to inconsistent styling and scattered conditionals.",
    solution:
      "Use Abstract Factory to create a family of related UI controls through a single theme factory.",
    stackArea: "frontend",
  },
  {
    slug: "cloud-provider-kit",
    title: "Cloud provider kit",
    summary:
      "An abstract factory creates a matching set of storage, queue, and compute clients for a selected cloud provider.",
    context:
      "An integration layer must switch cleanly between vendor ecosystems.",
    problem:
      "Vendor-specific object creation leaks provider details into business logic.",
    solution:
      "Use Abstract Factory to encapsulate provider-specific client creation behind one interface.",
    stackArea: "integration",
  },
  {
    slug: "game-environment-kit",
    title: "Game environment kit",
    summary:
      "A game factory creates related assets such as terrain, enemies, and effects for a particular environment.",
    context:
      "A game needs to swap entire environment families without rewriting gameplay code.",
    problem:
      "Direct construction of individual assets makes environment switching fragile.",
    solution:
      "Use Abstract Factory to generate a coherent family of environment objects.",
    stackArea: "backend",
  },
  {
    slug: "document-suite",
    title: "Document suite",
    summary:
      "A document factory creates matching export handlers for PDF, HTML, and spreadsheet outputs.",
    context:
      "A reporting app supports multiple output formats with shared styling rules.",
    problem:
      "Format-specific creation logic spreads across reporting code.",
    solution:
      "Use Abstract Factory to centralize creation of related document renderers.",
    stackArea: "backend",
  },
  {
    slug: "device-os-kit",
    title: "Device OS kit",
    summary:
      "An abstract factory creates a set of UI and system services tailored to a device family or platform.",
    context:
      "An app must adapt its object family for phone, tablet, or desktop deployments.",
    problem:
      "Platform branching inside constructors makes the code difficult to extend.",
    solution:
      "Use Abstract Factory to produce the correct platform-specific object family.",
    stackArea: "frontend",
  },
  {
    slug: "analytics-stack-kit",
    title: "Analytics stack kit",
    summary:
      "An abstract factory creates a family of data ingestion, transformation, and persistence components for a selected pipeline.",
    context:
      "A data platform supports multiple pipeline variants.",
    problem:
      "Wiring each pipeline manually invites inconsistency and duplication.",
    solution:
      "Use Abstract Factory to assemble the related pipeline objects from one source.",
    stackArea: "integration",
  },
];