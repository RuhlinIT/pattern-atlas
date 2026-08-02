import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Remote control bridge",
  code: `type DeviceState = "on" | "off";

interface Device {
  on(): void;
  off(): void;
  setVolume(level: number): void;
}

class RemoteControl {
  constructor(private device: Device) {}

  powerOn() {
    this.device.on();
  }

  powerOff() {
    this.device.off();
  }

  volume(level: number) {
    this.device.setVolume(level);
  }
}`,
  explanation:
    "The remote stays separate from the device implementation, so new devices can be added without changing the control logic.",
};