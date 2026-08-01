import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Virtual image proxy",
  code: "interface Image {\n    String display();\n}\n\n\nclass HighResolutionImage implements Image {\n    private final String filename;\n\n\n    public HighResolutionImage(String filename) {\n        this.filename = filename;\n    }\n\n\n    public String display() {\n        return \"Displaying high-resolution image: \" + filename;\n    }\n}\n\n\nclass ImageProxy implements Image {\n    private final String filename;\n    private HighResolutionImage realImage;\n\n\n    public ImageProxy(String filename) {\n        this.filename = filename;\n    }\n\n\n    public String display() {\n        if (realImage == null) {\n            realImage = new HighResolutionImage(filename);\n        }\n\n\n        return realImage.display();\n    }\n}\n\n\nImage image = new ImageProxy(\"vacation-photo.png\");\nSystem.out.println(\"Preview loaded\");\nSystem.out.println(image.display());",
  explanation: "The virtual proxy keeps the heavyweight image object out of memory until the client requests the full image.",
};
