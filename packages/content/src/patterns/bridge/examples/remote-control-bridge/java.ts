import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Remote control bridge",
  code: "interface Device {\n    String power();\n    String setChannel(int channel);\n}\n\n\nclass Tv implements Device {\n    public String power() {\n        return \"TV power toggled\";\n    }\n\n\n    public String setChannel(int channel) {\n        return \"TV channel set to \" + channel;\n    }\n}\n\n\nclass Radio implements Device {\n    public String power() {\n        return \"Radio power toggled\";\n    }\n\n\n    public String setChannel(int channel) {\n        return \"Radio station set to \" + channel;\n    }\n}\n\n\nabstract class RemoteControl {\n    protected Device device;\n\n\n    public RemoteControl(Device device) {\n        this.device = device;\n    }\n\n\n    public String togglePower() {\n        return device.power();\n    }\n\n\n    public String setChannel(int channel) {\n        return device.setChannel(channel);\n    }\n}\n\n\nclass BasicRemote extends RemoteControl {\n    public BasicRemote(Device device) {\n        super(device);\n    }\n}\n\n\nBasicRemote tvRemote = new BasicRemote(new Tv());\nSystem.out.println(tvRemote.togglePower());\nSystem.out.println(tvRemote.setChannel(5));",
  explanation: "The bridge separates the remote control API from the underlying device implementation so both can evolve independently.",
};
