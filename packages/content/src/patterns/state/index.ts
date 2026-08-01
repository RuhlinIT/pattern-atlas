import type { PatternRecord } from "@atlas-patterns/schemas";

import { meta } from "./meta";
import { scenarios } from "./scenarios";

import { orderStateExamples } from "./examples/order-state";
import { trafficLightStateExamples } from "./examples/traffic-light-state";
import { mediaPlayerStateExamples } from "./examples/media-player-state";

export const statePattern: PatternRecord = {
  ...meta,
  scenarios,
  scenarioExamples: {
    "order-state": orderStateExamples,
    "traffic-light-state": trafficLightStateExamples,
    "media-player-state": mediaPlayerStateExamples,
  },
  realWorldExamples: [
  {
    "title": "Order lifecycles",
    "description": "Orders often move through pending, processing, shipped, delivered, and canceled states."
  },
  {
    "title": "Traffic systems",
    "description": "Traffic lights and crossing signals change behavior based on their current phase."
  },
  {
    "title": "Media controls",
    "description": "Music and video players expose different actions depending on playback state."
  }
],
  tradeoffs: [
  "Can introduce many small classes if the state graph is large",
  "State transitions may become harder to trace if spread across multiple classes"
],
  platforms: [
  "Web",
  "Backend",
  "Mobile",
  "UI kits",
  "Cross-platform systems"
],
  integrationNotes: "State is useful for workflows, media players, order lifecycles, and any domain where behavior changes as the object moves through a lifecycle.",
  problem: "An object behaves differently depending on its internal state, and conditional logic is becoming hard to manage.",
};
