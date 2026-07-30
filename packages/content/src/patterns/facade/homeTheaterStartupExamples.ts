import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const homeTheaterStartupExamples: PatternLanguageExample[] = [
  {
    language: "TypeScript",
    code: `class Lights {
                        dim(): void {
                            console.log("Dimming lights");
                        }
                    }
                        
                    class Projector {
                        on(): void {
                            console.log("Turning on projector");
                        }

                        setInput(source: string): void {
                            console.log(\`Projector input set to \${source}\`);
                        }
                    }

                    class SoundSystem {
                        on(): void {
                            console.log("Turning on sound system");
                        }

                        setVolume(level: number): void {
                            console.log(\`Setting volume to \${level}\`);
                        }
                    }

                    class StreamingPlayer {
                        on(): void {
                            console.log("Turning on streaming player");
                        }

                        play(movie: string): void {
                            console.log(\`Playing \${movie}\`);
                        }
                    }

                    class HomeTheaterFacade {
                        constructor(
                            private lights = new Lights(),
                            private projector = new Projector(),
                            private sound = new SoundSystem(),
                            private player = new StreamingPlayer(),
                        ) {}

                        watchMovie(movie: string): void {
                            this.lights.dim();
                            this.projector.on();
                            this.projector.setInput("HDMI 1");
                            this.sound.on();
                            this.sound.setVolume(10);
                            this.player.on();
                            this.player.play(movie);
                        }
                    }
                    const theater = new HomeTheaterFacade();
                    theater.watchMovie("Inception");`,
    explanation:
      "The facade turns a sequence of device operations into one high-level action that is easier for the client to use.",
  },
  {
    language: "Java",
    code: `class Lights {
                        public void dim() {
                            System.out.println("Dimming lights");
                        }
                    }

                    class Projector {
                        public void on() {
                            System.out.println("Turning on projector");
                        }

                        public void setInput(String source) {
                            System.out.println("Projector input set to " + source);
                        }
                    }

                    class SoundSystem {
                        public void on() {
                            System.out.println("Turning on sound system");
                        }

                        public void setVolume(int level) {
                            System.out.println("Setting volume to " + level);
                        }
                    }

                    class StreamingPlayer {
                        public void on() {
                            System.out.println("Turning on streaming player");
                        }

                        public void play(String movie) {
                            System.out.println("Playing " + movie);
                        }
                    }

                    class HomeTheaterFacade {
                        private final Lights lights = new Lights();
                        private final Projector projector = new Projector();
                        private final SoundSystem sound = new SoundSystem();
                        private final StreamingPlayer player = new StreamingPlayer();

                        public void watchMovie(String movie) {
                            lights.dim();
                            projector.on();
                            projector.setInput("HDMI 1");
                            sound.on();
                            sound.setVolume(10);
                            player.on();
                            player.play(movie);
                        }
                    }

                    HomeTheaterFacade theater = new HomeTheaterFacade();
                    theater.watchMovie("Inception");`,
    explanation:
      "The client avoids manual device coordination because the facade wraps the ordered startup behavior behind one method.",
  },
  {
    language: "Python",
    code: `class Lights:
                        def dim(self):
                            print("Dimming lights")

                    class Projector:
                        def __init__(self):
                            self.input_source = None

                        def on(self):
                            print("Turning on projector")

                        def set_input(self, source):
                            self.input_source = source
                            print(f"Projector input set to {self.input_source}")

                    class SoundSystem:
                        def __init__(self):
                            self.volume = 0

                        def on(self):
                            print("Turning on sound system")

                        def set_volume(self, level):
                            self.volume = level
                            print(f"Setting volume to {self.volume}")

                    class StreamingPlayer:
                        def __init__(self):
                            self.movie = None

                        def on(self):
                            print("Turning on streaming player")

                        def play(self, movie):
                            self.movie = movie
                            print(f"Playing {self.movie}")

                    class HomeTheaterFacade:
                        def __init__(self):
                            self.lights = Lights()
                            self.projector = Projector()
                            self.sound = SoundSystem()
                            self.player = StreamingPlayer()

                        def watch_movie(self, movie):
                            self.lights.dim()
                            self.projector.on()
                            self.projector.set_input("HDMI 1")
                            self.sound.on()
                            self.sound.set_volume(10)
                            self.player.on()
                            self.player.play(movie)

                    theater = HomeTheaterFacade()
                    theater.watch_movie("Inception")`,
    explanation:
      "The client avoids manual device coordination because the facade wraps the ordered startup behavior behind one method.",
  },
  {
    language: "Angular",
    code: `import { Injectable } from '@angular/core';


                    @Injectable({ providedIn: 'root' })
                    class Lights {
                        dim(): void {
                            console.log("Dimming lights");
                        }
                    }


                    @Injectable({ providedIn: 'root' })
                    class Projector {
                        on(): void {
                            console.log("Turning on projector");
                        }


                        setInput(source: string): void {
                            console.log(\`Projector input set to \${source}\`);
                        }
                    }


                    @Injectable({ providedIn: 'root' })
                    class SoundSystem {
                        on(): void {
                            console.log("Turning on sound system");
                        }


                        setVolume(level: number): void {
                            console.log(\`Setting volume to \${level}\`);
                        }
                    }


                    @Injectable({ providedIn: 'root' })
                    class StreamingPlayer {
                        on(): void {
                            console.log("Turning on streaming player");
                        }


                        play(movie: string): void {
                            console.log(\`Playing \${movie}\`);
                        }
                    }


                    @Injectable({ providedIn: 'root' })
                    class HomeTheaterFacade {
                        constructor(
                            private lights: Lights,
                            private projector: Projector,
                            private sound: SoundSystem,
                            private player: StreamingPlayer,
                        ) {}


                        watchMovie(movie: string): void {
                            this.lights.dim();
                            this.projector.on();
                            this.projector.setInput("HDMI 1");
                            this.sound.on();
                            this.sound.setVolume(10);
                            this.player.on();
                            this.player.play(movie);
                        }
                    }`,
    explanation:
      "The Angular facade service exposes one movie-startup API while dependency injection supplies the underlying device services it coordinates.",
  },
  {
    language: "React",
    code: `import React, { useMemo } from "react";

class Lights {
  dim(): void {
    console.log("Dimming lights");
  }
}

class Projector {
  on(): void {
    console.log("Turning on projector");
  }

  setInput(source: string): void {
    console.log(\`Projector input set to \${source}\`);
  }
}

class SoundSystem {
  on(): void {
    console.log("Turning on sound system");
  }

  setVolume(level: number): void {
    console.log(\`Setting volume to \${level}\`);
  }
}

class StreamingPlayer {
  on(): void {
    console.log("Turning on streaming player");
  }

  play(movie: string): void {
    console.log(\`Playing \${movie}\`);
  }
}

class HomeTheaterFacade {
  constructor(
    private lights = new Lights(),
    private projector = new Projector(),
    private sound = new SoundSystem(),
    private player = new StreamingPlayer(),
  ) {}

  watchMovie(movie: string): void {
    this.lights.dim();
    this.projector.on();
    this.projector.setInput("HDMI 1");
    this.sound.on();
    this.sound.setVolume(10);
    this.player.on();
    this.player.play(movie);
  }
}

function TheaterButton({ theater }: { theater: HomeTheaterFacade }) {
  return <button onClick={() => theater.watchMovie("Inception")}>Watch movie</button>;
}

export function App() {
  const theater = useMemo(() => new HomeTheaterFacade(), []);

  return (
    <main>
      <h1>Home Theater</h1>
      <TheaterButton theater={theater} />
    </main>
  );
}`,
    explanation:
      "The React example exposes a single watchMovie action to the UI while the facade coordinates the ordered startup steps for all devices behind the scenes.",
  },
  {
    language: "React_Native",
    code: `import React, { useMemo } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";

class Lights {
  dim(): void {
    console.log("Dimming lights");
  }
}

class Projector {
  on(): void {
    console.log("Turning on projector");
  }

  setInput(source: string): void {
    console.log(\`Projector input set to \${source}\`);
  }
}

class SoundSystem {
  on(): void {
    console.log("Turning on sound system");
  }

  setVolume(level: number): void {
    console.log(\`Setting volume to \${level}\`);
  }
}

class StreamingPlayer {
  on(): void {
    console.log("Turning on streaming player");
  }

  play(movie: string): void {
    console.log(\`Playing \${movie}\`);
  }
}

class HomeTheaterFacade {
  constructor(
    private lights = new Lights(),
    private projector = new Projector(),
    private sound = new SoundSystem(),
    private player = new StreamingPlayer(),
  ) {}

  watchMovie(movie: string): void {
    this.lights.dim();
    this.projector.on();
    this.projector.setInput("HDMI 1");
    this.sound.on();
    this.sound.setVolume(10);
    this.player.on();
    this.player.play(movie);
  }
}

function TheaterButton({ theater }: { theater: HomeTheaterFacade }) {
  return (
    <Pressable
      onPress={() => theater.watchMovie("Inception")}
      style={{ padding: 12, backgroundColor: "#111827", borderRadius: 8 }}
    >
      <Text style={{ color: "#fff", textAlign: "center" }}>Watch movie</Text>
    </Pressable>
  );
}

export function App() {
  const theater = useMemo(() => new HomeTheaterFacade(), []);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Home Theater</Text>
        <TheaterButton theater={theater} />
      </View>
    </SafeAreaView>
  );
}`,
    explanation:
      "The React Native version uses the same facade workflow, but presents the one-step movie startup action through a mobile-friendly pressable control.",
  },
  {
    language: "C#",
    code: `using System;

public class Lights
{
    public void Dim()
    {
        Console.WriteLine("Dimming lights");
    }
}

public class Projector
{
    public void On()
    {
        Console.WriteLine("Turning on projector");
    }

    public void SetInput(string source)
    {
        Console.WriteLine($"Projector input set to {source}");
    }
}

public class SoundSystem
{
    public void On()
    {
        Console.WriteLine("Turning on sound system");
    }

    public void SetVolume(int level)
    {
        Console.WriteLine($"Setting volume to {level}");
    }
}

public class StreamingPlayer
{
    public void On()
    {
        Console.WriteLine("Turning on streaming player");
    }

    public void Play(string movie)
    {
        Console.WriteLine($"Playing {movie}");
    }
}

public class HomeTheaterFacade
{
    private readonly Lights _lights = new();
    private readonly Projector _projector = new();
    private readonly SoundSystem _sound = new();
    private readonly StreamingPlayer _player = new();

    public void WatchMovie(string movie)
    {
        _lights.Dim();
        _projector.On();
        _projector.SetInput("HDMI 1");
        _sound.On();
        _sound.SetVolume(10);
        _player.On();
        _player.Play(movie);
    }
}

var theater = new HomeTheaterFacade();
theater.WatchMovie("Inception");`,
    explanation:
      "The C# example hides the sequence of device startup calls behind one facade method, keeping the client code simple and focused on the movie it wants to watch.",
  },
  {
    language: ".NET",
    code: `using System;
using Microsoft.Extensions.DependencyInjection;

public class Lights
{
    public void Dim()
    {
        Console.WriteLine("Dimming lights");
    }
}

public class Projector
{
    public void On()
    {
        Console.WriteLine("Turning on projector");
    }

    public void SetInput(string source)
    {
        Console.WriteLine($"Projector input set to {source}");
    }
}

public class SoundSystem
{
    public void On()
    {
        Console.WriteLine("Turning on sound system");
    }

    public void SetVolume(int level)
    {
        Console.WriteLine($"Setting volume to {level}");
    }
}

public class StreamingPlayer
{
    public void On()
    {
        Console.WriteLine("Turning on streaming player");
    }

    public void Play(string movie)
    {
        Console.WriteLine($"Playing {movie}");
    }
}

public class HomeTheaterFacade
{
    private readonly Lights _lights;
    private readonly Projector _projector;
    private readonly SoundSystem _sound;
    private readonly StreamingPlayer _player;

    public HomeTheaterFacade(
        Lights lights,
        Projector projector,
        SoundSystem sound,
        StreamingPlayer player)
    {
        _lights = lights;
        _projector = projector;
        _sound = sound;
        _player = player;
    }

    public void WatchMovie(string movie)
    {
        _lights.Dim();
        _projector.On();
        _projector.SetInput("HDMI 1");
        _sound.On();
        _sound.SetVolume(10);
        _player.On();
        _player.Play(movie);
    }
}

var services = new ServiceCollection();
services.AddSingleton<Lights>();
services.AddSingleton<Projector>();
services.AddSingleton<SoundSystem>();
services.AddSingleton<StreamingPlayer>();
services.AddSingleton<HomeTheaterFacade>();

var provider = services.BuildServiceProvider();
var theater = provider.GetRequiredService<HomeTheaterFacade>();
theater.WatchMovie("Inception");`,
    explanation:
      "The .NET version shows the same home theater facade with dependency injection, so the subsystem devices stay encapsulated behind one high-level API.",
  },
];
