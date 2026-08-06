import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const prisma = {
  language: "typescript",
  code: `type Task = {
  id: string;
  description: string;
  isCompleted: boolean;
};

type PrismaTaskRecord = {
  id: string;
  title: string;
  done: boolean;
};

class TaskAdapter {
  static fromPrisma(record: PrismaTaskRecord): Task {
    return {
      id: record.id,
      description: record.title,
      isCompleted: record.done,
    };
  }

  static fromPrismaList(records: PrismaTaskRecord[]): Task[] {
    return records.map((record) => this.fromPrisma(record));
  }
}

class TaskRepository {
  async findMany(): Promise<PrismaTaskRecord[]> {
    return [
      { id: "1", title: "Finish report", done: true },
      { id: "2", title: "Call client", done: false },
    ];
  }
}

class TaskService {
  constructor(private readonly repository: TaskRepository) {}

  async getTasks(): Promise<Task[]> {
    const records = await this.repository.findMany();
    return TaskAdapter.fromPrismaList(records);
  }
}

async function main() {
  const service = new TaskService(new TaskRepository());
  const tasks = await service.getTasks();
  console.log(tasks.length);
}

main();
`,
} satisfies PatternLanguageExample;