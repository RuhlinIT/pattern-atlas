import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const csharp: PatternLanguageExample = {
  language: "csharp",
  title: "Legacy notification service",
  code: "using System;\n\npublic interface INotifier\n{\n    void Send(string message);\n}\n\npublic class LegacyMessenger\n{\n    public void Deliver(MessagePayload payload)\n    {\n        Console.WriteLine($\"Legacy messenger sent: {payload.Body}\");\n    }\n}\n\npublic class MessagePayload\n{\n    public string Body { get; }\n\n    public MessagePayload(string body)\n    {\n        Body = body;\n    }\n}\n\npublic class NotificationAdapter : INotifier\n{\n    private readonly LegacyMessenger _messenger;\n\n    public NotificationAdapter(LegacyMessenger messenger)\n    {\n        _messenger = messenger;\n    }\n\n    public void Send(string message)\n    {\n        _messenger.Deliver(new MessagePayload(message));\n    }\n}\n\npublic class AlertService\n{\n    private readonly INotifier _notifier;\n\n    public AlertService(INotifier notifier)\n    {\n        _notifier = notifier;\n    }\n\n    public void TriggerAlert(string message)\n    {\n        _notifier.Send(message);\n    }\n}\n\nvar notifier = new NotificationAdapter(new LegacyMessenger());\nvar alerts = new AlertService(notifier);\nalerts.TriggerAlert(\"CPU threshold exceeded\");",
  explanation: "The C# adapter converts the app's simple send contract into the legacy messenger's payload-based deliver call.",
};
