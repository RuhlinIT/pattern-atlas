import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Angular remote bridge",
  code: `export interface Device {
  on(): void;
  off(): void;
  setVolume(level: number): void;
}

export class RemoteControl {
  constructor(private device: Device) {}

  powerOn() {
    this.device.on();
  }
}`,
  explanation:
    "Angular services can separate remote commands from the device implementation.",
};