import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const matplotlib = {
  language: "python",
  code: `from dataclasses import dataclass
from typing import Any

import matplotlib.pyplot as plt


@dataclass
class Task:
    id: str
    description: str
    is_completed: bool


class TaskAdapter:
    @staticmethod
    def from_external(task: dict[str, Any]) -> Task:
        return Task(
            id=str(task["task_id"]),
            description=task["title"],
            is_completed=task["status"] == "done",
        )

    @classmethod
    def from_external_list(
        cls,
        tasks: list[dict[str, Any]],
    ) -> list[Task]:
        return [cls.from_external(task) for task in tasks]


class TaskChart:
    def render(self, tasks: list[Task]) -> None:
        labels = [task.description for task in tasks]
        values = [
            1 if task.is_completed else 0
            for task in tasks
        ]

        colors = [
            "seagreen" if completed else "lightgray"
            for completed in values
        ]

        plt.bar(labels, values, color=colors)
        plt.yticks([0, 1], ["Pending", "Completed"])
        plt.ylabel("Status")
        plt.title("Task Completion")
        plt.xticks(rotation=20, ha="right")
        plt.tight_layout()
        plt.show()


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

tasks = TaskAdapter.from_external_list(external_tasks)
TaskChart().render(tasks)
`,
} satisfies PatternLanguageExample;