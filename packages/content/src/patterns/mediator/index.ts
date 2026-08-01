import type { PatternRecord } from "@atlas-patterns/schemas";

import { meta } from "./meta";
import { scenarios } from "./scenarios";

import { chatRoomMediatorExamples } from "./examples/chat-room-mediator";
import { airTrafficMediatorExamples } from "./examples/air-traffic-mediator";
import { uiMediatorExamples } from "./examples/ui-mediator";

export const mediatorPattern: PatternRecord = {
  ...meta,
  scenarios,
  scenarioExamples: {
    "chat-room-mediator": chatRoomMediatorExamples,
    "air-traffic-mediator": airTrafficMediatorExamples,
    "ui-mediator": uiMediatorExamples,
  },
  realWorldExamples: [
  {
    "title": "Chat servers",
    "description": "Group chats and messaging services route messages through a central server rather than peer-to-peer links."
  },
  {
    "title": "Air traffic control",
    "description": "Aircraft coordinate with a control tower that manages timing, safety, and sequencing."
  },
  {
    "title": "Form coordination",
    "description": "Complex forms often use a central controller to coordinate fields, validation, and submission state."
  }
],
  tradeoffs: [
  "The mediator can become large and complex if it takes on too much coordination logic.",
  "Centralizing behavior can make the mediator a single point of failure if it is poorly designed."
],
  platforms: [
  "Web",
  "Backend",
  "Mobile",
  "UI kits",
  "Cross-platform systems"
],
  integrationNotes: "Mediator is useful for chat systems, form coordination, workflow orchestration, and any domain where many components must collaborate without knowing about each other.",
  problem: "Multiple objects need to coordinate behavior, but direct references between them create tight coupling and complex dependencies.",
};
