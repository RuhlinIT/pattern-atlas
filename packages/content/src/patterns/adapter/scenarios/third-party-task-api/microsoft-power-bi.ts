import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const microsoftPowerBi = {
  language: "typescript",
  code: `import { models, service } from "powerbi-client";

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

type PowerBiTask = {
  TaskId: string;
  Description: string;
  Status: "Completed" | "Pending";
};

type PowerBiEmbedConfig = {
  type: "report";
  id: string;
  embedUrl: string;
  accessToken: string;
  tokenType: models.TokenType;
  permissions: models.Permissions;
  settings: {
    panes: {
      filters: {
        visible: boolean;
      };
    };
  };
};

class TaskAdapter {
  static fromExternal(task: ExternalTask): Task {
    return {
      id: task.task_id,
      description: task.title,
      isCompleted: task.status === "done",
    };
  }

  static toPowerBiRow(task: ExternalTask): PowerBiTask {
    const adapted = TaskAdapter.fromExternal(task);

    return {
      TaskId: adapted.id,
      Description: adapted.description,
      Status: adapted.isCompleted
        ? "Completed"
        : "Pending",
    };
  }

  static toPowerBiRows(
    tasks: ExternalTask[],
  ): PowerBiTask[] {
    return tasks.map(TaskAdapter.toPowerBiRow);
  }
}

class PowerBiTaskAdapter {
  constructor(
    private readonly reportId: string,
    private readonly embedUrl: string,
    private readonly accessToken: string,
  ) {}

  getEmbedConfig(): PowerBiEmbedConfig {
    return {
      type: "report",
      id: this.reportId,
      embedUrl: this.embedUrl,
      accessToken: this.accessToken,
      tokenType: models.TokenType.Embed,
      permissions: models.Permissions.Read,
      settings: {
        panes: {
          filters: {
            visible: false,
          },
        },
      },
    };
  }

  getStatusFilter(status: "Completed" | "Pending") {
    return {
      $schema:
        "http://powerbi.com/product/schema#basic",
      target: {
        table: "Tasks",
        column: "Status",
      },
      operator: "In",
      values: [status],
    };
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

const rows = TaskAdapter.toPowerBiRows(externalTasks);

const adapter = new PowerBiTaskAdapter(
  "report-id",
  "https://app.powerbi.com/reportEmbed",
  "embed-token",
);

const config = adapter.getEmbedConfig();
const container = document.getElementById("powerbi-report");

if (container) {
  const report = service.embed(container, config);
  void report.setFilters([
    adapter.getStatusFilter("Completed"),
  ]);
}

console.log(rows);
`,
} satisfies PatternLanguageExample;