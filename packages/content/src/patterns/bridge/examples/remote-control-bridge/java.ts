import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Java remote control bridge",
  code: `interface Device {
    void on();
    void off();
    void setVolume(int level);
}

class RemoteControl {
    private final Device device;

    RemoteControl(Device device) {
        this.device = device;
    }
}`,
  explanation:
    "Java can separate a remote abstraction from the concrete device drivers it controls.",
};