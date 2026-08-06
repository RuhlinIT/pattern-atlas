import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const swift = {
  language: "swift",
  code: `import Foundation

struct Task {
    let id: String
    let description: String
    let isCompleted: Bool
}

struct ExternalTask {
    let id: String
    let desc: String
    let complete: Int
}

protocol TaskAdaptable {
    func fromExternal(_ task: ExternalTask) -> Task
    func fromExternalList(_ tasks: [ExternalTask]) -> [Task]
}

final class TaskAdapter: TaskAdaptable {
    func fromExternal(_ task: ExternalTask) -> Task {
        return Task(
            id: task.id,
            description: task.desc,
            isCompleted: task.complete == 1
        )
    }

    func fromExternalList(_ tasks: [ExternalTask]) -> [Task] {
        return tasks.map { fromExternal($0) }
    }
}

final class TaskService {
    private let adapter: TaskAdaptable

    init(adapter: TaskAdaptable) {
        self.adapter = adapter
    }

    func getTasks() async -> [Task] {
        let externalTasks = [
            ExternalTask(id: "1", desc: "Finish report", complete: 1),
            ExternalTask(id: "2", desc: "Call client", complete: 0)
        ]

        return adapter.fromExternalList(externalTasks)
    }
}
`,
} satisfies PatternLanguageExample;