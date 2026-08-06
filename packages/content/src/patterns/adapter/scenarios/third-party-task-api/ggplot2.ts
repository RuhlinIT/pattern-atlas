import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const ggplot2 = {
  language: "r",
  code: `library(ggplot2)
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
      completed = task$status == "done"
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

    ggplot(data, aes(
      x = description,
      y = completed,
      fill = status
    )) +
      geom_col() +
      scale_y_continuous(
        breaks = c(FALSE, TRUE),
        labels = c("Pending", "Completed")
      ) +
      scale_fill_manual(
        values = c(
          Completed = "seagreen",
          Pending = "lightgray"
        )
      ) +
      labs(
        title = "Task Completion",
        x = "Task",
        y = "Status"
      ) +
      theme_minimal() +
      theme(
        axis.text.x = element_text(
          angle = 20,
          hjust = 1
        )
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
print(chart)
`,
} satisfies PatternLanguageExample;