import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const java: PatternLanguageExample = {
  language: "java",
  title: "Playlist iterator",
  code: "interface SongIterator {\n    String next();\n    boolean hasNext();\n}\n\n\nclass PlaylistIterator implements SongIterator {\n    private int index = 0;\n    private final String[] songs;\n\n\n    public PlaylistIterator(String[] songs) {\n        this.songs = songs;\n    }\n\n\n    public String next() {\n        if (!hasNext()) {\n            return null;\n        }\n\n\n        return songs[index++];\n    }\n\n\n    public boolean hasNext() {\n        return index < songs.length;\n    }\n}\n\n\nclass Playlist {\n    private final String[] songs;\n\n\n    public Playlist(String[] songs) {\n        this.songs = songs;\n    }\n\n\n    public SongIterator createIterator() {\n        return new PlaylistIterator(songs);\n    }\n}\n\n\nPlaylist playlist = new Playlist(new String[]{\"Intro\", \"First Song\", \"Second Song\"});\nSongIterator iterator = playlist.createIterator();\n\n\nwhile (iterator.hasNext()) {\n    System.out.println(iterator.next());\n}",
  explanation: "The Java example creates a dedicated iterator for traversing playlist songs without exposing the internal array.",
};
