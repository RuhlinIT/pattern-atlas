import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const knockoutJs = {
  language: "javascript",
  code: `function Task(data) {
  this.id = data.id;
  this.description = data.description;
  this.isCompleted = data.isCompleted;
}

const TaskAdapter = {
  fromExternal(task) {
    return new Task({
      id: task.id,
      description: task.desc,
      isCompleted: task.complete === 1,
    });
  },

  fromExternalList(tasks) {
    return tasks.map((task) => this.fromExternal(task));
  },
};

function fetchTasks() {
  return Promise.resolve([
    { id: "1", desc: "Finish report", complete: 1 },
    { id: "2", desc: "Call client", complete: 0 },
  ]);
}

function TaskViewModel() {
  this.tasks = ko.observableArray([]);

  this.loadTasks = () => {
    return fetchTasks().then((externalTasks) => {
      this.tasks(TaskAdapter.fromExternalList(externalTasks));
    });
  };
}

const vm = new TaskViewModel();
vm.loadTasks();
`,
} satisfies PatternLanguageExample;