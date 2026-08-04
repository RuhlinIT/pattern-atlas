import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Text formatting",
  code: `import { Component, Input } from "@angular/core";

@Component({
  selector: "app-bold-text",
  template: '<strong><ng-content></ng-content></strong>',
})
export class BoldTextComponent {}
`,
  explanation: "Wrap text with formatting layers while preserving the same render contract.",
};