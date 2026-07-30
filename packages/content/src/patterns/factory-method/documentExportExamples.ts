import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const documentExportExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface DocumentFile {
                        export(): void;
                    }


                    class PdfDocument implements DocumentFile {
                        export(): void {
                            console.log("Exporting PDF document");
                        }
                    }


                    class CsvDocument implements DocumentFile {
                        export(): void {
                            console.log("Exporting CSV document");
                        }
                    }


                    abstract class DocumentExporter {
                        abstract createDocument(): DocumentFile;


                        runExport(): void {
                            const document = this.createDocument();
                            document.export();
                        }
                    }


                    class PdfExporter extends DocumentExporter {
                        createDocument(): DocumentFile {
                            return new PdfDocument();
                        }
                    }


                    class CsvExporter extends DocumentExporter {
                        createDocument(): DocumentFile {
                            return new CsvDocument();
                        }
                    }


                    const exporter: DocumentExporter = new PdfExporter();
                    exporter.runExport();`,
    explanation:
      "The creator defines the export workflow, while concrete exporters decide which document implementation gets instantiated.",
  },
  {
    language: "Java",
    code: `interface DocumentFile {
                        void export();
                    }


                    class PdfDocument implements DocumentFile {
                        public void export() {
                            System.out.println("Exporting PDF document");
                        }
                    }


                    class CsvDocument implements DocumentFile {
                        public void export() {
                            System.out.println("Exporting CSV document");
                        }
                    }


                    abstract class DocumentExporter {
                        abstract DocumentFile createDocument();


                        public void runExport() {
                            DocumentFile document = createDocument();
                            document.export();
                        }
                    }


                    class PdfExporter extends DocumentExporter {
                        DocumentFile createDocument() {
                            return new PdfDocument();
                        }
                    }


                    class CsvExporter extends DocumentExporter {
                        DocumentFile createDocument() {
                            return new CsvDocument();
                        }
                    }


                    DocumentExporter exporter = new PdfExporter();
                    exporter.runExport();`,
    explanation:
      "The factory method keeps client code independent from concrete document classes while allowing subclasses to select the right export type.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod


                    class DocumentFile(ABC):
                        @abstractmethod
                        def export(self) -> None:
                            pass


                    class PdfDocument(DocumentFile):
                        def export(self) -> None:
                            print("Exporting PDF document")


                    class CsvDocument(DocumentFile):
                        def export(self) -> None:
                            print("Exporting CSV document")


                    class DocumentExporter(ABC):
                        @abstractmethod
                        def create_document(self) -> DocumentFile:
                            pass


                        def run_export(self) -> None:
                            document = self.create_document()
                            document.export()


                    class PdfExporter(DocumentExporter):
                        def create_document(self) -> DocumentFile:
                            return PdfDocument()


                    class CsvExporter(DocumentExporter):
                        def create_document(self) -> DocumentFile:
                            return CsvDocument()


                    exporter: DocumentExporter = PdfExporter()
                    exporter.run_export()`,
    explanation:
      "The export flow stays stable in the creator, while subclasses customize which concrete document gets produced.",
  },
  {
    language: "Angular",
    code: `import { Injectable } from '@angular/core';


                    interface DocumentFile {
                        export(): void;
                    }


                    class PdfDocument implements DocumentFile {
                        export(): void {
                            console.log('Exporting PDF document');
                        }
                    }


                    class CsvDocument implements DocumentFile {
                        export(): void {
                            console.log('Exporting CSV document');
                        }
                    }


                    @Injectable({ providedIn: 'root' })
                    abstract class DocumentExporter {
                        abstract createDocument(): DocumentFile;


                        runExport(): void {
                            const document = this.createDocument();
                            document.export();
                        }
                    }


                    @Injectable({ providedIn: 'root' })
                    class PdfExporter extends DocumentExporter {
                        createDocument(): DocumentFile {
                            return new PdfDocument();
                        }
                    }


                    @Injectable({ providedIn: 'root' })
                    class CsvExporter extends DocumentExporter {
                        createDocument(): DocumentFile {
                            return new CsvDocument();
                        }
                    }`,
    explanation:
      "The Angular service keeps the export workflow in one place while concrete exporters choose which document implementation to create.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";

interface DocumentFile {
  export(): void;
}

class PdfDocument implements DocumentFile {
  export(): void {
    console.log("Exporting PDF document");
  }
}

class CsvDocument implements DocumentFile {
  export(): void {
    console.log("Exporting CSV document");
  }
}

abstract class DocumentExporter {
  abstract createDocument(): DocumentFile;

  runExport(): void {
    const document = this.createDocument();
    document.export();
  }
}

class PdfExporter extends DocumentExporter {
  createDocument(): DocumentFile {
    return new PdfDocument();
  }
}

class CsvExporter extends DocumentExporter {
  createDocument(): DocumentFile {
    return new CsvDocument();
  }
}

function ExportButton({ exporter }: { exporter: DocumentExporter }) {
  return <button onClick={() => exporter.runExport()}>Run export</button>;
}

export function App() {
  const exporter = useMemo(() => new PdfExporter(), []);

  return (
    <main>
      <h1>Document Export</h1>
      <ExportButton exporter={exporter} />
    </main>
  );
}`,
    explanation:
      "The React example keeps the export workflow in the creator class while the concrete exporter decides which document gets instantiated.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";

interface DocumentFile {
  export(): void;
}

class PdfDocument implements DocumentFile {
  export(): void {
    console.log("Exporting PDF document");
  }
}

class CsvDocument implements DocumentFile {
  export(): void {
    console.log("Exporting CSV document");
  }
}

abstract class DocumentExporter {
  abstract createDocument(): DocumentFile;

  runExport(): void {
    const document = this.createDocument();
    document.export();
  }
}

class PdfExporter extends DocumentExporter {
  createDocument(): DocumentFile {
    return new PdfDocument();
  }
}

class CsvExporter extends DocumentExporter {
  createDocument(): DocumentFile {
    return new CsvDocument();
  }
}

function ExportButton({ exporter }: { exporter: DocumentExporter }) {
  return (
    <Pressable
      onPress={() => exporter.runExport()}
      style={{ padding: 12, backgroundColor: "#111827", borderRadius: 8 }}
    >
      <Text style={{ color: "#fff", textAlign: "center" }}>Run export</Text>
    </Pressable>
  );
}

export function App() {
  const exporter = useMemo(() => new PdfExporter(), []);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Document Export</Text>
        <ExportButton exporter={exporter} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native version uses the same factory method structure, but triggers the export from a mobile-friendly pressable control.",
  },
  {
    language: "C#",
    code: `using System;

public interface IDocumentFile
{
    void Export();
}

public class PdfDocument : IDocumentFile
{
    public void Export()
    {
        Console.WriteLine("Exporting PDF document");
    }
}

public class CsvDocument : IDocumentFile
{
    public void Export()
    {
        Console.WriteLine("Exporting CSV document");
    }
}

public abstract class DocumentExporter
{
    public abstract IDocumentFile CreateDocument();

    public void RunExport()
    {
        var document = CreateDocument();
        document.Export();
    }
}

public class PdfExporter : DocumentExporter
{
    public override IDocumentFile CreateDocument()
    {
        return new PdfDocument();
    }
}

public class CsvExporter : DocumentExporter
{
    public override IDocumentFile CreateDocument()
    {
        return new CsvDocument();
    }
}

DocumentExporter exporter = new PdfExporter();
exporter.RunExport();`,
    explanation:
      "The C# example keeps the export workflow in the base creator while subclasses decide which concrete document type to instantiate.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;

public interface IDocumentFile
{
    void Export();
}

public class PdfDocument : IDocumentFile
{
    public void Export()
    {
        Console.WriteLine("Exporting PDF document");
    }
}

public class CsvDocument : IDocumentFile
{
    public void Export()
    {
        Console.WriteLine("Exporting CSV document");
    }
}

public abstract class DocumentExporter
{
    public abstract IDocumentFile CreateDocument();

    public void RunExport()
    {
        var document = CreateDocument();
        document.Export();
    }
}

public class PdfExporter : DocumentExporter
{
    public override IDocumentFile CreateDocument()
    {
        return new PdfDocument();
    }
}

public class CsvExporter : DocumentExporter
{
    public override IDocumentFile CreateDocument()
    {
        return new CsvDocument();
    }
}

var services = new ServiceCollection();
services.AddSingleton<DocumentExporter, PdfExporter>();

var provider = services.BuildServiceProvider();
var exporter = provider.GetRequiredService<DocumentExporter>();
exporter.RunExport();`,
    explanation:
      "The .NET version shows the same factory method pattern with dependency injection, so the export workflow stays stable while the concrete exporter is selected externally.",
  },
];
