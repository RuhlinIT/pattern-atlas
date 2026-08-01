import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Remote control actions",
  code: "import React, { useMemo, useState } from \"react\";\n\ninterface Command {\n  execute(): void;\n}\n\nclass Light {\n  on(): void {\n    console.log(\"Light turned on\");\n  }\n\n  off(): void {\n    console.log(\"Light turned off\");\n  }\n}\n\nclass LightOnCommand implements Command {\n  constructor(private light: Light) {}\n\n  execute(): void {\n    this.light.on();\n  }\n}\n\nclass LightOffCommand implements Command {\n  constructor(private light: Light) {}\n\n  execute(): void {\n    this.light.off();\n  }\n}\n\nfunction RemoteControl({ command }: { command: Command }) {\n  return <button onClick={() => command.execute()}>Press button</button>;\n}\n\nexport function App() {\n  const light = useMemo(() => new Light(), []);\n  const [isOn, setIsOn] = useState(true);\n\n  const command = useMemo(\n    () => (isOn ? new LightOnCommand(light) : new LightOffCommand(light)),\n    [isOn, light]\n  );\n\n  return (\n    <main>\n      <h1>Remote Control</h1>\n      <label>\n        <input\n          type=\"checkbox\"\n          checked={isOn}\n          onChange={(e) => setIsOn(e.target.checked)}\n        />\n        Use ON command\n      </label>\n      <RemoteControl command={command} />\n    </main>\n  );\n}",
  explanation: "The React example treats the button as the invoker, the light as the receiver, and each action as a command object that can be swapped at runtime.",
};
