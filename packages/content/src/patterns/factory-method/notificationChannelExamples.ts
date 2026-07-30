import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const notificationChannelExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface NotificationSender {
                        send(recipient: string, message: string): void;
                    }


                    class EmailSender implements NotificationSender {
                        send(recipient: string, message: string): void {
                            console.log(\`Email to \${recipient}: \${message}\`);
                        }
                    }


                    class SmsSender implements NotificationSender {
                        send(recipient: string, message: string): void {
                            console.log(\`SMS to \${recipient}: \${message}\`);
                        }
                    }


                    abstract class NotificationService {
                        abstract createSender(): NotificationSender;


                        notify(recipient: string, message: string): void {
                            const sender = this.createSender();
                            sender.send(recipient, message);
                        }
                    }


                    class EmailNotificationService extends NotificationService {
                        createSender(): NotificationSender {
                            return new EmailSender();
                        }
                    }


                    class SmsNotificationService extends NotificationService {
                        createSender(): NotificationSender {
                            return new SmsSender();
                        }
                    }


                    const service: NotificationService = new EmailNotificationService();
                    service.notify("alex@example.com", "Your report is ready.");`,
    explanation:
      "The service owns the notification workflow, while concrete services decide which sender implementation to create.",
  },
  {
    language: "Java",
    code: `interface NotificationSender {
                        void send(String recipient, String message);
                    }


                    class EmailSender implements NotificationSender {
                        public void send(String recipient, String message) {
                            System.out.println("Email to " + recipient + ": " + message);
                        }
                    }


                    class SmsSender implements NotificationSender {
                        public void send(String recipient, String message) {
                            System.out.println("SMS to " + recipient + ": " + message);
                        }
                    }


                    abstract class NotificationService {
                        abstract NotificationSender createSender();


                        public void notify(String recipient, String message) {
                            NotificationSender sender = createSender();
                            sender.send(recipient, message);
                        }
                    }


                    class EmailNotificationService extends NotificationService {
                        NotificationSender createSender() {
                            return new EmailSender();
                        }
                    }


                    class SmsNotificationService extends NotificationService {
                        NotificationSender createSender() {
                            return new SmsSender();
                        }
                    }


                    NotificationService service = new EmailNotificationService();
                    service.notify("alex@example.com", "Your report is ready.");`,
    explanation:
      "The factory method lets subclasses choose the delivery channel without changing the shared notification process.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod


                    class NotificationSender(ABC):
                        @abstractmethod
                        def send(self, recipient: str, message: str) -> None:
                            pass


                    class EmailSender(NotificationSender):
                        def send(self, recipient: str, message: str) -> None:
                            print(f"Email to {recipient}: {message}")


                    class SmsSender(NotificationSender):
                        def send(self, recipient: str, message: str) -> None:
                            print(f"SMS to {recipient}: {message}")


                    class NotificationService(ABC):
                        @abstractmethod
                        def create_sender(self) -> NotificationSender:
                            pass


                        def notify(self, recipient: str, message: str) -> None:
                            sender = self.create_sender()
                            sender.send(recipient, message)


                    class EmailNotificationService(NotificationService):
                        def create_sender(self) -> NotificationSender:
                            return EmailSender()


                    class SmsNotificationService(NotificationService):
                        def create_sender(self) -> NotificationSender:
                            return SmsSender()


                    service: NotificationService = EmailNotificationService()
                    service.notify("alex@example.com", "Your report is ready.")`,
    explanation:
      "The creator centralizes notification behavior while subclasses determine which concrete sender is created for delivery.",
  },
  {
    language: "Angular",
    code: `import { Injectable } from '@angular/core';


                    interface NotificationSender {
                        send(recipient: string, message: string): void;
                    }


                    class EmailSender implements NotificationSender {
                        send(recipient: string, message: string): void {
                            console.log(\`Email to \${recipient}: \${message}\`);
                        }
                    }


                    class SmsSender implements NotificationSender {
                        send(recipient: string, message: string): void {
                            console.log(\`SMS to \${recipient}: \${message}\`);
                        }
                    }


                    @Injectable({ providedIn: 'root' })
                    abstract class NotificationService {
                        abstract createSender(): NotificationSender;


                        notify(recipient: string, message: string): void {
                            const sender = this.createSender();
                            sender.send(recipient, message);
                        }
                    }


                    @Injectable({ providedIn: 'root' })
                    class EmailNotificationService extends NotificationService {
                        createSender(): NotificationSender {
                            return new EmailSender();
                        }
                    }


                    @Injectable({ providedIn: 'root' })
                    class SmsNotificationService extends NotificationService {
                        createSender(): NotificationSender {
                            return new SmsSender();
                        }
                    }`,
    explanation:
      "The Angular service defines the notification workflow, while concrete services use the factory method to select the delivery implementation.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";

interface NotificationSender {
  send(recipient: string, message: string): void;
}

class EmailSender implements NotificationSender {
  send(recipient: string, message: string): void {
    console.log(\`Email to \${recipient}: \${message}\`);
  }
}

class SmsSender implements NotificationSender {
  send(recipient: string, message: string): void {
    console.log(\`SMS to \${recipient}: \${message}\`);
  }
}

abstract class NotificationService {
  abstract createSender(): NotificationSender;

  notify(recipient: string, message: string): void {
    const sender = this.createSender();
    sender.send(recipient, message);
  }
}

class EmailNotificationService extends NotificationService {
  createSender(): NotificationSender {
    return new EmailSender();
  }
}

class SmsNotificationService extends NotificationService {
  createSender(): NotificationSender {
    return new SmsSender();
  }
}

function NotifyButton({ service }: { service: NotificationService }) {
  return (
    <button onClick={() => service.notify("alex@example.com", "Your report is ready.")}>
      Send notification
    </button>
  );
}

export function App() {
  const service = useMemo(() => new EmailNotificationService(), []);

  return (
    <main>
      <h1>Notification Channel</h1>
      <NotifyButton service={service} />
    </main>
  );
}`,
    explanation:
      "The React example keeps the notification workflow in the base service while concrete services choose which sender object the factory method creates.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";

interface NotificationSender {
  send(recipient: string, message: string): void;
}

class EmailSender implements NotificationSender {
  send(recipient: string, message: string): void {
    console.log(\`Email to \${recipient}: \${message}\`);
  }
}

class SmsSender implements NotificationSender {
  send(recipient: string, message: string): void {
    console.log(\`SMS to \${recipient}: \${message}\`);
  }
}

abstract class NotificationService {
  abstract createSender(): NotificationSender;

  notify(recipient: string, message: string): void {
    const sender = this.createSender();
    sender.send(recipient, message);
  }
}

class EmailNotificationService extends NotificationService {
  createSender(): NotificationSender {
    return new EmailSender();
  }
}

class SmsNotificationService extends NotificationService {
  createSender(): NotificationSender {
    return new SmsSender();
  }
}

function NotifyButton({ service }: { service: NotificationService }) {
  return (
    <Pressable
      onPress={() => service.notify("alex@example.com", "Your report is ready.")}
      style={{ padding: 12, backgroundColor: "#111827", borderRadius: 8 }}
    >
      <Text style={{ color: "#fff", textAlign: "center" }}>Send notification</Text>
    </Pressable>
  );
}

export function App() {
  const service = useMemo(() => new EmailNotificationService(), []);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Notification Channel</Text>
        <NotifyButton service={service} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native version uses the same factory method structure, but exposes the notification action through a mobile-friendly pressable control.",
  },
  {
    language: "C#",
    code: `using System;

public interface INotificationSender
{
    void Send(string recipient, string message);
}

public class EmailSender : INotificationSender
{
    public void Send(string recipient, string message)
    {
        Console.WriteLine($"Email to {recipient}: {message}");
    }
}

public class SmsSender : INotificationSender
{
    public void Send(string recipient, string message)
    {
        Console.WriteLine($"SMS to {recipient}: {message}");
    }
}

public abstract class NotificationService
{
    public abstract INotificationSender CreateSender();

    public void Notify(string recipient, string message)
    {
        var sender = CreateSender();
        sender.Send(recipient, message);
    }
}

public class EmailNotificationService : NotificationService
{
    public override INotificationSender CreateSender()
    {
        return new EmailSender();
    }
}

public class SmsNotificationService : NotificationService
{
    public override INotificationSender CreateSender()
    {
        return new SmsSender();
    }
}

NotificationService service = new EmailNotificationService();
service.Notify("alex@example.com", "Your report is ready.");`,
    explanation:
      "The C# example keeps the notification workflow fixed in the creator while subclasses use the factory method to choose the delivery channel.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;

public interface INotificationSender
{
    void Send(string recipient, string message);
}

public class EmailSender : INotificationSender
{
    public void Send(string recipient, string message)
    {
        Console.WriteLine($"Email to {recipient}: {message}");
    }
}

public class SmsSender : INotificationSender
{
    public void Send(string recipient, string message)
    {
        Console.WriteLine($"SMS to {recipient}: {message}");
    }
}

public abstract class NotificationService
{
    public abstract INotificationSender CreateSender();

    public void Notify(string recipient, string message)
    {
        var sender = CreateSender();
        sender.Send(recipient, message);
    }
}

public class EmailNotificationService : NotificationService
{
    public override INotificationSender CreateSender()
    {
        return new EmailSender();
    }
}

public class SmsNotificationService : NotificationService
{
    public override INotificationSender CreateSender()
    {
        return new SmsSender();
    }
}

var services = new ServiceCollection();
services.AddSingleton<NotificationService, EmailNotificationService>();

var provider = services.BuildServiceProvider();
var service = provider.GetRequiredService<NotificationService>();
service.Notify("alex@example.com", "Your report is ready.");`,
    explanation:
      "The .NET version shows the same factory method pattern with dependency injection, so the notification workflow stays stable while the concrete sender is selected by the subclass.",
  },
];
