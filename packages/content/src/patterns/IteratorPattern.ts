import type { PatternRecord } from "@atlas-patterns/schemas";
import { playlistIteratorExamples } from "./iterator/playlistIteratorExamples";
import { paginationIteratorExamples } from "./iterator/paginationIteratorExamples";
import { treeTraversalIteratorExamples } from "./iterator/treeTraversalIteratorExamples";

export const IteratorPattern: PatternRecord = {
  slug: "iterator",
  name: "Iterator",
  category: "Behavioral",
  problem:
    "A collection needs to be traversed without exposing how it is stored internally.",
  intent:
    "Provide a way to access elements of an aggregate sequentially while hiding the underlying representation.",
  tradeoffs: [
    "Can add extra classes and abstraction for simple collections",
    "May be unnecessary when built-in language iteration is already enough",
  ],
  languages: [
    "TypeScript",
    "Java",
    "Python",
    "Angular",
    "React",
    "React_Native",
    "C#",
    ".NET",
  ],
  platforms: ["Web", "Backend", "Mobile", "UI kits", "Cross-platform systems"],
  integrationNotes:
    "Iterator is useful for pagination, custom collections, ordered traversal, and any case where clients should not know the internal data structure.",
  scenarios: [
    {
      slug: "playlist-iterator",
      title: "Playlist iterator",
      summary:
        "A playlist exposes songs one at a time through a custom iterator.",
      languageExamples: playlistIteratorExamples,
    },
    {
      slug: "pagination-iterator",
      title: "Pagination iterator",
      summary:
        "An iterator walks through pages of data without revealing how the pages are stored.",
      languageExamples: paginationIteratorExamples,
    },
    {
      slug: "tree-traversal-iterator",
      title: "Tree traversal iterator",
      summary:
        "A tree is traversed in order without exposing the internal node structure.",
      languageExamples: treeTraversalIteratorExamples,
    },
  ],
  realWorldExamples: [
    {
      title: "Music apps",
      description:
        "Music players often need next, previous, shuffle, and custom traversal behavior.",
    },
    {
      title: "Pagination",
      description:
        "APIs commonly expose data in pages while the client iterates through results sequentially.",
    },
    {
      title: "Tree walking",
      description:
        "File systems, DOM trees, and hierarchical categories often require structured traversal.",
    },
  ],
};
