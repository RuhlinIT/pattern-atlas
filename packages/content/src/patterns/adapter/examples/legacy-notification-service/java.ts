import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Legacy notification service",
  code: "interface Notifier {\n    void send(String message);\n}\n\nclass LegacyMessenger {\n    public void deliver(MessagePayload payload) {\n        System.out.println(\"Legacy messenger sent: \" + payload.body);\n    }\n}\n\nclass MessagePayload {\n    public final String body;\n\n    public MessagePayload(String body) {\n        this.body = body;\n    }\n}\n\nclass NotificationAdapter implements Notifier {\n    private final LegacyMessenger messenger;\n\n    public NotificationAdapter(LegacyMessenger messenger) {\n        this.messenger = messenger;\n    }\n\n    public void send(String message) {\n        messenger.deliver(new MessagePayload(message));\n    }\n}\n\nclass AlertService {\n    private final Notifier notifier;\n\n    public AlertService(Notifier notifier) {\n        this.notifier = notifier;\n    }\n\n    public void triggerAlert(String message) {\n        notifier.send(message);\n    }\n}\n\nNotifier notifier = new NotificationAdapter(new LegacyMessenger());\nAlertService alerts = new AlertService(notifier);\nalerts.triggerAlert(\"CPU threshold exceeded\");",
  explanation: "The alert service works with its own expected interface while the adapter handles the legacy payload object required by the messenger.",
};
