import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const csharp: PatternLanguageExample = {
  language: "csharp",
  title: "Pagination iterator",
  code: "using System;\nusing System.Collections.Generic;\n\n\npublic class PaginationIterator<T>\n{\n    private readonly List<List<T>> _pages;\n    private int _pageIndex = 0;\n    private int _itemIndex = 0;\n\n\n    public PaginationIterator(List<List<T>> pages)\n    {\n        _pages = pages;\n    }\n\n\n    public T Next()\n    {\n        if (!HasNext())\n        {\n            return default;\n        }\n\n\n        var item = _pages[_pageIndex][_itemIndex];\n        _itemIndex++;\n\n\n        if (_itemIndex >= _pages[_pageIndex].Count)\n        {\n            _pageIndex++;\n            _itemIndex = 0;\n        }\n\n\n        return item;\n    }\n\n\n    public bool HasNext()\n    {\n        return _pageIndex < _pages.Count;\n    }\n}\n\n\nvar iterator = new PaginationIterator<string>(new List<List<string>>\n{\n    new List<string> { \"Alice\", \"Bob\" },\n    new List<string> { \"Carla\", \"David\" },\n    new List<string> { \"Elena\" }\n});\n\n\nwhile (iterator.HasNext())\n{\n    Console.WriteLine(iterator.Next());\n}",
  explanation: "The C# pagination iterator consumes results across multiple pages without exposing how those pages are organized internally.",
};
