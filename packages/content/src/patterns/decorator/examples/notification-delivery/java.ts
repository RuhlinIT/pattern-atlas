import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Notification delivery",
  code: "interface Notifier {\n    void send(String message);\n}\n\nclass EmailNotifier implements Notifier {\n    public void send(String message) {\n        System.out.println(\"Email sent: \" + message);\n    }\n}\n\nabstract class NotifierDecorator implements Notifier {\n    protected final Notifier wrappee;\n\n    public NotifierDecorator(Notifier wrappee) {\n        this.wrappee = wrappee;\n    }\n\n    public void send(String message) {\n        wrappee.send(message);\n    }\n}\n\nclass LoggingNotifier extends NotifierDecorator {\n    public LoggingNotifier(Notifier wrappee) {\n        super(wrappee);\n    }\n\n    public void send(String message) {\n        System.out.println(\"Logging notification\");\n        super.send(message);\n    }\n}\n\nclass RetryNotifier extends NotifierDecorator {\n    public RetryNotifier(Notifier wrappee) {\n        super(wrappee);\n    }\n\n    public void send(String message) {\n        System.out.println(\"Retry policy applied\");\n        super.send(message);\n    }\n}\n\nNotifier notifier =\n    new RetryNotifier(new LoggingNotifier(new EmailNotifier()));\n\nnotifier.send(\"Deployment completed\");",
  explanation: "Each decorator wraps the same Notifier interface, so behavior can be stacked without changing the calling code.",
};
