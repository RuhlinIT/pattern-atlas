import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const gin = {
  language: "go",
  code: `package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type Task struct {
	ID          string \`json:"id"\`
	Description string \`json:"description"\`
	IsCompleted bool   \`json:"isCompleted"\`
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
	r := gin.Default()
	service := NewTaskService(TaskAdapter{})

	r.GET("/tasks", func(c *gin.Context) {
		c.JSON(http.StatusOK, service.GetTasks())
	})

	r.Run(":3000")
}
`,
} satisfies PatternLanguageExample;