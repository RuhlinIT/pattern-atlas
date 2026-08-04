import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python = {
  language: "python",
  code: `from abc import ABC, abstractmethod


class DocumentEditor(ABC):
    @abstractmethod
    def open(self, title: str) -> str:
        pass


class DocumentExporter(ABC):
    @abstractmethod
    def export(self, title: str) -> str:
        pass


class DocumentToolbar(ABC):
    @abstractmethod
    def render(self) -> str:
        pass


class DocumentSuiteFactory(ABC):
    @abstractmethod
    def create_editor(self) -> DocumentEditor:
        pass

    @abstractmethod
    def create_exporter(self) -> DocumentExporter:
        pass

    @abstractmethod
    def create_toolbar(self) -> DocumentToolbar:
        pass


class MarkdownEditor(DocumentEditor):
    def open(self, title: str) -> str:
        return f"Opened markdown editor for {title}"


class MarkdownExporter(DocumentExporter):
    def export(self, title: str) -> str:
        return f"Exported {title} as .md package"


class MarkdownToolbar(DocumentToolbar):
    def render(self) -> str:
        return "Rendered markdown toolbar with heading, list, and code actions"


class RichTextEditor(DocumentEditor):
    def open(self, title: str) -> str:
        return f"Opened rich text editor for {title}"


class RichTextExporter(DocumentExporter):
    def export(self, title: str) -> str:
        return f"Exported {title} as .docx package"


class RichTextToolbar(DocumentToolbar):
    def render(self) -> str:
        return "Rendered rich text toolbar with font, color, and alignment actions"


class MarkdownSuiteFactory(DocumentSuiteFactory):
    def create_editor(self) -> DocumentEditor:
        return MarkdownEditor()

    def create_exporter(self) -> DocumentExporter:
        return MarkdownExporter()

    def create_toolbar(self) -> DocumentToolbar:
        return MarkdownToolbar()


class RichTextSuiteFactory(DocumentSuiteFactory):
    def create_editor(self) -> DocumentEditor:
        return RichTextEditor()

    def create_exporter(self) -> DocumentExporter:
        return RichTextExporter()

    def create_toolbar(self) -> DocumentToolbar:
        return RichTextToolbar()


class DocumentWorkspace:
    def __init__(self, factory: DocumentSuiteFactory) -> None:
        self.editor = factory.create_editor()
        self.exporter = factory.create_exporter()
        self.toolbar = factory.create_toolbar()

    def load(self, title: str) -> str:
        return "\\n".join([
            self.toolbar.render(),
            self.editor.open(title),
            self.exporter.export(title),
        ])


factory: DocumentSuiteFactory = MarkdownSuiteFactory()
workspace = DocumentWorkspace(factory)

print(workspace.load("Architecture Notes"))
`,
} satisfies PatternLanguageExample;