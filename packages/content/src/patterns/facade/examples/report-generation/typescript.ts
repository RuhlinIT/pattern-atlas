import type { PatternLanguageExample } from "@atlas-patterns/schemas";

class DataSource {
  fetch() {
    return [1, 2, 3];
  }
}

class Formatter {
  format(data: number[]) {
    return data.join(",");
  }
}

class Delivery {
  send(report: string) {
    return report.length > 0;
  }
}

class ReportFacade {
  constructor(
    private source: DataSource,
    private formatter: Formatter,
    private delivery: Delivery,
  ) {}

  generateReport() {
    const data = this.source.fetch();
    const report = this.formatter.format(data);
    return this.delivery.send(report);
  }
}

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Report generation",
  code: `class DataSource {
  fetch() {
    return [1, 2, 3];
  }
}

class Formatter {
  format(data: number[]) {
    return data.join(",");
  }
}

class Delivery {
  send(report: string) {
    return report.length > 0;
  }
}

class ReportFacade {
  constructor(
    private source: DataSource,
    private formatter: Formatter,
    private delivery: Delivery,
  ) {}

  generateReport() {
    const data = this.source.fetch();
    const report = this.formatter.format(data);
    return this.delivery.send(report);
  }
}

new ReportFacade(new DataSource(), new Formatter(), new Delivery()).generateReport();`,
  explanation: "Hide data collection, formatting, and delivery behind one report-generation method.",
};