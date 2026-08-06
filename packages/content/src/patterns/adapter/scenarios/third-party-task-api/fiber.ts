import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const fiber = {
  language: "go",
  code: `package main

import (
	"github.com/gofiber/fiber/v2"
)

type Task struct {
	ID          string
	Description string
	IsCompleted bool
}

type ExternalTask struct {
	ID       string
	Desc     string
	Complete int
}

type TaskAdapter struct{}

func (TaskAdapter) FromExternal(task ExternalTask) Task {
	return Task{
		ID:          task.ID,
		Description: task.Desc,
		IsCompleted: task.Complete == 1,
	}
}

func (a TaskAdapter) FromExternalList(tasks []ExternalTask) []Task {
	adapted := make([]Task, 0, len(tasks))
	for _, task := range tasks {
		adapted = append(adapted, a.FromExternal(task))
	}
	return adapted
}

func fetchTasks() []ExternalTask {
	return []ExternalTask{
		{ID: "1", Desc: "Finish report", Complete: 1},
		{ID: "2", Desc: "Call client", Complete: 0},
	}
}

type TaskService struct {
	adapter TaskAdapter
}

func NewTaskService(adapter TaskAdapter) TaskService {
	return TaskService{adapter: adapter}
}

func (s TaskService) GetTasks() []Task {
	return s.adapter.FromExternalList(fetchTasks())
}

func main() {
	app := fiber.New()
	service := NewTaskService(TaskAdapter{})

	app.Get("/tasks", func(c *fiber.Ctx) error {
		return c.JSON(service.GetTasks())
	})

	app.Listen(":3000")
}
`,
} satisfies PatternLanguageExample;