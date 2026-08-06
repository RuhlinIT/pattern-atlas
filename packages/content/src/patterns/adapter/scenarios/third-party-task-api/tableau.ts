import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const tableau = {
  language: "typescript",
  code: `import {
  TableauViz,
  TableauEventType,
} from "@tableau/embedding-api";

type Task = {
  id: string;
  description: string;
  isCompleted: boolean;
};

type ExternalTask = {
  task_id: string;
  title: string;
  status: "open" | "done";
};

type TableauTask = {
  TaskId: string;
  Description: string;
  Status: "Completed" | "Pending";
};

class TaskAdapter {
  static fromExternal(task: ExternalTask): Task {
    return {
      id: task.task_id,
      description: task.title,
      isCompleted: task.status === "done",
    };
  }

  static toTableauRow(task: ExternalTask): TableauTask {
    const adapted = TaskAdapter.fromExternal(task);

    return {
      TaskId: adapted.id,
      Description: adapted.description,
      Status: adapted.isCompleted
        ? "Completed"
        : "Pending",
    };
  }

  static toTableauRows(
    tasks: ExternalTask[],
  ): TableauTask[] {
    return tasks.map(TaskAdapter.toTableauRow);
  }
}

class TableauTaskAdapter {
  constructor(
    private readonly viewUrl: string,
  ) {}

  createViz(): TableauViz {
    const viz = new TableauViz();

    viz.src = this.viewUrl;
    viz.toolbar = "hidden";

    return viz;
  }

  async filterByStatus(
    viz: TableauViz,
    status: "Completed" | "Pending",
  ): Promise<void> {
    const sheet = viz.workbook.activeSheet;

    await sheet.applyFilterAsync(
      "Status",
      [status],
      "replace",
    );
  }
}

const externalTasks: ExternalTask[] = [
  {
    task_id: "1",
    title: "Finish report",
    status: "done",
  },
  {
    task_id: "2",
    title: "Call client",
    status: "open",
  },
];

const rows = TaskAdapter.toTableauRows(externalTasks);

const adapter = new TableauTaskAdapter(
  "https://tableau.example.com/views/tasks/overview",
);

const viz = adapter.createViz();
const container = document.getElementById("tableau-viz");

if (container) {
  container.appendChild(viz);

  viz.addEventListener(
    TableauEventType.FirstInteractive,
    async () => {
      await adapter.filterByStatus(viz, "Completed");
    },
  );
}

console.log(rows);
`,
} satisfies PatternLanguageExample;