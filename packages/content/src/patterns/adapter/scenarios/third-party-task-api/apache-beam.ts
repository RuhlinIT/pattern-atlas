import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const apacheBeam = {
  language: "python",
  code: `import apache_beam as beam
from typing import Any


class TaskAdapter:
    @staticmethod
    def from_external(
        task: dict[str, Any],
    ) -> dict[str, Any]:
        return {
            "id": str(task["task_id"]),
            "description": str(task["title"]),
            "isCompleted": task["status"] == "done",
        }


class AdaptTasks(
    beam.PTransform,
):
    def expand(self, tasks):
        return (
            tasks
            | "Adapt third-party tasks"
            >> beam.Map(TaskAdapter.from_external)
        )


external_tasks = [
    {
        "task_id": "1",
        "title": "Finish report",
        "status": "done",
    },
    {
        "task_id": "2",
        "title": "Call client",
        "status": "open",
    },
]

with beam.Pipeline() as pipeline:
    normalized_tasks = (
        pipeline
        | "Create external tasks"
        >> beam.Create(external_tasks)
        | "Normalize tasks"
        >> AdaptTasks()
    )

    normalized_tasks | "Print tasks" >> beam.Map(print)
`,
} satisfies PatternLanguageExample;