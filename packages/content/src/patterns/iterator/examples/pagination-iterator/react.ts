import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Pagination iterator",
  code: "import React, { useMemo } from \"react\";\n\n\nclass PaginationIterator<T> {\n  private pageIndex = 0;\n  private itemIndex = 0;\n\n\n  constructor(private pages: T[][]) {}\n\n\n  next(): T | null {\n    if (!this.hasNext()) {\n      return null;\n    }\n\n\n    const item = this.pages[this.pageIndex][this.itemIndex];\n    this.itemIndex++;\n\n\n    if (this.itemIndex >= this.pages[this.pageIndex].length) {\n      this.pageIndex++;\n      this.itemIndex = 0;\n    }\n\n\n    return item;\n  }\n\n\n  hasNext(): boolean {\n    return this.pageIndex < this.pages.length;\n  }\n}\n\n\nfunction PagedList({ iterator }: { iterator: PaginationIterator<string> }) {\n  const items: string[] = [];\n  while (iterator.hasNext()) {\n    const value = iterator.next();\n    if (value) items.push(value);\n  }\n\n\n  return <p>{items.join(\", \")}</p>;\n}\n\n\nexport function App() {\n  const iterator = useMemo(\n    () => new PaginationIterator([[\"Alice\", \"Bob\"], [\"Carla\", \"David\"], [\"Elena\"]]),\n    []\n  );\n\n\n  return (\n    <main>\n      <h1>Pagination Iterator</h1>\n      <PagedList iterator={iterator} />\n    </main>\n  );\n}",
  explanation: "The React example consumes paginated results through an iterator and renders the flattened list in the UI.",
};
