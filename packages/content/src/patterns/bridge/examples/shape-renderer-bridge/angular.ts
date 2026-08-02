import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Angular shape renderer bridge",
  code: `export interface Renderer {
  drawCircle(x: number, y: number, radius: number): void;
  drawRectangle(x: number, y: number, width: number, height: number): void;
}

export abstract class Shape {
  constructor(protected renderer: Renderer) {}
  abstract draw(): void;
}`,
  explanation:
    "Angular services or models can bridge shapes and rendering engines while keeping both extensible.",
};