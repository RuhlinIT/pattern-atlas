import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const plotly = {
  language: "r",
  code: `library(plotly)
library(tibble)

TaskAdapter <- list(
  from_external = function(task) {
    tibble(
      id = as.character(task$task_id),
      description = task$title,
      status = ifelse(
        task$status == "done",
        "Completed",
        "Pending"
      ),
      completed = ifelse(
        task$status == "done",
        1,
        0
      )
    )
  },

  from_external_list = function(tasks) {
    rows <- lapply(tasks, TaskAdapter$from_external)
    do.call(rbind, rows)
  }
)

TaskChart <- list(
  render = function(external_tasks) {
    data <- TaskAdapter$from_external_list(external_tasks)

    plot_ly(
      data = data,
      x = ~description,
      y = ~completed,
      color = ~status,
      colors = c(
        Completed = "seagreen",
        Pending = "lightgray"
      ),
      type = "bar",
      hovertext = ~paste(
        "Task:", description,
        "<br>Status:", status
      ),
      hoverinfo = "text"
    ) |>
      layout(
        title = "Task Completion",
        xaxis = list(title = "Task"),
        yaxis = list(
          title = "Status",
          tickvals = c(0, 1),
          ticktext = c("Pending", "Completed")
        ),
        barmode = "group"
      )
  }
)

external_tasks <- list(
  list(
    task_id = "1",
    title = "Finish report",
    status = "done"
  ),
  list(
    task_id = "2",
    title = "Call client",
    status = "open"
  )
)

chart <- TaskChart$render(external_tasks)
chart
`,
} satisfies PatternLanguageExample;