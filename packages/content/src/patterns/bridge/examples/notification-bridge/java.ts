import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Notification bridge",
  code: "interface NotificationSender {\n    String send(String message);\n}\n\n\nclass EmailSender implements NotificationSender {\n    public String send(String message) {\n        return \"Email sent: \" + message;\n    }\n}\n\n\nclass SmsSender implements NotificationSender {\n    public String send(String message) {\n        return \"SMS sent: \" + message;\n    }\n}\n\n\nabstract class Notification {\n    protected NotificationSender sender;\n\n\n    public Notification(NotificationSender sender) {\n        this.sender = sender;\n    }\n\n\n    public abstract String notify(String message);\n}\n\n\nclass AlertNotification extends Notification {\n    public AlertNotification(NotificationSender sender) {\n        super(sender);\n    }\n\n\n    public String notify(String message) {\n        return sender.send(\"ALERT: \" + message);\n    }\n}\n\n\nAlertNotification alert = new AlertNotification(new EmailSender());\nSystem.out.println(alert.notify(\"Server is down\"));",
  explanation: "The bridge keeps notification content separate from the delivery mechanism, making it easy to swap email for SMS.",
};
