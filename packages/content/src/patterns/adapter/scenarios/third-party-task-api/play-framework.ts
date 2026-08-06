import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const playFramework = {
  language: "scala",
  code: `import javax.inject._
import play.api.mvc._
import scala.concurrent.ExecutionContext

case class Task(id: String, description: String, isCompleted: Boolean)
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

class TaskService @Inject() (api: TaskApiService) {
  def getTasks(): List[Task] = {
    val externalTasks = api.getTasks()
    TaskAdapter.fromExternalList(externalTasks)
  }
}

@Singleton
class TaskController @Inject() (
  cc: ControllerComponents,
  service: TaskService
)(implicit ec: ExecutionContext) extends AbstractController(cc) {

  def listTasks: Action[AnyContent] = Action {
    Ok(service.getTasks().size.toString)
  }
}
`,
} satisfies PatternLanguageExample;