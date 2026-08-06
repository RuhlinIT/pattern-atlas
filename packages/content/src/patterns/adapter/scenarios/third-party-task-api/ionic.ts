import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const ionic = {
  language: "typescript",
  code: `import { Component, OnInit } from "@angular/core";

type Task = {
  id: string;
  description: string;
  isCompleted: boolean;
};

type ExternalTask = {
  id: string;
  desc: string;
  complete: number;
};

class TaskAdapter {
  static fromExternal(task: ExternalTask): Task {
    return {
      id: task.id,
      description: task.desc,
      isCompleted: task.complete === 1,
    };
  }

  static fromExternalList(tasks: ExternalTask[]): Task[] {
    return tasks.map((task) => this.fromExternal(task));
  }
}

function fetchTasks(): Promise<ExternalTask[]> {
  return Promise.resolve([
    { id: "1", desc: "Finish report", complete: 1 },
    { id: "2", desc: "Call client", complete: 0 },
  ]);
}

@Component({
  selector: "app-task-list",
  template: \`
    <ion-header>
      <ion-toolbar>
        <ion-title>Tasks</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item *ngFor="let task of tasks">
          {{ task.description }} {{ task.isCompleted ? "✓" : "✗" }}
        </ion-item>
      </ion-list>
    </ion-content>
  \`,
})
export class TaskListPage implements OnInit {
  tasks: Task[] = [];

  ngOnInit() {
    fetchTasks().then((externalTasks) => {
      this.tasks = TaskAdapter.fromExternalList(externalTasks);
    });
  }
}
`,
} satisfies PatternLanguageExample;