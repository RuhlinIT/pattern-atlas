import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Data import template",
  code: "from abc import ABC, abstractmethod\n\n\nclass DataImporter(ABC):\n    def import_data(self) -> None:\n        raw = self.read_source()\n        parsed = self.parse(raw)\n        self.validate(parsed)\n        self.save(parsed)\n\n\n    @abstractmethod\n    def read_source(self) -> str:\n        pass\n\n\n    @abstractmethod\n    def parse(self, raw: str) -> object:\n        pass\n\n\n    def validate(self, data: object) -> None:\n        print(\"Validating imported data\")\n\n\n    def save(self, data: object) -> None:\n        print(\"Saving imported data\")\n\n\nclass CsvImporter(DataImporter):\n    def read_source(self) -> str:\n        return \"name,age\\nAlice,30\"\n\n\n    def parse(self, raw: str) -> object:\n        return [line.split(\",\") for line in raw.split(\"\\n\")]\n\n\nclass JsonImporter(DataImporter):\n    def read_source(self) -> str:\n        return '{\"name\":\"Alice\",\"age\":30}'\n\n\n    def parse(self, raw: str) -> object:\n        return raw\n\n\ncsv = CsvImporter()\ncsv.import_data()\n\n\njson = JsonImporter()\njson.import_data()",
  explanation: "The Python data importer uses a fixed import sequence while letting each file type control how input is read and parsed.",
};
