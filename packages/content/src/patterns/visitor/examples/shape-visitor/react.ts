import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Shape visitor",
  code: "import React, { useMemo } from \"react\";\n\n\ninterface ShapeVisitor {\n  visitCircle(circle: Circle): void;\n  visitRectangle(rectangle: Rectangle): void;\n}\n\n\ninterface Shape {\n  accept(visitor: ShapeVisitor): void;\n}\n\n\nclass Circle implements Shape {\n  constructor(public radius: number) {}\n\n\n  accept(visitor: ShapeVisitor): void {\n    visitor.visitCircle(this);\n  }\n}\n\n\nclass Rectangle implements Shape {\n  constructor(\n    public width: number,\n    public height: number\n  ) {}\n\n\n  accept(visitor: ShapeVisitor): void {\n    visitor.visitRectangle(this);\n  }\n}\n\n\nclass AreaVisitor implements ShapeVisitor {\n  public total = 0;\n\n\n  visitCircle(circle: Circle): void {\n    this.total += Math.PI * circle.radius * circle.radius;\n  }\n\n\n  visitRectangle(rectangle: Rectangle): void {\n    this.total += rectangle.width * rectangle.height;\n  }\n}\n\n\nfunction ShapePreview() {\n  return <p>Shape visitor ready</p>;\n}\n\n\nexport function App() {\n  const visitor = useMemo(() => new AreaVisitor(), []);\n\n\n  useMemo(() => {\n    [new Circle(3), new Rectangle(4, 5)].forEach((shape) => shape.accept(visitor));\n  }, [visitor]);\n\n\n  return (\n    <main>\n      <h1>Shape Visitor</h1>\n      <ShapePreview />\n    </main>\n  );\n}",
  explanation: "The React example uses a visitor to perform shape analysis while the UI remains separate from the object model.",
};
