import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const nest = {
  language: "typescript",
  code: `import { Injectable } from "@nestjs/common";

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

@Injectable()
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

@Injectable()
export class TaskApiService {
  async getTasks(): Promise<ExternalTask[]> {
    return [
      { id: "1", desc: "Finish report", complete: 1 },
      { id: "2", desc: "Call client", complete: 0 },
    ];
  }
}

@Injectable()
export class TaskService {
  constructor(
    private readonly api: TaskApiService,
    private readonly adapter: TaskAdapter
  ) {}

  async getTasks(): Promise<Task[]> {
    const externalTasks = await this.api.getTasks();
    return this.adapter.fromExternalList(externalTasks);
  }
}
`,
} satisfies PatternLanguageExample;