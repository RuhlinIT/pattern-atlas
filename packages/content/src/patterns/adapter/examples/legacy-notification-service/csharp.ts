import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const csharp: PatternLanguageExample = {
  language: "csharp",
  title: "Legacy notification adapter",
  code: "public class LegacyNotificationAdapter : INotifier\n{\n    private readonly LegacyMailService _legacyService;\n\n\n    public LegacyNotificationAdapter(LegacyMailService legacyService)\n    {\n        _legacyService = legacyService;\n    }\n\n\n    public Task SendAsync(NotificationMessage message)\n    {\n        _legacyService.Deliver(new LegacyMailPayload\n        {\n            Recipient = message.To,\n            Headline = message.Subject,\n            Content = message.Body\n        });\n\n\n        return Task.CompletedTask;\n    }\n}",
  explanation:
    "C# adapters are a strong fit when wrapping old service classes behind interfaces.",
};