import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const akka = {
  language: "scala",
  code: `case class Task(id: String, description: String, isCompleted: Boolean)

case class ExternalTask(id: String, desc: String, complete: Int)

object TaskAdapter {
  def fromExternal(task: ExternalTask): Task =
    Task(
      id = task.id,
      description = task.desc,
      isCompleted = task.complete == 1
    )

  def fromExternalList(tasks: List[ExternalTask]): List[Task] =
    tasks.map(fromExternal)
}

class TaskApiService {
  def getTasks(): List[ExternalTask] = List(
    ExternalTask("1", "Finish report", 1),
    ExternalTask("2", "Call client", 0)
  )
}

class TaskService(api: TaskApiService) {
  def getTasks(): List[Task] = {
    val externalTasks = api.getTasks()
    TaskAdapter.fromExternalList(externalTasks)
  }
}

object Main extends App {
  val service = new TaskService(new TaskApiService())
  println(service.getTasks().size)
}
`,
} satisfies PatternLanguageExample;