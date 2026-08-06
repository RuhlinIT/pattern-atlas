import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const jquery = {
  language: "javascript",
  code: `function TaskAdapter() {}

TaskAdapter.fromExternal = function (task) {
  return {
    id: task.id,
    description: task.desc,
    isCompleted: task.complete === 1,
  };
};

TaskAdapter.fromExternalList = function (tasks) {
  return tasks.map(function (task) {
    return TaskAdapter.fromExternal(task);
  });
};

function fetchTasks() {
  return Promise.resolve([
    { id: "1", desc: "Finish report", complete: 1 },
    { id: "2", desc: "Call client", complete: 0 },
  ]);
}

$(function () {
  fetchTasks().then(function (externalTasks) {
    var tasks = TaskAdapter.fromExternalList(externalTasks);
    var html = tasks
      .map(function (task) {
        return (
          "<li>" +
          task.description +
          " " +
          (task.isCompleted ? "✓" : "✗") +
          "</li>"
        );
      })
      .join("");

    $("#task-list").html(html);
  });
});
`,
} satisfies PatternLanguageExample;