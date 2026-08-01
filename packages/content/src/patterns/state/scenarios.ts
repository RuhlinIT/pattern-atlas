import type { PatternScenario } from "@atlas-patterns/schemas";

export const scenarios: readonly PatternScenario[] = [
  {
    "slug": "order-state",
    "title": "Order state",
    "summary": "An order changes behavior as it moves from pending to processing to shipped."
  },
  {
    "slug": "traffic-light-state",
    "title": "Traffic light state",
    "summary": "A traffic light changes its behavior based on whether it is red, yellow, or green."
  },
  {
    "slug": "media-player-state",
    "title": "Media player state",
    "summary": "A media player behaves differently when it is playing, paused, or stopped."
  }
];
