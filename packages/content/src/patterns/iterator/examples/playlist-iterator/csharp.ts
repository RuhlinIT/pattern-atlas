import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const csharp: PatternLanguageExample = {
  language: "csharp",
  title: "Playlist iterator",
  code: "using System;\nusing System.Collections.Generic;\n\n\npublic interface IPlaylistIterator\n{\n    string Next();\n    bool HasNext();\n}\n\n\npublic class PlaylistIterator : IPlaylistIterator\n{\n    private readonly List<string> _songs;\n    private int _index = 0;\n\n\n    public PlaylistIterator(List<string> songs)\n    {\n        _songs = songs;\n    }\n\n\n    public string Next()\n    {\n        if (!HasNext())\n        {\n            return null;\n        }\n\n\n        return _songs[_index++];\n    }\n\n\n    public bool HasNext()\n    {\n        return _index < _songs.Count;\n    }\n}\n\n\npublic class Playlist\n{\n    private readonly List<string> _songs;\n\n\n    public Playlist(List<string> songs)\n    {\n        _songs = songs;\n    }\n\n\n    public IPlaylistIterator CreateIterator()\n    {\n        return new PlaylistIterator(_songs);\n    }\n}\n\n\nvar playlist = new Playlist(new List<string> { \"Intro\", \"First Song\", \"Second Song\" });\nvar iterator = playlist.CreateIterator();\n\n\nwhile (iterator.HasNext())\n{\n    Console.WriteLine(iterator.Next());\n}",
  explanation: "The C# example uses a dedicated iterator object to traverse songs while keeping the playlist implementation hidden.",
};
