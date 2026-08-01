import type { PatternRecord } from "@atlas-patterns/schemas";

import { meta } from "./meta";
import { scenarios } from "./scenarios";

import { playlistIteratorExamples } from "./examples/playlist-iterator";
import { paginationIteratorExamples } from "./examples/pagination-iterator";
import { treeTraversalIteratorExamples } from "./examples/tree-traversal-iterator";

export const iteratorPattern: PatternRecord = {
  ...meta,
  scenarios,
  scenarioExamples: {
    "playlist-iterator": playlistIteratorExamples,
    "pagination-iterator": paginationIteratorExamples,
    "tree-traversal-iterator": treeTraversalIteratorExamples,
  },
  realWorldExamples: [
  {
    "title": "Music apps",
    "description": "Music players often need next, previous, shuffle, and custom traversal behavior."
  },
  {
    "title": "Pagination",
    "description": "APIs commonly expose data in pages while the client iterates through results sequentially."
  },
  {
    "title": "Tree walking",
    "description": "File systems, DOM trees, and hierarchical categories often require structured traversal."
  }
],
  tradeoffs: [
  "Can add extra classes and abstraction for simple collections",
  "May be unnecessary when built-in language iteration is already enough"
],
  platforms: [
  "Web",
  "Backend",
  "Mobile",
  "UI kits",
  "Cross-platform systems"
],
  integrationNotes: "Iterator is useful for pagination, custom collections, ordered traversal, and any case where clients should not know the internal data structure.",
  problem: "A collection needs to be traversed without exposing how it is stored internally.",
};
