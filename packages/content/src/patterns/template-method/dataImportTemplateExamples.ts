import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const dataImportTemplateExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `abstract class DataImporter {
  import(): void {
    const raw = this.readSource();
    const parsed = this.parse(raw);
    this.validate(parsed);
    this.save(parsed);
  }


  protected abstract readSource(): string;
  protected abstract parse(raw: string): unknown;
  protected validate(data: unknown): void {
    console.log("Validating imported data");
  }


  protected save(data: unknown): void {
    console.log("Saving imported data");
  }
}


class CsvImporter extends DataImporter {
  protected readSource(): string {
    return "name,age\\nAlice,30";
  }


  protected parse(raw: string): unknown {
    return raw.split("\\n").map((line) => line.split(","));
  }
}


class JsonImporter extends DataImporter {
  protected readSource(): string {
    return '{"name":"Alice","age":30}';
  }


  protected parse(raw: string): unknown {
    return JSON.parse(raw);
  }
}


const csv = new CsvImporter();
csv.import();


const json = new JsonImporter();
json.import();`,
    explanation:
      "The data importer keeps the import pipeline fixed while subclasses customize how data is read and parsed.",
  },
  {
    language: "Java",
    code: `abstract class DataImporter {
    public final void importData() {
        String raw = readSource();
        Object parsed = parse(raw);
        validate(parsed);
        save(parsed);
    }


    protected abstract String readSource();
    protected abstract Object parse(String raw);


    protected void validate(Object data) {
        System.out.println("Validating imported data");
    }


    protected void save(Object data) {
        System.out.println("Saving imported data");
    }
}


class CsvImporter extends DataImporter {
    protected String readSource() {
        return "name,age\\nAlice,30";
    }


    protected Object parse(String raw) {
        return raw.split("\\n");
    }
}


class JsonImporter extends DataImporter {
    protected String readSource() {
        return "{\"name\":\"Alice\",\"age\":30}";
    }


    protected Object parse(String raw) {
        return raw;
    }
}


DataImporter csv = new CsvImporter();
csv.importData();


DataImporter json = new JsonImporter();
json.importData();`,
    explanation:
      "The Java data importer preserves the import steps while allowing each format to define its own reading and parsing logic.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod


class DataImporter(ABC):
    def import_data(self) -> None:
        raw = self.read_source()
        parsed = self.parse(raw)
        self.validate(parsed)
        self.save(parsed)


    @abstractmethod
    def read_source(self) -> str:
        pass


    @abstractmethod
    def parse(self, raw: str) -> object:
        pass


    def validate(self, data: object) -> None:
        print("Validating imported data")


    def save(self, data: object) -> None:
        print("Saving imported data")


class CsvImporter(DataImporter):
    def read_source(self) -> str:
        return "name,age\\nAlice,30"


    def parse(self, raw: str) -> object:
        return [line.split(",") for line in raw.split("\\n")]


class JsonImporter(DataImporter):
    def read_source(self) -> str:
        return '{"name":"Alice","age":30}'


    def parse(self, raw: str) -> object:
        return raw


csv = CsvImporter()
csv.import_data()


json = JsonImporter()
json.import_data()`,
    explanation:
      "The Python data importer uses a fixed import sequence while letting each file type control how input is read and parsed.",
  },
  {
    language: "Angular",
    code: `abstract class DataImporter {
  import(): void {
    const raw = this.readSource();
    const parsed = this.parse(raw);
    this.validate(parsed);
    this.save(parsed);
  }


  protected abstract readSource(): string;
  protected abstract parse(raw: string): unknown;
  protected validate(data: unknown): void {
    console.log("Validating imported data");
  }


  protected save(data: unknown): void {
    console.log("Saving imported data");
  }
}


class CsvImporter extends DataImporter {
  protected readSource(): string {
    return "name,age\\nAlice,30";
  }


  protected parse(raw: string): unknown {
    return raw.split("\\n").map((line) => line.split(","));
  }
}


class JsonImporter extends DataImporter {
  protected readSource(): string {
    return '{"name":"Alice","age":30}';
  }


  protected parse(raw: string): unknown {
    return JSON.parse(raw);
  }
}


const csv = new CsvImporter();
csv.import();


const json = new JsonImporter();
json.import();`,
    explanation:
      "The Angular example keeps the import pipeline stable and varies only the source-reading and parsing steps.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


abstract class DataImporter {
  import(): void {
    const raw = this.readSource();
    const parsed = this.parse(raw);
    this.validate(parsed);
    this.save(parsed);
  }


  protected abstract readSource(): string;
  protected abstract parse(raw: string): unknown;
  protected validate(data: unknown): void {
    console.log("Validating imported data");
  }


  protected save(data: unknown): void {
    console.log("Saving imported data");
  }
}


class CsvImporter extends DataImporter {
  protected readSource(): string {
    return "name,age\\nAlice,30";
  }


  protected parse(raw: string): unknown {
    return raw.split("\\n").map((line) => line.split(","));
  }
}


class JsonImporter extends DataImporter {
  protected readSource(): string {
    return '{"name":"Alice","age":30}';
  }


  protected parse(raw: string): unknown {
    return JSON.parse(raw);
  }
}


function ImportPreview() {
  return <p>Data importer ready</p>;
}


export function App() {
  const importer = useMemo(() => new CsvImporter(), []);


  useMemo(() => {
    importer.import();
  }, [importer]);


  return (
    <main>
      <h1>Data Import Template</h1>
      <ImportPreview />
    </main>
  );
}`,
    explanation:
      "The React example keeps the data import workflow in the base class while the concrete importer handles format-specific parsing.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


abstract class DataImporter {
  import(): void {
    const raw = this.readSource();
    const parsed = this.parse(raw);
    this.validate(parsed);
    this.save(parsed);
  }


  protected abstract readSource(): string;
  protected abstract parse(raw: string): unknown;
  protected validate(data: unknown): void {
    console.log("Validating imported data");
  }


  protected save(data: unknown): void {
    console.log("Saving imported data");
  }
}


class CsvImporter extends DataImporter {
  protected readSource(): string {
    return "name,age\\nAlice,30";
  }


  protected parse(raw: string): unknown {
    return raw.split("\\n").map((line) => line.split(","));
  }
}


class JsonImporter extends DataImporter {
  protected readSource(): string {
    return '{"name":"Alice","age":30}';
  }


  protected parse(raw: string): unknown {
    return JSON.parse(raw);
  }
}


function ImportPreview() {
  return (
    <View>
      <Text>Data importer ready</Text>
    </View>
  );
}


export function App() {
  const importer = useMemo(() => new CsvImporter(), []);


  useMemo(() => {
    importer.import();
  }, [importer]);


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Data Import Template</Text>
        <ImportPreview />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native example follows the same fixed import pipeline while the subclass determines how the data is parsed.",
  },
  {
    language: "C#",
    code: `using System;


public abstract class DataImporter
{
    public void Import()
    {
        var raw = ReadSource();
        var parsed = Parse(raw);
        Validate(parsed);
        Save(parsed);
    }


    protected abstract string ReadSource();
    protected abstract object Parse(string raw);


    protected virtual void Validate(object data)
    {
        Console.WriteLine("Validating imported data");
    }


    protected virtual void Save(object data)
    {
        Console.WriteLine("Saving imported data");
    }
}


public class CsvImporter : DataImporter
{
    protected override string ReadSource()
    {
        return "name,age\\nAlice,30";
    }


    protected override object Parse(string raw)
    {
        return raw.Split("\\n");
    }
}


public class JsonImporter : DataImporter
{
    protected override string ReadSource()
    {
        return "{\"name\":\"Alice\",\"age\":30}";
    }


    protected override object Parse(string raw)
    {
        return raw;
    }
}


var csv = new CsvImporter();
csv.Import();


var json = new JsonImporter();
json.Import();`,
    explanation:
      "The C# data importer preserves the import skeleton and lets subclasses customize the file-specific steps.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;


public abstract class DataImporter
{
    public void Import()
    {
        var raw = ReadSource();
        var parsed = Parse(raw);
        Validate(parsed);
        Save(parsed);
    }


    protected abstract string ReadSource();
    protected abstract object Parse(string raw);


    protected virtual void Validate(object data)
    {
        Console.WriteLine("Validating imported data");
    }


    protected virtual void Save(object data)
    {
        Console.WriteLine("Saving imported data");
    }
}


public class CsvImporter : DataImporter
{
    protected override string ReadSource()
    {
        return "name,age\\nAlice,30";
    }


    protected override object Parse(string raw)
    {
        return raw.Split("\\n");
    }
}


public class JsonImporter : DataImporter
{
    protected override string ReadSource()
    {
        return "{\"name\":\"Alice\",\"age\":30}";
    }


    protected override object Parse(string raw)
    {
        return raw;
    }
}


var services = new ServiceCollection();
services.AddSingleton<CsvImporter>();

var provider = services.BuildServiceProvider();
var importer = provider.GetRequiredService<CsvImporter>();
importer.Import();`,
    explanation:
      "The .NET example resolves a concrete importer through dependency injection while the base class keeps the import template intact.",
  },
];
