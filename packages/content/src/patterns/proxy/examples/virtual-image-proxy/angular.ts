import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Virtual image proxy",
  code: "interface Image {\n  display(): string;\n}\n\n\nclass HighResolutionImage implements Image {\n  constructor(private filename: string) {}\n\n\n  display(): string {\n    return `Displaying high-resolution image: ${this.filename}`;\n  }\n}\n\n\nclass ImageProxy implements Image {\n  private realImage: HighResolutionImage | null = null;\n\n\n  constructor(private filename: string) {}\n\n\n  display(): string {\n    if (!this.realImage) {\n      this.realImage = new HighResolutionImage(this.filename);\n    }\n\n\n    return this.realImage.display();\n  }\n}\n\n\nconst image = new ImageProxy(\"vacation-photo.png\");\nconsole.log(\"Preview loaded\");\nconsole.log(image.display());",
  explanation: "The Angular example uses a virtual proxy so the UI can show placeholders without paying the cost of loading the full image immediately.",
};
