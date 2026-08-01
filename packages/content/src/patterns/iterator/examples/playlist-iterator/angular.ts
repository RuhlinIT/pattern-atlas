import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Playlist iterator",
  code: "interface Iterator<T> {\n  next(): T | null;\n  hasNext(): boolean;\n}\n\n\nclass PlaylistIterator implements Iterator<string> {\n  private index = 0;\n\n\n  constructor(private songs: string[]) {}\n\n\n  next(): string | null {\n    if (!this.hasNext()) {\n      return null;\n    }\n\n\n    return this.songs[this.index++];\n  }\n\n\n  hasNext(): boolean {\n    return this.index < this.songs.length;\n  }\n}\n\n\nclass Playlist {\n  constructor(private songs: string[]) {}\n\n\n  createIterator(): Iterator<string> {\n    return new PlaylistIterator(this.songs);\n  }\n}\n\n\nconst playlist = new Playlist([\"Intro\", \"First Song\", \"Second Song\"]);\nconst iterator = playlist.createIterator();\n\n\nwhile (iterator.hasNext()) {\n  console.log(iterator.next());\n}",
  explanation: "The Angular example uses the iterator pattern so client code can traverse songs without depending on the playlist structure.",
};
