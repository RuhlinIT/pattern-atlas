import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Remote control actions",
  code: "import { Injectable } from '@angular/core';\n\n\n  abstract class Command {\n    abstract execute(): void;\n  }\n\n\n  @Injectable({ providedIn: 'root' })\n  class Light {\n    on(): void {\n      console.log('Light turned on');\n    }\n\n\n    off(): void {\n      console.log('Light turned off');\n    }\n  }\n\n\n  class LightOnCommand extends Command {\n    constructor(private light: Light) {\n      super();\n    }\n\n\n    execute(): void {\n      this.light.on();\n    }\n  }\n\n\n  class LightOffCommand extends Command {\n    constructor(private light: Light) {\n      super();\n    }\n\n\n    execute(): void {\n      this.light.off();\n    }\n  }\n\n\n  class RemoteControl {\n    constructor(private command: Command) {}\n\n\n    pressButton(): void {\n      this.command.execute();\n    }\n  }",
  explanation: "The Angular receiver service handles device behavior, while the remote invoker triggers interchangeable command objects through one shared interface.",
};
