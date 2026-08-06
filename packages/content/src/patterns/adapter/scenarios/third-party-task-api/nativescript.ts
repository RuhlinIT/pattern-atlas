import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const nativescript = {
  language: "typescript",
  code: `import { ObservableArray } from "@nativescript/core";

type Task = {
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

export class TaskViewModel {
  tasks = new ObservableArray<Task>();

  loadTasks() {
    return fetchTasks().then((externalTasks) => {
      this.tasks.splice(0, this.tasks.length, ...TaskAdapter.fromExternalList(externalTasks));
    });
  }
}
`,
} satisfies PatternLanguageExample;