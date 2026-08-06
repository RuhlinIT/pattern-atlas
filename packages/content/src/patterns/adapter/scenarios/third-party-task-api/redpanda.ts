import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const redpanda = {
  language: "typescript",
  code: `import { Kafka } from "kafkajs";

type ExternalTask = {
  task_id: string;
  title: string;
  status: "open" | "done";
};

type Task = {
  id: string;
  description: string;
  isCompleted: boolean;
};

class TaskAdapter {
  static fromExternal(
    task: ExternalTask,
  ): Task {
    return {
      id: task.task_id,
      description: task.title,
      isCompleted: task.status === "done",
    };
  }
}

const redpanda = new Kafka({
  clientId: "task-adapter",
  brokers: ["localhost:9092"],
});

const consumer = redpanda.consumer({
  groupId: "task-adapter-group",
});

const producer = redpanda.producer();

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

      const externalTask =
        JSON.parse(
          message.value.toString(),
        ) as ExternalTask;

      const task =
        TaskAdapter.fromExternal(externalTask);

      await producer.send({
        topic: "tasks.normalized",
        messages: [
          {
            key: task.id,
            value: JSON.stringify(task),
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