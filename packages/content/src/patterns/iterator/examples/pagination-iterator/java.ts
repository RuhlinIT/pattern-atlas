import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Pagination iterator",
  code: "class PaginationIterator<T> {\n    private int pageIndex = 0;\n    private int itemIndex = 0;\n    private final java.util.List<java.util.List<T>> pages;\n\n\n    public PaginationIterator(java.util.List<java.util.List<T>> pages) {\n        this.pages = pages;\n    }\n\n\n    public T next() {\n        if (!hasNext()) {\n            return null;\n        }\n\n\n        T item = pages.get(pageIndex).get(itemIndex);\n        itemIndex++;\n\n\n        if (itemIndex >= pages.get(pageIndex).size()) {\n            pageIndex++;\n            itemIndex = 0;\n        }\n\n\n        return item;\n    }\n\n\n    public boolean hasNext() {\n        return pageIndex < pages.size();\n    }\n}\n\n\nPaginationIterator<String> iterator = new PaginationIterator<>(\n    java.util.List.of(\n        java.util.List.of(\"Alice\", \"Bob\"),\n        java.util.List.of(\"Carla\", \"David\"),\n        java.util.List.of(\"Elena\")\n    )\n);\n\n\nwhile (iterator.hasNext()) {\n    System.out.println(iterator.next());\n}",
  explanation: "The Java example walks through paged data sequentially while keeping page handling details inside the iterator.",
};
