import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Notification delivery",
  code: "import React, { useMemo } from \"react\";\n\ninterface NotificationStrategy {\n  send(message: string): void;\n}\n\nclass EmailNotification implements NotificationStrategy {\n  send(message: string): void {\n    console.log(`Email: ${message}`);\n  }\n}\n\nclass SmsNotification implements NotificationStrategy {\n  send(message: string): void {\n    console.log(`SMS: ${message}`);\n  }\n}\n\nclass NotificationService {\n  constructor(private strategy: NotificationStrategy) {}\n\n  notify(message: string): void {\n    this.strategy.send(message);\n  }\n}\n\nfunction NotifyButton({ service }: { service: NotificationService }) {\n  return <button onClick={() => service.notify(\"Deployment completed\")}>Send notification</button>;\n}\n\nexport function App() {\n  const notifier = useMemo(() => new NotificationService(new SmsNotification()), []);\n\n  return (\n    <main>\n      <h1>Notification Delivery</h1>\n      <NotifyButton service={notifier} />\n    </main>\n  );\n}",
  explanation: "The React example keeps the notification service focused on orchestration while the selected strategy handles the channel-specific send behavior.",
};
