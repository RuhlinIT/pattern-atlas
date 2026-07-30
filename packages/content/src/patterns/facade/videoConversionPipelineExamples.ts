import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const videoConversionPipelineExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `class VideoReader {
                        read(fileName: string): void {
                            console.log(\`Reading \${fileName}\`);
                        }
                    }

                    class VideoDecoder {
                        decode(): void {
                            console.log("Decoding video stream");
                        }
                    }

                    class VideoEncoder {
                        encode(format: string): void {
                            console.log(\`Encoding to \${format}\`);
                        }
                    }

                    class VideoWriter {
                        write(outputFile: string): void {
                            console.log(\`Writing output to \${outputFile}\`);
                        }
                    }

                    class VideoConversionFacade {
                        constructor(
                            private reader = new VideoReader(),
                            private decoder = new VideoDecoder(),
                            private encoder = new VideoEncoder(),
                            private writer = new VideoWriter(),
                        ) {}

                        convert(inputFile: string, outputFile: string, format: string): void {
                            this.reader.read(inputFile);
                            this.decoder.decode();
                            this.encoder.encode(format);
                            this.writer.write(outputFile);
                        }
                    }

                    const converter = new VideoConversionFacade();
                    converter.convert("demo.mov", "demo.mp4", "mp4");`,
    explanation:
      "The facade wraps the multi-step conversion pipeline so the client only sees one simple conversion API.",
  },
  {
    language: "Java",
    code: `class VideoReader {
                        public void read(String fileName) {
                            System.out.println("Reading " + fileName);
                        }
                    }

                    class VideoDecoder {
                        public void decode() {
                            System.out.println("Decoding video stream");
                        }
                    }

                    class VideoEncoder {
                        public void encode(String format) {
                            System.out.println("Encoding to " + format);
                        }
                    }

                    class VideoWriter {
                        public void write(String outputFile) {
                            System.out.println("Writing output to " + outputFile);
                        }
                    }

                    class VideoConversionFacade {
                        private final VideoReader reader = new VideoReader();
                        private final VideoDecoder decoder = new VideoDecoder();
                        private final VideoEncoder encoder = new VideoEncoder();
                        private final VideoWriter writer = new VideoWriter();

                        public void convert(String inputFile, String outputFile, String format) {
                            reader.read(inputFile);
                            decoder.decode();
                            encoder.encode(format);
                            writer.write(outputFile);
                        }
                    }

                    VideoConversionFacade converter = new VideoConversionFacade();
                    converter.convert("demo.mov", "demo.mp4", "mp4");`,
    explanation:
      "The facade shields the client from the underlying video subsystem and exposes a smaller, task-oriented interface.",
  },
  {
    language: "Python",
    code: `class VideoReader:
                        def read(self, file_name: str) -> None:
                            print(f"Reading {file_name}")

                    class VideoDecoder:
                        def decode(self) -> None:
                            print("Decoding video stream")

                    class VideoEncoder:
                        def encode(self, format: str) -> None:
                            print(f"Encoding to {format}")

                    class VideoWriter:
                        def write(self, output_file: str) -> None:
                            print(f"Writing output to {output_file}")

                    class VideoConversionFacade:
                        def __init__(self) -> None:
                            self.reader = VideoReader()
                            self.decoder = VideoDecoder()
                            self.encoder = VideoEncoder()
                            self.writer = VideoWriter()

                        def convert(self, input_file: str, output_file: str, format: str) -> None:
                            self.reader.read(input_file)
                            self.decoder.decode()
                            self.encoder.encode(format)
                            self.writer.write(output_file)

                    converter = VideoConversionFacade()
                    converter.convert("demo.mov", "demo.mp4", "mp4")`,
    explanation:
      "The facade provides a single conversion call while keeping the pipeline steps inside the subsystem boundary.",
  },
  {
    language: "Angular",
    code: `import { Injectable } from '@angular/core';


                    @Injectable({ providedIn: 'root' })
                    class VideoReader {
                        read(fileName: string): void {
                            console.log(\`Reading \${fileName}\`);
                        }
                    }


                    @Injectable({ providedIn: 'root' })
                    class VideoDecoder {
                        decode(): void {
                            console.log('Decoding video stream');
                        }
                    }


                    @Injectable({ providedIn: 'root' })
                    class VideoEncoder {
                        encode(format: string): void {
                            console.log(\`Encoding to \${format}\`);
                        }
                    }


                    @Injectable({ providedIn: 'root' })
                    class VideoWriter {
                        write(outputFile: string): void {
                            console.log(\`Writing output to \${outputFile}\`);
                        }
                    }


                    @Injectable({ providedIn: 'root' })
                    class VideoConversionFacade {
                        constructor(
                            private reader: VideoReader,
                            private decoder: VideoDecoder,
                            private encoder: VideoEncoder,
                            private writer: VideoWriter,
                        ) {}


                        convert(inputFile: string, outputFile: string, format: string): void {
                            this.reader.read(inputFile);
                            this.decoder.decode();
                            this.encoder.encode(format);
                            this.writer.write(outputFile);
                        }
                    }`,
    explanation:
      "The Angular facade service coordinates several media-processing services behind one task-oriented API.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";

class VideoReader {
  read(fileName: string): void {
    console.log(\`Reading \${fileName}\`);
  }
}

class VideoDecoder {
  decode(): void {
    console.log("Decoding video stream");
  }
}

class VideoEncoder {
  encode(format: string): void {
    console.log(\`Encoding to \${format}\`);
  }
}

class VideoWriter {
  write(outputFile: string): void {
    console.log(\`Writing output to \${outputFile}\`);
  }
}

class VideoConversionFacade {
  constructor(
    private reader = new VideoReader(),
    private decoder = new VideoDecoder(),
    private encoder = new VideoEncoder(),
    private writer = new VideoWriter(),
  ) {}

  convert(inputFile: string, outputFile: string, format: string): void {
    this.reader.read(inputFile);
    this.decoder.decode();
    this.encoder.encode(format);
    this.writer.write(outputFile);
  }
}

function ConvertButton({ converter }: { converter: VideoConversionFacade }) {
  return (
    <button onClick={() => converter.convert("demo.mov", "demo.mp4", "mp4")}>
      Convert video
    </button>
  );
}

export function App() {
  const converter = useMemo(() => new VideoConversionFacade(), []);

  return (
    <main>
      <h1>Video Conversion</h1>
      <ConvertButton converter={converter} />
    </main>
  );
}`,
    explanation:
      "The React example exposes a single convert action to the UI while the facade hides the reader, decoder, encoder, and writer steps behind it.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";

class VideoReader {
  read(fileName: string): void {
    console.log(\`Reading \${fileName}\`);
  }
}

class VideoDecoder {
  decode(): void {
    console.log("Decoding video stream");
  }
}

class VideoEncoder {
  encode(format: string): void {
    console.log(\`Encoding to \${format}\`);
  }
}

class VideoWriter {
  write(outputFile: string): void {
    console.log(\`Writing output to \${outputFile}\`);
  }
}

class VideoConversionFacade {
  constructor(
    private reader = new VideoReader(),
    private decoder = new VideoDecoder(),
    private encoder = new VideoEncoder(),
    private writer = new VideoWriter(),
  ) {}

  convert(inputFile: string, outputFile: string, format: string): void {
    this.reader.read(inputFile);
    this.decoder.decode();
    this.encoder.encode(format);
    this.writer.write(outputFile);
  }
}

function ConvertButton({ converter }: { converter: VideoConversionFacade }) {
  return (
    <Pressable
      onPress={() => converter.convert("demo.mov", "demo.mp4", "mp4")}
      style={{ padding: 12, backgroundColor: "#111827", borderRadius: 8 }}
    >
      <Text style={{ color: "#fff", textAlign: "center" }}>Convert video</Text>
    </Pressable>
  );
}

export function App() {
  const converter = useMemo(() => new VideoConversionFacade(), []);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Video Conversion</Text>
        <ConvertButton converter={converter} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native version uses the same facade pipeline, but triggers the conversion from a mobile-friendly pressable button instead of a web button.",
  },
  {
    language: "C#",
    code: `using System;

public class VideoReader
{
    public void Read(string fileName)
    {
        Console.WriteLine($"Reading {fileName}");
    }
}

public class VideoDecoder
{
    public void Decode()
    {
        Console.WriteLine("Decoding video stream");
    }
}

public class VideoEncoder
{
    public void Encode(string format)
    {
        Console.WriteLine($"Encoding to {format}");
    }
}

public class VideoWriter
{
    public void Write(string outputFile)
    {
        Console.WriteLine($"Writing output to {outputFile}");
    }
}

public class VideoConversionFacade
{
    private readonly VideoReader _reader = new();
    private readonly VideoDecoder _decoder = new();
    private readonly VideoEncoder _encoder = new();
    private readonly VideoWriter _writer = new();

    public void Convert(string inputFile, string outputFile, string format)
    {
        _reader.Read(inputFile);
        _decoder.Decode();
        _encoder.Encode(format);
        _writer.Write(outputFile);
    }
}

var converter = new VideoConversionFacade();
converter.Convert("demo.mov", "demo.mp4", "mp4");`,
    explanation:
      "The C# example gives the client one conversion method while the facade coordinates the subsystem steps in the correct order.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;

public class VideoReader
{
    public void Read(string fileName)
    {
        Console.WriteLine($"Reading {fileName}");
    }
}

public class VideoDecoder
{
    public void Decode()
    {
        Console.WriteLine("Decoding video stream");
    }
}

public class VideoEncoder
{
    public void Encode(string format)
    {
        Console.WriteLine($"Encoding to {format}");
    }
}

public class VideoWriter
{
    public void Write(string outputFile)
    {
        Console.WriteLine($"Writing output to {outputFile}");
    }
}

public class VideoConversionFacade
{
    private readonly VideoReader _reader;
    private readonly VideoDecoder _decoder;
    private readonly VideoEncoder _encoder;
    private readonly VideoWriter _writer;

    public VideoConversionFacade(
        VideoReader reader,
        VideoDecoder decoder,
        VideoEncoder encoder,
        VideoWriter writer)
    {
        _reader = reader;
        _decoder = decoder;
        _encoder = encoder;
        _writer = writer;
    }

    public void Convert(string inputFile, string outputFile, string format)
    {
        _reader.Read(inputFile);
        _decoder.Decode();
        _encoder.Encode(format);
        _writer.Write(outputFile);
    }
}

var services = new ServiceCollection();
services.AddSingleton<VideoReader>();
services.AddSingleton<VideoDecoder>();
services.AddSingleton<VideoEncoder>();
services.AddSingleton<VideoWriter>();
services.AddSingleton<VideoConversionFacade>();

var provider = services.BuildServiceProvider();
var converter = provider.GetRequiredService<VideoConversionFacade>();
converter.Convert("demo.mov", "demo.mp4", "mp4");`,
    explanation:
      "The .NET version shows the same facade approach with dependency injection, so the client stays focused on one conversion call while the media pipeline remains encapsulated.",
  },
];
