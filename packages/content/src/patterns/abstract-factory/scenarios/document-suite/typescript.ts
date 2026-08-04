import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript = {
  language: "typescript",
  code: `interface DocumentEditor {
  open(title: string): string;
}

interface DocumentExporter {
  export(title: string): string;
}

interface DocumentToolbar {
  render(): string;
}

interface DocumentSuiteFactory {
  createEditor(): DocumentEditor;
  createExporter(): DocumentExporter;
  createToolbar(): DocumentToolbar;
}

class MarkdownEditor implements DocumentEditor {
  open(title: string): string {
    return \`Opened markdown editor for \${title}\`;
  }
}

class MarkdownExporter implements DocumentExporter {
  export(title: string): string {
    return \`Exported \${title} as .md package\`;
  }
}

class MarkdownToolbar implements DocumentToolbar {
  render(): string {
    return "Rendered markdown toolbar with heading, list, and code actions";
  }
}

class RichTextEditor implements DocumentEditor {
  open(title: string): string {
    return \`Opened rich text editor for \${title}\`;
  }
}

class RichTextExporter implements DocumentExporter {
  export(title: string): string {
    return \`Exported \${title} as .docx package\`;
  }
}

class RichTextToolbar implements DocumentToolbar {
  render(): string {
    return "Rendered rich text toolbar with font, color, and alignment actions";
  }
}

class MarkdownSuiteFactory implements DocumentSuiteFactory {
  createEditor(): DocumentEditor {
    return new MarkdownEditor();
  }

  createExporter(): DocumentExporter {
    return new MarkdownExporter();
  }

  createToolbar(): DocumentToolbar {
    return new MarkdownToolbar();
  }
}

class RichTextSuiteFactory implements DocumentSuiteFactory {
  createEditor(): DocumentEditor {
    return new RichTextEditor();
  }

  createExporter(): DocumentExporter {
    return new RichTextExporter();
  }

  createToolbar(): DocumentToolbar {
    return new RichTextToolbar();
  }
}

class DocumentWorkspace {
  private readonly editor: DocumentEditor;
  private readonly exporter: DocumentExporter;
  private readonly toolbar: DocumentToolbar;

  constructor(factory: DocumentSuiteFactory) {
    this.editor = factory.createEditor();
    this.exporter = factory.createExporter();
    this.toolbar = factory.createToolbar();
  }

  load(title: string): string {
    return [
      this.toolbar.render(),
      this.editor.open(title),
      this.exporter.export(title),
    ].join("\\n");
  }
}

const factory: DocumentSuiteFactory = new MarkdownSuiteFactory();
const workspace = new DocumentWorkspace(factory);

console.log(workspace.load("Architecture Notes"));
`,
} satisfies PatternLanguageExample;