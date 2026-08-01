import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Notification delivery",
  code: "interface NotificationStrategy {\n    void send(String message);\n}\n\nclass EmailNotification implements NotificationStrategy {\n    public void send(String message) {\n        System.out.println(\"Email: \" + message);\n    }\n}\n\nclass SmsNotification implements NotificationStrategy {\n    public void send(String message) {\n        System.out.println(\"SMS: \" + message);\n    }\n}\n\nclass NotificationService {\n    private final NotificationStrategy strategy;\n\n    public NotificationService(NotificationStrategy strategy) {\n        this.strategy = strategy;\n    }\n\n    public void notify(String message) {\n        strategy.send(message);\n    }\n}\n\nNotificationService notifier = new NotificationService(new SmsNotification());\nnotifier.notify(\"Deployment completed\");",
  explanation: "Channel-specific logic is isolated behind the notification interface, making new delivery methods easier to add.",
};
