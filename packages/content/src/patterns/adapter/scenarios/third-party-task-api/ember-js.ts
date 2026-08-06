import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const emberJs = {
  language: "javascript",
  code: `import EmberObject from "@ember/object";
import { A } from "@ember/array";

const TaskAdapter = EmberObject.extend({
  fromExternal(task) {
    return {
      id: task.id,
      description: task.desc,
      isCompleted: task.complete === 1,
    };
  },

  fromExternalList(tasks) {
    return tasks.map((task) => this.fromExternal(task));
  },
});

function fetchTasks() {
  return Promise.resolve([
    { id: "1", desc: "Finish report", complete: 1 },
    { id: "2", desc: "Call client", complete: 0 },
  ]);
}

const taskAdapter = TaskAdapter.create();

fetchTasks().then((externalTasks) => {
  const tasks = taskAdapter.fromExternalList(externalTasks);
  console.log(A(tasks).length);
});
`,
} satisfies PatternLanguageExample;