import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const grails = {
  language: "groovy",
  code: `class TaskAdapter {
    static Map fromExternal(Map task) {
        [
            id: task.id,
            description: task.desc,
            isCompleted: task.complete == 1
        ]
    }

    static List<Map> fromExternalList(List<Map> tasks) {
        tasks.collect { fromExternal(it) }
    }
}

List<Map> fetchTasks() {
    [
        [id: '1', desc: 'Finish report', complete: 1],
        [id: '2', desc: 'Call client', complete: 0]
    ]
}

class TaskService {
    List<Map> getTasks() {
        def externalTasks = fetchTasks()
        TaskAdapter.fromExternalList(externalTasks)
    }
}

def service = new TaskService()
println service.getTasks().size()
`,
} satisfies PatternLanguageExample;