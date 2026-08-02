import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular: PatternLanguageExample = {
  language: "angular",
  title: "Menu composite",
  code: `import { Component, Input } from "@angular/core";

@Component({
  selector: "app-menu-node",
  template: ` + "`" + `<div>{{ node.label }}</div>
    <app-menu-node *ngFor="let child of node.children" [node]="child"></app-menu-node>` + "`" + `,
})
export class MenuNodeComponent {
  @Input() node!: { label: string; children?: { label: string; children?: any[] }[] };
}
`,
  explanation: "Represent menu items and submenus with one interface so the UI can render nested menus uniformly.",
};