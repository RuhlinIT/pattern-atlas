import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Command interpreter",
  code: "interface CommandExpression {\n  interpret(): string;\n}\n\n\nclass TextCommand implements CommandExpression {\n  constructor(private value: string) {}\n\n\n  interpret(): string {\n    return this.value;\n  }\n}\n\n\nclass UppercaseCommand implements CommandExpression {\n  constructor(private expression: CommandExpression) {}\n\n\n  interpret(): string {\n    return this.expression.interpret().toUpperCase();\n  }\n}\n\n\nclass TrimCommand implements CommandExpression {\n  constructor(private expression: CommandExpression) {}\n\n\n  interpret(): string {\n    return this.expression.interpret().trim();\n  }\n}\n\n\nclass ReplaceCommand implements CommandExpression {\n  constructor(\n    private expression: CommandExpression,\n    private searchValue: string,\n    private replaceValue: string\n  ) {}\n\n\n  interpret(): string {\n    return this.expression.interpret().replaceAll(this.searchValue, this.replaceValue);\n  }\n}\n\n\nconst command = new ReplaceCommand(\n  new UppercaseCommand(new TrimCommand(new TextCommand(\"  hello world  \"))),\n  \"WORLD\",\n  \"TEAM\"\n);\n\n\nconsole.log(command.interpret());",
  explanation: "The Angular example interprets a small command language by composing string operations as expression objects.",
};
