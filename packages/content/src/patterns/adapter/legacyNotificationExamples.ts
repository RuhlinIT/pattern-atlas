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
  {
    language: "Angular",
    code: `import { Injectable } from '@angular/core';


class MessagePayload {
  constructor(public body: string) {}
}


abstract class Notifier {
  abstract send(message: string): void;
}


@Injectable({ providedIn: 'root' })
class LegacyMessenger {
  deliver(payload: MessagePayload): void {
    console.log(\`Legacy messenger sent: \${payload.body}\`);
  }
}


@Injectable({ providedIn: 'root' })
class NotificationAdapter extends Notifier {
  constructor(private messenger: LegacyMessenger) {
    super();
  }


  send(message: string): void {
    this.messenger.deliver(new MessagePayload(message));
  }
}


@Injectable({ providedIn: 'root' })
class AlertService {
  constructor(private notifier: NotificationAdapter) {}


  triggerAlert(message: string): void {
    this.notifier.send(message);
  }
}`,
    explanation:
      "The Angular adapter service translates the app's notifier contract into the legacy messenger's payload-based API while keeping alert logic unchanged.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";

interface Notifier {
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

function AlertButton({ alerts }: { alerts: AlertService }) {
  return (
    <button onClick={() => alerts.triggerAlert("CPU threshold exceeded")}>
      Trigger alert
    </button>
  );
}

export function App() {
  const notifier = useMemo(() => new NotificationAdapter(new LegacyMessenger()), []);
  const alerts = useMemo(() => new AlertService(notifier), [notifier]);

  return (
    <main>
      <h1>Alerts</h1>
      <AlertButton alerts={alerts} />
    </main>
  );
}`,
    explanation:
      "The React example keeps the alert service dependent on a simple notifier interface while the adapter translates that call into the legacy messenger's payload format.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";

interface Notifier {
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

function AlertButton({ alerts }: { alerts: AlertService }) {
  return (
    <Pressable
      onPress={() => alerts.triggerAlert("CPU threshold exceeded")}
      style={{ padding: 12, backgroundColor: "#111827", borderRadius: 8 }}
    >
      <Text style={{ color: "#fff", textAlign: "center" }}>Trigger alert</Text>
    </Pressable>
  );
}

export function App() {
  const notifier = useMemo(() => new NotificationAdapter(new LegacyMessenger()), []);
  const alerts = useMemo(() => new AlertService(notifier), [notifier]);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Alerts</Text>
        <AlertButton alerts={alerts} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native example uses the same adapter pattern, but wires the alert trigger into a mobile-friendly pressable UI instead of a web button.",
  },
  {
    language: "C#",
    code: `using System;

public interface INotifier
{
    void Send(string message);
}

public class LegacyMessenger
{
    public void Deliver(MessagePayload payload)
    {
        Console.WriteLine($"Legacy messenger sent: {payload.Body}");
    }
}

public class MessagePayload
{
    public string Body { get; }

    public MessagePayload(string body)
    {
        Body = body;
    }
}

public class NotificationAdapter : INotifier
{
    private readonly LegacyMessenger _messenger;

    public NotificationAdapter(LegacyMessenger messenger)
    {
        _messenger = messenger;
    }

    public void Send(string message)
    {
        _messenger.Deliver(new MessagePayload(message));
    }
}

public class AlertService
{
    private readonly INotifier _notifier;

    public AlertService(INotifier notifier)
    {
        _notifier = notifier;
    }

    public void TriggerAlert(string message)
    {
        _notifier.Send(message);
    }
}

var notifier = new NotificationAdapter(new LegacyMessenger());
var alerts = new AlertService(notifier);
alerts.TriggerAlert("CPU threshold exceeded");`,
    explanation:
      "The C# adapter converts the app's simple send contract into the legacy messenger's payload-based deliver call.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;

public interface INotifier
{
    void Send(string message);
}

public class LegacyMessenger
{
    public void Deliver(MessagePayload payload)
    {
        Console.WriteLine($"Legacy messenger sent: {payload.Body}");
    }
}

public class MessagePayload
{
    public string Body { get; }

    public MessagePayload(string body)
    {
        Body = body;
    }
}

public class NotificationAdapter : INotifier
{
    private readonly LegacyMessenger _messenger;

    public NotificationAdapter(LegacyMessenger messenger)
    {
        _messenger = messenger;
    }

    public void Send(string message)
    {
        _messenger.Deliver(new MessagePayload(message));
    }
}

public class AlertService
{
    private readonly INotifier _notifier;

    public AlertService(INotifier notifier)
    {
        _notifier = notifier;
    }

    public void TriggerAlert(string message)
    {
        _notifier.Send(message);
    }
}

var services = new ServiceCollection();
services.AddSingleton<LegacyMessenger>();
services.AddSingleton<INotifier, NotificationAdapter>();
services.AddTransient<AlertService>();

var provider = services.BuildServiceProvider();
var alerts = provider.GetRequiredService<AlertService>();
alerts.TriggerAlert("CPU threshold exceeded");`,
    explanation:
      "The .NET version shows the same adapter pattern with dependency injection, so the alert service stays decoupled from the legacy payload-based messenger.",
  },
];
