import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const documentTemplateCloneExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface DocumentPrototype {
  clone(): DocumentPrototype;
  render(): string;
}


class ReportDocument implements DocumentPrototype {
  constructor(
    public title: string,
    public author: string,
    public sections: string[],
  ) {}


  clone(): DocumentPrototype {
    return new ReportDocument(this.title, this.author, [...this.sections]);
  }


  render(): string {
    return \`\${this.title} by \${this.author}: \${this.sections.join(", ")}\`;
  }
}


const template = new ReportDocument("Quarterly Report", "Atlas Team", [
  "Summary",
  "Metrics",
  "Conclusion",
]);


const copy = template.clone() as ReportDocument;
copy.title = "Quarterly Report Copy";
copy.sections.push("Appendix");


console.log(template.render());
console.log(copy.render());`,
    explanation:
      "The document prototype lets the editor clone a prepared template and then customize the copy without rebuilding the document from scratch.",
  },
  {
    language: "Java",
    code: `interface DocumentPrototype {
    DocumentPrototype clone();
    String render();
}


class ReportDocument implements DocumentPrototype {
    private String title;
    private String author;
    private String[] sections;


    public ReportDocument(String title, String author, String[] sections) {
        this.title = title;
        this.author = author;
        this.sections = sections;
    }


    public DocumentPrototype clone() {
        return new ReportDocument(title, author, sections.clone());
    }


    public String render() {
        return title + " by " + author + ": " + String.join(", ", sections);
    }
}


ReportDocument template = new ReportDocument(
    "Quarterly Report",
    "Atlas Team",
    new String[] { "Summary", "Metrics", "Conclusion" }
);


ReportDocument copy = (ReportDocument) template.clone();
copy = new ReportDocument("Quarterly Report Copy", "Atlas Team", new String[] { "Summary", "Metrics", "Conclusion", "Appendix" });


System.out.println(template.render());
System.out.println(copy.render());`,
    explanation:
      "The document prototype captures a reusable report structure so new documents can be created by cloning the template instead of reconstructing every field.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod
from copy import deepcopy


class DocumentPrototype(ABC):
    @abstractmethod
    def clone(self):
        pass


    @abstractmethod
    def render(self) -> str:
        pass


class ReportDocument(DocumentPrototype):
    def __init__(self, title: str, author: str, sections: list[str]) -> None:
        self.title = title
        self.author = author
        self.sections = sections


    def clone(self):
        return deepcopy(self)


    def render(self) -> str:
        return f"{self.title} by {self.author}: {', '.join(self.sections)}"


template = ReportDocument("Quarterly Report", "Atlas Team", ["Summary", "Metrics", "Conclusion"])
copy = template.clone()
copy.title = "Quarterly Report Copy"
copy.sections.append("Appendix")


print(template.render())
print(copy.render())`,
    explanation:
      "The document prototype uses cloning to duplicate a ready-made report layout, which makes it easy to create new documents with the same base structure.",
  },
  {
    language: "Angular",
    code: `interface DocumentPrototype {
  clone(): DocumentPrototype;
  render(): string;
}


class ReportDocument implements DocumentPrototype {
  constructor(
    public title: string,
    public author: string,
    public sections: string[],
  ) {}


  clone(): DocumentPrototype {
    return new ReportDocument(this.title, this.author, [...this.sections]);
  }


  render(): string {
    return \`\${this.title} by \${this.author}: \${this.sections.join(", ")}\`;
  }
}


const template = new ReportDocument("Quarterly Report", "Atlas Team", [
  "Summary",
  "Metrics",
  "Conclusion",
]);


const copy = template.clone() as ReportDocument;
copy.title = "Quarterly Report Copy";
copy.sections.push("Appendix");


console.log(template.render());
console.log(copy.render());`,
    explanation:
      "The Angular example clones a document template so the app can generate consistent content instances while still allowing each copy to be customized.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


interface DocumentPrototype {
  clone(): DocumentPrototype;
  render(): string;
}


class ReportDocument implements DocumentPrototype {
  constructor(
    public title: string,
    public author: string,
    public sections: string[],
  ) {}


  clone(): DocumentPrototype {
    return new ReportDocument(this.title, this.author, [...this.sections]);
  }


  render(): string {
    return \`\${this.title} by \${this.author}: \${this.sections.join(", ")}\`;
  }
}


function DocumentPreview({ document }: { document: DocumentPrototype }) {
  return <p>{document.render()}</p>;
}


export function App() {
  const template = useMemo(
    () => new ReportDocument("Quarterly Report", "Atlas Team", ["Summary", "Metrics", "Conclusion"]),
    [],
  );


  const copy = useMemo(() => {
    const cloned = template.clone() as ReportDocument;
    cloned.title = "Quarterly Report Copy";
    cloned.sections.push("Appendix");
    return cloned;
  }, [template]);


  return (
    <main>
      <h1>Document Template</h1>
      <DocumentPreview document={template} />
      <DocumentPreview document={copy} />
    </main>
  );
}`,
    explanation:
      "The React example clones a report prototype so the interface can show a base document and a customized copy without recreating the whole structure.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


interface DocumentPrototype {
  clone(): DocumentPrototype;
  render(): string;
}


class ReportDocument implements DocumentPrototype {
  constructor(
    public title: string,
    public author: string,
    public sections: string[],
  ) {}


  clone(): DocumentPrototype {
    return new ReportDocument(this.title, this.author, [...this.sections]);
  }


  render(): string {
    return \`\${this.title} by \${this.author}: \${this.sections.join(", ")}\`;
  }
}


function DocumentPreview({ document }: { document: DocumentPrototype }) {
  return (
    <View>
      <Text>{document.render()}</Text>
    </View>
  );
}


export function App() {
  const template = useMemo(
    () => new ReportDocument("Quarterly Report", "Atlas Team", ["Summary", "Metrics", "Conclusion"]),
    [],
  );


  const copy = useMemo(() => {
    const cloned = template.clone() as ReportDocument;
    cloned.title = "Quarterly Report Copy";
    cloned.sections.push("Appendix");
    return cloned;
  }, [template]);


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Document Template</Text>
        <DocumentPreview document={template} />
        <DocumentPreview document={copy} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native example clones a document prototype so the mobile UI can display multiple versions of the same base layout with small changes.",
  },
  {
    language: "C#",
    code: `using System;
using System.Collections.Generic;


public interface IDocumentPrototype
{
    IDocumentPrototype Clone();
    string Render();
}


public class ReportDocument : IDocumentPrototype
{
    public string Title { get; set; }
    public string Author { get; set; }
    public List<string> Sections { get; set; }


    public ReportDocument(string title, string author, List<string> sections)
    {
        Title = title;
        Author = author;
        Sections = sections;
    }


    public IDocumentPrototype Clone()
    {
        return new ReportDocument(Title, Author, new List<string>(Sections));
    }


    public string Render()
    {
        return $"{Title} by {Author}: {string.Join(", ", Sections)}";
    }
}


var template = new ReportDocument(
    "Quarterly Report",
    "Atlas Team",
    new List<string> { "Summary", "Metrics", "Conclusion" }
);


var copy = (ReportDocument)template.Clone();
copy.Title = "Quarterly Report Copy";
copy.Sections.Add("Appendix");


Console.WriteLine(template.Render());
Console.WriteLine(copy.Render());`,
    explanation:
      "The C# document prototype makes it easy to duplicate a structured report and then adjust the copy without rebuilding the original template.",
  },
  {
    language: ".NET",
    code: `using System;
using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;


public interface IDocumentPrototype
{
    IDocumentPrototype Clone();
    string Render();
}


public class ReportDocument : IDocumentPrototype
{
    public string Title { get; set; }
    public string Author { get; set; }
    public List<string> Sections { get; set; }


    public ReportDocument(string title, string author, List<string> sections)
    {
        Title = title;
        Author = author;
        Sections = sections;
    }


    public IDocumentPrototype Clone()
    {
        return new ReportDocument(Title, Author, new List<string>(Sections));
    }


    public string Render()
    {
        return $"{Title} by {Author}: {string.Join(", ", Sections)}";
    }
}


var services = new ServiceCollection();
services.AddSingleton(new ReportDocument(
    "Quarterly Report",
    "Atlas Team",
    new List<string> { "Summary", "Metrics", "Conclusion" }
));


var provider = services.BuildServiceProvider();
var template = provider.GetRequiredService<ReportDocument>();
var copy = (ReportDocument)template.Clone();
copy.Title = "Quarterly Report Copy";
copy.Sections.Add("Appendix");


Console.WriteLine(template.Render());
Console.WriteLine(copy.Render());`,
    explanation:
      "The .NET version uses a prototype registered in dependency injection so the app can clone a ready-made document and customize each copy.",
  },
];
