import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const serverless = {
  language: "typescript",
  code: `import type {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
} from "aws-lambda";

type Task = {
  id: string;
  description: string;
  isCompleted: boolean;
};

type ExternalTask = {
  task_id: string;
  title: string;
  status: "open" | "done";
};

type TaskRequest = {
  userId: string;
};

class TaskAdapter {
  static fromExternal(task: ExternalTask): Task {
    return {
      id: task.task_id,
      description: task.title,
      isCompleted: task.status === "done",
    };
  }

  static fromExternalList(
    tasks: ExternalTask[],
  ): Task[] {
    return tasks.map(TaskAdapter.fromExternal);
  }
}

class ThirdPartyTaskClient {
  async getTasks(
    userId: string,
  ): Promise<ExternalTask[]> {
    const response = await fetch(
      \`https://tasks.example.com/users/\${userId}/tasks\`,
    );

    if (!response.ok) {
      throw new Error(
        \`Task API failed: \${response.status}\`,
      );
    }

    return await response.json() as ExternalTask[];
  }
}

class TaskService {
  constructor(
    private readonly client: ThirdPartyTaskClient,
  ) {}

  async getTasks(userId: string): Promise<Task[]> {
    const externalTasks =
      await this.client.getTasks(userId);

    return TaskAdapter.fromExternalList(
      externalTasks,
    );
  }
}

const service = new TaskService(
  new ThirdPartyTaskClient(),
);

export const handler = async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  try {
    const body = event.body
      ? JSON.parse(event.body)
      : {};

    const request: TaskRequest = {
      userId: body.userId ?? "anonymous",
    };

    const tasks = await service.getTasks(
      request.userId,
    );

    return {
      statusCode: 200,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        tasks,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        error: error instanceof Error
          ? error.message
          : "Unknown error",
      }),
    };
  }
};
`,
} satisfies PatternLanguageExample;