import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular = {
  language: "angular",
  code: `import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ui-shell-facade",
  template: "<div>{{ status }}</div>",
})
export class UiShellFacadeComponent implements OnInit {
  status = "loading";

  ngOnInit() {
    this.status = "ready";
  }
}
`,
} satisfies PatternLanguageExample;