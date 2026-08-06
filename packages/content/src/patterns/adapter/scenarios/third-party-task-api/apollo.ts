import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const apollo = {
  language: "typescript",
  code: `import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

type Task = {
  id: string;
  description: string;
  isCompleted: boolean;
};

type GraphQLTask = {
  id: string;
  desc: string;
  complete: number;
};

type TasksQueryResult = {
  tasks: GraphQLTask[];
};

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

const GET_TASKS = gql\`
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
    private readonly client: ApolloClient<unknown>
  ) {}

  async getTasks(): Promise<Task[]> {
    const result = await this.client.query<TasksQueryResult>({
      query: GET_TASKS,
    });

    return TaskAdapter.fromGraphQLList(result.data.tasks);
  }
}

const client = new ApolloClient({
  uri: "https://third-party.example.com/graphql",
  cache: new InMemoryCache(),
});

const service = new TaskService(client);
service.getTasks().then(console.log);
`,
} satisfies PatternLanguageExample;