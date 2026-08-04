import type { PatternScenario } from "@atlas-patterns/schemas";

export const scenarios: readonly PatternScenario[] = [
  {
    slug: "checkout-workflow",
    title: "Checkout workflow",
    summary:
      "A checkout facade exposes one placeOrder call while coordinating authentication, payment, inventory, and notification subsystems.",
    context:
      "An e-commerce app needs one stable entry point for the entire purchase flow.",
    problem:
      "Checkout code becomes noisy when every screen coordinates the same subsystem calls directly.",
    solution:
      "Use Facade to expose one checkout method that delegates to the underlying services.",
    stackArea: "backend",
  },
  {
    slug: "video-conversion-pipeline",
    title: "Video conversion pipeline",
    summary:
      "A video conversion facade wraps several media-processing steps behind a single convert method.",
    context:
      "A media service needs to hide transcoding, packaging, and storage concerns from callers.",
    problem:
      "Directly calling each media step makes the client code hard to read and maintain.",
    solution:
      "Use Facade to hide the internal pipeline behind one conversion API.",
    stackArea: "backend",
  },
  {
    slug: "home-theater-startup",
    title: "Home theater startup",
    summary:
      "A home theater facade simplifies a multi-device startup sequence into one watchMovie operation.",
    context:
      "A user-facing app coordinates lights, projector, and amplifier through a simple control surface.",
    problem:
      "A long startup sequence spreads device-specific details across the UI.",
    solution:
      "Use Facade to expose a single movie-starting method for the whole system.",
    stackArea: "frontend",
  },
  {
    slug: "account-onboarding",
    title: "Account onboarding",
    summary:
      "An onboarding facade coordinates account creation, profile setup, email verification, and welcome messaging.",
    context:
      "A product needs one entry point for a new user signup flow.",
    problem:
      "Signup steps scattered across controllers and services are difficult to reuse.",
    solution:
      "Use Facade to present one onboarding call that handles the full sequence.",
    stackArea: "backend",
  },
  {
    slug: "report-generation",
    title: "Report generation",
    summary:
      "A report facade hides data collection, formatting, rendering, and delivery behind one generateReport method.",
    context:
      "A business app needs to produce a report from several internal data sources.",
    problem:
      "Report logic becomes tangled when each caller assembles the pipeline differently.",
    solution:
      "Use Facade to centralize report creation behind a smaller API.",
    stackArea: "backend",
  },
  {
    slug: "device-setup",
    title: "Device setup",
    summary:
      "A device setup facade runs pairing, configuration, and health checks through one setupDevice operation.",
    context:
      "An installer needs to prepare a device through multiple subsystems.",
    problem:
      "Setup code repeated across screens is hard to keep consistent.",
    solution:
      "Use Facade to expose one setup method that coordinates the lower-level services.",
    stackArea: "backend",
  },
];