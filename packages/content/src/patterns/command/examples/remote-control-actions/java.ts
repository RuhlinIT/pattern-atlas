import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Remote control actions",
  code: "interface Command {\n    void execute();\n}\n\nclass Light {\n    public void on() {\n        System.out.println(\"Light turned on\");\n    }\n\n    public void off() {\n        System.out.println(\"Light turned off\");\n    }\n}\n\nclass LightOnCommand implements Command {\n    private final Light light;\n\n    public LightOnCommand(Light light) {\n        this.light = light;\n    }\n\n    public void execute() {\n        light.on();\n    }\n}\n\nclass LightOffCommand implements Command {\n    private final Light light;\n\n    public LightOffCommand(Light light) {\n        this.light = light;\n    }\n\n    public void execute() {\n        light.off();\n    }\n}\n\nclass RemoteControl {\n    private final Command command;\n\n    public RemoteControl(Command command) {\n        this.command = command;\n    }\n\n    public void pressButton() {\n        command.execute();\n    }\n}\n\nLight light = new Light();\n\nRemoteControl onRemote = new RemoteControl(new LightOnCommand(light));\nonRemote.pressButton();\n\nRemoteControl offRemote = new RemoteControl(new LightOffCommand(light));\noffRemote.pressButton();",
  explanation: "The invoker triggers commands through a common interface, so it does not need to know anything about the device APIs it is controlling.",
};
