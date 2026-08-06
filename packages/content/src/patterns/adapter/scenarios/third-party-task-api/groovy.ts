import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const groovy = {
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

def tasks = TaskAdapter.fromExternalList(fetchTasks())
println tasks.size()
`,
} satisfies PatternLanguageExample;