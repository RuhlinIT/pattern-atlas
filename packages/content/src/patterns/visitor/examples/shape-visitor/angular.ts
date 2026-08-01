import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Shape visitor",
  code: "interface ShapeVisitor {\n  visitCircle(circle: Circle): void;\n  visitRectangle(rectangle: Rectangle): void;\n}\n\n\ninterface Shape {\n  accept(visitor: ShapeVisitor): void;\n}\n\n\nclass Circle implements Shape {\n  constructor(public radius: number) {}\n\n\n  accept(visitor: ShapeVisitor): void {\n    visitor.visitCircle(this);\n  }\n}\n\n\nclass Rectangle implements Shape {\n  constructor(\n    public width: number,\n    public height: number\n  ) {}\n\n\n  accept(visitor: ShapeVisitor): void {\n    visitor.visitRectangle(this);\n  }\n}\n\n\nclass AreaVisitor implements ShapeVisitor {\n  public total = 0;\n\n\n  visitCircle(circle: Circle): void {\n    this.total += Math.PI * circle.radius * circle.radius;\n  }\n\n\n  visitRectangle(rectangle: Rectangle): void {\n    this.total += rectangle.width * rectangle.height;\n  }\n}\n\n\nconst shapes: Shape[] = [\n  new Circle(3),\n  new Rectangle(4, 5)\n];\n\n\nconst visitor = new AreaVisitor();\nfor (const shape of shapes) {\n  shape.accept(visitor);\n}\n\n\nconsole.log(visitor.total);",
  explanation: "The Angular shape visitor keeps operation logic outside the shape types and applies it through accept().",
};
