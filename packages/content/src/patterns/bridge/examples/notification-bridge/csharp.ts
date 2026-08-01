import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const csharp: PatternLanguageExample = {
  language: "csharp",
  title: "Notification bridge",
  code: "using System;\n\n\npublic interface INotificationSender\n{\n    string Send(string message);\n}\n\n\npublic class EmailSender : INotificationSender\n{\n    public string Send(string message)\n    {\n        return $\"Email sent: {message}\";\n    }\n}\n\n\npublic class SmsSender : INotificationSender\n{\n    public string Send(string message)\n    {\n        return $\"SMS sent: {message}\";\n    }\n}\n\n\npublic abstract class Notification\n{\n    protected readonly INotificationSender Sender;\n\n\n    protected Notification(INotificationSender sender)\n    {\n        Sender = sender;\n    }\n\n\n    public abstract string Notify(string message);\n}\n\n\npublic class AlertNotification : Notification\n{\n    public AlertNotification(INotificationSender sender) : base(sender) { }\n\n\n    public override string Notify(string message)\n    {\n        return Sender.Send($\"ALERT: {message}\");\n    }\n}\n\n\nvar alert = new AlertNotification(new EmailSender());\nConsole.WriteLine(alert.Notify(\"Server is down\"));",
  explanation: "The bridge keeps notification content separate from the sender implementation so either channel can be swapped in cleanly.",
};
