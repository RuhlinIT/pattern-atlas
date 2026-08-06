import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const phaser3 = {
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

export class TaskScene extends Phaser.Scene {
  private tasks: Task[] = [];

  constructor() {
    super({ key: "TaskScene" });
  }

  preload() {}

  create() {
    fetchTasks().then((externalTasks) => {
      this.tasks = TaskAdapter.fromExternalList(externalTasks);

      this.tasks.forEach((task, index) => {
        this.add.text(
          20,
          20 + index * 24,
          \`\${task.description} \${task.isCompleted ? "✓" : "✗"}\`
        );
      });
    });
  }
}
`,
} satisfies PatternLanguageExample;