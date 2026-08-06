import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const scikitLearn = {
  language: "python",
  code: `from typing import Any

import numpy as np
from sklearn.base import BaseEstimator, TransformerMixin


class TaskAdapter(
    BaseEstimator,
    TransformerMixin,
):
    def fit(
        self,
        tasks: list[dict[str, Any]],
        labels=None,
    ):
        return self

    def transform(
        self,
        tasks: list[dict[str, Any]],
    ) -> np.ndarray:
        rows = []

        for task in tasks:
            title = str(task["title"])
            status = str(task["status"])

            rows.append([
                len(title),
                title.count(" "),
                1 if status == "done" else 0,
            ])

        return np.asarray(rows, dtype=np.float32)

    def to_domain_tasks(
        self,
        tasks: list[dict[str, Any]],
    ) -> list[dict[str, Any]]:
        features = self.transform(tasks)
        adapted = []

        for task, row in zip(tasks, features):
            adapted.append({
                "id": str(task["task_id"]),
                "description": str(task["title"]),
                "is_completed": bool(row[2]),
                "features": row,
            })

        return adapted


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

adapter = TaskAdapter()
features = adapter.fit_transform(external_tasks)
domain_tasks = adapter.to_domain_tasks(external_tasks)

print(features)
print(domain_tasks)
`,
} satisfies PatternLanguageExample;