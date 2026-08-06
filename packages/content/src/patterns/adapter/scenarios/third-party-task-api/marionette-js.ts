import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const marionetteJs = {
  language: "javascript",
  code: `var Task = Backbone.Model.extend({
  defaults: function () {
    return {
      id: "",
      description: "",
      isCompleted: false,
    };
  },
});

var TaskCollection = Backbone.Collection.extend({
  model: Task,
});

var TaskAdapter = {
  fromExternal: function (task) {
    return new Task({
      id: task.id,
      description: task.desc,
      isCompleted: task.complete === 1,
    });
  },

  fromExternalList: function (tasks) {
    return new TaskCollection(
      tasks.map(function (task) {
        return TaskAdapter.fromExternal(task);
      })
    );
  },
};

function fetchTasks() {
  return Promise.resolve([
    { id: "1", desc: "Finish report", complete: 1 },
    { id: "2", desc: "Call client", complete: 0 },
  ]);
}

var TaskItemView = Marionette.View.extend({
  template: function (data) {
    return "<span>" + data.description + "</span>";
  },
});

var TaskListView = Marionette.CollectionView.extend({
  childView: TaskItemView,
  el: "#app",

  initialize: function () {
    this.collection = new TaskCollection();
  },

  renderTasks: function () {
    this.render();
  },
});

var taskListView = new TaskListView();

fetchTasks().then(function (externalTasks) {
  taskListView.collection.reset(TaskAdapter.fromExternalList(externalTasks).models);
  taskListView.renderTasks();
});
`,
} satisfies PatternLanguageExample;