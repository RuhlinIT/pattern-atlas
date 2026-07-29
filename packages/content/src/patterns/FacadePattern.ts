import type { PatternRecord } from "@atlas-patterns/schemas";
import { checkoutWorkflowExamples } from './facade/checkoutWorkflowExamples';
import { homeTheaterStartupExamples } from './facade/homeTheaterStartupExamples';
import { videoConversionPipelineExamples } from './facade/videoConversionPipelineExamples';

export const FacadePattern: PatternRecord = {
  slug: "facade",
  name: "Facade",
  category: "Structural",
  problem:
    "A client needs to perform a recurring workflow that spans several subsystem classes, but direct coordination makes the code noisy and tightly coupled.",
  intent:
    "Provide a simplified high-level interface that coordinates a complex subsystem behind a smaller and easier-to-use API.",
  tradeoffs: [
    "Can become a dumping ground if boundaries are unclear",
    "May obscure useful lower-level capabilities from advanced consumers",
  ],
  languages: ["TypeScript", "Java", "Python", "Angular"],
  platforms: ["Applications", "APIs", "Service layers"],
  integrationNotes:
    "Facades are useful when exposing a stable boundary over a multi-service or mixed-language backend.",
  scenarios: [
    {
      slug: "checkout-workflow",
      title: "Checkout workflow",
      summary:
        "A checkout facade exposes one placeOrder call while coordinating authentication, payment, inventory, and notification subsystems.",
      languageExamples: checkoutWorkflowExamples
    },
    {
        slug: "video-conversion-pipeline",
        title: "Video conversion pipeline",
        summary:
            "A video conversion facade wraps several media-processing steps behind a single convert method.",
        languageExamples: videoConversionPipelineExamples
    },
    {
        slug: "home-theater-startup",
        title: "Home theater startup",
        summary:
            "A home theater facade simplifies a multi-device startup sequence into one watchMovie operation.",
    
        languageExamples: homeTheaterStartupExamples
    }
  ],
  realWorldExamples: [
    {
      title: "Checkout orchestration",
      description:
        "Expose a single order placement API while coordinating identity, inventory, payment, and customer messaging services.",
    },
    {
      title: "Media processing services",
      description:
        "Wrap decoding, transcoding, packaging, and storage steps behind one simpler conversion interface.",
    },
    {
      title: "Application startup flows",
      description:
        "Hide multi-step subsystem initialization behind a single boot or setup method.",
    },
  ],
};
