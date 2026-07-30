import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const reportBuilderExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `class Report {
  constructor(
    public title: string,
    public summary: string,
    public sections: string[],
    public includeCharts: boolean,
  ) {}
}

class ReportBuilder {
  private title = "Untitled Report";
  private summary = "";
  private sections: string[] = [];
  private includeCharts = false;

  withTitle(title: string): this {
    this.title = title;
    return this;
  }

  withSummary(summary: string): this {
    this.summary = summary;
    return this;
  }

  addSection(section: string): this {
    this.sections.push(section);
    return this;
  }

  withCharts(includeCharts: boolean): this {
    this.includeCharts = includeCharts;
    return this;
  }

  build(): Report {
    return new Report(this.title, this.summary, [...this.sections], this.includeCharts);
  }
}

const report = new ReportBuilder()
  .withTitle("Quarterly Review")
  .withSummary("Q1 performance overview")
  .addSection("Revenue")
  .addSection("Growth")
  .withCharts(true)
  .build();

console.log(report);`,
    explanation:
      "The builder assembles a report piece by piece, which is ideal when different report types need different optional sections and settings.",
  },
  {
    language: "Java",
    code: `import java.util.ArrayList;
import java.util.List;

class Report {
    public final String title;
    public final String summary;
    public final List<String> sections;
    public final boolean includeCharts;

    public Report(String title, String summary, List<String> sections, boolean includeCharts) {
        this.title = title;
        this.summary = summary;
        this.sections = sections;
        this.includeCharts = includeCharts;
    }
}

class ReportBuilder {
    private String title = "Untitled Report";
    private String summary = "";
    private final List<String> sections = new ArrayList<>();
    private boolean includeCharts = false;

    public ReportBuilder withTitle(String title) {
        this.title = title;
        return this;
    }

    public ReportBuilder withSummary(String summary) {
        this.summary = summary;
        return this;
    }

    public ReportBuilder addSection(String section) {
        sections.add(section);
        return this;
    }

    public ReportBuilder withCharts(boolean includeCharts) {
        this.includeCharts = includeCharts;
        return this;
    }

    public Report build() {
        return new Report(title, summary, new ArrayList<>(sections), includeCharts);
    }
}

Report report = new ReportBuilder()
    .withTitle("Quarterly Review")
    .withSummary("Q1 performance overview")
    .addSection("Revenue")
    .addSection("Growth")
    .withCharts(true)
    .build();

System.out.println(report.title);`,
    explanation:
      "The report builder makes it easy to configure a document with many optional parts while keeping construction code straightforward.",
  },
  {
    language: "Python",
    code: `class Report:
    def __init__(
        self,
        title: str,
        summary: str,
        sections: list[str],
        include_charts: bool,
    ) -> None:
        self.title = title
        self.summary = summary
        self.sections = sections
        self.include_charts = include_charts


class ReportBuilder:
    def __init__(self) -> None:
        self.title = "Untitled Report"
        self.summary = ""
        self.sections: list[str] = []
        self.include_charts = False

    def with_title(self, title: str) -> "ReportBuilder":
        self.title = title
        return self

    def with_summary(self, summary: str) -> "ReportBuilder":
        self.summary = summary
        return self

    def add_section(self, section: str) -> "ReportBuilder":
        self.sections.append(section)
        return self

    def with_charts(self, include_charts: bool) -> "ReportBuilder":
        self.include_charts = include_charts
        return self

    def build(self) -> Report:
        return Report(self.title, self.summary, list(self.sections), self.include_charts)


report = (
    ReportBuilder()
    .with_title("Quarterly Review")
    .with_summary("Q1 performance overview")
    .add_section("Revenue")
    .add_section("Growth")
    .with_charts(True)
    .build()
)

print(report.__dict__)`,
    explanation:
      "The builder lets report construction stay readable while optional sections and presentation settings are added step by step.",
  },
  {
    language: "Angular",
    code: `class Report {
  constructor(
    public title: string,
    public summary: string,
    public sections: string[],
    public includeCharts: boolean,
  ) {}
}

class ReportBuilder {
  private title = "Untitled Report";
  private summary = "";
  private sections: string[] = [];
  private includeCharts = false;

  withTitle(title: string): this {
    this.title = title;
    return this;
  }

  withSummary(summary: string): this {
    this.summary = summary;
    return this;
  }

  addSection(section: string): this {
    this.sections.push(section);
    return this;
  }

  withCharts(includeCharts: boolean): this {
    this.includeCharts = includeCharts;
    return this;
  }

  build(): Report {
    return new Report(this.title, this.summary, [...this.sections], this.includeCharts);
  }
}

const report = new ReportBuilder()
  .withTitle("Quarterly Review")
  .withSummary("Q1 performance overview")
  .addSection("Revenue")
  .addSection("Growth")
  .withCharts(true)
  .build();

console.log(report);`,
    explanation:
      "The Angular example uses the same builder flow, keeping report assembly organized and easy to extend.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";

class Report {
  constructor(
    public title: string,
    public summary: string,
    public sections: string[],
    public includeCharts: boolean,
  ) {}
}

class ReportBuilder {
  private title = "Untitled Report";
  private summary = "";
  private sections: string[] = [];
  private includeCharts = false;

  withTitle(title: string): this {
    this.title = title;
    return this;
  }

  withSummary(summary: string): this {
    this.summary = summary;
    return this;
  }

  addSection(section: string): this {
    this.sections.push(section);
    return this;
  }

  withCharts(includeCharts: boolean): this {
    this.includeCharts = includeCharts;
    return this;
  }

  build(): Report {
    return new Report(this.title, this.summary, [...this.sections], this.includeCharts);
  }
}

function ReportPreview({ report }: { report: Report }) {
  return (
    <div>
      <p>{report.title}</p>
      <p>{report.summary}</p>
      <p>Sections: {report.sections.join(", ")}</p>
      <p>Charts: {report.includeCharts ? "yes" : "no"}</p>
    </div>
  );
}

export function App() {
  const report = useMemo(
    () =>
      new ReportBuilder()
        .withTitle("Quarterly Review")
        .withSummary("Q1 performance overview")
        .addSection("Revenue")
        .addSection("Growth")
        .withCharts(true)
        .build(),
    [],
  );

  return (
    <main>
      <h1>Report Builder</h1>
      <ReportPreview report={report} />
    </main>
  );
}`,
    explanation:
      "The React example builds the report first, then passes the finished object into the UI for display.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";

class Report {
  constructor(
    public title: string,
    public summary: string,
    public sections: string[],
    public includeCharts: boolean,
  ) {}
}

class ReportBuilder {
  private title = "Untitled Report";
  private summary = "";
  private sections: string[] = [];
  private includeCharts = false;

  withTitle(title: string): this {
    this.title = title;
    return this;
  }

  withSummary(summary: string): this {
    this.summary = summary;
    return this;
  }

  addSection(section: string): this {
    this.sections.push(section);
    return this;
  }

  withCharts(includeCharts: boolean): this {
    this.includeCharts = includeCharts;
    return this;
  }

  build(): Report {
    return new Report(this.title, this.summary, [...this.sections], this.includeCharts);
  }
}

function ReportPreview({ report }: { report: Report }) {
  return (
    <View>
      <Text>{report.title}</Text>
      <Text>{report.summary}</Text>
      <Text>Sections: {report.sections.join(", ")}</Text>
      <Text>Charts: {report.includeCharts ? "yes" : "no"}</Text>
    </View>
  );
}

export function App() {
  const report = useMemo(
    () =>
      new ReportBuilder()
        .withTitle("Quarterly Review")
        .withSummary("Q1 performance overview")
        .addSection("Revenue")
        .addSection("Growth")
        .withCharts(true)
        .build(),
    [],
  );

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Report Builder</Text>
        <ReportPreview report={report} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native example keeps report assembly outside the UI and shows the final built report in a mobile layout.",
  },
  {
    language: "C#",
    code: `using System;
using System.Collections.Generic;
using System.Linq;

public class Report
{
    public string Title { get; }
    public string Summary { get; }
    public List<string> Sections { get; }
    public bool IncludeCharts { get; }

    public Report(string title, string summary, List<string> sections, bool includeCharts)
    {
        Title = title;
        Summary = summary;
        Sections = sections;
        IncludeCharts = includeCharts;
    }
}

public class ReportBuilder
{
    private string _title = "Untitled Report";
    private string _summary = "";
    private readonly List<string> _sections = new();
    private bool _includeCharts = false;

    public ReportBuilder WithTitle(string title)
    {
        _title = title;
        return this;
    }

    public ReportBuilder WithSummary(string summary)
    {
        _summary = summary;
        return this;
    }

    public ReportBuilder AddSection(string section)
    {
        _sections.Add(section);
        return this;
    }

    public ReportBuilder WithCharts(bool includeCharts)
    {
        _includeCharts = includeCharts;
        return this;
    }

    public Report Build()
    {
        return new Report(_title, _summary, _sections.ToList(), _includeCharts);
    }
}

var report = new ReportBuilder()
    .WithTitle("Quarterly Review")
    .WithSummary("Q1 performance overview")
    .AddSection("Revenue")
    .AddSection("Growth")
    .WithCharts(true)
    .Build();

Console.WriteLine(report.Title);`,
    explanation:
      "The C# report builder keeps the configuration readable while allowing optional sections and chart settings to be added incrementally.",
  },
  {
    language: ".NET",
    code: `using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.DependencyInjection;

public class Report
{
    public string Title { get; }
    public string Summary { get; }
    public List<string> Sections { get; }
    public bool IncludeCharts { get; }

    public Report(string title, string summary, List<string> sections, bool includeCharts)
    {
        Title = title;
        Summary = summary;
        Sections = sections;
        IncludeCharts = includeCharts;
    }
}

public class ReportBuilder
{
    private string _title = "Untitled Report";
    private string _summary = "";
    private readonly List<string> _sections = new();
    private bool _includeCharts = false;

    public ReportBuilder WithTitle(string title)
    {
        _title = title;
        return this;
    }

    public ReportBuilder WithSummary(string summary)
    {
        _summary = summary;
        return this;
    }

    public ReportBuilder AddSection(string section)
    {
        _sections.Add(section);
        return this;
    }

    public ReportBuilder WithCharts(bool includeCharts)
    {
        _includeCharts = includeCharts;
        return this;
    }

    public Report Build()
    {
        return new Report(_title, _summary, _sections.ToList(), _includeCharts);
    }
}

var services = new ServiceCollection();
services.AddSingleton<ReportBuilder>();
var provider = services.BuildServiceProvider();

var report = provider.GetRequiredService<ReportBuilder>()
    .WithTitle("Quarterly Review")
    .WithSummary("Q1 performance overview")
    .AddSection("Revenue")
    .AddSection("Growth")
    .WithCharts(true)
    .Build();

Console.WriteLine(report.Title);`,
    explanation:
      "The .NET version uses the same builder structure with dependency injection available, so report construction remains flexible and easy to read.",
  },
];