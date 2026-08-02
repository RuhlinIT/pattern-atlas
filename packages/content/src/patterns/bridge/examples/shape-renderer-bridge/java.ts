import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Java shape renderer bridge",
  code: `interface Renderer {
    void drawCircle(int x, int y, int radius);
    void drawRectangle(int x, int y, int width, int height);
}

abstract class Shape {
    protected Renderer renderer;

    Shape(Renderer renderer) {
        this.renderer = renderer;
    }

    abstract void draw();
}`,
  explanation:
    "Java can bridge shape abstraction and rendering implementation cleanly.",
};