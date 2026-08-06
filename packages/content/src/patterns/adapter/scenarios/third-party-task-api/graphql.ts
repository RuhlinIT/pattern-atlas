import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const graphql = {
  language: "typescript",
  code: `type Task = {
  id: string;
  description: string;
  isCompleted: boolean;
};

type GraphQLTask = {
  id: string;
  desc: string;
  complete: number;
};

type GraphQLTaskResponse = {
  data: {
    tasks: GraphQLTask[];
  };
};

interface GraphQLClient {
  query<T>(document: string): Promise<T>;
}

class TaskAdapter {
  static fromGraphQL(task: GraphQLTask): Task {
    return {
      id: task.id,
      description: task.desc,
      isCompleted: task.complete === 1,
    };
  }

  static fromGraphQLList(tasks: GraphQLTask[]): Task[] {
    return tasks.map((task) => this.fromGraphQL(task));
  }
}

const TASKS_QUERY = \`
  query GetTasks {
    tasks {
      id
      desc
      complete
    }
  }
\`;

class TaskService {
  constructor(
    private readonly client: GraphQLClient
  ) {}

  async getTasks(): Promise<Task[]> {
    const response = await this.client.query<GraphQLTaskResponse>(
      TASKS_QUERY
    );

    return TaskAdapter.fromGraphQLList(response.data.tasks);
  }
}

const client: GraphQLClient = {
  async query<T>() {
    return {
      data: {
        tasks: [
          { id: "1", desc: "Finish report", complete: 1 },
          { id: "2", desc: "Call client", complete: 0 },
        ],
      },
    } as T;
  },
};

const service = new TaskService(client);
service.getTasks().then(console.log);
`,
} satisfies PatternLanguageExample;