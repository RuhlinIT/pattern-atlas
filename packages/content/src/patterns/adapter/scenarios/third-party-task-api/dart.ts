import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const cplusplus = {
  language: "cpp",
  code: `#include <iostream>
#include <string>
#include <vector>

struct Task {
    std::string id;
    std::string description;
    bool isCompleted;
};

struct ExternalTask {
    std::string id;
    std::string desc;
    int complete;
};

class TaskAdapter {
public:
    static Task fromExternal(const ExternalTask& task) {
        return Task{
            task.id,
            task.desc,
            task.complete == 1
        };
    }

    static std::vector<Task> fromExternalList(const std::vector<ExternalTask>& tasks) {
        std::vector<Task> adapted;
        adapted.reserve(tasks.size());

        for (const auto& task : tasks) {
            adapted.push_back(fromExternal(task));
        }

        return adapted;
    }
};

class TaskService {
public:
    std::vector<Task> getTasks() {
        std::vector<ExternalTask> externalTasks = {
            {"1", "Finish report", 1},
            {"2", "Call client", 0}
        };

        return TaskAdapter::fromExternalList(externalTasks);
    }
};

int main() {
    TaskService service;
    auto tasks = service.getTasks();

    std::cout << tasks.size() << std::endl;
    return 0;
}
`,
} satisfies PatternLanguageExample;