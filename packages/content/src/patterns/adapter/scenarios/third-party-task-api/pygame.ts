import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const pygame = {
  language: "python",
  code: `import pygame


class TaskAdapter:
    @staticmethod
    def from_external(task):
        return {
            "id": task["id"],
            "description": task["desc"],
            "is_completed": task["complete"] == 1,
        }

    @staticmethod
    def from_external_list(tasks):
        return [TaskAdapter.from_external(task) for task in tasks]


def fetch_tasks():
    return [
        {"id": "1", "desc": "Finish report", "complete": 1},
        {"id": "2", "desc": "Call client", "complete": 0},
    ]


pygame.init()
screen = pygame.display.set_mode((640, 480))
font = pygame.font.SysFont(None, 24)

tasks = TaskAdapter.from_external_list(fetch_tasks())
running = True

while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    screen.fill((255, 255, 255))

    for i, task in enumerate(tasks):
        text = f"{task['description']} {'✓' if task['is_completed'] else '✗'}"
        img = font.render(text, True, (0, 0, 0))
        screen.blit(img, (20, 20 + i * 30))

    pygame.display.flip()

pygame.quit()
`,
} satisfies PatternLanguageExample;