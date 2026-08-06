import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const apacheKafka = {
  language: "java",
  code: `import org.apache.kafka.common.serialization.Serdes;
import org.apache.kafka.streams.KafkaStreams;
import org.apache.kafka.streams.StreamsBuilder;
import org.apache.kafka.streams.StreamsConfig;
import org.apache.kafka.streams.kstream.KStream;
import org.apache.kafka.streams.kstream.Produced;

import java.util.Properties;

public final class TaskAdapterTopology {

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
            task.status().equals("done")
        );
    }

    public static void main(String[] args) {
        Properties properties = new Properties();

        properties.put(
            StreamsConfig.APPLICATION_ID_CONFIG,
            "task-adapter"
        );
        properties.put(
            StreamsConfig.BOOTSTRAP_SERVERS_CONFIG,
            "localhost:9092"
        );
        properties.put(
            StreamsConfig.DEFAULT_KEY_SERDE_CLASS_CONFIG,
            Serdes.String().getClass()
        );
        properties.put(
            StreamsConfig.DEFAULT_VALUE_SERDE_CLASS_CONFIG,
            Serdes.String().getClass()
        );

        StreamsBuilder builder = new StreamsBuilder();

        KStream<String, ExternalTask> externalTasks =
            builder.stream("third-party.tasks");

        KStream<String, Task> normalizedTasks =
            externalTasks.mapValues(
                TaskAdapterTopology::adapt
            );

        normalizedTasks.to(
            "tasks.normalized",
            Produced.with(
                Serdes.String(),
                new TaskJsonSerde()
            )
        );

        KafkaStreams streams = new KafkaStreams(
            builder.build(),
            properties
        );

        Runtime.getRuntime().addShutdownHook(
            new Thread(streams::close)
        );

        streams.start();
    }
}
`,
} satisfies PatternLanguageExample;