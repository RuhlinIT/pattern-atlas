import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const csharp: PatternLanguageExample = {
  language: "csharp",
  title: "Virtual image proxy",
  code: "using System;\n\n\npublic interface IImage\n{\n    string Display();\n}\n\n\npublic class HighResolutionImage : IImage\n{\n    private readonly string _filename;\n\n\n    public HighResolutionImage(string filename)\n    {\n        _filename = filename;\n    }\n\n\n    public string Display()\n    {\n        return $\"Displaying high-resolution image: {_filename}\";\n    }\n}\n\n\npublic class ImageProxy : IImage\n{\n    private readonly string _filename;\n    private HighResolutionImage _realImage;\n\n\n    public ImageProxy(string filename)\n    {\n        _filename = filename;\n    }\n\n\n    public string Display()\n    {\n        if (_realImage == null)\n        {\n            _realImage = new HighResolutionImage(_filename);\n        }\n\n\n        return _realImage.Display();\n    }\n}\n\n\nvar image = new ImageProxy(\"vacation-photo.png\");\nConsole.WriteLine(\"Preview loaded\");\nConsole.WriteLine(image.Display());",
  explanation: "The C# virtual proxy postpones creating the expensive image object until the client requests it.",
};
