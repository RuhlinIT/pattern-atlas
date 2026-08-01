import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Notification bridge",
  code: "import React, { useMemo } from \"react\";\n\n\ninterface NotificationSender {\n  send(message: string): string;\n}\n\n\nclass EmailSender implements NotificationSender {\n  send(message: string): string {\n    return `Email sent: ${message}`;\n  }\n}\n\n\nclass SmsSender implements NotificationSender {\n  send(message: string): string {\n    return `SMS sent: ${message}`;\n  }\n}\n\n\nabstract class Notification {\n  constructor(protected sender: NotificationSender) {}\n\n\n  abstract notify(message: string): string;\n}\n\n\nclass AlertNotification extends Notification {\n  notify(message: string): string {\n    return this.sender.send(`ALERT: ${message}`);\n  }\n}\n\n\nfunction NotificationPreview({ notification }: { notification: Notification }) {\n  return <p>{notification.notify(\"Server is down\")}</p>;\n}\n\n\nexport function App() {\n  const notification = useMemo(() => new AlertNotification(new EmailSender()), []);\n\n\n  return (\n    <main>\n      <h1>Notification Bridge</h1>\n      <NotificationPreview notification={notification} />\n    </main>\n  );\n}",
  explanation: "The React example bridges alert content to the email sender, keeping the notification logic separate from the delivery implementation.",
};
