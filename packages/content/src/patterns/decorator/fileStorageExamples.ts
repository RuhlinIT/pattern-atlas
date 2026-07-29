import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const fileStorageExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface DataSource {
  writeData(data: string): void;
}

class FileDataSource implements DataSource {
  writeData(data: string): void {
    console.log(\`Writing file: \${data}\`);
  }
}

abstract class DataSourceDecorator implements DataSource {
  constructor(protected wrappee: DataSource) {}

  writeData(data: string): void {
    this.wrappee.writeData(data);
  }
}

class CompressionDecorator extends DataSourceDecorator {
  writeData(data: string): void {
    const compressed = \`compressed(\${data})\`;
    super.writeData(compressed);
  }
}

class EncryptionDecorator extends DataSourceDecorator {
  writeData(data: string): void {
    const encrypted = \`encrypted(\${data})\`;
    super.writeData(encrypted);
  }
}

const source = new EncryptionDecorator(
  new CompressionDecorator(new FileDataSource()),
);

source.writeData("Quarterly report");`,
    explanation:
      "Compression and encryption are layered independently around the file writer, so storage behavior is extended without altering the base class.",
  },
  {
    language: "Java",
    code: `interface DataSource {
    void writeData(String data);
}

class FileDataSource implements DataSource {
    public void writeData(String data) {
        System.out.println("Writing file: " + data);
    }
}

abstract class DataSourceDecorator implements DataSource {
    protected final DataSource wrappee;

    public DataSourceDecorator(DataSource wrappee) {
        this.wrappee = wrappee;
    }

    public void writeData(String data) {
        wrappee.writeData(data);
    }
}

class CompressionDecorator extends DataSourceDecorator {
    public CompressionDecorator(DataSource wrappee) {
        super(wrappee);
    }

    public void writeData(String data) {
        String compressed = "compressed(" + data + ")";
        super.writeData(compressed);
    }
}

class EncryptionDecorator extends DataSourceDecorator {
    public EncryptionDecorator(DataSource wrappee) {
        super(wrappee);
    }

    public void writeData(String data) {
        String encrypted = "encrypted(" + data + ")";
        super.writeData(encrypted);
    }
}

DataSource source =
    new EncryptionDecorator(new CompressionDecorator(new FileDataSource()));

source.writeData("Quarterly report");`,
    explanation:
      "The base writer focuses on persistence, while decorators add optional transformation steps before writing.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod

class DataSource(ABC):
    @abstractmethod
    def write_data(self, data: str) -> None:
        pass

class FileDataSource(DataSource):
    def write_data(self, data: str) -> None:
        print(f"Writing file: {data}")

class DataSourceDecorator(DataSource):
    def __init__(self, wrappee: DataSource) -> None:
        self.wrappee = wrappee

    def write_data(self, data: str) -> None:
        self.wrappee.write_data(data)

class CompressionDecorator(DataSourceDecorator):
    def write_data(self, data: str) -> None:
        compressed = f"compressed({data})"
        super().write_data(compressed)

class EncryptionDecorator(DataSourceDecorator):
    def write_data(self, data: str) -> None:
        encrypted = f"encrypted({data})"
        super().write_data(encrypted)

source = EncryptionDecorator(CompressionDecorator(FileDataSource()))
source.write_data("Quarterly report")`,
    explanation:
      "The writer contract stays unchanged while compression and encryption are added as separate reusable layers.",
  },
];
