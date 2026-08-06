import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typescript = {
  language: "typescript",
  code: `interface Task {
  id: string;
  description: string;
  isCompleted: boolean;
}

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

class TaskService {
  getTasks(): Task[] {
    const externalTasks: ExternalTask[] = [
      { id: "1", desc: "Finish report", complete: 1 },
      { id: "2", desc: "Call client", complete: 0 },
    ];

    return TaskAdapter.fromExternalList(externalTasks);
  }
}

const service = new TaskService();
console.log(service.getTasks());
`,
} satisfies PatternLanguageExample;