import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const sfml = {
  language: "cpp",
  code: `#include <SFML/Graphics.hpp>
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

int main() {
    sf::RenderWindow window(sf::VideoMode(640, 480), "Tasks");
    sf::Font font;
    font.loadFromFile("assets/arial.ttf");

    std::vector<Task> tasks = TaskAdapter::fromExternalList(fetchTasks());
    sf::Text text;
    text.setFont(font);
    text.setCharacterSize(20);
    text.setFillColor(sf::Color::Black);

    while (window.isOpen()) {
        sf::Event event;
        while (window.pollEvent(event)) {
            if (event.type == sf::Event::Closed) {
                window.close();
            }
        }

        window.clear(sf::Color::White);

        for (size_t i = 0; i < tasks.size(); ++i) {
            text.setString(tasks[i].description + (tasks[i].isCompleted ? " ✓" : " ✗"));
            text.setPosition(20.f, 20.f + static_cast<float>(i) * 28.f);
            window.draw(text);
        }

        window.display();
    }

    return 0;
}
`,
} satisfies PatternLanguageExample;