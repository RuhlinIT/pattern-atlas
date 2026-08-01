import type { PatternRecord } from "@atlas-patterns/schemas";

import { meta } from "./meta";
import { scenarios } from "./scenarios";

import { checkoutWorkflowExamples } from "./examples/checkout-workflow";
import { videoConversionPipelineExamples } from "./examples/video-conversion-pipeline";
import { homeTheaterStartupExamples } from "./examples/home-theater-startup";

export const facadePattern: PatternRecord = {
  ...meta,
  scenarios,
  scenarioExamples: {
    "checkout-workflow": checkoutWorkflowExamples,
    "video-conversion-pipeline": videoConversionPipelineExamples,
    "home-theater-startup": homeTheaterStartupExamples,
  },
  realWorldExamples: [
  {
    "title": "Checkout orchestration",
    "description": "Expose a single order placement API while coordinating identity, inventory, payment, and customer messaging services."
  },
  {
    "title": "Media processing services",
    "description": "Wrap decoding, transcoding, packaging, and storage steps behind one simpler conversion interface."
  },
  {
    "title": "Application startup flows",
    "description": "Hide multi-step subsystem initialization behind a single boot or setup method."
  }
],
  tradeoffs: [
  "Can become a dumping ground if boundaries are unclear",
  "May obscure useful lower-level capabilities from advanced consumers"
],
  platforms: [
  "Applications",
  "APIs",
  "Service layers"
],
  integrationNotes: "Facades are useful when exposing a stable boundary over a multi-service or mixed-language backend.",
  problem: "A client needs to perform a recurring workflow that spans several subsystem classes, but direct coordination makes the code noisy and tightly coupled.",
};
