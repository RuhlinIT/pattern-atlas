import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const reactNative: PatternLanguageExample = {
  language: "react-native",
  title: "Virtual image proxy",
  code: "import React, { useMemo } from \"react\";\nimport { SafeAreaView, Text, View } from \"react-native\";\n\n\ninterface Image {\n  display(): string;\n}\n\n\nclass HighResolutionImage implements Image {\n  constructor(private filename: string) {}\n\n\n  display(): string {\n    return `Displaying high-resolution image: ${this.filename}`;\n  }\n}\n\n\nclass ImageProxy implements Image {\n  private realImage: HighResolutionImage | null = null;\n\n\n  constructor(private filename: string) {}\n\n\n  display(): string {\n    if (!this.realImage) {\n      this.realImage = new HighResolutionImage(this.filename);\n    }\n\n\n    return this.realImage.display();\n  }\n}\n\n\nfunction ImagePreview({ image }: { image: Image }) {\n  return (\n    <View>\n      <Text>{image.display()}</Text>\n    </View>\n  );\n}\n\n\nexport function App() {\n  const image = useMemo(() => new ImageProxy(\"vacation-photo.png\"), []);\n\n\n  return (\n    <SafeAreaView style={{ flex: 1, justifyContent: \"center\", padding: 24 }}>\n      <View style={{ gap: 16 }}>\n        <Text style={{ fontSize: 24, fontWeight: \"600\" }}>Virtual Image Proxy</Text>\n        <ImagePreview image={image} />\n      </View>\n    </SafeAreaView>\n  );\n}",
  explanation: "The React Native version uses the proxy to delay loading the heavy image until the mobile UI actually needs it.",
};
