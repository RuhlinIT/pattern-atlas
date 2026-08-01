import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Pagination iterator",
  code: "class PaginationIterator<T> {\n  private pageIndex = 0;\n  private itemIndex = 0;\n\n\n  constructor(private pages: T[][]) {}\n\n\n  next(): T | null {\n    if (!this.hasNext()) {\n      return null;\n    }\n\n\n    const item = this.pages[this.pageIndex][this.itemIndex];\n    this.itemIndex++;\n\n\n    if (this.itemIndex >= this.pages[this.pageIndex].length) {\n      this.pageIndex++;\n      this.itemIndex = 0;\n    }\n\n\n    return item;\n  }\n\n\n  hasNext(): boolean {\n    return this.pageIndex < this.pages.length;\n  }\n}\n\n\nconst iterator = new PaginationIterator([\n  [\"Alice\", \"Bob\"],\n  [\"Carla\", \"David\"],\n  [\"Elena\"]\n]);\n\n\nwhile (iterator.hasNext()) {\n  console.log(iterator.next());\n}",
  explanation: "The pagination iterator hides page boundaries and lets the client consume results one item at a time.",
};
