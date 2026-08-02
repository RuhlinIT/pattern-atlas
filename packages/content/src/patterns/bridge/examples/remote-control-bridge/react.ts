import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "React remote bridge",
  code: `type Device = {
  on(): void;
  off(): void;
  setVolume(level: number): void;
};

function createRemote(device: Device) {
  return {
    powerOn: () => device.on(),
    powerOff: () => device.off(),
    volume: (level: number) => device.setVolume(level),
  };
}`,
  explanation:
    "A React app can keep the remote control API independent from the device implementation.",
};