import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const documentVisitorExamples: PatternLanguageExample[] = [
  {
    language: "typescript",
    code: `interface DocumentVisitor {
  visitParagraph(paragraph: Paragraph): string;
  visitHeading(heading: Heading): string;
}


interface DocumentNode {
  accept(visitor: DocumentVisitor): string;
}


class Paragraph implements DocumentNode {
  constructor(public text: string) {}


  accept(visitor: DocumentVisitor): string {
    return visitor.visitParagraph(this);
  }
}


class Heading implements DocumentNode {
  constructor(
    public level: number,
    public text: string
  ) {}


  accept(visitor: DocumentVisitor): string {
    return visitor.visitHeading(this);
  }
}


class HtmlExportVisitor implements DocumentVisitor {
  visitParagraph(paragraph: Paragraph): string {
    return \`<p>\${paragraph.text}</p>\`;
  }


  visitHeading(heading: Heading): string {
    return \`<h\${heading.level}>\${heading.text}</h\${heading.level}>\`;
  }
}


const document: DocumentNode[] = [
  new Heading(1, "Report"),
  new Paragraph("This is the first paragraph."),
  new Paragraph("This is the second paragraph.")
];


const visitor = new HtmlExportVisitor();
const html = document.map((node) => node.accept(visitor)).join("\\n");


console.log(html);`,
    explanation:
      "The document visitor exports nodes to HTML without embedding export logic inside the node classes.",
  },
  {
    language: "java",
    code: `interface DocumentVisitor {
    String visitParagraph(Paragraph paragraph);
    String visitHeading(Heading heading);
}


interface DocumentNode {
    String accept(DocumentVisitor visitor);
}


class Paragraph implements DocumentNode {
    public final String text;


    public Paragraph(String text) {
        this.text = text;
    }


    public String accept(DocumentVisitor visitor) {
        return visitor.visitParagraph(this);
    }
}


class Heading implements DocumentNode {
    public final int level;
    public final String text;


    public Heading(int level, String text) {
        this.level = level;
        this.text = text;
    }


    public String accept(DocumentVisitor visitor) {
        return visitor.visitHeading(this);
    }
}


class HtmlExportVisitor implements DocumentVisitor {
    public String visitParagraph(Paragraph paragraph) {
        return "<p>" + paragraph.text + "</p>";
    }


    public String visitHeading(Heading heading) {
        return "<h" + heading.level + ">" + heading.text + "</h" + heading.level + ">";
    }
}


java.util.List<DocumentNode> document = java.util.List.of(
    new Heading(1, "Report"),
    new Paragraph("This is the first paragraph."),
    new Paragraph("This is the second paragraph.")
);


DocumentVisitor visitor = new HtmlExportVisitor();
StringBuilder html = new StringBuilder();
for (DocumentNode node : document) {
    html.append(node.accept(visitor)).append("\\n");
}


System.out.println(html.toString());`,
    explanation:
      "The Java document visitor separates HTML export behavior from the document node classes.",
  },
  {
    language: "python",
    code: `from abc import ABC, abstractmethod


class DocumentVisitor(ABC):
    @abstractmethod
    def visit_paragraph(self, paragraph: "Paragraph") -> str:
        pass


    @abstractmethod
    def visit_heading(self, heading: "Heading") -> str:
        pass


class DocumentNode(ABC):
    @abstractmethod
    def accept(self, visitor: DocumentVisitor) -> str:
        pass


class Paragraph(DocumentNode):
    def __init__(self, text: str) -> None:
        self.text = text


    def accept(self, visitor: DocumentVisitor) -> str:
        return visitor.visit_paragraph(self)


class Heading(DocumentNode):
    def __init__(self, level: int, text: str) -> None:
        self.level = level
        self.text = text


    def accept(self, visitor: DocumentVisitor) -> str:
        return visitor.visit_heading(self)


class HtmlExportVisitor(DocumentVisitor):
    def visit_paragraph(self, paragraph: Paragraph) -> str:
        return f"<p>{paragraph.text}</p>"


    def visit_heading(self, heading: Heading) -> str:
        return f"<h{heading.level}>{heading.text}</h{heading.level}>"


document = [
    Heading(1, "Report"),
    Paragraph("This is the first paragraph."),
    Paragraph("This is the second paragraph."),
]


visitor = HtmlExportVisitor()
html = "\\n".join(node.accept(visitor) for node in document)


print(html)`,
    explanation:
      "The Python document visitor turns nodes into HTML while leaving the document element classes unchanged.",
  },
  {
    language: "Angular",
    code: `interface DocumentVisitor {
  visitParagraph(paragraph: Paragraph): string;
  visitHeading(heading: Heading): string;
}


interface DocumentNode {
  accept(visitor: DocumentVisitor): string;
}


class Paragraph implements DocumentNode {
  constructor(public text: string) {}


  accept(visitor: DocumentVisitor): string {
    return visitor.visitParagraph(this);
  }
}


class Heading implements DocumentNode {
  constructor(
    public level: number,
    public text: string
  ) {}


  accept(visitor: DocumentVisitor): string {
    return visitor.visitHeading(this);
  }
}


class HtmlExportVisitor implements DocumentVisitor {
  visitParagraph(paragraph: Paragraph): string {
    return \`<p>\${paragraph.text}</p>\`;
  }


  visitHeading(heading: Heading): string {
    return \`<h\${heading.level}>\${heading.text}</h\${heading.level}>\`;
  }
}


const document: DocumentNode[] = [
  new Heading(1, "Report"),
  new Paragraph("This is the first paragraph."),
  new Paragraph("This is the second paragraph.")
];


const visitor = new HtmlExportVisitor();
const html = document.map((node) => node.accept(visitor)).join("\\n");


console.log(html);`,
    explanation:
      "The Angular example exports a document tree to HTML by delegating node-specific formatting to a visitor.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


interface DocumentVisitor {
  visitParagraph(paragraph: Paragraph): string;
  visitHeading(heading: Heading): string;
}


interface DocumentNode {
  accept(visitor: DocumentVisitor): string;
}


class Paragraph implements DocumentNode {
  constructor(public text: string) {}


  accept(visitor: DocumentVisitor): string {
    return visitor.visitParagraph(this);
  }
}


class Heading implements DocumentNode {
  constructor(
    public level: number,
    public text: string
  ) {}


  accept(visitor: DocumentVisitor): string {
    return visitor.visitHeading(this);
  }
}


class HtmlExportVisitor implements DocumentVisitor {
  visitParagraph(paragraph: Paragraph): string {
    return \`<p>\${paragraph.text}</p>\`;
  }


  visitHeading(heading: Heading): string {
    return \`<h\${heading.level}>\${heading.text}</h\${heading.level}>\`;
  }
}


function DocumentPreview({ html }: { html: string }) {
  return <pre>{html}</pre>;
}


export function App() {
  const html = useMemo(() => {
    const document: DocumentNode[] = [
      new Heading(1, "Report"),
      new Paragraph("This is the first paragraph."),
      new Paragraph("This is the second paragraph.")
    ];


    const visitor = new HtmlExportVisitor();
    return document.map((node) => node.accept(visitor)).join("\\n");
  }, []);


  return (
    <main>
      <h1>Document Visitor</h1>
      <DocumentPreview html={html} />
    </main>
  );
}`,
    explanation:
      "The React example uses a visitor to export the document structure and then renders the generated HTML as preview text.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


interface DocumentVisitor {
  visitParagraph(paragraph: Paragraph): string;
  visitHeading(heading: Heading): string;
}


interface DocumentNode {
  accept(visitor: DocumentVisitor): string;
}


class Paragraph implements DocumentNode {
  constructor(public text: string) {}


  accept(visitor: DocumentVisitor): string {
    return visitor.visitParagraph(this);
  }
}


class Heading implements DocumentNode {
  constructor(
    public level: number,
    public text: string
  ) {}


  accept(visitor: DocumentVisitor): string {
    return visitor.visitHeading(this);
  }
}


class HtmlExportVisitor implements DocumentVisitor {
  visitParagraph(paragraph: Paragraph): string {
    return \`<p>\${paragraph.text}</p>\`;
  }


  visitHeading(heading: Heading): string {
    return \`<h\${heading.level}>\${heading.text}</h\${heading.level}>\`;
  }
}


function DocumentPreview({ html }: { html: string }) {
  return (
    <View>
      <Text>{html}</Text>
    </View>
  );
}


export function App() {
  const html = useMemo(() => {
    const document: DocumentNode[] = [
      new Heading(1, "Report"),
      new Paragraph("This is the first paragraph."),
      new Paragraph("This is the second paragraph.")
    ];


    const visitor = new HtmlExportVisitor();
    return document.map((node) => node.accept(visitor)).join("\\n");
  }, []);


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Document Visitor</Text>
        <DocumentPreview html={html} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native example exports the document with a visitor and shows the generated HTML in a mobile-friendly view.",
  },
  {
    language: "C#",
    code: `using System;
using System.Collections.Generic;


public interface IDocumentVisitor
{
    string VisitParagraph(Paragraph paragraph);
    string VisitHeading(Heading heading);
}


public interface IDocumentNode
{
    string Accept(IDocumentVisitor visitor);
}


public class Paragraph : IDocumentNode
{
    public string Text { get; }


    public Paragraph(string text)
    {
        Text = text;
    }


    public string Accept(IDocumentVisitor visitor)
    {
        return visitor.VisitParagraph(this);
    }
}


public class Heading : IDocumentNode
{
    public int Level { get; }
    public string Text { get; }


    public Heading(int level, string text)
    {
        Level = level;
        Text = text;
    }


    public string Accept(IDocumentVisitor visitor)
    {
        return visitor.VisitHeading(this);
    }
}


public class HtmlExportVisitor : IDocumentVisitor
{
    public string VisitParagraph(Paragraph paragraph)
    {
        return $"<p>{paragraph.Text}</p>";
    }


    public string VisitHeading(Heading heading)
    {
        return $"<h{heading.Level}>{heading.Text}</h{heading.Level}>";
    }
}


var document = new List<IDocumentNode>
{
    new Heading(1, "Report"),
    new Paragraph("This is the first paragraph."),
    new Paragraph("This is the second paragraph.")
};


var visitor = new HtmlExportVisitor();
var html = string.Join("\\n", document.ConvertAll(node => node.Accept(visitor)));


Console.WriteLine(html);`,
    explanation:
      "The C# document visitor exports a document tree to HTML without placing export logic inside the node classes.",
  },
  {
    language: ".NET",
    code: `using System;
using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;


public interface IDocumentVisitor
{
    string VisitParagraph(Paragraph paragraph);
    string VisitHeading(Heading heading);
}


public interface IDocumentNode
{
    string Accept(IDocumentVisitor visitor);
}


public class Paragraph : IDocumentNode
{
    public string Text { get; }


    public Paragraph(string text)
    {
        Text = text;
    }


    public string Accept(IDocumentVisitor visitor)
    {
        return visitor.VisitParagraph(this);
    }
}


public class Heading : IDocumentNode
{
    public int Level { get; }
    public string Text { get; }


    public Heading(int level, string text)
    {
        Level = level;
        Text = text;
    }


    public string Accept(IDocumentVisitor visitor)
    {
        return visitor.VisitHeading(this);
    }
}


public class HtmlExportVisitor : IDocumentVisitor
{
    public string VisitParagraph(Paragraph paragraph)
    {
        return $"<p>{paragraph.Text}</p>";
    }


    public string VisitHeading(Heading heading)
    {
        return $"<h{heading.Level}>{heading.Text}</h{heading.Level}>";
    }
}


var services = new ServiceCollection();
services.AddSingleton<HtmlExportVisitor>();

var provider = services.BuildServiceProvider();
var visitor = provider.GetRequiredService<HtmlExportVisitor>();


var document = new List<IDocumentNode>
{
    new Heading(1, "Report"),
    new Paragraph("This is the first paragraph."),
    new Paragraph("This is the second paragraph.")
};


var html = string.Join("\\n", document.ConvertAll(node => node.Accept(visitor)));


Console.WriteLine(html);`,
    explanation:
      "The .NET example resolves the HTML visitor through dependency injection and applies it to the document nodes.",
  },
];
