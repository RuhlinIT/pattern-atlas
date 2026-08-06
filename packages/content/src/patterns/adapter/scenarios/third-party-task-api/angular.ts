import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const angular = {
  language: "typescript",
  code: `import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

export interface Task {
  id: string;
  description: string;
  isCompleted: boolean;
}

export interface ExternalTask {
  id: string;
  desc: string;
  complete: number;
}

@Injectable({ providedIn: "root" })
export class TaskAdapter {
  fromExternal(task: ExternalTask): Task {
    return {
      id: task.id,
      description: task.desc,
      isCompleted: task.complete === 1,
    };
  }

  fromExternalList(tasks: ExternalTask[]): Task[] {
    return tasks.map((task) => this.fromExternal(task));
  }
}

@Injectable({ providedIn: "root" })
export class TaskApiService {
  getTasks(): Observable<ExternalTask[]> {
    return of([
      { id: "1", desc: "Finish report", complete: 1 },
      { id: "2", desc: "Call client", complete: 0 },
    ]);
  }
}

@Injectable({ providedIn: "root" })
export class TaskService {
  constructor(
    private readonly api: TaskApiService,
    private readonly adapter: TaskAdapter
  ) {}

  getTasks(): Observable<Task[]> {
    return this.api.getTasks().pipe(
      map((tasks) => this.adapter.fromExternalList(tasks))
    );
  }
}
`,
} satisfies PatternLanguageExample;