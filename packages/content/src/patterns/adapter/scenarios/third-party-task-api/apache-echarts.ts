import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const apacheEcharts = {
  language: "typescript",
  code: `import * as echarts from "echarts";

type ExternalTask = {
  task_id: string;
  title: string;
  status: "open" | "done";
};

type EChartsOption = {
  title: {
    text: string;
  };
  tooltip: {
    trigger: "axis";
  };
  xAxis: {
    type: "category";
    data: string[];
  };
  yAxis: {
    type: "value";
    min: number;
    max: number;
  };
  series: {
    name: string;
    type: "bar";
    data: number[];
    itemStyle: {
      color: (params: { dataIndex: number }) =>
        string;
    };
  }[];
};

class TaskChartAdapter {
  static toEChartsOption(
    tasks: ExternalTask[],
  ): EChartsOption {
    const labels = tasks.map((task) => task.title);
    const values = tasks.map((task) =>
      task.status === "done" ? 1 : 0
    );

    return {
      title: {
        text: "Task Completion",
      },
      tooltip: {
        trigger: "axis",
      },
      xAxis: {
        type: "category",
        data: labels,
      },
      yAxis: {
        type: "value",
        min: 0,
        max: 1,
      },
      series: [
        {
          name: "Task status",
          type: "bar",
          data: values,
          itemStyle: {
            color: ({ dataIndex }) =>
              tasks[dataIndex].status === "done"
                ? "seagreen"
                : "lightgray",
          },
        },
      ],
    };
  }
}

class TaskChart {
  render(
    container: HTMLElement,
    tasks: ExternalTask[],
  ): echarts.ECharts {
    const chart = echarts.init(container);
    const option = TaskChartAdapter.toEChartsOption(tasks);

    chart.setOption(option);
    return chart;
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
  "#task-chart",
) as HTMLElement | null;

if (container) {
  new TaskChart().render(container, externalTasks);
}
`,
} satisfies PatternLanguageExample;