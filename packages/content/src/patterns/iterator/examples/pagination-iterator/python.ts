import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Pagination iterator",
  code: "class PaginationIterator:\n    def __init__(self, pages: list[list[str]]) -> None:\n        self.pages = pages\n        self.page_index = 0\n        self.item_index = 0\n\n\n    def next(self) -> str | None:\n        if not self.has_next():\n            return None\n\n\n        item = self.pages[self.page_index][self.item_index]\n        self.item_index += 1\n\n\n        if self.item_index >= len(self.pages[self.page_index]):\n            self.page_index += 1\n            self.item_index = 0\n\n\n        return item\n\n\n    def has_next(self) -> bool:\n        return self.page_index < len(self.pages)\n\n\niterator = PaginationIterator([\n    [\"Alice\", \"Bob\"],\n    [\"Carla\", \"David\"],\n    [\"Elena\"]\n])\n\n\nwhile iterator.has_next():\n    print(iterator.next())",
  explanation: "The Python pagination iterator abstracts page transitions so the client can treat multiple pages like one stream of items.",
};
