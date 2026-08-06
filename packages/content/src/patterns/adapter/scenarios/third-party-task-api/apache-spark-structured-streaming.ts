import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const apacheSparkStructuredStreaming = {
  language: "python",
  code: `from pyspark.sql import SparkSession
from pyspark.sql.functions import (
    col,
    from_json,
    when,
)
from pyspark.sql.types import (
    IntegerType,
    StringType,
    StructField,
    StructType,
)


spark = (
    SparkSession.builder
    .appName("TaskAdapter")
    .getOrCreate()
)

external_schema = StructType([
    StructField("task_id", StringType(), False),
    StructField("title", StringType(), False),
    StructField("status", StringType(), False),
])


class TaskAdapter:
    @staticmethod
    def normalize(stream):
        parsed = stream.select(
            from_json(
                col("value").cast("string"),
                external_schema,
            ).alias("external_task")
        )

        return parsed.select(
            col("external_task.task_id").alias("id"),
            col("external_task.title").alias(
                "description"
            ),
            when(
                col("external_task.status") == "done",
                True,
            ).otherwise(False).alias("is_completed"),
        )


external_stream = (
    spark.readStream
    .format("kafka")
    .option(
        "kafka.bootstrap.servers",
        "localhost:9092",
    )
    .option("subscribe", "third-party.tasks")
    .option("startingOffsets", "latest")
    .load()
)

normalized_tasks = TaskAdapter.normalize(
    external_stream
)

query = (
    normalized_tasks
    .selectExpr(
        "to_json(named_struct(",
        "'id', id,",
        "'description', description,",
        "'isCompleted', is_completed",
        ")) AS value"
    )
    .writeStream
    .format("kafka")
    .option(
        "kafka.bootstrap.servers",
        "localhost:9092",
    )
    .option("topic", "tasks.normalized")
    .option(
        "checkpointLocation",
        "/tmp/task-adapter-checkpoint",
    )
    .start()
)

query.awaitTermination()
`,
} satisfies PatternLanguageExample;