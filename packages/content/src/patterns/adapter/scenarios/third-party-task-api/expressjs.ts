import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const expressjs = {
  language: "javascript",
  code: `const express = require("express");

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

const app = express();

app.get("/tasks", async (req, res) => {
  const externalTasks = await fetchTasks();
  res.json(TaskAdapter.fromExternalList(externalTasks));
});

app.listen(3000);
`,
} satisfies PatternLanguageExample;