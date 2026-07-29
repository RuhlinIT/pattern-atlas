import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const notificationChannelExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface Notifier {
  send(message: string): string;
}

class BasicNotifier implements Notifier {
  send(message: string): string {
    return \`In-app: \${message}\`;
  }
}

abstract class NotifierDecorator implements Notifier {
  constructor(protected notifier: Notifier) {}

  send(message: string): string {
    return this.notifier.send(message);
  }
}

class EmailDecorator extends NotifierDecorator {
  send(message: string): string {
    return \`\${super.send(message)} | Email: \${message}\`;
  }
}

class SmsDecorator extends NotifierDecorator {
  send(message: string): string {
    return \`\${super.send(message)} | SMS: \${message}\`;
  }
}

class SlackDecorator extends NotifierDecorator {
  send(message: string): string {
    return \`\${super.send(message)} | Slack: \${message}\`;
  }
}

const notifier = new SlackDecorator(
  new SmsDecorator(new EmailDecorator(new BasicNotifier())),
);

console.log(notifier.send("Build completed"));`,
    explanation:
      "Each delivery channel is added by wrapping the base notifier, so channels can be combined dynamically without changing the original notifier class.",
  },
  {
    language: "Java",
    code: `interface Notifier {
    String send(String message);
}

class BasicNotifier implements Notifier {
    public String send(String message) {
        return "In-app: " + message;
    }
}

abstract class NotifierDecorator implements Notifier {
    protected final Notifier notifier;

    public NotifierDecorator(Notifier notifier) {
        this.notifier = notifier;
    }

    public String send(String message) {
        return notifier.send(message);
    }
}

class EmailDecorator extends NotifierDecorator {
    public EmailDecorator(Notifier notifier) {
        super(notifier);
    }

    public String send(String message) {
        return super.send(message) + " | Email: " + message;
    }
}

class SmsDecorator extends NotifierDecorator {
    public SmsDecorator(Notifier notifier) {
        super(notifier);
    }

    public String send(String message) {
        return super.send(message) + " | SMS: " + message;
    }
}

class SlackDecorator extends NotifierDecorator {
    public SlackDecorator(Notifier notifier) {
        super(notifier);
    }

    public String send(String message) {
        return super.send(message) + " | Slack: " + message;
    }
}

Notifier notifier =
    new SlackDecorator(
        new SmsDecorator(
            new EmailDecorator(new BasicNotifier())
        )
    );

System.out.println(notifier.send("Build completed"));`,
    explanation:
      "The decorator chain keeps the same notifier interface while adding new channel behavior around the wrapped notifier.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod

class Notifier(ABC):
    @abstractmethod
    def send(self, message: str) -> str:
        pass

class BasicNotifier(Notifier):
    def send(self, message: str) -> str:
        return f"In-app: {message}"

class NotifierDecorator(Notifier):
    def __init__(self, notifier: Notifier) -> None:
        self.notifier = notifier

    def send(self, message: str) -> str:
        return self.notifier.send(message)

class EmailDecorator(NotifierDecorator):
    def send(self, message: str) -> str:
        return f"{super().send(message)} | Email: {message}"

class SmsDecorator(NotifierDecorator):
    def send(self, message: str) -> str:
        return f"{super().send(message)} | SMS: {message}"

class SlackDecorator(NotifierDecorator):
    def send(self, message: str) -> str:
        return f"{super().send(message)} | Slack: {message}"

notifier = SlackDecorator(
    SmsDecorator(
        EmailDecorator(BasicNotifier())
    )
)

print(notifier.send("Build completed"))`,
    explanation:
      "The same message can be delivered through multiple channels by composing decorators around a single base notifier.",
  },
];