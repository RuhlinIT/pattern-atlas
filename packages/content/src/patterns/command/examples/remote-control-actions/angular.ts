import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Remote control actions",
  code: `import { Component } from "@angular/core";

@Component({
  selector: "app-remote-control",
  template: '<button (click)="press()">Power</button>',
})
export class RemoteControlComponent {
  press() {
    console.log("Power pressed");
  }
}
`,
  explanation:
    "Bind buttons to commands so the invoker can trigger device actions without knowing receiver details.",
};