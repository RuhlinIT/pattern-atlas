import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const apacheSamza = {
  language: "java",
  code: `import
    org.apache.samza.application.StreamApplication;
import
    org.apache.samza.operators.MessageStream;
import
    org.apache.samza.operators.StreamGraph;
import
    org.apache.samza.serializers.JsonSerde;
import
    org.apache.samza.system.OutgoingMessageEnvelope;

public final class TaskAdapterApplication
    implements StreamApplication {

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

    public static Task adapt(ExternalTask task) {
        return new Task(
            task.taskId(),
            task.title(),
            "done".equals(task.status())
        );
    }

    @Override
    public void describe(StreamGraph graph) {
        MessageStream<ExternalTask> externalTasks =
            graph.getInputStream(
                "third-party-tasks",
                new JsonSerde<>(ExternalTask.class)
            );

        externalTasks
            .map(TaskAdapterApplication::adapt)
            .sendTo(
                graph.getOutputStream(
                    "tasks-normalized",
                    new JsonSerde<>(Task.class)
                )
            );
    }
}
`,
} satisfies PatternLanguageExample;