import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Remote control bridge",
  code: "import React, { useMemo } from \"react\";\n\n\ninterface Device {\n  power(): string;\n  setChannel(channel: number): string;\n}\n\n\nclass Tv implements Device {\n  power(): string {\n    return \"TV power toggled\";\n  }\n\n\n  setChannel(channel: number): string {\n    return `TV channel set to ${channel}`;\n  }\n}\n\n\nclass Radio implements Device {\n  power(): string {\n    return \"Radio power toggled\";\n  }\n\n\n  setChannel(channel: number): string {\n    return `Radio station set to ${channel}`;\n  }\n}\n\n\nabstract class RemoteControl {\n  constructor(protected device: Device) {}\n\n\n  togglePower(): string {\n    return this.device.power();\n  }\n\n\n  setChannel(channel: number): string {\n    return this.device.setChannel(channel);\n  }\n}\n\n\nclass BasicRemote extends RemoteControl {}\n\n\nfunction RemotePreview({ remote }: { remote: RemoteControl }) {\n  return (\n    <div>\n      <p>{remote.togglePower()}</p>\n      <p>{remote.setChannel(5)}</p>\n    </div>\n  );\n}\n\n\nexport function App() {\n  const remote = useMemo(() => new BasicRemote(new Tv()), []);\n\n\n  return (\n    <main>\n      <h1>Remote Control</h1>\n      <RemotePreview remote={remote} />\n    </main>\n  );\n}",
  explanation: "The React example keeps the remote abstraction separate from the device implementation, which makes it easy to swap devices in the UI.",
};
