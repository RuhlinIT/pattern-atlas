import type { PatternRecord } from "@atlas-patterns/schemas";

import { meta } from "./meta";
import { scenarios } from "./scenarios";

import { remoteControlBridgeExamples } from "./examples/remote-control-bridge";
import { notificationBridgeExamples } from "./examples/notification-bridge";
import { shapeRendererBridgeExamples } from "./examples/shape-renderer-bridge";

export const bridgePattern: PatternRecord = {
  ...meta,
  scenarios,
  scenarioExamples: {
    "remote-control-bridge": remoteControlBridgeExamples,
    "notification-bridge": notificationBridgeExamples,
    "shape-renderer-bridge": shapeRendererBridgeExamples,
  },
  realWorldExamples: [
  {
    "title": "Device controls",
    "description": "Remote controls often work with multiple devices, where the control interface stays the same but the device implementation changes."
  },
  {
    "title": "Messaging systems",
    "description": "Notification services frequently separate message formatting from delivery providers like email, SMS, or push notifications."
  },
  {
    "title": "Rendering engines",
    "description": "Graphics systems often separate shape definitions from the platform-specific renderer that draws them."
  }
],
  tradeoffs: [
  "Introduces additional layers and indirection",
  "Can be overkill if the abstraction and implementation do not need to evolve separately"
],
  platforms: [
  "Web",
  "Backend",
  "Mobile",
  "UI kits",
  "Cross-platform systems"
],
  integrationNotes: "Bridge is useful when a stable abstraction must work with multiple implementations, such as devices, rendering engines, or communication channels.",
  problem: "A class hierarchy grows along multiple dimensions, making inheritance produce too many combinations and rigid dependencies.",
};
