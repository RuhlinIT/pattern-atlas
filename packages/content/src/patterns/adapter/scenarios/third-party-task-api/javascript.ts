import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const javascript = {
  language: "javascript",
  code: `class TaskAdapter {
  static fromExternal(task) {
    return {
      id: task.id,
      description: task.desc,
      isCompleted: task.complete === 1,
    };
  }

  static fromExternalList(tasks) {
    return tasks.map((task) => this.fromExternal(task));
  }
}

function fetchTasks() {
  return Promise.resolve([
    { id: "1", desc: "Finish report", complete: 1 },
    { id: "2", desc: "Call client", complete: 0 },
  ]);
}

class TaskService {
  async getTasks() {
    const externalTasks = await fetchTasks();
    return TaskAdapter.fromExternalList(externalTasks);
  }
}

const service = new TaskService();
service.getTasks().then(console.log);
`,
} satisfies PatternLanguageExample;