import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "React shape renderer bridge",
  code: `type Renderer = {
  drawCircle(x: number, y: number, radius: number): void;
};

function createCircle(renderer: Renderer, x: number, y: number, radius: number) {
  return {
    draw: () => renderer.drawCircle(x, y, radius),
  };
}`,
  explanation:
    "React can keep shape creation separate from the rendering backend.",
};