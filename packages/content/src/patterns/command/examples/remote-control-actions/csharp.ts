import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const csharp: PatternLanguageExample = {
  language: "csharp",
  title: "Remote control actions",
  code: "using System;\n\npublic interface ICommand\n{\n    void Execute();\n}\n\npublic class Light\n{\n    public void On()\n    {\n        Console.WriteLine(\"Light turned on\");\n    }\n\n    public void Off()\n    {\n        Console.WriteLine(\"Light turned off\");\n    }\n}\n\npublic class LightOnCommand : ICommand\n{\n    private readonly Light _light;\n\n    public LightOnCommand(Light light)\n    {\n        _light = light;\n    }\n\n    public void Execute()\n    {\n        _light.On();\n    }\n}\n\npublic class LightOffCommand : ICommand\n{\n    private readonly Light _light;\n\n    public LightOffCommand(Light light)\n    {\n        _light = light;\n    }\n\n    public void Execute()\n    {\n        _light.Off();\n    }\n}\n\npublic class RemoteControl\n{\n    private readonly ICommand _command;\n\n    public RemoteControl(ICommand command)\n    {\n        _command = command;\n    }\n\n    public void PressButton()\n    {\n        _command.Execute();\n    }\n}\n\nvar light = new Light();\n\nvar onRemote = new RemoteControl(new LightOnCommand(light));\nonRemote.PressButton();\n\nvar offRemote = new RemoteControl(new LightOffCommand(light));\noffRemote.PressButton();",
  explanation: "The C# example keeps the remote as the invoker and the light as the receiver, with command objects in between to encapsulate each action.",
};
