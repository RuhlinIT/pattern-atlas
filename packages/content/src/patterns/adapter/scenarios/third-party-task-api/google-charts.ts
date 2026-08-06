import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const googleCharts = {
  language: "typescript",
  code: `type ExternalTask = {
  task_id: string;
  title: string;
  status: "open" | "done";
};

type GoogleChartRow = [
  string,
  number,
  string,
];

class GoogleChartsTaskAdapter {
  static toRows(
    tasks: ExternalTask[],
  ): GoogleChartRow[] {
    return tasks.map((task) => {
      const completed = task.status === "done";

      return [
        task.title,
        completed ? 1 : 0,
        completed ? "Completed" : "Pending",
      ];
    });
  }

  static toDataTable(
    tasks: ExternalTask[],
  ): google.visualization.DataTable {
    const table = new google.visualization.DataTable();

    table.addColumn("string", "Task");
    table.addColumn("number", "Completion");
    table.addColumn({
      type: "string",
      role: "tooltip",
    });

    table.addRows(
      GoogleChartsTaskAdapter.toRows(tasks),
    );

    return table;
  }
}

class TaskChart {
  render(
    container: HTMLElement,
    tasks: ExternalTask[],
  ): void {
    const data =
      GoogleChartsTaskAdapter.toDataTable(tasks);

    const chart = new google.visualization.BarChart(
      container,
    );

    chart.draw(data, {
      title: "Task Completion",
      legend: {
        position: "none",
      },
      hAxis: {
        minValue: 0,
        maxValue: 1,
        ticks: [
          {
            v: 0,
            f: "Pending",
          },
          {
            v: 1,
            f: "Completed",
          },
        ],
      },
      colors: ["seagreen"],
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

google.charts.load("current", {
  packages: ["corechart"],
});

google.charts.setOnLoadCallback(() => {
  const container = document.querySelector(
    "#task-chart",
  ) as HTMLElement | null;

  if (container) {
    new TaskChart().render(
      container,
      externalTasks,
    );
  }
});
`,
} satisfies PatternLanguageExample;