import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const tsx = {
  language: "typescript",
  code: `import React, { useEffect, useState } from "react";

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

export function TaskList(): JSX.Element {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks().then((data) => {
      setTasks(TaskAdapter.fromExternalList(data));
    });
  }, []);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.description} {task.isCompleted ? "✓" : "✗"}
        </li>
      ))}
    </ul>
  );
}
`,
} satisfies PatternLanguageExample;