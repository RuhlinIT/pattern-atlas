import type { PatternScenario } from "@atlas-patterns/schemas";

export const scenarios: readonly PatternScenario[] = [
  {
    "slug": "text-editor-memento",
    "title": "Text editor memento",
    "summary": "A text editor stores snapshots of its content so the user can undo changes."
  },
  {
    "slug": "game-save-memento",
    "title": "Game save memento",
    "summary": "A game stores save points so the player can restore progress later."
  },
  {
    "slug": "form-state-memento",
    "title": "Form state memento",
    "summary": "A multi-step form preserves draft state so it can be restored after navigation or interruption."
  }
];
