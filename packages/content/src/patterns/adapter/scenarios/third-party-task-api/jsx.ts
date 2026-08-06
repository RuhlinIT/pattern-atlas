import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const jsx = {
  language: "javascript",
  code: `import React, { useEffect, useState } from "react";

class TaskAdapter {
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

export function TaskList() {
  const [tasks, setTasks] = useState([]);

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