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
  {
    language: "Angular",
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


console.log(notifier.send('Build completed'));`,
    explanation:
      "Each notification channel wraps the same Notifier contract, so Angular code can combine delivery behaviors dynamically without changing the base notifier.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";

interface Notifier {
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

function NotificationPanel({ notifier }: { notifier: Notifier }) {
  return <p>{notifier.send("Build completed")}</p>;
}

export function App() {
  const notifier = useMemo(
    () => new SlackDecorator(new SmsDecorator(new EmailDecorator(new BasicNotifier()))),
    []
  );

  return (
    <main>
      <h1>Notification Channels</h1>
      <NotificationPanel notifier={notifier} />
    </main>
  );
}`,
    explanation:
      "The React example composes notification channels by wrapping the base notifier, so the UI can combine delivery behaviors without changing the core notifier class.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";

interface Notifier {
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

function NotificationPanel({ notifier }: { notifier: Notifier }) {
  return (
    <View>
      <Text>{notifier.send("Build completed")}</Text>
    </View>
  );
}

export function App() {
  const notifier = useMemo(
    () => new SlackDecorator(new SmsDecorator(new EmailDecorator(new BasicNotifier()))),
    []
  );

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Notification Channels</Text>
        <NotificationPanel notifier={notifier} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native version uses the same decorator chain, but shows the combined notification output in a mobile-friendly layout.",
  },
  {
    language: "C#",
    code: `using System;

public interface INotifier
{
    string Send(string message);
}

public class BasicNotifier : INotifier
{
    public string Send(string message)
    {
        return $"In-app: {message}";
    }
}

public abstract class NotifierDecorator : INotifier
{
    protected readonly INotifier Notifier;

    protected NotifierDecorator(INotifier notifier)
    {
        Notifier = notifier;
    }

    public virtual string Send(string message)
    {
        return Notifier.Send(message);
    }
}

public class EmailDecorator : NotifierDecorator
{
    public EmailDecorator(INotifier notifier) : base(notifier) { }

    public override string Send(string message)
    {
        return $"{base.Send(message)} | Email: {message}";
    }
}

public class SmsDecorator : NotifierDecorator
{
    public SmsDecorator(INotifier notifier) : base(notifier) { }

    public override string Send(string message)
    {
        return $"{base.Send(message)} | SMS: {message}";
    }
}

public class SlackDecorator : NotifierDecorator
{
    public SlackDecorator(INotifier notifier) : base(notifier) { }

    public override string Send(string message)
    {
        return $"{base.Send(message)} | Slack: {message}";
    }
}

INotifier notifier = new SlackDecorator(
    new SmsDecorator(
        new EmailDecorator(new BasicNotifier())
    )
);

Console.WriteLine(notifier.Send("Build completed"));`,
    explanation:
      "The C# example keeps one notifier contract while adding each channel as a wrapper, making channel composition flexible and reusable.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;

public interface INotifier
{
    string Send(string message);
}

public class BasicNotifier : INotifier
{
    public string Send(string message)
    {
        return $"In-app: {message}";
    }
}

public abstract class NotifierDecorator : INotifier
{
    protected readonly INotifier Notifier;

    protected NotifierDecorator(INotifier notifier)
    {
        Notifier = notifier;
    }

    public virtual string Send(string message)
    {
        return Notifier.Send(message);
    }
}

public class EmailDecorator : NotifierDecorator
{
    public EmailDecorator(INotifier notifier) : base(notifier) { }

    public override string Send(string message)
    {
        return $"{base.Send(message)} | Email: {message}";
    }
}

public class SmsDecorator : NotifierDecorator
{
    public SmsDecorator(INotifier notifier) : base(notifier) { }

    public override string Send(string message)
    {
        return $"{base.Send(message)} | SMS: {message}";
    }
}

public class SlackDecorator : NotifierDecorator
{
    public SlackDecorator(INotifier notifier) : base(notifier) { }

    public override string Send(string message)
    {
        return $"{base.Send(message)} | Slack: {message}";
    }
}

var services = new ServiceCollection();
services.AddSingleton<INotifier>(_ =>
    new SlackDecorator(
        new SmsDecorator(
            new EmailDecorator(new BasicNotifier())
        )
    )
);

var provider = services.BuildServiceProvider();
var notifier = provider.GetRequiredService<INotifier>();

Console.WriteLine(notifier.Send("Build completed"));`,
    explanation:
      "The .NET version shows the same layered notifier composition with dependency injection, so channels can be added or removed without changing callers.",
  },
];
