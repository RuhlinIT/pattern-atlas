import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const go = {
  language: "go",
  code: `package main

import "fmt"

type Task interface {
	Id() string
	Description() string
	IsCompleted() bool
}

type ExternalTask struct {
	ID       string
	Desc     string
	Complete int
}

type InternalTask struct {
	id          string
	description string
	completed   bool
}

func (t InternalTask) Id() string {
	return t.id
}

func (t InternalTask) Description() string {
	return t.description
}

func (t InternalTask) IsCompleted() bool {
	return t.completed
}

type TaskAdapter struct{}

func (TaskAdapter) FromExternal(task ExternalTask) Task {
	return InternalTask{
		id:          task.ID,
		description: task.Desc,
		completed:   task.Complete == 1,
	}
}

func (a TaskAdapter) FromExternalList(tasks []ExternalTask) []Task {
	adapted := make([]Task, 0, len(tasks))
	for _, task := range tasks {
		adapted = append(adapted, a.FromExternal(task))
	}
	return adapted
}

type TaskApiService struct{}

func (TaskApiService) GetTasks() []ExternalTask {
	return []ExternalTask{
		{ID: "1", Desc: "Finish report", Complete: 1},
		{ID: "2", Desc: "Call client", Complete: 0},
	}
}

type TaskService struct {
	api     TaskApiService
	adapter TaskAdapter
}

func NewTaskService(api TaskApiService, adapter TaskAdapter) TaskService {
	return TaskService{api: api, adapter: adapter}
}

func (s TaskService) GetTasks() []Task {
	externalTasks := s.api.GetTasks()
	return s.adapter.FromExternalList(externalTasks)
}

func main() {
	service := NewTaskService(TaskApiService{}, TaskAdapter{})
	tasks := service.GetTasks()
	fmt.Println(len(tasks))
}
`,
} satisfies PatternLanguageExample;