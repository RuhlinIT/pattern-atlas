import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const kotlinMultiplatform = {
  language: "kotlin",
  code: `data class Task(
    val id: String,
    val description: String,
    val isCompleted: Boolean
)

data class ExternalTask(
    val id: String,
    val desc: String,
    val complete: Int
)

object TaskAdapter {
    fun fromExternal(task: ExternalTask): Task {
        return Task(
            id = task.id,
            description = task.desc,
            isCompleted = task.complete == 1
        )
    }

    fun fromExternalList(tasks: List<ExternalTask>): List<Task> {
        return tasks.map { fromExternal(it) }
    }
}

class TaskApiService {
    fun getTasks(): List<ExternalTask> {
        return listOf(
            ExternalTask("1", "Finish report", 1),
            ExternalTask("2", "Call client", 0)
        )
    }
}

class TaskRepository(private val api: TaskApiService) {
    fun getTasks(): List<Task> {
        val externalTasks = api.getTasks()
        return TaskAdapter.fromExternalList(externalTasks)
    }
}
`,
} satisfies PatternLanguageExample;