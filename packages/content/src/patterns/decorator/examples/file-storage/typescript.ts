import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "File storage",
  code: "interface DataSource {\n  writeData(data: string): void;\n}\n\nclass FileDataSource implements DataSource {\n  writeData(data: string): void {\n    console.log(`Writing file: ${data}`);\n  }\n}\n\nabstract class DataSourceDecorator implements DataSource {\n  constructor(protected wrappee: DataSource) {}\n\n  writeData(data: string): void {\n    this.wrappee.writeData(data);\n  }\n}\n\nclass CompressionDecorator extends DataSourceDecorator {\n  writeData(data: string): void {\n    const compressed = `compressed(${data})`;\n    super.writeData(compressed);\n  }\n}\n\nclass EncryptionDecorator extends DataSourceDecorator {\n  writeData(data: string): void {\n    const encrypted = `encrypted(${data})`;\n    super.writeData(encrypted);\n  }\n}\n\nconst source = new EncryptionDecorator(\n  new CompressionDecorator(new FileDataSource()),\n);\n\nsource.writeData(\"Quarterly report\");",
  explanation: "Compression and encryption are layered independently around the file writer, so storage behavior is extended without altering the base class.",
};
