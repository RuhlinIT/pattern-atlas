import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const ruby = {
  language: "ruby",
  code: `Task = Struct.new(:id, :description, :is_completed, keyword_init: true)

ExternalTask = Struct.new(:id, :desc, :complete, keyword_init: true)

class TaskAdapter
  def self.from_external(task)
    Task.new(
      id: task.id,
      description: task.desc,
      is_completed: task.complete == 1
    )
  end

  def self.from_external_list(tasks)
    tasks.map { |task| from_external(task) }
  end
end

class TaskApiService
  def get_tasks
    [
      ExternalTask.new(id: "1", desc: "Finish report", complete: 1),
      ExternalTask.new(id: "2", desc: "Call client", complete: 0)
    ]
  end
end

class TaskService
  def initialize(api)
    @api = api
  end

  def get_tasks
    external_tasks = @api.get_tasks
    TaskAdapter.from_external_list(external_tasks)
  end
end

service = TaskService.new(TaskApiService.new)
puts service.get_tasks.length
`,
} satisfies PatternLanguageExample;