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
  {
    language: "React",
    code: `import React, { useMemo } from "react";

interface NotificationStrategy {
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

function NotifyButton({ service }: { service: NotificationService }) {
  return <button onClick={() => service.notify("Deployment completed")}>Send notification</button>;
}

export function App() {
  const notifier = useMemo(() => new NotificationService(new SmsNotification()), []);

  return (
    <main>
      <h1>Notification Delivery</h1>
      <NotifyButton service={notifier} />
    </main>
  );
}`,
    explanation:
      "The React example keeps the notification service focused on orchestration while the selected strategy handles the channel-specific send behavior.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";

interface NotificationStrategy {
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

function NotifyButton({ service }: { service: NotificationService }) {
  return (
    <Pressable
      onPress={() => service.notify("Deployment completed")}
      style={{ padding: 12, backgroundColor: "#111827", borderRadius: 8 }}
    >
      <Text style={{ color: "#fff", textAlign: "center" }}>Send notification</Text>
    </Pressable>
  );
}

export function App() {
  const notifier = useMemo(() => new NotificationService(new SmsNotification()), []);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Notification Delivery</Text>
        <NotifyButton service={notifier} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native version uses the same strategy structure, but presents the notification action through a mobile-friendly pressable control.",
  },
  {
    language: "C#",
    code: `using System;

public interface INotificationStrategy
{
    void Send(string message);
}

public class EmailNotification : INotificationStrategy
{
    public void Send(string message)
    {
        Console.WriteLine($"Email: {message}");
    }
}

public class SmsNotification : INotificationStrategy
{
    public void Send(string message)
    {
        Console.WriteLine($"SMS: {message}");
    }
}

public class NotificationService
{
    private readonly INotificationStrategy _strategy;

    public NotificationService(INotificationStrategy strategy)
    {
        _strategy = strategy;
    }

    public void Notify(string message)
    {
        _strategy.Send(message);
    }
}

var notifier = new NotificationService(new SmsNotification());
notifier.Notify("Deployment completed");`,
    explanation:
      "The C# example keeps the notification workflow stable while the selected strategy supplies the channel-specific send behavior.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;

public interface INotificationStrategy
{
    void Send(string message);
}

public class EmailNotification : INotificationStrategy
{
    public void Send(string message)
    {
        Console.WriteLine($"Email: {message}");
    }
}

public class SmsNotification : INotificationStrategy
{
    public void Send(string message)
    {
        Console.WriteLine($"SMS: {message}");
    }
}

public class NotificationService
{
    private INotificationStrategy _strategy;

    public NotificationService(INotificationStrategy strategy)
    {
        _strategy = strategy;
    }

    public void SetStrategy(INotificationStrategy strategy)
    {
        _strategy = strategy;
    }

    public void Notify(string message)
    {
        _strategy.Send(message);
    }
}

var services = new ServiceCollection();
services.AddSingleton<EmailNotification>();
services.AddSingleton<SmsNotification>();
services.AddSingleton<NotificationService>(provider =>
    new NotificationService(provider.GetRequiredService<SmsNotification>())
);

var provider = services.BuildServiceProvider();
var notifier = provider.GetRequiredService<NotificationService>();
notifier.Notify("Deployment completed");`,
    explanation:
      "The .NET version shows the same strategy pattern with dependency injection available, so the notification context can swap delivery behavior without changing callers.",
  },
];
