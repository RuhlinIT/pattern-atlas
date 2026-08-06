import type { PatternLanguageExample } from "@atlas-patterns/schemas";

export const livescript = {
  language: "livescript",
  code: `class Task
  (id, description, isCompleted) ->
    @id = id
    @description = description
    @isCompleted = isCompleted

class TaskAdapter
  @fromExternal = (task) ->
    new Task(
      task.task-id
      task.title
      task.status is \done
    )

  @fromExternalList = (tasks) ->
    tasks |> map TaskAdapter.fromExternal

class ThirdPartyTaskClient
  getTasks: ->
    Promise.resolve [
      {
        task-id: \x01
        title: \Finish report
        status: \done
      }
      {
        task-id: \x02
        title: \Call client
        status: \open
      }
    ]

class TaskService
  (client) ->
    @getTasks = ->
      @client.getTasks!
        .then TaskAdapter.fromExternalList

client = new ThirdPartyTaskClient!
service = new TaskService client

service.getTasks!
  .then (tasks) ->
    console.log tasks
`,
} satisfies PatternLanguageExample;