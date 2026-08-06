import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const denojs = {
  language: "typescript",
  code: `type Task = {
  id: string;
  description: string;
  isCompleted: boolean;
};

type ExternalTask = {
  id: string;
  desc: string;
  complete: number;
};

class TaskAdapter {
  static fromExternal(task: ExternalTask): Task {
    return {
      id: task.id,
      description: task.desc,
      isCompleted: task.complete === 1,
    };
  }

  static fromExternalList(tasks: ExternalTask[]): Task[] {
    return tasks.map((task) => this.fromExternal(task));
  }
}

async function fetchTasks(): Promise<ExternalTask[]> {
  return [
    { id: "1", desc: "Finish report", complete: 1 },
    { id: "2", desc: "Call client", complete: 0 },
  ];
}

class TaskService {
  async getTasks(): Promise<Task[]> {
    const externalTasks = await fetchTasks();
    return TaskAdapter.fromExternalList(externalTasks);
  }
}

const service = new TaskService();
console.log(await service.getTasks());
`,
} satisfies PatternLanguageExample;