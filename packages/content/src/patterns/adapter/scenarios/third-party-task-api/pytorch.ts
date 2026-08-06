import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const pytorch = {
  language: "python",
  code: `from typing import Any

import torch
from torch.utils.data import DataLoader, Dataset


class TaskAdapter:
    @staticmethod
    def to_sample(
        task: dict[str, Any],
    ) -> tuple[dict[str, str], torch.Tensor]:
        features = {
            "task_id": str(task["task_id"]),
            "description": str(task["title"]),
        }

        label = torch.tensor(
            1 if task["status"] == "done" else 0,
            dtype=torch.long,
        )

        return features, label


class TaskDataset(Dataset):
    def __init__(
        self,
        external_tasks: list[dict[str, Any]],
    ) -> None:
        self.samples = [
            TaskAdapter.to_sample(task)
            for task in external_tasks
        ]

    def __len__(self) -> int:
        return len(self.samples)

    def __getitem__(
        self,
        index: int,
    ) -> tuple[dict[str, str], torch.Tensor]:
        return self.samples[index]


def collate_tasks(batch):
    features, labels = zip(*batch)

    return {
        "task_id": [item["task_id"] for item in features],
        "description": [
            item["description"]
            for item in features
        ],
        "label": torch.stack(labels),
    }


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

dataset = TaskDataset(external_tasks)

loader = DataLoader(
    dataset,
    batch_size=2,
    shuffle=True,
    collate_fn=collate_tasks,
)

for batch in loader:
    print(batch)
`,
} satisfies PatternLanguageExample;