import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Virtual image proxy",
  code: "from abc import ABC, abstractmethod\n\n\nclass Image(ABC):\n    @abstractmethod\n    def display(self) -> str:\n        pass\n\n\nclass HighResolutionImage(Image):\n    def __init__(self, filename: str) -> None:\n        self.filename = filename\n\n\n    def display(self) -> str:\n        return f\"Displaying high-resolution image: {self.filename}\"\n\n\nclass ImageProxy(Image):\n    def __init__(self, filename: str) -> None:\n        self.filename = filename\n        self.real_image: HighResolutionImage | None = None\n\n\n    def display(self) -> str:\n        if self.real_image is None:\n            self.real_image = HighResolutionImage(self.filename)\n        return self.real_image.display()\n\n\nimage = ImageProxy(\"vacation-photo.png\")\nprint(\"Preview loaded\")\nprint(image.display())",
  explanation: "The image proxy acts as a lightweight placeholder and creates the expensive image object only when display is called.",
};
