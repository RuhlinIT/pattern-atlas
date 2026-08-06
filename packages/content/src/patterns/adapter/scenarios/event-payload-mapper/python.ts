import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python = {
  language: "python",
  code: `from dataclasses import dataclass
from datetime import datetime
from typing import Any


@dataclass(frozen=True)
class DomainEvent:
    id: str
    type: str
    occurred_at: datetime
    payload: dict[str, Any]


class EventAdapter:
    @staticmethod
    def from_external(
        event: dict[str, Any],
    ) -> DomainEvent:
        return DomainEvent(
            id=str(event["event_id"]),
            type=str(event["event_type"]),
            occurred_at=datetime.fromisoformat(
                event["created_at"].replace(
                    "Z",
                    "+00:00",
                )
            ),
            payload=dict(event["data"]),
        )


class EventProcessor:
    @staticmethod
    def process(event: DomainEvent) -> None:
        print(
            f"Processing {event.type} event {event.id}"
        )


external_event = {
    "event_id": "evt_123",
    "event_type": "task.completed",
    "created_at": "2026-08-05T20:00:00Z",
    "data": {
        "task_id": "task_456",
        "completed_by": "user_789",
    },
}

domain_event = EventAdapter.from_external(
    external_event
)

EventProcessor.process(domain_event)
`,
} satisfies PatternLanguageExample;