import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Virtual image proxy",
  code: "interface Image {\n  display(): string;\n}\n\n\nclass HighResolutionImage implements Image {\n  constructor(private filename: string) {}\n\n\n  display(): string {\n    return `Displaying high-resolution image: ${this.filename}`;\n  }\n}\n\n\nclass ImageProxy implements Image {\n  private realImage: HighResolutionImage | null = null;\n\n\n  constructor(private filename: string) {}\n\n\n  display(): string {\n    if (!this.realImage) {\n      this.realImage = new HighResolutionImage(this.filename);\n    }\n\n\n    return this.realImage.display();\n  }\n}\n\n\nconst image = new ImageProxy(\"vacation-photo.png\");\nconsole.log(\"Preview loaded\");\nconsole.log(image.display());",
  explanation: "The virtual image proxy delays loading the real image until it is actually needed, which saves memory and startup time.",
};
