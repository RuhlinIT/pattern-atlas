import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const kafkaStreams = {
  language: "typescript",
  code: `import { Kafka } from "kafkajs";

type ExternalTaskEvent = {
  task_id: string;
  title: string;
  status: "open" | "done";
};

type TaskEvent = {
  id: string;
  description: string;
  isCompleted: boolean;
};

class TaskAdapter {
  static fromExternal(
    event: ExternalTaskEvent,
  ): TaskEvent {
    return {
      id: event.task_id,
      description: event.title,
      isCompleted: event.status === "done",
    };
  }
}

const kafka = new Kafka({
  clientId: "task-adapter",
  brokers: ["localhost:9092"],
});

const consumer = kafka.consumer({
  groupId: "task-adapter-group",
});

const producer = kafka.producer();

async function start(): Promise<void> {
  await consumer.connect();
  await producer.connect();

  await consumer.subscribe({
    topic: "third-party.tasks",
    fromBeginning: false,
  });

  await consumer.run({
    eachMessage: async ({ message }) => {
      if (!message.value) {
        return;
      }

      const externalEvent =
        JSON.parse(
          message.value.toString(),
        ) as ExternalTaskEvent;

      const taskEvent =
        TaskAdapter.fromExternal(externalEvent);

      await producer.send({
        topic: "tasks.normalized",
        messages: [
          {
            key: taskEvent.id,
            value: JSON.stringify(taskEvent),
          },
        ],
      });
    },
  });
}

void start().catch(async (error) => {
  console.error(error);
  await consumer.disconnect();
  await producer.disconnect();
});
`,
} satisfies PatternLanguageExample;