import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Remote control actions",
  code: "interface Command {\n  execute(): void;\n}\n\nclass Light {\n  on(): void {\n    console.log(\"Light turned on\");\n  }\n\n  off(): void {\n    console.log(\"Light turned off\");\n  }\n}\n\nclass LightOnCommand implements Command {\n  constructor(private light: Light) {}\n\n  execute(): void {\n    this.light.on();\n  }\n}\n\nclass LightOffCommand implements Command {\n  constructor(private light: Light) {}\n\n  execute(): void {\n    this.light.off();\n  }\n}\n\nclass RemoteControl {\n  constructor(private command: Command) {}\n\n  pressButton(): void {\n    this.command.execute();\n  }\n}\n\nconst light = new Light();\n\nconst onRemote = new RemoteControl(new LightOnCommand(light));\nonRemote.pressButton();\n\nconst offRemote = new RemoteControl(new LightOffCommand(light));\noffRemote.pressButton();",
  explanation: "The remote is the invoker, the light is the receiver, and each button action is represented by a command object between them.",
};
