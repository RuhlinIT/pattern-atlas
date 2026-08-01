import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const csharp: PatternLanguageExample = {
  language: "csharp",
  title: "Remote control bridge",
  code: "using System;\n\n\npublic interface IDevice\n{\n    string Power();\n    string SetChannel(int channel);\n}\n\n\npublic class Tv : IDevice\n{\n    public string Power()\n    {\n        return \"TV power toggled\";\n    }\n\n\n    public string SetChannel(int channel)\n    {\n        return $\"TV channel set to {channel}\";\n    }\n}\n\n\npublic class Radio : IDevice\n{\n    public string Power()\n    {\n        return \"Radio power toggled\";\n    }\n\n\n    public string SetChannel(int channel)\n    {\n        return $\"Radio station set to {channel}\";\n    }\n}\n\n\npublic abstract class RemoteControl\n{\n    protected readonly IDevice Device;\n\n\n    protected RemoteControl(IDevice device)\n    {\n        Device = device;\n    }\n\n\n    public string TogglePower()\n    {\n        return Device.Power();\n    }\n\n\n    public string SetChannel(int channel)\n    {\n        return Device.SetChannel(channel);\n    }\n}\n\n\npublic class BasicRemote : RemoteControl\n{\n    public BasicRemote(IDevice device) : base(device) { }\n}\n\n\nvar remote = new BasicRemote(new Tv());\nConsole.WriteLine(remote.TogglePower());\nConsole.WriteLine(remote.SetChannel(5));",
  explanation: "The bridge lets the remote control abstraction work with multiple device implementations without hardcoding them into the class hierarchy.",
};
