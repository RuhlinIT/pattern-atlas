import type { PatternRecord } from "@atlas-patterns/schemas";

import { meta } from "./meta";
import { scenarios } from "./scenarios";

import { textEditorMementoExamples } from "./examples/text-editor-memento";
import { gameSaveMementoExamples } from "./examples/game-save-memento";
import { formStateMementoExamples } from "./examples/form-state-memento";

export const mementoPattern: PatternRecord = {
  ...meta,
  scenarios,
  scenarioExamples: {
    "text-editor-memento": textEditorMementoExamples,
    "game-save-memento": gameSaveMementoExamples,
    "form-state-memento": formStateMementoExamples,
  },
  realWorldExamples: [
  {
    "title": "Undo in editors",
    "description": "Text and graphic editors often keep snapshots so the user can revert changes."
  },
  {
    "title": "Save games",
    "description": "Games store checkpoints to restore progress after a failure or later session."
  },
  {
    "title": "Draft recovery",
    "description": "Forms and editors save drafts so users can come back without losing work."
  }
],
  tradeoffs: [
  "Snapshots can consume memory if many states are stored.",
  "Care must be taken to keep mementos immutable and hidden from outside code."
],
  platforms: [
  "Web",
  "Backend",
  "Mobile",
  "UI kits",
  "Cross-platform systems"
],
  integrationNotes: "Memento is useful for undo/redo, checkpoints, draft recovery, and any workflow where state history matters.",
  problem: "An object's internal state must be saved and restored later without exposing its implementation details.",
};
