import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const playlistIteratorExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `interface Iterator<T> {
  next(): T | null;
  hasNext(): boolean;
}


class PlaylistIterator implements Iterator<string> {
  private index = 0;


  constructor(private songs: string[]) {}


  next(): string | null {
    if (!this.hasNext()) {
      return null;
    }


    return this.songs[this.index++];
  }


  hasNext(): boolean {
    return this.index < this.songs.length;
  }
}


class Playlist {
  constructor(private songs: string[]) {}


  createIterator(): Iterator<string> {
    return new PlaylistIterator(this.songs);
  }
}


const playlist = new Playlist(["Intro", "First Song", "Second Song"]);
const iterator = playlist.createIterator();


while (iterator.hasNext()) {
  console.log(iterator.next());
}`,
    explanation:
      "The playlist iterator exposes songs one by one while hiding how the playlist stores its internal list.",
  },
  {
    language: "Java",
    code: `interface SongIterator {
    String next();
    boolean hasNext();
}


class PlaylistIterator implements SongIterator {
    private int index = 0;
    private final String[] songs;


    public PlaylistIterator(String[] songs) {
        this.songs = songs;
    }


    public String next() {
        if (!hasNext()) {
            return null;
        }


        return songs[index++];
    }


    public boolean hasNext() {
        return index < songs.length;
    }
}


class Playlist {
    private final String[] songs;


    public Playlist(String[] songs) {
        this.songs = songs;
    }


    public SongIterator createIterator() {
        return new PlaylistIterator(songs);
    }
}


Playlist playlist = new Playlist(new String[]{"Intro", "First Song", "Second Song"});
SongIterator iterator = playlist.createIterator();


while (iterator.hasNext()) {
    System.out.println(iterator.next());
}`,
    explanation:
      "The Java example creates a dedicated iterator for traversing playlist songs without exposing the internal array.",
  },
  {
    language: "Python",
    code: `class PlaylistIterator:
    def __init__(self, songs: list[str]) -> None:
        self.songs = songs
        self.index = 0


    def next(self) -> str | None:
        if not self.has_next():
            return None


        song = self.songs[self.index]
        self.index += 1
        return song


    def has_next(self) -> bool:
        return self.index < len(self.songs)


class Playlist:
    def __init__(self, songs: list[str]) -> None:
        self.songs = songs


    def create_iterator(self) -> PlaylistIterator:
        return PlaylistIterator(self.songs)


playlist = Playlist(["Intro", "First Song", "Second Song"])
iterator = playlist.create_iterator()


while iterator.has_next():
    print(iterator.next())`,
    explanation:
      "The Python iterator walks through playlist items in order while the playlist keeps its storage details private.",
  },
  {
    language: "Angular",
    code: `interface Iterator<T> {
  next(): T | null;
  hasNext(): boolean;
}


class PlaylistIterator implements Iterator<string> {
  private index = 0;


  constructor(private songs: string[]) {}


  next(): string | null {
    if (!this.hasNext()) {
      return null;
    }


    return this.songs[this.index++];
  }


  hasNext(): boolean {
    return this.index < this.songs.length;
  }
}


class Playlist {
  constructor(private songs: string[]) {}


  createIterator(): Iterator<string> {
    return new PlaylistIterator(this.songs);
  }
}


const playlist = new Playlist(["Intro", "First Song", "Second Song"]);
const iterator = playlist.createIterator();


while (iterator.hasNext()) {
  console.log(iterator.next());
}`,
    explanation:
      "The Angular example uses the iterator pattern so client code can traverse songs without depending on the playlist structure.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";


interface Iterator<T> {
  next(): T | null;
  hasNext(): boolean;
}


class PlaylistIterator implements Iterator<string> {
  private index = 0;


  constructor(private songs: string[]) {}


  next(): string | null {
    if (!this.hasNext()) {
      return null;
    }


    return this.songs[this.index++];
  }


  hasNext(): boolean {
    return this.index < this.songs.length;
  }
}


class Playlist {
  constructor(private songs: string[]) {}


  createIterator(): Iterator<string> {
    return new PlaylistIterator(this.songs);
  }
}


function PlaylistView({ playlist }: { playlist: Playlist }) {
  const iterator = useMemo(() => playlist.createIterator(), [playlist]);


  const songs: string[] = [];
  while (iterator.hasNext()) {
    const song = iterator.next();
    if (song) songs.push(song);
  }


  return <p>{songs.join(", ")}</p>;
}


export function App() {
  const playlist = useMemo(
    () => new Playlist(["Intro", "First Song", "Second Song"]),
    []
  );


  return (
    <main>
      <h1>Playlist Iterator</h1>
      <PlaylistView playlist={playlist} />
    </main>
  );
}`,
    explanation:
      "The React example keeps iteration logic inside the iterator and lets the UI render the collected results.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { SafeAreaView, Text, View } from "react-native";


interface Iterator<T> {
  next(): T | null;
  hasNext(): boolean;
}


class PlaylistIterator implements Iterator<string> {
  private index = 0;


  constructor(private songs: string[]) {}


  next(): string | null {
    if (!this.hasNext()) {
      return null;
    }


    return this.songs[this.index++];
  }


  hasNext(): boolean {
    return this.index < this.songs.length;
  }
}


class Playlist {
  constructor(private songs: string[]) {}


  createIterator(): Iterator<string> {
    return new PlaylistIterator(this.songs);
  }
}


function PlaylistView({ playlist }: { playlist: Playlist }) {
  const iterator = useMemo(() => playlist.createIterator(), [playlist]);


  const songs: string[] = [];
  while (iterator.hasNext()) {
    const song = iterator.next();
    if (song) songs.push(song);
  }


  return (
    <View>
      <Text>{songs.join(", ")}</Text>
    </View>
  );
}


export function App() {
  const playlist = useMemo(
    () => new Playlist(["Intro", "First Song", "Second Song"]),
    []
  );


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Playlist Iterator</Text>
        <PlaylistView playlist={playlist} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native example iterates through playlist items in a mobile-friendly UI while preserving encapsulation.",
  },
  {
    language: "C#",
    code: `using System;
using System.Collections.Generic;


public interface IPlaylistIterator
{
    string Next();
    bool HasNext();
}


public class PlaylistIterator : IPlaylistIterator
{
    private readonly List<string> _songs;
    private int _index = 0;


    public PlaylistIterator(List<string> songs)
    {
        _songs = songs;
    }


    public string Next()
    {
        if (!HasNext())
        {
            return null;
        }


        return _songs[_index++];
    }


    public bool HasNext()
    {
        return _index < _songs.Count;
    }
}


public class Playlist
{
    private readonly List<string> _songs;


    public Playlist(List<string> songs)
    {
        _songs = songs;
    }


    public IPlaylistIterator CreateIterator()
    {
        return new PlaylistIterator(_songs);
    }
}


var playlist = new Playlist(new List<string> { "Intro", "First Song", "Second Song" });
var iterator = playlist.CreateIterator();


while (iterator.HasNext())
{
    Console.WriteLine(iterator.Next());
}`,
    explanation:
      "The C# example uses a dedicated iterator object to traverse songs while keeping the playlist implementation hidden.",
  },
  {
    language: ".NET",
    code: `using System;
using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;


public interface IPlaylistIterator
{
    string Next();
    bool HasNext();
}


public class PlaylistIterator : IPlaylistIterator
{
    private readonly List<string> _songs;
    private int _index = 0;


    public PlaylistIterator(List<string> songs)
    {
        _songs = songs;
    }


    public string Next()
    {
        if (!HasNext())
        {
            return null;
        }


        return _songs[_index++];
    }


    public bool HasNext()
    {
        return _index < _songs.Count;
    }
}


public class Playlist
{
    private readonly List<string> _songs;


    public Playlist(List<string> songs)
    {
        _songs = songs;
    }


    public IPlaylistIterator CreateIterator()
    {
        return new PlaylistIterator(_songs);
    }
}


var services = new ServiceCollection();
services.AddSingleton(new Playlist(new List<string> { "Intro", "First Song", "Second Song" }));

var provider = services.BuildServiceProvider();
var playlist = provider.GetRequiredService<Playlist>();
var iterator = playlist.CreateIterator();


while (iterator.HasNext())
{
    Console.WriteLine(iterator.Next());
}`,
    explanation:
      "The .NET example wires the playlist into dependency injection, then uses an iterator to traverse the songs without exposing storage details.",
  },
];
