import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Notification delivery",
  code: `interface Notifier {
    void send(String message);
}

class EmailNotifier implements Notifier {
    public void send(String message) {
        System.out.println("email: " + message);
    }
}

class LoggingNotifier implements Notifier {
    private final Notifier wrapped;
    LoggingNotifier(Notifier wrapped) { this.wrapped = wrapped; }
    public void send(String message) {
        System.out.println("log: " + message);
        wrapped.send(message);
    }
}
`,
  explanation: "Layer retry and logging around a base notifier while keeping the same send interface.",
};