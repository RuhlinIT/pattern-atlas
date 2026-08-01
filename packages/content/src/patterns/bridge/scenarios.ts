import type { PatternScenario } from "@atlas-patterns/schemas";

export const scenarios: readonly PatternScenario[] = [
  {
    "slug": "remote-control-bridge",
    "title": "Remote control bridge",
    "summary": "A remote control abstraction can operate different devices like TVs or radios without changing its own interface."
  },
  {
    "slug": "notification-bridge",
    "title": "Notification bridge",
    "summary": "A notification abstraction sends messages through different channels like email or SMS while keeping the same API."
  },
  {
    "slug": "shape-renderer-bridge",
    "title": "Shape renderer bridge",
    "summary": "A shape abstraction uses different rendering engines so the shape logic stays independent from how it is drawn."
  }
];
