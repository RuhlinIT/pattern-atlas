import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const paginationIteratorExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `class PaginationIterator<T> {
  private pageIndex = 0;
  private itemIndex = 0;


  constructor(private pages: T[][]) {}


  next(): T | null {
    if (!this.hasNext()) {
      return null;
    }


    const item = this.pages[this.pageIndex][this.itemIndex];
    this.itemIndex++;


    if (this.itemIndex >= this.pages[this.pageIndex].length) {
      this.pageIndex++;
      this.itemIndex = 0;
    }


    return item;
  }


  hasNext(): boolean {
    return this.pageIndex < this.pages.length;
  }
}


const iterator = new PaginationIterator([
  ["Alice", "Bob"],
  ["Carla", "David"],
  ["Elena"]
]);


while (iterator.hasNext()) {
  console.log(iterator.next());
}`,
    explanation:
      "The pagination iterator hides page boundaries and lets the client consume results one item at a time.",
  },
  {
    language: "Java",
    code: `class PaginationIterator<T> {
    private int pageIndex = 0;
    private int itemIndex = 0;
    private final java.util.List<java.util.List<T>> pages;


    public PaginationIterator(java.util.List<java.util.List<T>> pages) {
        this.pages = pages;
    }


    public T next() {
        if (!hasNext()) {
            return null;
        }


        T item = pages.get(pageIndex).get(itemIndex);
        itemIndex++;


        if (itemIndex >= pages.get(pageIndex).size()) {
            pageIndex++;
            itemIndex = 0;
        }


        return item;
    }


    public boolean hasNext() {
        return pageIndex < pages.size();
    }
}


PaginationIterator<String> iterator = new PaginationIterator<>(
    java.util.List.of(
        java.util.List.of("Alice", "Bob"),
        java.util.List.of("Carla", "David"),
        java.util.List.of("Elena")
    )
);


while (iterator.hasNext()) {
    System.out.println(iterator.next());
}`,
    explanation:
      "The Java example walks through paged data sequentially while keeping page handling details inside the iterator.",
  },
  {
    language: "Python",
    code: `class PaginationIterator:
    def __init__(self, pages: list[list[str]]) -> None:
        self.pages = pages
        self.page_index = 0
        self.item_index = 0


    def next(self) -> str | None:
        if not self.has_next():
            return None


        item = self.pages[self.page_index][self.item_index]
        self.item_index += 1


        if self.item_index >= len(self.pages[self.page_index]):
            self.page_index += 1
            self.item_index = 0


        return item


    def has_next(self) -> bool:
        return self.page_index < len(self.pages)


iterator = PaginationIterator([
    ["Alice", "Bob"],
    ["Carla", "David"],
    ["Elena"]
])


while iterator.has_next():
    print(iterator.next())`,
    explanation:
      "The Python pagination iterator abstracts page transitions so the client can treat multiple pages like one stream of items.",
  },
  {
    language: "Angular",
    code: `class PaginationIterator<T> {
  private pageIndex = 0;
  private itemIndex = 0;


  constructor(private pages: T[][]) {}


  next(): T | null {
    if (!this.hasNext()) {
      return null;
    }


    const item = this.pages[this.pageIndex][this.itemIndex];
    this.itemIndex++;


    if (this.itemIndex >= this.pages[this.pageIndex].length) {
      this.pageIndex++;
      this.itemIndex = 0;
    }


    return item;
  }


  hasNext(): boolean {
    return this.pageIndex < this.pages.length;
  }
}


const iterator = new PaginationIterator([
  ["Alice", "Bob"],
  ["Carla", "David"],
  ["Elena"]
]);


while (iterator.hasNext()) {
  console.log(iterator.next());
}`,
    explanation:
      "The Angular example demonstrates how pagination can be hidden behind an iterator interface for cleaner client code.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


class PaginationIterator<T> {
  private pageIndex = 0;
  private itemIndex = 0;


  constructor(private pages: T[][]) {}


  next(): T | null {
    if (!this.hasNext()) {
      return null;
    }


    const item = this.pages[this.pageIndex][this.itemIndex];
    this.itemIndex++;


    if (this.itemIndex >= this.pages[this.pageIndex].length) {
      this.pageIndex++;
      this.itemIndex = 0;
    }


    return item;
  }


  hasNext(): boolean {
    return this.pageIndex < this.pages.length;
  }
}


function PagedList({ iterator }: { iterator: PaginationIterator<string> }) {
  const items: string[] = [];
  while (iterator.hasNext()) {
    const value = iterator.next();
    if (value) items.push(value);
  }


  return <p>{items.join(", ")}</p>;
}


export function App() {
  const iterator = useMemo(
    () => new PaginationIterator([["Alice", "Bob"], ["Carla", "David"], ["Elena"]]),
    []
  );


  return (
    <main>
      <h1>Pagination Iterator</h1>
      <PagedList iterator={iterator} />
    </main>
  );
}`,
    explanation:
      "The React example consumes paginated results through an iterator and renders the flattened list in the UI.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


class PaginationIterator<T> {
  private pageIndex = 0;
  private itemIndex = 0;


  constructor(private pages: T[][]) {}


  next(): T | null {
    if (!this.hasNext()) {
      return null;
    }


    const item = this.pages[this.pageIndex][this.itemIndex];
    this.itemIndex++;


    if (this.itemIndex >= this.pages[this.pageIndex].length) {
      this.pageIndex++;
      this.itemIndex = 0;
    }


    return item;
  }


  hasNext(): boolean {
    return this.pageIndex < this.pages.length;
  }
}


function PagedList({ iterator }: { iterator: PaginationIterator<string> }) {
  const items: string[] = [];
  while (iterator.hasNext()) {
    const value = iterator.next();
    if (value) items.push(value);
  }


  return (
    <View>
      <Text>{items.join(", ")}</Text>
    </View>
  );
}


export function App() {
  const iterator = useMemo(
    () => new PaginationIterator([["Alice", "Bob"], ["Carla", "David"], ["Elena"]]),
    []
  );


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Pagination Iterator</Text>
        <PagedList iterator={iterator} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native version iterates through paged data and shows the full sequence in a mobile UI.",
  },
  {
    language: "C#",
    code: `using System;
using System.Collections.Generic;


public class PaginationIterator<T>
{
    private readonly List<List<T>> _pages;
    private int _pageIndex = 0;
    private int _itemIndex = 0;


    public PaginationIterator(List<List<T>> pages)
    {
        _pages = pages;
    }


    public T Next()
    {
        if (!HasNext())
        {
            return default;
        }


        var item = _pages[_pageIndex][_itemIndex];
        _itemIndex++;


        if (_itemIndex >= _pages[_pageIndex].Count)
        {
            _pageIndex++;
            _itemIndex = 0;
        }


        return item;
    }


    public bool HasNext()
    {
        return _pageIndex < _pages.Count;
    }
}


var iterator = new PaginationIterator<string>(new List<List<string>>
{
    new List<string> { "Alice", "Bob" },
    new List<string> { "Carla", "David" },
    new List<string> { "Elena" }
});


while (iterator.HasNext())
{
    Console.WriteLine(iterator.Next());
}`,
    explanation:
      "The C# pagination iterator consumes results across multiple pages without exposing how those pages are organized internally.",
  },
  {
    language: ".NET",
    code: `using System;
using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;


public class PaginationIterator<T>
{
    private readonly List<List<T>> _pages;
    private int _pageIndex = 0;
    private int _itemIndex = 0;


    public PaginationIterator(List<List<T>> pages)
    {
        _pages = pages;
    }


    public T Next()
    {
        if (!HasNext())
        {
            return default;
        }


        var item = _pages[_pageIndex][_itemIndex];
        _itemIndex++;


        if (_itemIndex >= _pages[_pageIndex].Count)
        {
            _pageIndex++;
            _itemIndex = 0;
        }


        return item;
    }


    public bool HasNext()
    {
        return _pageIndex < _pages.Count;
    }
}


var services = new ServiceCollection();
services.AddSingleton(new PaginationIterator<string>(new List<List<string>>
{
    new List<string> { "Alice", "Bob" },
    new List<string> { "Carla", "David" },
    new List<string> { "Elena" }
}));

var provider = services.BuildServiceProvider();
var iterator = provider.GetRequiredService<PaginationIterator<string>>();


while (iterator.HasNext())
{
    Console.WriteLine(iterator.Next());
}`,
    explanation:
      "The .NET example registers a paged iterator as a service, making page traversal reusable across the app.",
  },
];
