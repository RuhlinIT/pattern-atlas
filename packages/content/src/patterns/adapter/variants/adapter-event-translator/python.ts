import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python = {
  language: "python",
  code: `from dataclasses import dataclass
from datetime import datetime
from typing import Any


@dataclass(frozen=True)
class DomainEvent:
    event_id: str
    event_type: str
    occurred_at: datetime
    payload: dict[str, Any]


class PaymentEventAdapter:
    @staticmethod
    def from_external(
        event: dict[str, Any],
    ) -> DomainEvent:
        return DomainEvent(
            event_id=str(event["id"]),
            event_type=str(event["type"]),
            occurred_at=datetime.fromisoformat(
                event["timestamp"].replace(
                    "Z",
                    "+00:00",
                )
            ),
            payload={
                "amount": event["amount"],
                "currency": event["currency"],
                "customer_id": event["customerId"],
            },
        )


class AnalyticsEventAdapter:
    @staticmethod
    def from_external(
        event: dict[str, Any],
    ) -> DomainEvent:
        return DomainEvent(
            event_id=str(event["event_id"]),
            event_type=str(event["event_name"]),
            occurred_at=datetime.fromisoformat(
                event["occurred_at"].replace(
                    "Z",
                    "+00:00",
                )
            ),
            payload={
                "amount": event["properties"].get(
                    "amount"
                ),
                "currency": event["properties"].get(
                    "currency"
                ),
                "customer_id": event["user"].get(
                    "id"
                ),
            },
        )


def publish_event(event: DomainEvent) -> None:
    print({
        "event_id": event.event_id,
        "event_type": event.event_type,
        "occurred_at": event.occurred_at.isoformat(),
        "payload": event.payload,
    })


payment_event = {
    "id": "pay_123",
    "type": "payment.completed",
    "timestamp": "2026-08-05T20:00:00Z",
    "amount": 4999,
    "currency": "USD",
    "customerId": "customer_456",
}

analytics_event = {
    "event_id": "evt_789",
    "event_name": "purchase",
    "occurred_at": "2026-08-05T20:01:00Z",
    "properties": {
        "amount": 4999,
        "currency": "USD",
    },
    "user": {
        "id": "customer_456",
    },
}

publish_event(
    PaymentEventAdapter.from_external(payment_event)
)

publish_event(
    AnalyticsEventAdapter.from_external(
        analytics_event
    )
)
`,
} satisfies PatternLanguageExample;