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
  {
    language: "Angular",
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


source.writeData('Quarterly report');`,
    explanation:
      "Compression and encryption wrap the file writer in layers, so Angular code can extend storage behavior through composition without changing the base writer.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";

interface DataSource {
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

function StoragePanel({ source }: { source: DataSource }) {
  return (
    <button onClick={() => source.writeData("Quarterly report")}>
      Save report
    </button>
  );
}

export function App() {
  const source = useMemo(
    () => new EncryptionDecorator(new CompressionDecorator(new FileDataSource())),
    []
  );

  return (
    <main>
      <h1>File Storage</h1>
      <StoragePanel source={source} />
    </main>
  );
}`,
    explanation:
      "The React example layers compression and encryption around the file writer, so the UI can save data without knowing how the storage pipeline is composed.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";

interface DataSource {
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

function StorageAction({ source }: { source: DataSource }) {
  return (
    <Pressable
      onPress={() => source.writeData("Quarterly report")}
      style={{ padding: 12, backgroundColor: "#111827", borderRadius: 8 }}
    >
      <Text style={{ color: "#fff", textAlign: "center" }}>Save report</Text>
    </Pressable>
  );
}

export function App() {
  const source = useMemo(
    () => new EncryptionDecorator(new CompressionDecorator(new FileDataSource())),
    []
  );

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>File Storage</Text>
        <StorageAction source={source} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native version uses the same stacked decorators, but triggers the storage write from a mobile-friendly pressable control.",
  },
  {
    language: "C#",
    code: `using System;

public interface IDataSource
{
    void WriteData(string data);
}

public class FileDataSource : IDataSource
{
    public void WriteData(string data)
    {
        Console.WriteLine($"Writing file: {data}");
    }
}

public abstract class DataSourceDecorator : IDataSource
{
    protected readonly IDataSource Wrappee;

    protected DataSourceDecorator(IDataSource wrappee)
    {
        Wrappee = wrappee;
    }

    public virtual void WriteData(string data)
    {
        Wrappee.WriteData(data);
    }
}

public class CompressionDecorator : DataSourceDecorator
{
    public CompressionDecorator(IDataSource wrappee) : base(wrappee) { }

    public override void WriteData(string data)
    {
        var compressed = $"compressed({data})";
        base.WriteData(compressed);
    }
}

public class EncryptionDecorator : DataSourceDecorator
{
    public EncryptionDecorator(IDataSource wrappee) : base(wrappee) { }

    public override void WriteData(string data)
    {
        var encrypted = $"encrypted({data})";
        base.WriteData(encrypted);
    }
}

IDataSource source = new EncryptionDecorator(
    new CompressionDecorator(new FileDataSource())
);

source.WriteData("Quarterly report");`,
    explanation:
      "The C# example keeps the writer interface stable while decorators add optional transformation steps before the final write.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;

public interface IDataSource
{
    void WriteData(string data);
}

public class FileDataSource : IDataSource
{
    public void WriteData(string data)
    {
        Console.WriteLine($"Writing file: {data}");
    }
}

public abstract class DataSourceDecorator : IDataSource
{
    protected readonly IDataSource Wrappee;

    protected DataSourceDecorator(IDataSource wrappee)
    {
        Wrappee = wrappee;
    }

    public virtual void WriteData(string data)
    {
        Wrappee.WriteData(data);
    }
}

public class CompressionDecorator : DataSourceDecorator
{
    public CompressionDecorator(IDataSource wrappee) : base(wrappee) { }

    public override void WriteData(string data)
    {
        var compressed = $"compressed({data})";
        base.WriteData(compressed);
    }
}

public class EncryptionDecorator : DataSourceDecorator
{
    public EncryptionDecorator(IDataSource wrappee) : base(wrappee) { }

    public override void WriteData(string data)
    {
        var encrypted = $"encrypted({data})";
        base.WriteData(encrypted);
    }
}

var services = new ServiceCollection();
services.AddSingleton<IDataSource>(_ =>
    new EncryptionDecorator(new CompressionDecorator(new FileDataSource()))
);

var provider = services.BuildServiceProvider();
var source = provider.GetRequiredService<IDataSource>();

source.WriteData("Quarterly report");`,
    explanation:
      "The .NET version shows the same decorator chain assembled through dependency injection, so storage behavior can be extended without changing the base writer.",
  },
];
