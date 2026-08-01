import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Remote control bridge",
  code: "interface Device {\n  power(): string;\n  setChannel(channel: number): string;\n}\n\n\nclass Tv implements Device {\n  power(): string {\n    return \"TV power toggled\";\n  }\n\n\n  setChannel(channel: number): string {\n    return `TV channel set to ${channel}`;\n  }\n}\n\n\nclass Radio implements Device {\n  power(): string {\n    return \"Radio power toggled\";\n  }\n\n\n  setChannel(channel: number): string {\n    return `Radio station set to ${channel}`;\n  }\n}\n\n\nabstract class RemoteControl {\n  constructor(protected device: Device) {}\n\n\n  togglePower(): string {\n    return this.device.power();\n  }\n\n\n  setChannel(channel: number): string {\n    return this.device.setChannel(channel);\n  }\n}\n\n\nclass BasicRemote extends RemoteControl {}\n\n\nconst remote = new BasicRemote(new Tv());\nconsole.log(remote.togglePower());\nconsole.log(remote.setChannel(5));",
  explanation: "The Angular example bridges the remote control abstraction to its device implementation so the UI logic stays stable across hardware types.",
};
