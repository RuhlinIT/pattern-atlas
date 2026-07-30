import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const reportGenerationTemplateExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `abstract class ReportGenerator {
  generate(): void {
    this.collectData();
    this.formatHeader();
    this.renderBody();
    this.formatFooter();
  }


  protected collectData(): void {
    console.log("Collecting data");
  }


  protected formatHeader(): void {
    console.log("Formatting header");
  }


  protected abstract renderBody(): void;


  protected formatFooter(): void {
    console.log("Formatting footer");
  }
}


class SalesReportGenerator extends ReportGenerator {
  protected renderBody(): void {
    console.log("Rendering sales report body");
  }
}


class InventoryReportGenerator extends ReportGenerator {
  protected renderBody(): void {
    console.log("Rendering inventory report body");
  }
}


const sales = new SalesReportGenerator();
sales.generate();


const inventory = new InventoryReportGenerator();
inventory.generate();`,
    explanation:
      "The report generator keeps the report workflow fixed while subclasses customize the body rendering step.",
  },
  {
    language: "Java",
    code: `abstract class ReportGenerator {
    public final void generate() {
        collectData();
        formatHeader();
        renderBody();
        formatFooter();
    }


    protected void collectData() {
        System.out.println("Collecting data");
    }


    protected void formatHeader() {
        System.out.println("Formatting header");
    }


    protected abstract void renderBody();


    protected void formatFooter() {
        System.out.println("Formatting footer");
    }
}


class SalesReportGenerator extends ReportGenerator {
    protected void renderBody() {
        System.out.println("Rendering sales report body");
    }
}


class InventoryReportGenerator extends ReportGenerator {
    protected void renderBody() {
        System.out.println("Rendering inventory report body");
    }
}


ReportGenerator sales = new SalesReportGenerator();
sales.generate();


ReportGenerator inventory = new InventoryReportGenerator();
inventory.generate();`,
    explanation:
      "The Java report generator shares the same generation flow while each report type defines its own body content.",
  },
  {
    language: "Python",
    code: `from abc import ABC, abstractmethod


class ReportGenerator(ABC):
    def generate(self) -> None:
        self.collect_data()
        self.format_header()
        self.render_body()
        self.format_footer()


    def collect_data(self) -> None:
        print("Collecting data")


    def format_header(self) -> None:
        print("Formatting header")


    @abstractmethod
    def render_body(self) -> None:
        pass


    def format_footer(self) -> None:
        print("Formatting footer")


class SalesReportGenerator(ReportGenerator):
    def render_body(self) -> None:
        print("Rendering sales report body")


class InventoryReportGenerator(ReportGenerator):
    def render_body(self) -> None:
        print("Rendering inventory report body")


sales = SalesReportGenerator()
sales.generate()


inventory = InventoryReportGenerator()
inventory.generate()`,
    explanation:
      "The Python report generator centralizes the report lifecycle and lets subclasses customize only the body section.",
  },
  {
    language: "Angular",
    code: `abstract class ReportGenerator {
  generate(): void {
    this.collectData();
    this.formatHeader();
    this.renderBody();
    this.formatFooter();
  }


  protected collectData(): void {
    console.log("Collecting data");
  }


  protected formatHeader(): void {
    console.log("Formatting header");
  }


  protected abstract renderBody(): void;


  protected formatFooter(): void {
    console.log("Formatting footer");
  }
}


class SalesReportGenerator extends ReportGenerator {
  protected renderBody(): void {
    console.log("Rendering sales report body");
  }
}


class InventoryReportGenerator extends ReportGenerator {
  protected renderBody(): void {
    console.log("Rendering inventory report body");
  }
}


const sales = new SalesReportGenerator();
sales.generate();


const inventory = new InventoryReportGenerator();
inventory.generate();`,
    explanation:
      "The Angular example preserves a common report workflow while allowing subclasses to define different report bodies.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


abstract class ReportGenerator {
  generate(): void {
    this.collectData();
    this.formatHeader();
    this.renderBody();
    this.formatFooter();
  }


  protected collectData(): void {
    console.log("Collecting data");
  }


  protected formatHeader(): void {
    console.log("Formatting header");
  }


  protected abstract renderBody(): void;


  protected formatFooter(): void {
    console.log("Formatting footer");
  }
}


class SalesReportGenerator extends ReportGenerator {
  protected renderBody(): void {
    console.log("Rendering sales report body");
  }
}


class InventoryReportGenerator extends ReportGenerator {
  protected renderBody(): void {
    console.log("Rendering inventory report body");
  }
}


function ReportPreview({ generator }: { generator: ReportGenerator }) {
  return <p>Report generator ready</p>;
}


export function App() {
  const generator = useMemo(() => new SalesReportGenerator(), []);


  useMemo(() => {
    generator.generate();
  }, [generator]);


  return (
    <main>
      <h1>Report Generation Template</h1>
      <ReportPreview generator={generator} />
    </main>
  );
}`,
    explanation:
      "The React example keeps the report algorithm in the base class and allows different report types to vary the body step.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


abstract class ReportGenerator {
  generate(): void {
    this.collectData();
    this.formatHeader();
    this.renderBody();
    this.formatFooter();
  }


  protected collectData(): void {
    console.log("Collecting data");
  }


  protected formatHeader(): void {
    console.log("Formatting header");
  }


  protected abstract renderBody(): void;


  protected formatFooter(): void {
    console.log("Formatting footer");
  }
}


class SalesReportGenerator extends ReportGenerator {
  protected renderBody(): void {
    console.log("Rendering sales report body");
  }
}


class InventoryReportGenerator extends ReportGenerator {
  protected renderBody(): void {
    console.log("Rendering inventory report body");
  }
}


function ReportPreview() {
  return (
    <View>
      <Text>Report generator ready</Text>
    </View>
  );
}


export function App() {
  const generator = useMemo(() => new SalesReportGenerator(), []);


  useMemo(() => {
    generator.generate();
  }, [generator]);


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Report Generation Template</Text>
        <ReportPreview />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native example follows the same report pipeline while the subclass determines the report body content.",
  },
  {
    language: "C#",
    code: `using System;


public abstract class ReportGenerator
{
    public void Generate()
    {
        CollectData();
        FormatHeader();
        RenderBody();
        FormatFooter();
    }


    protected virtual void CollectData()
    {
        Console.WriteLine("Collecting data");
    }


    protected virtual void FormatHeader()
    {
        Console.WriteLine("Formatting header");
    }


    protected abstract void RenderBody();


    protected virtual void FormatFooter()
    {
        Console.WriteLine("Formatting footer");
    }
}


public class SalesReportGenerator : ReportGenerator
{
    protected override void RenderBody()
    {
        Console.WriteLine("Rendering sales report body");
    }
}


public class InventoryReportGenerator : ReportGenerator
{
    protected override void RenderBody()
    {
        Console.WriteLine("Rendering inventory report body");
    }
}


var sales = new SalesReportGenerator();
sales.Generate();


var inventory = new InventoryReportGenerator();
inventory.Generate();`,
    explanation:
      "The C# report generator keeps the report lifecycle fixed and lets subclasses supply the body rendering step.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;


public abstract class ReportGenerator
{
    public void Generate()
    {
        CollectData();
        FormatHeader();
        RenderBody();
        FormatFooter();
    }


    protected virtual void CollectData()
    {
        Console.WriteLine("Collecting data");
    }


    protected virtual void FormatHeader()
    {
        Console.WriteLine("Formatting header");
    }


    protected abstract void RenderBody();


    protected virtual void FormatFooter()
    {
        Console.WriteLine("Formatting footer");
    }
}


public class SalesReportGenerator : ReportGenerator
{
    protected override void RenderBody()
    {
        Console.WriteLine("Rendering sales report body");
    }
}


public class InventoryReportGenerator : ReportGenerator
{
    protected override void RenderBody()
    {
        Console.WriteLine("Rendering inventory report body");
    }
}


var services = new ServiceCollection();
services.AddSingleton<SalesReportGenerator>();

var provider = services.BuildServiceProvider();
var generator = provider.GetRequiredService<SalesReportGenerator>();

generator.Generate();`,
    explanation:
      "The .NET example resolves a report generator through dependency injection while the base class holds the generation template.",
  },
];
