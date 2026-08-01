import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Legacy notification service",
  code: "import React, { useMemo } from \"react\";\n\ninterface Notifier {\n  send(message: string): void;\n}\n\nclass LegacyMessenger {\n  deliver(payload: { body: string }): void {\n    console.log(`Legacy messenger sent: ${payload.body}`);\n  }\n}\n\nclass NotificationAdapter implements Notifier {\n  constructor(private messenger: LegacyMessenger) {}\n\n  send(message: string): void {\n    this.messenger.deliver({ body: message });\n  }\n}\n\nclass AlertService {\n  constructor(private notifier: Notifier) {}\n\n  triggerAlert(message: string): void {\n    this.notifier.send(message);\n  }\n}\n\nfunction AlertButton({ alerts }: { alerts: AlertService }) {\n  return (\n    <button onClick={() => alerts.triggerAlert(\"CPU threshold exceeded\")}>\n      Trigger alert\n    </button>\n  );\n}\n\nexport function App() {\n  const notifier = useMemo(() => new NotificationAdapter(new LegacyMessenger()), []);\n  const alerts = useMemo(() => new AlertService(notifier), [notifier]);\n\n  return (\n    <main>\n      <h1>Alerts</h1>\n      <AlertButton alerts={alerts} />\n    </main>\n  );\n}",
  explanation: "The React example keeps the alert service dependent on a simple notifier interface while the adapter translates that call into the legacy messenger's payload format.",
};
