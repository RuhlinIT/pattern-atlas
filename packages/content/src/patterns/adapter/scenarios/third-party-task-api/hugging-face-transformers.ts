import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const huggingFaceTransformers = {
  language: "python",
  code: `from typing import Any

from transformers import pipeline


class TaskAdapter:
    @staticmethod
    def to_text(task: dict[str, Any]) -> str:
        return str(task["title"])

    @staticmethod
    def from_prediction(
        task: dict[str, Any],
        prediction: dict[str, Any],
    ) -> dict[str, Any]:
        return {
            "id": str(task["task_id"]),
            "description": str(task["title"]),
            "classification": prediction["label"],
            "confidence": float(prediction["score"]),
        }


class TaskClassifier:
    def __init__(self, model_name: str) -> None:
        self.classifier = pipeline(
            task="text-classification",
            model=model_name,
        )

    def classify(
        self,
        external_tasks: list[dict[str, Any]],
    ) -> list[dict[str, Any]]:
        texts = [
            TaskAdapter.to_text(task)
            for task in external_tasks
        ]

        predictions = self.classifier(
            texts,
            top_k=1,
        )

        normalized = []

        for task, result in zip(
            external_tasks,
            predictions,
        ):
            prediction = result[0] if isinstance(
                result,
                list,
            ) else result

            normalized.append(
                TaskAdapter.from_prediction(
                    task,
                    prediction,
                )
            )

        return normalized


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

classifier = TaskClassifier(
    "distilbert-base-uncased-finetuned-sst-2-english"
)

results = classifier.classify(external_tasks)
print(results)
`,
} satisfies PatternLanguageExample;