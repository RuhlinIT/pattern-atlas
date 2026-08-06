import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angularJs = {
  language: "javascript",
  code: `angular.module("taskApp", [])
  .factory("TaskAdapter", function () {
    return {
      fromExternal: function (task) {
        return {
          id: task.id,
          description: task.desc,
          isCompleted: task.complete === 1,
        };
      },

      fromExternalList: function (tasks) {
        return tasks.map((task) => this.fromExternal(task));
      },
    };
  })
  .factory("TaskService", function ($q, TaskAdapter) {
    function fetchTasks() {
      return $q.resolve([
        { id: "1", desc: "Finish report", complete: 1 },
        { id: "2", desc: "Call client", complete: 0 },
      ]);
    }

    return {
      getTasks: function () {
        return fetchTasks().then(function (externalTasks) {
          return TaskAdapter.fromExternalList(externalTasks);
        });
      },
    };
  })
  .controller("TaskController", function ($scope, TaskService) {
    $scope.tasks = [];

    TaskService.getTasks().then(function (tasks) {
      $scope.tasks = tasks;
    });
  });
`,
} satisfies PatternLanguageExample;