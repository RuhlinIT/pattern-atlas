import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Macro command sequence",
  code: `interface Command {
  execute(): void;
}

class MacroCommand implements Command {
  constructor(private commands: Command[]) {}
  execute() {
    for (const command of this.commands) command.execute();
  }
}

class SaveCommand implements Command {
  execute() {
    console.log("save");
  }
}

class FormatCommand implements Command {
  execute() {
    console.log("format");
  }
}

new MacroCommand([new SaveCommand(), new FormatCommand()]).execute();`,
  explanation:
    "Bundle several commands into one macro so a single trigger can run a whole sequence.",
};