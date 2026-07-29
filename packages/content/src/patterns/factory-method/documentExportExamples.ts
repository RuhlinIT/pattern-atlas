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
];