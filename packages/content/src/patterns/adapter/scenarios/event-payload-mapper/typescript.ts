import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript = {
  language: "typescript",
  code: `type DomainEvent = {
  id: string;
  type: string;
  occurredAt: Date;
  payload: Record<string, unknown>;
};

type ExternalEvent = {
  event_id: string;
  event_type: string;
  created_at: string;
  data: Record<string, unknown>;
};

class EventAdapter {
  static fromExternal(
    event: ExternalEvent,
  ): DomainEvent {
    return {
      id: event.event_id,
      type: event.event_type,
      occurredAt: new Date(event.created_at),
      payload: event.data,
    };
  }
}

class EventProcessor {
  process(event: DomainEvent): void {
    console.log(
      \`Processing \${event.type} event \${event.id}\`,
    );
  }
}

const externalEvent: ExternalEvent = {
  event_id: "evt_123",
  event_type: "task.completed",
  created_at: "2026-08-05T20:00:00.000Z",
  data: {
    task_id: "task_456",
    completed_by: "user_789",
  },
};

const domainEvent =
  EventAdapter.fromExternal(externalEvent);

new EventProcessor().process(domainEvent);
`,
} satisfies PatternLanguageExample;