import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const legacyNotificationExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface Notifier {
  send(message: string): void;
}

class LegacyMessenger {
  deliver(payload: { body: string }): void {
    console.log(\`Legacy messenger sent: \${payload.body}\`);
  }
}

class NotificationAdapter implements Notifier {
  constructor(private messenger: LegacyMessenger) {}

  send(message: string): void {
    this.messenger.deliver({ body: message });
  }
}

class AlertService {
  constructor(private notifier: Notifier) {}

  triggerAlert(message: string): void {
    this.notifier.send(message);
  }
}

const notifier = new NotificationAdapter(new LegacyMessenger());
const alerts = new AlertService(notifier);
alerts.triggerAlert("CPU threshold exceeded");`,
    explanation:
      "The adapter converts the app's simple send contract into the older service's payload-based deliver call.",
  },
  {
    language: "Java",
    code: `interface Notifier {
    void send(String message);
}

class LegacyMessenger {
    public void deliver(MessagePayload payload) {
        System.out.println("Legacy messenger sent: " + payload.body);
    }
}

class MessagePayload {
    public final String body;

    public MessagePayload(String body) {
        this.body = body;
    }
}

class NotificationAdapter implements Notifier {
    private final LegacyMessenger messenger;

    public NotificationAdapter(LegacyMessenger messenger) {
        this.messenger = messenger;
    }

    public void send(String message) {
        messenger.deliver(new MessagePayload(message));
    }
}

class AlertService {
    private final Notifier notifier;

    public AlertService(Notifier notifier) {
        this.notifier = notifier;
    }

    public void triggerAlert(String message) {
        notifier.send(message);
    }
}

Notifier notifier = new NotificationAdapter(new LegacyMessenger());
AlertService alerts = new AlertService(notifier);
alerts.triggerAlert("CPU threshold exceeded");`,
    explanation:
      "The alert service works with its own expected interface while the adapter handles the legacy payload object required by the messenger.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod

class Notifier(ABC):
    @abstractmethod
    def send(self, message: str) -> None:
        pass

class LegacyMessenger:
    def deliver(self, payload: dict[str, str]) -> None:
        print(f"Legacy messenger sent: {payload['body']}")

class NotificationAdapter(Notifier):
    def __init__(self, messenger: LegacyMessenger) -> None:
        self.messenger = messenger

    def send(self, message: str) -> None:
        self.messenger.deliver({"body": message})

class AlertService:
    def __init__(self, notifier: Notifier) -> None:
        self.notifier = notifier

    def trigger_alert(self, message: str) -> None:
        self.notifier.send(message)

notifier = NotificationAdapter(LegacyMessenger())
alerts = AlertService(notifier)
alerts.trigger_alert("CPU threshold exceeded")`,
    explanation:
      "The adapter makes an incompatible legacy messaging API look like the notifier interface expected by the rest of the application.",
  },
];
