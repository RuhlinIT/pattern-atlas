import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const react = {
  language: "react",
  code: `import { useEffect, useState } from "react";

type Task = {
  id: string;
  description: string;
  isCompleted: boolean;
};

type ExternalTask = {
  task_id: string;
  title: string;
  completed: number;
};

class TaskAdapter {
  static fromExternal(
    task: ExternalTask,
  ): Task {
    return {
      id: task.task_id,
      description: task.title,
      isCompleted: task.completed === 1,
    };
  }

  static fromExternalList(
    tasks: ExternalTask[],
  ): Task[] {
    return tasks.map(TaskAdapter.fromExternal);
  }
}

async function fetchTasks(): Promise<ExternalTask[]> {
  const response = await fetch(
    "https://third-party.example.com/tasks",
  );

  if (!response.ok) {
    throw new Error(
      \`Task request failed: \${response.status}\`,
    );
  }

  return response.json() as Promise<ExternalTask[]>;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<string | null>(
    null,
  );

  useEffect(() => {
    fetchTasks()
      .then(TaskAdapter.fromExternalList)
      .then(setTasks)
      .catch((requestError: Error) => {
        setError(requestError.message);
      });
  }, []);

  if (error) {
    return <p role="alert">{error}</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span>{task.description}</span>{" "}
          <span>
            {task.isCompleted
              ? "Completed"
              : "Pending"}
          </span>
        </li>
      ))}
    </ul>
  );
}
`,
} satisfies PatternLanguageExample;