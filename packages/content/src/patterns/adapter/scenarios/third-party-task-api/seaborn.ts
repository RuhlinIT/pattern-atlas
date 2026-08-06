import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const seaborn = {
  language: "python",
  code: `from dataclasses import dataclass
from typing import Any

import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns


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
    def to_dataframe(
        cls,
        external_tasks: list[dict[str, Any]],
    ) -> pd.DataFrame:
        tasks = [
            cls.from_external(task)
            for task in external_tasks
        ]

        return pd.DataFrame([
            {
                "id": task.id,
                "description": task.description,
                "status": (
                    "Completed"
                    if task.is_completed
                    else "Pending"
                ),
            }
            for task in tasks
        ])


class TaskChart:
    def render(
        self,
        external_tasks: list[dict[str, Any]],
    ) -> None:
        data = TaskAdapter.to_dataframe(external_tasks)

        sns.set_theme(style="whitegrid")
        sns.countplot(
            data=data,
            x="status",
            hue="status",
            palette={
                "Completed": "seagreen",
                "Pending": "lightgray",
            },
            legend=False,
        )

        plt.title("Tasks by Status")
        plt.xlabel("Status")
        plt.ylabel("Task Count")
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

TaskChart().render(external_tasks)
`,
} satisfies PatternLanguageExample;