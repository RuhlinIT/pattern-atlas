import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const apacheFlink = {
  language: "java",
  code: `import org.apache.flink.api.common.eventtime.WatermarkStrategy;
import org.apache.flink.api.common.functions.MapFunction;
import org.apache.flink.streaming.api.datastream.DataStream;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;

public final class TaskAdapterJob {

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
                externalTask.status().equals("done")
            );
        }
    }

    public static void main(String[] args)
        throws Exception {

        StreamExecutionEnvironment environment =
            StreamExecutionEnvironment
                .getExecutionEnvironment();

        DataStream<String> input =
            environment.fromSource(
                new ThirdPartyTaskSource(),
                WatermarkStrategy.noWatermarks(),
                "third-party-tasks"
            );

        DataStream<ExternalTask> externalTasks =
            input.map(new ExternalTaskJsonDecoder());

        DataStream<Task> normalizedTasks =
            externalTasks.map(new TaskAdapter());

        normalizedTasks
            .map(new TaskJsonEncoder())
            .sinkTo(new NormalizedTaskSink());

        environment.execute("Task Adapter Job");
    }
}
`,
} satisfies PatternLanguageExample;