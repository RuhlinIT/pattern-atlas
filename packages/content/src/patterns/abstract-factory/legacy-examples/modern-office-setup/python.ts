import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Python office factory",
  code: `class Desk:
    def __init__(self, style, material):
        self.style = style
        self.material = material

class Chair:
    def __init__(self, style, material):
        self.style = style
        self.material = material

class Cabinet:
    def __init__(self, style, material):
        self.style = style
        self.material = material

class ModernOfficeFactory:
    def create_desk(self):
        return Desk("modern", "aluminum")

    def create_chair(self):
        return Chair("modern", "mesh")

    def create_cabinet(self):
        return Cabinet("modern", "steel")`,
  explanation:
    "Python keeps the office family together by creating theme-aligned products through one factory.",
};