import type { PatternLanguageExample } from "@atlas-patterns/schemas";

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

export const typescript: PatternLanguageExample = {
  language: "typescript",
  title: "Home theater startup",
  code: `class Lights {
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

const facade = new HomeTheaterFacade(
  new Lights(),
  new Projector(),
  new Amplifier(),
);
facade.watchMovie();`,
  explanation:
    "Simplify a multi-device startup sequence behind one movie-starting method.",
};