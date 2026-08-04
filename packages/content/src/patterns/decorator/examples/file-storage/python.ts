import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "File storage",
  code: `class FileStorage:
    def write(self, name, data):
        print(f"store {name}: {data}")

class CompressionStorage:
    def __init__(self, wrapped):
        self.wrapped = wrapped

    def write(self, name, data):
        self.wrapped.write(name, f"[compressed] {data}")
`,
  explanation: "Layer compression and encryption around storage before the base write operation runs.",
};