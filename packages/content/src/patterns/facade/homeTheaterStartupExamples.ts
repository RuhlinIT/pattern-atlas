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
];
