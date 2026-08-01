import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const dotnet: PatternLanguageExample = {
  language: "dotnet",
  title: "Virtual image proxy",
  code: "using System;\nusing Microsoft.Extensions.DependencyInjection;\n\n\npublic interface IImage\n{\n    string Display();\n}\n\n\npublic class HighResolutionImage : IImage\n{\n    private readonly string _filename;\n\n\n    public HighResolutionImage(string filename)\n    {\n        _filename = filename;\n    }\n\n\n    public string Display()\n    {\n        return $\"Displaying high-resolution image: {_filename}\";\n    }\n}\n\n\npublic class ImageProxy : IImage\n{\n    private readonly string _filename;\n    private HighResolutionImage _realImage;\n\n\n    public ImageProxy(string filename)\n    {\n        _filename = filename;\n    }\n\n\n    public string Display()\n    {\n        if (_realImage == null)\n        {\n            _realImage = new HighResolutionImage(_filename);\n        }\n\n\n        return _realImage.Display();\n    }\n}\n\n\nvar services = new ServiceCollection();\nservices.AddSingleton<IImage>(new ImageProxy(\"vacation-photo.png\"));\n\n\nvar provider = services.BuildServiceProvider();\nvar image = provider.GetRequiredService<IImage>();\n\nConsole.WriteLine(\"Preview loaded\");\nConsole.WriteLine(image.Display());",
  explanation: "The .NET example uses a proxy registered in dependency injection to defer loading the real image until it is displayed.",
};
