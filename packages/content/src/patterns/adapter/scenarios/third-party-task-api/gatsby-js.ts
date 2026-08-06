import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const gatsbyJs = {
  language: "javascript",
  code: `import React, { useEffect, useState } from "react";

function TaskAdapter() {}

TaskAdapter.fromExternal = function (task) {
  return {
    id: task.id,
    description: task.desc,
    isCompleted: task.complete === 1,
  };
};

TaskAdapter.fromExternalList = function (tasks) {
  return tasks.map((task) => TaskAdapter.fromExternal(task));
};

function fetchTasks() {
  return Promise.resolve([
    { id: "1", desc: "Finish report", complete: 1 },
    { id: "2", desc: "Call client", complete: 0 },
  ]);
}

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks().then((externalTasks) => {
      setTasks(TaskAdapter.fromExternalList(externalTasks));
    });
  }, []);

  return (
    <main>
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.description} {task.isCompleted ? "✓" : "✗"}
          </li>
        ))}
      </ul>
    </main>
  );
}
`,
} satisfies PatternLanguageExample;