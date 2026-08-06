import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const r = {
  language: "r",
  code: `TaskAdapter <- function(task) {
  list(
    id = task$id,
    description = task$desc,
    is_completed = task$complete == 1
  )
}

TaskAdapterList <- function(tasks) {
  lapply(tasks, TaskAdapter)
}

fetch_tasks <- function() {
  list(
    list(id = "1", desc = "Finish report", complete = 1),
    list(id = "2", desc = "Call client", complete = 0)
  )
}

TaskService <- function() {
  list(
    get_tasks = function() {
      external_tasks <- fetch_tasks()
      TaskAdapterList(external_tasks)
    }
  )
}

service <- TaskService()
tasks <- service$get_tasks()
print(length(tasks))
`,
} satisfies PatternLanguageExample;
