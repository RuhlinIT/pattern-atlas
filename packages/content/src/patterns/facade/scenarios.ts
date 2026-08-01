import type { PatternScenario } from "@atlas-patterns/schemas";

export const scenarios: readonly PatternScenario[] = [
  {
    "slug": "checkout-workflow",
    "title": "Checkout workflow",
    "summary": "A checkout facade exposes one placeOrder call while coordinating authentication, payment, inventory, and notification subsystems."
  },
  {
    "slug": "video-conversion-pipeline",
    "title": "Video conversion pipeline",
    "summary": "A video conversion facade wraps several media-processing steps behind a single convert method."
  },
  {
    "slug": "home-theater-startup",
    "title": "Home theater startup",
    "summary": "A home theater facade simplifies a multi-device startup sequence into one watchMovie operation."
  }
];
