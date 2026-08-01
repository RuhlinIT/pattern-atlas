import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python: PatternLanguageExample = {
  language: "python",
  title: "Playlist iterator",
  code: "class PlaylistIterator:\n    def __init__(self, songs: list[str]) -> None:\n        self.songs = songs\n        self.index = 0\n\n\n    def next(self) -> str | None:\n        if not self.has_next():\n            return None\n\n\n        song = self.songs[self.index]\n        self.index += 1\n        return song\n\n\n    def has_next(self) -> bool:\n        return self.index < len(self.songs)\n\n\nclass Playlist:\n    def __init__(self, songs: list[str]) -> None:\n        self.songs = songs\n\n\n    def create_iterator(self) -> PlaylistIterator:\n        return PlaylistIterator(self.songs)\n\n\nplaylist = Playlist([\"Intro\", \"First Song\", \"Second Song\"])\niterator = playlist.create_iterator()\n\n\nwhile iterator.has_next():\n    print(iterator.next())",
  explanation: "The Python iterator walks through playlist items in order while the playlist keeps its storage details private.",
};
