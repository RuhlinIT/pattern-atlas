import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const bokeh = {
  language: "python",
  code: `from typing import Any

from bokeh.models import ColumnDataSource
from bokeh.plotting import figure, show


class TaskAdapter:
    @staticmethod
    def to_bokeh_source(
        external_tasks: list[dict[str, Any]],
    ) -> ColumnDataSource:
        labels = [
            task["title"]
            for task in external_tasks
        ]

        values = [
            1 if task["status"] == "done" else 0
            for task in external_tasks
        ]

        statuses = [
            "Completed"
            if task["status"] == "done"
            else "Pending"
            for task in external_tasks
        ]

        colors = [
            "seagreen"
            if status == "Completed"
            else "lightgray"
            for status in statuses
        ]

        return ColumnDataSource({
            "label": labels,
            "value": values,
            "status": statuses,
            "color": colors,
        })


class TaskChart:
    def render(
        self,
        external_tasks: list[dict[str, Any]],
    ) -> None:
        source = TaskAdapter.to_bokeh_source(
            external_tasks
        )

        chart = figure(
            x_range=source.data["label"],
            height=360,
            title="Task Completion",
            toolbar_location=None,
        )

        chart.vbar(
            x="label",
            top="value",
            width=0.7,
            color="color",
            source=source,
        )

        chart.y_range.start = 0
        chart.y_range.end = 1
        chart.xaxis.major_label_orientation = 0.4
        chart.yaxis.axis_label = "Completion"
        chart.xaxis.axis_label = "Task"

        show(chart)


external_tasks = [
    {
        "task_id": "1",
        "title": "Finish report",
        "status": "done",
    },
    {
        "task_id": "2",
        "title": "Call client",
        "status": "open",
    },
]

TaskChart().render(external_tasks)
`,
} satisfies PatternLanguageExample;