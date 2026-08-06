import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const monkeyEngine = {
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

function fetchTasks(): Promise<ExternalTask[]> {
  return Promise.resolve([
    { id: "1", desc: "Finish report", complete: 1 },
    { id: "2", desc: "Call client", complete: 0 },
  ]);
}

export class TaskScene {
  private tasks: Task[] = [];

  async init() {
    const externalTasks = await fetchTasks();
    this.tasks = TaskAdapter.fromExternalList(externalTasks);
  }

  render() {
    this.tasks.forEach((task, index) => {
      console.log(
        index,
        task.description,
        task.isCompleted ? "✓" : "✗"
      );
    });
  }
}
`,
} satisfies PatternLanguageExample;