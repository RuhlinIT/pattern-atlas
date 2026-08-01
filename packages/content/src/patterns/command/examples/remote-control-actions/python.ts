import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Remote control actions",
  code: "from abc import ABC, abstractmethod\n\nclass Command(ABC):\n    @abstractmethod\n    def execute(self) -> None:\n        pass\n\nclass Light:\n    def on(self) -> None:\n        print(\"Light turned on\")\n\n    def off(self) -> None:\n        print(\"Light turned off\")\n\nclass LightOnCommand(Command):\n    def __init__(self, light: Light) -> None:\n        self.light = light\n\n    def execute(self) -> None:\n        self.light.on()\n\nclass LightOffCommand(Command):\n    def __init__(self, light: Light) -> None:\n        self.light = light\n\n    def execute(self) -> None:\n        self.light.off()\n\nclass RemoteControl:\n    def __init__(self, command: Command) -> None:\n        self.command = command\n\n    def press_button(self) -> None:\n        self.command.execute()\n\nlight = Light()\n\non_remote = RemoteControl(LightOnCommand(light))\non_remote.press_button()\n\noff_remote = RemoteControl(LightOffCommand(light))\noff_remote.press_button()",
  explanation: "The remote can trigger different actions through interchangeable command objects while the light stays focused on device behavior.",
};
