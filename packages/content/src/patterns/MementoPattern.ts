import type { PatternRecord } from "@atlas-patterns/schemas";
import { textEditorMementoExamples } from "./memento/textEditorMementoExamples";
import { gameSaveMementoExamples } from "./memento/gameSaveMementoExamples";
import { formStateMementoExamples } from "./memento/formStateMementoExamples";

export const MementoPattern: PatternRecord = {
  slug: "memento",
  name: "Memento",
  category: "Behavioral",
  problem:
    "An object's internal state must be saved and restored later without exposing its implementation details.",
  intent:
    "Capture and externalize an object's state so it can be restored to a previous point in time.",
  tradeoffs: [
    "Snapshots can consume memory if many states are stored.",
    "Care must be taken to keep mementos immutable and hidden from outside code.",
  ],
  languages: [
    "TypeScript",
    "Java",
    "Python",
    "Angular",
    "React",
    "React_Native",
    "C#",
    ".NET",
  ],
  platforms: ["Web", "Backend", "Mobile", "UI kits", "Cross-platform systems"],
  integrationNotes:
    "Memento is useful for undo/redo, checkpoints, draft recovery, and any workflow where state history matters.",
  scenarios: [
    {
      slug: "text-editor-memento",
      title: "Text editor memento",
      summary:
        "A text editor stores snapshots of its content so the user can undo changes.",
      languageExamples: textEditorMementoExamples,
    },
    {
      slug: "game-save-memento",
      title: "Game save memento",
      summary:
        "A game stores save points so the player can restore progress later.",
      languageExamples: gameSaveMementoExamples,
    },
    {
      slug: "form-state-memento",
      title: "Form state memento",
      summary:
        "A multi-step form preserves draft state so it can be restored after navigation or interruption.",
      languageExamples: formStateMementoExamples,
    },
  ],
  realWorldExamples: [
    {
      title: "Undo in editors",
      description:
        "Text and graphic editors often keep snapshots so the user can revert changes.",
    },
    {
      title: "Save games",
      description:
        "Games store checkpoints to restore progress after a failure or later session.",
    },
    {
      title: "Draft recovery",
      description:
        "Forms and editors save drafts so users can come back without losing work.",
    },
  ],
};
