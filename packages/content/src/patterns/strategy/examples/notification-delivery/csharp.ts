import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const csharp: PatternLanguageExample = {
  language: "csharp",
  title: "Notification delivery",
  code: "using System;\n\npublic interface INotificationStrategy\n{\n    void Send(string message);\n}\n\npublic class EmailNotification : INotificationStrategy\n{\n    public void Send(string message)\n    {\n        Console.WriteLine($\"Email: {message}\");\n    }\n}\n\npublic class SmsNotification : INotificationStrategy\n{\n    public void Send(string message)\n    {\n        Console.WriteLine($\"SMS: {message}\");\n    }\n}\n\npublic class NotificationService\n{\n    private readonly INotificationStrategy _strategy;\n\n    public NotificationService(INotificationStrategy strategy)\n    {\n        _strategy = strategy;\n    }\n\n    public void Notify(string message)\n    {\n        _strategy.Send(message);\n    }\n}\n\nvar notifier = new NotificationService(new SmsNotification());\nnotifier.Notify(\"Deployment completed\");",
  explanation: "The C# example keeps the notification workflow stable while the selected strategy supplies the channel-specific send behavior.",
};
