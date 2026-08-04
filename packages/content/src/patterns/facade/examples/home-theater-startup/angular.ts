import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Home theater startup",
  code: `import { Component, Input } from "@angular/core";

@Component({
  selector: "app-theater-control",
  template: '<button (click)="onWatchMovie()">Watch movie</button>',
})
export class TheaterControlComponent {
  @Input() onWatchMovie = () => {};
}

@Component({
  selector: "app-theater-status",
  template: '<div>{{ ready ? "Ready to watch" : "Preparing theater..." }}</div>',
})
export class TheaterStatusComponent {
  @Input() ready = false;
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

@Component({
  selector: "app-home-theater-panel",
  template: \`
    <app-theater-control [onWatchMovie]="handleWatchMovie"></app-theater-control>
    <app-theater-status [ready]="true"></app-theater-status>
  \`,
})
export class HomeTheaterPanelComponent {
  private facade = new HomeTheaterFacade(
    new Lights(),
    new Projector(),
    new Amplifier(),
  );

  handleWatchMovie = () => {
    const steps = this.facade.watchMovie();
    console.log(steps);
  };
}
`,
  explanation:
    "Simplify a multi-device startup sequence behind one movie-starting method.",
};