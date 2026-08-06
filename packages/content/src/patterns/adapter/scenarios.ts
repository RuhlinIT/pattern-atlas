import type { PatternScenario } from "@atlas-patterns/schemas";

export const scenarios: readonly PatternScenario[] = [
  {
    slug: "legacy-payment-gateway",
    title: "Legacy payment gateway",
    summary:
      "An adapter translates a legacy payment API into the checkout service interface the app expects.",
    context:
      "A product team needs to keep using an old provider while the rest of the platform speaks a modern payment contract.",
    problem:
      "The legacy API uses different method names and data shapes, which leaks ugly translation code into checkout logic.",
    solution:
      "Use Adapter to wrap the legacy gateway and expose the expected payment service interface.",
    stackArea: "integration",
  },
  {
    slug: "third-party-task-api",
    title: "Third-party task API",
    summary:
      "An adapter normalizes a third-party task payload into the app's internal task model.",
    context:
      "A productivity app consumes multiple external task providers and needs one internal shape.",
    problem:
      "Each external API returns tasks differently, making the UI and domain logic harder to keep consistent.",
    solution:
      "Use Adapter to convert vendor payloads into a single internal task contract.",
    stackArea: "integration",
  },
  {
    slug: "event-payload-mapper",
    title: "Event payload mapper",
    summary:
      "An adapter converts incoming event payloads into the normalized analytics event shape used by the system.",
    context:
      "An event pipeline receives messages from several producer systems with different field names and formats.",
    problem:
      "Downstream processors should not need per-source conditionals for every incoming payload type.",
    solution:
      "Use Adapter to translate each source payload into one canonical event format.",
    stackArea: "backend",
  },
];