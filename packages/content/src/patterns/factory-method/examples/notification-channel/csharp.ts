import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const csharp: PatternLanguageExample = {
  language: "csharp",
  title: "Notification channel",
  code: "using System;\n\npublic interface INotificationSender\n{\n    void Send(string recipient, string message);\n}\n\npublic class EmailSender : INotificationSender\n{\n    public void Send(string recipient, string message)\n    {\n        Console.WriteLine($\"Email to {recipient}: {message}\");\n    }\n}\n\npublic class SmsSender : INotificationSender\n{\n    public void Send(string recipient, string message)\n    {\n        Console.WriteLine($\"SMS to {recipient}: {message}\");\n    }\n}\n\npublic abstract class NotificationService\n{\n    public abstract INotificationSender CreateSender();\n\n    public void Notify(string recipient, string message)\n    {\n        var sender = CreateSender();\n        sender.Send(recipient, message);\n    }\n}\n\npublic class EmailNotificationService : NotificationService\n{\n    public override INotificationSender CreateSender()\n    {\n        return new EmailSender();\n    }\n}\n\npublic class SmsNotificationService : NotificationService\n{\n    public override INotificationSender CreateSender()\n    {\n        return new SmsSender();\n    }\n}\n\nNotificationService service = new EmailNotificationService();\nservice.Notify(\"alex@example.com\", \"Your report is ready.\");",
  explanation: "The C# example keeps the notification workflow fixed in the creator while subclasses use the factory method to choose the delivery channel.",
};
