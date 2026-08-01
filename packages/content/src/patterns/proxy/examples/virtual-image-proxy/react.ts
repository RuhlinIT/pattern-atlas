import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Virtual image proxy",
  code: "import React, { useMemo } from \"react\";\n\n\ninterface Image {\n  display(): string;\n}\n\n\nclass HighResolutionImage implements Image {\n  constructor(private filename: string) {}\n\n\n  display(): string {\n    return `Displaying high-resolution image: ${this.filename}`;\n  }\n}\n\n\nclass ImageProxy implements Image {\n  private realImage: HighResolutionImage | null = null;\n\n\n  constructor(private filename: string) {}\n\n\n  display(): string {\n    if (!this.realImage) {\n      this.realImage = new HighResolutionImage(this.filename);\n    }\n\n\n    return this.realImage.display();\n  }\n}\n\n\nfunction ImagePreview({ image }: { image: Image }) {\n  return <p>{image.display()}</p>;\n}\n\n\nexport function App() {\n  const image = useMemo(() => new ImageProxy(\"vacation-photo.png\"), []);\n\n\n  return (\n    <main>\n      <h1>Virtual Image Proxy</h1>\n      <ImagePreview image={image} />\n    </main>\n  );\n}",
  explanation: "The React example keeps the image loading behind a proxy so the UI can defer expensive image creation until display time.",
};
