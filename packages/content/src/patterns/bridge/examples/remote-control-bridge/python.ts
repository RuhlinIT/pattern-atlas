import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Remote control bridge",
  code: "from abc import ABC, abstractmethod\n\n\nclass Device(ABC):\n    @abstractmethod\n    def power(self) -> str:\n        pass\n\n\n    @abstractmethod\n    def set_channel(self, channel: int) -> str:\n        pass\n\n\nclass Tv(Device):\n    def power(self) -> str:\n        return \"TV power toggled\"\n\n\n    def set_channel(self, channel: int) -> str:\n        return f\"TV channel set to {channel}\"\n\n\nclass Radio(Device):\n    def power(self) -> str:\n        return \"Radio power toggled\"\n\n\n    def set_channel(self, channel: int) -> str:\n        return f\"Radio station set to {channel}\"\n\n\nclass RemoteControl:\n    def __init__(self, device: Device) -> None:\n        self.device = device\n\n\n    def toggle_power(self) -> str:\n        return self.device.power()\n\n\n    def set_channel(self, channel: int) -> str:\n        return self.device.set_channel(channel)\n\n\nremote = RemoteControl(Tv())\nprint(remote.toggle_power())\nprint(remote.set_channel(5))",
  explanation: "The remote control uses a bridge to call different device implementations without changing the control abstraction.",
};
