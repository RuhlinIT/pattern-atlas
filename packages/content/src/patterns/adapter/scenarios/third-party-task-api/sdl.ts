import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const sdl = {
  language: "cpp",
  code: `#include <SDL.h>
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

std::vector<ExternalTask> fetchTasks() {
    return {
        {"1", "Finish report", 1},
        {"2", "Call client", 0}
    };
}

int main(int argc, char* argv[]) {
    SDL_Init(SDL_INIT_VIDEO);

    SDL_Window* window = SDL_CreateWindow(
        "Tasks",
        SDL_WINDOWPOS_CENTERED,
        SDL_WINDOWPOS_CENTERED,
        640,
        480,
        SDL_WINDOW_SHOWN
    );

    std::vector<Task> tasks = TaskAdapter::fromExternalList(fetchTasks());

    SDL_Event event;
    bool running = true;

    while (running) {
        while (SDL_PollEvent(&event)) {
            if (event.type == SDL_QUIT) {
                running = false;
            }
        }

        SDL_Delay(16);
    }

    SDL_DestroyWindow(window);
    SDL_Quit();
    return 0;
}
`,
} satisfies PatternLanguageExample;