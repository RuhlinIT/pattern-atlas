import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java = {
  language: "java",
  code: `import java.time.Instant;
import java.util.Map;

public final class EventPayloadMapper {

    public record ExternalEvent(
        String eventId,
        String eventType,
        String createdAt,
        Map<String, Object> data
    ) {}

    public record DomainEvent(
        String id,
        String type,
        Instant occurredAt,
        Map<String, Object> payload
    ) {}

    public static DomainEvent fromExternal(
        ExternalEvent event
    ) {
        return new DomainEvent(
            event.eventId(),
            event.eventType(),
            Instant.parse(event.createdAt()),
            event.data()
        );
    }

    public static void process(DomainEvent event) {
        System.out.println(
            "Processing "
                + event.type()
                + " event "
                + event.id()
        );
    }

    public static void main(String[] args) {
        ExternalEvent externalEvent =
            new ExternalEvent(
                "evt_123",
                "task.completed",
                "2026-08-05T20:00:00Z",
                Map.of(
                    "task_id",
                    "task_456",
                    "completed_by",
                    "user_789"
                )
            );

        DomainEvent domainEvent =
            fromExternal(externalEvent);

        process(domainEvent);
    }
}
`,
} satisfies PatternLanguageExample;