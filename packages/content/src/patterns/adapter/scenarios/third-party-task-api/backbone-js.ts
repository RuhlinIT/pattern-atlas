import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const backboneJs = {
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

var TaskView = Backbone.View.extend({
  el: "#app",

  initialize: function () {
    this.collection = new TaskCollection();
    this.listenTo(this.collection, "reset", this.render);
  },

  load: function () {
    var self = this;
    fetchTasks().then(function (externalTasks) {
      self.collection.reset(TaskAdapter.fromExternalList(externalTasks).models);
    });
  },

  render: function () {
    this.$el.html(
      "<ul>" +
        this.collection
          .map(function (task) {
            return (
              "<li>" +
              task.get("description") +
              " " +
              (task.get("isCompleted") ? "✓" : "✗") +
              "</li>"
            );
          })
          .join("") +
        "</ul>"
    );

    return this;
  },
});

var view = new TaskView();
view.load();
`,
} satisfies PatternLanguageExample;