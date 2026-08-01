import type { PatternScenario } from "@atlas-patterns/schemas";

export const scenarios: readonly PatternScenario[] = [
  {
    "slug": "playlist-iterator",
    "title": "Playlist iterator",
    "summary": "A playlist exposes songs one at a time through a custom iterator."
  },
  {
    "slug": "pagination-iterator",
    "title": "Pagination iterator",
    "summary": "An iterator walks through pages of data without revealing how the pages are stored."
  },
  {
    "slug": "tree-traversal-iterator",
    "title": "Tree traversal iterator",
    "summary": "A tree is traversed in order without exposing the internal node structure."
  }
];
