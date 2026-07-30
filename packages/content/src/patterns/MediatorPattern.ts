import type { PatternRecord } from "@atlas-patterns/schemas";
import { chatRoomMediatorExamples } from "./mediator/chatRoomMediatorExamples";
import { airTrafficMediatorExamples } from "./mediator/airTrafficMediatorExamples";
import { uiMediatorExamples } from "./mediator/uiMediatorExamples";

export const MediatorPattern: PatternRecord = {
  slug: "mediator",
  name: "Mediator",
  category: "Behavioral",
  problem:
    "Multiple objects need to coordinate behavior, but direct references between them create tight coupling and complex dependencies.",
  intent:
    "Define an object that encapsulates communication between a set of objects, keeping them from referring to each other directly.",
  tradeoffs: [
    "The mediator can become large and complex if it takes on too much coordination logic.",
    "Centralizing behavior can make the mediator a single point of failure if it is poorly designed.",
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
    "Mediator is useful for chat systems, form coordination, workflow orchestration, and any domain where many components must collaborate without knowing about each other.",
  scenarios: [
    {
      slug: "chat-room-mediator",
      title: "Chat room mediator",
      summary:
        "Users send messages through a chat room mediator instead of talking to each other directly.",
      languageExamples: chatRoomMediatorExamples,
    },
    {
      slug: "air-traffic-mediator",
      title: "Air traffic mediator",
      summary:
        "Aircraft coordinate landing and takeoff decisions through an air traffic control mediator.",
      languageExamples: airTrafficMediatorExamples,
    },
    {
      slug: "ui-mediator",
      title: "UI mediator",
      summary:
        "Form controls communicate through a mediator that manages enabling, validation, and updates.",
      languageExamples: uiMediatorExamples,
    },
  ],
  realWorldExamples: [
    {
      title: "Chat servers",
      description:
        "Group chats and messaging services route messages through a central server rather than peer-to-peer links.",
    },
    {
      title: "Air traffic control",
      description:
        "Aircraft coordinate with a control tower that manages timing, safety, and sequencing.",
    },
    {
      title: "Form coordination",
      description:
        "Complex forms often use a central controller to coordinate fields, validation, and submission state.",
    },
  ],
};
