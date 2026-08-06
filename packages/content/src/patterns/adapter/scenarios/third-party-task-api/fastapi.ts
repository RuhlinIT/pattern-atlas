import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const fastapi = {
  language: "python",
  code: `from dataclasses import dataclass
from fastapi import FastAPI
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


class TaskApiService:
    def get_tasks(self) -> List[ExternalTask]:
        return [
            ExternalTask(id="1", desc="Finish report", complete=1),
            ExternalTask(id="2", desc="Call client", complete=0),
        ]


class TaskService:
    def __init__(self, api: TaskApiService) -> None:
        self.api = api

    def get_tasks(self) -> List[Task]:
        external_tasks = self.api.get_tasks()
        return TaskAdapter.from_external_list(external_tasks)


app = FastAPI()
service = TaskService(TaskApiService())


@app.get("/tasks")
def list_tasks():
    tasks = service.get_tasks()
    return tasks
`,
} satisfies PatternLanguageExample;