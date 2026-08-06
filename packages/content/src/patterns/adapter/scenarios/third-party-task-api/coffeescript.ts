import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const coffeescript = {
  language: "coffeescript",
  code: `class Task
  constructor: (@id, @description, @isCompleted) ->

class ExternalTask
  constructor: (@task_id, @title, @status) ->

class TaskAdapter
  @fromExternal: (task) ->
    new Task(
      task.task_id,
      task.title,
      task.status is "done"
    )

  @fromExternalList: (tasks) ->
    tasks.map (task) =>
      TaskAdapter.fromExternal task

class TaskService
  constructor: (@client) ->

  getTasks: ->
    @client.getTasks()
      .then (externalTasks) ->
        TaskAdapter.fromExternalList externalTasks

class ThirdPartyTaskClient
  getTasks: ->
    Promise.resolve [
      new ExternalTask("1", "Finish report", "done")
      new ExternalTask("2", "Call client", "open")
    ]

client = new ThirdPartyTaskClient()
service = new TaskService(client)

service.getTasks()
  .then (tasks) ->
    console.log tasks
`,
} satisfies PatternLanguageExample;