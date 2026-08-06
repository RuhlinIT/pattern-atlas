import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const tensorflow = {
  language: "python",
  code: `from typing import Any, Iterator

import tensorflow as tf


class TaskAdapter:
    @staticmethod
    def to_example(
        task: dict[str, Any],
    ) -> tuple[dict[str, tf.Tensor], tf.Tensor]:
        features = {
            "task_id": tf.constant(
                task["task_id"],
                dtype=tf.string,
            ),
            "description": tf.constant(
                task["title"],
                dtype=tf.string,
            ),
        }

        label = tf.constant(
            1 if task["status"] == "done" else 0,
            dtype=tf.int32,
        )

        return features, label

    @classmethod
    def to_dataset(
        cls,
        external_tasks: list[dict[str, Any]],
        batch_size: int = 2,
    ) -> tf.data.Dataset:
        def examples() -> Iterator[
            tuple[dict[str, tf.Tensor], tf.Tensor]
        ]:
            for task in external_tasks:
                yield cls.to_example(task)

        dataset = tf.data.Dataset.from_generator(
            examples,
            output_signature=(
                {
                    "task_id": tf.TensorSpec(
                        shape=(),
                        dtype=tf.string,
                    ),
                    "description": tf.TensorSpec(
                        shape=(),
                        dtype=tf.string,
                    ),
                },
                tf.TensorSpec(
                    shape=(),
                    dtype=tf.int32,
                ),
            ),
        )

        return dataset.batch(batch_size).prefetch(
            tf.data.AUTOTUNE
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

dataset = TaskAdapter.to_dataset(external_tasks)

for features, labels in dataset:
    print(features, labels)
`,
} satisfies PatternLanguageExample;