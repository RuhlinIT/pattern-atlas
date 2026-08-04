import type { PatternLanguageExample } from "@atlas-patterns/schemas";

interface Notifier {
  send(message: string): void;
}

class EmailNotifier implements Notifier {
  send(message: string) {
    console.log(`email: ${message}`);
  }
}

class LoggingNotifier implements Notifier {
  constructor(private wrapped: Notifier) {}
  send(message: string) {
    console.log(`log: ${message}`);
    this.wrapped.send(message);
  }
}

class RetryNotifier implements Notifier {
  constructor(private wrapped: Notifier) {}
  send(message: string) {
    try {
      this.wrapped.send(message);
    } catch {
      this.wrapped.send(message);
    }
  }
}

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Notification delivery",
  code: `interface Notifier {
  send(message: string): void;
}

class EmailNotifier implements Notifier {
  send(message: string) {
    console.log(\`email: \${message}\`);
  }
}

class LoggingNotifier implements Notifier {
  constructor(private wrapped: Notifier) {}
  send(message: string) {
    console.log(\`log: \${message}\`);
    this.wrapped.send(message);
  }
}

class RetryNotifier implements Notifier {
  constructor(private wrapped: Notifier) {}
  send(message: string) {
    try {
      this.wrapped.send(message);
    } catch {
      this.wrapped.send(message);
    }
  }
}

const notifier = new RetryNotifier(new LoggingNotifier(new EmailNotifier()));
notifier.send("Hello");`,
  explanation:
    "Layer retry and logging around a base notifier while keeping the same send interface.",
};