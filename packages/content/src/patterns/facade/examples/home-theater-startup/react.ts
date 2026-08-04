import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react: PatternLanguageExample = {
  language: "react",
  title: "Home theater startup",
  code: `type TheaterControlProps = {
  onWatchMovie: () => void;
};

export function TheaterControl({ onWatchMovie }: TheaterControlProps) {
  return <button onClick={onWatchMovie}>Watch movie</button>;
}

type StatusProps = {
  ready: boolean;
};

export function TheaterStatus({ ready }: StatusProps) {
  return <div>{ready ? "Ready to watch" : "Preparing theater..."}</div>;
}

class Lights {
  dim() {
    return "dimmed";
  }
}

class Projector {
  on() {
    return "projector on";
  }
}

class Amplifier {
  on() {
    return "amplifier on";
  }
}

class HomeTheaterFacade {
  constructor(
    private lights: Lights,
    private projector: Projector,
    private amp: Amplifier,
  ) {}

  watchMovie() {
    const steps = [
      this.lights.dim(),
      this.projector.on(),
      this.amp.on(),
    ];
    return steps;
  }
}

export function HomeTheaterPanel() {
  const facade = new HomeTheaterFacade(
    new Lights(),
    new Projector(),
    new Amplifier(),
  );

  const handleWatchMovie = () => {
    const steps = facade.watchMovie();
    console.log(steps);
  };

  return (
    <section>
      <TheaterControl onWatchMovie={handleWatchMovie} />
      <TheaterStatus ready={true} />
    </section>
  );
}`,
  explanation:
    "Simplify a multi-device startup sequence behind one movie-starting method.",
};