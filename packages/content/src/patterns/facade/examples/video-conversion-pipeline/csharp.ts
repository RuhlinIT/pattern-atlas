import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const csharp: PatternLanguageExample = {
  language: "csharp",
  title: "Video conversion pipeline",
  code: "using System;\n\npublic class VideoReader\n{\n    public void Read(string fileName)\n    {\n        Console.WriteLine($\"Reading {fileName}\");\n    }\n}\n\npublic class VideoDecoder\n{\n    public void Decode()\n    {\n        Console.WriteLine(\"Decoding video stream\");\n    }\n}\n\npublic class VideoEncoder\n{\n    public void Encode(string format)\n    {\n        Console.WriteLine($\"Encoding to {format}\");\n    }\n}\n\npublic class VideoWriter\n{\n    public void Write(string outputFile)\n    {\n        Console.WriteLine($\"Writing output to {outputFile}\");\n    }\n}\n\npublic class VideoConversionFacade\n{\n    private readonly VideoReader _reader = new();\n    private readonly VideoDecoder _decoder = new();\n    private readonly VideoEncoder _encoder = new();\n    private readonly VideoWriter _writer = new();\n\n    public void Convert(string inputFile, string outputFile, string format)\n    {\n        _reader.Read(inputFile);\n        _decoder.Decode();\n        _encoder.Encode(format);\n        _writer.Write(outputFile);\n    }\n}\n\nvar converter = new VideoConversionFacade();\nconverter.Convert(\"demo.mov\", \"demo.mp4\", \"mp4\");",
  explanation: "The C# example gives the client one conversion method while the facade coordinates the subsystem steps in the correct order.",
};
