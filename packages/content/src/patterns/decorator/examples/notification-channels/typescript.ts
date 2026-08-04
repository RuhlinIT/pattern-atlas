import type { PatternLanguageExample } from "@atlas-patterns/schemas";

interface Notifier {
  send(message: string): void;
}

class BaseNotifier implements Notifier {
  send(message: string) {
    console.log(`base: ${message}`);
  }
}

class EmailNotifier implements Notifier {
  constructor(private wrapped: Notifier) {}
  send(message: string) {
    this.wrapped.send(message);
    console.log(`email: ${message}`);
  }
}

class SmsNotifier implements Notifier {
  constructor(private wrapped: Notifier) {}
  send(message: string) {
    this.wrapped.send(message);
    console.log(`sms: ${message}`);
  }
}

class SlackNotifier implements Notifier {
  constructor(private wrapped: Notifier) {}
  send(message: string) {
    this.wrapped.send(message);
    console.log(`slack: ${message}`);
  }
}

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Notification channels",
  code: `interface Notifier {
  send(message: string): void;
}

class BaseNotifier implements Notifier {
  send(message: string) {
    console.log(\`base: \${message}\`);
  }
}

class EmailNotifier implements Notifier {
  constructor(private wrapped: Notifier) {}
  send(message: string) {
    this.wrapped.send(message);
    console.log(\`email: \${message}\`);
  }
}

class SmsNotifier implements Notifier {
  constructor(private wrapped: Notifier) {}
  send(message: string) {
    this.wrapped.send(message);
    console.log(\`sms: \${message}\`);
  }
}

class SlackNotifier implements Notifier {
  constructor(private wrapped: Notifier) {}
  send(message: string) {
    this.wrapped.send(message);
    console.log(\`slack: \${message}\`);
  }
}

new SlackNotifier(new SmsNotifier(new EmailNotifier(new BaseNotifier()))).send("Hello");`,
  explanation:
    "Combine delivery channels by wrapping a base notifier with channel-specific decorators.",
};