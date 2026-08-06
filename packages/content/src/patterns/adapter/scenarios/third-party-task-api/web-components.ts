import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const webComponents = {
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

class TaskListElement extends HTMLElement {
  set tasks(externalTasks: ExternalTask[]) {
    const tasks = TaskAdapter.fromExternalList(externalTasks);

    this.innerHTML = \`
      <ul>
        \${tasks
          .map(
            (task) =>
              \`<li>\${task.description} \${task.isCompleted ? "✓" : "✗"}</li>\`
          )
          .join("")}
      </ul>
    \`;
  }
}

customElements.define("task-list", TaskListElement);
`,
} satisfies PatternLanguageExample;