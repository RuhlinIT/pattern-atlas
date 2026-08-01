import type { PatternScenario } from "@atlas-patterns/schemas";

export const scenarios: readonly PatternScenario[] = [
  {
    "slug": "chat-room-mediator",
    "title": "Chat room mediator",
    "summary": "Users send messages through a chat room mediator instead of talking to each other directly."
  },
  {
    "slug": "air-traffic-mediator",
    "title": "Air traffic mediator",
    "summary": "Aircraft coordinate landing and takeoff decisions through an air traffic control mediator."
  },
  {
    "slug": "ui-mediator",
    "title": "UI mediator",
    "summary": "Form controls communicate through a mediator that manages enabling, validation, and updates."
  }
];
