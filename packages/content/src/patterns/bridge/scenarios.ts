import type { PatternScenario } from "@atlas-patterns/schemas";

export const scenarios: readonly PatternScenario[] = [
  {
    slug: "data-source-abstraction",
    title: "Data source abstraction",
    summary:
      "A reporting layer reads from SQL, API, or file-based sources without changing the reporting logic.",
    context:
      "A product team needs a stable query and reporting API while underlying data sources continue to change.",
    problem:
      "Hardcoding source-specific details into the abstraction makes reporting brittle and harder to evolve.",
    solution:
      "Use Bridge to separate the reporting abstraction from the data-source implementation.",
    stackArea: "backend",
  },
  {
    slug: "notification-delivery",
    title: "Notification delivery",
    summary:
      "A notification system sends the same message via email, SMS, or push without changing the sending flow.",
    context:
      "The business wants to add and swap delivery providers independently from notification content.",
    problem:
      "If delivery code is embedded in the notification flow, provider changes become expensive.",
    solution:
      "Use Bridge to keep notification content separate from channel delivery implementations.",
    stackArea: "integration",
  },
  {
    slug: "payment-routing",
    title: "Payment routing",
    summary:
      "A checkout flow routes payments through Stripe, Adyen, or PayPal while keeping the checkout API stable.",
    context:
      "The commerce platform needs to support multiple payment providers with one checkout abstraction.",
    problem:
      "Provider-specific code spread throughout checkout logic makes integrations hard to maintain.",
    solution:
      "Use Bridge to separate checkout behavior from provider-specific payment handling.",
    stackArea: "integration",
  },
  {
    slug: "printer-driver-layer",
    title: "Printer driver layer",
    summary:
      "A document app prints to local, network, or cloud printers through interchangeable driver implementations.",
    context:
      "The application must support multiple printing targets without changing document rendering behavior.",
    problem:
      "Direct coupling to a specific printer backend makes the document app difficult to extend.",
    solution:
      "Use Bridge to decouple document rendering from printer driver implementations.",
    stackArea: "backend",
  },
  {
    slug: "remote-control-bridge",
    title: "Remote control bridge",
    summary:
      "A remote control triggers TVs, speakers, and streaming devices through interchangeable device implementations.",
    context:
      "A home automation app needs one control surface that can operate several device brands and categories.",
    problem:
      "Tight coupling between controls and specific devices makes the remote hard to extend.",
    solution:
      "Use Bridge to separate the remote control abstraction from the device implementation.",
    stackArea: "frontend",
  },
  {
    slug: "shape-renderer-bridge",
    title: "Shape renderer bridge",
    summary:
      "Shapes like circles and rectangles can be drawn on screens, canvases, or SVG backends without changing the shape logic.",
    context:
      "A graphics system needs one shape model that can render across multiple output APIs.",
    problem:
      "If shape behavior depends on a specific rendering API, the graphics code becomes hard to reuse.",
    solution:
      "Use Bridge to separate shape abstraction from rendering implementation.",
    stackArea: "frontend",
  },
];