import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const meteorJs = {
  language: "javascript",
  code: `TaskAdapter = {
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
};

fetchTasks = function () {
  return Promise.resolve([
    { id: "1", desc: "Finish report", complete: 1 },
    { id: "2", desc: "Call client", complete: 0 },
  ]);
};

TaskService = {
  getTasks() {
    return fetchTasks().then((externalTasks) =>
      TaskAdapter.fromExternalList(externalTasks)
    );
  },
};

if (Meteor.isClient) {
  Template.taskList.helpers({
    tasks() {
      return Session.get("tasks") || [];
    },
  });

  Meteor.startup(function () {
    TaskService.getTasks().then(function (tasks) {
      Session.set("tasks", tasks);
    });
  });
}
`,
} satisfies PatternLanguageExample;