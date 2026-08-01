import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Remote control bridge",
  code: "interface Device {\n  power(): string;\n  setChannel(channel: number): string;\n}\n\n\nclass Tv implements Device {\n  power(): string {\n    return \"TV power toggled\";\n  }\n\n\n  setChannel(channel: number): string {\n    return `TV channel set to ${channel}`;\n  }\n}\n\n\nclass Radio implements Device {\n  power(): string {\n    return \"Radio power toggled\";\n  }\n\n\n  setChannel(channel: number): string {\n    return `Radio station set to ${channel}`;\n  }\n}\n\n\nabstract class RemoteControl {\n  constructor(protected device: Device) {}\n\n\n  togglePower(): string {\n    return this.device.power();\n  }\n\n\n  setChannel(channel: number): string {\n    return this.device.setChannel(channel);\n  }\n}\n\n\nclass BasicRemote extends RemoteControl {}\n\n\nconst tvRemote = new BasicRemote(new Tv());\nconsole.log(tvRemote.togglePower());\nconsole.log(tvRemote.setChannel(5));",
  explanation: "The remote control bridges the control abstraction to different devices, so the same remote can work with either a TV or a radio.",
};
