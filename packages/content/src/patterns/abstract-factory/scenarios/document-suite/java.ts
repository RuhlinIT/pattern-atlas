import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java = {
  language: "java",
  code: `interface DocumentEditor {
  String open(String title);
}

interface DocumentExporter {
  String export(String title);
}

interface DocumentToolbar {
  String render();
}

interface DocumentSuiteFactory {
  DocumentEditor createEditor();
  DocumentExporter createExporter();
  DocumentToolbar createToolbar();
}

class MarkdownEditor implements DocumentEditor {
  @Override
  public String open(String title) {
    return "Opened markdown editor for " + title;
  }
}

class MarkdownExporter implements DocumentExporter {
  @Override
  public String export(String title) {
    return "Exported " + title + " as .md package";
  }
}

class MarkdownToolbar implements DocumentToolbar {
  @Override
  public String render() {
    return "Rendered markdown toolbar with heading, list, and code actions";
  }
}

class RichTextEditor implements DocumentEditor {
  @Override
  public String open(String title) {
    return "Opened rich text editor for " + title;
  }
}

class RichTextExporter implements DocumentExporter {
  @Override
  public String export(String title) {
    return "Exported " + title + " as .docx package";
  }
}

class RichTextToolbar implements DocumentToolbar {
  @Override
  public String render() {
    return "Rendered rich text toolbar with font, color, and alignment actions";
  }
}

class MarkdownSuiteFactory implements DocumentSuiteFactory {
  @Override
  public DocumentEditor createEditor() {
    return new MarkdownEditor();
  }

  @Override
  public DocumentExporter createExporter() {
    return new MarkdownExporter();
  }

  @Override
  public DocumentToolbar createToolbar() {
    return new MarkdownToolbar();
  }
}

class RichTextSuiteFactory implements DocumentSuiteFactory {
  @Override
  public DocumentEditor createEditor() {
    return new RichTextEditor();
  }

  @Override
  public DocumentExporter createExporter() {
    return new RichTextExporter();
  }

  @Override
  public DocumentToolbar createToolbar() {
    return new RichTextToolbar();
  }
}

class DocumentWorkspace {
  private final DocumentEditor editor;
  private final DocumentExporter exporter;
  private final DocumentToolbar toolbar;

  DocumentWorkspace(DocumentSuiteFactory factory) {
    this.editor = factory.createEditor();
    this.exporter = factory.createExporter();
    this.toolbar = factory.createToolbar();
  }

  String load(String title) {
    return String.join(
      "\\n",
      toolbar.render(),
      editor.open(title),
      exporter.export(title)
    );
  }
}

public class Main {
  public static void main(String[] args) {
    DocumentSuiteFactory factory = new MarkdownSuiteFactory();
    DocumentWorkspace workspace = new DocumentWorkspace(factory);

    System.out.println(workspace.load("Architecture Notes"));
  }
}
`,
} satisfies PatternLanguageExample;