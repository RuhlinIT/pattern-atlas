import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Command interpreter",
  code: "interface CommandExpression {\n  interpret(): string;\n}\n\n\nclass TextCommand implements CommandExpression {\n  constructor(private value: string) {}\n\n\n  interpret(): string {\n    return this.value;\n  }\n}\n\n\nclass UppercaseCommand implements CommandExpression {\n  constructor(private expression: CommandExpression) {}\n\n\n  interpret(): string {\n    return this.expression.interpret().toUpperCase();\n  }\n}\n\n\nclass TrimCommand implements CommandExpression {\n  constructor(private expression: CommandExpression) {}\n\n\n  interpret(): string {\n    return this.expression.interpret().trim();\n  }\n}\n\n\nclass ReplaceCommand implements CommandExpression {\n  constructor(\n    private expression: CommandExpression,\n    private searchValue: string,\n    private replaceValue: string\n  ) {}\n\n\n  interpret(): string {\n    return this.expression\n      .interpret()\n      .replaceAll(this.searchValue, this.replaceValue);\n  }\n}\n\n\nconst command = new ReplaceCommand(\n  new UppercaseCommand(new TrimCommand(new TextCommand(\"  hello world  \"))),\n  \"WORLD\",\n  \"TEAM\"\n);\n\n\nconsole.log(command.interpret());",
  explanation: "The command interpreter chains small operations together so a command string can be transformed step by step.",
};
