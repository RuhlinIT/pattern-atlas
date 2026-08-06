import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const chartJs = {
  language: "typescript",
  code: `import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
);

type ExternalTask = {
  task_id: string;
  title: string;
  status: "open" | "done";
};

type ChartData = {
  labels: string[];
  values: number[];
  colors: string[];
};

class TaskChartAdapter {
  static toChartData(
    tasks: ExternalTask[],
  ): ChartData {
    return {
      labels: tasks.map((task) => task.title),
      values: tasks.map((task) =>
        task.status === "done" ? 1 : 0
      ),
      colors: tasks.map((task) =>
        task.status === "done"
          ? "seagreen"
          : "lightgray"
      ),
    };
  }
}

class TaskChart {
  render(
    canvas: HTMLCanvasElement,
    tasks: ExternalTask[],
  ): Chart {
    const data = TaskChartAdapter.toChartData(tasks);

    return new Chart(canvas, {
      type: "bar",
      data: {
        labels: data.labels,
        datasets: [
          {
            label: "Task status",
            data: data.values,
            backgroundColor: data.colors,
          },
        ],
      },
      options: {
        scales: {
          y: {
            min: 0,
            max: 1,
            ticks: {
              stepSize: 1,
              callback: (value) =>
                value === 1
                  ? "Completed"
                  : "Pending",
            },
          },
        },
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

const canvas = document.querySelector(
  "#task-chart",
) as HTMLCanvasElement | null;

if (canvas) {
  new TaskChart().render(canvas, externalTasks);
}
`,
} satisfies PatternLanguageExample;