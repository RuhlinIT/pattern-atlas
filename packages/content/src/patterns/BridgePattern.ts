import type { PatternRecord } from "@atlas-patterns/schemas";
import { remoteControlBridgeExamples } from "./bridge/remoteControlBridgeExamples";
import { notificationBridgeExamples } from "./bridge/notificationBridgeExamples";
import { shapeRendererBridgeExamples } from "./bridge/shapeRendererBridgeExamples";

export const BridgePattern: PatternRecord = {
  slug: "bridge",
  name: "Bridge",
  category: "Structural",
  problem:
    "A class hierarchy grows along multiple dimensions, making inheritance produce too many combinations and rigid dependencies.",
  intent:
    "Decouple an abstraction from its implementation so the two can vary independently.",
  tradeoffs: [
    "Introduces additional layers and indirection",
    "Can be overkill if the abstraction and implementation do not need to evolve separately",
  ],
  languages: [
    "TypeScript",
    "Java",
    "Python",
    "Angular",
    "React",
    "React_Native",
    "C#",
    ".NET",
  ],
  platforms: ["Web", "Backend", "Mobile", "UI kits", "Cross-platform systems"],
  integrationNotes:
    "Bridge is useful when a stable abstraction must work with multiple implementations, such as devices, rendering engines, or communication channels.",
  scenarios: [
    {
      slug: "remote-control-bridge",
      title: "Remote control bridge",
      summary:
        "A remote control abstraction can operate different devices like TVs or radios without changing its own interface.",
      languageExamples: remoteControlBridgeExamples,
    },
    {
      slug: "notification-bridge",
      title: "Notification bridge",
      summary:
        "A notification abstraction sends messages through different channels like email or SMS while keeping the same API.",
      languageExamples: notificationBridgeExamples,
    },
    {
      slug: "shape-renderer-bridge",
      title: "Shape renderer bridge",
      summary:
        "A shape abstraction uses different rendering engines so the shape logic stays independent from how it is drawn.",
      languageExamples: shapeRendererBridgeExamples,
    },
  ],
  realWorldExamples: [
    {
      title: "Device controls",
      description:
        "Remote controls often work with multiple devices, where the control interface stays the same but the device implementation changes.",
    },
    {
      title: "Messaging systems",
      description:
        "Notification services frequently separate message formatting from delivery providers like email, SMS, or push notifications.",
    },
    {
      title: "Rendering engines",
      description:
        "Graphics systems often separate shape definitions from the platform-specific renderer that draws them.",
    },
  ],
};
