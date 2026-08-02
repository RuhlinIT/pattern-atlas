import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Shape renderer bridge",
  code: `interface Renderer {
  drawCircle(x: number, y: number, radius: number): void;
  drawRectangle(x: number, y: number, width: number, height: number): void;
}

abstract class Shape {
  constructor(protected renderer: Renderer) {}
  abstract draw(): void;
}

class Circle extends Shape {
  constructor(renderer: Renderer, private x: number, private y: number, private radius: number) {
    super(renderer);
  }

  draw() {
    this.renderer.drawCircle(this.x, this.y, this.radius);
  }
}`,
  explanation:
    "The shape abstraction stays separate from the renderer implementation, so new output backends can be added without changing shape classes.",
};