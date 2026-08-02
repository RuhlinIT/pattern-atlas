import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Report generation",
  code: `from dataclasses import dataclass, field
from typing import List, Optional

@dataclass
class Report:
    title: str = ""
    sections: List[str] = field(default_factory=list)
    charts: List[str] = field(default_factory=list)
    footer: Optional[str] = None

class ReportBuilder:
    def __init__(self):
        self._report = Report()

    def title(self, title: str):
        self._report.title = title
        return self

    def add_section(self, section: str):
        self._report.sections.append(section)
        return self

    def add_chart(self, chart: str):
        self._report.charts.append(chart)
        return self

    def footer(self, footer: str):
        self._report.footer = footer
        return self

    def build(self):
        if not self._report.title:
            raise ValueError("title is required")
        return self._report

report = (
    ReportBuilder()
    .title("Quarterly Revenue")
    .add_section("Summary")
    .add_chart("Revenue by Region")
    .footer("Confidential")
    .build()
)`,
  explanation:
    "A builder helps when a report is assembled from optional sections and formatting choices.",
};