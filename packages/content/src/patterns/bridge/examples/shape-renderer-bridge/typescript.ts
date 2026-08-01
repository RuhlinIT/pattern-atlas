import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Shape renderer bridge",
  code: "interface Renderer {\n  renderCircle(radius: number): string;\n  renderSquare(side: number): string;\n}\n\n\nclass VectorRenderer implements Renderer {\n  renderCircle(radius: number): string {\n    return `Drawing a vector circle with radius ${radius}`;\n  }\n\n\n  renderSquare(side: number): string {\n    return `Drawing a vector square with side ${side}`;\n  }\n}\n\n\nclass RasterRenderer implements Renderer {\n  renderCircle(radius: number): string {\n    return `Drawing a raster circle with radius ${radius}`;\n  }\n\n\n  renderSquare(side: number): string {\n    return `Drawing a raster square with side ${side}`;\n  }\n}\n\n\nabstract class Shape {\n  constructor(protected renderer: Renderer) {}\n\n\n  abstract draw(): string;\n}\n\n\nclass Circle extends Shape {\n  constructor(renderer: Renderer, private radius: number) {\n    super(renderer);\n  }\n\n\n  draw(): string {\n    return this.renderer.renderCircle(this.radius);\n  }\n}\n\n\nclass Square extends Shape {\n  constructor(renderer: Renderer, private side: number) {\n    super(renderer);\n  }\n\n\n  draw(): string {\n    return this.renderer.renderSquare(this.side);\n  }\n}\n\n\nconst circle = new Circle(new VectorRenderer(), 10);\nconsole.log(circle.draw());",
  explanation: "The shape abstraction bridges to different renderers, so the same shape classes can be drawn with vector or raster implementations.",
};
