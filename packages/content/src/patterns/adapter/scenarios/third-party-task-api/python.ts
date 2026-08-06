import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const python = {
  language: "python",
  code: `from dataclasses import dataclass
from typing import List


@dataclass
class Task:
    id: str
    description: str
    is_completed: bool


@dataclass
class ExternalTask:
    id: str
    desc: str
    complete: int


class TaskAdapter:
    @staticmethod
    def from_external(task: ExternalTask) -> Task:
        return Task(
            id=task.id,
            description=task.desc,
            is_completed=task.complete == 1,
        )

    @staticmethod
    def from_external_list(tasks: List[ExternalTask]) -> List[Task]:
        return [TaskAdapter.from_external(task) for task in tasks]


class TaskService:
    def get_tasks(self) -> List[Task]:
        external_tasks = [
            ExternalTask(id="1", desc="Finish report", complete=1),
            ExternalTask(id="2", desc="Call client", complete=0),
        ]
        return TaskAdapter.from_external_list(external_tasks)


service = TaskService()
print(service.get_tasks())
`,
} satisfies PatternLanguageExample;