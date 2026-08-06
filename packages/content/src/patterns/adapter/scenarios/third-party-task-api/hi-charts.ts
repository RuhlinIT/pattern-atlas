import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const hicharts = {
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

function buildCompletionSeries(tasks: Task[]) {
  const completed = tasks.filter((task) => task.isCompleted).length;
  const pending = tasks.length - completed;

  return [
    { name: "Completed", y: completed },
    { name: "Pending", y: pending },
  ];
}

export function getHighchartsConfig(externalTasks: ExternalTask[]) {
  const tasks = TaskAdapter.fromExternalList(externalTasks);

  return {
    chart: { type: "pie" },
    title: { text: "Task Completion" },
    series: [
      {
        name: "Tasks",
        data: buildCompletionSeries(tasks),
      },
    ],
  };
}
`,
} satisfies PatternLanguageExample;