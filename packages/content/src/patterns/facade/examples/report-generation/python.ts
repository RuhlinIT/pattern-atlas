import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Report generation",
  code: `class DataSource:
    def fetch(self):
        return [1, 2, 3]

class Formatter:
    def format(self, data):
        return ",".join(str(item) for item in data)

class Delivery:
    def send(self, report):
        return len(report) > 0

class ReportFacade:
    def __init__(self, source, formatter, delivery):
        self.source = source
        self.formatter = formatter
        self.delivery = delivery

    def generate_report(self):
        data = self.source.fetch()
        report = self.formatter.format(data)
        return self.delivery.send(report)

facade = ReportFacade(DataSource(), Formatter(), Delivery())
facade.generate_report()`,
  explanation:
    "Hide data collection, formatting, and delivery behind one report-generation method.",
};