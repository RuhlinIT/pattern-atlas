import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const typeorm = {
  language: "typescript",
  code: `import {
  Column,
  Entity,
  PrimaryColumn,
  Repository,
} from "typeorm";

type Task = {
  id: string;
  description: string;
  isCompleted: boolean;
};

type ExternalTask = {
  externalId: string;
  title: string;
  status: "open" | "done";
};

@Entity({ name: "tasks" })
class TaskEntity {
  @PrimaryColumn()
  id!: string;

  @Column()
  title!: string;

  @Column()
  status!: "open" | "done";
}

class TaskAdapter {
  static fromEntity(entity: TaskEntity): Task {
    return {
      id: entity.id,
      description: entity.title,
      isCompleted: entity.status === "done",
    };
  }

  static toEntity(task: ExternalTask): TaskEntity {
    const entity = new TaskEntity();

    entity.id = task.externalId;
    entity.title = task.title;
    entity.status = task.status;

    return entity;
  }
}

class TaskRepository {
  constructor(
    private readonly repository: Repository<TaskEntity>,
  ) {}

  async findAll(): Promise<Task[]> {
    const entities = await this.repository.find();

    return entities.map(TaskAdapter.fromEntity);
  }

  async saveExternalTask(
    externalTask: ExternalTask,
  ): Promise<Task> {
    const entity = TaskAdapter.toEntity(externalTask);
    const saved = await this.repository.save(entity);

    return TaskAdapter.fromEntity(saved);
  }
}
`,
} satisfies PatternLanguageExample;