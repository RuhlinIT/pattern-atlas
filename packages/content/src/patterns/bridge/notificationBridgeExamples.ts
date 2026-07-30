import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const notificationBridgeExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface NotificationSender {
  send(message: string): string;
}


class EmailSender implements NotificationSender {
  send(message: string): string {
    return \`Email sent: \${message}\`;
  }
}


class SmsSender implements NotificationSender {
  send(message: string): string {
    return \`SMS sent: \${message}\`;
  }
}


abstract class Notification {
  constructor(protected sender: NotificationSender) {}


  abstract notify(message: string): string;
}


class AlertNotification extends Notification {
  notify(message: string): string {
    return this.sender.send(\`ALERT: \${message}\`);
  }
}


const alert = new AlertNotification(new EmailSender());
console.log(alert.notify("Server is down"));`,
    explanation:
      "The notification abstraction bridges message handling to different delivery channels, so the same alert logic can use email or SMS.",
  },
  {
    language: "Java",
    code: `interface NotificationSender {
    String send(String message);
}


class EmailSender implements NotificationSender {
    public String send(String message) {
        return "Email sent: " + message;
    }
}


class SmsSender implements NotificationSender {
    public String send(String message) {
        return "SMS sent: " + message;
    }
}


abstract class Notification {
    protected NotificationSender sender;


    public Notification(NotificationSender sender) {
        this.sender = sender;
    }


    public abstract String notify(String message);
}


class AlertNotification extends Notification {
    public AlertNotification(NotificationSender sender) {
        super(sender);
    }


    public String notify(String message) {
        return sender.send("ALERT: " + message);
    }
}


AlertNotification alert = new AlertNotification(new EmailSender());
System.out.println(alert.notify("Server is down"));`,
    explanation:
      "The bridge keeps notification content separate from the delivery mechanism, making it easy to swap email for SMS.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod


class NotificationSender(ABC):
    @abstractmethod
    def send(self, message: str) -> str:
        pass


class EmailSender(NotificationSender):
    def send(self, message: str) -> str:
        return f"Email sent: {message}"


class SmsSender(NotificationSender):
    def send(self, message: str) -> str:
        return f"SMS sent: {message}"


class Notification(ABC):
    def __init__(self, sender: NotificationSender) -> None:
        self.sender = sender


    @abstractmethod
    def notify(self, message: str) -> str:
        pass


class AlertNotification(Notification):
    def notify(self, message: str) -> str:
        return self.sender.send(f"ALERT: {message}")


alert = AlertNotification(EmailSender())
print(alert.notify("Server is down"))`,
    explanation:
      "The notification bridge separates the alert abstraction from the sender implementation so either delivery channel can be used.",
  },
  {
    language: "Angular",
    code: `interface NotificationSender {
  send(message: string): string;
}


class EmailSender implements NotificationSender {
  send(message: string): string {
    return \`Email sent: \${message}\`;
  }
}


class SmsSender implements NotificationSender {
  send(message: string): string {
    return \`SMS sent: \${message}\`;
  }
}


abstract class Notification {
  constructor(protected sender: NotificationSender) {}


  abstract notify(message: string): string;
}


class AlertNotification extends Notification {
  notify(message: string): string {
    return this.sender.send(\`ALERT: \${message}\`);
  }
}


const alert = new AlertNotification(new EmailSender());
console.log(alert.notify("Server is down"));`,
    explanation:
      "The Angular example bridges notification formatting to the delivery provider so the app can switch channels without changing the alert abstraction.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


interface NotificationSender {
  send(message: string): string;
}


class EmailSender implements NotificationSender {
  send(message: string): string {
    return \`Email sent: \${message}\`;
  }
}


class SmsSender implements NotificationSender {
  send(message: string): string {
    return \`SMS sent: \${message}\`;
  }
}


abstract class Notification {
  constructor(protected sender: NotificationSender) {}


  abstract notify(message: string): string;
}


class AlertNotification extends Notification {
  notify(message: string): string {
    return this.sender.send(\`ALERT: \${message}\`);
  }
}


function NotificationPreview({ notification }: { notification: Notification }) {
  return <p>{notification.notify("Server is down")}</p>;
}


export function App() {
  const notification = useMemo(() => new AlertNotification(new EmailSender()), []);


  return (
    <main>
      <h1>Notification Bridge</h1>
      <NotificationPreview notification={notification} />
    </main>
  );
}`,
    explanation:
      "The React example bridges alert content to the email sender, keeping the notification logic separate from the delivery implementation.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


interface NotificationSender {
  send(message: string): string;
}


class EmailSender implements NotificationSender {
  send(message: string): string {
    return \`Email sent: \${message}\`;
  }
}


class SmsSender implements NotificationSender {
  send(message: string): string {
    return \`SMS sent: \${message}\`;
  }
}


abstract class Notification {
  constructor(protected sender: NotificationSender) {}


  abstract notify(message: string): string;
}


class AlertNotification extends Notification {
  notify(message: string): string {
    return this.sender.send(\`ALERT: \${message}\`);
  }
}


function NotificationPreview({ notification }: { notification: Notification }) {
  return (
    <View>
      <Text>{notification.notify("Server is down")}</Text>
    </View>
  );
}


export function App() {
  const notification = useMemo(() => new AlertNotification(new EmailSender()), []);


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Notification Bridge</Text>
        <NotificationPreview notification={notification} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native example uses the same bridge structure so notifications can target different delivery channels in a mobile app.",
  },
  {
    language: "C#",
    code: `using System;


public interface INotificationSender
{
    string Send(string message);
}


public class EmailSender : INotificationSender
{
    public string Send(string message)
    {
        return $"Email sent: {message}";
    }
}


public class SmsSender : INotificationSender
{
    public string Send(string message)
    {
        return $"SMS sent: {message}";
    }
}


public abstract class Notification
{
    protected readonly INotificationSender Sender;


    protected Notification(INotificationSender sender)
    {
        Sender = sender;
    }


    public abstract string Notify(string message);
}


public class AlertNotification : Notification
{
    public AlertNotification(INotificationSender sender) : base(sender) { }


    public override string Notify(string message)
    {
        return Sender.Send($"ALERT: {message}");
    }
}


var alert = new AlertNotification(new EmailSender());
Console.WriteLine(alert.Notify("Server is down"));`,
    explanation:
      "The bridge keeps notification content separate from the sender implementation so either channel can be swapped in cleanly.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;


public interface INotificationSender
{
    string Send(string message);
}


public class EmailSender : INotificationSender
{
    public string Send(string message)
    {
        return $"Email sent: {message}";
    }
}


public class SmsSender : INotificationSender
{
    public string Send(string message)
    {
        return $"SMS sent: {message}";
    }
}


public abstract class Notification
{
    protected readonly INotificationSender Sender;


    protected Notification(INotificationSender sender)
    {
        Sender = sender;
    }


    public abstract string Notify(string message);
}


public class AlertNotification : Notification
{
    public AlertNotification(INotificationSender sender) : base(sender) { }


    public override string Notify(string message)
    {
        return Sender.Send($"ALERT: {message}");
    }
}


var services = new ServiceCollection();
services.AddSingleton<INotificationSender, EmailSender>();
services.AddTransient<AlertNotification>();

var provider = services.BuildServiceProvider();
var alert = provider.GetRequiredService<AlertNotification>();

Console.WriteLine(alert.Notify("Server is down"));`,
    explanation:
      "The .NET example uses dependency injection to bridge the notification abstraction to a concrete sender implementation.",
  },
];
