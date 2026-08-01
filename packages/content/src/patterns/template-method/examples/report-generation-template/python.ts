import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Report generation template",
  code: "from abc import ABC, abstractmethod\n\n\nclass ReportGenerator(ABC):\n    def generate(self) -> None:\n        self.collect_data()\n        self.format_header()\n        self.render_body()\n        self.format_footer()\n\n\n    def collect_data(self) -> None:\n        print(\"Collecting data\")\n\n\n    def format_header(self) -> None:\n        print(\"Formatting header\")\n\n\n    @abstractmethod\n    def render_body(self) -> None:\n        pass\n\n\n    def format_footer(self) -> None:\n        print(\"Formatting footer\")\n\n\nclass SalesReportGenerator(ReportGenerator):\n    def render_body(self) -> None:\n        print(\"Rendering sales report body\")\n\n\nclass InventoryReportGenerator(ReportGenerator):\n    def render_body(self) -> None:\n        print(\"Rendering inventory report body\")\n\n\nsales = SalesReportGenerator()\nsales.generate()\n\n\ninventory = InventoryReportGenerator()\ninventory.generate()",
  explanation: "The Python report generator centralizes the report lifecycle and lets subclasses customize only the body section.",
};
