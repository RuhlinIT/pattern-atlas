import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const notificationDeliveryExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface NotificationStrategy {
  send(message: string): void;
}

class EmailNotification implements NotificationStrategy {
  send(message: string): void {
    console.log(\`Email: \${message}\`);
  }
}

class SmsNotification implements NotificationStrategy {
  send(message: string): void {
    console.log(\`SMS: \${message}\`);
  }
}

class NotificationService {
  constructor(private strategy: NotificationStrategy) {}

  notify(message: string): void {
    this.strategy.send(message);
  }
}

const notifier = new NotificationService(new SmsNotification());
notifier.notify("Deployment completed");`,
    explanation:
      "The service stays focused on sending a notification while the chosen strategy handles channel-specific behavior.",
  },
  {
    language: "Java",
    code: `interface NotificationStrategy {
    void send(String message);
}

class EmailNotification implements NotificationStrategy {
    public void send(String message) {
        System.out.println("Email: " + message);
    }
}

class SmsNotification implements NotificationStrategy {
    public void send(String message) {
        System.out.println("SMS: " + message);
    }
}

class NotificationService {
    private final NotificationStrategy strategy;

    public NotificationService(NotificationStrategy strategy) {
        this.strategy = strategy;
    }

    public void notify(String message) {
        strategy.send(message);
    }
}

NotificationService notifier = new NotificationService(new SmsNotification());
notifier.notify("Deployment completed");`,
    explanation:
      "Channel-specific logic is isolated behind the notification interface, making new delivery methods easier to add.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod

class NotificationStrategy(ABC):
    @abstractmethod
    def send(self, message: str) -> None:
        pass

class EmailNotification(NotificationStrategy):
    def send(self, message: str) -> None:
        print(f"Email: {message}")

class SmsNotification(NotificationStrategy):
    def send(self, message: str) -> None:
        print(f"SMS: {message}")

class NotificationService:
    def __init__(self, strategy: NotificationStrategy) -> None:
        self.strategy = strategy

    def notify(self, message: str) -> None:
        self.strategy.send(message)

notifier = NotificationService(SmsNotification())
notifier.notify("Deployment completed")`,
    explanation:
      "The caller delegates channel behavior to the selected strategy, which keeps notification expansion simpler and safer.",
  },
  {
    language: "Angular",
    code: `import { Injectable } from '@angular/core';


abstract class NotificationStrategy {
  abstract send(message: string): void;
}


@Injectable({ providedIn: 'root' })
class EmailNotification extends NotificationStrategy {
  send(message: string): void {
    console.log(\`Email: \${message}\`);
  }
}


@Injectable({ providedIn: 'root' })
class SmsNotification extends NotificationStrategy {
  send(message: string): void {
    console.log(\`SMS: \${message}\`);
  }
}


@Injectable({ providedIn: 'root' })
class NotificationService {
  private strategy: NotificationStrategy;


  constructor(
    private emailNotification: EmailNotification,
    private smsNotification: SmsNotification,
  ) {
    this.strategy = this.smsNotification;
  }


  setStrategy(channel: 'email' | 'sms'): void {
    this.strategy =
      channel === 'email' ? this.emailNotification : this.smsNotification;
  }


  notify(message: string): void {
    this.strategy.send(message);
  }
}`,
    explanation:
      "The Angular service acts as the strategy context, while injectable channel services provide interchangeable notification behaviors selected at runtime.",
  },
];
