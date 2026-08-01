import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Expression interpreter",
  code: "interface Expression {\n  interpret(): number;\n}\n\n\nclass NumberExpression implements Expression {\n  constructor(private value: number) {}\n\n\n  interpret(): number {\n    return this.value;\n  }\n}\n\n\nclass AddExpression implements Expression {\n  constructor(private left: Expression, private right: Expression) {}\n\n\n  interpret(): number {\n    return this.left.interpret() + this.right.interpret();\n  }\n}\n\n\nclass SubtractExpression implements Expression {\n  constructor(private left: Expression, private right: Expression) {}\n\n\n  interpret(): number {\n    return this.left.interpret() - this.right.interpret();\n  }\n}\n\n\nclass MultiplyExpression implements Expression {\n  constructor(private left: Expression, private right: Expression) {}\n\n\n  interpret(): number {\n    return this.left.interpret() * this.right.interpret();\n  }\n}\n\n\nconst expression = new SubtractExpression(\n  new AddExpression(new NumberExpression(5), new NumberExpression(3)),\n  new MultiplyExpression(new NumberExpression(2), new NumberExpression(4))\n);\n\n\nconsole.log(expression.interpret());",
  explanation: "The Angular example demonstrates an expression tree where each node knows how to interpret its part of the grammar.",
};
