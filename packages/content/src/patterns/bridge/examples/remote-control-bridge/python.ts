import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Python remote control bridge",
  code: `class Device:
    def on(self):
        raise NotImplementedError()

    def off(self):
        raise NotImplementedError()

    def set_volume(self, level):
        raise NotImplementedError()

class RemoteControl:
    def __init__(self, device):
        self.device = device

    def power_on(self):
        self.device.on()`,
  explanation:
    "Python can bridge remote actions and device behavior cleanly.",
};