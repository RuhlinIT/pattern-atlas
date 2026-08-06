import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const amazonKinesisDataAnalytics = {
  language: "java",
  code: `import org.apache.flink.api.common.eventtime.WatermarkStrategy;
import org.apache.flink.api.common.functions.MapFunction;
import org.apache.flink.streaming.api.datastream.DataStream;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;

public final class KinesisTaskAdapterJob {

    public record ExternalTask(
        String taskId,
        String title,
        String status
    ) {}

    public record Task(
        String id,
        String description,
        boolean isCompleted
    ) {}

    public static final class TaskAdapter
        implements MapFunction<ExternalTask, Task> {

        @Override
        public Task map(ExternalTask externalTask) {
            return new Task(
                externalTask.taskId(),
                externalTask.title(),
                "done".equals(externalTask.status())
            );
        }
    }

    public static void main(String[] args)
        throws Exception {

        StreamExecutionEnvironment environment =
            StreamExecutionEnvironment
                .getExecutionEnvironment();

        DataStream<String> records =
            environment.fromSource(
                new KinesisTaskSource(
                    "third-party-tasks",
                    "us-east-1"
                ),
                WatermarkStrategy.noWatermarks(),
                "kinesis-task-source"
            );

        DataStream<ExternalTask> externalTasks =
            records.map(new ExternalTaskDecoder());

        DataStream<Task> normalizedTasks =
            externalTasks.map(new TaskAdapter());

        normalizedTasks
            .map(new TaskEncoder())
            .sinkTo(
                new KinesisTaskSink(
                    "tasks-normalized",
                    "us-east-1"
                )
            );

        environment.execute(
            "Kinesis Task Adapter"
        );
    }
}
`,
} satisfies PatternLanguageExample;