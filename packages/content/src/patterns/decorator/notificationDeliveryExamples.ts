import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const notificationDeliveryExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface Notifier {
  send(message: string): void;
}

class EmailNotifier implements Notifier {
  send(message: string): void {
    console.log(\`Email sent: \${message}\`);
  }
}

abstract class NotifierDecorator implements Notifier {
  constructor(protected wrappee: Notifier) {}

  send(message: string): void {
    this.wrappee.send(message);
  }
}

class LoggingNotifier extends NotifierDecorator {
  send(message: string): void {
    console.log("Logging notification");
    super.send(message);
  }
}

class RetryNotifier extends NotifierDecorator {
  send(message: string): void {
    console.log("Retry policy applied");
    super.send(message);
  }
}

const notifier = new RetryNotifier(
  new LoggingNotifier(new EmailNotifier()),
);

notifier.send("Deployment completed");`,
    explanation:
      "The base notifier handles delivery, while logging and retry are layered as decorators that preserve the same interface.",
  },
  {
    language: "Java",
    code: `interface Notifier {
    void send(String message);
}

class EmailNotifier implements Notifier {
    public void send(String message) {
        System.out.println("Email sent: " + message);
    }
}

abstract class NotifierDecorator implements Notifier {
    protected final Notifier wrappee;

    public NotifierDecorator(Notifier wrappee) {
        this.wrappee = wrappee;
    }

    public void send(String message) {
        wrappee.send(message);
    }
}

class LoggingNotifier extends NotifierDecorator {
    public LoggingNotifier(Notifier wrappee) {
        super(wrappee);
    }

    public void send(String message) {
        System.out.println("Logging notification");
        super.send(message);
    }
}

class RetryNotifier extends NotifierDecorator {
    public RetryNotifier(Notifier wrappee) {
        super(wrappee);
    }

    public void send(String message) {
        System.out.println("Retry policy applied");
        super.send(message);
    }
}

Notifier notifier =
    new RetryNotifier(new LoggingNotifier(new EmailNotifier()));

notifier.send("Deployment completed");`,
    explanation:
      "Each decorator wraps the same Notifier interface, so behavior can be stacked without changing the calling code.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod

class Notifier(ABC):
    @abstractmethod
    def send(self, message: str) -> None:
        pass

class EmailNotifier(Notifier):
    def send(self, message: str) -> None:
        print(f"Email sent: {message}")

class NotifierDecorator(Notifier):
    def __init__(self, wrappee: Notifier) -> None:
        self.wrappee = wrappee

    def send(self, message: str) -> None:
        self.wrappee.send(message)

class LoggingNotifier(NotifierDecorator):
    def send(self, message: str) -> None:
        print("Logging notification")
        super().send(message)

class RetryNotifier(NotifierDecorator):
    def send(self, message: str) -> None:
        print("Retry policy applied")
        super().send(message)

notifier = RetryNotifier(LoggingNotifier(EmailNotifier()))
notifier.send("Deployment completed")`,
    explanation:
      "The core notifier remains simple while logging and retry are added as interchangeable wrapper layers.",
  },
];
