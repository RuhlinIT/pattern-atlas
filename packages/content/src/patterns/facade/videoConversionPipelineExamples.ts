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
];
