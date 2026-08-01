import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "File storage",
  code: "from abc import ABC, abstractmethod\n\nclass DataSource(ABC):\n    @abstractmethod\n    def write_data(self, data: str) -> None:\n        pass\n\nclass FileDataSource(DataSource):\n    def write_data(self, data: str) -> None:\n        print(f\"Writing file: {data}\")\n\nclass DataSourceDecorator(DataSource):\n    def __init__(self, wrappee: DataSource) -> None:\n        self.wrappee = wrappee\n\n    def write_data(self, data: str) -> None:\n        self.wrappee.write_data(data)\n\nclass CompressionDecorator(DataSourceDecorator):\n    def write_data(self, data: str) -> None:\n        compressed = f\"compressed({data})\"\n        super().write_data(compressed)\n\nclass EncryptionDecorator(DataSourceDecorator):\n    def write_data(self, data: str) -> None:\n        encrypted = f\"encrypted({data})\"\n        super().write_data(encrypted)\n\nsource = EncryptionDecorator(CompressionDecorator(FileDataSource()))\nsource.write_data(\"Quarterly report\")",
  explanation: "The writer contract stays unchanged while compression and encryption are added as separate reusable layers.",
};
