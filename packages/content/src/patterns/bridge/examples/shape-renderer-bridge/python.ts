import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Python shape renderer bridge",
  code: `class Renderer:
    def draw_circle(self, x, y, radius):
        raise NotImplementedError()

    def draw_rectangle(self, x, y, width, height):
        raise NotImplementedError()

class Shape:
    def __init__(self, renderer):
        self.renderer = renderer

    def draw(self):
        raise NotImplementedError()`,
  explanation:
    "Python keeps rendering details in a separate implementation object, while shape behavior remains stable.",
};