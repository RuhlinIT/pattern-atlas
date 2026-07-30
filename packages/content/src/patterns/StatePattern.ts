import type { PatternRecord } from "@atlas-patterns/schemas";
import { orderStateExamples } from "./state/orderStateExamples";
import { trafficLightStateExamples } from "./state/trafficLightStateExamples";
import { mediaPlayerStateExamples } from "./state/mediaPlayerStateExamples";

export const StatePattern: PatternRecord = {
  slug: "state",
  name: "State",
  category: "Behavioral",
  problem:
    "An object behaves differently depending on its internal state, and conditional logic is becoming hard to manage.",
  intent:
    "Allow an object to alter its behavior when its internal state changes by delegating state-specific behavior to separate state objects.",
  tradeoffs: [
    "Can introduce many small classes if the state graph is large",
    "State transitions may become harder to trace if spread across multiple classes",
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
    "State is useful for workflows, media players, order lifecycles, and any domain where behavior changes as the object moves through a lifecycle.",
  scenarios: [
    {
      slug: "order-state",
      title: "Order state",
      summary:
        "An order changes behavior as it moves from pending to processing to shipped.",
      languageExamples: orderStateExamples,
    },
    {
      slug: "traffic-light-state",
      title: "Traffic light state",
      summary:
        "A traffic light changes its behavior based on whether it is red, yellow, or green.",
      languageExamples: trafficLightStateExamples,
    },
    {
      slug: "media-player-state",
      title: "Media player state",
      summary:
        "A media player behaves differently when it is playing, paused, or stopped.",
      languageExamples: mediaPlayerStateExamples,
    },
  ],
  realWorldExamples: [
    {
      title: "Order lifecycles",
      description:
        "Orders often move through pending, processing, shipped, delivered, and canceled states.",
    },
    {
      title: "Traffic systems",
      description:
        "Traffic lights and crossing signals change behavior based on their current phase.",
    },
    {
      title: "Media controls",
      description:
        "Music and video players expose different actions depending on playback state.",
    },
  ],
};
