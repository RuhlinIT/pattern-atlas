import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const apacheSuperset = {
  language: "typescript",
  code: `import { embedDashboard } from
  "@superset-ui/embedded-sdk";

type ExternalTask = {
  task_id: string;
  title: string;
  status: "open" | "done";
};

type DashboardFilter = {
  Status: string[];
};

class TaskAdapter {
  static toDashboardFilter(
    tasks: ExternalTask[],
  ): DashboardFilter {
    const statuses = [
      ...new Set(
        tasks.map((task) =>
          task.status === "done"
            ? "Completed"
            : "Pending"
        ),
      ),
    ];

    return {
      Status: statuses,
    };
  }
}

class SupersetTaskAdapter {
  constructor(
    private readonly dashboardId: string,
    private readonly supersetDomain: string,
    private readonly fetchGuestToken: () => Promise<string>,
  ) {}

  async embed(
    container: HTMLElement,
    tasks: ExternalTask[],
  ): Promise<void> {
    const filter = TaskAdapter.toDashboardFilter(tasks);

    await embedDashboard({
      id: this.dashboardId,
      supersetDomain: this.supersetDomain,
      mountPoint: container,
      fetchGuestToken: this.fetchGuestToken,
      dashboardUiConfig: {
        hideTitle: true,
        hideTab: true,
        hideChartControls: true,
      },
      urlParams: {
        Status: filter.Status.join(","),
      },
    });
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

const container = document.querySelector(
  "#superset-dashboard",
) as HTMLElement | null;

if (container) {
  const adapter = new SupersetTaskAdapter(
    "dashboard-uuid",
    "https://superset.example.com",
    async () => {
      const response = await fetch(
        "/api/superset/guest-token",
      );

      if (!response.ok) {
        throw new Error(
          "Unable to obtain Superset guest token",
        );
      }

      const body = await response.json();
      return body.token;
    },
  );

  void adapter.embed(container, externalTasks);
}
`,
} satisfies PatternLanguageExample;