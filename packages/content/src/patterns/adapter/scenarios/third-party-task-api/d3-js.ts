import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const d3Js = {
  language: "typescript",
  code: `import * as d3 from "d3";

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

type ChartDatum = {
  label: string;
  value: number;
  status: "Completed" | "Pending";
};

class TaskAdapter {
  static fromExternal(task: ExternalTask): Task {
    return {
      id: task.task_id,
      description: task.title,
      isCompleted: task.status === "done",
    };
  }

  static toChartDatum(task: ExternalTask): ChartDatum {
    const adapted = TaskAdapter.fromExternal(task);

    return {
      label: adapted.description,
      value: adapted.isCompleted ? 1 : 0,
      status: adapted.isCompleted ? "Completed" : "Pending",
    };
  }

  static toChartData(tasks: ExternalTask[]): ChartDatum[] {
    return tasks.map(TaskAdapter.toChartDatum);
  }
}

class TaskChart {
  render(
    container: string,
    externalTasks: ExternalTask[],
  ): void {
    const data = TaskAdapter.toChartData(externalTasks);

    const width = 640;
    const height = 360;
    const margin = {
      top: 24,
      right: 24,
      bottom: 72,
      left: 48,
    };

    const svg = d3
      .select(container)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    const x = d3
      .scaleBand()
      .domain(data.map((task) => task.label))
      .range([margin.left, width - margin.right])
      .padding(0.2);

    const y = d3
      .scaleLinear()
      .domain([0, 1])
      .range([height - margin.bottom, margin.top]);

    svg
      .append("g")
      .attr("transform", \`translate(0,\${height - margin.bottom})\`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "rotate(-20)")
      .style("text-anchor", "end");

    svg
      .append("g")
      .attr("transform", \`translate(\${margin.left},0)\`)
      .call(
        d3.axisLeft(y).tickValues([0, 1])
      );

    svg
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", (task) => x(task.label) ?? 0)
      .attr("y", (task) => y(task.value))
      .attr("width", x.bandwidth())
      .attr("height", (task) =>
        height - margin.bottom - y(task.value)
      )
      .attr("fill", (task) =>
        task.status === "Completed"
          ? "seagreen"
          : "lightgray"
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

new TaskChart().render("#task-chart", externalTasks);
`,
} satisfies PatternLanguageExample;