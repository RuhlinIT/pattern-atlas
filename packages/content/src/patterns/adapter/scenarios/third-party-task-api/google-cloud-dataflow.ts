import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const googleCloudDataflow = {
  language: "python",
  code: `import apache_beam as beam
from apache_beam.options.pipeline_options import (
    PipelineOptions,
    StandardOptions,
)


class TaskAdapter:
    @staticmethod
    def from_external(task: dict) -> dict:
        return {
            "id": str(task["task_id"]),
            "description": str(task["title"]),
            "isCompleted": task["status"] == "done",
        }


class AdaptTaskFn(beam.DoFn):
    def process(self, task: dict):
        yield TaskAdapter.from_external(task)


class DecodeTaskFn(beam.DoFn):
    def process(self, message: bytes):
        import json

        yield json.loads(message.decode("utf-8"))


class EncodeTaskFn(beam.DoFn):
    def process(self, task: dict):
        import json

        yield json.dumps(task).encode("utf-8")


pipeline_options = PipelineOptions(
    [
        "--runner=DataflowRunner",
        "--project=my-gcp-project",
        "--region=us-central1",
        "--temp_location=gs://my-bucket/temp",
        "--staging_location=gs://my-bucket/staging",
        "--streaming",
    ]
)

pipeline_options.view_as(
    StandardOptions
).streaming = True

with beam.Pipeline(
    options=pipeline_options
) as pipeline:
    (
        pipeline
        | "ReadTasks" >> beam.io.ReadFromPubSub(
            topic=(
                "projects/my-gcp-project/topics/"
                "third-party-tasks"
            )
        )
        | "DecodeTasks" >> beam.ParDo(DecodeTaskFn())
        | "AdaptTasks" >> beam.ParDo(AdaptTaskFn())
        | "EncodeTasks" >> beam.ParDo(EncodeTaskFn())
        | "WriteTasks" >> beam.io.WriteToPubSub(
            topic=(
                "projects/my-gcp-project/topics/"
                "tasks-normalized"
            )
        )
    )
`,
} satisfies PatternLanguageExample;