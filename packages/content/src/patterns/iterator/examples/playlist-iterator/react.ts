import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Playlist iterator",
  code: "import React, { useMemo } from \"react\";\n\n\ninterface Iterator<T> {\n  next(): T | null;\n  hasNext(): boolean;\n}\n\n\nclass PlaylistIterator implements Iterator<string> {\n  private index = 0;\n\n\n  constructor(private songs: string[]) {}\n\n\n  next(): string | null {\n    if (!this.hasNext()) {\n      return null;\n    }\n\n\n    return this.songs[this.index++];\n  }\n\n\n  hasNext(): boolean {\n    return this.index < this.songs.length;\n  }\n}\n\n\nclass Playlist {\n  constructor(private songs: string[]) {}\n\n\n  createIterator(): Iterator<string> {\n    return new PlaylistIterator(this.songs);\n  }\n}\n\n\nfunction PlaylistView({ playlist }: { playlist: Playlist }) {\n  const iterator = useMemo(() => playlist.createIterator(), [playlist]);\n\n\n  const songs: string[] = [];\n  while (iterator.hasNext()) {\n    const song = iterator.next();\n    if (song) songs.push(song);\n  }\n\n\n  return <p>{songs.join(\", \")}</p>;\n}\n\n\nexport function App() {\n  const playlist = useMemo(\n    () => new Playlist([\"Intro\", \"First Song\", \"Second Song\"]),\n    []\n  );\n\n\n  return (\n    <main>\n      <h1>Playlist Iterator</h1>\n      <PlaylistView playlist={playlist} />\n    </main>\n  );\n}",
  explanation: "The React example keeps iteration logic inside the iterator and lets the UI render the collected results.",
};
