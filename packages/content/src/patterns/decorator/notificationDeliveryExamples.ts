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
  {
    language: "Angular",
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
    console.log('Logging notification');
    super.send(message);
  }
}


class RetryNotifier extends NotifierDecorator {
  send(message: string): void {
    console.log('Retry policy applied');
    super.send(message);
  }
}


const notifier = new RetryNotifier(
  new LoggingNotifier(new EmailNotifier()),
);


notifier.send('Deployment completed');`,
    explanation:
      "Logging and retry wrap the same Notifier contract, so Angular code can stack delivery behavior without changing the core notifier implementation.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";

interface Notifier {
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

function NotificationPanel({ notifier }: { notifier: Notifier }) {
  return (
    <button onClick={() => notifier.send("Deployment completed")}>
      Send notification
    </button>
  );
}

export function App() {
  const notifier = useMemo(
    () => new RetryNotifier(new LoggingNotifier(new EmailNotifier())),
    []
  );

  return (
    <main>
      <h1>Notification Delivery</h1>
      <NotificationPanel notifier={notifier} />
    </main>
  );
}`,
    explanation:
      "The React example stacks logging and retry decorators around the same notifier contract, so the UI can trigger delivery without knowing about the added behaviors.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";

interface Notifier {
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

function NotificationButton({ notifier }: { notifier: Notifier }) {
  return (
    <Pressable
      onPress={() => notifier.send("Deployment completed")}
      style={{ padding: 12, backgroundColor: "#111827", borderRadius: 8 }}
    >
      <Text style={{ color: "#fff", textAlign: "center" }}>Send notification</Text>
    </Pressable>
  );
}

export function App() {
  const notifier = useMemo(
    () => new RetryNotifier(new LoggingNotifier(new EmailNotifier())),
    []
  );

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Notification Delivery</Text>
        <NotificationButton notifier={notifier} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native version uses the same decorator chain, but exposes notification delivery through a mobile-friendly pressable button.",
  },
  {
    language: "C#",
    code: `using System;

public interface INotifier
{
    void Send(string message);
}

public class EmailNotifier : INotifier
{
    public void Send(string message)
    {
        Console.WriteLine($"Email sent: {message}");
    }
}

public abstract class NotifierDecorator : INotifier
{
    protected readonly INotifier Wrappee;

    protected NotifierDecorator(INotifier wrappee)
    {
        Wrappee = wrappee;
    }

    public virtual void Send(string message)
    {
        Wrappee.Send(message);
    }
}

public class LoggingNotifier : NotifierDecorator
{
    public LoggingNotifier(INotifier wrappee) : base(wrappee) { }

    public override void Send(string message)
    {
        Console.WriteLine("Logging notification");
        base.Send(message);
    }
}

public class RetryNotifier : NotifierDecorator
{
    public RetryNotifier(INotifier wrappee) : base(wrappee) { }

    public override void Send(string message)
    {
        Console.WriteLine("Retry policy applied");
        base.Send(message);
    }
}

INotifier notifier = new RetryNotifier(
    new LoggingNotifier(new EmailNotifier())
);

notifier.Send("Deployment completed");`,
    explanation:
      "The C# example keeps the notifier interface stable while logging and retry are added as wrapper behaviors around email delivery.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;

public interface INotifier
{
    void Send(string message);
}

public class EmailNotifier : INotifier
{
    public void Send(string message)
    {
        Console.WriteLine($"Email sent: {message}");
    }
}

public abstract class NotifierDecorator : INotifier
{
    protected readonly INotifier Wrappee;

    protected NotifierDecorator(INotifier wrappee)
    {
        Wrappee = wrappee;
    }

    public virtual void Send(string message)
    {
        Wrappee.Send(message);
    }
}

public class LoggingNotifier : NotifierDecorator
{
    public LoggingNotifier(INotifier wrappee) : base(wrappee) { }

    public override void Send(string message)
    {
        Console.WriteLine("Logging notification");
        base.Send(message);
    }
}

public class RetryNotifier : NotifierDecorator
{
    public RetryNotifier(INotifier wrappee) : base(wrappee) { }

    public override void Send(string message)
    {
        Console.WriteLine("Retry policy applied");
        base.Send(message);
    }
}

var services = new ServiceCollection();
services.AddSingleton<INotifier>(_ =>
    new RetryNotifier(new LoggingNotifier(new EmailNotifier()))
);

var provider = services.BuildServiceProvider();
var notifier = provider.GetRequiredService<INotifier>();

notifier.Send("Deployment completed");`,
    explanation:
      "The .NET version shows the same decorated notifier composition with dependency injection, so delivery behavior can be layered without changing callers.",
  },
];
